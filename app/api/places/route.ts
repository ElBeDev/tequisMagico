import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let result;
    
    if (category) {
      result = await sql`
        SELECT * FROM places 
        WHERE is_active = true AND category = ${category}
        ORDER BY rating DESC 
        LIMIT 100
      `;
    } else {
      result = await sql`
        SELECT * FROM places 
        WHERE is_active = true
        ORDER BY rating DESC 
        LIMIT 100
      `;
    }
    
    return NextResponse.json({ 
      places: result,
      count: result.length 
    });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch places', message: error.message }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const result = await sql`
      INSERT INTO places (
        name, category, subcategory, latitude, longitude,
        address, short_description, full_description, price_range
      ) VALUES (
        ${body.name}, ${body.category}, ${body.subcategory},
        ${body.latitude}, ${body.longitude}, ${body.address},
        ${body.short_description}, ${body.full_description},
        ${body.price_range}
      )
      RETURNING *
    `;
    
    return NextResponse.json({ 
      place: result[0],
      success: true 
    }, { status: 201 });
  } catch (error: any) {
    console.error('Create error:', error);
    return NextResponse.json(
      { error: 'Failed to create place', message: error.message }, 
      { status: 500 }
    );
  }
}
