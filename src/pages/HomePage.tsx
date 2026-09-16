import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Bed } from 'lucide-react';
import { siteContent } from '../data/content';
import { businessConfig, getWhatsAppUrl } from '../data/config';
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
    curtainsShowcase,
    blindsShowcase,
    furnitureShowcase,
    mattressShowcase,
    additionalProducts,
  } = siteContent;

  return (
    <div className="min-h-screen">
      {/* 
        1. HERO SECTION
        Authentic D&D curtain installation photo (curtain-02.jpeg)
        Carefully tuned contrast overlays for desktop & mobile
      */}
      <section className="relative min-h-[100svh] sm:min-h-screen flex items-end pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-32 overflow-hidden bg-espresso text-ivory">
        {/* Background Image: Authentic D&D curtain installation */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dd/curtains/curtain-02.jpeg"
            alt="D&D Home Decor authentic curtain installation with sheer and pleated drapes in living room"
            className="w-full h-full object-cover object-[center_30%] sm:object-center brightness-[0.88] contrast-[1.03] scale-[1.02] transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* Lighter, warmer gradient overlays preserving curtain details while guaranteeing WCAG text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[50%] bg-gradient-to-r from-black/70 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className="mb-3 sm:mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded bg-stone-900/60 backdrop-blur-md border border-stone-700/60">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium text-stone-200">
                {hero.categoryBadge}
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.75rem] min-[390px]:text-[3.2rem] sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] mb-4 sm:mb-5">
              TRANSFORM<br />YOUR SPACE.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-stone-200 font-light leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] mb-6 sm:mb-8">
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
                to="/products"
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
        "YOUR HOME. YOUR STYLE. YOUR SPACE."
      */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            {intro.label}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.12] tracking-tight">
            YOUR HOME.<br className="hidden sm:inline" /> YOUR STYLE.<br className="hidden sm:inline" /> YOUR SPACE.
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
        3. CUSTOMIZED CURTAINS (PRIMARY CATEGORY)
        Strongest visual showcase with authentic installations
      */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Mosaic: Authentic Photos */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/curtains/curtain-12.jpeg"
                  alt="Symmetrical living room sheer and blackout curtain installation"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-ivory/90 backdrop-blur-sm text-[10px] text-espresso font-medium uppercase tracking-wider text-center">
                  Villas &amp; Apartments
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex flex-col justify-between">
                <div className="relative aspect-square rounded overflow-hidden shadow-luxury bg-stone-200">
                  <img
                    src="/images/dd/curtains/curtain-05.jpeg"
                    alt="Apartment recessed track curtain installation"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-200">
                  <img
                    src="/images/dd/curtains/curtain-08.jpeg"
                    alt="Warm living room curtain composition"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {curtainsShowcase.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                {curtainsShowcase.heading}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {curtainsShowcase.description}
              </p>

              {/* Spaces Grid */}
              <div className="pt-2 space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Customised For Every Space:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {curtainsShowcase.spaces.map((sp) => (
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
                  to={curtainsShowcase.ctaHref}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-luxury transition-all text-center"
                >
                  <span>{curtainsShowcase.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(businessConfig.contextualMessages.curtains)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-cream hover:bg-stone-200 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded border border-stone-300 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Curtain Enquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        4. WINDOW BLINDS
        Zebra, Roller, Roman, PVC, Venetian Blinds with authentic imagery
      */}
      <section className="py-20 sm:py-28 bg-cream/40 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {blindsShowcase.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                {blindsShowcase.heading}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {blindsShowcase.description}
              </p>

              {/* Blind Types */}
              <div className="space-y-2.5 pt-2">
                {blindsShowcase.types.map((bt) => (
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
                  to="/products/zebra-blinds"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-luxury transition-all text-center"
                >
                  <span>{blindsShowcase.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(businessConfig.contextualMessages.blinds)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-ivory hover:bg-stone-100 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded border border-stone-300 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Blinds Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Visuals: Authentic Blinds */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/blinds/blind-01.jpeg"
                  alt="Zebra blind installed in brick wall niche"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Zebra Blinds
                  </span>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/blinds/blind-24.jpeg"
                  alt="Minimalist window zebra blind installation"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Precision Light Filter
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        5. CUSTOMISED FURNITURE
        Sofas, Chairs, Centre Tables
      */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visuals: Authentic Sofas, Accent Chairs & Headboards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
              <div className="sm:col-span-7 relative aspect-[4/3] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/furniture/furniture-08.jpeg"
                  alt="Custom sectional sofa with textured fabric and cushions"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Custom Sofas
                  </span>
                </div>
              </div>

              <div className="sm:col-span-5 relative aspect-[3/4] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/furniture/furniture-01.jpeg"
                  alt="Bespoke tufted teal accent armchair"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Accent Chairs
                  </span>
                </div>
              </div>

              <div className="sm:col-span-12 relative aspect-[21/9] rounded overflow-hidden shadow-luxury bg-stone-200">
                <img
                  src="/images/dd/furniture/furniture-31.jpeg"
                  alt="Custom upholstered architectural headboard"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 backdrop-blur-sm text-espresso rounded">
                    Bespoke Headboards
                  </span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                {furnitureShowcase.label}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
                {furnitureShowcase.heading}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {furnitureShowcase.description}
              </p>

              <div className="space-y-3 pt-2">
                {furnitureShowcase.items.map((item) => (
                  <div key={item.name} className="p-3 rounded bg-cream/40 border border-stone-200/80">
                    <strong className="text-xs uppercase tracking-wider font-semibold text-espresso block">{item.name}</strong>
                    <span className="text-xs text-stone-600 font-light">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={furnitureShowcase.ctaHref}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-luxury transition-all text-center"
                >
                  <span>{furnitureShowcase.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(businessConfig.contextualMessages.furniture)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-cream hover:bg-stone-200 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded border border-stone-300 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Furniture Enquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        6. BRANDED MATTRESSES (OFFICIAL DEALERSHIP)
        Kurlon, Duroflex, Sobha, Peps, Springfit, Restolex
      */}
      <section className="py-20 sm:py-24 bg-cream/60 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 pb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-ivory border border-stone-300">
              <ShieldCheck className="w-4 h-4 text-warm-gold-dark" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-espresso">
                Authorized Dealer in Bengaluru
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
              {mattressShowcase.heading}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              {mattressShowcase.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {mattressShowcase.brands.map((br) => (
              <div
                key={br.name}
                className="p-5 rounded bg-ivory border border-stone-200 shadow-subtle hover:shadow-luxury hover:border-warm-gold transition-all text-center space-y-2 flex flex-col justify-center items-center"
              >
                <Bed className="w-6 h-6 text-warm-gold-dark" />
                <h3 className="font-serif text-xl font-normal text-espresso">{br.name}</h3>
                <p className="text-[11px] text-stone-500 font-light leading-tight">{br.tagline}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between p-6 rounded bg-ivory border border-stone-200 gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-xl text-espresso font-normal">Looking for the right mattress size or comfort?</h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">Visit our Herohalli showroom or inquire on WhatsApp for expert recommendations.</p>
            </div>

            <a
              href={getWhatsAppUrl(businessConfig.contextualMessages.mattresses)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-medium rounded shadow-luxury transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Inquire On Mattresses</span>
            </a>
          </div>
        </div>
      </section>

      {/* 
        7. WALLPAPERS, CARPETS & HOME DÉCOR
        Wallpapers, Carpets, Mats, Bed Spreads, Runners, Sofa Covers, Bath Towels
      */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 pb-12">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
              {additionalProducts.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
              {additionalProducts.heading}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              {additionalProducts.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProducts.items.map((prod) => (
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
        8. SELECTED WORK / GALLERY
        Authentic D&D client photography with interactive filters & modal
      */}
      <GallerySection />

      {/* 
        VIDEO SHOWCASE
        Features verified client video footage of D&D Home Decor Bengaluru
      */}
      <VideoShowcase />

      {/* 
        9. WHY D&D
        Quality Assured, Creative Design, Reliable Service, On-Time Delivery
      */}
      <WhyDDSection />

      {/* 
        10. WHO WE SERVE
        Villas, Apartments, Flats, Showrooms, Offices
      */}
      <WhoWeServe />

      {/* 
        11. HOW IT WORKS
        01 Discover, 02 Select, 03 Customise, 04 Transform
      */}
      <HowItWorks />

      {/* 
        12. FINAL WHATSAPP CONVERSION CTA
      */}
      <ContactBanner />
    </div>
  );
};