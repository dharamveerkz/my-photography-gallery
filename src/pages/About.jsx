// src/pages/About.jsx
import React from "react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Done", value: "50+" },
    { label: "Photos Captured", value: "10K+" },
    { label: "Happy Clients", value: "30+" },
  ];

  const skills = [
    "Photography", "Portrait", "Event Coverage", "Graphic Design", 
    "Social Media", "Video Editing", "Brand Identity", "Content Strategy"
  ];

  const experiences = [
    {
      role: "Head Coordinator",
      org: "Designing & Photography Clubs",
      period: "2022 – Present",
      desc: "Led creative teams, managed event branding, and mentored junior members in visual storytelling.",
    },
    {
      role: "Social Media Manager",
      org: "Freelance & Campus Brands",
      period: "2021 – Present",
      desc: "Created 100+ high-engagement posts, grew follower base by 40%, and developed content strategies.",
    },
    {
      role: "Creative Intern",
      org: "AI/ML & Salesforce Projects",
      period: "2023",
      desc: "Applied technical skills to creative problem-solving, bridging code and design.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wide mb-4">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Creative <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Developer</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Blending technology and artistry to craft compelling visual experiences
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Profile */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <img 
                  src="/dveer.jpg" 
                  alt="Dharamveer Kumar" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm <span className="text-white font-semibold">Dharamveer Kumar</span> — a B.Tech CSE student at Bakhtiyarpur College of Engineering, Patna, and a passionate digital creative.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in <span className="text-amber-400 font-medium">photography, graphic design, social media management, and content creation</span> — crafting visuals that connect brands with their audiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe <span className="text-amber-400 font-semibold">design that connects</span> can turn ideas into powerful, memorable identities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50 text-center hover:border-amber-500/30 transition-colors">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience */}
            <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-briefcase text-amber-400"></i>
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-gray-700">
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-gray-900"></span>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h4 className="font-semibold text-white">{exp.role}</h4>
                      <span className="text-sm text-gray-400">• {exp.org}</span>
                    </div>
                    <span className="block text-xs font-medium text-amber-400 mb-2">{exp.period}</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Skills */}
              <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-palette text-amber-400"></i>
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-graduation-cap text-amber-400"></i>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">B.Tech in Computer Science</p>
                    <p className="text-sm text-gray-400">Bakhtiyarpur College of Engineering, Patna</p>
                    <p className="text-xs text-amber-400 mt-1">2022 – Present</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Intermediate (82%)</p>
                    <p className="text-sm text-gray-400">Holy Kids International School, Chhapra</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Matriculation (86.3%)</p>
                    <p className="text-sm text-gray-400">Shiksha Niketan School, Hajipur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40">
                <i className="fas fa-file-pdf"></i> View Resume
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500/50 text-white font-medium rounded-xl transition-all">
                <i className="fas fa-envelope"></i> Let's Connect
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;