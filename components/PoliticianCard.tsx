'use client';

import React from 'react';
import { User, MapPin, Building2, Phone, ExternalLink, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
  type: string;
  gender: string;
  birthday: string;
  term_end: string;
  phone?: string;
  url?: string;
  office?: string;
  opensecrets?: string;
}

export default function PoliticianCard({ politician, onClose }: { politician: Politician; onClose: () => void }) {
  const isDemocrat = politician.party.toLowerCase().includes('democrat');
  const isRepublican = politician.party.toLowerCase().includes('republican');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-surface-1 border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={clsx(
          "h-32 flex items-end px-8 pb-4",
          isDemocrat ? "bg-blue-600/20" : isRepublican ? "bg-red-600/20" : "bg-slate-600/20"
        )}>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-surface-2 border border-white/10 flex items-center justify-center shadow-lg -mb-10">
              <User className="w-10 h-10 text-slate-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-mono text-white leading-tight">{politician.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={clsx(
                  "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border",
                  isDemocrat ? "bg-blue-500/10 text-blue-400 border-blue-500/30" : 
                  isRepublican ? "bg-red-500/10 text-red-400 border-red-500/30" : 
                  "bg-slate-500/10 text-slate-400 border-slate-500/30"
                )}>
                  {politician.party}
                </span>
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {politician.state}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-14 px-8 pb-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-2/50 border border-white/5 rounded-lg p-3">
              <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Role</div>
              <div className="text-sm font-bold text-white font-mono">{politician.type === 'sen' ? 'United States Senator' : 'Member of the House'}</div>
            </div>
            <div className="bg-surface-2/50 border border-white/5 rounded-lg p-3">
              <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Term Ends</div>
              <div className="text-sm font-bold text-rose-400 font-mono">{politician.term_end}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-accent-blue opacity-80 uppercase tracking-widest text-[10px] font-bold font-mono">
              <ShieldAlert className="w-3 h-3" /> Power Profile
            </div>
            <div className="text-[11px] text-slate-400 leading-relaxed font-mono">
              {politician.name} is part of the {politician.state} delegation. They are responsible for {politician.type === 'sen' ? 'treaty approval and confirmations' : 'originating revenue bills and initiating impeachment'}.
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {politician.phone && (
              <a href={`tel:${politician.phone}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-3 border border-white/5 text-[10px] text-slate-300 hover:text-white transition-colors font-mono">
                <Phone className="w-3 h-3" /> {politician.phone}
              </a>
            )}
            {politician.url && (
              <a href={politician.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-3 border border-white/5 text-[10px] text-slate-300 hover:text-white transition-colors font-mono">
                <ExternalLink className="w-3 h-3" /> Official Site
              </a>
            )}
            {politician.opensecrets && (
              <a href={`https://www.opensecrets.org/members-of-congress/summary?id=${politician.opensecrets}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-[10px] text-accent-blue hover:bg-accent-blue/20 transition-colors font-mono">
                <Building2 className="w-3 h-3" /> Donor Data (OpenSecrets)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
