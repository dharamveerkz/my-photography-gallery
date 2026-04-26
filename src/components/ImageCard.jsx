import React, { memo } from "react";

const ImageCard = memo(({ image, isLiked, onToggleLike, onDownload, onClick }) => {
  const handleLike = (e) => {
    e.stopPropagation();
    onToggleLike?.(image.id);
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    onDownload?.(image);
  };

  return (
    <article className="group relative break-inside-avoid mb-4">
      <div 
        className="relative w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 hover:border-amber-200 transition-colors cursor-pointer"
        onClick={() => onClick?.(image)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick?.(image)}
      >
        <img
          src={image.thumb}
          srcSet={`${image.thumb} 300w, ${image.mobile} 600w, ${image.desktop} 1200w`}
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px"
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
          width={1200}
          height={1600}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

        <button
          onClick={handleLike}
          aria-label={isLiked ? "Unlike" : "Like"}
          className={`absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isLiked ? "bg-amber-500 text-white" : "bg-white/90 text-gray-600 hover:text-amber-600"
          } opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-400`}
        >
          <i className={`fas fa-heart text-sm ${isLiked ? "" : "opacity-70"}`}></i>
        </button>

        <a
          href={image.full}
          download={image.filename}
          onClick={handleDownload}
          aria-label="Download"
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-amber-600 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <i className="fas fa-download text-sm"></i>
        </a>

        <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          #{image.id}
        </span>
      </div>
    </article>
  );
});
ImageCard.displayName = "ImageCard";

export default ImageCard;