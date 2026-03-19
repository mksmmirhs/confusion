import { NextResponse } from 'next/server';
import type { TimelineEvent } from '@/types/graph';
import { loadEdges, loadAllNodes } from '@/lib/dataLoader';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse> {
  try {
    const edges = loadEdges();
    const nodes = loadAllNodes();
    const nodeMap = new Map(nodes.map((n) => ({ ...n, id: n.id })).map((n) => [n.id, n]));

    // Group events by year
    const byYear = new Map<number, TimelineEvent['events']>();

    edges.forEach((edge) => {
      const year = parseInt(edge.timestamp.slice(0, 4), 10);
      if (!byYear.has(year)) byYear.set(year, []);

      const source = nodeMap.get(edge.source);
      const target = nodeMap.get(edge.target);

      byYear.get(year)!.push({
        id: edge.id,
        label: edge.label,
        type: edge.type,
        description: `${source?.label ?? edge.source} → ${target?.label ?? edge.target}: ${edge.label}`,
      });
    });

    const timeline: TimelineEvent[] = Array.from(byYear.entries())
      .sort(([a], [b]) => a - b)
      .map(([year, events]) => ({ year, events }));

    return NextResponse.json(timeline, {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to build timeline', details: String(err) },
      { status: 500 }
    );
  }
}
