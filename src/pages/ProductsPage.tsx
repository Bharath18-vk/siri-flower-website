import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { productsData, ProductItem } from '../data/products';
import { getWhatsAppUrl } from '../data/config';
import { ContactBanner } from '../components/ContactBanner';

type FilterGroup = 'ALL' | 'STAGES' | 'BACKDROPS' | 'ENTRANCE' | 'RECEPTION' | 'ARRANGEMENTS';

export const ProductsPage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<FilterGroup>('ALL');

  const filterTabs: { label: string; value: FilterGroup }[] = [
    { label: 'ALL SERVICES', value: 'ALL' },
    { label: 'WEDDING STAGES', value: 'STAGES' },
    { label: 'FLORAL BACKDROPS', value: 'BACKDROPS' },
    { label: 'ENTRANCE ARCHES', value: 'ENTRANCE' },
    { label: 'RECEPTION & ENGAGEMENT', value: 'RECEPTION' },
    { label: 'FLORAL ARRANGEMENTS', value: 'ARRANGEMENTS' },
  ];

  const filteredProducts = activeGroup === 'ALL'
    ? productsData
    : productsData.filter((p) => p.filterGroup === activeGroup);

  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            SIRI FLOWER DECORATION • SERVICES &amp; OFFERINGS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
            EXPLORE OUR<br />FLORAL SERVICES.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            Wedding stage decoration, fresh floral backdrops, grand welcome arches, reception stages, and celebration floral styling across Bolarum, Secunderabad, and Hyderabad.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-stone-100">
          {filterTabs.map((tab) => {
            const isActive = activeGroup === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveGroup(tab.value)}
                className={`text-xs uppercase tracking-[0.15em] font-medium py-1 transition-colors relative ${
                  isActive
                    ? 'text-espresso font-semibold'
                    : 'text-stone-500 hover:text-espresso'
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
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product: ProductItem) => (
            <div
              key={product.slug}
              className="group flex flex-col justify-between bg-ivory rounded border border-stone-200 shadow-subtle hover:shadow-luxury hover:border-warm-gold/40 transition-all duration-300"
            >
              {/* Visual */}
              <div>
                <Link
                  to={`/products/${product.slug}`}
                  className="block relative aspect-[16/11] overflow-hidden rounded-t bg-stone-200"
                >
                  <img
                    src={product.heroImage}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[9.5px] uppercase tracking-widest font-medium bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                      {product.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-baseline justify-between text-xs font-mono text-warm-gold-dark">
                    <span>SERVICE {product.number}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-espresso font-normal group-hover:text-warm-gold-dark transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-1.5">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-stone-500 font-light">
                        <span className="w-1 h-1 rounded-full bg-warm-gold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.15em] font-semibold text-espresso hover:text-warm-gold-dark transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getWhatsAppUrl(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-green-700 hover:text-green-800 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};