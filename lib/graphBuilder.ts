import type { Graph, GraphEdge, GraphFilter, GraphNode } from '@/types/graph';
import { loadAllNodes, loadEdges } from '@/lib/dataLoader';
import { applyFilter } from '@/lib/filters';

// ── Graph Builder ─────────────────────────────────────────────

export function buildGraph(filter?: GraphFilter): Graph {
  const allNodes: GraphNode[] = loadAllNodes();
  const allEdges: GraphEdge[] = loadEdges();

  const { nodes, edges } = filter
    ? applyFilter(allNodes, allEdges, filter)
    : { nodes: allNodes, edges: allEdges };

  return {
    nodes,
    edges,
    meta: {
      generated: new Date().toISOString(),
      nodeCount: nodes.length,
      edgeCount: edges.length,
    },
  };
}

// ── Senator Sub-graph ─────────────────────────────────────────
export function buildSenatorGraph(senatorId: string): Graph {
  const allNodes = loadAllNodes();
  const allEdges = loadEdges();

  // Find all edges connected to this senator
  const connectedEdges = allEdges.filter(
    (e) => e.source === senatorId || e.target === senatorId
  );

  // Collect all connected node IDs
  const connectedIds = new Set<string>([senatorId]);
  connectedEdges.forEach((e) => {
    connectedIds.add(e.source);
    connectedIds.add(e.target);
  });

  const nodes = allNodes.filter((n) => connectedIds.has(n.id));

  return {
    nodes,
    edges: connectedEdges,
    meta: {
      generated: new Date().toISOString(),
      nodeCount: nodes.length,
      edgeCount: connectedEdges.length,
    },
  };
}
