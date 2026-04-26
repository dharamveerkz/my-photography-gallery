import React, { useEffect, useCallback } from "react";

const Lightbox = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  useEffect(() => {
    const handleArrows = (e) => {
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleArrows);
    return () => window.removeEventListener("keydown", handleArrows);
  }, [onNext, onPrev, hasNext, hasPrev]);

  const handleBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-label={`Viewing photo ${image.id}`}>
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
        <i className="fas fa-times text-lg"></i>
      </button>

      {hasPrev && (
        <button onClick={onPrev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
          <i className="fas fa-chevron-left text-xl"></i>
        </button>
      )}

      <div className="relative max-w-5xl max-h-[90vh]">
        <img src={image.full} alt={image.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" loading="eager" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
          Photo #{image.id} • {image.dimensions}
        </div>
      </div>

      {hasNext && (
        <button onClick={onNext} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
          <i className="fas fa-chevron-right text-xl"></i>
        </button>
      )}

      <button onClick={onClose} className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-xl shadow-lg transition-all flex items-center gap-2">
        <i className="fas fa-th-large text-sm"></i> Back to Grid
      </button>
    </div>
  );
};

export default Lightbox;