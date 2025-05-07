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

      <main className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-offwhite text-gray-800'} transition-colors duration-300`}>
        {/* Toggle Button */}
        <div className={`p-4 flex justify-end ${darkMode ? 'bg-gray-900' : 'bg-beige'}`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`border px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} hover:bg-gray-200 dark:hover:bg-gray-700 transition`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20 px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex justify-center">
              <div className={`${darkMode ? 'bg-white p-4 rounded-lg' : ''}`} style={darkMode ? {width: '80px', height: '80px', maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'} : {}}>
                <Image src="/path-to-main-logo.png" alt="SoftSell Logo" width={80} height={80} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">SoftSell<span className="text-white font-light"> – Unlock Value from Unused Software Licenses</span></h1>
            <p className="text-xl mb-8">SoftSell helps you convert unused licenses into instant cash — fast, secure, and simple.</p>
            <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition">
              Sell My Licenses
            </button>
          </motion.div>
        </section>

        {/* Additional Sections... */}

        {/* Contact Form */}
        <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            {[/* Form Fields... */]}
            <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </section>
        
        {/* Pass darkMode as prop to ChatWidget */}
        <ChatWidget darkMode={darkMode} />
      </main>
    </>
  );
}
