import { NextResponse } from 'next/server';
import { buildSenatorGraph } from '@/lib/graphBuilder';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'Senator ID required' }, { status: 400 });
  }

  try {
    const graph = buildSenatorGraph(id);
    if (graph.nodes.length === 0) {
      return NextResponse.json({ error: `Senator not found: ${id}` }, { status: 404 });
    }
    return NextResponse.json({ graph, senatorId: id });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to build senator graph', details: String(err) },
      { status: 500 }
    );
  }
}
