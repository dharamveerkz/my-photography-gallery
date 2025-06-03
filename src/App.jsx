// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ImageGallery from './components/ImageGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        {/* HeroSection */}
        <HeroSection />

        {/* Main Content / Gallery */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ImageGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;