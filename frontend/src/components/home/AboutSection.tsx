
import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import RevealSection from '@/components/ui/reveal-section';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const strengths = [
    { title: "Strategic Approach", description: "We develop customized strategies tailored to your specific business needs and goals." },
    { title: "Innovative Solutions", description: "Our team leverages the latest technologies and methodologies to drive results." },
    { title: "Customer-Centric", description: "We prioritize your success through attentive service and collaborative partnerships." },
    { title: "Proven Track Record", description: "With years of experience, we've helped numerous businesses achieve sustainable growth." },
  ];

  return (
    <section id="about" className="py-20 bg-business-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Our Company" 
          subtitle="We're dedicated to helping businesses grow and succeed through innovative strategies and solutions."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
                  alt="Our office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-business-cream rounded-xl -z-10"></div>
            </div>
          </RevealSection>
          
          <div>
            <RevealSection delay={200}>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
                Why Choose Us?
              </h3>
              <p className="text-muted-foreground mb-8">
                At NexusPro, we bring together expertise, innovation, and a commitment to excellence. 
                Our dedicated team works closely with you to understand your unique challenges and 
                develop tailored solutions that drive measurable results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {strengths.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-business-dark mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
