import type { GraphEdge, GraphFilter, GraphNode } from '@/types/graph';

// ── Filter Logic ──────────────────────────────────────────────

export function applyFilter(
  nodes: GraphNode[],
  edges: GraphEdge[],
  filter: GraphFilter
): { nodes: GraphNode[]; edges: GraphEdge[] } {
  let filteredNodes = [...nodes];
  let filteredEdges = [...edges];

  // Layer filter
  if (filter.layer && filter.layer !== 'all') {
    const layerNodeIds = new Set<string>();

    switch (filter.layer) {
      case 'war':
        filteredNodes.forEach((n) => {
          if (n.type === 'event') layerNodeIds.add(n.id);
        });
        // Also include senators connected to event nodes
        filteredEdges
          .filter((e) => layerNodeIds.has(e.source) || layerNodeIds.has(e.target))
          .forEach((e) => {
            layerNodeIds.add(e.source);
            layerNodeIds.add(e.target);
          });
        break;
      case 'oil':
        filteredNodes.forEach((n) => {
          if (n.type === 'company' && n.category === 'oil') layerNodeIds.add(n.id);
        });
        filteredEdges
          .filter((e) => layerNodeIds.has(e.source) || layerNodeIds.has(e.target))
          .forEach((e) => {
            layerNodeIds.add(e.source);
            layerNodeIds.add(e.target);
          });
        break;
      case 'lobby':
        filteredNodes.forEach((n) => {
          if (n.type === 'organization') layerNodeIds.add(n.id);
        });
        filteredEdges
          .filter((e) => e.type === 'DONATED_TO' || e.type === 'LOBBIED')
          .forEach((e) => {
            layerNodeIds.add(e.source);
            layerNodeIds.add(e.target);
          });
        break;
      case 'finance':
        filteredNodes.forEach((n) => {
          if (n.type === 'company' && n.category === 'finance') layerNodeIds.add(n.id);
        });
        filteredEdges
          .filter((e) => e.type === 'OWNS')
          .forEach((e) => {
            layerNodeIds.add(e.source);
            layerNodeIds.add(e.target);
          });
        break;
      case 'legacy':
        filteredNodes.forEach((n) => {
          if (
            n.type === 'event' &&
            ('startYear' in n) &&
            (n.startYear === 2001 || n.startYear === 2002)
          ) {
            layerNodeIds.add(n.id);
          }
        });
        filteredEdges
          .filter((e) => layerNodeIds.has(e.source) || layerNodeIds.has(e.target))
          .forEach((e) => {
            layerNodeIds.add(e.source);
            layerNodeIds.add(e.target);
          });
        break;
      case 'bipartisan':
        filteredNodes.forEach((n) => {
          if (n.type === 'organization') {
            const connectedSenatorIds = new Set<string>();
            const connectedParties = new Set<string>();

            edges.forEach((e) => {
              if (e.source === n.id || e.target === n.id) {
                const otherId = e.source === n.id ? e.target : e.source;
                const otherNode = nodes.find((nod) => nod.id === otherId);
                if (otherNode && otherNode.type === 'senator') {
                  connectedSenatorIds.add(otherNode.id);
                  connectedParties.add(otherNode.party);
                }
              }
            });

            if (connectedParties.has('democrat') && connectedParties.has('republican')) {
              layerNodeIds.add(n.id);
              connectedSenatorIds.forEach((id) => layerNodeIds.add(id));
            }
          }
        });
        break;
    }

    filteredNodes = filteredNodes.filter((n) => layerNodeIds.has(n.id));
  }

  // Party filter
  if (filter.party) {
    const partyNodeIds = new Set(
      filteredNodes
        .filter((n) => n.type !== 'senator' || (n.type === 'senator' && n.party === filter.party))
        .map((n) => n.id)
    );
    filteredNodes = filteredNodes.filter((n) => partyNodeIds.has(n.id));
  }

  // Year range filter (edges)
  if (filter.yearRange) {
    const [from, to] = filter.yearRange;
    filteredEdges = filteredEdges.filter((e) => {
      const year = parseInt(e.timestamp.slice(0, 4), 10);
      return year >= from && year <= to;
    });
  }

  // Search filter
  if (filter.search && filter.search.trim()) {
    const q = filter.search.toLowerCase();
    filteredNodes = filteredNodes.filter((n) => n.label.toLowerCase().includes(q));
  }

  // War filter
  if (filter.war) {
    const warNodeIds = new Set<string>();
    filteredNodes
      .filter((n) => n.id === filter.war)
      .forEach((n) => warNodeIds.add(n.id));
    filteredEdges
      .filter((e) => warNodeIds.has(e.source) || warNodeIds.has(e.target))
      .forEach((e) => {
        warNodeIds.add(e.source);
        warNodeIds.add(e.target);
      });
    if (warNodeIds.size > 0) {
      filteredNodes = filteredNodes.filter((n) => warNodeIds.has(n.id));
    }
  }

  // Ensure link integrity — only edges where BOTH endpoints exist
  const nodeIdSet = new Set(filteredNodes.map((n) => n.id));
  filteredEdges = filteredEdges.filter(
    (e) => nodeIdSet.has(e.source) && nodeIdSet.has(e.target)
  );

  return { nodes: filteredNodes, edges: filteredEdges };
}
