'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { upload } from '@vercel/blob/client';

const CATEGORIES = ['turistico', 'experiencias', 'gastronomia', 'hospedaje', 'eventos', 'compras', 'rutas'];
const PRICE_RANGES = ['free', 'budget', 'moderate', 'expensive', 'luxury'];

export type PlaceFormValues = {
  id?: string;
  name: string;
  category: string;
  subcategory: string;
  latitude: string;
  longitude: string;
  address: string;
  short_description: string;
  full_description: string;
  price_range: string;
  phone_number: string;
  email: string;
  website: string;
  whatsapp_number: string;
  amenities: string; // comma-separated in the form
  tags: string; // comma-separated in the form
  is_featured: boolean;
  is_verified: boolean;
  images: string[]; // la primera es la portada (thumbnail_url)
};

const emptyValues: PlaceFormValues = {
  name: '', category: 'turistico', subcategory: '', latitude: '', longitude: '',
  address: '', short_description: '', full_description: '', price_range: 'moderate',
  phone_number: '', email: '', website: '', whatsapp_number: '',
  amenities: '', tags: '', is_featured: false, is_verified: false, images: [],
};

export function PlaceForm({ initial }: { initial?: Partial<PlaceFormValues> }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<PlaceFormValues>({ ...emptyValues, ...initial });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const isEditing = !!values.id;

  const set = <K extends keyof PlaceFormValues>(key: K, value: PlaceFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const handleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    setUploading(true);
    setError('');
    try {
      for (const file of files) {
        const blob = await upload(file.name, file, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
        setValues((v) => ({ ...v, images: [...v.images, blob.url] }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir una imagen');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    setValues((v) => ({ ...v, images: v.images.filter((_, i) => i !== index) }));
  };

  const makeCover = (index: number) => {
    setValues((v) => {
      const images = [...v.images];
      const [chosen] = images.splice(index, 1);
      images.unshift(chosen);
      return { ...v, images };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      name: values.name,
      category: values.category,
      subcategory: values.subcategory,
      latitude: parseFloat(values.latitude),
      longitude: parseFloat(values.longitude),
      address: values.address,
      short_description: values.short_description,
      full_description: values.full_description,
      price_range: values.price_range,
      phone_number: values.phone_number || null,
      email: values.email || null,
      website: values.website || null,
      whatsapp_number: values.whatsapp_number || null,
      amenities: values.amenities.split(',').map((s) => s.trim()).filter(Boolean),
      tags: values.tags.split(',').map((s) => s.trim()).filter(Boolean),
      is_featured: values.is_featured,
      is_verified: values.is_verified,
      thumbnail_url: values.images[0] || null,
      image_urls: values.images,
    };

    try {
      const res = await fetch(isEditing ? `/api/places/${values.id}` : '/api/places', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al guardar');
        return;
      }
      router.push('/admin/places');
      router.refresh();
    } catch {
      setError('Error de conexión');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4 max-w-2xl">
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="grid grid-cols-2 gap-4">
        <Field label="Nombre *">
          <input required value={values.name} onChange={(e) => set('name', e.target.value)} className="input" />
        </Field>
        <Field label="Categoría *">
          <select required value={values.category} onChange={(e) => set('category', e.target.value)} className="input">
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Subcategoría *">
          <input required value={values.subcategory} onChange={(e) => set('subcategory', e.target.value)} className="input" />
        </Field>
        <Field label="Rango de precio">
          <select value={values.price_range} onChange={(e) => set('price_range', e.target.value)} className="input">
            {PRICE_RANGES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Latitud *">
          <input required type="number" step="any" value={values.latitude} onChange={(e) => set('latitude', e.target.value)} className="input" />
        </Field>
        <Field label="Longitud *">
          <input required type="number" step="any" value={values.longitude} onChange={(e) => set('longitude', e.target.value)} className="input" />
        </Field>
      </div>

      <Field label="Dirección *">
        <input required value={values.address} onChange={(e) => set('address', e.target.value)} className="input" />
      </Field>
      <Field label="Descripción corta *">
        <input required value={values.short_description} onChange={(e) => set('short_description', e.target.value)} className="input" />
      </Field>
      <Field label="Descripción completa *">
        <textarea required value={values.full_description} onChange={(e) => set('full_description', e.target.value)} className="input" rows={4} />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Teléfono"><input value={values.phone_number} onChange={(e) => set('phone_number', e.target.value)} className="input" /></Field>
        <Field label="WhatsApp"><input value={values.whatsapp_number} onChange={(e) => set('whatsapp_number', e.target.value)} className="input" /></Field>
        <Field label="Email"><input type="email" value={values.email} onChange={(e) => set('email', e.target.value)} className="input" /></Field>
        <Field label="Sitio web"><input value={values.website} onChange={(e) => set('website', e.target.value)} className="input" /></Field>
      </div>

      <Field label="Amenidades (separadas por coma)">
        <input value={values.amenities} onChange={(e) => set('amenities', e.target.value)} className="input" placeholder="WiFi, Estacionamiento, Pet Friendly" />
      </Field>
      <Field label="Tags (separados por coma)">
        <input value={values.tags} onChange={(e) => set('tags', e.target.value)} className="input" placeholder="Romántico, Familiar" />
      </Field>

      <Field label="Fotos">
        <div className="space-y-3">
          {values.images.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {values.images.map((url, index) => (
                <div key={url} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt="" className="w-24 h-24 object-cover rounded border" />
                  {index === 0 && (
                    <span className="absolute top-1 left-1 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded">
                      Portada
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs leading-5"
                  >
                    ×
                  </button>
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => makeCover(index)}
                      className="mt-1 block text-xs text-blue-600 hover:underline"
                    >
                      Hacer portada
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFilesChange} disabled={uploading} />
          {uploading && <span className="text-sm text-gray-500">Subiendo...</span>}
        </div>
      </Field>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.is_featured} onChange={(e) => set('is_featured', e.target.checked)} />
          Destacado
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.is_verified} onChange={(e) => set('is_verified', e.target.checked)} />
          Verificado
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving || uploading} className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 disabled:opacity-50">
          {saving ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Crear lugar'}
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          color: #111827;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      {children}
    </label>
  );
}
