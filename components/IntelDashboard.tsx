'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useIntelStore } from '@/lib/store';
import type { Graph, GraphFilter } from '@/types/graph';
import ControlPanel from '@/components/ControlPanel';
import TimeSlider from '@/components/TimeSlider';
import IntelSidebar from '@/components/IntelSidebar';
import Disclaimer from '@/components/Disclaimer';

// Dynamic import to keep Three.js out of SSR
const Graph3D = dynamic(() => import('@/components/Graph3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <div className="font-mono text-xs text-accent-blue">INITIALIZING NETWORK...</div>
      </div>
    </div>
  ),
});

function NetworkStats({ graph }: { graph: Graph }) {
  const senatorCount = graph.nodes.filter((n) => n.type === 'senator').length;
  const edgeCount = graph.edges.length;
  const companyCount = graph.nodes.filter((n) => n.type === 'company').length;
  const orgCount = graph.nodes.filter((n) => n.type === 'organization').length;

  return (
    <div className="absolute top-4 right-4 z-40 flex items-center gap-3">
      <div className="glass rounded-lg px-3 py-2 flex items-center gap-4">
        {[
          { label: 'SENATORS', value: senatorCount, color: 'text-blue-400' },
          { label: 'COMPANIES', value: companyCount, color: 'text-amber-400' },
          { label: 'ORGS', value: orgCount, color: 'text-purple-400' },
          { label: 'CONNECTIONS', value: edgeCount, color: 'text-accent-blue' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className={`font-mono text-sm font-bold tabular-nums ${s.color}`}>{s.value}</div>
            <div className="font-mono text-[8px] text-slate-600 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
      <Link
        href="/report"
        className="glass rounded-lg px-3 py-2 font-mono text-[10px] text-rose-400 border border-rose-400/30 hover:bg-rose-400/10 transition-all flex items-center gap-1.5"
      >
        📋 War Report
      </Link>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
      <div className="font-mono text-[9px] text-accent-blue tracking-widest uppercase mb-0.5 opacity-80">
        ⬡ GEOPOLITICAL INTELLIGENCE NETWORK ⬡
      </div>
      <h1 className="font-mono text-lg font-bold text-white tracking-tight">
        US Senate Power Analysis <span className="text-accent-blue">2001–2026</span>
      </h1>
    </div>
  );
}

export default function IntelDashboard() {
  const { setGraph, setLoading, filter, graph } = useIntelStore();

  // Fetch graph data from API whenever filter changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter.layer && filter.layer !== 'all') params.set('layer', filter.layer);
    if (filter.party) params.set('party', filter.party);
    if (filter.search) params.set('search', filter.search);
    if (filter.war) params.set('war', filter.war);
    if (filter.yearRange) {
      params.set('yearFrom', String(filter.yearRange[0]));
      params.set('yearTo', String(filter.yearRange[1]));
    }

    setLoading(true);

    fetch(`/api/network?${params.toString()}`)
      .then((r) => r.json())
      .then((data: { graph: Graph }) => {
        setGraph(data.graph);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [filter, setGraph, setLoading]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Graph canvas — full screen background */}
      <div className="absolute inset-0">
        <Graph3D />
      </div>

      {/* UI layer — on top */}
      <Header />
      {graph && <NetworkStats graph={graph} />}
      <ControlPanel />
      <TimeSlider />
      <IntelSidebar />
      <Disclaimer />
    </div>
  );
}
