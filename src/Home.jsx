import React, { useState, useEffect } from 'react';
import CropCard from './components/CropCard';
import ToolCard from './components/ToolCard';
import ContactForm from './components/ContactForm';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCrops, setTools } from './redux/slice'; // Redux slice action

function Home() {
  const dispatch = useDispatch();
  const { crops, tools } = useSelector((state) => state.auth);

  const [activeSection, setActiveSection] = useState('home');
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch crops from backend
  useEffect(() => {
    async function fetchCrops() {
      try {
        const response = await fetch("http://localhost:3000/get-crops");
        const data = await response.json();
        dispatch(setCrops(data.result || []));
      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    }
    fetchCrops();
  }, [dispatch]);

  // Fetch tools from backend
  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch("http://localhost:3000/get-tools");
        const data = await response.json();
        dispatch(setTools(data.result || []));
      } catch (err) {
        console.error("Error fetching tools:", err);
      }
    }
    fetchTools();
  }, [dispatch]);

  // Navigation handlers
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // View more / Buy now
  const handleViewMore = (crop) => {
    setSelectedCrop(crop);
    setActiveSection('crop-details');
  };
  const handleBuyNow = (tool) => {
    setSelectedTool(tool);
    setActiveSection('tool-details');
  };
  const handleBuy = () => {
    alert(`Thank you for purchasing ${selectedTool.name}! This is a demo.`);
    setSelectedTool(null);
    setActiveSection('tools');
  };

  // Section Renderer
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-content">
                <h1>Welcome to Modern Farming Hub</h1>
                <p>Empowering farmers with sustainable practices and innovative tools.</p>
                <button className="cta-button" onClick={() => handleNavClick('crops')}>Explore Crops</button>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg"
                alt="Farming Landscape"
                className="hero-image"
              />
            </section>
            {/* Features */}
            <section className="features">
              <h2>Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="icon">🌱</div>
                  <h3>Sustainable Practices</h3>
                  <p>Eco-friendly techniques to protect the environment.</p>
                </div>
                <div className="feature-card">
                  <div className="icon">🚜</div>
                  <h3>Advanced Tools</h3>
                  <p>Latest farming equipment for efficiency.</p>
                </div>
                <div className="feature-card">
                  <div className="icon">📈</div>
                  <h3>Expert Tips</h3>
                  <p>Get professional insights to boost yield.</p>
                </div>
              </div>
            </section>
            {/* Testimonials */}
            <section className="testimonials">
              <h2>What Farmers Say</h2>
              <div className="testimonials-grid">
                <div className="testimonial">
                  <p>"This site transformed my farm with sustainable tips!"</p>
                  <cite>- Farmer Ramesh Kumar</cite>
                </div>
                <div className="testimonial">
                  <p>"Great tools and resources for modern agriculture."</p>
                  <cite>- Farmer Nitesh</cite>
                </div>
              </div>
            </section>
            {/* CTA */}
            <section className="cta-section">
              <h2>Ready to Grow?</h2>
              <p>Join thousands of farmers in building a sustainable future.</p>
              <button className="cta-button" onClick={() => handleNavClick('contact')}>Get Started</button>
            </section>
          </div>
        );

      case 'crops':
        return (
          <section className="section">
            <h2>Popular Crops</h2>
            <div className="grid">
              {crops.map(crop => (
                <CropCard key={crop.id} crop={crop} onViewMore={() => handleViewMore(crop)} />
              ))}
            </div>
          </section>
        );

      case 'crop-details':
        if (!selectedCrop) return null;
        return (
          <section className="section crop-details">
            <h2>{selectedCrop.name} Details</h2>
            <div className="details-container">
              <img src={selectedCrop.image} alt={selectedCrop.name} className="details-image" />
              <div className="details-info">
                <h3>{selectedCrop.name}</h3>
                <p>{selectedCrop.description}</p> {/* FULL description */}
                <button className="back-button" onClick={() => handleNavClick('crops')}>Back to Crops</button>
              </div>
            </div>
          </section>
        );

      case 'tools':
        return (
          <section className="section">
            <h2>Farming Tools</h2>
            <div className="grid">
              {tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} onBuyNow={() => handleBuyNow(tool)} />
              ))}
            </div>
          </section>
        );

      case 'tool-details':
        if (!selectedTool) return null;
        return (
          <section className="section tool-details">
            <h2>{selectedTool.name} Details</h2>
            <div className="details-container">
              <img src={selectedTool.image} alt={selectedTool.name} className="details-image" />
              <div className="details-info">
                <h3>{selectedTool.name}</h3>
                <p>{selectedTool.description}</p>
                <p className="price">Price: {selectedTool.price}</p>
                <button className="cta-button" onClick={handleBuy}>Buy Now</button>
                <button className="back-button" onClick={() => handleNavClick('tools')}>Back to Tools</button>
              </div>
            </div>
          </section>
        );

      case 'tips':
        return (
          <section className="section">
            <h2>Farming Tips</h2>
            <ul>
              <li>Rotate crops to maintain soil health.</li>
              <li>Use organic fertilizers for sustainable growth.</li>
              <li>Monitor weather patterns for better planning.</li>
              <li>Invest in efficient irrigation to save water.</li>
            </ul>
          </section>
        );

      case 'contact':
        return (
          <section className="section">
            <h2>Contact Us</h2>
            <ContactForm />
          </section>
        );

      default:
        return <p>Section not found</p>;
    }
  };

  return (
    <div className="App">
      <p>hello,kese ho nitesh</p>
      <header className="header">
        <h1>Farming Hub</h1>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavClick('home')}>Home</button>
          <button onClick={() => handleNavClick('crops')}>Crops</button>
          <button onClick={() => handleNavClick('tools')}>Tools</button>
          <button onClick={() => handleNavClick('tips')}>Tips</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>
      </header>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <main className="main">{renderSection()}</main>

      <footer className="footer">
        <p>&copy; 2023 Farming Hub. All rights reserved. Promoting sustainable agriculture.</p>
      </footer>
    </div>
  );
}

export default Home;