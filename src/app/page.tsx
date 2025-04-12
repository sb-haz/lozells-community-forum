"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Users, ChevronRight, Award, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/events') {
        setCurrentPage('events');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 text-gray-800 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className={`container mx-auto px-4 ${scrolled ? 'py-1' : 'py-3'} flex justify-between items-center transition-all duration-300`}>
        <div className="flex items-center">
          <div className="text-left">
            <div className={`${scrolled ? 'text-sm' : 'text-md'} font-bold leading-tight transition-all duration-300`}>Lozells</div>
            <div className={`${scrolled ? 'text-sm' : 'text-md'} font-bold transition-all duration-300`}>Community Forum</div>
          </div>
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
        <div className="md:hidden bg-gray-100 px-4 py-2 absolute w-full shadow-md">
          <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900 transition">Home</Link>
          <Link href="/events" className="block py-2 text-gray-700 hover:text-gray-900 transition">Events</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-gray-300 relative">
      <img src="main.png" alt="Lozells Community" className="w-full object-cover md:max-h-96 h-auto" />
    </div>
  );
};

const AboutPreviewSection = () => {
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-base md:text-lg">
              The Lozells Community Forum is a local initiative led by dedicated community members, including your local councillor, to address the needs and improve the quality of life in our neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-8 text-center">Featured Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-400 flex items-center justify-center">
              <img src="news.png" alt="" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-slate-600 mr-2" />
                <span className="text-slate-600 font-medium">Community Initiative</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Featured on Channel S News</h3>
              <p className="text-gray-600 mb-4">Our community efforts were recently featured on local news, highlighting our dedication to improving the Lozells area.</p>
              <a href="/news" className="inline-flex items-center text-slate-700 font-medium">
                Read more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
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
                <img src="iftaar1.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="iftaar2.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="iftaar3.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 col-span-2 flex items-center justify-center">
                <img src="iftaar4.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
              <div className="h-24 bg-gray-400 flex items-center justify-center">
                <img src="iftaar5.png" alt="Iftaar event" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="p-4">
              <a href="/events" className="inline-flex items-center text-slate-700 font-medium">
                See event details <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
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
              <img src="event.png" alt="Charity Football Tournament" className="h-full w-full object-cover" />
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
              <a href="/events" className="inline-flex items-center  bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-md transition">
                Event Details <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdul Rahman",
      role: "Chairperson",
      bio: "Local councillor with over 10 years of service to the Lozells area. Passionate about community development and social justice.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Mohammad Ali",
      role: "Vice Chair",
      bio: "Lozells resident for 25 years and local business owner. Dedicated to supporting local economic development.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Kamal Hossain",
      role: "Secretary",
      bio: "Community organizer with expertise in event planning and volunteer coordination.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Faruk Ahmed",
      role: "Treasurer",
      bio: "Retired accountant using his financial expertise to support community initiatives and ensure transparent management of resources.",
      image: "https://randomuser.me/api/portraits/men/57.jpg"
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-700 mb-10 text-center">Our Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-400 flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <Users className="h-16 w-16 text-white opacity-50" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-slate-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
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
                    <p className="text-gray-600">info@lozellscommunityforum.co.uk</p>
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
                    <h4 className="font-bold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">Lozells Community Center, Lozells Road</p>
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
              <a href="/contact" className="inline-block bg-white text-slate-700 font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition">
                Volunteer with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
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
            <p className="text-gray-200 mb-2">Lozells Community Center</p>
            <p className="text-gray-200 mb-2">info@lozellscommunityforum.co.uk</p>
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

const HomePage = () => {
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
};

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold text-slate-700 mb-8 text-center">Events & Iftaar</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-400 flex items-center justify-center">
                <img src="event.png" alt="Iftaar event" className="h-full w-full object-cover" />
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
                <img src="event.png" alt="Charity Football Tournament" className="h-full w-full object-cover" />
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
};

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold text-slate-700 mb-8 text-center">Contact Us</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-800">Email Us</h3>
                        <p className="text-gray-600">info@lozellscommunityforum.co.uk</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-800">Call Us</h3>
                        <p className="text-gray-600">07700 900000</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-slate-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-800">Visit Us</h3>
                        <p className="text-gray-600">Lozells Community Center, Lozells Road</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-800 mb-3">Office Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00am - 5:00pm</p>
                  <p className="text-gray-600">Weekends: Closed (except for events)</p>
                </div>
                <div className="md:w-1/2 bg-slate-600 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded text-gray-800"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded text-gray-800"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-2 border rounded text-gray-800"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-slate-700 font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;