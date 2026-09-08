'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Place = {
  id: string;
  name: string;
  category: string;
  rating: string | number;
  reviews_count: number;
  views_count: number;
  favorites_count: number;
  is_featured: boolean;
  business_tier: string;
};

export default function AnalyticsPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/places?limit=200', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setPlaces(data.places || []))
      .finally(() => setLoading(false));
  }, []);

  const byCategory = places.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const byTier = places.reduce<Record<string, number>>((acc, p) => {
    acc[p.business_tier] = (acc[p.business_tier] || 0) + 1;
    return acc;
  }, {});

  const totalViews = places.reduce((sum, p) => sum + (p.views_count || 0), 0);
  const topRated = [...places].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">📊 Analytics</h1>
          <Link href="/admin" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {loading ? (
          <p className="text-gray-600">Cargando...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Lugares activos" value={places.length} />
              <Stat label="Destacados" value={places.filter((p) => p.is_featured).length} />
              <Stat label="Reseñas totales" value={places.reduce((s, p) => s + (p.reviews_count || 0), 0)} />
              <Stat label="Vistas totales" value={totalViews} />
            </div>

            {totalViews === 0 && (
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3">
                Las vistas están en 0 porque todavía no hay nada que las incremente (ni la app ni el
                panel llaman a un endpoint que sume <code>views_count</code>) — esta métrica es real
                pero aún no se está registrando.
              </p>
            )}

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Lugares por categoría</h2>
              <div className="space-y-2">
                {Object.entries(byCategory).sort((a, b) => b[1] - a[1]).map(([category, count]) => (
                  <Bar key={category} label={category} value={count} max={places.length} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Por nivel de negocio</h2>
              <div className="space-y-2">
                {Object.entries(byTier).sort((a, b) => b[1] - a[1]).map(([tier, count]) => (
                  <Bar key={tier} label={tier} value={count} max={places.length} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Mejor calificados</h2>
              <div className="divide-y">
                {topRated.map((p) => (
                  <div key={p.id} className="flex justify-between py-2">
                    <span>{p.name}</span>
                    <span className="text-gray-600">⭐ {Number(p.rating).toFixed(1)} ({p.reviews_count} reseñas)</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-500">{value}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gray-900" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
