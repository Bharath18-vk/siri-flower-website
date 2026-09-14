import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ProductItem } from '../data/products';
import { getWhatsAppUrl } from '../data/config';

interface ProductEditorialRowProps {
  product: ProductItem;
  reversed?: boolean;
  priority?: boolean;
}

export const ProductEditorialRow: React.FC<ProductEditorialRowProps> = ({
  product,
  reversed = false,
  priority = false,
}) => {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-10 sm:py-14 border-b border-stone-200/80 last:border-b-0`}
    >
      {/* Image Column */}
      <div
        className={`w-full min-w-0 lg:col-span-7 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <Link
          to={`/products/${product.slug}`}
          className="group block relative overflow-hidden rounded-sm bg-stone-200 shadow-subtle focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
          aria-label={`View details for ${product.title}`}
        >
          {/* Main Image with aspect ratio */}
          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
            <img
              src={product.heroImage}
              alt={`${product.title} - ${product.subtitle}`}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Floating Category Label */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-medium bg-ivory/95 backdrop-blur-md text-espresso rounded-sm shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Hover highlight overlay */}
          <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>
      </div>

      {/* Editorial Content Column */}
      <div
        className={`w-full min-w-0 lg:col-span-5 space-y-5 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {/* Product Index & Category */}
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs font-semibold text-warm-gold-dark tracking-widest">
            {product.number}
          </span>
          <span className="w-6 h-[1px] bg-stone-300" />
          <span className="text-[11px] uppercase tracking-widest font-medium text-stone-500">
            {product.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <Link
            to={`/products/${product.slug}`}
            className="group inline-block focus:outline-none"
          >
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-normal tracking-tight group-hover:text-warm-gold-dark transition-colors">
              {product.title}
            </h3>
          </Link>
          <p className="font-serif italic text-lg sm:text-xl text-stone-600 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
          {product.description}
        </p>

        {/* Features Preview */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {product.features.slice(0, 4).map((feature, i) => (
            <li
              key={i}
              className="text-xs text-stone-600 flex items-start space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-1.5 shrink-0" />
              <span className="font-light">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Dual Actions: Explore Details + Instant WhatsApp */}
        <div className="pt-3 flex flex-wrap items-center gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] font-semibold text-espresso hover:text-warm-gold-dark py-2.5 group transition-colors"
          >
            <span>{product.ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <span className="text-stone-300 hidden sm:inline">•</span>

          <a
            href={getWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-stone-600 hover:text-espresso py-1.5 px-3 rounded bg-cream hover:bg-beige transition-colors border border-stone-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-600" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
};
