
import React, { useEffect, useRef, ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  delay = 0,
  threshold = 0.1,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);
  
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default RevealSection;
