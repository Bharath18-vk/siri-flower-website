import React from 'react';
import { Crown, PartyPopper, Sun, Heart } from 'lucide-react';
import { siteContent } from '../data/content';

export const WhoWeServe: React.FC = () => {
  const { whoWeServe } = siteContent;

  const icons = [
    <Crown className="w-5 h-5 text-warm-gold-dark" key="wedding" />,
    <PartyPopper className="w-5 h-5 text-warm-gold-dark" key="reception" />,
    <Sun className="w-5 h-5 text-warm-gold-dark" key="haldi" />,
    <Heart className="w-5 h-5 text-warm-gold-dark" key="cultural" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 pb-12">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            {whoWeServe.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
            {whoWeServe.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            {whoWeServe.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whoWeServe.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded bg-cream/40 border border-stone-200/90 shadow-subtle hover:shadow-luxury hover:border-warm-gold/50 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded bg-ivory inline-block shadow-sm">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="font-serif text-2xl text-espresso font-normal leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200/60">
                <span className="text-[10px] uppercase tracking-widest font-mono text-warm-gold-dark">
                  Bespoke Floral Styling
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};