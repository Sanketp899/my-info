
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import Map from '@/components/contact/Map';
import SocialLinks from '@/components/contact/SocialLinks';
import SectionHeading from '@/components/ui/section-heading';
import RevealSection from '@/components/ui/reveal-section';

const Contact = () => {
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
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Us" 
            subtitle="Get in touch with our team for more information about our services or to schedule a consultation."
          />
          
          <Map />
          
          <ContactInfo />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealSection>
              <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="bg-business-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-serif font-semibold mb-6">Business Details</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-medium text-lg mb-1">NexusPro, Inc.</h4>
                    <p className="text-muted-foreground">Innovative Business Solutions</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Owner</h4>
                    <p className="text-muted-foreground">Alexander Matthews, CEO</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Established</h4>
                    <p className="text-muted-foreground">2010</p>
                  </div>
                </div>
                
                <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
                <SocialLinks />
              </div>
            </RevealSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
