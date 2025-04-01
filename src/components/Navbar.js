'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, role, logout } = useAuth();

  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 border-b p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          📝 MyBlog
        </Link>
        <div className="flex gap-6 text-sm">
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hover:underline text-gray-700 dark:text-gray-200">
                Login
              </Link>
              <Link href="/register" className="hover:underline text-gray-700 dark:text-gray-200">
                Register
              </Link>
            </>
          ) : (
            <>
              {role === 'admin' && (
                <Link href="/admin/posts" className="hover:underline text-gray-700 dark:text-gray-200">
                  Dashboard
                </Link>
              )}
              <button
                onClick={logout}
                className="hover:underline text-red-600 dark:text-red-400"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
