import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/imdharamvrr", icon: "fab fa-facebook-f" },
    { name: "X/Twitter", href: "https://x.com/imdharamvrr", icon: "fab fa-twitter" },
    { name: "Instagram", href: "https://www.instagram.com/imdharamvrr/", icon: "fab fa-instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/dharamveerkr/", icon: "fab fa-linkedin-in" },
    { name: "YouTube", href: "https://www.youtube.com/@Nomadvir", icon: "fab fa-youtube" },
  ];

  const footerLinks = {
    discover: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Portfolio", to: "#" },
    ],
    resources: [
      { label: "Resume", to: "#" },
      { label: "Basics", to: "#" },
      { label: "channel", href: "https://t.me/modfusionhub" },
    ],
    expertise: [
      { label: "Content Creation", href: "#" },
      { label: "Graphics Designing", href: "#" },
      { label: "Ai & Automation", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all">
                Dharamveer
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Capturing moments, crafting stories. Professional photography & creative design for brands that matter.
            </p>
            <div className="flex gap-2 pt-1">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-amber-500/10 flex items-center justify-center transition-all group">
                  <i className={`${social.icon} text-gray-400 group-hover:text-amber-400 transition-colors text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">{link.label}</Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-gray-500">© {currentYear} <Link to="/" className="text-amber-400 hover:text-amber-300">Dharamveer</Link>. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-gray-500 hover:text-amber-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-amber-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;