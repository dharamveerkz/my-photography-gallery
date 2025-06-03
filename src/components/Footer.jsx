// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <Link to="/" className="logo_name">
              Dharamveer
            </Link>
          </div>
          <ul className="media-icons">
            <li>
              <a
                href="https://www.facebook.com/dharamveerkz "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/dharamveerkz "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dharamveerkz/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dharamveerkz/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/ @Nomadvir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Home</li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <a
                href="https://www.linkedin.com/in/dharamveerkz/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dharamveerkz/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                Graphics
              </a>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Account</li>
            <li>
              <a
                href="https://dharamveerkz.github.io/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://t.me/+4xorc7fy3vo2NWI1 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Courses</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1SZRLlAUG-1vIdgDmvCS-deKg-7XJeIJ3/view?usp=sharing "
                target="_blank"
                rel="noopener noreferrer"
              >
                Graphics
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1TTwAMbTvLGtcIDxTtBZd2lZ77HFLqJYV/view?usp=sharing "
                target="_blank"
                rel="noopener noreferrer"
              >
                Photography
              </a>
            </li>
          </ul>

          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <input type="button" value="Subscribe" className="btn" />
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2025 <a href="#">Dharamveer.</a> All rights reserved.
          </span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
