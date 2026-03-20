// ============================================================
// types/graph.ts — Core Type System for Senate Intelligence
// ============================================================

export type Party = 'democrat' | 'republican' | 'independent';
export type NodeType = 'senator' | 'company' | 'organization' | 'event';
export type CompanyCategory = 'defense' | 'oil' | 'finance';
export type EdgeType =
  | 'DONATED_TO'
  | 'VOTED_FOR'
  | 'OWNS'
  | 'CONTRACT_AWARDED'
  | 'LOBBIED';

// ── Node ─────────────────────────────────────────────────────
export interface SenatorNode {
  id: string;
  type: 'senator';
  label: string;
  party: Party;
  state: string;
  religion?: string;
  committees?: string[];
  born?: number;
  info: string;
  source: string;
}

export interface CompanyNode {
  id: string;
  type: 'company';
  label: string;
  category: CompanyCategory;
  revenue?: string;
  info: string;
  source: string;
}

export interface OrganizationNode {
  id: string;
  type: 'organization';
  label: string;
  category: 'pac' | 'lobby' | 'think-tank';
  info: string;
  source: string;
}

export interface EventNode {
  id: string;
  type: 'event';
  label: string;
  startYear: number;
  endYear?: number;
  info: string;
  source: string;
}

export type GraphNode =
  | SenatorNode
  | CompanyNode
  | OrganizationNode
  | EventNode;

// ── Edge ─────────────────────────────────────────────────────
export interface GraphEdge {
  id: string;
  source: string;       // node id
  target: string;       // node id
  type: EdgeType;
  weight: number;       // normalized 0–10
  amount?: number;      // USD if financial
  timestamp: string;    // ISO date or year
  label: string;
  source_ref: string;   // citation URL
}

// ── Graph ─────────────────────────────────────────────────────
export interface Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  meta: {
    generated: string;
    nodeCount: number;
    edgeCount: number;
  };
}

// ── Filter ───────────────────────────────────────────────────
export interface GraphFilter {
  yearRange?: [number, number];
  nodeTypes?: NodeType[];
  edgeTypes?: EdgeType[];
  party?: Party;
  war?: string;
  search?: string;
  layer?: 'war' | 'oil' | 'lobby' | 'finance' | 'legacy' | 'bipartisan' | 'all';
}

// ── API Response ──────────────────────────────────────────────
export interface NetworkResponse {
  graph: Graph;
  filter: GraphFilter;
  cached: boolean;
}

export interface TimelineEvent {
  year: number;
  events: Array<{
    id: string;
    label: string;
    type: string;
    description: string;
  }>;
}
