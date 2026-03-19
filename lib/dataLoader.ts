import fs from 'fs';
import path from 'path';
import type { CompanyNode, EventNode, GraphEdge, GraphNode, OrganizationNode, SenatorNode } from '@/types/graph';

// ── In-memory cache ───────────────────────────────────────────
const cache = new Map<string, unknown>();

function loadJson<T>(filename: string): T {
  if (cache.has(filename)) return cache.get(filename) as T;
  const filePath = path.join(process.cwd(), 'data', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw) as T;
  cache.set(filename, parsed);
  return parsed;
}

// ── Loaders ───────────────────────────────────────────────────
export function loadSenators(): SenatorNode[] {
  return loadJson<SenatorNode[]>('senators.json');
}

export function loadWars(): EventNode[] {
  return loadJson<EventNode[]>('wars.json');
}

export function loadCompanies(): CompanyNode[] {
  return loadJson<CompanyNode[]>('companies.json');
}

export function loadOrganizations(): OrganizationNode[] {
  return loadJson<OrganizationNode[]>('lobbying.json');
}

export function loadEdges(): GraphEdge[] {
  const votes = loadJson<GraphEdge[]>('votes.json');
  const ownership = loadJson<GraphEdge[]>('ownership.json');
  return [...votes, ...ownership];
}

export function loadAllNodes(): GraphNode[] {
  return [
    ...loadSenators(),
    ...loadCompanies(),
    ...loadOrganizations(),
    ...loadWars(),
  ];
}

export function clearCache(): void {
  cache.clear();
}
