import React from 'react';
import { User, UserRole } from '../types';
import { generateUniqueId, LOGO_SVG } from '../constants';
import Banner from '../components/Banner';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const roles = [
    { role: UserRole.SUPER_ADMIN, name: 'Super Admin', desc: 'Global system control' },
    { role: UserRole.FRANCHISE, name: 'Franchise Partner', desc: 'Recruitment & earnings' },
    { role: UserRole.EMPLOYER, name: 'Employer', desc: 'Post jobs & select talent' },
    { role: UserRole.JOB_SEEKER, name: 'Job Seeker', desc: 'Find your dream career' },
  ];

  const handleRoleSelect = (role: UserRole) => {
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      uniqueId: generateUniqueId(role),
      name: `Demo ${role.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}`,
      email: `${role.toLowerCase()}@swastikllc.com`,
      role: role,
      country: 'India',
    };
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-10 text-center">
          <Banner />
          <h1 className="text-3xl font-extrabold text-slate-900 mt-4">Talent Management Hub</h1>
          <p className="text-slate-500 font-medium">Empowering global connections</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Select your role to continue</h2>
          
          <div className="grid gap-4">
            {roles.map((item) => (
              <button
                key={item.role}
                onClick={() => handleRoleSelect(item.role)}
                className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-red-200 hover:bg-red-50/50 transition-all text-left"
              >
                <div>
                  <h3 className="font-bold text-slate-800 group-hover:text-red-600 transition-colors">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">© 2024 swastikllc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;