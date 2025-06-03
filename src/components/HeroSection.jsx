// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link className="logoname" to="/">
            DHARAMVEER
          </Link>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main>
        <section className="hero-content">
          <h3>Welcome To My World</h3>

          <div className="img">
            <img
              src="https://images.pexels.com/users/avatars/2696114/dharam-veer-643.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1 "
              alt="dharam veer"
            />
          </div>

          <h1>dharamveer</h1>
          <p>"Developer and Creator!"</p>
        </section>
      </main>
    </header>
  );
}

export default HeroSection;
