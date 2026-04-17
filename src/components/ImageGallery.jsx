// src/components/ImageGallery.jsx

import React, { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

/* global __UPLOAD_LIST__ */
const UPLOADS = __UPLOAD_LIST__;

const WIDTHS = [400, 600, 900, 1200];

const cdn = (path, w) =>
  `/.netlify/images?url=${encodeURIComponent(path)}&w=${w}&q=75`;

const buildSrcSet = (path) =>
  WIDTHS.map((w) => `${cdn(path, w)} ${w}w`).join(", ");

const ImageGallery = () => {
  const galleryRef = useRef(null);
  const masonryInstance = useRef(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement || UPLOADS.length === 0) return;

    const setupMasonry = () => {
      masonryInstance.current = new Masonry(galleryElement, {
        itemSelector: ".masonry-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 15,
      });
      masonryInstance.current.layout();
    };

    const handleResize = () => masonryInstance.current?.layout();
    window.addEventListener("resize", handleResize);

    imagesLoaded(galleryElement, setupMasonry);

    const observer = new MutationObserver(() => {
      masonryInstance.current?.reloadItems?.();
      masonryInstance.current?.layout?.();
    });
    observer.observe(galleryElement, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      masonryInstance.current?.destroy();
    };
  }, []);

  if (UPLOADS.length === 0) {
    return (
      <p style={{ textAlign: "center", margin: "2rem" }}>No images found.</p>
    );
  }

  return (
    <section id="image-gallery" ref={galleryRef}>
      <div className="grid-sizer"></div>
      {UPLOADS.map((filename, i) => {
        const originalUrl = `/uploads/${filename}`;
        const isAboveFold = i < 6;
        return (
          <div className="masonry-item" key={filename}>
            <div className="image-container">
              <img
                src={cdn(originalUrl, 600)}
                srcSet={buildSrcSet(originalUrl)}
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 400px"
                alt={`Gallery ${filename}`}
                title={filename}
                loading={isAboveFold ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={isAboveFold ? "high" : "low"}
                onLoad={() => masonryInstance.current?.layout?.()}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <a
              href={originalUrl}
              download
              className="download-btn"
              aria-label={`Download ${filename}`}
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
