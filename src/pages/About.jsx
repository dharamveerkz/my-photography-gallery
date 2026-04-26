import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">About Me</h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Profile & Bio */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <img src="/dveer.jpg" alt="Dharamveer Kumar" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Hi, I'm Dharamveer Kumar</h2>
              <p className="text-gray-600 leading-relaxed">
                A traveler at heart and a storyteller through frames. I find inspiration in places, people, and the unnoticed details of everyday life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For me, photography goes beyond capturing moments; it’s about observing deeply and turning emotions into visual stories. Every journey becomes a canvas, and every frame reflects a piece of art shaped by perspective and feeling.
              </p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-all shadow-sm">
                <i className="fas fa-file-pdf"></i> View Resume
              </a>
            </div>
          </div>

          {/* Journey Timeline */}  
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">  
  <h3 className="text-lg font-semibold text-gray-900 mb-5">My Journey</h3>  
  <div className="space-y-6">  

    <div className="relative pl-6 border-l-2 border-amber-200">  
      <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500"></span>  
      <h4 className="font-medium text-gray-900">The Beginning</h4>  
      <p className="text-sm text-amber-600 mb-1">School Days</p>  
      <p className="text-sm text-gray-600">
        My journey began with simple clicks driven by curiosity.  
        Those moments slowly shaped my interest in storytelling and perspective.
      </p>  
    </div>  

    <div className="relative pl-6 border-l-2 border-amber-200">  
      <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500"></span>  
      <h4 className="font-medium text-gray-900">Visual Storytelling</h4>  
      <p className="text-sm text-amber-600 mb-1">Early Exploration</p>  
      <p className="text-sm text-gray-600">
        I started creating short, documentary-style videos.  
        Turning everyday moments into meaningful visual narratives became my focus.
      </p>  
    </div>  

    <div className="relative pl-6 border-l-2 border-amber-200">  
      <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500"></span>  
      <h4 className="font-medium text-gray-900">College & Community</h4>  
      <p className="text-sm text-amber-600 mb-1">Events & Photography Circles</p>  
      <p className="text-sm text-gray-600">
        Worked in college events and collaborated with photography communities.  
        Shared travel frames on Instagram to document stories and connect visually.
      </p>  
    </div>  

    <div className="relative pl-6 border-l-2 border-amber-200">  
      <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500"></span>  
      <h4 className="font-medium text-gray-900">Reach & Recognition</h4>  
      <p className="text-sm text-amber-600 mb-1">Digital Contributions</p>  
      <p className="text-sm text-gray-600">
        Contributed to district pages to showcase our state.  
        Featured via Pexels and reached 23M+ views through Google contributions.
      </p>  
    </div>  

  </div>  
</div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {["Photography", "Graphic Design", "UI/UX", "Social Media", "Video Editing", "Brand Strategy", "Content Creation"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg hover:border-amber-300 hover:text-amber-700 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;