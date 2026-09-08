# Database Schema para Vercel Postgres/Blob

## Setup Instructions

### 1. Crear Base de Datos en Vercel

```bash
# En tu proyecto de Vercel
vercel postgres create tequismagico-db

# O usar Vercel Blob para assets
vercel blob create
```

### 2. Schema SQL

```sql
-- TABLA: places
CREATE TABLE places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  subcategory VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  address TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  price_range VARCHAR(20) NOT NULL,
  image_urls TEXT[], -- Array de URLs
  video_urls TEXT[], -- Array de URLs
  thumbnail_url TEXT,
  phone_number VARCHAR(20),
  email VARCHAR(100),
  website TEXT,
  whatsapp_number VARCHAR(20),
  schedule_json JSONB, -- {"lunes": "9:00-18:00", ...}
  amenities TEXT[], -- Array de strings
  tags TEXT[], -- Array de strings
  rating DECIMAL(3, 2) DEFAULT 0.0,
  reviews_count INTEGER DEFAULT 0,
  business_tier VARCHAR(20) DEFAULT 'none',
  business_owner_id VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  views_count INTEGER DEFAULT 0,
  favorites_count INTEGER DEFAULT 0
);

-- TABLA: events
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  is_recurring BOOLEAN DEFAULT false,
  recurrence_rule TEXT,
  location_name VARCHAR(255),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  address TEXT,
  category VARCHAR(50) NOT NULL,
  tags TEXT[], -- Array de strings
  image_urls TEXT[], -- Array de URLs
  thumbnail_url TEXT,
  is_free BOOLEAN DEFAULT false,
  ticket_price VARCHAR(100),
  ticket_url TEXT,
  requires_reservation BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  organizer_name VARCHAR(255),
  organizer_contact VARCHAR(100)
);

-- TABLA: users (para después)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  is_premium BOOLEAN DEFAULT false,
  subscription_start_date TIMESTAMP,
  subscription_end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- TABLA: favorites
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  place_id UUID REFERENCES places(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, place_id)
);

-- TABLA: reviews (para después)
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  place_id UUID REFERENCES places(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- TABLA: business_subscriptions
CREATE TABLE business_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id UUID REFERENCES places(id) ON DELETE CASCADE,
  tier VARCHAR(20) NOT NULL,
  start_date TIMESTAMP NOT NULL,
  renewal_date TIMESTAMP NOT NULL,
  is_active BOOLEAN DEFAULT true,
  stripe_subscription_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ÍNDICES para mejorar performance
CREATE INDEX idx_places_category ON places(category);
CREATE INDEX idx_places_rating ON places(rating DESC);
CREATE INDEX idx_places_featured ON places(is_featured) WHERE is_featured = true;
CREATE INDEX idx_places_location ON places(latitude, longitude);
CREATE INDEX idx_events_dates ON events(start_date, end_date);
CREATE INDEX idx_events_featured ON events(is_featured) WHERE is_featured = true;
CREATE INDEX idx_favorites_user ON favorites(user_id);
CREATE INDEX idx_reviews_place ON reviews(place_id);

-- FUNCIONES útiles
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGERS
CREATE TRIGGER update_places_updated_at BEFORE UPDATE ON places
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 3. API Endpoints (Next.js API Routes)

### Estructura de carpetas

```
/api
  /places
    /route.ts           # GET all, POST new
    /[id]/route.ts      # GET, PUT, DELETE single
    /search/route.ts    # POST search
  /events
    /route.ts           # GET all, POST new
    /[id]/route.ts      # GET, PUT, DELETE single
  /favorites
    /route.ts           # GET user favorites, POST add
    /[id]/route.ts      # DELETE remove
  /upload
    /route.ts           # POST upload images to Vercel Blob
```

---

## 4. Environment Variables (.env)

```bash
# Database
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."

# Vercel Blob (para imágenes)
BLOB_READ_WRITE_TOKEN="..."

# Stripe (para pagos de negocios)
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# NextAuth (si usas autenticación)
NEXTAUTH_URL="https://tudominio.com"
NEXTAUTH_SECRET="..."

# CloudKit (para sincronización con iOS)
CLOUDKIT_CONTAINER_ID="..."
CLOUDKIT_API_TOKEN="..."
```

---

## 5. Seed Data Script

```typescript
// scripts/seed.ts
import { sql } from '@vercel/postgres';
import placesData from './data/places.json';
import eventsData from './data/events.json';

