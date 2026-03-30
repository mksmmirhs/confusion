'use client';

import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-[600px] bg-surface-1 rounded-2xl border border-white/5">
      <div className="text-accent-blue font-mono text-sm animate-pulse">
        CALIBRATING SYSTEM NODES...
      </div>
    </div>
  ),
});

interface SystemNode {
  id: string;
  name: string;
  val: number;
  group: 'country' | 'finance' | 'defense' | 'government';
  color: string;
  info: string;
}

interface SystemLink {
  source: string;
  target: string;
  label: string;
  val: number;
}

interface SystemGraphProps {
  data: {
    nodes: SystemNode[];
    links: SystemLink[];
  };
  viewMode: 'loop' | 'tree' | 'funnel';
}

export default function SystemForceGraph({ data, viewMode }: SystemGraphProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fgRef = useRef<any>(null);

  // Apply layout transformations based on viewMode
  const processedData = useMemo(() => {
    const nodes = data.nodes.map(n => ({ ...n }));
    const links = data.links.map(l => ({ ...l }));

    if (viewMode === 'tree') {
      // Logic for hierarchical layout could go here (e.g., setting fixed z levels)
      // For now we rely on the force engine but could influence it with forces
    }

    return { nodes, links };
  }, [data, viewMode]);

  useEffect(() => {
    if (fgRef.current) {
      // Adjust forces based on viewMode
      if (viewMode === 'loop') {
        fgRef.current.d3Force('charge').strength(-250);
        fgRef.current.d3Force('link').distance(200);
      } else if (viewMode === 'tree') {
        fgRef.current.d3Force('charge').strength(-400);
        fgRef.current.d3Force('link').distance(150);
      }
      
      // Auto-center and zoom to fit
      setTimeout(() => {
        fgRef.current.zoomToFit(600, 100);
      }, 300);
    }
  }, [viewMode, data]);

  return (
    <div className="w-full h-[700px] relative rounded-2xl overflow-hidden border border-white/10 bg-[#050505]">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Topology</div>
        <div className="text-white font-bold text-lg uppercase tracking-tight">
          {viewMode === 'loop' && '🔄 Circular Cycle Analysis'}
          {viewMode === 'tree' && '🌲 Institutional Hierarchy'}
          {viewMode === 'funnel' && '📉 Conflict Funnel (Aid)'}
        </div>
      </div>

      <ForceGraph3D
        ref={fgRef}
        graphData={processedData}
        nodeLabel={(node: any) => `
          <div style="background:rgba(5,5,5,0.95);color:#fff;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);font-family:monospace;font-size:11px;box-shadow:0 10px 30px rgba(0,0,0,0.5)">
            <div style="color:${node.color};font-weight:bold;margin-bottom:4px;font-size:13px">${node.name}</div>
            <div style="opacity:0.5;text-transform:uppercase;font-size:9px;margin-bottom:8px">${node.group} node</div>
            <div style="opacity:0.8;line-height:1.4">${node.info}</div>
          </div>
        `}
        nodeColor={(node: any) => node.color}
        nodeVal={(node: any) => node.val}
        nodeOpacity={0.9}
        linkWidth={1.5}
        linkColor={() => 'rgba(255,255,255,0.1)'}
        linkDirectionalParticles={node => (node as any).val ? 2 : 0}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
        linkDirectionalParticleColor={(link: any) => {
          const targetNode = data.nodes.find(n => n.id === (typeof link.target === 'object' ? link.target.id : link.target));
          return targetNode?.color || '#fff';
        }}
        backgroundColor="#050505"
        showNavInfo={false}
        onEngineStop={() => {
          // Re-center if it drifts too much
          fgRef.current?.zoomToFit(400, 100);
        }}
      />

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-10 grid grid-cols-2 gap-x-6 gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
        {[
          { label: 'Root Capital (SWF)', color: '#10b981' },
          { label: 'Control Layer (Big 3)', color: '#3b82f6' },
          { label: 'Industry (Defense)', color: '#f59e0b' },
          { label: 'Policy (Senate)', color: '#ef4444' }
        ].map(item => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
