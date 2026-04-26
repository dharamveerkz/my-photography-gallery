import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/uniquecoloursofbihar@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "✨ Message sent successfully! I'll reply within 24 hours." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus({ type: "error", message: "⚠️ Something went wrong. Please try emailing directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h1>
            <p className="text-gray-600 max-w-xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}>
                  {status.message}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry, Collaboration, etc." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or idea..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 text-white shadow-sm hover:shadow-md"}`}>
                {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
              <p className="text-xs text-gray-400 text-center">🔒 Your data is secure. I never share personal information.</p>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-5">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-amber-600"></i>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase">Location</p>
                      <p className="text-gray-900 font-medium">Patna, Bihar, India</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-amber-600"></i>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase">Phone</p>
                      <a href="tel:+917903797952" className="text-gray-900 font-medium hover:text-amber-600 transition-colors">+91 7903797952</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-amber-600"></i>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase">Email</p>
                      <a href="mailto:uniquecoloursofbihar@gmail.com" className="text-gray-900 font-medium hover:text-amber-600 transition-colors">uniquecoloursofbihar@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <i className="fas fa-lightbulb text-amber-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
                    <p className="text-sm text-gray-600">For photography inquiries, include event type, date, and location for a faster response!</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Connect Socially</h3>
                <div className="flex gap-3">
                  {[
                    { icon: "fab fa-github", href: "https://github.com/dharamveerkz" },
                    { icon: "fab fa-x-twitter", href: "https://x.com/dharamveerkz" },
                    { icon: "fab fa-instagram", href: "https://www.instagram.com/dharamveerkz/" },
                    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/dharamveerkz/" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 flex items-center justify-center transition-all">
                      <i className={`${social.icon} text-gray-600 hover:text-amber-600 transition-colors`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;