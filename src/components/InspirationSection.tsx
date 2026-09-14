import React, { useState } from 'react';
import { inspirationData, InspirationItem } from '../data/inspiration';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/content';

type FilterCategory = 'ALL' | 'WINDOWS' | 'LIVING' | 'BEDROOM' | 'WALLS' | 'DETAILS';

export const InspirationSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const { inspiration } = siteContent;

  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'ALL SPACES', value: 'ALL' },
    { label: 'CURTAINS & BLINDS', value: 'WINDOWS' },
    { label: 'LIVING ROOMS', value: 'LIVING' },
    { label: 'BEDROOMS', value: 'BEDROOM' },
    { label: 'WALLPAPERS', value: 'WALLS' },
    { label: 'DÉCOR DETAILS', value: 'DETAILS' },
  ];

  const filteredItems = activeFilter === 'ALL'
    ? inspirationData
    : inspirationData.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-28 bg-cream/30 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label={inspiration.label}
            title={inspiration.heading}
            description={inspiration.subheading}
          />

          {/* Subtle Category Filter Tabs (Editorial style, not colorful pills) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-stone-200 pb-2">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`text-xs uppercase tracking-[0.14em] font-medium py-1 transition-colors relative ${
                    isActive
                      ? 'text-espresso font-semibold'
                      : 'text-stone-500 hover:text-espresso'
                  }`}
                >
                  {f.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-espresso" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Curated Spaces Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: InspirationItem) => {
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-sm bg-stone-200 shadow-subtle aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Floating category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-2.5 py-1 text-[9.5px] uppercase tracking-widest font-medium bg-ivory/95 backdrop-blur-sm text-espresso rounded-sm shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1 z-10">
                  <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory representative disclaimer */}
        <p className="text-center text-xs text-stone-500 italic pt-4">
          {inspiration.disclaimer}
        </p>
      </div>
    </section>
  );
};
