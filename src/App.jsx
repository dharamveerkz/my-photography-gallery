import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Basics from "./pages/Basics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basics" element={<Basics />} />
        {/* Optional: 404 fallback */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
              <p className="text-gray-600 mb-6">Page not found</p>
              <a href="/" className="text-amber-600 hover:text-amber-700 font-medium">← Back to Home</a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;