import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs font-medium mb-6">
          Photography Portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Capturing Moments,<br />
          <span className="text-amber-600">Crafting Stories</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Hi, I'm Dharamveer — a photographer and creative developer based in Patna. 
          Welcome to my visual journal.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;