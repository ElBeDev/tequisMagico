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
    (place.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (place.address || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{p.category}</span>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded">⭐ {parseFloat(p.rating || 0).toFixed(1)}</span>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(p.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Eliminar
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
