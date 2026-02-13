import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Animation component for section transitions
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

const AboutPage = () => {
  const [activePhase, setActivePhase] = useState(0);

  const companyStats = [
    { number: '15+', label: 'African Countries', description: 'Operational presence across the continent' },
    { number: '$2B+', label: 'Portfolio Value', description: 'Assets under management' },
    { number: '200+', label: 'Projects Completed', description: 'Successful implementations' },
    { number: '98%', label: 'Client Satisfaction', description: 'Partnership retention rate' }
  ];

  const strategicPhases = [
    {
      year: '2020',
      title: 'Foundation & Vision',
      description: 'Establishing YAC Investments with a focus on energy infrastructure development',
      achievements: [
        'Company registration and strategic planning',
        'Initial $50M capitalization',
        'First petroleum trading licenses secured',
        'Established headquarters in Accra, Ghana'
      ],
      color: 'var(--accent)'
    },
    {
      year: '2021',
      title: 'Market Expansion',
      description: 'Strategic entry into key African markets and sector diversification',
      achievements: [
        'Expanded operations to 8 additional countries',
        'Launched mining division in West Africa',
        'Secured major government contracts',
        'Established regional offices across Africa'
      ],
      color: 'var(--secondary)'
    },
    {
      year: '2022',
      title: 'Infrastructure Growth',
      description: 'Major investments in sustainable energy and transportation infrastructure',
      achievements: [
        'Invested $500M in renewable energy projects',
        'Developed major port infrastructure in West Africa',
        'Launched green energy initiatives',
        'Partnership with African Development Bank'
      ],
      color: 'var(--primary)'
    },
    {
      year: '2023',
      title: 'Technology Integration',
      description: 'Digital transformation and innovation in energy sector operations',
      achievements: [
        'Implemented blockchain for supply chain transparency',
        'Launched AI-driven energy trading platform',
        'Digital transformation of mining operations',
        'Smart infrastructure implementation'
      ],
      color: 'var(--accent-light)'
    },
    {
      year: '2024',
      title: 'Pan-African Leadership',
      description: 'Consolidating position as leading strategic investment firm in Africa',
      achievements: [
        'Operations expanded to 15+ countries',
        'Launched $500M Green Energy Fund',
        'Strategic partnerships with global energy firms',
        'ESG leadership in African investments'
      ],
      color: 'var(--gray)'
    }
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical standards in all our dealings.',
      principles: ['Ethical Governance', 'Transparent Reporting', 'Accountability']
    },
    {
      title: 'Excellence',
      description: 'Pursuing world-class standards in project execution, quality, and service delivery.',
      principles: ['Quality Assurance', 'Best Practices', 'Continuous Improvement']
    },
    {
      title: 'Sustainability',
      description: 'Creating lasting value that balances economic returns with environmental stewardship.',
      principles: ['ESG Integration', 'Environmental Protection', 'Community Development']
    },
    {
      title: 'Innovation',
      description: 'Embracing technology and creative solutions to drive efficiency and create value.',
      principles: ['Technology Adoption', 'Process Innovation', 'Digital Transformation']
    },
    {
      title: 'Partnership',
      description: 'Collaborative approach to growth, working with stakeholders for mutual success.',
      principles: ['Stakeholder Engagement', 'Local Partnerships', 'Global Networks']
    },
    {
      title: 'Impact',
      description: 'Measuring success by positive contribution to communities and economic development.',
      principles: ['Social Impact', 'Job Creation', 'Sustainable Growth']
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Africa's Energy <span className="gradient-text">Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-subtitle"
            >
              YAC Investments is a strategic investment firm dedicated to powering sustainable 
              economic growth across Africa through energy, infrastructure, and resource development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <AnimatedSection>
        <div className="container">
          <div className="stats-grid">
            {companyStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection>
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our <span className="gradient-text">Story</span></h2>
              <p>
                Founded in 2020 by Yussif Alhassan Chibsah, YAC Investments emerged from a vision 
                to transform Africa's energy landscape. Recognizing the critical gap between 
                Africa's vast natural resources and the infrastructure needed to harness them, 
                we set out to build a platform for sustainable development.
              </p>
              <p>
                Starting with strategic petroleum trading, we quickly expanded into mining, 
                construction, commodities, and renewable energy. Today, we stand as a 
                pan-African leader in strategic investments, with operations spanning 
                15+ countries and a portfolio exceeding $2 billion in assets under management.
              </p>
              
              <div className="story-highlights">
                <h3>Strategic Focus Areas</h3>
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h4>Energy Infrastructure</h4>
                      <p>Developing sustainable energy solutions across Africa</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fas fa-mountain"></i>
                    </div>
                    <div>
                      <h4>Resource Development</h4>
                      <p>Responsible extraction and processing of natural resources</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fas fa-road"></i>
                    </div>
                    <div>
                      <h4>Infrastructure</h4>
                      <p>Building critical transportation and logistics networks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <div>
                      <h4>Sustainability</h4>
                      <p>ESG-focused investments for long-term impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="image-container"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop)`
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

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Purpose</span></h2>
            <p className="section-subtitle">
              Driving sustainable growth through strategic investments
            </p>
          </div>
          
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Mission</h3>
              <p>
                To identify, invest in, and develop strategic energy and infrastructure assets 
                that drive economic growth, create sustainable value for stakeholders, and 
                accelerate Africa's development while maintaining the highest standards of 
                environmental and social responsibility.
              </p>
            </motion.div>
            
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="vision-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Vision</h3>
              <p>
                To be Africa's premier strategic investment firm, recognized for transforming 
                the continent's energy landscape, building sustainable infrastructure, and 
                creating prosperity through innovative investments that balance financial returns 
                with positive social and environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Growth Journey - Animated */}
      <AnimatedSection>
        <div className="container">
          <div className="section-header">
            <h2>Strategic <span className="gradient-text">Growth Journey</span></h2>
            <p className="section-subtitle">
              Our evolution from startup to pan-African investment leader
            </p>
          </div>
          
          <div className="journey-container">
            <div className="journey-timeline">
              <div className="timeline-line">
                <div 
                  className="timeline-progress" 
                  style={{ height: `${(activePhase + 1) * 20}%` }}
                ></div>
              </div>
              
              {strategicPhases.map((phase, index) => (
                <motion.div 
                  key={index}
                  className={`journey-phase ${activePhase === index ? 'active' : ''}`}
                  onClick={() => setActivePhase(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="phase-marker"
                    style={{ backgroundColor: phase.color }}
                  >
                    <div className="phase-year">{phase.year}</div>
                  </div>
                  
                  <div className="phase-content">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                    
                    {activePhase === index && (
                      <motion.div 
                        className="phase-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul>
                          {phase.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Founder Section */}
      <section className="section founder-section">
        <div className="container">
          <div className="section-header">
            <h2>Founder & <span className="gradient-text">Leadership</span></h2>
            <p className="section-subtitle">
              Visionary leadership driving Africa's economic transformation
            </p>
          </div>
          
          <div className="founder-container">
            <motion.div 
              className="founder-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div 
                className="image-wrapper"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop)`
                }}
              >
                <div className="founder-overlay">
                  <h3>Yussif Alhassan Chibsah</h3>
                  <p>Founder & Chief Executive Officer</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="founder-bio"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>About Yussif Alhassan Chibsah</h3>
              
              <p>
                With over 20 years of experience in energy, finance, and infrastructure 
                development across Africa, Yussif Alhassan Chibsah is a visionary leader 
                dedicated to transforming Africa's economic landscape.
              </p>
              
              <div className="experience-grid">
                <div className="experience-item">
                  <h4>Professional Background</h4>
                  <ul>
                    <li>Former Director at Goldman Sachs Africa</li>
                    <li>Senior Advisor to African Development Bank</li>
                    <li>Board Member, African Energy Chamber</li>
                    <li>Advisor to multiple African governments</li>
                  </ul>
                </div>
                
                <div className="experience-item">
                  <h4>Education</h4>
                  <ul>
                    <li>MBA, Harvard Business School</li>
                    <li>MSc. Petroleum Engineering, Imperial College London</li>
                    <li>Chartered Financial Analyst (CFA)</li>
                  </ul>
                </div>
              </div>
              
              <div className="leadership-quote">
                <p>
                  "Our mission is to build Africa's energy future through strategic investments 
                  that create sustainable value for generations to come."
                </p>
                <div className="quote-author">— Yussif Alhassan Chibsah</div>
              </div>
              
              <div className="founder-contact">
                <a href="mailto:y.chibsah@yacinvestments.com" className="contact-link">
                  <i className="fas fa-envelope"></i> y.chibsah@yacinvestments.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <i className="fab fa-linkedin"></i> LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <AnimatedSection>
        <div className="container">
          <div className="section-header">
            <h2>Core <span className="gradient-text">Values</span></h2>
            <p className="section-subtitle">
              The principles that guide every decision and action at YAC Investments
            </p>
          </div>
          
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="value-number">0{index + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                
                <div className="value-principles">
                  {value.principles.map((principle, idx) => (
                    <span key={idx} className="principle-tag">{principle}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Partner With Africa's Future</h2>
            <p>
              Join us in building sustainable energy infrastructure and driving economic 
              growth across the African continent
            </p>
            
            <div className="cta-buttons">
              <Link to="/#contact" className="btn btn-primary">
                <i className="fas fa-handshake"></i> Partnership Inquiry
              </Link>
              <Link to="/#divisions" className="btn btn-outline">
                <i className="fas fa-chart-line"></i> Investment Portfolio
              </Link>
              <a href="#" className="btn btn-outline">
                <i className="fas fa-download"></i> Company Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;