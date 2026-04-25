// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ FormSubmit.co Endpoint - Replace with your activated endpoint
  const FORM_ENDPOINT = "https://formsubmit.co/uniquecoloursofbihar@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Inquiry: ${formData.subject || "General"}`,
          _captcha: "false", // Disable captcha (enable in FormSubmit dashboard)
          _next: window.location.origin + "/thank-you", // Optional redirect
        }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "✨ Message sent! I'll reply within 24 hours." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus({ type: "error", message: "⚠️ Something went wrong. Please try emailing directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", label: "Location", value: "Patna, Bihar, India", link: "https://maps.google.com/?q=Patna,Bihar" },
    { icon: "fas fa-phone", label: "Phone", value: "+91 7903797952", link: "tel:+917903797952" },
    { icon: "fas fa-envelope", label: "Email", value: "uniquecoloursofbihar@gmail.com", link: "mailto:uniquecoloursofbihar@gmail.com" },
    { icon: "fas fa-clock", label: "Response Time", value: "Within 24 hours", link: null },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", href: "https://github.com/dharamveerkz" },
    { name: "X/Twitter", icon: "fab fa-x-twitter", href: "https://x.com/dharamveerkz" },
    { name: "Instagram", icon: "fab fa-instagram", href: "https://www.instagram.com/dharamveerkz/" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/dharamveerkz/" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wide mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just say hi? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-lg opacity-40"></div>
            <form onSubmit={handleSubmit} className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 space-y-5">
              
              {/* Status */}
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  status.type === "success" ? "bg-green-500/10 border border-green-500/30 text-green-400" :
                  status.type === "error" ? "bg-red-500/10 border border-red-500/30 text-red-400" :
                  "bg-amber-500/10 border border-amber-500/30 text-amber-400"
                }`}>
                  {status.message}
                </div>
              )}

              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name <span className="text-amber-400">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-amber-400">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry, Collaboration, etc." className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-amber-400">*</span></label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or idea..." className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"></textarea>
              </div>

              {/* Submit */}
              <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all ${isSubmitting ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"}`}>
                {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>

              <p className="text-xs text-gray-500 text-center pt-1">🔒 Your data is secure. I never share personal information.</p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <i className="fas fa-info-circle text-amber-400"></i> Contact Details
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-amber-400`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-gray-200 hover:text-amber-400 transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-gray-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-share-alt text-amber-400"></i> Connect Socially
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-amber-500/50 flex items-center justify-center transition-all hover:-translate-y-0.5">
                    <i className={`${social.icon} text-gray-400 group-hover:text-amber-400 transition-colors text-lg`}></i>
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Follow my creative journey 📸</p>
            </div>

            {/* Tip */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl p-5 border border-amber-500/20">
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-lightbulb text-amber-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Quick Tip</h4>
                  <p className="text-sm text-gray-300">For photography inquiries, include event type, date, and location for a faster response!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;