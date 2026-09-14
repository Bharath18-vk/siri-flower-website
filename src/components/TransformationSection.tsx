import React from 'react';
import { siteContent } from '../data/content';
import { getWhatsAppUrl } from '../data/config';
import { MessageCircle } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const { transformation } = siteContent;

  return (
    <section className="py-20 sm:py-28 bg-espresso text-ivory relative overflow-hidden">
      {/* Subtle architectural background texture/glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        {/* Micro label */}
        <span className="inline-block text-[11px] uppercase tracking-widest text-warm-gold font-medium">
          {transformation.label}
        </span>

        {/* Big Serif Statement */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-ivory max-w-3xl mx-auto">
          {transformation.heading}
        </h2>

        {/* Lead sentence */}
        <p className="font-serif italic text-xl sm:text-2xl text-stone-300 font-light">
          {transformation.lead}
        </p>

        {/* 6 Essential Elements Pill Sequence */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto py-2">
          {transformation.elements.map((element, idx) => (
            <React.Fragment key={element}>
              <span className="px-4 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-xs sm:text-sm uppercase tracking-wider text-ivory font-medium">
                {element}
              </span>
              {idx < transformation.elements.length - 1 && (
                <span className="text-warm-gold/60 hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Concluding statement */}
        <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          {transformation.conclusion}
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={getWhatsAppUrl('Hi D&D Home Decor, I’d like to discuss transforming my home with your collections.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-ivory text-espresso hover:bg-warm-gold hover:text-ivory transition-all duration-300 rounded font-medium text-xs uppercase tracking-[0.16em] shadow-luxury"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
