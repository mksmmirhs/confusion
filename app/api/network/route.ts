import { NextResponse } from 'next/server';
import type { GraphFilter } from '@/types/graph';
import { buildGraph } from '@/lib/graphBuilder';

export const dynamic = 'force-dynamic';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  // Build filter from query params
  const filter: GraphFilter = {};

  const layer = searchParams.get('layer');
  if (layer && ['war', 'oil', 'lobby', 'finance', 'legacy', 'bipartisan', 'all'].includes(layer)) {
    filter.layer = layer as GraphFilter['layer'];
  }

  const party = searchParams.get('party');
  if (party && ['democrat', 'republican', 'independent'].includes(party)) {
    filter.party = party as GraphFilter['party'];
  }

  const search = searchParams.get('search');
  if (search) filter.search = search;

  const war = searchParams.get('war');
  if (war) filter.war = war;

  const yearFrom = searchParams.get('yearFrom');
  const yearTo = searchParams.get('yearTo');
  if (yearFrom && yearTo) {
    filter.yearRange = [parseInt(yearFrom, 10), parseInt(yearTo, 10)];
  }

  try {
    const graph = buildGraph(Object.keys(filter).length > 0 ? filter : undefined);
    return NextResponse.json(
      { graph, filter, cached: true },
      {
        headers: {
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to build graph', details: String(err) },
      { status: 500 }
    );
  }
}
