
import React from 'react';
import { Application, ApplicationStatus, User, UserRole } from '../../types';
import { MOCK_APPLICATIONS } from '../../constants';

interface SelectionProgressProps {
  user: User;
}

const StatusBadge: React.FC<{ status: ApplicationStatus }> = ({ status }) => {
  const colors: Record<ApplicationStatus, string> = {
    [ApplicationStatus.APPLIED]: 'bg-blue-50 text-blue-600',
    [ApplicationStatus.SHORTLISTED]: 'bg-amber-50 text-amber-600',
    [ApplicationStatus.INTERVIEWING]: 'bg-purple-50 text-purple-600',
    [ApplicationStatus.SELECTED]: 'bg-green-50 text-green-600',
    [ApplicationStatus.REJECTED]: 'bg-red-50 text-red-600',
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${colors[status]}`}>
      {status}
    </span>
  );
};

const SelectionProgress: React.FC<SelectionProgressProps> = ({ user }) => {
  // Filter apps based on role
  let visibleApps = MOCK_APPLICATIONS;
  if (user.role === UserRole.EMPLOYER) {
    visibleApps = MOCK_APPLICATIONS.filter(a => a.employerId === user.id || a.employerId === 'emp1'); // Mock logic
  } else if (user.role === UserRole.JOB_SEEKER) {
    visibleApps = MOCK_APPLICATIONS.filter(a => a.seekerId === user.id || a.seekerId === 's1'); // Mock logic
  } else if (user.role === UserRole.FRANCHISE) {
    visibleApps = MOCK_APPLICATIONS.filter(a => a.franchiseId === user.id || a.franchiseId === 'f1'); // Mock logic
  }

  const stages = [
    ApplicationStatus.APPLIED,
    ApplicationStatus.SHORTLISTED,
    ApplicationStatus.INTERVIEWING,
    ApplicationStatus.SELECTED
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Real-Time Selection Progress</h1>
        <p className="text-slate-500">Live monitoring of recruitment pipelines</p>
      </div>

      <div className="grid gap-6">
        {visibleApps.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{app.jobTitle}</h3>
                <p className="text-sm text-slate-400">Candidate: <span className="text-slate-600 font-semibold">{app.seekerName}</span></p>
              </div>
              <div className="flex items-center space-x-3">
                 <p className="text-xs text-slate-400 font-medium">Last update: {app.updatedAt}</p>
                 <StatusBadge status={app.status} />
              </div>
            </div>

            {/* Pipeline Visualizer */}
            <div className="relative pt-8 pb-4">
               {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-600 transition-all duration-1000" 
                  style={{ width: `${((stages.indexOf(app.status) + 1) / stages.length) * 100}%` }}
                />
              </div>

              {/* Dots */}
              <div className="relative flex justify-between">
                {stages.map((stage, idx) => {
                  const isActive = stages.indexOf(app.status) >= idx;
                  const isCurrent = app.status === stage;
                  
                  return (
                    <div key={stage} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all z-10 ${
                        isActive ? 'bg-red-600 border-red-100' : 'bg-white border-slate-100'
                      } ${isCurrent ? 'ring-4 ring-red-50 scale-110' : ''}`}>
                        {isActive && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        )}
                      </div>
                      <span className={`mt-3 text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-red-600' : 'text-slate-300'
                      }`}>
                        {stage}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}

        {visibleApps.length === 0 && (
          <div className="bg-white py-20 rounded-3xl border-2 border-dashed border-slate-200 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full text-slate-300 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800">No active selections found</h3>
            <p className="text-slate-400">Active applications will appear here in real-time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionProgress;
