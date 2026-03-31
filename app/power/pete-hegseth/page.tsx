import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Tv, Landmark, AlertTriangle, GraduationCap, Users, ExternalLink, ArrowLeft } from 'lucide-react';

const SECTIONS = [
  {
    id: 'education',
    title: 'Education & Early Life',
    icon: <GraduationCap className="w-5 h-5" />,
    content: [
      { label: 'Undergraduate', value: 'Princeton University – Bachelor’s in Politics (2003)' },
      { label: 'Journalism', value: 'Publisher of The Princeton Tory (Conservative student newspaper)' },
      { label: 'Graduate', value: 'Harvard University – Master of Public Policy (MPP)' },
      { label: 'Entry', value: 'Completed Army ROTC; joined the National Guard post-graduation' }
    ]
  },
  {
    id: 'military',
    title: 'Military Career (2003–2021)',
    icon: <Shield className="w-5 h-5 text-accent-blue" />,
    content: [
      { label: 'Deployments', value: 'Guantánamo Bay (GTMO), Iraq, and Afghanistan' },
      { label: 'Decorations', value: 'Two Bronze Stars; multiple Army Commendation Medals' },
      { label: 'Role', value: 'Major, U.S. Army National Guard (Minnesota)' },
      { label: 'History', value: 'Served during peak conflict years in Iraq/Afghanistan' }
    ]
  },
  {
    id: 'media',
    title: 'Media & Influence',
    icon: <Tv className="w-5 h-5 text-accent-amber" />,
    content: [
      { label: 'Fox News', value: 'Contributor (2014) → Co-host Fox & Friends Weekend (2017–2024)' },
      { label: 'Reputation', value: 'Strong conservative voice; early and prominent Trump supporter' },
      { label: 'Earnings', value: 'Reported millions in salary, book sales, and speaking fees' },
      { label: 'Reach', value: 'Leveraged media platform to influence veteran and GOP policy' }
    ]
  }
];

const CONTROVERSIES = [
  {
    title: 'Internal Pentagon Management',
    desc: 'Marked by controversial personnel decisions, budget changes, and cultural shifts inside the DoD.'
  },
  {
    title: 'Religious Nationalism',
    desc: 'Promotion of Christian practices within DoD, drawing criticism for breaking traditional religious neutrality.'
  },
  {
    title: 'Academic Ties Severed',
    desc: 'Ended military fellowships with Harvard and other universities, citing ideological disagreements.'
  }
];

