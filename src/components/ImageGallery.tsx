import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GalleryPhoto } from '../types';
import { PROPERTY_GALLERY_PHOTOS, HOTEL_INFO } from '../data/hotelData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Play, 
  Pause, 
  Sparkles, 
  Camera, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Info
} from 'lucide-react';

interface ImageGalleryProps {
  id?: string;
  title?: string;
  subtitle?: string;
  photos?: GalleryPhoto[];
  initialCategory?: string;
  showCategoryFilters?: boolean;
  onOpenBooking?: () => void;
  className?: string;
  compact?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  id = 'property-image-gallery',
  title = 'Property Photo Showcase',
  subtitle = 'Take a virtual tour through our air-conditioned rooms, clean private bathrooms, and peaceful surroundings in Medan Petisah.',
  photos = PROPERTY_GALLERY_PHOTOS,
  initialCategory = 'all',
  showCategoryFilters = true,
  onOpenBooking,
  className = '',
  compact = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  // Filter photos based on category
  const filteredPhotos = photos.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  // Current photo safely clamped
  const currentPhoto = filteredPhotos[currentIndex] || filteredPhotos[0] || photos[0];

  // Category counts
  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'bedrooms', label: 'Bedrooms & Suites', count: photos.filter((p) => p.category === 'bedrooms').length },
    { id: 'bathrooms', label: 'Bathrooms & Hygiene', count: photos.filter((p) => p.category === 'bathrooms').length },
    { id: 'lobby', label: 'Lobby & Reception', count: photos.filter((p) => p.category === 'lobby').length },
    { id: 'exterior', label: 'Property & Facade', count: photos.filter((p) => p.category === 'exterior').length },
    { id: 'amenities', label: 'Syariah & Amenities', count: photos.filter((p) => p.category === 'amenities').length },
  ].filter((cat) => cat.count > 0 || cat.id === 'all');

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= filteredPhotos.length ? 0 : prev + 1));
  }, [filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? filteredPhotos.length - 1 : prev - 1));
  }, [filteredPhotos.length]);

  // When category changes, reset index
  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && filteredPhotos.length > 1) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying, filteredPhotos.length, handleNext]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      } else if (e.key === ' ' && isFullscreen) {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isFullscreen]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${HOTEL_INFO.name} - ${currentPhoto.title}`,
        text: currentPhoto.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <section id={id} className={`space-y-8 ${className}`}>
      {/* Header section (if provided) */}
      {title && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1A365D] border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
              <Camera className="w-3.5 h-3.5 text-[#1A365D]" />
              <span>High-Resolution Photo Gallery</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#1A365D] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              id="gallery-autoplay-toggle-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                isPlaying
                  ? 'bg-amber-500 border-amber-600 text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'Slideshow Active' : 'Auto Play'}</span>
            </button>

            <button
              id="gallery-fullscreen-open-btn"
              onClick={() => setIsFullscreen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
              title="Expand Fullscreen Lightbox"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#1A365D]" />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>
      )}

      {/* Category Filter Pills with Responsive Layout & Zero Hidden Overflow */}
      {showCategoryFilters && (
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 pb-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`gallery-filter-${cat.id}`}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#1A365D] text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Carousel Viewer */}
      <div 
        className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-200 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image Stage */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/10 min-h-[320px] max-h-[560px] overflow-hidden bg-slate-950 flex items-center justify-center">
          {currentPhoto ? (
            <img
              key={currentPhoto.id}
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-slate-400 text-sm">No image available in this category.</div>
          )}

          {/* Robust semi-transparent dark gradient overlay across bottom half for strict accessibility */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-1" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none z-1" />

          {/* Top Bar inside image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="bg-black/70 backdrop-blur-md text-amber-300 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                {currentPhoto?.categoryLabel || 'Lewi House Photo'}
              </span>
              {currentPhoto?.featured && (
                <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md text-emerald-200 border border-emerald-500/40 px-3 py-1.5 rounded-full text-[11px] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Featured Property View</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-black/70 backdrop-blur-md text-white border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                {currentIndex + 1} <span className="text-slate-300 font-normal">/ {filteredPhotos.length}</span>
              </div>
              <button
                onClick={handleShare}
                className="bg-black/70 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 p-2 rounded-full transition-colors cursor-pointer shadow-md"
                title="Share photo"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="bg-black/70 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 p-2 rounded-full transition-colors cursor-pointer shadow-md"
                title="Fullscreen view"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            id="gallery-prev-arrow-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 p-3 sm:p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            id="gallery-next-arrow-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 p-3 sm:p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Photo Details Overlay with High-Contrast Dark Gradient Card */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-10">
            <div className="bg-black/55 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <h3 className="font-display font-bold text-base sm:text-xl text-white tracking-tight drop-shadow-md">
                    {currentPhoto?.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 line-clamp-2 leading-relaxed drop-shadow-sm font-normal">
                  {currentPhoto?.description}
                </p>
              </div>

              {onOpenBooking && (
                <button
                  id="gallery-book-now-overlay-btn"
                  onClick={onOpenBooking}
                  className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg hover:shadow-xl transition-all shrink-0 cursor-pointer self-start sm:self-auto flex items-center gap-1.5 active:scale-95"
                >
                  <span>Book This Room</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Slideshow Progress bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
              <div 
                key={currentIndex} 
                className="h-full bg-amber-400 animate-[progress_4s_linear_infinite]"
                style={{
                  animation: 'progressBar 4s linear forwards',
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Navigation Filmstrip */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800/80">
          <div 
            ref={thumbnailContainerRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none"
          >
            {filteredPhotos.map((photo, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={photo.id}
                  id={`gallery-thumb-${photo.id}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 rounded-xl overflow-hidden transition-all transform cursor-pointer ${
                    isSelected
                      ? 'ring-3 ring-amber-400 scale-105 z-10 opacity-100 shadow-md'
                      : 'opacity-50 hover:opacity-90 hover:scale-100'
                  }`}
                  style={{ width: compact ? '64px' : '88px', height: compact ? '44px' : '58px' }}
                  title={photo.title}
                >
                  <img
                    src={photo.thumbnailUrl || photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-amber-500/15 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copy Notification Toast */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2 border border-slate-700 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Photo link copied to clipboard!</span>
        </div>
      )}

      {/* 2. FULLSCREEN LIGHTBOX MODAL */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-slate-800 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {HOTEL_INFO.name}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-amber-400 font-semibold">
                {currentPhoto?.categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                {currentIndex + 1} of {filteredPhotos.length}
              </span>
              <button
                id="lightbox-play-toggle-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                id="lightbox-close-btn"
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close Fullscreen (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Stage */}
          <div 
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentPhoto?.imageUrl}
              alt={currentPhoto?.title}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Prev / Next controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full border border-white/20 shadow-xl transition-all cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full border border-white/20 shadow-xl transition-all cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer with Caption and Thumbnails */}
          <div className="space-y-4 pt-3 border-t border-slate-800/90 bg-black/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {currentPhoto?.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
                  {currentPhoto?.description}
                </p>
              </div>

              {onOpenBooking && (
                <button
                  onClick={() => {
                    setIsFullscreen(false);
                    onOpenBooking();
                  }}
                  className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-all shrink-0 cursor-pointer self-start sm:self-auto active:scale-95"
                >
                  Book Stay at Lewi House
                </button>
              )}
            </div>

            {/* Lightbox Thumbnails row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-center">
              {filteredPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 rounded-lg overflow-hidden transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'ring-2 ring-amber-400 scale-105 opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  style={{ width: '60px', height: '40px' }}
                >
                  <img
                    src={photo.thumbnailUrl || photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
