'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Contraseña incorrecta');
      }
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">🏛️ Panel Tequisquiapan Mágico</h1>
        <p className="text-gray-600 text-sm mb-6">Acceso restringido</p>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded text-gray-900 mb-3"
          autoFocus
        />
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
