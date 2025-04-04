
import React from 'react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'Twitter', url: 'https://twitter.com/' },
    { name: 'Facebook', url: 'https://facebook.com/' },
    { name: 'Instagram', url: 'https://instagram.com/' },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-business-light hover:bg-business-cream transition-colors rounded-lg text-business-dark font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
