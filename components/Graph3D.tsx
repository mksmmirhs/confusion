'use client';

import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { GraphNode, GraphEdge } from '@/types/graph';
import { useIntelStore } from '@/lib/store';

// Dynamic import prevents SSR crash (three.js uses window)
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-surface">
      <div className="text-accent-blue font-mono text-sm animate-pulse">
        INITIALIZING NETWORK GRAPH...
      </div>
    </div>
  ),
});

// Color mapping by node type + sub-type
function getNodeColor(node: GraphNode): string {
  if (node.type === 'senator') {
    if (node.party === 'democrat') return '#3b82f6';      // Blue
    if (node.party === 'republican') return '#ef4444';    // Red
    return '#94a3b8';                                       // Independent — slate
  }
  if (node.type === 'company') {
    if (node.category === 'defense') return '#64748b';    // Gray
    if (node.category === 'oil') return '#10b981';        // Emerald
    if (node.category === 'finance') return '#f1c40f';    // Gold
  }
  if (node.type === 'organization') return '#a78bfa';     // Purple
  if (node.type === 'event') return '#f43f5e';            // Rose/Crimson
  return '#94a3b8';
}

function getNodeSize(node: GraphNode): number {
  if (node.type === 'company' && node.category === 'finance') return 50;
  if (node.type === 'organization') return 40;
  if (node.type === 'company' && node.category === 'defense') return 35;
  if (node.type === 'event') return 45;
  return 12;
}

function getLinkColor(edge: GraphEdge): string {
  switch (edge.type) {
    case 'VOTED_FOR': return 'rgba(244,63,94,0.7)';       // Rose  — war authorization
    case 'DONATED_TO': return 'rgba(167,139,250,0.7)';    // Purple — money flow
    case 'OWNS': return 'rgba(241,196,15,0.6)';           // Gold   — ownership
    case 'CONTRACT_AWARDED': return 'rgba(100,116,139,0.7)'; // Gray — procurement
    case 'LOBBIED': return 'rgba(16,185,129,0.7)';        // Emerald — lobby
    default: return 'rgba(56,189,248,0.4)';
  }
}

export default function Graph3D() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fgRef = useRef<any>(null);
  const { graph, setSelectedNode, setHoveredNode } = useIntelStore();

  // structuredClone: Deep-copy to avoid both Redux-style frozen objects AND D3 mutation errors
  const graphData = useMemo(() => {
    if (!graph) return { nodes: [], links: [] };
    return {
      nodes: structuredClone(graph.nodes),
      links: structuredClone(graph.edges).map((e: GraphEdge) => ({
        ...e,
        source: e.source,
        target: e.target,
      })),
    };
  }, [graph]);

  const handleNodeClick = useCallback(
    (node: object) => {
      setSelectedNode(node as GraphNode);
    },
    [setSelectedNode]
  );

  const handleNodeHover = useCallback(
    (node: object | null) => {
      setHoveredNode(node ? (node as GraphNode) : null);
      document.body.style.cursor = node ? 'pointer' : 'default';
    },
    [setHoveredNode]
  );

  // Initial camera pull-back
  useEffect(() => {
    if (fgRef.current) {
      setTimeout(() => {
        fgRef.current?.cameraPosition({ x: 0, y: 0, z: 800 }, { x: 0, y: 0, z: 0 }, 2000);
      }, 500);
    }
  }, []);

  if (!graph) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-surface">
        <div className="text-center">
          <div className="text-accent-blue font-mono text-sm animate-pulse mb-2">
            LOADING INTELLIGENCE NETWORK...
          </div>
          <div className="text-surface-4 font-mono text-xs">
            Parsing geopolitical data matrix...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeId="id"
        nodeLabel={(node: object) => {
          const n = node as GraphNode;
          return `<div style="background:rgba(10,15,26,0.95);color:#fff;padding:8px 12px;border-radius:6px;border:1px solid rgba(56,189,248,0.3);font-family:monospace;font-size:12px;max-width:220px">
            <strong style="color:#38bdf8">${n.label}</strong><br/>
            <span style="opacity:0.6;font-size:10px;text-transform:uppercase">${n.type}${n.type === 'senator' ? ' · ' + (n as { party?: string }).party : ''}</span><br/>
            <span style="opacity:0.8;font-size:11px;margin-top:4px;display:block">${n.info.slice(0, 100)}...</span>
          </div>`;
        }}
        nodeColor={(node: object) => getNodeColor(node as GraphNode)}
        nodeVal={(node: object) => getNodeSize(node as GraphNode)}
        linkColor={(link: object) => getLinkColor(link as GraphEdge)}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={1.5}
        linkDirectionalParticleSpeed={0.004}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        backgroundColor="#0a0f1a"
        showNavInfo={false}
        enableNavigationControls
        cooldownTicks={100}
      />
    </div>
  );
}
