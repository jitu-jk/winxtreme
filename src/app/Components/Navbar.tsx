// src/components/Navbar.tsx
//'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          WinXtreme
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
          <Link href="/about us" className="text-gray-700 hover:text-blue-600">About us</Link>
        </div>
      </div>
    </nav>
  );
}
