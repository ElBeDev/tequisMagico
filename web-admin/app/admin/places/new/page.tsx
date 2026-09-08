import Link from 'next/link';
import { PlaceForm } from '../PlaceForm';

export default function NewPlacePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Nuevo lugar</h1>
          <Link href="/admin/places" className="text-sm text-gray-600 hover:text-gray-900">
            ← Volver
          </Link>
        </div>
        <PlaceForm />
      </div>
    </div>
  );
}