async function seedPlaces() {
  for (const place of placesData) {
    await sql`
      INSERT INTO places (
        name, category, subcategory, latitude, longitude, 
        address, short_description, full_description, 
        price_range, image_urls, amenities, tags, 
        rating, reviews_count, is_verified
      ) VALUES (
        ${place.name}, ${place.category}, ${place.subcategory},
        ${place.latitude}, ${place.longitude}, ${place.address},
        ${place.shortDescription}, ${place.fullDescription},
        ${place.priceRange}, ${place.imageURLs}, ${place.amenities},
        ${place.tags}, ${place.rating}, ${place.reviewsCount},
        ${place.isVerified}
      )
    `;
  }
}

async function seedEvents() {
  for (const event of eventsData) {
    await sql`
      INSERT INTO events (
        title, short_description, full_description,
        start_date, end_date, category, tags,
        is_free, is_featured, organizer_name
      ) VALUES (
        ${event.title}, ${event.shortDescription}, 
        ${event.fullDescription}, ${event.startDate},
        ${event.endDate}, ${event.category}, ${event.tags},
        ${event.isFree}, ${event.isFeatured}, ${event.organizerName}
      )
    `;
  }
}

async function main() {
  console.log('🌱 Seeding database...');
  await seedPlaces();
  await seedEvents();
  console.log('✅ Database seeded successfully!');
}

main().catch(console.error);
```

---

## 6. Ejemplo de API Route (Next.js 14 App Router)

```typescript
// app/api/places/route.ts
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  try {
    let result;
    
    if (category) {
      result = await sql`
        SELECT * FROM places 
        WHERE category = ${category} AND is_active = true
        ORDER BY rating DESC
      `;
    } else {
      result = await sql`
        SELECT * FROM places 
        WHERE is_active = true
        ORDER BY rating DESC
      `;
    }
    
    return NextResponse.json({ 
      places: result.rows,
      count: result.rowCount 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    const result = await sql`
      INSERT INTO places (
        name, category, subcategory, latitude, longitude,
        address, short_description, full_description
      ) VALUES (
        ${body.name}, ${body.category}, ${body.subcategory},
        ${body.latitude}, ${body.longitude}, ${body.address},
        ${body.shortDescription}, ${body.fullDescription}
      )
      RETURNING *
    `;
    
    return NextResponse.json({ place: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create place' }, { status: 500 });
  }
}
```

---

## 7. Conexión desde iOS App

```swift
// Services/APIService.swift
import Foundation

class APIService {
    static let shared = APIService()
    private let baseURL = "https://tudominio.vercel.app/api"
    
    func fetchPlaces(category: String? = nil) async throws -> [Place] {
        var urlString = "\(baseURL)/places"
        if let category = category {
            urlString += "?category=\(category)"
        }
        
        guard let url = URL(string: urlString) else {
            throw APIError.invalidURL
        }
        
        let (data, _) = try await URLSession.shared.data(from: url)
        let response = try JSONDecoder().decode(PlacesResponse.self, from: data)
        
        return response.places
    }
    
    func uploadImage(_ imageData: Data) async throws -> String {
        let url = URL(string: "\(baseURL)/upload")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/octet-stream", forHTTPHeaderField: "Content-Type")
        request.httpBody = imageData
        
        let (data, _) = try await URLSession.shared.data(for: request)
        let response = try JSONDecoder().decode(UploadResponse.self, from: data)
        
        return response.url
    }
}
```

---

## 8. Comandos Útiles

```bash
# Deploy a Vercel
vercel --prod

# Ver logs de database
vercel logs --project=tequismagico

# Ejecutar seed script
vercel run scripts/seed.ts

# Ver datos en database
vercel postgres query "SELECT COUNT(*) FROM places;"

# Backup database
vercel postgres backup create
```

---

## ✅ Checklist de Setup

- [ ] Crear proyecto en Vercel
- [ ] Crear Vercel Postgres database
- [ ] Crear Vercel Blob storage
- [ ] Ejecutar SQL schema
- [ ] Configurar variables de entorno
- [ ] Ejecutar script de seed data
- [ ] Configurar Stripe para pagos
- [ ] Setup CloudKit para sincronización
- [ ] Deploy API a producción
- [ ] Probar endpoints desde iOS app

---

## 📚 Recursos

- [Vercel Postgres Docs](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Stripe API](https://stripe.com/docs/api)
