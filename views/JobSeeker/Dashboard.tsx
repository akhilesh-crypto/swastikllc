import React from 'react';
import { User } from '../../types';
import { MOCK_JOBS, MOCK_APPLICATIONS } from '../../constants';

interface JobSeekerDashboardProps {
  seeker: User;
}

const JobSeekerDashboard: React.FC<JobSeekerDashboardProps> = ({ seeker }) => {
  const myApps = MOCK_APPLICATIONS.filter(a => a.seekerId === seeker.id || a.seekerId === 's1');
  
  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white shadow-xl shadow-slate-200">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Your Next <br /><span className="text-red-500">Global Opportunity.</span></h1>
          <p className="text-slate-400 max-w-md mb-8">Connect with top-tier employers across the world with seamless tracking and real-time updates.</p>
          <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2 max-w-xl">
            <input type="text" placeholder="Job title or keywords" className="bg-transparent flex-1 px-4 py-3 outline-none placeholder:text-slate-500 font-medium" />
            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">Search Jobs</button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC2626" d="M47.5,-59.2C60.7,-48.7,70,-32.1,72.9,-14.8C75.8,2.5,72.2,20.4,63.1,35.1C53.9,49.8,39.1,61.2,22.4,66.8C5.7,72.4,-13,72.2,-30,65.8C-47,59.3,-62.4,46.5,-69.5,30.3C-76.6,14.1,-75.5,-5.5,-68,-22.4C-60.5,-39.3,-46.6,-53.4,-31.1,-63.1C-15.6,-72.8,1.6,-78.1,18.7,-74.6C35.8,-71.1,52.8,-58.8,66,-48.3L47.5,-59.2Z" transform="translate(100 100)" />
           </svg>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recommended for you</h3>
          <div className="grid gap-4">
            {MOCK_JOBS.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-red-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-xl">
                    {job.employerName[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{job.title}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{job.employerName} • {job.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-800">{job.salaryRange}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Full-Time</p>
                  </div>
                  <button className="bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 px-5 py-2.5 rounded-xl font-bold transition-all border border-transparent hover:border-red-100">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Your Applications</h3>
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <div className="space-y-6">
              {myApps.map(app => (
                <div key={app.id} className="relative pl-6 border-l-2 border-slate-50 last:border-transparent">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-red-500" />
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">{app.updatedAt}</p>
                  <h4 className="text-sm font-bold text-slate-800">{app.jobTitle}</h4>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-[10px] font-extrabold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">{app.status}</span>
                  </div>
                </div>
              ))}
              {myApps.length === 0 && <p className="text-slate-400 text-sm italic">No active applications.</p>}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-200">
              View All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;