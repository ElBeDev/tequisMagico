import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          🏛️ Tequisquiapan Mágico
        </h1>
        <p className="text-center text-xl mb-8">
          Panel de Administración
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link 
            href="/api/places"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              API Lugares →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Ver todos los lugares disponibles
            </p>
          </Link>

          <Link 
            href="/admin"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Admin Panel →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Gestionar lugares y eventos
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
