
import React from 'react';
import { MOCK_EARNINGS } from '../../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EarningsProps {
  franchiseId: string;
}

const Earnings: React.FC<EarningsProps> = ({ franchiseId }) => {
  const myEarnings = MOCK_EARNINGS.filter(e => e.franchiseId === franchiseId);
  const total = myEarnings.reduce((acc, curr) => acc + curr.amount, 0);

  // Group by date for chart
  const chartData = myEarnings.map(e => ({
    date: e.date,
    amount: e.amount
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Earnings</h1>
          <p className="text-slate-500">Track your referral revenue and performance</p>
        </div>
        <div className="bg-red-50 px-6 py-3 rounded-2xl border border-red-100">
          <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Total Earnings</p>
          <p className="text-3xl font-extrabold text-red-700 font-mono">₹{total.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Earnings Timeline</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip 
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Amount']}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#DC2626" fillOpacity={1} fill="url(#colorAmount)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Payout History</h3>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {myEarnings.map(e => (
              <div key={e.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-slate-800 line-clamp-1">{e.source}</p>
                  <p className="text-xs text-slate-400 font-medium">{e.date}</p>
                </div>
                <span className="text-sm font-bold text-green-600">+₹{e.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
