'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/store/senateSlice';
import { Layers, Zap, Shield, Target } from 'lucide-react';

const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.senate.filter);

  const filters = [
    { id: 'all', label: 'Full Network', icon: Layers, color: 'text-accent' },
    { id: 'big-three', label: 'Big Three Influence', icon: Target, color: 'text-finance' },
    { id: 'israel-lobby', label: 'Israel Lobby Nexus', icon: Zap, color: 'text-lobby' },
    { id: 'war-oil', label: 'War & Oil Nexus', icon: Shield, color: 'text-emerald-400' },
    { id: 'senate-hubs', label: 'Senate Power Hubs', icon: Zap, color: 'text-amber-400' },
    { id: 'war-legacy', label: 'War Legacy (2001-Present)', icon: Shield, color: 'text-rose-600' },
  ];

  return (
    <div className="absolute top-24 left-8 z-20 flex gap-3">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => dispatch(setFilter(f.id))}
          className={`
            flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-md font-bold text-[10px] tracking-widest uppercase
            ${currentFilter === f.id 
              ? 'bg-slate-800 border-accent/50 text-white shadow-[0_0_15px_-3px_rgba(56,189,248,0.4)]' 
              : 'bg-slate-900/40 border-white/5 text-slate-500 hover:bg-slate-800 hover:border-white/20 hover:text-slate-300'
            }
          `}
        >
          <f.icon size={14} className={currentFilter === f.id ? f.color : 'text-slate-600'} />
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
