'use client'

import React, { useRef, useMemo } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedNode } from '@/store/senateSlice';

const ForceGraph3DComponent = () => {
  const fgRef = useRef();
  const dispatch = useDispatch();
  const { filteredNodes, filteredLinks } = useSelector((state) => state.senate);

  // Deep clone the nodes and links to bypass Redux Toolkit's state freezing
  const graphData = useMemo(() => {
    const data = {
      nodes: filteredNodes.map(node => ({ ...node })),
      links: filteredLinks.map(link => ({ ...link }))
    };
    // Stringify and parse to completely remove proxy/frozen metadata
    return JSON.parse(JSON.stringify(data));
  }, [filteredNodes, filteredLinks]);

  const getLabel = (node) => {
    return `<div style="background: rgba(15, 23, 42, 0.95); color: #fff; padding: 10px; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.5); font-family: Inter, sans-serif; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
      <strong style="color: #38bdf8; font-size: 0.9rem;">${node.id}</strong><br/>
      <span style="opacity: 0.6; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">${node.group || ''}</span>
    </div>`;
  };

  const getColor = (node) => {
    const colors = {
      finance: '#f1c40f', // Gold
      lobby: '#9b59b6', // Purple
      defense: '#94a3b8', // Slate
      oil: '#10b981', // Emerald
      system: '#f43f5e', // Rose
      hub: '#f59e0b', // Amber
      policy: '#6366f1', // Indigo
      legacy: '#e11d48', // Rose/Crimson
      party: "#7f8c8d",
      democrat: "#3498db",
      republican: "#e74c3c"
    };
    return colors[node.type] || '#64748b';
  };

  return (
    <div className="w-full h-full">
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node) => getLabel(node)}
        nodeColor={(node) => getColor(node)}
        nodeVal={(node) => {
          if (node.type === 'finance' || node.type === 'lobby') return 45;
          if (node.type === 'defense' || node.type === 'policy') return 35;
          if (['Chuck Schumer', 'Mitch McConnell', 'Lindsey Graham', 'John Fetterman', 'Jack Reed'].includes(node.id)) return 25;
          return 12;
        }}
        linkWidth={2}
        linkColor={(link) => {
          if (link.label?.includes('Shareholder')) return '#f1c40f'; // Gold for finance
          if (link.label?.includes('Campaign') || link.label?.includes('Lobbying')) return '#9b59b6'; // Purple for lobby
          if (link.label?.includes('Procurement')) return '#94a3b8'; // Grey for defense
          return '#334155';
        }}
        onNodeClick={(node) => dispatch(setSelectedNode(node))}
        backgroundColor="#0f172a"
        showNavInfo={false}
      />
    </div>
  );
};

export default ForceGraph3DComponent;
