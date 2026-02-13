import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/yac-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Divisions', path: '/#divisions' },
    { name: 'Products', path: '/#products' },
    { name: 'Contact', path: '/#contact' }
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
            <Link to="/">
              <img src={logo} alt="YAC Investments" style={{height: '50px'}} />
            </Link>
          </motion.div>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.path.startsWith('#') ? (
                  <a 
                    href={link.path} 
                    className={location.pathname === '/' && window.location.hash === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
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

export default Header;