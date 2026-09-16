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
            D&amp;D HOME DECOR • PROJECT PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
            GALLERY OF<br />TRANSFORMED SPACES.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            A visual showcase of our bespoke curtain installations, modern window blinds, custom sofas, wallpapers, and finishing across Bengaluru villas, flats, and apartments.
          </p>
        </div>
      </section>

      {/* Main Gallery Section with Filters and Lightbox */}
      <GallerySection />

      {/* Direct Contact Banner */}
      <ContactBanner />
    </div>
  );
};
