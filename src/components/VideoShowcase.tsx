import React from 'react';
import { MessageCircle, MapPin, ExternalLink, Flower2 } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../data/config';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-espresso text-ivory overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-espresso to-stone-950 opacity-95 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-light block">
                LOCAL EVENT DECORATION PARTNER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-ivory tracking-tight">
                SIRI FLOWER DECORATION
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Based in Bolarum, Secunderabad, we bring fresh floral arrangements, personalized color palettes, and reliable on-site setup to convention halls, banquet lawns, and home celebrations.
            </p>

            {/* Location & Directions Card */}
            <div className="p-5 sm:p-6 rounded bg-stone-900/90 border border-stone-800 space-y-4 shadow-luxury">
              <div className="flex items-start space-x-3 text-stone-200">
                <MapPin className="w-5 h-5 text-warm-gold-light shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-light space-y-1">
                  <strong className="font-medium text-ivory block text-base font-serif">
                    {businessConfig.name}
                  </strong>
                  <p className="text-stone-300 leading-relaxed">
                    {businessConfig.address}
                  </p>
                  <p className="text-warm-gold-light font-medium pt-1">
                    Call / WhatsApp: {businessConfig.primaryPhone}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-stone-400 font-mono text-[11px]">
                  {businessConfig.locationLabel}
                </span>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gold-light hover:text-ivory inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-medium transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-floating transition-all"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>Discuss Event on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] rounded overflow-hidden shadow-luxury bg-stone-900 border border-stone-800 group">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                alt="Grand Indian wedding floral mandap setup"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:opacity-95 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-warm-gold-light flex items-center space-x-1">
                  <Flower2 className="w-3 h-3 inline mr-1" />
                  Ceremonial Mandaps
                </span>
                <p className="text-xs text-stone-200 font-light">
                  Fresh rose &amp; jasmine canopies
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-900 border border-stone-800 group">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                  alt="Floral welcome archway"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:opacity-95 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9.5px] uppercase tracking-widest font-semibold text-warm-gold-light block">
                    Entrance Arches
                  </span>
                  <p className="text-[11px] text-stone-200 font-light">
                    Welcoming floral passages
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-900 border border-stone-800 group">
                <img
                  src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80"
                  alt="Dense flower wall photo backdrop"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:opacity-95 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9.5px] uppercase tracking-widest font-semibold text-warm-gold-light block">
                    Photo Backdrops
                  </span>
                  <p className="text-[11px] text-stone-200 font-light">
                    Intricate floral walls &amp; motifs
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};