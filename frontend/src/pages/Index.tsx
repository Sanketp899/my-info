
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true');
    
    // Set initial body class
    document.body.classList.toggle('dark', savedMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
