import { create } from 'zustand';
import type { Graph, GraphFilter, GraphNode, GraphEdge } from '@/types/graph';

interface IntelState {
  graph: Graph | null;
  filter: GraphFilter;
  selectedNode: GraphNode | null;
  hoveredNode: GraphNode | null;
  yearRange: [number, number];
  isLoading: boolean;
  isAnimating: boolean;
  sidebarOpen: boolean;

  // Actions
  setGraph: (graph: Graph) => void;
  setFilter: (filter: Partial<GraphFilter>) => void;
  setSelectedNode: (node: GraphNode | null) => void;
  setHoveredNode: (node: GraphNode | null) => void;
  setYearRange: (range: [number, number]) => void;
  setLoading: (loading: boolean) => void;
  setAnimating: (animating: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  resetFilter: () => void;
}

const DEFAULT_FILTER: GraphFilter = {
  layer: 'all',
  yearRange: [2001, 2026],
};

export const useIntelStore = create<IntelState>((set) => ({
  graph: null,
  filter: DEFAULT_FILTER,
  selectedNode: null,
  hoveredNode: null,
  yearRange: [2001, 2026],
  isLoading: false,
  isAnimating: false,
  sidebarOpen: false,

  setGraph: (graph) => set({ graph }),
  setFilter: (partial) =>
    set((state) => ({ filter: { ...state.filter, ...partial } })),
  setSelectedNode: (selectedNode) =>
    set({ selectedNode, sidebarOpen: selectedNode !== null }),
  setHoveredNode: (hoveredNode) => set({ hoveredNode }),
  setYearRange: (yearRange) => set({ yearRange }),
  setLoading: (isLoading) => set({ isLoading }),
  setAnimating: (isAnimating) => set({ isAnimating }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  resetFilter: () => set({ filter: DEFAULT_FILTER, yearRange: [2001, 2026] }),
}));

export type { GraphNode, GraphEdge };
