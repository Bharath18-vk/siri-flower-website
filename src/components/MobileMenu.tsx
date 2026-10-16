import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight, X } from 'lucide-react';
import { businessConfig, navigationLinks, getWhatsAppUrl } from '../data/config';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ivory flex flex-col justify-between p-6 sm:p-8 animate-fade-in md:hidden overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-5">
        <div>
          <span className="font-serif text-xl tracking-[0.08em] font-normal text-espresso block">
            {businessConfig.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-stone-500">
            {businessConfig.subtitle}
          </span>
        </div>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="p-2 -mr-2 text-espresso hover:text-warm-gold-dark transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="py-8 space-y-6">
        {navigationLinks.map((item, index) => {
          const isActive = currentPath === item.href;
          const num = `0${index + 1}`;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="group flex items-baseline justify-between py-2 border-b border-stone-100"
            >
              <div className="flex items-baseline space-x-4">
                <span className="text-xs font-mono text-stone-400">
                  {num}
                </span>
                <span
                  className={`font-serif text-3xl font-normal tracking-wide transition-colors ${
                    isActive
                      ? 'text-espresso font-medium'
                      : 'text-stone-700 group-hover:text-espresso'
                  }`}
                >
                  {item.label}
                </span>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isActive ? 'text-espresso' : 'text-stone-300'
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA */}
      <div className="pt-6 border-t border-stone-200 space-y-4">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 bg-stone-900 text-ivory rounded font-medium text-xs uppercase tracking-[0.16em] hover:bg-warm-gold hover:text-espresso transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-green-400" />
          <span>Chat on WhatsApp</span>
        </a>

        <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2">
          <span>{businessConfig.locationLabel}</span>
          <span className="text-stone-400 font-light">Turning moments into memories</span>
        </div>
      </div>
    </div>
  );
};
