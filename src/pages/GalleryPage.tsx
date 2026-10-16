import React from 'react';
import { GallerySection } from '../components/GallerySection';
import { ContactBanner } from '../components/ContactBanner';

export const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
      {/* Editorial Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            SIRI FLOWER DECORATION • EVENT PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
            GALLERY OF<br />FLORAL CELEBRATIONS.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            A curated visual showcase of our handcrafted wedding mandaps, vibrant marigold backdrops, welcoming floral arches, and romantic reception settings across Secunderabad and Hyderabad.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded bg-cream border border-stone-300/80 text-[11px] text-stone-600 font-light">
              Note: Curated representative inspiration designs for celebration visualization.
            </span>
          </div>
        </div>
      </section>

      {/* Main Gallery Section with Filters and Lightbox */}
      <GallerySection />

      {/* Direct Contact Banner */}
      <ContactBanner />
    </div>
  );
};
