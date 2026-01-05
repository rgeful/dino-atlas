import { NextResponse } from 'next/server';
import { db } from '@/db';
import { dinosaurs } from '@/db/schema';

export async function GET() {
  try {
    const allDinosaurs = await db.select().from(dinosaurs);
    return NextResponse.json(allDinosaurs);
  } catch (error) {
    console.error('Error fetching dinosaurs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dinosaurs' },
      { status: 500 }
    );
  }
}
