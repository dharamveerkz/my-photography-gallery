import React, { useState, useEffect, useCallback, useRef } from "react";
import { useIntersection } from "../hooks/useIntersection";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";

const IMAGE_CONFIG = {
  basePath: "/uploads",
  format: "jpg",
  quality: 80,
  thumbWidth: 300,
  mobileWidth: 600,
  desktopWidth: 1200,
  batchSize: 12,
};

const generateImage = (id) => {
  const base = `${IMAGE_CONFIG.basePath}/img${id}.${IMAGE_CONFIG.format}`;
  return {
    id,
    thumb: `${base}?w=${IMAGE_CONFIG.thumbWidth}&q=${IMAGE_CONFIG.quality}`,
    mobile: `${base}?w=${IMAGE_CONFIG.mobileWidth}&q=${IMAGE_CONFIG.quality}`,
    desktop: `${base}?w=${IMAGE_CONFIG.desktopWidth}&q=${IMAGE_CONFIG.quality}`,
    full: `${base}?w=${IMAGE_CONFIG.desktopWidth}&q=${IMAGE_CONFIG.quality}`,
    filename: `dharamveer-photo-${id}.jpg`,
    alt: `Photography work ${id} by Dharamveer Kumar`,
    dimensions: "1200×1600",
  };
};

const ImageGallery = () => {
  const [visibleIds, setVisibleIds] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [likedImages, setLikedImages] = useState(() => {
    try { return JSON.parse(localStorage.getItem("likedImages")) || []; } 
    catch { return []; }
  });
  
  const loadMoreRef = useRef(null);
  const allIds = Array.from({ length: 200 }, (_, i) => i + 1);

  useEffect(() => {
    setVisibleIds(allIds.slice(0, IMAGE_CONFIG.batchSize));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedImages", JSON.stringify(likedImages));
  }, [likedImages]);

  const loadMore = useCallback(() => {
    setVisibleIds(prev => {
      if (prev.length >= allIds.length) return prev;
      const next = allIds.slice(prev.length, prev.length + IMAGE_CONFIG.batchSize);
      return [...prev, ...next];
    });
  }, []);

  const targetRef = useIntersection(loadMore, { threshold: 0.1 });

  const currentIndex = lightboxImage ? visibleIds.indexOf(lightboxImage.id) : -1;
  const handleNext = () => currentIndex < visibleIds.length - 1 && setLightboxImage(generateImage(visibleIds[currentIndex + 1]));
  const handlePrev = () => currentIndex > 0 && setLightboxImage(generateImage(visibleIds[currentIndex - 1]));

  const handleLike = (id) => setLikedImages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  const handleDownload = (image) => console.log("Downloaded:", image.filename);
  const handleClick = (image) => setLightboxImage(image);
  const handleCloseLightbox = () => setLightboxImage(null);

  return (
    <>
      <section id="gallery" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
          {visibleIds.map((id) => (
            <ImageCard
              key={id}
              image={generateImage(id)}
              isLiked={likedImages.includes(id)}
              onToggleLike={handleLike}
              onDownload={handleDownload}
              onClick={handleClick}
            />
          ))}
        </div>

        {visibleIds.length < allIds.length && (
          <div ref={(el) => { targetRef.current = el; loadMoreRef.current = el; }} className="py-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
              Loading more...
            </div>
          </div>
        )}
      </section>

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