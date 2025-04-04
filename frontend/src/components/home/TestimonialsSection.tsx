
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import RevealSection from '@/components/ui/reveal-section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "NexusPro transformed our business operations with their innovative solutions. Their strategic approach and attention to detail exceeded our expectations and delivered real results.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
      content: "Working with NexusPro was a game-changer for our company. Their team understood our unique challenges and developed customized solutions that drove significant growth.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "Global Innovations",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60"
    },
    {
      content: "The expertise and professionalism of the NexusPro team are unmatched. They've been an invaluable partner in helping us navigate complex challenges and achieve our business goals.",
      author: "Emma Rodriguez",
      position: "Operations Manager",
      company: "Synergy Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60"
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-business-cream">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about working with us."
        />
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-business-cream mb-6" />
              
              <RevealSection key={currentIndex} className="space-y-6">
                <p className="text-xl italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center mt-8">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </RevealSection>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? "default" : "outline"}
                size="icon"
                className={`rounded-full ${index === currentIndex ? 'bg-business-dark' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
                <span className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-business-dark'}`}></span>
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
