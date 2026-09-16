import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../data/config';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Customised Curtains',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hello D&D Home Decor, I am interested in ${formData.product || 'Home Decor'}. My name is ${formData.name || 'a customer'}. ${formData.phone ? `Phone: ${formData.phone}. ` : ''}${formData.message ? `Details: ${formData.message}` : ''}`;
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
            LET'S TALK ABOUT<br />YOUR SPACE.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            Connect directly on WhatsApp for immediate product inquiries, fabric choices, and showroom visits in Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Grid: WhatsApp Priority Card + Inquiry Form + Map */}
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
                    Fastest way to connect with D&amp;D Home Decor
                  </span>
                </div>
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Click below to open a direct WhatsApp chat with our team. Share your room photos, window dimensions, or questions anytime.
              </p>

              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Studio Details */}
            <div className="p-6 sm:p-8 rounded bg-cream/60 border border-stone-200 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-espresso">
                  <MapPin className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Showroom Address
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light space-y-1 pl-6">
                  <p className="font-medium text-espresso">{businessConfig.name}</p>
                  <p>{businessConfig.address}</p>
                  <p className="text-xs text-warm-gold-dark font-medium font-mono">Plus Code: {businessConfig.plusCode}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <Phone className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Phone &amp; Inquiries
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light pl-6 space-y-0.5">
                  <p>{businessConfig.primaryPhone}</p>
                  {businessConfig.secondaryPhone && <p>{businessConfig.secondaryPhone}</p>}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <Instagram className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Social Media
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light pl-6">
                  <a
                    href={businessConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-espresso hover:text-warm-gold-dark transition-colors"
                  >
                    <span>@ddhomedecor</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-ivory hover:bg-stone-100 text-espresso text-xs uppercase tracking-wider font-semibold rounded border border-stone-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-warm-gold-dark" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Web Inquiry Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-10 rounded bg-ivory border border-stone-200 shadow-subtle">
              <div className="space-y-2 pb-6 border-b border-stone-200">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark">
                  SEND AN ENQUIRY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                  Tell Us About Your Requirement
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  Fill out the details below and proceed via WhatsApp or submit your note directly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-cream text-green-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-espresso">Thank You!</h4>
                  <p className="text-sm text-stone-600 font-light max-w-md mx-auto">
                    We have noted your interest in {formData.product}. Connect directly on WhatsApp for an immediate response!
                  </p>
                  <div className="pt-4">
                    <a
                      href={getCustomWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3.5 bg-warm-gold text-espresso text-xs uppercase tracking-wider font-semibold rounded shadow-sm hover:bg-warm-gold-light transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-espresso" />
                      <span>Continue on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Product Interest
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      >
                        <option value="Customised Curtains">Customised Curtains</option>
                        <option value="Zebra Blinds">Zebra Blinds</option>
                        <option value="Roller / Roman Blinds">Roller / Roman Blinds</option>
                        <option value="PVC Blinds">PVC Blinds</option>
                        <option value="Customised Sofas">Customised Sofas</option>
                        <option value="Accent Chairs">Chairs / Accent Seating</option>
                        <option value="Centre Tables">Centre Tables</option>
                        <option value="Branded Mattresses">Branded Mattresses (Kurlon/Duroflex/etc.)</option>
                        <option value="Wallpapers">Wallpapers &amp; Wall Decor</option>
                        <option value="Carpets & Mats">Carpets &amp; Mats</option>
                        <option value="Home Furnishings">Bed Spreads &amp; Furnishings</option>
                        <option value="Full Space Makeover">Complete Interior Finishing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                      Tell Us About Your Space
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g., Villa in Bengaluru with 5 windows, looking for sheer & blackout curtains..."
                      className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <a
                      href={getCustomWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2.5 px-6 py-4 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold text-xs uppercase tracking-[0.16em] rounded shadow-luxury transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-espresso" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-medium rounded shadow-subtle transition-colors text-center"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Form</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Map View */}
            <div className="p-4 rounded bg-ivory border border-stone-200 shadow-subtle space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-espresso block">
                    Showroom Location on Map
                  </span>
                  <span className="text-[11px] text-stone-500 font-light block">
                    {businessConfig.plusCode} • Andrahalli Main Rd, Bengaluru
                  </span>
                </div>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-warm-gold-dark hover:underline flex items-center space-x-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-[16/9] w-full rounded overflow-hidden border border-stone-200 bg-stone-100">
                <iframe
                  title="D&D Home Decor Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={businessConfig.googleMapsEmbedUrl}
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};