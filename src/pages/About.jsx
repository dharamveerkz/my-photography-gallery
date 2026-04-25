// src/pages/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    "Photography", "Graphic Design", "UI/UX Design", "Video Editing", 
    "Social Media Management", "MERN Stack", "Python", "Content Strategy"
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Photos Captured", value: "10K+" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-4">
            Get to Know Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Photographer • Designer • Creative Developer
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Profile Image Section */}
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl"></div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <img 
                src="/dveer.jpg" 
                alt="Dharamveer Kumar - Photographer & Designer" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-sm text-amber-400 font-medium">
                  📍 Patna, Bihar
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Hi, I'm <span className="text-amber-400">Dharamveer Kumar</span>
              </h2>
              <p className="text-gray-400 text-lg">
                B.Tech CSE Student • Creative Developer • Visual Storyteller
              </p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate creative professional blending <span className="text-amber-400 font-medium">technology</span> and <span className="text-amber-400 font-medium">artistry</span> to craft compelling visual experiences. Currently pursuing my Bachelor's in Computer Science at Bakhtiyarpur College of Engineering, I've built a unique skillset spanning photography, design, and development.
              </p>
              
              <p>
                As <span className="text-white font-medium">Head Coordinator</span> for both the Designing & Branding Club and Photography Club, I've led creative teams to bring ideas to life. My experience in the Training & Placement Cell sharpened my leadership and strategic thinking abilities.
              </p>

              <p>
                From AI/ML internships to managing social media brands, I thrive at the intersection of <span className="text-amber-400">innovation</span> and <span className="text-amber-400">creativity</span>. Whether I'm behind a camera, designing a brand identity, or coding a web experience, my goal remains the same: create work that matters.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800 hover:bg-amber-500/20 border border-gray-700 hover:border-amber-500/50 rounded-full text-sm text-gray-300 hover:text-amber-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                <i className="fas fa-file-pdf"></i>
                View Resume
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500/50 text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <i className="fas fa-envelope"></i>
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Story Timeline Section (Optional Enhancement) */}
        <div className="mt-24 pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            My Creative Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2021-2024",
                title: "Academic Foundation",
                desc: "B.Tech in Computer Science with focus on creative technologies and visual computing."
              },
              {
                year: "2022-Present",
                title: "Creative Leadership",
                desc: "Led photography & design clubs, managed social media brands, and delivered 100+ creative projects."
              },
              {
                year: "2023-Present",
                title: "Professional Growth",
                desc: "Completed internships in AI/ML & Salesforce while building a freelance photography portfolio."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium">
                  {item.year}
                </div>
                <h4 className="text-lg font-semibold text-white mt-4 mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;