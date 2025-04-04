
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import RevealSection from '@/components/ui/reveal-section';
import { Code, LineChart, Globe, Users, Shield, Rocket } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <LineChart className="h-10 w-10 text-business-dark" />,
      title: "Business Strategy",
      description: "Comprehensive business analysis and strategic planning to help you achieve your long-term goals."
    },
    {
      icon: <Globe className="h-10 w-10 text-business-dark" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase your online presence and drive qualified leads."
    },
    {
      icon: <Code className="h-10 w-10 text-business-dark" />,
      title: "Web Development",
      description: "Custom website and application development using cutting-edge technologies and best practices."
    },
    {
      icon: <Users className="h-10 w-10 text-business-dark" />,
      title: "Consulting Services",
      description: "Expert advice and guidance to help you navigate complex business challenges and opportunities."
    },
    {
      icon: <Shield className="h-10 w-10 text-business-dark" />,
      title: "Security Solutions",
      description: "Comprehensive security assessments and solutions to protect your business from threats."
    },
    {
      icon: <Rocket className="h-10 w-10 text-business-dark" />,
      title: "Growth Acceleration",
      description: "Tailored programs designed to scale your business and achieve sustainable growth."
    },
  ];

  return (
    <section id="services" className="py-20 bg-business-light">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="We offer a comprehensive range of services to help your business thrive in today's competitive landscape."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealSection key={index} delay={index * 100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="bg-business-cream rounded-xl p-4 inline-flex mb-6 self-start">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
