// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs font-medium mb-6">
          Photography Portfolio
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Capturing Moments,<br />
          <span className="text-amber-600">Crafting Stories</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Hi, I'm Dharamveer — a photographer and creative developer based in Patna. 
          Welcome to my visual journal.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="#gallery"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            View Gallery
            <i className="fas fa-arrow-down text-sm"></i>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-xl transition-all"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;