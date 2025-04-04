
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-business-cream flex items-center py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Elevate Your Business with Modern Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We combine strategic thinking and cutting-edge technology to help businesses thrive in today's competitive landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-business-dark hover:bg-business-dark/90 text-white">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="bg-business-white rounded-2xl shadow-xl overflow-hidden transform rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
                alt="Business team working" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-business-dark rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-business-dark rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
