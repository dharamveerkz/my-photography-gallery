// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImageGallery from "../components/ImageGallery";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ImageGallery />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;