import React from 'react';
import { siteContent } from '../data/content';
import { businessConfig, getWhatsAppUrl } from '../data/config';
import { WhyDDSection } from '../components/WhyDDSection';
import { WhoWeServe } from '../components/WhoWeServe';
import { ContactBanner } from '../components/ContactBanner';
import { MapPin, Phone, MessageCircle, Flower2 } from 'lucide-react';

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
              TURNING SPECIAL MOMENTS<br />INTO BEAUTIFUL MEMORIES.
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
                    Service Location
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
                  {businessConfig.primaryPhone}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-green-700 font-medium hover:underline pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                alt="Siri Flower Decoration wedding entrance and floral styling"
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-ivory/95 backdrop-blur-md border border-stone-200 shadow-sm flex items-center space-x-3">
                <Flower2 className="w-5 h-5 text-warm-gold-dark shrink-0" />
                <p className="text-[11px] text-stone-700 font-light">
                  Serving weddings, receptions, and family celebrations across Secunderabad &amp; Hyderabad.
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
            THE ART OF FRESH BLOOMS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-snug">
            Celebrating Milestones With Fresh Flowers &amp; Devotion.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            A celebration comes to life when fresh jasmine garlands scent the air, when a wedding mandap glows under warm amber lights, and when the couple entrance welcomes guests with grandeur. We take pride in assisting families at every step of that journey.
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