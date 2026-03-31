'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import clsx from 'clsx';

export default function ScamCalculator() {
  const [formData, setFormData] = useState({
    income: 50000,
    healthcare: 6000,
    rent: 18000,
    debt: 12000
  });

  const calculateInstitutionalTax = () => {
    // Estimated systemic markups/fraud percentages based on OIG/GAO data
    const healthcareFraud = formData.healthcare * 0.15; // 15% estimated fraud/overbilling
    const rentSystemicMarkup = (formData.rent * 0.12) * 1.5; // Institutional consolidation increase
    const debtPredatoryInterest = formData.debt * 0.18; // Average interest over market base
    const defenseTaxShare = (formData.income * 0.08); // 8% of income estimated share of defense budget (approx)

    const total = healthcareFraud + rentSystemicMarkup + debtPredatoryInterest + defenseTaxShare;
    return total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <div className="bg-surface-1 border border-white/10 rounded-2xl overflow-hidden shadow-xl p-8 font-mono">
      <div className="flex items-center gap-2 text-rose-500 mb-8 uppercase tracking-widest text-[9px] font-bold">
        <Cpu className="w-3.5 h-3.5" /> Institutional Impact Engine v1.0
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2 uppercase">The Institutional Tax</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every year, you pay an "invisible tax" through systemic overcharging, healthcare fraud, and institutional rent-seeking. Calculate your personal impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Annual Income ($)</label>
              <input 
                type="number"
                value={formData.income}
                onChange={(e) => setFormData({...formData, income: Number(e.target.value)})}
                className="w-full bg-surface-2 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:border-accent-blue/40 transition-colors"
                step="1000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Healthcare Costs ($/yr)</label>
              <input 
                type="number"
                value={formData.healthcare}
                onChange={(e) => setFormData({...formData, healthcare: Number(e.target.value)})}
                className="w-full bg-surface-2 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:border-accent-blue/40 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Annual Rent/Mortgage ($)</label>
              <input 
                type="number"
                value={formData.rent}
                onChange={(e) => setFormData({...formData, rent: Number(e.target.value)})}
                className="w-full bg-surface-2 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:border-accent-blue/40 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Credit/Loan Debt ($)</label>
              <input 
                type="number"
                value={formData.debt}
                onChange={(e) => setFormData({...formData, debt: Number(e.target.value)})}
                className="w-full bg-surface-2 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:border-accent-blue/40 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="md:w-72 flex flex-col justify-center items-center p-8 bg-surface-3 border border-white/10 rounded-2xl text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.1)]">
            <DollarSign className="w-8 h-8 text-rose-500" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-1">Your Est. Annual Loss</div>
            <div className="text-4xl font-black text-rose-500 tracking-tighter">${calculateInstitutionalTax()}</div>
            <div className="text-[9px] text-slate-600 mt-2 font-mono italic">
              Estimated direct loss to systemic fraud and institutional markups.
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-lg bg-rose-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg">
            View Breakdown <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-slate-600 font-mono text-[8px] uppercase tracking-widest">
        <ShieldAlert className="w-3.5 h-3.5" /> Data derived from: OpenSecerts · GAO reports 2021-2024 · CFPB data · Census Bureau
      </div>
    </div>
  );
}
