
import React from 'react';
import { User, ApplicationStatus } from '../../types';
import { MOCK_JOBS, MOCK_APPLICATIONS } from '../../constants';

interface EmployerDashboardProps {
  employer: User;
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({ employer }) => {
  const myJobs = MOCK_JOBS.filter(j => j.employerId === employer.id || j.employerId === 'emp1');
  const myApps = MOCK_APPLICATIONS.filter(a => a.employerId === employer.id || a.employerId === 'emp1');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Recruiter Dashboard</h1>
          <p className="text-slate-500">Manage your postings and hiring pipeline</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center space-x-2 shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          <span>Post a Job</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Jobs ({myJobs.length})</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {myJobs.map(job => (
              <div key={job.id} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-red-100 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md tracking-tighter">Active</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-1 group-hover:text-red-600 transition-colors">{job.title}</h4>
                <p className="text-xs text-slate-400 font-medium mb-4">{job.location} • {job.salaryRange}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">+12 Applicants</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recent Applications</h3>
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
            {myApps.slice(0, 5).map(app => (
              <div key={app.id} className="p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    {app.seekerName[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{app.seekerName}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase truncate">{app.jobTitle}</p>
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase ${app.status === ApplicationStatus.SELECTED ? 'text-green-600' : 'text-slate-400'}`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
            <button className="w-full p-4 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors">
              View All Applications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
