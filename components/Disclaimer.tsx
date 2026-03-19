'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;
  return (
    <div
      className="absolute bottom-6 right-4 z-50 w-72 border border-amber-500/20 rounded-lg p-3 animate-fade-in"
      style={{ background: 'rgba(10,15,26,0.93)' }}
    >
      <div className="flex items-start gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-mono text-[9px] text-amber-400 font-bold mb-1 uppercase tracking-wider">
            Methodology Notice
          </p>
          <p className="font-mono text-[9px] text-slate-500 leading-relaxed">
            This visualization shows <strong className="text-slate-400">correlations</strong> based on publicly available data (OpenSecrets, Senate.gov, Yahoo Finance). It does not assert causation.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-600 hover:text-slate-400 flex-shrink-0 text-xs"
        >
          ×
        </button>
      </div>
    </div>
  );
}
