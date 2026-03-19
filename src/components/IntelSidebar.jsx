'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedNode } from '@/store/senateSlice';
import { X, Info, Shield, Landmark, Users, TrendingUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const IntelSidebar = () => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state) => state.senate.selectedNode);
  const { links } = useSelector((state) => state.senate);

  if (!selectedNode) return null;

  const nodeLinks = links.filter(l => 
    (typeof l.source === 'string' ? l.source === selectedNode.id : l.source.id === selectedNode.id) || 
    (typeof l.target === 'string' ? l.target === selectedNode.id : l.target.id === selectedNode.id)
  );

  return (
    <aside className="absolute top-8 right-8 w-96 max-h-[85vh] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl z-30 flex flex-col shadow-2xl animate-in slide-in-from-right-8 duration-500 overflow-hidden">
      <div className="p-7 flex justify-between items-center border-b border-white/5 bg-white/5">
        <h2 className="text-xl font-bold text-[#38bdf8] tracking-widest uppercase italic">
          Profile: {selectedNode.id}
        </h2>
        <button 
          onClick={() => dispatch(setSelectedNode(null))}
          className="p-1.5 hover:bg-white/10 rounded-full transition-all duration-300"
        >
          <X size={24} className="text-white/40 hover:text-white" />
        </button>
      </div>

      <div className="p-8 overflow-y-auto space-y-10 custom-scrollbar">
        <section>
          <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            <Landmark size={14} className="text-[#38bdf8]" /> Classification
          </div>
          <p className="text-sm font-semibold text-slate-100 tracking-wide">
            {selectedNode.type.toUpperCase()} <span className="text-white/20 px-2">|</span> {selectedNode.group || 'N/A'}
          </p>
        </section>

        {selectedNode.identity && (
          <section>
            <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              <Users size={14} className="text-[#38bdf8]" /> Identity Matrix
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {selectedNode.identity}
            </p>
          </section>
        )}

        {selectedNode.leader && (
          <section>
            <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              <Shield size={14} className="text-[#38bdf8]" /> Authority
            </div>
            <p className="text-sm text-slate-200 font-bold bg-white/5 p-3 rounded-xl border border-white/5">
              {selectedNode.leader}
            </p>
          </section>
        )}

        <section>
          <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            <Info size={14} className="text-[#38bdf8]" /> Intel Summary
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            {selectedNode.info}
          </p>
        </section>

        {nodeLinks.length > 0 && (
          <section>
            <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              <TrendingUp size={14} className="text-[#38bdf8]" /> Nexus Linkages
            </div>
            <ul className="space-y-4">
              {nodeLinks.map((l, i) => {
                const partnerId = (typeof l.source === 'string' ? l.source === selectedNode.id : l.source.id === selectedNode.id) 
                  ? (typeof l.target === 'string' ? l.target : l.target.id) 
                  : (typeof l.source === 'string' ? l.source : l.source.id);
                return (
                  <li key={i} className="p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border-l-[3px] border-[#38bdf8] text-xs">
                    <strong className="text-white block mb-1.5 text-sm tracking-tight">{partnerId}</strong>
                    <span className="text-slate-400 font-bold">{l.label || 'Direct influence'}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </aside>
  );
};

export default IntelSidebar;
