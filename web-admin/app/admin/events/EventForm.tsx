'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { upload } from '@vercel/blob/client';

export type EventFormValues = {
  id?: string;
  title: string;
  category: string;
  short_description: string;
  full_description: string;
  start_date: string; // datetime-local string
  end_date: string;
  is_recurring: boolean;
  location_name: string;
  latitude: string;
  longitude: string;
  address: string;
  tags: string; // comma-separated
  is_free: boolean;
  ticket_price: string;
  ticket_url: string;
  requires_reservation: boolean;
  is_featured: boolean;
  organizer_name: string;
  organizer_contact: string;
  thumbnail_url: string;
};

const emptyValues: EventFormValues = {
  title: '', category: '', short_description: '', full_description: '',
  start_date: '', end_date: '', is_recurring: false,
  location_name: '', latitude: '', longitude: '', address: '',
  tags: '', is_free: false, ticket_price: '', ticket_url: '', requires_reservation: false,
  is_featured: false, organizer_name: '', organizer_contact: '', thumbnail_url: '',
};

function toDateTimeLocal(isoString: string): string {
  if (!isoString) return '';
  // "2026-05-22T00:00:00.000Z" -> "2026-05-22T00:00" para <input type="datetime-local">
  return isoString.slice(0, 16);
}

export function EventForm({ initial }: { initial?: Partial<EventFormValues> }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<EventFormValues>({
    ...emptyValues,
    ...initial,
    start_date: toDateTimeLocal(initial?.start_date ?? ''),
    end_date: toDateTimeLocal(initial?.end_date ?? ''),
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const isEditing = !!values.id;

  const set = <K extends keyof EventFormValues>(key: K, value: EventFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const blob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });
      set('thumbnail_url', blob.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir la imagen');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      title: values.title,
      category: values.category,
      short_description: values.short_description,
      full_description: values.full_description,
      start_date: values.start_date,
      end_date: values.end_date,
      is_recurring: values.is_recurring,
      location_name: values.location_name || null,
      latitude: values.latitude ? parseFloat(values.latitude) : null,
      longitude: values.longitude ? parseFloat(values.longitude) : null,
      address: values.address || null,
      tags: values.tags.split(',').map((s) => s.trim()).filter(Boolean),
      is_free: values.is_free,
      ticket_price: values.ticket_price || null,
      ticket_url: values.ticket_url || null,
      requires_reservation: values.requires_reservation,
      is_featured: values.is_featured,
      organizer_name: values.organizer_name || null,
      organizer_contact: values.organizer_contact || null,
      thumbnail_url: values.thumbnail_url || null,
      image_urls: values.thumbnail_url ? [values.thumbnail_url] : [],
    };

    try {
      const res = await fetch(isEditing ? `/api/events/${values.id}` : '/api/events', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al guardar');
        return;
      }
      router.push('/admin/events');
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
        <Field label="Título *">
          <input required value={values.title} onChange={(e) => set('title', e.target.value)} className="input" />
        </Field>
        <Field label="Categoría *">
          <input required value={values.category} onChange={(e) => set('category', e.target.value)} className="input" placeholder="Feria, Festival, Concierto..." />
        </Field>
        <Field label="Inicio *">
          <input required type="datetime-local" value={values.start_date} onChange={(e) => set('start_date', e.target.value)} className="input" />
        </Field>
        <Field label="Fin *">
          <input required type="datetime-local" value={values.end_date} onChange={(e) => set('end_date', e.target.value)} className="input" />
        </Field>
      </div>

      <Field label="Descripción corta *">
        <input required value={values.short_description} onChange={(e) => set('short_description', e.target.value)} className="input" />
      </Field>
      <Field label="Descripción completa *">
        <textarea required value={values.full_description} onChange={(e) => set('full_description', e.target.value)} className="input" rows={4} />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Lugar"><input value={values.location_name} onChange={(e) => set('location_name', e.target.value)} className="input" /></Field>
        <Field label="Dirección"><input value={values.address} onChange={(e) => set('address', e.target.value)} className="input" /></Field>
        <Field label="Latitud"><input type="number" step="any" value={values.latitude} onChange={(e) => set('latitude', e.target.value)} className="input" /></Field>
        <Field label="Longitud"><input type="number" step="any" value={values.longitude} onChange={(e) => set('longitude', e.target.value)} className="input" /></Field>
        <Field label="Organizador"><input value={values.organizer_name} onChange={(e) => set('organizer_name', e.target.value)} className="input" /></Field>
        <Field label="Contacto organizador"><input value={values.organizer_contact} onChange={(e) => set('organizer_contact', e.target.value)} className="input" /></Field>
      </div>

      <Field label="Tags (separados por coma)">
        <input value={values.tags} onChange={(e) => set('tags', e.target.value)} className="input" placeholder="Familiar, Música, Tradicional" />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Precio del boleto (si no es gratis)">
          <input value={values.ticket_price} onChange={(e) => set('ticket_price', e.target.value)} className="input" placeholder="Desde $350" />
        </Field>
        <Field label="Link de boletos">
          <input value={values.ticket_url} onChange={(e) => set('ticket_url', e.target.value)} className="input" />
        </Field>
      </div>

      <Field label="Foto">
        <div className="flex items-center gap-4">
          {values.thumbnail_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={values.thumbnail_url} alt="" className="w-20 h-20 object-cover rounded" />
          )}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} />
          {uploading && <span className="text-sm text-gray-500">Subiendo...</span>}
        </div>
      </Field>

      <div className="flex gap-6 flex-wrap">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.is_free} onChange={(e) => set('is_free', e.target.checked)} />
          Gratis
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.requires_reservation} onChange={(e) => set('requires_reservation', e.target.checked)} />
          Requiere reservación
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.is_recurring} onChange={(e) => set('is_recurring', e.target.checked)} />
          Recurrente (anual)
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={values.is_featured} onChange={(e) => set('is_featured', e.target.checked)} />
          Destacado
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving || uploading} className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 disabled:opacity-50">
          {saving ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Crear evento'}
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
