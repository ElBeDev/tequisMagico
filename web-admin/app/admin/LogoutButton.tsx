'use client';

import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border rounded hover:bg-gray-100"
    >
      Cerrar sesión
    </button>
  );
}
