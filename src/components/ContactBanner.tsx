import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { getWhatsAppUrl } from '../data/config';

export const ContactBanner: React.FC = () => {
  const { contactCta } = siteContent;

  return (
    <section className="py-20 sm:py-28 bg-stone-900 text-ivory relative overflow-hidden border-t border-stone-800">
      {/* Warm ambient radial backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-warm-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="inline-block text-[11px] uppercase tracking-widest text-warm-gold font-medium">
          {contactCta.label}
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-ivory tracking-tight">
          {contactCta.heading}
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          {contactCta.subheading}
        </p>

        {/* Dual Conversion CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-luxury transition-all"
          >
            <MessageCircle className="w-4 h-4 text-espresso" />
            <span>{contactCta.primaryCta}</span>
          </a>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-stone-800 hover:bg-stone-700 text-ivory border border-stone-700 rounded text-xs uppercase tracking-[0.16em] transition-all font-medium"
          >
            <span>{contactCta.secondaryCta}</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
