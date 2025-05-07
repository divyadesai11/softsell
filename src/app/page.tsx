'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        <meta name="description" content="Turn unused software licenses into instant cash with SoftSell. Fast, secure, and reliable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-offwhite text-gray-800'}`}>
        {/* Toggle Button */}
        <div className={`p-4 flex justify-end ${darkMode ? 'bg-gray-900' : 'bg-beige'}`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`border px-4 py-2 rounded-full transition ${darkMode ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

              {/* Hero Section */}
              <section className="bg-blue-700 text-white py-20 px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex justify-center">
              <div className={`${darkMode ? 'bg-white p-4 rounded-lg' : ''}`} style={darkMode ? { width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}>
                <Image src="/path-to-main-logo.png" alt="SoftSell Logo" width={80} height={80} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">SoftSell <span className="font-light">– Unlock Value from Unused Software Licenses</span></h1>
            <p className="text-xl mb-8">SoftSell helps you convert unused licenses into instant cash — fast, secure, and simple.</p>
            <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition">
              Sell My Licenses
            </button>
          </motion.div>
        </section>

        {/* How It Works */}
        <section className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {[
              { title: 'Upload License', desc: 'Submit your unused software license details through our secure portal.', img: '/images/upload.png' },
              { title: 'Get Valuation', desc: 'Our experts review and provide a fair market price instantly.', img: '/images/v-removebg-preview.png' },
              { title: 'Get Paid', desc: 'Accept the offer and receive payment via your preferred method.', img: '/images/money.webp' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-xs flex flex-col items-center">
                <div className={`${darkMode ? 'bg-white p-4 rounded-lg mb-4' : ''}`} style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={item.img} alt={item.title} width={60} height={60} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-20 px-6 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-bold mb-12">Why Choose SoftSell?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🔐', title: 'Secure Process', desc: 'We keep your license data encrypted and private.' },
              { emoji: '⚡', title: 'Fast Turnaround', desc: 'Upload to payout in as little as 24 hours.' },
              { emoji: '📊', title: 'Best Market Rates', desc: 'We offer you competitive prices for your licenses.' },
              { emoji: '🌟', title: 'Trusted Reputation', desc: 'Rated highly by customers around the globe.' },
            ].map((item, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border border-gray-200'}`}>
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
              {
                text: '"We were able to get rid of our old software licenses and reinvest the money into new tools. Seamless and quick!"',
                name: '— Neha Sharma, IT Lead, Spark Systems',
              },
              {
                text: '"Excellent service! SoftSell gave us more value than we expected for our old antivirus and design tools."',
                name: '— Rahul Verma, Procurement Head, Devix Pvt Ltd',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className={`p-6 rounded-lg shadow-md max-w-sm mx-auto ${darkMode ? 'bg-gray-700 text-white' : 'bg-offwhite text-gray-800'}`}
              >
                <p className="italic">{t.text}</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </motion.div>
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
                  required
                  className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border border-gray-300 text-gray-800'}`}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-medium">License Type</label>
              <select
                className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-offwhite border border-gray-300 text-gray-800'}`}
                required
              >
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
                required
                className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border border-gray-300 text-gray-800'}`}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </section>
        <ChatWidget darkMode={darkMode} />
      </main>
    </>
  );
}
