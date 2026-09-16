import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../data/config';

export const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string>('/videos/dd/dd-video-04.mp4');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const videoOptions = [
    {
      title: 'Store Introduction',
      duration: '0:07',
      src: '/videos/dd/dd-video-04.mp4',
      subtitle: 'D&D Home Decor Bengaluru Overview',
    },
    {
      title: 'Brand Story & Dealerships',
      duration: '0:49',
      src: '/videos/dd/dd-video-02.mp4',
      subtitle: 'Authorized Dealer & Client Service',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-espresso text-ivory overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-espresso to-stone-950 opacity-95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-light block">
                SEE OUR WORK IN ACTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-ivory tracking-tight">
                VISIT D&amp;D HOME DECOR
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Experience the quality of our fabrics, smooth window blind mechanisms, branded mattresses, and bespoke furniture in person at our Bengaluru showroom.
            </p>

            {/* Store Location Card */}
            <div className="p-4 sm:p-5 rounded bg-stone-900/80 border border-stone-800 space-y-3">
              <div className="flex items-start space-x-3 text-stone-200">
                <MapPin className="w-5 h-5 text-warm-gold-light shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-light space-y-0.5">
                  <strong className="font-medium text-ivory block">{businessConfig.name}</strong>
                  <p>{businessConfig.address}</p>
                  <p className="text-stone-400">Call / WhatsApp: {businessConfig.primaryPhone}</p>
                </div>
              </div>
              <div className="pt-2 pl-8 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono text-[11px]">{businessConfig.plusCode}</span>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gold-light hover:underline inline-flex items-center space-x-1 text-[11px] uppercase tracking-wider font-medium"
                >
                  <span>Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Video Selector Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 block">
                Select Footage to Watch:
              </span>
              <div className="flex flex-col gap-2">
                {videoOptions.map((opt) => (
                  <button
                    key={opt.src}
                    onClick={() => {
                      setActiveVideo(opt.src);
                      setIsPlaying(false);
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                      }
                    }}
                    className={`text-left px-4 py-2.5 rounded text-xs transition-all border ${
                      activeVideo === opt.src
                        ? 'bg-warm-gold/20 border-warm-gold text-ivory'
                        : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-medium">
                      <span>{opt.title}</span>
                      <span className="font-mono text-[10px] text-warm-gold-light">{opt.duration}</span>
                    </div>
                    <span className="text-[11px] text-stone-400 font-light block">{opt.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(businessConfig.contextualMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-warm-gold hover:bg-warm-gold-light text-espresso font-semibold text-xs uppercase tracking-[0.16em] rounded shadow-luxury transition-all"
              >
                <MessageCircle className="w-4 h-4 text-espresso" />
                <span>Book a Showroom Visit</span>
              </a>
            </div>
          </div>

          {/* Right Video Player */}
          <div className="lg:col-span-7">
            <div className="relative rounded overflow-hidden shadow-floating border border-stone-800 bg-stone-950 aspect-[9/16] sm:aspect-[16/10] max-h-[560px] mx-auto flex items-center justify-center">
              <video
                key={activeVideo}
                ref={videoRef}
                src={activeVideo}
                preload="metadata"
                playsInline
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-contain bg-black"
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="pointer-events-auto p-5 sm:p-6 rounded-full bg-warm-gold/90 hover:bg-warm-gold text-espresso shadow-floating transition-transform hover:scale-105 active:scale-95"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-espresso ml-1" />
                  </button>
                )}
              </div>

              {/* Bottom Quick Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-auto">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-2 rounded text-ivory hover:text-warm-gold transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-2 rounded text-ivory hover:text-warm-gold transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};