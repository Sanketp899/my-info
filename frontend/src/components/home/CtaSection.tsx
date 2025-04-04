
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RevealSection from '@/components/ui/reveal-section';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-business-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our solutions can help you achieve your business goals.
          </p>
          
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-business-dark">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </RevealSection>
      </div>
    </section>
  );
};

export default CtaSection;
