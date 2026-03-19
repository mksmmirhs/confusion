'use client'

import dynamic from 'next/dynamic'
import IntelSidebar from '@/components/IntelSidebar'
import FilterBar from '@/components/FilterBar'

const ForceGraph3D = dynamic(() => import('@/components/ForceGraph3D'), { 
  ssr: false,
  loading: () => <div className="h-screen w-screen flex items-center justify-center bg-[#0f172a] text-[#38bdf8] animate-pulse font-bold tracking-widest uppercase">Initializing Neural Power Nexus...</div>
})

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0f172a]">
      <header className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-2xl font-bold tracking-wider text-[#38bdf8] uppercase">
          Senate Power Intelligence <span className="text-white/30">3D</span>
        </h1>
        <p className="text-xs text-slate-500 mt-1.5 font-medium tracking-wide">
          Interactive Nexus of US Senate, Big Three Financials, and the Israel Lobby
        </p>
      </header>

      <FilterBar />

      <div className="w-full h-full">
        <ForceGraph3D />
      </div>
      
      <IntelSidebar />

      <footer className="absolute bottom-8 left-8 z-20 bg-slate-900/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex gap-6 text-[10px] font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2 text-[#3498db]"><span className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" /> Democrats</div>
        <div className="flex items-center gap-2 text-[#e74c3c]"><span className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" /> Republicans</div>
        <div className="flex items-center gap-2 text-[#f1c40f]"><span className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" /> Financial Giants</div>
        <div className="flex items-center gap-2 text-[#9b59b6]"><span className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" /> Lobby & PACs</div>
        <div className="flex items-center gap-2 text-[#95a5a6]"><span className="h-2 w-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" /> Defense & Aid</div>
      </footer>
    </main>
  )
}
