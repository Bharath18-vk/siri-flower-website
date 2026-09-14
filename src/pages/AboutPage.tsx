import React from 'react';
import { siteContent } from '../data/content';
import { businessConfig } from '../data/config';
import { WhyDDSection } from '../components/WhyDDSection';
import { ContactBanner } from '../components/ContactBanner';

export const AboutPage: React.FC = () => {
  const { about } = siteContent;

  return (
    <div className="min-h-screen pt-28 sm:pt-36">
      {/* Editorial Header & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 border-b border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
              {about.label}
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
              DECOR THAT<br />FEELS LIKE YOU.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl pt-2">
              {about.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200/80">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Location &amp; Service Area
                </span>
                <p className="text-sm text-stone-500 font-light">
                  {businessConfig.locationLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary home decor and warm living space"
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Qualitative Values */}
      <WhyDDSection />

      {/* Material & Craft Reflection */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block">
            THE D&amp;D TOUCH
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-snug">
            Transforming Spaces With Intention &amp; Care.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            A room comes to life when window treatments filter sunlight just right, when a sofa provides enduring everyday comfort, and when wall finishes reflect your personal taste. We take pride in assisting homeowners at every step of that journey.
          </p>

          <div className="pt-4 flex justify-center">
            <span className="w-16 h-[1.5px] bg-warm-gold" />
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <ContactBanner />
    </div>
  );
};
