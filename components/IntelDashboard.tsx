'use client';

import NationalDebt from './NationalDebt';
import WarSpending from './WarSpending';
import LegislativeRecord from './LegislativeRecord';

export default function IntelDashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-emerald-500/50"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Project National Accountability</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
            US National Debt & <br />War Fund Ledger
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A real-time forensic analysis of the United States' public debt, defense expenditures, and the legislative votes that authorized them.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <section className="lg:col-span-12">
            <NationalDebt />
          </section>

          <section className="lg:col-span-5">
            <WarSpending />
          </section>

          <section className="lg:col-span-7">
            <LegislativeRecord />
          </section>
        </div>

        <footer className="mt-32 pt-8 border-t border-white/5 text-center">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest space-y-2">
            <p>Data Sources: US Treasury Fiscal Service | USASpending.gov | Congress.gov</p>
            <p className="text-emerald-500/50">Project Confusion Internal Audit &copy; 2026</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
