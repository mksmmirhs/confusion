import type { Metadata } from 'next';
import Link from 'next/link';
import SystemAnalysisDashboard from '@/components/SystemAnalysisDashboard';

export const metadata: Metadata = {
  title: 'System Analysis | Senate Intelligence Dashboard',
  description: 'A 3D forensic analysis of the institutional ownership, sovereign wealth investment, and the industrial-military complex.',
};

export default function SystemAnalysisPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      {/* Header and Nav */}
      <nav className="border-b border-border bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:animate-ping transition-all"></span>
            <span className="font-mono text-xs font-black tracking-tighter uppercase text-white/90">
              Senate Intelligence Platform
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/money-loop" className="font-mono text-[10px] text-slate-400 hover:text-white uppercase tracking-widest transition-all">
              The Loop
            </Link>
            <Link href="/" className="font-mono text-[10px] text-slate-400 hover:text-white uppercase tracking-widest transition-all">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Intro */}
        <section className="space-y-4">
          <div className="inline-block font-mono text-[9px] text-accent-blue border border-accent-blue/30 bg-accent-blue/5 px-3 py-1 rounded mb-4 uppercase tracking-widest">
            🛡️ System Architecture Analysis
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent italic">
            Institutional Control Loop
          </h1>
          <p className="text-slate-400 max-w-3xl text-sm leading-relaxed">
            While direct campaign donations are the visible layer of political influence, the structural foundation is built on 
            <span className="text-white"> institutional ownership</span>. This 3D analysis maps how global sovereign wealth 
            (Norway, Singapore, etc.) flows through the <span className="text-accent-blue">Big Three asset managers</span> 
            into the <span className="text-amber-400">Defense Industrial Complex</span>, which then lobbies the 
            <span className="text-rose-500">Government Policy makers</span> to authorize the next injection of public capital.
          </p>
        </section>

        {/* Dashboard Component */}
        <section>
          <SystemAnalysisDashboard />
        </section>

        {/* Bottom Context Section */}
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-widest">— The Ownership Funnel</h2>
            <p className="font-mono text-[11px] text-slate-400 leading-relaxed">
              Contrary to popular belief, most global defense firms are not privately owned by single individuals. 
              They are public corporations where the <span className="text-white">"Big Three" (BlackRock, Vanguard, State Street)</span> 
              are almost always the top-three shareholders. This concentration of power creates a "Permanent Governance" that 
              outlasts any individual senator or CEO.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-white uppercase tracking-widest">— Sovereign Wealth Integration</h2>
            <p className="font-mono text-[11px] text-slate-400 leading-relaxed">
              National savings—including the <span className="text-emerald-400">Norwegian Oil Fund</span> and 
              <span className="text-emerald-400">Singapore's GIC</span>—account for trillions in systemic capital. By holding 
              massive stakes in US asset managers, these nations are inextricably linked to the performance and survival 
              of the US military-industrial complex.
            </p>
          </div>
        </div>

        <footer className="text-center font-mono text-[9px] text-slate-700 pb-8 mt-20">
          Senate Intelligence Platform · Forensic Archive Alpha v1.0.4 · Data: OpenSecrets · SIPRI · NBIM Disclosure
        </footer>
      </main>
    </div>
  );
}
