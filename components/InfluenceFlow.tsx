'use client';

import React from 'react';

const FLOW_DATA = [
  { company: 'Lockheed Martin', contracts: '$72B', shareholders: 'BlackRock, Vanguard, State St' },
  { company: 'RTX (Raytheon)', contracts: '$36B', shareholders: 'BlackRock, Vanguard, State St' },
  { company: 'Northrop Grumman', contracts: '$32B', shareholders: 'BlackRock, Vanguard, State St' },
];

export default function InfluenceFlow() {
  return (
    <div className="space-y-8">
      {/* Visual Diagram */}
      <div className="glass rounded-xl p-8 border-accent-blue/20">
        <div className="flex flex-col items-center gap-6">
          {/* Top Layer */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 mb-2">
              <div className="text-xl mb-1">🏛️</div>
              <div className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">US Federal Budget</div>
              <div className="font-mono text-[9px] text-blue-400">$886B (FY 2023)</div>
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
          </div>

          {/* Middle Layer */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            {/* Administration Node */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-3">
                <div className="text-xl mb-1">🦅</div>
                <div className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">Biden Admin</div>
                <div className="font-mono text-[8px] text-amber-500 mt-1 leading-tight">
                  Largest Defense Budget<br />Approved (FY23)
                </div>
              </div>
              <div className="hidden md:block w-8 h-0.5 bg-amber-500/30 mt-4 -rotate-45"></div>
            </div>

            {/* Connecting Center */}
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full border border-accent-blue/30 flex items-center justify-center font-mono text-[10px] text-accent-blue bg-surface-3">
                →
              </div>
            </div>

            {/* Pentagon Node */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="bg-slate-500/10 border border-slate-500/30 rounded-lg px-4 py-3">
                <div className="text-xl mb-1">⎔</div>
                <div className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">Pentagon / DoD</div>
                <div className="font-mono text-[8px] text-slate-400 mt-1 leading-tight">
                  Contract Allocation &<br />Procurement
                </div>
              </div>
              <div className="hidden md:block w-8 h-0.5 bg-slate-500/30 mt-4 rotate-45"></div>
            </div>
          </div>

          {/* Lower Middle Layer */}
          <div className="flex flex-col items-center">
            <div className="h-8 w-0.5 bg-surface-3"></div>
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg px-6 py-4 text-center max-w-sm">
              <div className="font-mono text-[10px] font-bold text-white uppercase tracking-wider mb-2">Defense Contractors</div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="font-mono text-[9px] bg-surface-3 px-2 py-1 rounded">Lockheed</span>
                <span className="font-mono text-[9px] bg-surface-3 px-2 py-1 rounded">RTX</span>
                <span className="font-mono text-[9px] bg-surface-3 px-2 py-1 rounded">Boeing</span>
              </div>
            </div>
            <div className="h-8 w-0.5 bg-gradient-to-b from-rose-500/50 to-transparent"></div>
          </div>

          {/* Bottom Layer */}
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-6 py-4">
              <div className="text-xl mb-1">💰</div>
              <div className="font-mono text-[10px] font-bold text-white uppercase tracking-wider mb-1">Big 3 / Shareholders</div>
              <div className="font-mono text-[9px] text-emerald-400 mb-3">Dividend Appreciation & Asset Value Growth</div>
              <div className="flex justify-center gap-4 border-t border-emerald-500/20 pt-3">
                {['BlackRock', 'Vanguard', 'State Street'].map(f => (
                  <div key={f} className="font-mono text-[8px] text-slate-400 uppercase tracking-tighter">{f}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full font-mono text-xs">
          <thead>
            <tr className="border-b border-border bg-surface-3">
              <th className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500">Company</th>
              <th className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500 text-center">Pentagon FY2023</th>
              <th className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-slate-500 text-center">Top Shareholders</th>
            </tr>
          </thead>
          <tbody>
            {FLOW_DATA.map((d, i) => (
              <tr key={d.company} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-surface-1' : 'bg-surface'} hover:bg-surface-3 transition-colors`}>
                <td className="px-4 py-3 font-bold text-white text-[10px]">{d.company}</td>
                <td className="px-4 py-3 text-rose-400 text-center font-bold">{d.contracts}</td>
                <td className="px-4 py-3 text-slate-400 text-[9px] text-center italic">{d.shareholders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insight Footer */}
      <div className="border border-amber-500/20 bg-amber-500/5 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">🧠</span>
          <div>
            <div className="font-mono text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">Key Insight</div>
            <p className="font-mono text-[11px] text-slate-300 leading-relaxed italic">
              "The 'flow' is not characterized by simple personal payments to an administration; rather, it is the 
              structural influence of financial markets on policy outcomes. Administrative alignment with defense 
              policy ensures profit flows to the world's largest investment firms."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
