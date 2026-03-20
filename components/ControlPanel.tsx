'use client';

import React from 'react';
import { Shield, Zap, Globe, DollarSign, Flame, Filter, RotateCcw, Search, Users } from 'lucide-react';
import { useIntelStore } from '@/lib/store';
import type { GraphFilter } from '@/types/graph';
import clsx from 'clsx';

interface LayerButton {
  id: GraphFilter['layer'];
  label: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const LAYERS: LayerButton[] = [
  { id: 'all', label: 'All Networks', icon: Globe, color: 'text-accent-blue', description: 'Full geopolitical network' },
  { id: 'war', label: 'War Legacy', icon: Flame, color: 'text-red-500', description: '2001–Present war authorizations' },
  { id: 'lobby', label: 'Israel / PAC Lobby', icon: Shield, color: 'text-accent-purple', description: 'AIPAC, UDP, JINSA flows' },
  { id: 'bipartisan', label: 'Bipartisan Lobby', icon: Users, color: 'text-accent-purple', description: 'Lobbies connecting D & R' },
  { id: 'finance', label: 'Big Three', icon: DollarSign, color: 'text-accent-gold', description: 'BlackRock, Vanguard, State Street' },
  { id: 'oil', label: 'Oil & Energy', icon: Zap, color: 'text-accent-emerald', description: 'Petrodollar nexus' },
];

const PARTY_FILTERS = [
  { id: undefined, label: 'All', color: 'bg-surface-4' },
  { id: 'democrat' as const, label: 'D', color: 'bg-blue-500' },
  { id: 'republican' as const, label: 'R', color: 'bg-red-500' },
  { id: 'independent' as const, label: 'I', color: 'bg-slate-400' },
];

export default function ControlPanel() {
  const { filter, setFilter, resetFilter } = useIntelStore();
  const [searchVal, setSearchVal] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    setFilter({ search: e.target.value || undefined });
  };

  return (
    <div className="absolute top-4 left-4 z-50 w-72 animate-fade-in">
      {/* Header */}
      <div className="bg-surface-1 border border-border rounded-lg p-4 mb-2 backdrop-blur-sm" style={{ background: 'rgba(13,20,36,0.92)' }}>
        <div className="flex items-center gap-2 mb-1">
          <Filter className="w-4 h-4 text-accent-blue" />
          <span className="font-mono text-xs text-accent-blue font-bold tracking-widest uppercase">Intelligence Layers</span>
        </div>
        <p className="text-[10px] text-slate-500 font-mono">Toggle network visibility</p>
      </div>

      {/* Layer buttons */}
      <div className="bg-surface-1 border border-border rounded-lg overflow-hidden backdrop-blur-sm mb-2" style={{ background: 'rgba(13,20,36,0.92)' }}>
        {LAYERS.map((layer, i) => {
          const Icon = layer.icon;
          const active = filter.layer === layer.id;
          return (
            <button
              key={layer.id ?? 'all'}
              onClick={() => setFilter({ layer: layer.id })}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150',
                'border-b border-border last:border-b-0',
                active
                  ? 'bg-accent-blue/10 border-l-2 border-l-accent-blue'
                  : 'hover:bg-surface-3/50'
              )}
            >
              <Icon className={clsx('w-4 h-4 flex-shrink-0', active ? layer.color : 'text-slate-500')} />
              <div>
                <div className={clsx('font-mono text-xs font-semibold', active ? 'text-white' : 'text-slate-400')}>
                  {layer.label}
                </div>
                <div className="font-mono text-[9px] text-slate-600">{layer.description}</div>
              </div>
              {active && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse-slow" />
              )}
            </button>
          );
        })}
      </div>

      {/* Party filter */}
      <div className="bg-surface-1 border border-border rounded-lg p-3 mb-2 backdrop-blur-sm" style={{ background: 'rgba(13,20,36,0.92)' }}>
        <div className="font-mono text-[10px] text-slate-500 mb-2 uppercase tracking-wider">Party Filter</div>
        <div className="flex gap-2">
          {PARTY_FILTERS.map((p) => (
            <button
              key={String(p.id)}
              onClick={() => setFilter({ party: p.id })}
              className={clsx(
                'flex-1 py-1.5 rounded font-mono text-xs font-bold transition-all',
                filter.party === p.id || (p.id === undefined && !filter.party)
                  ? `${p.color} text-white opacity-100`
                  : 'bg-surface-3 text-slate-500 opacity-60 hover:opacity-80'
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="bg-surface-1 border border-border rounded-lg p-3 mb-2 backdrop-blur-sm" style={{ background: 'rgba(13,20,36,0.92)' }}>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
          <input
            type="text"
            value={searchVal}
            onChange={handleSearch}
            placeholder="Search node..."
            className="w-full bg-surface-3 border border-border rounded px-6 py-1.5 font-mono text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent-blue/50"
          />
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { resetFilter(); setSearchVal(''); }}
        className="w-full flex items-center justify-center gap-2 py-2 border border-border/50 rounded-lg font-mono text-xs text-slate-500 hover:text-accent-blue hover:border-accent-blue/40 transition-all"
        style={{ background: 'rgba(13,20,36,0.7)' }}
      >
        <RotateCcw className="w-3 h-3" />
        Reset All Filters
      </button>
    </div>
  );
}
