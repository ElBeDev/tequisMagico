'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Place = any;

export default function PlacesPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

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
      console.error('Error fetching places:', error);
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este lugar?')) return;
    
    try {
      const res = await fetch(`/api/places/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        fetchPlaces();
      }
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  };

  const filteredPlaces = places.filter(place =>
    (place.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (place.address || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'turistico', label: 'Turístico' },
    { value: 'experiencias', label: 'Experiencias' },
    { value: 'gastronomia', label: 'Gastronomía' },
    { value: 'hospedaje', label: 'Hospedaje' },
    { value: 'compras', label: 'Compras' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">📍 Lugares ({places.length})</h1>
            <Link href="/admin" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Buscar por nombre o dirección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-600">Cargando lugares...</p>
          </div>
        ) : filteredPlaces.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-600">No se encontraron lugares</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{place.address}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {place.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                        ⭐ {parseFloat(String(place.rating || 0)).toFixed(1)}
                      </span>
                      {place.is_verified && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          ✓ Verificado
                        </span>
                      )}
                      {place.is_featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          ⭐ Destacado
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(place.id)}
                    className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
