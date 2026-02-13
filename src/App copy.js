// App.js - Updated with React Router
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import logo from './assets/yac-logo.png';

// Import the new pages (we'll create these)
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

// Move Header and Footer to separate components for reuse
const Header = ({ location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Divisions', path: '#divisions' },
    { name: 'Products', path: '#products' },
    { name: 'Impact', path: '#impact' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="navbar">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/">
              <img src={logo} alt="YAC Investments" style={{height: '50px'}} />
            </a>
          </motion.div>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              const isHashLink = link.path.startsWith('#');
              
              return (
                <motion.a
                  key={link.name}
                  href={isHashLink && location.pathname !== '/' ? `/${link.path}` : link.path}
                  className={isActive ? 'active' : ''}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </nav>
          
          <motion.button 
            className="hamburger"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <img src={logo} alt="YAC Investments" style={{height: '40px'}} />
              <div>
                <h3>YAC Investments</h3>
                <p>Powering Africa's economic future through strategic investments</p>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Company</h4>
                <a href="/about">About Us</a>
                <a href="/blog">Blog</a>
                <a href="/#divisions">Divisions</a>
                <a href="/#products">Products</a>
                <a href="/#contact">Contact</a>
              </div>
              
              <div className="link-group">
                <h4>Investors</h4>
                <a href="#">Portfolio</a>
                <a href="#">Reports</a>
                <a href="#">ESG</a>
                <a href="#">News</a>
                <a href="#">Careers</a>
              </div>
              
              <div className="link-group">
                <h4>Connect</h4>
                <div className="social-icons">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} YAC Investments. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Layout component that wraps every page
const Layout = ({ children, location }) => {
  return (
    <div className="App">
      <Header location={location} />
      {children}
      <Footer />
    </div>
  );
};

// Copy your existing components (Hero, About, Divisions, Products, Impact, Contact) here
// OR keep them as they are in the original App.js

// Create separate page components
function HomePage() {
  // Copy all your existing homepage content here
  return (
    <>
      <Hero />
      <AboutSection />
      <Divisions />
      <Products />
      <Impact />
      <Contact />
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout location={{ pathname: '/' }}>
            <HomePage />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout location={{ pathname: '/about' }}>
            <AboutPage />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout location={{ pathname: '/blog' }}>
            <BlogPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;