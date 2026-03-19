'use client';

import React from 'react';
import { X, ExternalLink, User, Building2, Globe, Calendar } from 'lucide-react';
import { useIntelStore } from '@/lib/store';
import type { GraphNode, SenatorNode, CompanyNode, OrganizationNode, EventNode } from '@/types/graph';
import clsx from 'clsx';

function NodeTypeBadge({ node }: { node: GraphNode }) {
  const config: Record<string, { label: string; color: string }> = {
    senator: { label: 'SENATOR', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
    company: { label: 'COMPANY', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
    organization: { label: 'ORGANIZATION', color: 'text-purple-400 bg-purple-400/10 border-purple-400/30' },
    event: { label: 'EVENT', color: 'text-rose-400 bg-rose-400/10 border-rose-400/30' },
  };
  const cfg = config[node.type] ?? config.senator;
  return (
    <span className={clsx('font-mono text-[9px] px-2 py-0.5 rounded border', cfg.color)}>
      {cfg.label}
    </span>
  );
}

function SenatorProfile({ node }: { node: SenatorNode }) {
  const partyColor = node.party === 'democrat' ? 'text-blue-400' : node.party === 'republican' ? 'text-red-400' : 'text-slate-400';
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-surface-3 rounded p-2">
          <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Party</div>
          <div className={clsx('font-mono text-xs font-bold capitalize', partyColor)}>{node.party}</div>
        </div>
        <div className="bg-surface-3 rounded p-2">
          <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">State</div>
          <div className="font-mono text-xs font-bold text-white">{node.state}</div>
        </div>
        {node.religion && (
          <div className="bg-surface-3 rounded p-2">
            <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Religion</div>
            <div className="font-mono text-xs text-white">{node.religion}</div>
          </div>
        )}
        {node.born && (
          <div className="bg-surface-3 rounded p-2">
            <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Born</div>
            <div className="font-mono text-xs text-white">{node.born}</div>
          </div>
        )}
      </div>
      {node.committees && node.committees.length > 0 && (
        <div className="bg-surface-3 rounded p-2">
          <div className="font-mono text-[9px] text-slate-500 uppercase mb-2">Committees</div>
          <div className="flex flex-wrap gap-1">
            {node.committees.map((c) => (
              <span key={c} className="font-mono text-[9px] px-1.5 py-0.5 bg-surface-4 text-slate-300 rounded">
                {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CompanyProfile({ node }: { node: CompanyNode }) {
  const catColor = node.category === 'defense' ? 'text-slate-400' : node.category === 'oil' ? 'text-emerald-400' : 'text-amber-400';
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-surface-3 rounded p-2">
          <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Category</div>
          <div className={clsx('font-mono text-xs font-bold capitalize', catColor)}>{node.category}</div>
        </div>
        {node.revenue && (
          <div className="bg-surface-3 rounded p-2">
            <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Revenue</div>
            <div className="font-mono text-xs text-white">{node.revenue}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function EventProfile({ node }: { node: EventNode }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-surface-3 rounded p-2">
        <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">Start Year</div>
        <div className="font-mono text-xs font-bold text-rose-400">{node.startYear}</div>
      </div>
      {node.endYear && (
        <div className="bg-surface-3 rounded p-2">
          <div className="font-mono text-[9px] text-slate-500 uppercase mb-1">End Year</div>
          <div className="font-mono text-xs font-bold text-rose-400">{node.endYear}</div>
        </div>
      )}
    </div>
  );
}

export default function IntelSidebar() {
  const { selectedNode, sidebarOpen, setSidebarOpen, setSelectedNode, graph } = useIntelStore();

  if (!sidebarOpen || !selectedNode) return null;

  // Find edges connected to this node
  const connectedEdges = graph?.edges.filter(
    (e) => e.source === selectedNode.id || e.target === selectedNode.id
  ) ?? [];

  return (
    <div
      className="absolute top-0 right-0 h-full w-80 z-50 border-l border-border overflow-y-auto animate-slide-in"
      style={{ background: 'rgba(10,15,26,0.97)', backdropFilter: 'blur(16px)' }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-surface-1/90 border-b border-border p-4 flex items-start justify-between" style={{ background: 'rgba(13,20,36,0.95)' }}>
        <div className="flex-1 mr-3">
          <NodeTypeBadge node={selectedNode} />
          <h2 className="font-mono text-sm font-bold text-white mt-1.5 leading-tight">
            {selectedNode.label}
          </h2>
        </div>
        <button
          onClick={() => { setSidebarOpen(false); setSelectedNode(null); }}
          className="p-1.5 rounded hover:bg-surface-3 text-slate-500 hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Info */}
        <div>
          <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2">
            Intelligence Brief
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{selectedNode.info}</p>
        </div>

        {/* Type-specific fields */}
        <div>
          {selectedNode.type === 'senator' && <SenatorProfile node={selectedNode as SenatorNode} />}
          {selectedNode.type === 'company' && <CompanyProfile node={selectedNode as CompanyNode} />}
          {selectedNode.type === 'event' && <EventProfile node={selectedNode as EventNode} />}
        </div>

        {/* Connections */}
        {connectedEdges.length > 0 && (
          <div>
            <div className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mb-2">
              Connections ({connectedEdges.length})
            </div>
            <div className="space-y-1.5">
              {connectedEdges.slice(0, 10).map((edge) => {
                const dir = edge.source === selectedNode.id ? '→' : '←';
                const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
                const otherNode = graph?.nodes.find((n) => n.id === otherId);
                return (
                  <div key={edge.id} className="bg-surface-3 rounded p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-accent-blue font-mono text-[9px] font-bold">{edge.type}</span>
                      <span className="text-slate-600">{dir}</span>
                      <span className="font-mono text-[9px] text-slate-300 truncate">
                        {otherNode?.label ?? otherId}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-slate-400">{edge.label}</div>
                    {edge.amount && (
                      <div className="font-mono text-[9px] text-amber-400 mt-0.5">
                        ${Number(edge.amount).toLocaleString()}
                      </div>
                    )}
                  </div>
                );
              })}
              {connectedEdges.length > 10 && (
                <div className="text-center font-mono text-[9px] text-slate-600 py-1">
                  +{connectedEdges.length - 10} more connections
                </div>
              )}
            </div>
          </div>
        )}

        {/* Source */}
        <div className="pt-2 border-t border-border/50">
          <a
            href={selectedNode.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 hover:text-accent-blue transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            View Source Data
          </a>
        </div>
      </div>
    </div>
  );
}
