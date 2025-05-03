"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xjkwyobj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Contact Form: ${name} has sent you a message`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Something went wrong');
      }
    } catch {
      setError('Failed to submit the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                        <p className="text-gray-600">contact@lozellscommunityforum.co.uk</p>
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
                        <h3 className="font-bold text-gray-800">Find Us</h3>
                        <p className="text-gray-600">Lozells Road, Birmingham</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-slate-700 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-white bg-green-500 p-4 rounded-md mb-4">
                      <p className="font-medium">Thank you for your message!</p>
                      <p>We will get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {error && (
                        <div className="bg-red-500 text-white p-3 rounded-md mb-4">
                          {error}
                        </div>
                      )}
                      <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 font-medium text-white">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border bg-white rounded text-slate-800 text-base"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium text-white">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 border bg-white rounded text-slate-800 text-base"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 font-medium text-white">Message</label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full p-3 border bg-white rounded text-slate-800 text-base"
                          placeholder="Enter your message"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-slate-800 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition disabled:opacity-50 text-base"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}