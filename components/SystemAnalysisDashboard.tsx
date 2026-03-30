'use client';

import React, { useState } from 'react';
import SystemForceGraph from './SystemForceGraph';
import graphData from '@/data/system_graph.json';

type ViewMode = 'loop' | 'tree' | 'funnel';

export default function SystemAnalysisDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('loop');

  const getModeDescription = () => {
    switch(viewMode) {
      case 'loop': return 'The primary circular system of institutional maintenance. Money from taxpayers flows to corporations, which then fund the political agents who authorize the next round of spending.';
      case 'tree': return 'A hierarchical mapping of the vertical power structure. Sovereign Wealth Funds sit at the roots, with the Big Three asset managers acting as the trunk, and defense contractors as the branches.';
      case 'funnel': return 'Specific analysis of the $140B+ aid funnel to Ukraine and Israel, showing how it concentrates into a handful of boardrooms.';
    }
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-2 p-1 bg-surface-2 border border-border rounded-xl">
          {[
            { id: 'loop', label: '🔄 The Loop' },
            { id: 'tree', label: '🌲 Hierarchy' },
            { id: 'funnel', label: '📉 Conflict Aid' }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as ViewMode)}
              className={`px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-widest transition-all ${
                viewMode === mode.id 
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-surface-3'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-border hidden md:block"></div>
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
            Forensic Topology [Alpha 1.0.4]
          </p>
        </div>
      </div>

      {/* Main Graph Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <SystemForceGraph data={graphData as any} viewMode={viewMode} />
        </div>

        <div className="space-y-6">
          <div className="bg-surface-1 border border-border rounded-2xl p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold text-accent-blue uppercase tracking-widest">— View Analysis</h3>
            <p className="font-mono text-[11px] text-slate-300 leading-relaxed">
              {getModeDescription()}
            </p>
          </div>

          <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-2xl p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">— Key Discovery</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-white font-bold text-[11px] font-mono">The Big Three Control</div>
                <p className="font-mono text-[9px] text-slate-400 leading-relaxed italic">
                  BlackRock, Vanguard, and State Street collectively hold over 20-30% of every major defense firm. They are the "permanent layer" of governance.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-white font-bold text-[11px] font-mono">SWF Capital Concentration</div>
                <p className="font-mono text-[9px] text-slate-400 leading-relaxed italic">
                  Norway and Singapore are the largest non-US direct shareholders in the machine, effectively funding US regional security through institutional finance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-3 border border-dashed border-border rounded-2xl p-6 text-center">
            <p className="font-mono text-[9px] text-slate-500 uppercase">
              Click any node in the graph for the deep forensic ledger (coming in next update)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
