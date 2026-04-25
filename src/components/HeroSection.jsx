// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/dharamveerkz/", icon: "fab fa-instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/dharamveerkz/", icon: "fab fa-linkedin-in" },
    { name: "GitHub", href: "https://github.com/dharamveerkz", icon: "fab fa-github" },
  ];

  return (
    <header className="relative h-screen bg-gradient-to-br from-gray-900 via-photo-900 to-black overflow-hidden">
      
      {/* 🎨 Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Radial fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* 🧭 Navigation - WHITE BACKGROUND */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/10 py-3" 
          : "bg-white py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo - Dark text for white bg */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              aria-label="Dharamveer - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-sm">
                <span className="text-black font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                Dharamveer
              </span>
            </Link>

            {/* Desktop Navigation - Dark text */}
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
              
              {/* CTA Button - Visible on white */}
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-xl transition-all shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 text-sm"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button - Dark icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - White background */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-amber-50 text-amber-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* 🎬 Hero Content */}
      <main className="relative z-10 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left animate-slide-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-amber-400 text-sm font-medium">Available for projects</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <p className="text-gray-400 text-lg">Welcome to my world</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                    Dharamveer
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  Photographer • Designer • Creative Developer
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I capture moments that matter and craft digital experiences that connect. 
                Based in Patna, creating visuals that tell your story.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/gallery"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-2xl transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1"
                >
                  <span>View My Work</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 text-white font-medium rounded-2xl transition-all hover:-translate-y-1"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
                <span className="text-sm text-gray-500">Follow:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-amber-500/10 border border-white/20 hover:border-amber-500/50 flex items-center justify-center transition-all group"
                  >
                    <i className={`${social.icon} text-gray-300 group-hover:text-amber-400 transition-colors`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-amber-500/20 animate-pulse-slow"></div>
                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-amber-500/10"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Image frame */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden bg-gray-800 border-2 border-gray-700 shadow-2xl">
                  <img
                    src="https://images.pexels.com/users/avatars/2696114/dharam-veer-643.jpeg?auto=compress&fit=crop&h=400&w=400&dpr=2"
                    alt="Dharamveer Kumar - Photographer & Creative Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-amber-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Based in Patna
                    </span>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-lg"></div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </main>
    </header>
  );
}

export default HeroSection;