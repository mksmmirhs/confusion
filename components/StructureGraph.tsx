'use client';

import React, { useRef, useEffect, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import graphDataRaw from '@/data/structure_graph.json';

interface Node {
  id: string;
  name: string;
  group: string;
  color: string;
  val: number;
  info: string;
  hidden?: boolean;
}

interface Link {
  source: string;
  target: string;
  label: string;
  type: string;
  hidden?: boolean;
}

export default function StructureGraph({ onNodeClick }: { onNodeClick?: (node: Node) => void }) {
  const fgRef = useRef<any>();
  const [graphData, setGraphData] = useState<{ nodes: Node[]; links: Link[] }>({ nodes: [], links: [] });
  const [showInfluence, setShowInfluence] = useState(false);

  useEffect(() => {
    // Filter data based on showInfluence
    const nodes = graphDataRaw.nodes.filter(n => !n.hidden || showInfluence);
    const links = graphDataRaw.links.filter(l => !l.hidden || showInfluence);
    setGraphData({ nodes, links });
  }, [showInfluence]);

  return (
    <div className="relative w-full h-[600px] bg-surface rounded-2xl border border-white/5 overflow-hidden">
      <div className="absolute top-6 left-6 z-10 space-y-4">
        <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 inline-block">
          Interactive Power Map
        </h3>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowInfluence(!showInfluence)}
            className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
              showInfluence 
                ? 'bg-accent-blue text-white border-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                : 'bg-surface-3 text-slate-500 border-white/10 hover:border-white/30'
            }`}
          >
            {showInfluence ? 'Hide' : 'Show'} Influence Layer (Lobby/Corps)
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10 font-mono text-[9px] text-slate-500 bg-black/40 backdrop-blur-md px-3 py-2 rounded border border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" /> Executive
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500" /> Legislative
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Judicial
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-purple-500" /> Influence
          </div>
        </div>
      </div>

      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="name"
        nodeColor={(node: any) => node.color}
        nodeVal={(node: any) => node.val}
        linkColor={() => 'rgba(255, 255, 255, 0.1)'}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        backgroundColor="rgba(10, 15, 26, 1)"
        onNodeClick={(node: any) => onNodeClick && onNodeClick(node)}
        nodeOpacity={0.8}
        linkOpacity={0.2}
      />
    </div>
  );
}
