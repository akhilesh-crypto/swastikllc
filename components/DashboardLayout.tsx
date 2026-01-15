import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User, UserRole } from '../types';
import { LOGO_SVG } from '../constants';
import Banner from './Banner';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
}

const SidebarItem: React.FC<{ to: string; label: string; icon: React.ReactNode; active: boolean }> = ({ to, label, icon, active }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
      active ? 'bg-red-50 text-red-600' : 'text-slate-600 hover:bg-slate-50'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout }) => {
  const location = useLocation();

  const menuItems = [
    { to: '/dashboard', label: 'Dashboard', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { to: '/progress', label: 'Selection Progress', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )},
  ];

  if (user.role === UserRole.SUPER_ADMIN) {
    menuItems.push({ to: '/service-charges', label: 'Service Charges', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )});
  }

  if (user.role === UserRole.FRANCHISE) {
    menuItems.push({ to: '/earnings', label: 'My Earnings', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )});
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col flex-shrink-0">
        <div className="p-6">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              {LOGO_SVG()}
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">swastikllc</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              active={location.pathname === item.to}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                {user.name?.[0] || 'U'}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{user.role.replace('_', ' ')}</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="w-full flex items-center justify-center space-x-2 p-2 bg-white text-slate-600 hover:text-red-600 border border-slate-200 rounded-xl transition-all font-bold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between">
           <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              {LOGO_SVG()}
            </div>
            <span className="text-lg font-black text-slate-900">swastikllc</span>
          </Link>
          <button onClick={onLogout} className="text-slate-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;