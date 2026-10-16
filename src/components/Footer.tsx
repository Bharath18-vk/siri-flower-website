import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { businessConfig, navigationLinks, getWhatsAppUrl } from '../data/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-ivory pt-16 sm:pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-stone-800">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.08em] font-normal block text-ivory group-hover:text-stone-300 transition-colors">
                {businessConfig.name}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-stone-400">
                {businessConfig.subtitle}
              </span>
            </Link>
            <p className="font-serif italic text-lg text-stone-300 pt-1">
              {businessConfig.tagline}
            </p>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-md">
              Bespoke wedding stages, fresh floral backdrops, entrance arches, and event flower decoration crafted for unforgettable celebrations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-medium text-stone-400 block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-stone-300 hover:text-ivory tracking-wide transition-colors flex items-center space-x-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Quick Contact */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-medium text-stone-400 block">
              Location &amp; Inquiries
            </span>
            <div className="space-y-1 text-xs sm:text-sm text-stone-300 font-light">
              <p className="font-medium text-ivory">{businessConfig.name}</p>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-gold-light transition-colors block"
              >
                {businessConfig.address}
              </a>
              <p className="text-warm-gold-light pt-1">Call / WhatsApp: {businessConfig.primaryPhone}</p>
              {businessConfig.secondaryPhone && (
                <p className="text-stone-400">Alt: {businessConfig.secondaryPhone}</p>
              )}
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] text-espresso bg-warm-gold hover:bg-warm-gold-light px-4 py-2.5 rounded font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-espresso" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          <p className="text-xs text-stone-400 text-center sm:text-right">
            Bolarum, Secunderabad, Telangana • Wedding Stage, Floral Backdrops &amp; Event Decoration
          </p>
        </div>
      </div>
    </footer>
  );
};
