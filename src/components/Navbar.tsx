"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-left">
              <div className="text-xl font-bold leading-tight">Lozells</div>
              <div className="text-lg font-bold">Community Forum</div>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition">Home</Link>
          <Link href="/events" className="text-gray-700 hover:text-gray-900 transition">Events</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 w-full shadow-md">
          <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900 transition">Home</Link>
          <Link href="/events" className="block py-2 text-gray-700 hover:text-gray-900 transition">Events</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;