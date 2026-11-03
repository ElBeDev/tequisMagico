import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 pb-10 pt-44 text-center">
      <h1 className="heading">No encontramos esta página</h1>
      <p className="mt-3 text-muted">Puede que el lugar o evento ya no esté publicado.</p>
      <Link href="/lugares" className="btn-outline mt-8">
        Ver todos los lugares
      </Link>
    </div>
  );
}
