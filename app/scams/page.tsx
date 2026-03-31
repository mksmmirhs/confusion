'use client';

import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, Cpu, ArrowRight, History, Zap, TrendingDown, Gavel } from 'lucide-react';
import ScamCard from '@/components/ScamCard';
import ScamCalculator from '@/components/ScamCalculator';
import scamsData from '@/data/scams.json';
import clsx from 'clsx';

export default function ScamsPage() {
  return (
    <div className="min-h-screen bg-surface text-white pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-block font-mono text-[9px] text-rose-500 border border-rose-500/30 bg-rose-500/5 px-3 py-1 rounded mb-6 uppercase tracking-widest animate-pulse">
          ⚠ Systemic Fraud Warning // Institutional Capture
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-mono mb-6 tracking-tight">
          The <span className="text-rose-500">Biggest Organized Crime</span> <br />
          is Legalized.
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed font-mono">
          "The greatest trick the devil ever pulled was convincing the world he didn't exist." 
          In modern society, the biggest scams aren't hidden in dark alleys; they are written into law, 
          structured by lobbyists, and executed by institutional giants. 
          This is a forensic analysis of the systems that fool the general public for profit.
        </p>
      </section>

      {/* Impact Calculator Widget */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScamCalculator />
      </section>

      {/* Main Scams Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="font-mono text-xs text-rose-500 uppercase tracking-widest font-black px-4 bg-surface py-2 border border-rose-500/20 rounded-full">
            Selected Systemic Scams
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scamsData.map((scam) => (
            <ScamCard key={scam.id} scam={scam} />
          ))}
        </div>
      </section>

      {/* Institutional Organized Influence */}
      <section className="max-w-5xl mx-auto px-6 mb-32 p-12 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <ShieldAlert className="w-64 h-64 text-white" />
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold font-mono text-white">How the "General Person" <br />is Systemically Scammed.</h3>
            <p className="text-slate-400 text-sm font-mono max-w-xl leading-relaxed">
              Organized influence works by creating layers of complexity that hide the true cost of living. 
              From the "Money Loop" to "Bailout Culture," the public pays the price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'The Complexity Trap', body: 'Systems are designed to be incomprehensible. Medical bills, loan terms, and tax codes are layered with jargon to prevent the average person from spotting the markup.' },
              { title: 'Risk Substitution', body: 'Profits are privatized into bonuses, but when the systems fail (banks, defense overruns), the losses are socialized onto taxpayers through "mandatory" bailouts.' },
              { title: 'Regulatory Capture', body: 'Organized lobby groups write the very laws meant to regulate them. This turns regulators into gatekeepers for corporate profit, protecting incumbents from competition.' }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-surface-2/40 border border-white/5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 text-rose-500 font-mono text-sm font-black">
                  {i + 1}
                </div>
                <h4 className="font-mono font-bold text-white text-sm mb-2">{p.title}</h4>
                <p className="font-mono text-[10px] text-slate-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action / Protection */}
      <section className="max-w-2xl mx-auto px-6 text-center space-y-8">
        <div className="flex justify-center">
          <Gavel className="w-12 h-12 text-accent-blue" />
        </div>
        <h3 className="text-2xl font-bold font-mono text-white">The Only Defense is Transparency.</h3>
        <p className="text-slate-400 font-mono text-sm leading-relaxed">
          The goal of this platform is not to spread fear, but to provide the data needed for accountability. 
          Awareness of how the money flows is the first step toward reclaiming institutional control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/prevention" className="flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent-blue/80 transition-all shadow-xl">
             Constitutional Protections <ShieldAlert className="w-4 h-4" />
          </a>
          <a href="/report" className="flex items-center justify-center gap-2 px-8 py-4 bg-surface-2 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-surface-3 transition-all">
             Submit Data Evidence <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
