// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      {/* Section Header */}
      <h1 className="section-header">Get in Touch</h1>

      {/* Contact Wrapper */}
      <div className="contact-wrapper">
        {/* Contact Form */}
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>

          <button className="btn" id="submit" type="submit">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span className="contact-text">Patna, Bihar</span>
            </li>

            <li className="list-item">
              <i className="fas fa-phone contact-icon"></i>
              <span className="contact-text">
                <a href="tel:+917903797952">+91 7903797952</a>
              </span>
            </li>

            <li className="list-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span className="contact-text">
                <a href="mailto:dharamveerkz@gmail.com">dharamveerkz@gmail.com</a>
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/dharamveerkz "
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/dharamveerkz "
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dharamveerkz/ "
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dharamveerkz/ "
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;