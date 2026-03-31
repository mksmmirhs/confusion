'use client';

import React, { useState } from 'react';
import { ShieldAlert, Terminal, CheckCircle2, AlertTriangle, Scale, Gavel } from 'lucide-react';
import clsx from 'clsx';

const STEPS = [
  {
    id: 1,
    title: 'President Initiates Action',
    body: 'The President, as Commander-in-Chief (Article II), can order military strikes or deploy troops without prior Congress approval for defensive or emergency needs.',
    icon: ShieldAlert,
    color: 'text-rose-400',
    options: [
      { label: 'Notify Congress (48h)', next: 2, icon: Terminal },
      { label: 'Bypass Notification', next: 1.5, icon: AlertTriangle }
    ]
  },
  {
    id: 1.5,
    title: 'Legal Crisis',
    body: 'Failure to notify Congress within 48 hours is a direct violation of the War Powers Resolution of 1973. This could trigger immediate impeachment proceedings or judicial review.',
    icon: Gavel,
    color: 'text-rose-600',
    options: [
      { label: 'Correct and Notify', next: 2, icon: Terminal }
    ]
  },
  {
    id: 2,
    title: 'The 60-Day Clock',
    body: 'Under the War Powers Resolution, once notified, the President has 60 days to continue operations. After that, they MUST obtain authorization or a declaration of war from Congress.',
    icon: Terminal,
    color: 'text-amber-400',
    options: [
      { label: 'Request AUMF', next: 3, icon: Scale },
      { label: 'Withdraw Forces', next: 4, icon: CheckCircle2 }
    ]
  },
  {
    id: 3,
    title: 'Congress Intervention',
    body: 'Congress evaluates the request. They can pass an Authorization for Use of Military Force (AUMF) or a formal Declaration of War. They can also use the "power of the purse" to cut funding.',
    icon: Scale,
    color: 'text-accent-blue',
    options: [
      { label: 'AUMF Granted', next: 5, icon: CheckCircle2 },
      { label: 'Funding Cut', next: 4, icon: ShieldAlert }
    ]
  },
  {
    id: 4,
    title: 'Conflict Terminated',
    body: 'Hostilities cease. This usually happens via troop withdrawal or successful mission completion. Balance of power is restored.',
    icon: CheckCircle2,
    color: 'text-emerald-400',
    options: [
      { label: 'Restart Simulation', next: 1, icon: Terminal }
    ]
  },
  {
    id: 5,
    title: 'Sustained Warfare',
    body: 'With an AUMF, the President has full legal authority to continue the campaign. Historically, AUMFs (like 2001 and 2002) have remained active for decades.',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    options: [
      { label: 'Restart Simulation', next: 1, icon: Terminal }
    ]
  }
];

export default function WarSimulator() {
  const [currentStepId, setCurrentStepId] = useState(1);
  const currentStep = STEPS.find(s => s.id === currentStepId) || STEPS[0];
  const Icon = currentStep.icon;

  return (
    <div className="bg-surface-1 border border-white/10 rounded-2xl overflow-hidden shadow-xl p-8 font-mono">
      <div className="flex items-center gap-2 text-accent-blue mb-8 uppercase tracking-widest text-[9px] font-bold">
        <Terminal className="w-3 h-3" /> System Simulation: War Powers v1.0
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className={clsx("p-3 rounded-xl bg-surface-2 border border-white/5 shadow-inner", currentStep.color)}>
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{currentStep.title}</h3>
          </div>
          
          <p className="text-sm text-slate-400 leading-relaxed min-h-[80px]">
            {currentStep.body}
          </p>

          <div className="flex flex-col gap-3">
            {currentStep.options.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <button
                  key={opt.label}
                  onClick={() => setCurrentStepId(opt.next)}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-surface-2 border border-white/5 hover:border-accent-blue/30 hover:bg-surface-3 transition-all group text-left"
                >
                  <OptIcon className="w-4 h-4 text-slate-500 group-hover:text-accent-blue transition-colors" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-64 space-y-4">
          <div className="text-[9px] text-slate-600 uppercase tracking-widest mb-2">Process History</div>
          <div className="relative space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-white/5">
            {STEPS.filter(s => s.id < currentStepId && s.id >= 1).map(s => {
              const SIcon = s.icon;
              return (
                <div key={s.id} className="flex items-start gap-4 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-surface-2 border border-white/10 flex items-center justify-center relative z-10">
                    <SIcon className="w-3 h-3 text-slate-500" />
                  </div>
                  <div className="text-[10px] text-slate-400 py-1">{s.title}</div>
                </div>
              );
            })}
            <div className="flex items-start gap-4">
              <div className={clsx("w-6 h-6 rounded-full border flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(30,144,255,0.2)] animate-pulse", 
                currentStep.color.replace('text', 'border'))}>
                <Icon className="w-3 h-3" />
              </div>
              <div className="text-[10px] text-white py-1 font-bold">{currentStep.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
