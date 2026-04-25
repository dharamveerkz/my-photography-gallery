// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="relative">
      
      {/* 🧭 Navigation - White Background */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-white py-4"
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              aria-label="Dharamveer - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-black font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                Dharamveer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    location.pathname === link.path
                      ? "text-amber-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {/* Add mobile menu toggle */}}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* 🎬 Hero Content - Image First, Then Text */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Image - Top Center */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-xl"></div>
              
              {/* Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/users/avatars/2696114/dharam-veer-643.jpeg?auto=compress&fit=crop&h=400&w=400&dpr=2"
                  alt="Dharamveer Kumar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Below Image */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Dharamveer
              </span>
            </h1>

            {/* Roles */}
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              Photographer • Designer • Creative Developer
            </p>

            {/* Description */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed px-4">
              I capture moments that matter and craft digital experiences that connect. 
              Based in Patna, creating visuals that tell your story.
            </p>

          </div>

        </div>
      </main>

      {/* Next section starts here with proper spacing */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            ↓ Scroll down to learn more
          </p>
        </div>
      </div>

    </header>
  );
}

export default HeroSection;