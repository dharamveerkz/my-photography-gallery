// src/components/ImageGallery.jsx

import React, { useEffect, useState, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const ImageGallery = () => {
  const [imageIndices, setImageIndices] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);
  const masonryInstance = useRef(null);

  useEffect(() => {
    const maxTries = 200;
    const foundImages = [];
    let loadCount = 0;

    const checkImageExists = (url, index) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        foundImages.push(index);
        loadCount++;
        if (loadCount === maxTries) finishLoading(foundImages);
      };

      img.onerror = () => {
        loadCount++;
        if (loadCount === maxTries) finishLoading(foundImages);
      };
    };

    const finishLoading = (found) => {
      setImageIndices(found);
      setLoading(false);
    };

    for (let i = 1; i <= maxTries; i++) {
      const imageUrl = `/uploads/img${i}.jpg`;
      checkImageExists(imageUrl, i);
    }
  }, []);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement || imageIndices.length === 0) return;

    const setupMasonry = () => {
      masonryInstance.current = new Masonry(galleryElement, {
        itemSelector: ".masonry-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 15,
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
      masonryInstance.current?.destroy();
    };
  }, [imageIndices]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", margin: "2rem" }}>Loading gallery...</p>
    );
  }

  if (imageIndices.length === 0) {
    return (
      <p style={{ textAlign: "center", margin: "2rem" }}>No images found.</p>
    );
  }

  return (
    <section id="image-gallery" ref={galleryRef}>
      <div className="grid-sizer"></div>
      {imageIndices.map((index) => {
        const imageUrl = `/uploads/img${index}.jpg`;
        return (
          <div className="masonry-item" key={index}>
            <div className="image-container">
              <img
                src={imageUrl}
                alt={`Gallery ${index}`}
                title={`img${index}.jpg`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <a
              href={imageUrl}
              download
              className="download-btn"
              aria-label={`Download image ${index}`}
            >
              <img src="/dw.png" alt="Download" className="download-icon" />
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default ImageGallery;
