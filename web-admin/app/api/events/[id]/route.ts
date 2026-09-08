import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';
import { validateEventFields } from '@/lib/validation';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query(
      'SELECT * FROM events WHERE id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      event: result.rows[0]
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
}

const EDITABLE_FIELDS = [
  'title', 'short_description', 'full_description', 'start_date', 'end_date',
  'is_recurring', 'recurrence_rule', 'location_name', 'latitude', 'longitude', 'address',
  'category', 'tags', 'image_urls', 'thumbnail_url',
  'is_free', 'ticket_price', 'ticket_url', 'requires_reservation',
  'is_featured', 'organizer_name', 'organizer_contact',
];

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validationError = validateEventFields(body, { requireAll: false });
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    const fields = Object.keys(body).filter((key) => EDITABLE_FIELDS.includes(key));
    if (fields.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No hay campos editables en el body' },
        { status: 400 }
      );
    }

    const setClause = fields.map((field, i) => `${field} = $${i + 1}`).join(', ');
    const values = fields.map((field) => body[field]);

    const result = await pool.query(
      `UPDATE events SET ${setClause}, updated_at = NOW() WHERE id = $${fields.length + 1} RETURNING *`,
      [...values, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, event: result.rows[0] });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query(
      'UPDATE events SET is_active = false, updated_at = NOW() WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully'
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}
