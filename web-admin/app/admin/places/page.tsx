'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Place = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews_count: number;
  is_featured: boolean;
  is_verified: boolean;
  is_active: boolean;
  address: string;
};

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
      
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.success) {
        setPlaces(data.places);
      }
    } catch (error) {
      console.error('Error fetching places:', error);
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
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.address.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-3xl font-bold text-gray-900">📍 Gestión de Lugares</h1>
            <Link href="/admin" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input
                type="text"
                placeholder="Nombre o dirección..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">Cargando lugares...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lugar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoría</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlaces.map((place) => (
                  <tr key={place.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{place.name}</div>
                      <div className="text-sm text-gray-500">{place.address}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {place.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">⭐ {place.rating.toFixed(1)}</div>
                      <div className="text-xs text-gray-500">{place.reviews_count} reviews</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        {place.is_verified && (
                          <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">✓ Verificado</span>
                        )}
                        {place.is_featured && (
                          <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">⭐ Destacado</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(place.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPlaces.length === 0 && (
              <div className="p-8 text-center text-gray-500">No se encontraron lugares</div>
            )}
          </div>
        )}

        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">
            Mostrando {filteredPlaces.length} de {places.length} lugares
          </p>
        </div>
      </main>
    </div>
  );
}
