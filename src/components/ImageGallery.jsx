// src/components/ImageGallery.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import { generateImage, getAllImageIds, IMAGE_CONFIG } from "../../utils/imageConfig";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";

const ImageGallery = () => {
  const [visibleIds, setVisibleIds] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [likedImages, setLikedImages] = useState(() => {
    try { return JSON.parse(localStorage.getItem("likedImages")) || []; } 
    catch { return []; }
  });
  
  const loadMoreRef = useRef(null);
  const allIds = getAllImageIds();

  // Load initial batch
  useEffect(() => {
    setVisibleIds(allIds.slice(0, IMAGE_CONFIG.batchSize));
  }, []);

  // Persist liked images to localStorage
  useEffect(() => {
    localStorage.setItem("likedImages", JSON.stringify(likedImages));
  }, [likedImages]);

  // Infinite scroll: load more images when threshold reached
  const loadMore = useCallback(() => {
    setVisibleIds(prev => {
      if (prev.length >= allIds.length) return prev;
      const next = allIds.slice(prev.length, prev.length + IMAGE_CONFIG.batchSize);
      return [...prev, ...next];
    });
  }, [allIds]);

  const targetRef = useIntersection(loadMore, { threshold: 0.1 });

  // Lightbox navigation logic
  const currentIndex = lightboxImage ? visibleIds.indexOf(lightboxImage.id) : -1;
  const handleNext = () => {
    if (currentIndex < visibleIds.length - 1) {
      setLightboxImage(generateImage(visibleIds[currentIndex + 1]));
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setLightboxImage(generateImage(visibleIds[currentIndex - 1]));
    }
  };

  // Handlers
  const handleLike = (id) => {
    setLikedImages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  const handleDownload = (image) => {
    console.log("Downloaded:", image.filename);
    // Optional: Track analytics here
  };
  const handleClick = (image) => setLightboxImage(image);
  const handleCloseLightbox = () => setLightboxImage(null);

  return (
    <>
      {/* Gallery Grid - CSS Columns for native masonry */}
      <section id="gallery" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
          {visibleIds.map((id) => {
            const image = generateImage(id); // ✅ From utils/imageConfig.js
            return (
              <ImageCard
                key={id}
                image={image}
                isLiked={likedImages.includes(id)}
                onToggleLike={handleLike}
                onDownload={handleDownload}
                onClick={handleClick}
              />
            );
          })}
        </div>

        {/* Load More Trigger */}
        {visibleIds.length < allIds.length && (
          <div ref={(el) => { targetRef.current = el; loadMoreRef.current = el; }} className="py-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
              Loading more...
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={currentIndex < visibleIds.length - 1}
          hasPrev={currentIndex > 0}
        />
      )}
    </>
  );
};

export default ImageGallery;