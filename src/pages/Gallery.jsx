// src/pages/Gallery.jsx
import React from 'react';
import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my collection of photographs capturing moments, emotions, and stories
        </p>
      </div>
      <ImageGallery />
    </div>
  );
};

export default Gallery;