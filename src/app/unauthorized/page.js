'use client';

export default function UnauthorizedPage() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600">🚫 Access Denied</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You do not have permission to view this page.
      </p>
    </main>
  );
}
