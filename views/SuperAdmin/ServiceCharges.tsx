
import React, { useState } from 'react';
import { MOCK_SERVICE_CHARGES } from '../../constants';
import { ServiceCharge } from '../../types';

const ServiceCharges: React.FC = () => {
  const [charges, setCharges] = useState<ServiceCharge[]>(MOCK_SERVICE_CHARGES);
  const [isAdding, setIsAdding] = useState(false);
  const [newCharge, setNewCharge] = useState({ country: '', amount: 0 });

  const handleAdd = () => {
    if (!newCharge.country || newCharge.amount <= 0) return;
    const item: ServiceCharge = {
      id: Math.random().toString(),
      country: newCharge.country,
      amount: newCharge.amount,
      currency: 'INR'
    };
    setCharges([...charges, item]);
    setIsAdding(false);
    setNewCharge({ country: '', amount: 0 });
  };

  const handleDelete = (id: string) => {
    setCharges(charges.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Service Charges</h1>
          <p className="text-slate-500">Configure global recruitment service fees by country</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          <span>Add New</span>
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-end gap-4 animate-in fade-in duration-300">
          <div className="flex-1 space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Country Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none transition-all"
              placeholder="e.g. Canada"
              value={newCharge.country}
              onChange={e => setNewCharge({ ...newCharge, country: e.target.value })}
            />
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Amount (INR)</label>
            <input 
              type="number" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none transition-all"
              placeholder="e.g. 1000"
              value={newCharge.amount || ''}
              onChange={e => setNewCharge({ ...newCharge, amount: Number(e.target.value) })}
            />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleAdd}
              className="bg-slate-900 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Save
            </button>
            <button 
              onClick={() => setIsAdding(false)}
              className="bg-white text-slate-600 border border-slate-200 px-4 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {charges.map((charge) => (
              <tr key={charge.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-semibold text-slate-800">{charge.country}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-slate-600">
                  ₹{charge.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => handleDelete(charge.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceCharges;
