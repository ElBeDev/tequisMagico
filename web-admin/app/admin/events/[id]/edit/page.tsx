'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { EventForm, type EventFormValues } from '../../EventForm';

export default function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [initial, setInitial] = useState<Partial<EventFormValues> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setError(data.error || 'No se encontró el evento');
          return;
        }
        const e = data.event;
        setInitial({
          id: e.id,
          title: e.title ?? '',
          category: e.category ?? '',
          short_description: e.short_description ?? '',
          full_description: e.full_description ?? '',
          start_date: e.start_date ?? '',
          end_date: e.end_date ?? '',
          is_recurring: !!e.is_recurring,
          location_name: e.location_name ?? '',
          latitude: e.latitude != null ? String(e.latitude) : '',
          longitude: e.longitude != null ? String(e.longitude) : '',
          address: e.address ?? '',
          tags: (e.tags ?? []).join(', '),
          is_free: !!e.is_free,
          ticket_price: e.ticket_price ?? '',
          ticket_url: e.ticket_url ?? '',
          requires_reservation: !!e.requires_reservation,
          is_featured: !!e.is_featured,
          organizer_name: e.organizer_name ?? '',
          organizer_contact: e.organizer_contact ?? '',
          images: (e.image_urls && e.image_urls.length > 0)
            ? e.image_urls
            : (e.thumbnail_url ? [e.thumbnail_url] : []),
        });
      })
      .catch(() => setError('Error de conexión'));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Editar evento</h1>
          <Link href="/admin/events" className="text-sm text-gray-600 hover:text-gray-900">
            ← Volver
          </Link>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {!initial && !error && <p className="text-gray-600">Cargando...</p>}
        {initial && <EventForm initial={initial} />}
      </div>
    </div>
  );
}
