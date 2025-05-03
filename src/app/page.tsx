"use client";

import React from 'react';
import { Calendar, ChevronRight, Award, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-300 relative">
      <img src="/main.png" alt="Lozells Community" className="w-full object-cover md:max-h-96 h-auto" />
    </div>
  );
};

const AboutPreviewSection: React.FC = () => {
  return (
    <div className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <p className="text-gray-700 text-base md:text-lg">
              The Lozells Community Forum is a local initiative led by dedicated community members, to address the needs and improve the quality of life in our neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-8 text-center">Featured Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-400 flex items-center justify-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/opU7jqbCOxg?si=CjYB_u5E8mBqQJtH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-slate-600 mr-2" />
                <span className="text-slate-600 font-medium">Community Initiative</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Featured on UK NEWS TIME</h3>
              <p className="text-gray-600 mb-4">Our community efforts were recently featured on local news, highlighting our dedication to improving the Lozells area.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-slate-600 mr-2" />
                <span className="text-slate-600 font-medium">Recent Event</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ramadan Iftaar Gathering</h3>
              <p className="text-gray-600 mb-4">We recently hosted a community Iftaar during Ramadan, bringing together neighbors from all backgrounds to share a meal.</p>
            </div>

            <div className="grid grid-cols-3 gap-1 p-2">
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="/iftaar1.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="/iftaar2.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="/iftaar3.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 col-span-2 flex items-center justify-center">
                <img src="/iftaar4.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="/iftaar5.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="p-4">
              <Link href="/events" className="inline-flex items-center text-slate-700 font-medium">
                See event details <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  const event = {
    title: "Lozells Charity Football Tournament",
    date: "June 15, 2025",
    location: "Lozells Park",
    description: "Join us for a community football tournament to raise funds for humanitarian aid in Palestine. This family-friendly event will feature teams from across the community competing in friendly matches. Entry is free, with donations encouraged. Refreshments will be available, and all proceeds will go directly to emergency relief efforts. Come support your local teams and contribute to a worthy cause!"
  };

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-8 text-center">Upcoming Event</h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-400">
              <img src="/event.png" alt="Charity Football Tournament" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <Link href="/events" className="inline-flex items-center  bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-md transition">
                Event Details <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-10 text-center">Our Team</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src="/iftaar5.png" alt="Lozells Community Forum Team" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Our dedicated team of community members works tirelessly to serve the Lozells area and make a positive impact.
                </p>

                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-gray-800">Abdul Rahman</h4>
                    <p className="text-slate-600 font-medium">Chairperson</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">Mohammad Ali</h4>
                    <p className="text-slate-600 font-medium">Vice Chair</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">Kamal Hossain</h4>
                    <p className="text-slate-600 font-medium">Secretary</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">Faruk Ahmed</h4>
                    <p className="text-slate-600 font-medium">Treasurer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-10 text-center">Get Involved</h2>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us</h3>
              <p className="text-gray-700 mb-6">
                We welcome all members of the community to get involved with our work. Whether you have a few hours to spare or want to take a more active role, there are many ways to contribute.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">contact@lozellscommunityforum.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">07700 900000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Find Us</h4>
                    <p className="text-gray-600">Lozells Road, Birmingham</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Volunteer With Us</h3>
              <p className="mb-6">
                Our volunteers are the heart of our organization. We have opportunities for people with all kinds of skills and interests.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Event planning and support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Youth mentoring
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Community outreach
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Administrative support
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-white text-slate-700 font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition">
                Volunteer with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutPreviewSection />
        <FeaturedSection />
        <UpcomingEvents />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}