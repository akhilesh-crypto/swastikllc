
import React from 'react';
import { MOCK_JOBS, MOCK_APPLICATIONS, MOCK_SERVICE_CHARGES } from '../../constants';

const StatCard: React.FC<{ label: string; value: string | number; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

const SuperAdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">System Overview</h1>
        <p className="text-slate-500">Global talent management metrics at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Jobs" 
          value={MOCK_JOBS.length} 
          color="bg-blue-50 text-blue-600"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        />
        <StatCard 
          label="Active Selections" 
          value={MOCK_APPLICATIONS.length} 
          color="bg-purple-50 text-purple-600"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
        <StatCard 
          label="Countries" 
          value={MOCK_SERVICE_CHARGES.length} 
          color="bg-green-50 text-green-600"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          label="Total Revenue" 
          value="₹18.4L" 
          color="bg-red-50 text-red-600"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activities</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 ring-4 ring-red-50" />
                <div className="flex-1">
                  <p className="text-sm text-slate-800 font-medium">New job seeker registered: <span className="text-slate-400">Johnathan Wick (SEK-2241)</span></p>
                  <p className="text-xs text-slate-400 font-bold mt-1 uppercase">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <h3 className="text-lg font-bold text-slate-800 mb-6">Country Distributions</h3>
           <div className="space-y-4">
              {MOCK_SERVICE_CHARGES.map(sc => (
                <div key={sc.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-slate-600">{sc.country}</span>
                    <span className="text-slate-400 font-bold">42%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
