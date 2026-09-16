import React from 'react';
import { siteContent } from '../data/content';
import { businessConfig, getWhatsAppUrl } from '../data/config';
import { WhyDDSection } from '../components/WhyDDSection';
import { WhoWeServe } from '../components/WhoWeServe';
import { ContactBanner } from '../components/ContactBanner';
import { MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { about } = siteContent;

  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
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

            {/* Studio Location & Contact Card */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 p-4 rounded bg-cream/40 border border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <MapPin className="w-4 h-4 text-warm-gold-dark" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Studio Location
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {businessConfig.address}
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded bg-cream/40 border border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <Phone className="w-4 h-4 text-warm-gold-dark" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Direct Contact
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  {businessConfig.primaryPhone} / {businessConfig.secondaryPhone}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-green-700 font-medium hover:underline pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
              <img
                src="/images/dd/curtains/curtain-02.jpeg"
                alt="Contemporary home decor and customized curtain installation by D&D Home Decor"
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-ivory/95 backdrop-blur-md border border-stone-200 shadow-sm flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-warm-gold-dark shrink-0" />
                <p className="text-[11px] text-stone-700 font-light">
                  Serving villas, apartments, flats, showrooms &amp; offices across Bengaluru.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <WhyDDSection />

      {/* Who We Serve */}
      <WhoWeServe />

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
            A room comes to life when curtains filter sunlight just right, when a sofa provides enduring everyday comfort, when a mattress gives restorative rest, and when wall finishes reflect your personal taste. We take pride in assisting homeowners at every step of that journey.
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