import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueAdded from './components/ValueAdded';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark luxury theme
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
      {/* Navbar with smooth scroll & theme toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Value Proposition */}
        <ValueAdded />

        {/* Featured & Filterable Projects */}
        <Projects />

        {/* Coursera Official Certifications */}
        <Certifications />

        {/* Recommendations & Endorsements */}
        <Testimonials />

        {/* Interactive Skills Matrix */}
        <Skills />

        {/* Timeline & Education */}
        <Experience />

        {/* Contact & Direct Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
