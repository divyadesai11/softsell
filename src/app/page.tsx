'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>SoftSell | Sell Unused Software Licenses</title>
        <meta
          name="description"
          content="Turn unused software licenses into instant cash with SoftSell. Fast, secure, and reliable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-offwhite text-gray-800'}`}>

        {/* Toggle Button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`border px-4 py-2 rounded-full transition ${
              darkMode ? 'btn-toggle-dark' : 'btn-toggle-light'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20 px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Image src="/path-to-main-logo.png" alt="SoftSell Logo" width={80} height={80} />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            SoftSell <span className="font-light">– Unlock Value from Unused Software Licenses</span>
          </h1>
          <p className="text-xl mb-8">
            SoftSell helps you convert unused licenses into instant cash — fast, secure, and simple.
          </p>
        <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition"> Sell My Licenses </button>
        </section>

        {/* How It Works */}
        <section className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {[
              { title: 'Upload License', desc: 'Submit your unused license details securely.', img: '/images/upload.png' },
              { title: 'Get Valuation', desc: 'We provide a fair market price instantly.', img: '/images/v-removebg-preview.png' },
              { title: 'Get Paid', desc: 'Accept the offer and receive payment quickly.', img: '/images/money.webp' },
            ].map((item, index) => (
              <div key={index} className="max-w-xs flex flex-col items-center">
        <div className={`${darkMode ? 'bg-white p-4 rounded-full' : ''} mb-4 flex items-center justify-center`}>
          <Image src={item.img} alt={item.title} width={60} height={60} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p>{item.desc}</p>
      </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-bold mb-12">Why Choose SoftSell?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🔐', title: 'Secure Process', desc: 'Your license data stays encrypted.' },
              { emoji: '⚡', title: 'Fast Turnaround', desc: 'Upload to payout in as little as 24h.' },
              { emoji: '📊', title: 'Best Market Rates', desc: 'We offer competitive prices.' },
              { emoji: '🌟', title: 'Trusted Reputation', desc: 'Rated highly by customers worldwide.' },
            ].map((item, index) => (
              <div key={index} className={`card ${darkMode ? 'card-dark' : 'card-light'}`}>
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'}`}>
          <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[
              { text: '"We reinvested quickly thanks to SoftSell. Seamless!"', name: '— Neha Sharma, IT Lead' },
              { text: '"Excellent service, got more value than expected."', name: '— Rahul Verma, Procurement Head' },
            ].map((t, i) => (
              <div key={i} className={`card max-w-sm mx-auto ${darkMode ? 'card-dark' : 'card-light'}`}>
                <p className="italic">{t.text}</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            {[
              { label: 'Name', type: 'text', placeholder: 'Your Name' },
              { label: 'Email', type: 'email', placeholder: 'you@example.com' },
              { label: 'Company', type: 'text', placeholder: 'Company Name' },
            ].map((field, i) => (
              <div key={i}>
                <label className="block mb-1 font-medium">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className={`input ${darkMode ? 'input-dark' : 'input-light'}`}
                />
              </div>
            ))}
            <div>
              <label className="block mb-1 font-medium">License Type</label>
              <select required className={`input ${darkMode ? 'input-dark' : 'input-light'}`}>
                <option value="">Choose an option</option>
                <option>Operating System</option>
                <option>Productivity Tools</option>
                <option>Design Software</option>
                <option>Antivirus</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                required
                className={`input ${darkMode ? 'input-dark' : 'input-light'}`}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </section>

        <ChatWidget darkMode={darkMode} />
      </main>
    </>
  );
}
