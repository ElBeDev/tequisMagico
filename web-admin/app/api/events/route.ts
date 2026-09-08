import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';
import { validateEventFields } from '@/lib/validation';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const limit = searchParams.get('limit') || '100';

  try {
    let query = 'SELECT * FROM events WHERE is_active = true';
    const params: any[] = [];
    let paramCount = 1;

    if (category && category !== 'all') {
      query += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }

    if (featured === 'true') {
      query += ` AND is_featured = true`;
    }

    query += ' ORDER BY start_date ASC';
    query += ` LIMIT $${paramCount}`;
    params.push(parseInt(limit));

    const result = await pool.query(query, params);

    return NextResponse.json({
      success: true,
      count: result.rowCount,
      events: result.rows
    }, {
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch events',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationError = validateEventFields(body, { requireAll: true });
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO events (
        title, short_description, full_description, start_date, end_date,
        is_recurring, recurrence_rule, location_name, latitude, longitude, address,
        category, tags, image_urls, thumbnail_url, is_free, ticket_price, ticket_url,
        requires_reservation, is_featured, organizer_name, organizer_contact
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
      )
      RETURNING *
    `;

    const values = [
      body.title,
      body.short_description || '',
      body.full_description || '',
      body.start_date,
      body.end_date,
      body.is_recurring || false,
      body.recurrence_rule || null,
      body.location_name || null,
      body.latitude || null,
      body.longitude || null,
      body.address || null,
      body.category,
      body.tags || [],
      body.image_urls || [],
      body.thumbnail_url || null,
      body.is_free || false,
      body.ticket_price || null,
      body.ticket_url || null,
      body.requires_reservation || false,
      body.is_featured || false,
      body.organizer_name || null,
      body.organizer_contact || null
    ];

    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      event: result.rows[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create event',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
