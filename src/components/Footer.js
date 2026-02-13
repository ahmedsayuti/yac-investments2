import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/yac-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <img src={logo} alt="YAC Investments" style={{height: '40px'}} />
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/blog">Blog</Link>
                <a href="#divisions">Divisions</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
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
                <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                  >
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

export default Footer;