import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { businessConfig, navigationLinks, getWhatsAppUrl } from '../data/config';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isTransparent
            ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-ivory py-4 sm:py-5'
            : 'bg-ivory/95 backdrop-blur-md text-espresso py-3 sm:py-4 border-b border-stone-200/70 shadow-subtle'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with left branding */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 rounded"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.08em] font-normal leading-tight transition-colors ${
                isTransparent
                  ? 'text-ivory group-hover:text-stone-200'
                  : 'text-espresso group-hover:text-warm-gold-dark'
              }`}
            >
              {businessConfig.name}
            </span>
            <span
              className={`text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.2em] font-medium transition-colors ${
                isTransparent ? 'text-stone-300' : 'text-stone-500'
              }`}
            >
              {businessConfig.subtitle}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors relative py-1 ${
                    isTransparent
                      ? isActive
                        ? 'text-ivory'
                        : 'text-stone-300 hover:text-ivory'
                      : isActive
                      ? 'text-espresso font-semibold'
                      : 'text-stone-600 hover:text-espresso'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isTransparent ? 'bg-ivory' : 'bg-espresso'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp Action */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] font-medium px-4 py-2.5 rounded transition-all duration-200 ${
                isTransparent
                  ? 'bg-ivory/15 hover:bg-ivory text-ivory hover:text-espresso backdrop-blur-sm border border-white/25'
                  : 'bg-stone-900 hover:bg-warm-gold hover:text-espresso text-ivory shadow-sm'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className={`p-2 rounded-full transition-colors ${
                isTransparent
                  ? 'text-ivory hover:bg-white/10'
                  : 'text-stone-800 hover:bg-stone-200/70'
              }`}
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className={`p-2 rounded focus:outline-none ${
                isTransparent ? 'text-ivory' : 'text-espresso'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={location.pathname}
      />
    </>
  );
};
