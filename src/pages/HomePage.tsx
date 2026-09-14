import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ArrowDown } from 'lucide-react';
import { siteContent } from '../data/content';
import { productsData } from '../data/products';
import { getWhatsAppUrl } from '../data/config';
import { SectionHeading } from '../components/SectionHeading';
import { ProductEditorialRow } from '../components/ProductEditorialRow';
import { TransformationSection } from '../components/TransformationSection';
import { WhyDDSection } from '../components/WhyDDSection';
import { InspirationSection } from '../components/InspirationSection';
import { HowItWorks } from '../components/HowItWorks';
import { ContactBanner } from '../components/ContactBanner';

export const HomePage: React.FC = () => {
  const { hero, intro, productsOverview, about } = siteContent;

  return (
    <div className="min-h-screen">
      {/* 
        HERO SECTION
        Carefully designed for desktop & mobile (375px, 390px, 430px).
        Shows warm living room with sofa, curtains, window treatment, and ambient lighting.
      */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden bg-espresso text-ivory">
        {/* Background Image with responsive positioning focusing on sofa & window treatments */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="Contemporary living room with custom sofa, curtains and warm ambient light"
            className="w-full h-full object-cover object-[center_35%] sm:object-center brightness-100 contrast-[1.02] scale-[1.02] transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* Lighter, warmer overlay: 10-15% reduced darkness so sofa, plants, and window glow with natural warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent hidden md:block" />
        </div>

        {/* Hero Content positioned in lower-middle area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Editorial category eyebrow */}
            <div>
              <span className="inline-block text-[10.5px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-warm-gold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                {hero.categoryBadge}
              </span>
            </div>

            {/* Confident, elegant headline with subtle drop-shadow for pristine contrast */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-ivory drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              TRANSFORM<br />YOUR SPACE.
            </h1>

            {/* Supporting description */}
            <p className="text-sm sm:text-base md:text-lg text-stone-100 font-light leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              {hero.description}
            </p>

            {/* Dual CTAs tailored for mobile and desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 sm:py-4 bg-ivory text-espresso hover:bg-warm-gold hover:text-ivory rounded font-medium text-xs uppercase tracking-[0.16em] transition-all shadow-luxury text-center"
              >
                <span>{hero.primaryCta}</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-600" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 sm:py-4 bg-stone-900/80 hover:bg-stone-900 text-ivory border border-stone-600/80 hover:border-warm-gold rounded font-medium text-xs uppercase tracking-[0.16em] backdrop-blur-md transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>{hero.secondaryCta}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BRAND INTRODUCTION SECTION
        "YOUR HOME. YOUR STYLE. YOUR SPACE."
      */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block">
            {intro.label}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.15] tracking-tight">
            YOUR HOME.<br className="hidden sm:inline" /> YOUR STYLE.<br className="hidden sm:inline" /> YOUR SPACE.
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto pt-2">
            {intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-stone-600 font-light leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <span className="w-12 h-[1.5px] bg-warm-gold" />
          </div>
        </div>
      </section>

      {/* 
        PRODUCT SECTION — MAIN FOCUS
        Curtains, Zebra Blinds, PVC Blinds, Custom Sofas, Wallpapers, Home Décor
      */}
      <section id="collection" className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-stone-200 gap-4">
            <SectionHeading
              label={productsOverview.label}
              title={productsOverview.heading}
              description={productsOverview.subheading}
            />

            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] font-semibold text-espresso hover:text-warm-gold-dark group transition-colors self-start sm:self-end pb-1"
            >
              <span>View All 6 Collections</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Alternating Editorial Product Rows */}
          <div className="space-y-4 pt-4">
            {productsData.map((product, index) => (
              <ProductEditorialRow
                key={product.slug}
                product={product}
                reversed={index % 2 === 1}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 
        TRANSFORMATION SECTION
        Connects D&D's signature slogan "TRANSFORM YOUR SPACE"
      */}
      <TransformationSection />

      {/* 
        WHY D&D HOME DECOR
        Quality Assured, Creative Design, Reliable Service, On-Time Delivery
      */}
      <WhyDDSection />

      {/* 
        INSPIRATION / SPACES WE LOVE
        Visual gallery with representative disclaimer
      */}
      <InspirationSection />

      {/* 
        HOW IT WORKS
        01 Discover, 02 Select, 03 Customise, 04 Transform
      */}
      <HowItWorks />

      {/* 
        ABOUT SECTION PREVIEW
        "DECOR THAT FEELS LIKE YOU."
      */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                  alt="Harmonious interior details with warm wood and linen"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {about.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.15] tracking-tight">
                DECOR THAT<br />FEELS LIKE YOU.
              </h2>

              <div className="space-y-4 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                {about.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-2 flex items-center space-x-6">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] font-semibold text-espresso hover:text-warm-gold-dark group transition-colors"
                >
                  <span>Read About Our Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-stone-300">•</span>

                <Link
                  to="/contact"
                  className="text-xs uppercase tracking-[0.14em] font-medium text-stone-500 hover:text-espresso transition-colors"
                >
                  Contact Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CONVERSION SECTION
        "READY TO TRANSFORM YOUR SPACE?"
      */}
      <ContactBanner />
    </div>
  );
};
