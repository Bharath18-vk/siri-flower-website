import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { businessConfig, getWhatsAppUrl } from '../data/config';
import { servicesData } from '../data/services';
import { GallerySection } from '../components/GallerySection';
import { VideoShowcase } from '../components/VideoShowcase';
import { WhyDDSection } from '../components/WhyDDSection';
import { WhoWeServe } from '../components/WhoWeServe';
import { HowItWorks } from '../components/HowItWorks';
import { ContactBanner } from '../components/ContactBanner';

export const HomePage: React.FC = () => {
  const {
    hero,
    intro,
    stageShowcase,
    backdropShowcase,
    additionalServices,
  } = siteContent;

  return (
    <div className="min-h-screen">
      {/* 
        1. HERO SECTION
        Full-width photographic hero featuring beautiful Indian wedding floral decoration
      */}
      <section className="relative min-h-[100svh] sm:min-h-screen flex items-end pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-32 overflow-hidden bg-espresso text-ivory">
        {/* Background Image: Grand Indian Wedding Floral Decor */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1920&q=80"
            alt="Siri Flower Decoration grand Indian wedding mandap with fresh flowers"
            className="w-full h-full object-cover object-[center_35%] sm:object-center brightness-[0.88] contrast-[1.03] scale-[1.02] transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* Editorial scrim overlays preserving floral textures while guaranteeing WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[55%] bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className="mb-3 sm:mb-4 inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-stone-900/70 backdrop-blur-md border border-stone-700/60">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-stone-200">
                {hero.categoryBadge}
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.5rem] min-[390px]:text-[3rem] sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-ivory drop-shadow-sm mb-4 sm:mb-5">
              Turning Your Special Moments Into Beautiful Memories.
            </h1>

            {/* Subtitle / Supporting copy */}
            <p className="text-sm sm:text-base md:text-lg text-stone-200 font-light leading-relaxed max-w-xl mb-6 sm:mb-8">
              {hero.description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-4 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-floating transition-all active:scale-[0.99] text-center"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>{hero.primaryCta}</span>
              </a>

              <Link
                to="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 bg-stone-900/80 hover:bg-stone-900 text-ivory border border-stone-600 hover:border-warm-gold rounded font-medium text-xs uppercase tracking-[0.16em] backdrop-blur-md transition-all active:scale-[0.99] text-center"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        2. INTRODUCTION
        "CRAFTED WITH FRESHNESS. DESIGNED FOR CELEBRATION."
      */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            {intro.label}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.12] tracking-tight">
            Crafted With Freshness.<br className="hidden sm:inline" /> Designed For Celebration.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            {intro.paragraph}
          </p>

          <div className="pt-4 flex justify-center">
            <span className="w-16 h-[1.5px] bg-warm-gold" />
          </div>
        </div>
      </section>

      {/* 
        3. CURATED SERVICES SECTION (5 Categories)
      */}
      <section className="py-20 sm:py-28 bg-cream/40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-stone-200/80 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                OUR DECORATION SERVICES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                FLORAL CELEBRATIONS
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                From majestic wedding mandaps to intimate haldi backdrops, we tailor our floral designs to your celebration venue in Secunderabad and Hyderabad.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-semibold text-espresso hover:text-warm-gold-dark transition-colors self-start md:self-end pb-1 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-ivory rounded border border-stone-200 shadow-subtle hover:shadow-luxury hover:border-warm-gold/50 transition-all duration-300"
              >
                <div>
                  <Link
                    to={`/products/${service.id}`}
                    className="block relative aspect-[16/11] overflow-hidden rounded-t bg-stone-200"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:opacity-95 transition-opacity duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[9.5px] uppercase tracking-widest font-medium bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                        Service {service.number}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="font-serif text-2xl text-espresso font-normal group-hover:text-warm-gold-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-stone-100">
                      {service.highlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-stone-500 font-light">
                          <span className="w-1 h-1 rounded-full bg-warm-gold" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                  <Link
                    to={`/products/${service.id}`}
                    className="text-xs uppercase tracking-wider font-semibold text-espresso hover:text-warm-gold-dark transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello Siri Flower Decoration, I am interested in ${service.title}. Please share options and details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-700 hover:text-green-800 font-medium inline-flex items-center space-x-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        4. WEDDING STAGE SHOWCASE (DEEP DIVE)
      */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Mosaic: High Quality Floral Photography */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Indian wedding floral mandap setup"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-ivory/90 backdrop-blur-sm text-[10px] text-espresso font-medium uppercase tracking-wider text-center">
                  Representative Inspiration: Mandap Decor
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex flex-col justify-between">
                <div className="relative aspect-square rounded overflow-hidden shadow-luxury bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                    alt="Floral details and fresh rose garland accents"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
                    alt="Hanging jasmine garlands and stage illumination"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {stageShowcase.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                {stageShowcase.heading}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {stageShowcase.description}
              </p>

              {/* Spaces Grid */}
              <div className="pt-2 space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Tailored For Every Venue:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {stageShowcase.spaces.map((sp) => (
                    <div key={sp.name} className="p-2.5 rounded bg-cream/50 border border-stone-200/80">
                      <strong className="text-xs font-medium text-espresso block">{sp.name}</strong>
                      <span className="text-[11px] text-stone-500 font-light block">{sp.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={stageShowcase.ctaHref}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-luxury transition-all text-center"
                >
                  <span>{stageShowcase.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(businessConfig.contextualMessages.stage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-cream hover:bg-stone-200 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded border border-stone-300 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Stage Inquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        5. FLORAL BACKDROPS SHOWCASE (DEEP DIVE)
      */}
      <section className="py-20 sm:py-28 bg-cream/40 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {backdropShowcase.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                {backdropShowcase.heading}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {backdropShowcase.description}
              </p>

              {/* Backdrop Types */}
              <div className="space-y-2.5 pt-2">
                {backdropShowcase.types.map((bt) => (
                  <div key={bt.name} className="flex items-start space-x-3 p-2.5 rounded bg-ivory border border-stone-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-2 shrink-0" />
                    <div>
                      <strong className="text-xs font-semibold text-espresso block">{bt.name}</strong>
                      <span className="text-xs text-stone-500 font-light">{bt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/products/floral-backdrops"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-luxury transition-all text-center"
                >
                  <span>{backdropShowcase.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(businessConfig.contextualMessages.backdrops)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-ivory hover:bg-stone-100 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded border border-stone-300 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Backdrop Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80"
                  alt="Fresh floral backdrop wall with rose clusters"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Rose &amp; Greenery Wall
                  </span>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional marigold backdrop for festive occasions"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Marigold Festive Jaali
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        6. ADDITIONAL SERVICES (HALDI, MEHENDI, SWINGS, CARS)
      */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 pb-12">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
              {additionalServices.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
              {additionalServices.heading}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              {additionalServices.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.items.map((prod) => (
              <Link
                key={prod.name}
                to={prod.href}
                className="group p-6 rounded bg-cream/40 hover:bg-cream border border-stone-200/90 shadow-subtle hover:shadow-luxury hover:border-warm-gold/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-warm-gold" />
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-espresso group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-serif text-2xl text-espresso font-normal group-hover:text-warm-gold-dark transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-warm-gold-dark block">
                  Explore Options →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        7. VISUALLY RICH PROJECT GALLERY
        Filterable portfolio with modal preview & WhatsApp inquiry
      */}
      <GallerySection />

      {/* 
        8. LOCATION & CRAFTSMANSHIP SHOWCASE
        Siri Flower Decoration Bolarum Secunderabad
      */}
      <VideoShowcase />

      {/* 
        9. ABOUT & WHY CHOOSE US
        Fresh Blooms, Custom Design, On-Time Setup, Honest Service
      */}
      <WhyDDSection />

      {/* 
        10. WHO WE SERVE
        Weddings, Receptions, Haldi-Mehendi, Cultural Celebrations
      */}
      <WhoWeServe />

      {/* 
        11. HOW IT WORKS
        01 Connect, 02 Explore, 03 Customise, 04 Celebrate
      */}
      <HowItWorks />

      {/* 
        12. FINAL WHATSAPP CONVERSION CTA
      */}
      <ContactBanner />
    </div>
  );
};