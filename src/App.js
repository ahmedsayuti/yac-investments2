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
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  
  const slides = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1682144383927-045b23413c15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Strategic Energy Investments Across Africa',
      subtitle: 'Driving sustainable growth through diversified investments'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1692299320441-f670e6c82ed8?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Premier Petroleum & Commodities Solutions',
      subtitle: 'Connecting African markets with global energy resources'
    },
    {
      image: 'https://images.unsplash.com/photo-1701844279504-e3a974aaafb5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Infrastructure Development & Mining',
      subtitle: 'Building Africa\'s economic foundation'
    },
    {
      image: 'https://alterno.net/wp-content/uploads/2024/12/sustainable-energy-solutions-2.jpg',
      title: 'Sustainable Energy Solutions',
      subtitle: 'Powering industries with reliable energy alternatives'
    }
  ];

  const stats = [
    { value: '15+', label: 'African Countries' },
    { value: '200+', label: 'Projects Completed' },
    { value: '7', label: 'Core Product Lines' },
    { value: '5', label: 'Business Divisions' }
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-slideshow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            style={{ backgroundImage: `linear-gradient(rgba(10, 26, 58, 0.85), rgba(10, 26, 58, 0.9)), url(${slides[currentSlide].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="container">
              <div className="hero-content">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="hero-buttons"
                  >
                    <motion.button 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Investments
                    </motion.button>
                    <motion.button 
                      className="btn btn-outline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Portfolio
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator-progress">
                <motion.div
                  className="indicator-fill"
                  initial={{ width: currentSlide === index ? '0%' : '100%' }}
                  animate={{ width: currentSlide === index ? '100%' : '0%' }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="hero-stats-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container">
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.6 + index * 0.1
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="section"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
};

const About = () => {
  return (
    <AnimatedSection id="about">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Building Africa's
            <span className="gradient-text"> Infrastructure Legacy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            With a track record of excellence and sustainable growth, YAC Investments 
            is at the forefront of Africa's economic transformation.
          </motion.p>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Our Vision & Mission</h3>
            <p>
              We envision a prosperous Africa powered by sustainable energy and 
              robust infrastructure. Our mission is to identify, invest in, and 
              develop strategic assets that drive economic growth while creating 
              lasting value for our stakeholders and communities.
            </p>
            <p>
              Through innovative investment strategies and deep market expertise, 
              we bridge critical infrastructure gaps and enable sustainable 
              development across the continent.
            </p>
            
            <div className="values-grid">
              {['Integrity', 'Excellence', 'Sustainability', 'Innovation'].map((value, index) => (
                <motion.div 
                  key={value}
                  className="value-card"
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value-number">0{index + 1}</div>
                  <h4>{value}</h4>
                  <p>Core principle guiding all our investments and operations</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div 
              className="image-container"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
              }}
            >
              <div className="image-overlay">
                <h3>Since 2020</h3>
                <p>Driving Africa's energy transformation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Divisions = () => {
  const divisions = [
    {
      title: 'YAC Petroleum',
      description: 'Premier energy trading and petroleum solutions across Africa',
      image: 'https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stats: ['15 Countries', '50M+ Liters', '99.8% Purity']
    },
    {
      title: 'YAC Mining',
      description: 'Sustainable extraction of Africa\'s mineral resources',
      image: 'https://images.unsplash.com/photo-1517089152318-42ec560349c0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stats: ['Gold & Diamonds', 'ESG Certified', 'Community Focus']
    },
    {
      title: 'YAC Commodities',
      description: 'Global trade in agricultural and raw materials',
      image: 'https://images.unsplash.com/photo-1465844880937-7c02addc633b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stats: ['100+ Products', 'Global Network', 'Quality Assured']
    },
    {
      title: 'YAC Construction',
      description: 'Infrastructure development for modern Africa',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      stats: ['50+ Projects', 'Award Winning', 'Timely Delivery']
    },
    {
      title: 'YAC Trading',
      description: 'Strategic import-export and supply chain solutions',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      stats: ['Market Leaders', 'Efficient Logistics', 'Risk Managed']
    },
    {
      title: 'YAC Energy Solutions',
      description: 'Renewable energy and sustainable power projects',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      stats: ['Solar & Wind', 'Green Initiatives', 'Future Ready']
    }
  ];

  return (
    <AnimatedSection id="divisions">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Strategic
            <span className="gradient-text"> Business Divisions</span>
          </motion.h2>
        </div>
        
        <div className="divisions-grid">
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              className="division-card"
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="division-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{ backgroundImage: `url(${division.image})` }}
              >
                <div className="division-overlay"></div>
                <div className="division-index">0{index + 1}</div>
              </motion.div>
              
              <div className="division-content">
                <h3>{division.title}</h3>
                <p>{division.description}</p>
                
                <div className="division-stats">
                  {division.stats.map((stat, statIndex) => (
                    <motion.div 
                      key={statIndex}
                      className="stat-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + statIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat}
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  className="btn btn-small"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Division →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Products = () => {
  const products = [
    {
      name: 'Gasoline (PMS)',
      description: 'Premium motor spirit for automotive engines',
      specs: ['Euro 5 Standard', 'High Octane', 'Clean Burning'],
      image: 'https://energy.goodpappa.com/wp-content/uploads/2025/03/fuel-barrels.jpg'
    },
    {
      name: 'Gas Oil (AGO)',
      description: 'Automotive gas oil for diesel engines',
      specs: ['Low Sulfur', 'High Efficiency', 'EU Standard'],
      image: 'https://international-oil.com/wp-content/uploads/elementor/thumbs/27-p9onl66fh36i6dkpluq7eregua4mr2238ge6zdud80.png'
    },
    {
      name: 'Crude Oil',
      description: 'High-quality raw petroleum for refining',
      specs: ['Light Sweet', 'Multiple Grades', 'Global Supply'],
      image: 'https://www.crystalpetro.com/wp-content/uploads/2023/03/crude-oil.jpg'
    },
    {
      name: 'LNG / LPG',
      description: 'Clean energy solutions for industrial use',
      specs: ['Environment Friendly', 'Cost Efficient', 'Versatile'],
      image: 'https://www.graphic.com.gh/images/2023/april/16/LPG%20gas2.jpg'
    },
    {
      name: 'Jet A1 Fuel',
      description: 'Aviation fuel for commercial airlines',
      specs: ['JET A1 Standard', 'High Purity', 'Global Certification'],
      image: 'https://proenergy.global/wp-content/uploads/2025/06/jeta1wiz.webp'
    },
    {
      name: 'Bitumen',
      description: 'Asphalt binder for road construction',
      specs: ['Multiple Grades', 'Durable', 'Weather Resistant'],
      image: 'https://rahabitumen.com/wp-content/uploads/2017/01/bitumen-3-1.jpg'
    }
  ];

  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <AnimatedSection id="products">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Premium Product
            <span className="gradient-text"> Portfolio</span>
          </motion.h2>
          <p className="section-subtitle">
            High-quality petroleum and energy products meeting international standards
          </p>
        </div>
        
        <div className="products-container">
          <div className="products-list">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className={`product-tab ${activeProduct === index ? 'active' : ''}`}
                onClick={() => setActiveProduct(index)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="product-tab-content">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
                <motion.div 
                  className="product-tab-indicator"
                  animate={{ 
                    width: activeProduct === index ? '4px' : '0px',
                    height: activeProduct === index ? '100%' : '0%'
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="products-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                className="product-detail"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="product-image"
                  style={{ backgroundImage: `url(${products[activeProduct].image})` }}
                >
                  <div className="product-overlay">
                    <h3>{products[activeProduct].name}</h3>
                  </div>
                </div>
                
                <div className="product-specs">
                  {products[activeProduct].specs.map((spec, index) => (
                    <motion.div
                      key={index}
                      className="spec-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="spec-icon">✓</div>
                      <span>{spec}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Specifications
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Impact = () => {
  const impactStats = [
    { number: '5000+', label: 'Jobs Created' },
    { number: '50+', label: 'Communities Supported' },
    { number: '100%', label: 'ESG Compliance' },
    { number: '15M+', label: 'Tons CO2 Reduced' }
  ];

  return (
    <AnimatedSection id="impact">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sustainable
            <span className="gradient-text"> Impact</span>
          </motion.h2>
          <p className="section-subtitle">
            Creating lasting value for communities and the environment
          </p>
        </div>
        
        <div className="impact-stats">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="impact-stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="impact-content">
          <motion.div 
            className="impact-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Our Commitment to Sustainability</h3>
            <p>
              YAC Investments is committed to creating sustainable value that extends 
              beyond financial returns. Our ESG initiatives focus on environmental 
              stewardship, social responsibility, and strong governance practices.
            </p>
            <p>
              We invest in projects that create jobs, support local communities, 
              and promote sustainable development across Africa while minimizing 
              environmental impact.
            </p>
            <motion.button 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Sustainability Report
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="impact-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="image-container"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
              }}
            >
              <div className="image-overlay">
                <h4>Sustainable Energy Solutions</h4>
                <p>Reducing carbon footprint across Africa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatedSection id="contact">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In
            <span className="gradient-text"> Touch</span>
          </motion.h2>
        </div>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Connect With Us</h3>
            <p>
              Ready to explore investment opportunities or partnership?
              Our team is here to assist you.
            </p>
            
            <div className="contact-items">
              {[
                { icon: '📍', title: 'Headquarters', detail: 'YAC Tower, Tse Addo, Accra, Ghana' },
                { icon: '📞', title: 'Phone', detail: '+233 240 164 081' },
                { icon: '✉️', title: 'Email', detail: 'info@yacinvestments.com' },
                { icon: '🕒', title: 'Business Hours', detail: 'Mon-Fri: 8AM-6PM GMT' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="map-placeholder">
              <div className="map-overlay">
                <h4>Accra Headquarters</h4>
                <p>Strategic location in West Africa's business hub</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Investment Inquiry"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="5"
                  />
                </div>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
// Create separate page components
function HomePage() {
  // Copy all your existing homepage content here
  return (
    <>
      <Hero />
      <About />
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