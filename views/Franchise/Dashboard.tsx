
import React from 'react';
import { User, ApplicationStatus } from '../../types';
import { MOCK_EARNINGS, MOCK_APPLICATIONS } from '../../constants';

interface FranchiseDashboardProps {
  franchise: User;
}

const FranchiseDashboard: React.FC<FranchiseDashboardProps> = ({ franchise }) => {
  const myEarnings = MOCK_EARNINGS.filter(e => e.franchiseId === franchise.id || e.franchiseId === 'f1');
  const myApps = MOCK_APPLICATIONS.filter(a => a.franchiseId === franchise.id || a.franchiseId === 'f1');
  const totalEarnings = myEarnings.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Partner Dashboard</h1>
        <p className="text-slate-500">Welcome back, {franchise.name}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-3xl shadow-lg shadow-red-200 text-white">
          <p className="text-red-100 font-bold text-xs uppercase tracking-widest mb-2">Total Earnings</p>
          <p className="text-4xl font-extrabold mb-4 font-mono">₹{totalEarnings.toLocaleString()}</p>
          <div className="h-1 w-full bg-white/20 rounded-full">
            <div className="h-full bg-white w-2/3 rounded-full" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Referred Candidates</p>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">{myApps.length}</p>
          <div className="flex items-center text-green-600 text-xs font-bold">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            +12% from last month
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Successful Placements</p>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">
            {myApps.filter(a => a.status === ApplicationStatus.SELECTED).length}
          </p>
          <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
            Selection Rate: 33%
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Placement History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
                <th className="pb-4 px-2">Candidate</th>
                <th className="pb-4 px-2">Job Title</th>
                <th className="pb-4 px-2">Earning</th>
                <th className="pb-4 px-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {myEarnings.slice(0, 5).map(e => (
                <tr key={e.id} className="text-sm">
                  <td className="py-4 px-2 font-bold text-slate-800">{e.source.split(': ')[1]}</td>
                  <td className="py-4 px-2 text-slate-500 font-medium">{e.source.split(': ')[0]}</td>
                  <td className="py-4 px-2 text-green-600 font-bold">+₹{e.amount.toLocaleString()}</td>
                  <td className="py-4 px-2 text-slate-400">{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FranchiseDashboard;
