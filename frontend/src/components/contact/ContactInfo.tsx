
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';
import RevealSection from '@/components/ui/reveal-section';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay?: number;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content, delay }) => {
  return (
    <RevealSection delay={delay}>
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start">
            <div className="bg-business-cream rounded-lg p-3 mr-4">
              {icon}
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">{title}</h3>
              <div className="text-muted-foreground">{content}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <ContactInfoItem
        icon={<MapPin className="h-6 w-6 text-business-dark" />}
        title="Office Address"
        content={
          <div>
            <p>123 Business Avenue</p>
            <p>Suite 456</p>
            <p>San Francisco, CA 94103</p>
          </div>
        }
        delay={100}
      />
      
      <ContactInfoItem
        icon={<Mail className="h-6 w-6 text-business-dark" />}
        title="Email Us"
        content={
          <a 
            href="mailto:info@nexuspro.com" 
            className="hover:text-business-dark transition-colors flex items-center gap-1"
          >
            info@nexuspro.com
            <ExternalLink className="h-4 w-4" />
          </a>
        }
        delay={200}
      />
      
      <ContactInfoItem
        icon={<Phone className="h-6 w-6 text-business-dark" />}
        title="Call Us"
        content={
          <a 
            href="tel:+14155552671" 
            className="hover:text-business-dark transition-colors flex items-center gap-1"
          >
            +1 (415) 555-2671
            <ExternalLink className="h-4 w-4" />
          </a>
        }
        delay={300}
      />
      
      <ContactInfoItem
        icon={<Clock className="h-6 w-6 text-business-dark" />}
        title="Business Hours"
        content={
          <div>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        }
        delay={400}
      />
    </div>
  );
};

export default ContactInfo;
