
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-business-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Nexus<span className="text-business-cream">Pro</span></h3>
            <p className="text-business-light/80 mb-4">
              Elevating your business with premium solutions tailored to meet your unique needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-business-light/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/contact" className="text-business-light/80 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#services" className="text-business-light/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-business-light/80 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Business Hours</h4>
            <ul className="space-y-2 text-business-light/80">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-business-light/60">
            © {currentYear} NexusPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
