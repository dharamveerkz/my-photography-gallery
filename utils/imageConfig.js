
export const IMAGE_CONFIG = {
  basePath: "/uploads",
  format: "jpg",
  quality: 80,
  thumbWidth: 300,
  mobileWidth: 600,
  desktopWidth: 1200,
  batchSize: 12,
  totalImages: 200,
};

/**
 * Generates responsive image URLs & metadata for a given ID
 * @param {number} id - Image number (1-200)
 * @returns {Object} Image data object for ImageCard
 */
export const generateImage = (id) => {
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

/**
 * Returns an array of all valid image IDs
 * @returns {number[]} Array of IDs [1, 2, ..., 200]
 */
export const getAllImageIds = () =>
  Array.from({ length: IMAGE_CONFIG.totalImages }, (_, i) => i + 1);