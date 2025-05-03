"use client";

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function EventsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50 py-12 md:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h1 className="text-3xl font-bold text-slate-700 mb-8 text-center">Events & Iftaar</h1>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-64 bg-gray-400 flex items-center justify-center">
                                <img src="/event.png" alt="Iftaar event" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Ramadan Iftaar Gathering</h2>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>April 5, 2025</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>Lozells Community Center</span>
                                </div>
                                <p className="text-gray-700">Join us for our annual community Iftaar. This event brings together people from all backgrounds to share in the tradition of breaking fast during Ramadan. There will be delicious food, meaningful conversation, and a chance to strengthen community bonds.</p>
                            </div>
                        </div>

                        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-64 bg-gray-400 flex items-center justify-center">
                                <img src="/event.png" alt="Charity Football Tournament" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Lozells Charity Football Tournament</h2>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>June 15, 2025</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span>Lozells Park</span>
                                </div>
                                <p className="text-gray-700">Join us for a community football tournament to raise funds for humanitarian aid in Palestine. This family-friendly event will feature teams from across the community competing in friendly matches. Entry is free, with donations encouraged. Refreshments will be available, and all proceeds will go directly to emergency relief efforts. Come support your local teams and contribute to a worthy cause!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}