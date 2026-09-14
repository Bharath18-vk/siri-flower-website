import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, MapPin } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../data/config';
import { productsData } from '../data/products';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Curtains',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hi D&D Home Decor, I am interested in ${formData.product || 'Home Decor'}. My name is ${formData.name || 'a customer'}. ${formData.message ? `Details: ${formData.message}` : ''}`;
    return getWhatsAppUrl(text);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
            START YOUR<br />PROJECT.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            Connect directly on WhatsApp for immediate product inquiries, fabric choices, and consultations.
          </p>
        </div>
      </section>

      {/* Main Grid: WhatsApp Direct Card + Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct WhatsApp Conversion & Business Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Priority Card */}
            <div className="p-6 sm:p-8 rounded bg-espresso text-ivory space-y-6 shadow-luxury">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-full bg-stone-800 text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-ivory">
                    Instant WhatsApp
                  </h3>
                  <span className="text-xs text-stone-400 font-light">
                    Fastest way to connect with D&amp;D
                  </span>
                </div>
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Click below to open a direct WhatsApp chat with our team. Share your room photos, dimensions, or questions anytime.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Studio Location Info */}
            <div className="p-6 sm:p-8 rounded bg-cream/60 border border-stone-200 space-y-4">
              <div className="flex items-center space-x-2 text-espresso">
                <MapPin className="w-4 h-4 text-warm-gold-dark" />
                <h4 className="text-xs uppercase tracking-widest font-semibold">
                  Studio Location
                </h4>
              </div>
              <div className="text-sm text-stone-600 font-light space-y-1">
                <p className="font-medium text-espresso">{businessConfig.name}</p>
                <p>{businessConfig.locationLabel}</p>
              </div>
              <p className="text-xs text-stone-400 font-light pt-2 border-t border-stone-200">
                Service across Bengaluru for home consultations &amp; measurements where applicable.
              </p>
            </div>
          </div>

          {/* Right Column: Web Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded bg-ivory border border-stone-200 shadow-subtle">
              <div className="space-y-2 mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  Prefer a written message? Fill out the details below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded bg-cream border border-warm-gold/30 text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-warm-gold-dark mx-auto" />
                  <h4 className="font-serif text-2xl text-espresso font-normal">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-sm text-stone-600 font-light max-w-md mx-auto">
                    Your enquiry has been received for this demo. You can also send this directly via WhatsApp for an immediate response:
                  </p>
                  <div className="pt-2">
                    <a
                      href={getCustomWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-stone-900 text-ivory rounded text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      <span>Forward to WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-stone-600 font-medium block">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-cream/40 border border-stone-300 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider text-stone-600 font-medium block">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contact number"
                        className="w-full px-4 py-3 bg-cream/40 border border-stone-300 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-stone-600 font-medium block">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com (optional)"
                        className="w-full px-4 py-3 bg-cream/40 border border-stone-300 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="product" className="text-xs uppercase tracking-wider text-stone-600 font-medium block">
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/40 border border-stone-300 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                      >
                        {productsData.map((p) => (
                          <option key={p.slug} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="Complete Home Décor">Complete Home Décor</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-stone-600 font-medium block">
                      Message / Project Scope
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your room, dimensions, or styling preferences..."
                      className="w-full px-4 py-3 bg-cream/40 border border-stone-300 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-espresso hover:bg-stone-800 text-ivory rounded font-medium text-xs uppercase tracking-[0.16em] shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
