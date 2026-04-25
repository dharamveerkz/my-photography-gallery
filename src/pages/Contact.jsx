// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/dharamveerkz", icon: "fab fa-github" },
    { name: "X/Twitter", href: "https://x.com/dharamveerkz", icon: "fab fa-x-twitter" },
    { name: "Instagram", href: "https://www.instagram.com/dharamveerkz/", icon: "fab fa-instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/dharamveerkz/", icon: "fab fa-linkedin-in" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formsubmit.co/ajax/uniquecoloursofbihar@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New Contact from ${data.name} - Dharamveer Portfolio`,
          _captcha: 'false',
          _next: window.location.href // Stay on page after submit
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus({ type: 'success', message: '✨ Message sent successfully! I\'ll get back to you soon.' });
        e.target.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: '❌ Something went wrong. Please try again or email me directly.' });
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-4">
            Let's Create Together
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's bring your vision to life through photography, design, or development.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            {/* Status Messages */}
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-xl border ${
                formStatus.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}>
                <p className="text-sm font-medium">{formStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:from-gray-600 disabled:to-gray-700 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 disabled:shadow-none hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                <i className="fas fa-lock mr-1"></i>
                Your data is secure. I never share your information.
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Direct Contact</h2>
              
              <ul className="space-y-5">
                {/* Location */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-amber-400 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-gray-400">Patna, Bihar, India</p>
                    <a 
                      href="https://maps.google.com/?q=Patna,Bihar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      View on Map <i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-amber-400 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <a 
                      href="tel:+917903797952" 
                      className="text-gray-400 hover:text-amber-400 transition-colors block"
                    >
                      +91 7903797952
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-7PM IST</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-amber-400 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a 
                      href="mailto:uniquecoloursofbihar@gmail.com" 
                      className="text-gray-400 hover:text-amber-400 transition-colors break-all"
                    >
                      uniquecoloursofbihar@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Connect on Social</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <i className={`${social.icon} text-gray-400 group-hover:text-amber-400 transition-colors text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Visual Map Preview (Decorative) */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 aspect-video bg-gray-800 group">
              <img 
                src="https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:85.1089,25.6093&zoom=11&marker=lonlat:85.1089,25.6093;color:%23f59e0b;size:medium&apiKey=YOUR_API_KEY" 
                alt="Patna, Bihar location map"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium flex items-center gap-2">
                  <i className="fas fa-map-pin text-amber-400"></i>
                  Based in Patna, Serving Globally
                </p>
                <p className="text-gray-400 text-sm mt-1">Available for remote & on-site projects</p>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ / Quick Info (Optional) */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "fas fa-camera", title: "Photography", desc: "Portrait, event, product & travel photography sessions" },
              { icon: "fas fa-palette", title: "Design", desc: "Brand identity, social media graphics, UI/UX concepts" },
              { icon: "fas fa-code", title: "Development", desc: "Responsive websites, React apps, creative coding" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-amber-500/30 transition-all">
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-amber-400 text-xl`}></i>
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;