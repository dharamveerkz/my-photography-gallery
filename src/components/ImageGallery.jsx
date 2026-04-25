// src/components/ImageGallery.jsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

// 🎯 Image config - JPG ONLY
const IMAGE_CONFIG = {
  basePath: "/uploads",
  format: "jpg",
  quality: 85,
  maxWidth: 1200,
  thumbWidth: 400,
};

// 🔄 Generate optimized JPG image URL
const getOptimizedSrc = (index, isThumbnail = false) => {
  const width = isThumbnail ? IMAGE_CONFIG.thumbWidth : IMAGE_CONFIG.maxWidth;
  return `${IMAGE_CONFIG.basePath}/img${index}.${IMAGE_CONFIG.format}?w=${width}&q=${IMAGE_CONFIG.quality}`;
};

// 🎨 Skeleton loader component
const ImageSkeleton = () => (
  <div className="aspect-[3/4] bg-gray-800/50 rounded-xl animate-pulse overflow-hidden">
    <div className="w-full h-full bg-gradient-to-br from-gray-700/30 via-gray-800/50 to-gray-700/30"></div>
  </div>
);

const ImageGallery = () => {
  const [imageIndices, setImageIndices] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const galleryRef = useRef(null);
  const masonryInstance = useRef(null);
  const observerRef = useRef(null);

  // 🚀 Fast image detection with parallel fetching
  useEffect(() => {
    const MAX_IMAGES = 200;
    const TIMEOUT_MS = 3000;
    const foundImages = [];
    let completed = 0;

    const checkImage = async (index) => {
      const imageUrl = getOptimizedSrc(index, true);
      
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
        
        const response = await fetch(imageUrl, { 
          method: 'HEAD',
          signal: controller.signal,
          cache: 'force-cache'
        });
        
        clearTimeout(timeout);
        
        if (response.ok) {
          foundImages.push(index);
        }
      } catch {
        // Image doesn't exist, skip silently
      } finally {
        completed++;
        if (completed === MAX_IMAGES) {
          setImageIndices(foundImages.sort((a, b) => a - b));
        }
      }
    };

    // Parallel fetch with concurrency limit
    const concurrencyLimit = 10;
    const queue = [...Array(MAX_IMAGES).keys()].map(i => i + 1);
    
    const processQueue = async () => {
      const workers = [];
      while (queue.length > 0) {
        while (workers.length < concurrencyLimit && queue.length > 0) {
          const index = queue.shift();
          workers.push(checkImage(index));
        }
        if (workers.length > 0) {
          await Promise.race(workers);
          for (let i = workers.length - 1; i >= 0; i--) {
            try {
              await Promise.resolve(workers[i]);
              workers.splice(i, 1);
            } catch {
              workers.splice(i, 1);
            }
          }
        }
      }
      await Promise.all(workers);
    };

    processQueue();

    return () => {};
  }, []);

  // 🖼️ Intersection Observer for lazy loading
  useEffect(() => {
    if (imageIndices.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const index = img.dataset.index;
            
            setLoadedImages(prev => ({ ...prev, [index]: 'loading' }));
            
            // Load high-res JPG
            const highResImg = new Image();
            
            highResImg.onload = () => {
              img.src = getOptimizedSrc(index);
              img.classList.remove('blur-sm', 'scale-105');
              img.classList.add('transition-opacity', 'duration-300', 'opacity-100');
              setLoadedImages(prev => ({ ...prev, [index]: 'loaded' }));
            };
            
            highResImg.onerror = () => {
              setLoadedImages(prev => ({ ...prev, [index]: 'error' }));
            };
            
            highResImg.src = getOptimizedSrc(index);
            observerRef.current?.unobserve(img);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.01 }
    );

    const images = galleryRef.current?.querySelectorAll('img[data-index]');
    images?.forEach(img => observerRef.current?.observe(img));

    return () => observerRef.current?.disconnect();
  }, [imageIndices]);

  // 🧱 Masonry layout setup
  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement || imageIndices.length === 0) return;

    const setupMasonry = () => {
      masonryInstance.current = new Masonry(galleryElement, {
        itemSelector: ".masonry-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 16,
        resize: true,
      });

      const handleResize = () => masonryInstance.current?.layout();
      window.addEventListener("resize", handleResize);
      masonryInstance.current.layout();

      return () => {
        window.removeEventListener("resize", handleResize);
        masonryInstance.current?.destroy();
      };
    };

    const cleanup = imagesLoaded(galleryElement, setupMasonry);

    return () => {
      cleanup?.();
      masonryInstance.current?.destroy();
    };
  }, [imageIndices]);

  // 📜 Scroll-to-top visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Smooth scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // ⌨️ Keyboard support for scroll button
  const handleScrollKey = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  if (imageIndices.length === 0) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400">Loading your gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section 
        id="image-gallery" 
        ref={galleryRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        aria-label="Photography portfolio gallery"
      >
        {/* Grid sizer for Masonry */}
        <div className="grid-sizer"></div>
        
        {/* Gallery Items */}
        {imageIndices.map((index) => {
          const thumbSrc = getOptimizedSrc(index, true);
          const isLoaded = loadedImages[index] === 'loaded';
          
          return (
            <article 
              key={index} 
              className="masonry-item group relative break-inside-avoid mb-4"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                
                {/* Skeleton Loader */}
                {!isLoaded && <ImageSkeleton />}
                
                {/* Actual Image with blur-up effect */}
                <img
                  data-index={index}
                  src={thumbSrc}
                  alt={`Photography work ${index} by Dharamveer Kumar`}
                  title={`img${index}.jpg`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className={`w-full h-auto object-cover transition-all duration-500 ${
                    isLoaded 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105 blur-sm'
                  } group-hover:scale-105`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.closest('.masonry-item')?.style.display = 'none';
                    setTimeout(() => masonryInstance.current?.layout(), 100);
                  }}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Download Button - FIXED BOTTOM-RIGHT POSITION */}
                <a
                  href={getOptimizedSrc(index)}
                  download={`dharamveer-photo-${index}.jpg`}
                  className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-black/70 backdrop-blur-md border border-gray-600 hover:border-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-0.5 hover:scale-110 shadow-lg"
                  aria-label={`Download photography work ${index}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fas fa-download text-gray-200 hover:text-amber-400 transition-colors text-base font-semibold"></i>
                </a>
                
                {/* Image Number Badge - Bottom Left */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-300 font-medium">#{index}</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 🚀 Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        onKeyDown={handleScrollKey}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <i className="fas fa-arrow-up text-lg font-bold"></i>
      </button>

      {/* ✨ Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-100"
          style={{ 
            width: `${Math.min((typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100 : 0), 100)}%` 
          }}
        />
      </div>
    </>
  );
};

export default ImageGallery;