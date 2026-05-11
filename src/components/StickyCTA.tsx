"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 50% of the document height
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0 && scrolled / docHeight > 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount in case already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible || pathname?.startsWith('/admin')) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-surface/90 backdrop-blur-md border border-brand-primary/50 shadow-[0_8px_32px_rgba(0,194,224,0.15)] rounded-full pl-6 pr-2 py-2 flex items-center gap-6 group">
        <span className="text-sm font-medium text-white hidden sm:block">
          Ready to secure your environment?
        </span>
        <div className="flex items-center gap-2">
          <Link href="/demo" className="btn-primary py-2 px-4 text-xs h-auto shadow-glow">
            Request Demo <ArrowRight className="w-3 h-3 ml-1 inline" />
          </Link>
          <button 
            onClick={() => setIsDismissed(true)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-content-muted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
