import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🏛️ Tequisquiapan Mágico - Admin
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/api/places" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">📍 API Places</h2>
            <p className="text-gray-600">Ver todos los lugares</p>
          </Link>
          <Link href="/admin/places" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">⚙️ Gestionar Lugares</h2>
            <p className="text-gray-600">CRUD de lugares</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
