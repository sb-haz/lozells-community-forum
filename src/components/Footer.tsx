"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Lozells Community Forum</h3>
            <p className="text-gray-200">Making our community stronger together</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200 mb-2">contact@lozellscommunityforum.co.uk</p>
            <p className="text-gray-200">07700 900000</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex">
              <a href="#" className="text-gray-200 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-600 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Lozells Community Forum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;