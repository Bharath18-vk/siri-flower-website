import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { getProductBySlug, getAdjacentProducts } from '../data/products';
import { getWhatsAppUrl } from '../data/config';
import { ContactBanner } from '../components/ContactBanner';
import { useGallery } from '../hooks/useGallery';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const { items: allGalleryItems } = useGallery();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const { prev, next } = getAdjacentProducts(product.slug);

  // Dynamic uploads matching this product's category
  const dynamicPhotos = allGalleryItems
    .filter((item) => {
      const cat = product.category.toLowerCase();
      const label = item.categoryLabel.toLowerCase();
      const isMatch =
        label.includes(cat) ||
        cat.includes(label) ||
        (cat.includes('curtain') && item.category === 'CURTAINS') ||
        (cat.includes('blind') && item.category === 'BLINDS') ||
        (cat.includes('furniture') && item.category === 'FURNITURE') ||
        (cat.includes('sofa') && item.category === 'FURNITURE') ||
        (cat.includes('chair') && item.category === 'FURNITURE') ||
        (cat.includes('carpet') && item.category === 'CARPETS') ||
        (cat.includes('mat') && item.category === 'CARPETS') ||
        (cat.includes('mattress') && label.includes('mattress')) ||
        (cat.includes('wallpaper') && label.includes('wallpaper')) ||
        (cat.includes('decor') && item.category === 'DECOR');
      return isMatch && !(product.galleryImages || []).some((p) => p.url === item.imageUrl);
    })
    .map((item) => ({
      url: item.imageUrl,
      caption: item.caption || item.title || `${product.title} installation`,
    }));

  const combinedGalleryImages = [...dynamicPhotos, ...(product.galleryImages || [])];

  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
      {/* Back to Products Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-espresso transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Collections</span>
        </Link>
      </div>

      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Visual */}
          <div className="w-full min-w-0 lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded overflow-hidden shadow-luxury bg-stone-200">
              <img
                src={product.heroImage}
                alt={`${product.title} - ${product.subtitle}`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium bg-ivory/95 backdrop-blur-md text-espresso rounded shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Product Editorial Info */}
          <div className="w-full min-w-0 lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-semibold text-warm-gold-dark tracking-widest">
                COLLECTION {product.number}
              </span>
              <span className="w-6 h-[1px] bg-stone-300" />
              <span className="text-[11px] uppercase tracking-widest font-medium text-stone-500">
                {product.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-[1.1] tracking-tight">
              {product.title}
            </h1>

            <p className="font-serif italic text-xl text-stone-600 font-normal">
              {product.subtitle}
            </p>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Suitable Spaces */}
            {product.suitableSpaces && (
              <div className="pt-2 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-espresso block">
                  Recommended For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.suitableSpaces.map((sp) => (
                    <span key={sp} className="px-3 py-1 rounded text-xs bg-cream/70 border border-stone-200 text-stone-700 font-light">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-3 space-y-3">
              <a
                href={getWhatsAppUrl(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-4 bg-espresso hover:bg-stone-800 text-ivory rounded font-medium text-xs uppercase tracking-[0.16em] shadow-luxury transition-all"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Enquire on WhatsApp</span>
              </a>

              <p className="text-[11px] text-stone-400 font-light">
                Direct consultation for sizing, fabrics, patterns, site visits &amp; options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Materials Section */}
      <section className="py-16 bg-cream/50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Key Features */}
            <div className="bg-ivory p-7 rounded border border-stone-200 space-y-4">
              <div className="flex items-center space-x-2 text-warm-gold-dark">
                <Check className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso">
                  Key Features &amp; Options
                </span>
              </div>
              <ul className="space-y-2.5">
                {product.features.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-600 flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-2 shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials & Maintenance */}
            <div className="bg-ivory p-7 rounded border border-stone-200 space-y-4">
              <div className="flex items-center space-x-2 text-warm-gold-dark">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso">
                  Materials &amp; Care
                </span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-stone-600 font-light">
                <div>
                  <strong className="font-medium text-espresso block">Composition:</strong>
                  <p>{product.materialsAndCare.materials}</p>
                </div>
                <div>
                  <strong className="font-medium text-espresso block">Maintenance:</strong>
                  <p>{product.materialsAndCare.maintenance}</p>
                </div>
                <div>
                  <strong className="font-medium text-espresso block">Recommended Spaces:</strong>
                  <p>{product.materialsAndCare.recommendedRooms}</p>
                </div>
              </div>
            </div>

            {/* Styling Tips */}
            <div className="bg-ivory p-7 rounded border border-stone-200 space-y-4">
              <div className="flex items-center space-x-2 text-warm-gold-dark">
                <span className="w-2 h-2 rounded-full bg-warm-gold" />
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso">
                  Styling &amp; Space Planning
                </span>
              </div>
              <ul className="space-y-2.5">
                {product.stylingTips.map((tip, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-600 flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 shrink-0" />
                    <span className="font-light">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Spaces */}
      {combinedGalleryImages && combinedGalleryImages.length > 0 && (
        <section className="py-20 sm:py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block">
                AUTHENTIC PHOTOGRAPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
                INSTALLATIONS &amp; DETAILS
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Photographs illustrating fabric draping, textures, and bespoke room finishes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {combinedGalleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded bg-stone-200 shadow-subtle flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                    <img
                      src={img.url}
                      alt={img.caption}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-cream/40 border-t border-stone-200 flex-1">
                    <p className="text-xs text-stone-600 font-light">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Adjacent Product Navigation */}
      <section className="border-t border-stone-200 py-10 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            to={`/products/${prev.slug}`}
            className="group flex items-center space-x-2.5 sm:space-x-3 text-left min-w-0"
          >
            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">
                Previous
              </span>
              <span className="font-serif text-sm sm:text-lg text-espresso group-hover:text-warm-gold-dark transition-colors truncate block">
                {prev.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/products/${next.slug}`}
            className="group flex items-center space-x-2.5 sm:space-x-3 text-right min-w-0"
          >
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">
                Next
              </span>
              <span className="font-serif text-sm sm:text-lg text-espresso group-hover:text-warm-gold-dark transition-colors truncate block">
                {next.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <ContactBanner />
    </div>
  );
};