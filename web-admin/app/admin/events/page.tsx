'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type EventRow = any;

export default function EventsPage() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/events?limit=200', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        setEvents(data.events || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar?')) return;
    try {
      await fetch(`/api/events/${id}`, { method: 'DELETE' });
      fetchEvents();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredEvents = events.filter((e) =>
    (e.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">📅 Eventos ({events.length})</h1>
            <div className="flex gap-2">
              <Link href="/admin/events/new" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                + Nuevo evento
              </Link>
              <Link href="/admin" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                ← Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <input
            type="text"
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded text-gray-900"
          />
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">Cargando...</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredEvents.map((e) => (
              <div key={e.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{e.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {new Date(e.start_date).toLocaleDateString()} — {new Date(e.end_date).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">{e.category}</span>
                      {e.is_free && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Gratis</span>}
                      {e.is_featured && <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Destacado</span>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/events/${e.id}/edit`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(e.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
