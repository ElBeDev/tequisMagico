import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';
import { validatePlaceFields } from '@/lib/validation';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query(
      'SELECT * FROM places WHERE id = $1',
      [id]
    );
    
    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Place not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      place: result.rows[0]
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch place' },
      { status: 500 }
    );
  }
}

const EDITABLE_FIELDS = [
  'name', 'category', 'subcategory', 'latitude', 'longitude', 'address',
  'short_description', 'full_description', 'price_range',
  'phone_number', 'email', 'website', 'whatsapp_number',
  'amenities', 'tags', 'is_featured', 'is_verified',
  'thumbnail_url', 'image_urls', 'schedule_json',
];

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validationError = validatePlaceFields(body, { requireAll: false });
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
      `UPDATE places SET ${setClause}, updated_at = NOW() WHERE id = $${fields.length + 1} RETURNING *`,
      [...values, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Place not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, place: result.rows[0] });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update place' },
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
      'UPDATE places SET is_active = false, updated_at = NOW() WHERE id = $1 RETURNING *',
      [id]
    );
    
    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Place not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Place deleted successfully'
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete place' },
      { status: 500 }
    );
  }
}
