'use client';

import React, { useState, useMemo } from 'react';
import { Search, Info, Shield, History, Cpu, ArrowRight, User } from 'lucide-react';
import StructureGraph from '@/components/StructureGraph';
import PoliticianCard from '@/components/PoliticianCard';
import WarSimulator from '@/components/WarSimulator';
import congressData from '@/data/congress.json';
import warTimeline from '@/data/war_timeline.json';
import clsx from 'clsx';

export default function StructurePage() {
  const [search, setSearch] = useState('');
  const [selectedPolitician, setSelectedPolitician] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'roster' | 'simulator' | 'timeline'>('roster');

  const filteredCongress = useMemo(() => {
    if (!search) return congressData.slice(0, 100); // Only show first 100 by default for perf
    const s = search.toLowerCase();
    return congressData.filter(m => 
      m.name.toLowerCase().includes(s) || 
      m.state.toLowerCase().includes(s) || 
      m.party.toLowerCase().includes(s)
    ).slice(0, 100);
  }, [search]);

  return (
    <div className="min-h-screen bg-surface text-white pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-block font-mono text-[9px] text-accent-blue border border-accent-blue/30 bg-accent-blue/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
          Institutional Analysis // Structure v1.0
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
          The United States <br />
          <span className="text-accent-blue">Power Structure Explorer</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-sm leading-relaxed font-mono">
          American governance is more than just three branches. It is a complex network of checks, balances, and institutional influence. 
          Use this interactive map to explore the official structure and the underlying forces that shape modern policy.
        </p>
      </section>

      {/* Main Interactive Map */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <StructureGraph />
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-1 border-b border-white/5 mb-8 overflow-x-auto">
          {[
            { id: 'roster', label: 'Congress Roster', icon: User },
            { id: 'simulator', label: 'War Simulator', icon: Cpu },
            { id: 'timeline', label: 'War Timeline', icon: History }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "flex items-center gap-2 px-6 py-4 font-mono text-[10px] uppercase tracking-widest transition-all",
                  activeTab === tab.id ? "text-accent-blue border-b-2 border-accent-blue bg-accent-blue/5" : "text-slate-500 hover:text-slate-300"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === 'roster' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search by name, state, or party..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-surface-2 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm font-mono focus:outline-none focus:border-accent-blue/40 transition-colors"
                  />
                  {search && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-600 font-mono">
                      Showing {filteredCongress.length} results
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest bg-surface-3/30 border border-white/5 px-4 py-2 rounded-lg">
                  <Info className="w-3 h-3" /> Total Members: {congressData.length}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCongress.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedPolitician(m)}
                    className="group bg-surface-1 border border-white/5 rounded-xl p-4 hover:border-accent-blue/30 hover:bg-surface-2 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={clsx(
                        "w-2 h-2 rounded-full",
                        m.party.includes('Democrat') ? "bg-blue-500" : m.party.includes('Republican') ? "bg-red-500" : "bg-slate-500"
                      )} />
                      <div className="text-[9px] text-slate-500 font-mono uppercase tracking-tighter">{m.state} — {m.type === 'sen' ? 'Senate' : 'House'}</div>
                    </div>
                    <div className="font-mono text-sm font-bold text-white group-hover:text-accent-blue transition-colors mb-1 truncate">{m.name}</div>
                    <div className="font-mono text-[10px] text-slate-500">{m.party}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold font-mono text-white mb-2">Legal Logic Simulation</h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed mb-8">
                  Under the War Powers Resolution of 1973, military action follows a specific legal flowchart. Interact with the simulation below to understand how the branches interact during a crisis.
                </p>
              </div>
              <WarSimulator />
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-8">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold font-mono text-white mb-2">Major War Decisions & Orders</h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed mb-8">
                   how the balance of power shifted from formal Declarations of War to Authorizations for Use of Military Force (AUMF).
                </p>
              </div>
              <div className="space-y-4">
                {warTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex gap-6 p-6 bg-surface-1 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <div className="font-mono text-2xl font-black text-accent-blue leading-none">{item.year}</div>
                        <div className={clsx(
                          "px-2 py-0.5 rounded text-[8px] uppercase tracking-widest font-bold font-mono border",
                          item.type === 'legislative' ? "bg-blue-500/10 text-blue-400 border-blue-500/30" : "bg-red-500/10 text-red-400 border-red-500/30"
                        )}>
                          {item.type}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{item.event}</h4>
                        <p className="font-mono text-[11px] text-slate-400 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      {selectedPolitician && (
        <PoliticianCard 
          politician={selectedPolitician} 
          onClose={() => setSelectedPolitician(null)} 
        />
      )}

      {/* Footer Nav */}
      <section className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t border-white/5">
        <h2 className="font-mono text-[10px] text-accent-blue uppercase tracking-[0.3em] mb-8">— Systems Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/power', label: '4 Pillars of Power', desc: 'The institutional forces running the country behind the scenes.' },
            { href: '/lobby', label: 'Lobby Encyclopedia', desc: 'Deep dive into specialized lobby networks and their funding.' },
            { href: '/revolving-door', label: 'Revolving Door', desc: 'Track officials moving between government and corporations.' }
          ].map(l => (
            <a key={l.href} href={l.href} className="group p-6 bg-surface-2/40 border border-white/5 rounded-xl hover:border-accent-blue/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-sm font-bold text-white group-hover:text-accent-blue transition-colors">{l.label}</div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent-blue transition-all" />
              </div>
              <p className="font-mono text-[10px] text-slate-500 leading-relaxed">{l.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
