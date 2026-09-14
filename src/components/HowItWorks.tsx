import React from 'react';
import { siteContent } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const HowItWorks: React.FC = () => {
  const { howItWorks } = siteContent;

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={howItWorks.label}
          title={howItWorks.heading}
          description={howItWorks.subheading}
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Desktop Horizontal 4-step sequence */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting horizontal line */}
          <div className="absolute top-5 left-8 right-8 h-[1px] bg-stone-300 pointer-events-none" />

          {howItWorks.steps.map((step) => (
            <div key={step.step} className="relative pt-10 space-y-3 group">
              {/* Step indicator node */}
              <div className="absolute top-[13px] left-0 w-4 h-4 rounded-full bg-ivory border-2 border-warm-gold group-hover:scale-125 transition-transform" />

              <span className="text-xs font-mono font-semibold text-warm-gold-dark tracking-widest block">
                STEP {step.step}
              </span>

              <h4 className="font-serif text-2xl text-espresso font-normal">
                {step.name}
              </h4>

              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative border-l border-stone-300 ml-4 space-y-8 pl-6 py-2">
          {howItWorks.steps.map((step) => (
            <div key={step.step} className="relative space-y-1.5">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-ivory border-2 border-warm-gold" />

              <span className="text-[11px] font-mono font-semibold text-warm-gold-dark tracking-widest block">
                STEP {step.step}
              </span>

              <h4 className="font-serif text-2xl text-espresso font-normal">
                {step.name}
              </h4>

              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
