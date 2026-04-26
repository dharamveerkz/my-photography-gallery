// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-4 sm:pt-28 sm:pb-6 bg-gradient-to-b from-gray-300 via-yellow-500 to-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-white/80 border border-amber-300 rounded-full text-amber-800 text-xs font-medium mb-5 shadow-sm">
          Photography Portfolio
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
          Capturing Moments,<br />
          <span className="text-amber-900">Crafting Stories</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto mb-6 font-medium">
          Hi, I'm Dharamveer — a photographer and creative developer based in Patna. 
          Welcome to my visual journal.
        </p>

        {/* CTAs - Compact */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="#gallery"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md text-sm"
          >
            View Gallery
            <i className="fas fa-arrow-down text-xs"></i>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/90 hover:bg-white border border-amber-300 text-amber-900 font-medium rounded-xl transition-all text-sm"
          >
            Get in Touch
          </Link>
        </div>

      </div>

      {/* Subtle fade to white for smooth gallery transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;