import React from 'react';
import { siteContent } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Flower2, Palette, Clock, HeartHandshake } from 'lucide-react';

const icons = [
  <Flower2 className="w-5 h-5 text-warm-gold-dark" key="flower" />,
  <Palette className="w-5 h-5 text-warm-gold-dark" key="palette" />,
  <Clock className="w-5 h-5 text-warm-gold-dark" key="clock" />,
  <HeartHandshake className="w-5 h-5 text-warm-gold-dark" key="heart" />,
];

export const WhyDDSection: React.FC = () => {
  const whyData = siteContent.whyChooseUs;

  return (
    <section className="py-20 sm:py-28 bg-cream/60 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={whyData.label}
          title={whyData.heading}
          description={whyData.subheading}
          align="center"
          className="mb-14 sm:mb-18"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {whyData.principles.map((item, idx) => (
            <div
              key={item.number}
              className="bg-ivory p-6 sm:p-7 rounded border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4 hover:border-warm-gold/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-warm-gold-dark tracking-widest">
                    {item.number}
                  </span>
                  <div className="p-2 bg-cream rounded-full">
                    {icons[idx]}
                  </div>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl text-espresso font-normal pt-1">
                  {item.title}
                </h4>

                <p className="text-sm font-medium text-stone-800 leading-snug">
                  {item.description}
                </p>
              </div>

              <p className="text-xs text-stone-500 font-light leading-relaxed pt-2 border-t border-stone-100">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
