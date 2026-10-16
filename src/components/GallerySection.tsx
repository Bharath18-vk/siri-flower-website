import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Maximize2, ArrowRight } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';
import { useGallery } from '../hooks/useGallery';
import { getWhatsAppUrl } from '../data/config';

type FilterType = 'ALL' | 'STAGE' | 'BACKDROP' | 'ENTRANCE' | 'RECEPTION' | 'ARRANGEMENTS';

export const GallerySection: React.FC = () => {
  const { items: galleryItems } = useGallery();
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'ALL DESIGNS', value: 'ALL' },
    { label: 'WEDDING STAGES', value: 'STAGE' },
    { label: 'FLORAL BACKDROPS', value: 'BACKDROP' },
    { label: 'ENTRANCE ARCHES', value: 'ENTRANCE' },
    { label: 'RECEPTIONS', value: 'RECEPTION' },
    { label: 'FLORAL ACCENTS', value: 'ARRANGEMENTS' },
  ];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => {
        if (item.category === activeFilter) return true;
        // Fallback for legacy categories
        if (activeFilter === 'STAGE' && item.category === 'CURTAINS') return true;
        if (activeFilter === 'BACKDROP' && item.category === 'BLINDS') return true;
        if (activeFilter === 'RECEPTION' && item.category === 'FURNITURE') return true;
        if (activeFilter === 'ENTRANCE' && item.category === 'CARPETS') return true;
        if (activeFilter === 'ARRANGEMENTS' && item.category === 'DECOR') return true;
        return false;
      });

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream/30 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-200 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
              CURATED CELEBRATION PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
              MOMENTS ADORNED WITH BLOOMS
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Explore curated inspiration photographs of handcrafted wedding stages, vibrant marigold backdrops, grand floral entrance arches, and romantic reception settings across Secunderabad &amp; Hyderabad.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Hello Siri Flower Decoration, I saw your portfolio gallery and would like to discuss decoration for an upcoming event.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-semibold text-espresso hover:text-warm-gold-dark transition-colors self-start md:self-end pb-1 group"
          >
            <span>Ask About Similar Decor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 pb-6 border-b border-stone-100">
          {filters.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveFilter(tab.value);
                  setVisibleCount(8);
                }}
                className={`text-xs uppercase tracking-[0.16em] font-medium py-1 transition-colors relative ${
                  isActive ? 'text-espresso font-semibold' : 'text-stone-500 hover:text-espresso'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-espresso" />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative flex flex-col bg-ivory rounded border border-stone-200 overflow-hidden shadow-subtle hover:shadow-luxury hover:border-warm-gold/40 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center space-x-1 text-ivory text-xs font-medium tracking-wider">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-serif text-lg text-espresso font-normal leading-snug group-hover:text-warm-gold-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3.5 bg-ivory hover:bg-cream text-espresso border border-stone-300 hover:border-espresso text-xs uppercase tracking-[0.16em] font-medium rounded shadow-subtle transition-all active:scale-[0.99]"
            >
              Show More Projects ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-ivory rounded shadow-floating overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-ivory/90 hover:bg-ivory text-espresso shadow-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-stone-900 overflow-hidden">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain object-center"
              />
            </div>

            <div className="p-6 sm:p-8 bg-ivory flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-warm-gold-dark">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl text-espresso font-normal">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  {selectedItem.caption}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Hello Siri Flower Decoration, I am inquiring about the ${selectedItem.title} shown in your portfolio gallery.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-medium rounded shadow-luxury shrink-0 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Enquire On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};