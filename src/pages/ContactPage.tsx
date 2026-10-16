import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../data/config';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Wedding Stage Decoration',
    eventDate: '',
    venue: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hello Siri Flower Decoration, I am inquiring about ${formData.product}. Name: ${formData.name || 'Customer'}.${formData.phone ? ` Phone: ${formData.phone}.` : ''}${formData.eventDate ? ` Event Date: ${formData.eventDate}.` : ''}${formData.venue ? ` Venue: ${formData.venue}.` : ''}${formData.message ? ` Details: ${formData.message}` : ''}`;
    return getWhatsAppUrl(text);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 bg-ivory">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            GET IN TOUCH • BOLARUM, SECUNDERABAD
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-normal leading-[1.1] tracking-tight">
            LET'S TALK ABOUT<br />YOUR CELEBRATION.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            Connect directly on WhatsApp or call us for wedding stages, floral backdrops, entrance arches, and event flower decoration across Secunderabad &amp; Hyderabad.
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
                    Fastest way to reach Siri Flower Decoration
                  </span>
                </div>
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Click below to start a direct WhatsApp chat. Share your event date, venue location, or reference decoration designs anytime for a quick consultation.
              </p>

              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold rounded text-xs uppercase tracking-[0.16em] shadow-sm transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Location Details Card */}
            <div className="p-6 sm:p-8 rounded bg-cream/60 border border-stone-200 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-espresso">
                  <MapPin className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Location &amp; Service Area
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light space-y-1 pl-6">
                  <p className="font-medium text-espresso">{businessConfig.name}</p>
                  <p>{businessConfig.address}</p>
                  <p className="text-xs text-warm-gold-dark font-medium font-mono">{businessConfig.locationLabel}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <Phone className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Phone &amp; WhatsApp
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light pl-6 space-y-0.5">
                  <p className="font-medium text-espresso">{businessConfig.primaryPhone}</p>
                  <p className="text-xs text-stone-500">Available for event bookings &amp; consultations</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-espresso">
                  <Instagram className="w-4 h-4 text-warm-gold-dark shrink-0" />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    Social Gallery
                  </h4>
                </div>
                <div className="text-sm text-stone-600 font-light pl-6">
                  <a
                    href={businessConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-espresso hover:text-warm-gold-dark transition-colors"
                  >
                    <span>@siriflowerdecoration</span>
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
                  EVENT INQUIRY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                  Tell Us About Your Celebration
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  Fill in your event details below to consult on WhatsApp or submit your note.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-cream text-green-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-espresso font-normal">Thank You!</h4>
                  <p className="text-sm text-stone-600 font-light max-w-md mx-auto">
                    We have noted your interest in {formData.product}. Click below to send your details directly on WhatsApp for an immediate response.
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
                        placeholder="+91 99660 42727"
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Decoration Category
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      >
                        <option value="Wedding Stage Decoration">Wedding Stage Decoration</option>
                        <option value="Floral Backdrops">Floral Backdrops</option>
                        <option value="Wedding Entrance Decoration">Wedding Entrance Decoration</option>
                        <option value="Engagement & Reception Decoration">Engagement &amp; Reception Decoration</option>
                        <option value="Event Floral Arrangements">Event Floral Arrangements</option>
                        <option value="Haldi & Sangeet Decoration">Haldi &amp; Sangeet Decoration</option>
                        <option value="Car Floral Decoration">Car Floral Decoration</option>
                        <option value="Housewarming (Gruhapravesam)">Housewarming (Gruhapravesam)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                        Event Date / Timing
                      </label>
                      <input
                        type="text"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        placeholder="e.g., Nov 24, 2026 (Morning Muhurtham)"
                        className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                      Venue Location
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g., Function Hall / Lawn in Secunderabad or Bolarum"
                      className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                      Decoration Details &amp; Preferred Colors
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your theme, preferred flowers (roses, jasmine, marigolds), or specific backdrop ideas..."
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
                      <span>Inquire via WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-espresso hover:bg-stone-800 text-ivory text-xs uppercase tracking-[0.16em] font-medium rounded shadow-subtle transition-colors text-center"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Details</span>
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
                    Location on Map
                  </span>
                  <span className="text-[11px] text-stone-500 font-light block">
                    {businessConfig.address}
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
                  title="Siri Flower Decoration Location"
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