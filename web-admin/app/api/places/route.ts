import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const limit = searchParams.get('limit') || '100';
  
  try {
    let query = 'SELECT * FROM places WHERE is_active = true';
    const params: any[] = [];
    let paramCount = 1;
    
    if (category) {
      query += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }
    
    if (featured === 'true') {
      query += ` AND is_featured = true`;
    }
    
    query += ' ORDER BY rating DESC, created_at DESC';
    query += ` LIMIT $${paramCount}`;
    params.push(parseInt(limit));
    
    const result = await pool.query(query, params);
    
    return NextResponse.json({
      success: true,
      count: result.rowCount,
      places: result.rows
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch places',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.category || !body.latitude || !body.longitude) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const query = `
      INSERT INTO places (
        name, category, subcategory, latitude, longitude,
        address, short_description, full_description, price_range,
        image_urls, amenities, tags, phone_number, email,
        website, whatsapp_number, rating, reviews_count,
        is_verified, is_featured
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
      )
      RETURNING *
    `;
    
    const values = [
      body.name,
      body.category,
      body.subcategory || '',
      body.latitude,
      body.longitude,
      body.address || '',
      body.short_description || '',
      body.full_description || '',
      body.price_range || 'moderate',
      body.image_urls || [],
      body.amenities || [],
      body.tags || [],
      body.phone_number || null,
      body.email || null,
      body.website || null,
      body.whatsapp_number || null,
      body.rating || 0,
      body.reviews_count || 0,
      body.is_verified || false,
      body.is_featured || false
    ];
    
    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      place: result.rows[0]
    }, { status: 201 });
    
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create place',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
