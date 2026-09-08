'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { PlaceForm, type PlaceFormValues } from '../../PlaceForm';

export default function EditPlacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [initial, setInitial] = useState<Partial<PlaceFormValues> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/places/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setError(data.error || 'No se encontró el lugar');
          return;
        }
        const p = data.place;
        setInitial({
          id: p.id,
          name: p.name ?? '',
          category: p.category ?? 'turistico',
          subcategory: p.subcategory ?? '',
          latitude: String(p.latitude ?? ''),
          longitude: String(p.longitude ?? ''),
          address: p.address ?? '',
          short_description: p.short_description ?? '',
          full_description: p.full_description ?? '',
          price_range: p.price_range ?? 'moderate',
          phone_number: p.phone_number ?? '',
          email: p.email ?? '',
          website: p.website ?? '',
          whatsapp_number: p.whatsapp_number ?? '',
          amenities: (p.amenities ?? []).join(', '),
          tags: (p.tags ?? []).join(', '),
          is_featured: !!p.is_featured,
          is_verified: !!p.is_verified,
          images: (p.image_urls && p.image_urls.length > 0)
            ? p.image_urls
            : (p.thumbnail_url ? [p.thumbnail_url] : []),
        });
      })
      .catch(() => setError('Error de conexión'));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Editar lugar</h1>
          <Link href="/admin/places" className="text-sm text-gray-600 hover:text-gray-900">
            ← Volver
          </Link>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {!initial && !error && <p className="text-gray-600">Cargando...</p>}
        {initial && <PlaceForm initial={initial} />}
      </div>
    </div>
  );
}
