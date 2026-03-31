'use client';

import React, { useState } from 'react';
import { AlertTriangle, TrendingDown, Info, ShieldAlert, History, ArrowRight, User } from 'lucide-react';
import clsx from 'clsx';

interface Scam {
  id: string;
  title: string;
  icon: string;
  category: string;
  loss: string;
  mechanism: { step: string; desc: string }[];
  real_impact: string;
  color: string;
}

export default function ScamCard({ scam }: { scam: Scam }) {
  const [showMechanism, setShowMechanism] = useState(false);

  return (
    <div className="group bg-surface-1 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all shadow-xl">
      <div className="p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className={clsx("font-mono text-[9px] uppercase tracking-widest font-bold", scam.color)}>
              {scam.category} // Organized Influence
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight font-mono">{scam.icon} {scam.title}</h3>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full flex items-center gap-2">
            <TrendingDown className="w-3 h-3 text-rose-500" />
            <span className="text-[10px] text-rose-400 font-bold font-mono uppercase tracking-widest">{scam.loss}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed font-mono italic">
          "{scam.real_impact}"
        </p>

        <div className="pt-4 space-y-4">
          <button 
            onClick={() => setShowMechanism(!showMechanism)}
            className="flex items-center gap-2 text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold font-mono hover:text-white transition-colors"
          >
             {showMechanism ? 'Hide' : 'Reveal'} the Mechanism <ArrowRight className={clsx("w-3 h-3 transition-transform", showMechanism && "rotate-90")} />
          </button>

          {showMechanism && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {scam.mechanism.map((m, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-surface-2 border border-white/5 rounded-xl">
                  <div className="font-mono text-xs font-bold text-slate-500">{idx + 1}</div>
                  <div>
                    <div className="font-mono text-xs font-black text-white mb-1 uppercase tracking-widest">{m.step}</div>
                    <div className="font-mono text-[10px] text-slate-400 leading-relaxed">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-surface-3/50 border-t border-white/5 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span className="text-[9px] uppercase font-mono tracking-widest">Systemic Fraud Warning</span>
        </div>
        <div className="text-[9px] text-slate-600 font-mono">
          Ref: GAO Report // OIG Investigative Data
        </div>
      </div>
    </div>
  );
}