function StatBlock({ val, label }: { val: string; label: string }) {
  return (
    <div className="bg-surface-3 border border-border/50 rounded-lg p-3 text-center">
      <div className="font-mono text-xl font-bold text-accent-blue mb-0.5">{val}</div>
      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function PeteHegsethPage() {
  return (
    <div className="min-h-screen bg-surface text-white pb-20">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link href="/power" className="inline-flex items-center gap-2 font-mono text-[10px] text-slate-500 hover:text-accent-blue transition-colors">
          <ArrowLeft className="w-3 h-3" /> BACK TO POWER PILLARS
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Profile Hero */}
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-end border-b border-border/30 pb-12">
          <div className="relative w-48 h-64 shrink-0 rounded-lg overflow-hidden border-2 border-accent-blue/30 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <Image 
              src="/assets/pete_hegseth.png" 
              alt="Pete Hegseth Portrait" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-2 left-2 right-2 border-t border-accent-blue/20 pt-1">
              <div className="font-mono text-[8px] text-accent-blue animate-pulse-slow">● TRANSMISSION SECURED</div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block font-mono text-[9px] text-accent-blue border border-accent-blue/30 bg-accent-blue/5 px-3 py-1 rounded-full uppercase tracking-widest">
              Officer Profile - #29-SD
            </div>
            <div>
              <h1 className="text-4xl font-bold font-mono tracking-tight">PETE <span className="text-accent-blue">HEGSETH</span></h1>
              <p className="text-xl text-slate-400 font-mono italic">29th U.S. Secretary of Defense (2025–2026)</p>
            </div>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed font-mono">
              Former Fox News personality and military veteran nominated by Donald Trump. 
              His tenure is defined by aggressive cultural shifts within the Pentagon and a breakdown of traditional non-partisan norms.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBlock val="2025" label="Confirmed Year" />
          <StatBlock val="2" label="Bronze Stars" />
          <StatBlock val="10Y" label="Fox News Tenure" />
          <StatBlock val="50-50" label="Senate Vote Tie" />
        </section>

        {/* Core Profile Sections */}
        <section className="grid md:grid-cols-3 gap-6">
          {SECTIONS.map((s) => (
            <div key={s.id} className="bg-surface-2 border border-border/30 rounded-xl p-6 hover:border-accent-blue/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-surface-3 rounded-lg border border-border/50">
                  {s.icon}
                </div>
                <h3 className="font-mono font-bold text-sm tracking-widest uppercase">{s.title}</h3>
              </div>
              <ul className="space-y-4">
                {s.content.map((item, idx) => (
                  <li key={idx}>
                    <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">{item.label}</div>
                    <div className="font-mono text-xs text-white leading-relaxed">{item.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* The Big Three Controversy / ETF Investigation */}
        <section className="bg-surface-3 border-l-4 border-accent-rose rounded-r-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <AlertTriangle className="w-32 h-32 text-accent-rose" />
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-accent-rose" />
            <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-accent-rose">Financial Conflict Investigation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="font-mono text-xs text-accent-rose uppercase tracking-widest font-bold">The Allegations</div>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                A broker associated with Hegseth reportedly explored investing millions in a defense-focused fund 
                (<span className="text-white">Defense Industrials Active ETF</span>) before the U.S.–Israeli military 
                action on Iran. The fund holds major defense contractors including <span className="text-white">RTX, Lockheed Martin, and Northrop Grumman</span>.
              </p>
              <div className="bg-surface-4 p-4 rounded border border-border/30">
                <div className="font-mono text-[10px] text-slate-500 uppercase mb-2">Key Fact:</div>
                <p className="text-xs text-slate-400 font-mono italic">
                  "No transaction was completed, and neither Hegseth nor his office confirmed direct involvement."
                </p>
              </div>
            </div>
            
            <div className="space-y-4 bg-accent-rose/5 p-6 border border-accent-rose/20 rounded-lg">
              <div className="font-mono text-xs text-white uppercase tracking-widest font-bold">Official Defense Position</div>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                The Pentagon officially denied these reports, calling them fabricated and demanding retraction. 
                There is currently no verified evidence of personal investment or direct profit.
              </p>
              <div className="mt-4 border-t border-accent-rose/20 pt-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-accent-rose font-black">STATUS: UNPROVEN / DISPUTED</div>
              </div>
            </div>
          </div>
        </section>

        {/* Management & Ideology */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internal Management */}
          <div className="space-y-6">
            <h2 className="font-mono text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <Users className="w-5 h-5 text-accent-blue" /> Institutional Shifts
            </h2>
            <div className="space-y-4">
              {CONTROVERSIES.map((c, i) => (
                <div key={i} className="border-b border-border pb-4 last:border-0 hover:bg-surface-2 p-3 rounded transition-colors group">
                  <div className="font-mono text-xs font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">{c.title}</div>
                  <p className="font-mono text-[11px] text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Political Network */}
          <div className="bg-surface-2 border border-border/40 rounded-xl p-6">
            <h2 className="font-mono text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-accent-blue" /> Political Network
            </h2>
            <div className="font-mono text-xs text-slate-300 leading-relaxed space-y-4">
              <p>
                Hegseth's political network overlaps heavily with:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {['Conservative Media', 'Trump Loyalists', 'Veteran Advocacy', 'Religious Action', 'GOP Primary Donors', 'Defense Lobbyists'].map(n => (
                  <li key={n} className="bg-surface-3 p-2 rounded border border-border/30 text-[10px] text-slate-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-blue rounded-full" /> {n}
                  </li>
                ))}
              </ul>
              <p>
                His confirmation was purely along party lines, requiring a tie-breaking vote from Vice President J.D. Vance, 
                making him one of the most partisan-confirmed Secretaries of Defense in modern history.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-1 border border-border/50 rounded-xl p-8 text-center">
          <h2 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Verification & Data Sources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['FEC Filings', 'Senate Armed Services', 'DOD Press Release', 'OpenSecrets', 'SEC Reporting'].map(s => (
              <span key={s} className="font-mono text-[9px] text-slate-700 uppercase border border-slate-800 px-2 py-1 rounded">
                Source: {s}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
