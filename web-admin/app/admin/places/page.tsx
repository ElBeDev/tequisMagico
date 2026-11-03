'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Place = any;

/**
 * Qué le falta a un lugar para darlo por confirmado. La foto cuenta como "genérica" si la
 * comparte con otro lugar (las de categoría de Wikimedia), y la ubicación como "aproximada" si
 * otro lugar tiene exactamente las mismas coordenadas (pines encimados en el mapa).
 */
function missingFields(p: Place, all: Place[]): string[] {
  const photo = p.thumbnail_url || p.image_urls?.[0];
  const sameCoords = (a: Place) => Number(a.latitude) === Number(p.latitude) && Number(a.longitude) === Number(p.longitude);
  const missing: string[] = [];
  if (!p.phone_number && !p.whatsapp_number) missing.push('teléfono');
  if (!p.schedule_json || Object.keys(typeof p.schedule_json === 'string' ? JSON.parse(p.schedule_json) : p.schedule_json).length === 0) missing.push('horario');
  if (!p.website) missing.push('sitio web');
  if (!photo) missing.push('foto');
  else if (all.some((o) => o.id !== p.id && (o.thumbnail_url || o.image_urls?.[0]) === photo)) missing.push('foto propia');
  if (all.some((o) => o.id !== p.id && sameCoords(o))) missing.push('ubicación precisa');
  return missing;
}

export default function PlacesPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyUnverified, setOnlyUnverified] = useState(false);

  useEffect(() => {
    fetchPlaces();
  }, [selectedCategory]);

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const url = selectedCategory === 'all' 
        ? '/api/places'
        : `/api/places?category=${selectedCategory}`;
      
      const res = await fetch(url, { cache: 'no-store' });
      const data = await res.json();
      
      if (data.success) {
        setPlaces(data.places || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar?')) return;
    
    try {
      await fetch(`/api/places/${id}`, { method: 'DELETE' });
      fetchPlaces();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredPlaces = places.filter(place =>
    ((place.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (place.address || '').toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!onlyUnverified || !place.content_verified)
  );
  const unverifiedCount = places.filter((p) => !p.content_verified).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">📍 Lugares ({places.length})</h1>
            <div className="flex gap-2">
              <Link href="/admin/places/new" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                + Nuevo lugar
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded text-gray-900"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded text-gray-900"
            >
              <option value="all">Todos</option>
              <option value="turistico">Turístico</option>
              <option value="experiencias">Experiencias</option>
              <option value="gastronomia">Gastronomía</option>
              <option value="hospedaje">Hospedaje</option>
              <option value="compras">Compras</option>
            </select>
          </div>
          <label className="flex items-center gap-2 mt-4 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={onlyUnverified}
              onChange={(e) => setOnlyUnverified(e.target.checked)}
            />
            Mostrar solo sin verificar ({unverifiedCount})
          </label>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">Cargando...</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredPlaces.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-gray-600 text-sm">{p.address}</p>
                    {!p.content_verified && missingFields(p, places).length > 0 && (
                      <p className="mt-1 text-sm text-amber-800">Le falta: {missingFields(p, places).join(', ')}</p>
                    )}
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{p.category}</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded">⭐ {parseFloat(p.rating || 0).toFixed(1)}</span>
                      {!p.content_verified && (
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded" title="Teléfono/sitio/horario sin confirmar contra una fuente externa">
                          Sin verificar
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/places/${p.id}/edit`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(p.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
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
