import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const WhatsAppFloating: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 z-40 max-w-[calc(100vw-2rem)]">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-3.5 sm:py-2 bg-stone-900/95 text-ivory rounded-full shadow-luxury hover:bg-stone-800 transition-all duration-300 group border border-stone-700/70 hover:border-warm-gold backdrop-blur-md"
        aria-label="Chat with D&D Home Decor on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <MessageCircle className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-medium whitespace-nowrap">
          {isHovered ? 'Chat on WhatsApp' : 'Enquire'}
        </span>
      </a>
    </aside>
  );
};
