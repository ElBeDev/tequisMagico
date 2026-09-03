import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-bold mb-4">🏛️ Tequisquiapan Mágico</h1>
      <p className="text-xl mb-12">Panel de Administración</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link 
          href="/api/places"
          className="p-8 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">📍 API Lugares</h2>
          <p className="text-gray-300">Ver todos los lugares</p>
        </Link>

        <Link 
          href="/admin"
          className="p-8 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">⚙️ Admin Panel</h2>
          <p className="text-gray-300">Gestionar contenido</p>
        </Link>
      </div>
    </main>
  );
}
