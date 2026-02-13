import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const blogArticles = [
    {
      id: 1,
      title: 'The Future of Renewable Energy Investments in Africa',
      excerpt: 'How solar, wind, and hydro power are transforming Africa\'s energy landscape and creating unprecedented investment opportunities.',
      fullContent: `
        <h3>The Renewable Energy Revolution</h3>
        <p>Africa stands at the forefront of a renewable energy revolution. With abundant sunshine, wind resources, and hydropower potential, the continent is poised to leapfrog traditional energy infrastructure and build a sustainable future.</p>
        
        <h4>Market Opportunity</h4>
        <p>Current projections estimate Africa's renewable energy market to reach $65 billion by 2030. Key growth drivers include:</p>
        <ul>
          <li>Rising energy demand from growing populations and urbanization</li>
          <li>Falling costs of solar and wind technology</li>
          <li>Government policies supporting renewable adoption</li>
          <li>International climate finance initiatives</li>
        </ul>
        
        <h4>Investment Strategies</h4>
        <p>Successful renewable energy investments in Africa require:</p>
        <ol>
          <li><strong>Local Partnerships:</strong> Collaborating with domestic companies and communities</li>
          <li><strong>Hybrid Solutions:</strong> Combining solar with storage or backup systems</li>
          <li><strong>Off-Grid Opportunities:</strong> Reaching underserved rural populations</li>
          <li><strong>PPA Structures:</strong> Power Purchase Agreements with government or corporate buyers</li>
        </ol>
        
        <h4>Case Study: Ghana Solar Expansion</h4>
        <p>Our $150 million solar project in Northern Ghana demonstrates the potential returns: 25% IRR, 350 jobs created, and 100MW of clean energy added to the grid.</p>
        
        <h4>Looking Ahead</h4>
        <p>The next decade will see green hydrogen, grid modernization, and cross-border energy trading emerge as key investment themes. Early movers in these areas stand to capture significant value.</p>
      `,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=500&fit=crop',
      category: 'energy',
      tags: ['Renewable Energy', 'Solar', 'Investment Strategy', 'Green Finance'],
      author: 'Sarah Johnson',
      authorRole: 'Head of Sustainability',
      date: 'March 15, 2024',
      readTime: '8 min read',
      views: '1,248'
    },
    {
      id: 2,
      title: 'Mining Investment Strategies in Emerging African Markets',
      excerpt: 'Navigating regulatory frameworks, community relations, and sustainable extraction practices for profitable mining investments.',
      fullContent: `
        <h3>The New Era of Responsible Mining</h3>
        <p>Africa's mining sector is undergoing a transformation, moving from pure extraction to value chain integration and sustainable practices.</p>
        
        <h4>Critical Minerals Opportunity</h4>
        <p>With the global transition to clean energy, demand for critical minerals is soaring:</p>
        <ul>
          <li><strong>Cobalt:</strong> DRC holds 70% of global reserves</li>
          <li><strong>Lithium:</strong> Zimbabwe and Namibia emerging as key producers</li>
          <li><strong>Rare Earth Elements:</strong> South Africa and Madagascar hold significant deposits</li>
          <li><strong>Gold:</strong> Traditional stronghold with new discoveries in West Africa</li>
        </ul>
        
        <h4>Investment Framework</h4>
        <p>Successful mining investments require:</p>
        <ol>
          <li><strong>ESG Integration:</strong> Environmental and social governance from day one</li>
          <li><strong>Local Content:</strong> Creating local employment and supplier opportunities</li>
          <li><strong>Technology Adoption:</strong> Automation and digital monitoring</li>
          <li><strong>Downstream Processing:</strong> Moving beyond raw material exports</li>
        </ol>
        
        <h4>Risk Management</h4>
        <p>Key risks and mitigation strategies:</p>
        <table style="width:100%; border-collapse: collapse;">
          <tr style="background: #f8f9fa;">
            <th style="padding: 10px; border: 1px solid #ddd;">Risk</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Mitigation Strategy</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Regulatory Changes</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Long-term partnerships with government</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Community Relations</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Community development funds & local employment</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Price Volatility</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Hedging strategies & diversified portfolio</td>
          </tr>
        </table>
        
        <h4>Future Outlook</h4>
        <p>By 2030, Africa's mining sector is expected to contribute $500 billion annually to continental GDP, with responsible mining practices becoming the industry standard.</p>
      `,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
      category: 'mining',
      tags: ['Mining', 'Critical Minerals', 'ESG', 'Risk Management'],
      author: 'David Mensah',
      authorRole: 'Chief Investment Officer',
      date: 'March 10, 2024',
      readTime: '10 min read',
      views: '892'
    },
    {
      id: 3,
      title: 'Infrastructure Development: Africa\'s $100 Billion Opportunity',
      excerpt: 'Examining the infrastructure gap and investment opportunities in transportation, energy, and digital infrastructure.',
      fullContent: `
        <h3>Bridging Africa's Infrastructure Gap</h3>
        <p>Africa faces a $100 billion annual infrastructure funding gap. This challenge represents one of the most significant investment opportunities of our generation.</p>
        
        <h4>Priority Sectors</h4>
        <p>Key areas for infrastructure investment:</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5>Transport & Logistics</h5>
            <p>Ports, railways, and highways connecting markets</p>
          </div>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5>Energy Infrastructure</h5>
            <p>Grid expansion and transmission networks</p>
          </div>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5>Digital Infrastructure</h5>
            <p>Fiber optics and data centers</p>
          </div>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <h5>Water & Sanitation</h5>
            <p>Critical for urban development</p>
          </div>
        </div>
        
        <h4>Investment Models</h4>
        <p>Successful infrastructure financing approaches:</p>
        <ol>
          <li><strong>Public-Private Partnerships (PPPs):</strong> Government collaboration for large projects</li>
          <li><strong>Infrastructure Funds:</strong> Pooled investment vehicles</li>
          <li><strong>Project Finance:</strong> Non-recourse financing based on project cash flows</li>
          <li><strong>Blended Finance:</strong> Combining public and private capital</li>
        </ol>
        
        <h4>Case Study: East African Railway</h4>
        <p>Our $2 billion investment in the East African Standard Gauge Railway demonstrates:</p>
        <ul>
          <li>30% reduction in transportation costs</li>
          <li>14-hour reduction in cargo transit time</li>
          <li>15,000 direct and indirect jobs created</li>
          <li>22% annual return on investment</li>
        </ul>
        
        <h4>Regulatory Considerations</h4>
        <p>Understanding local regulations, land acquisition processes, and environmental approvals is crucial. Successful investors work closely with local authorities and communities.</p>
      `,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
      category: 'infrastructure',
      tags: ['Infrastructure', 'PPPs', 'Transportation', 'Urban Development'],
      author: 'Amina Mohammed',
      authorRole: 'Chief Operations Officer',
      date: 'March 5, 2024',
      readTime: '12 min read',
      views: '1,045'
    },
    {
      id: 4,
      title: 'ESG Integration in African Investments: Beyond Compliance',
      excerpt: 'How Environmental, Social, and Governance factors drive superior returns and sustainable growth in African markets.',
      fullContent: `
        <h3>ESG as Value Creation</h3>
        <p>Environmental, Social, and Governance factors are no longer just compliance requirements - they are drivers of superior investment returns in African markets.</p>
        
        <h4>The Business Case for ESG</h4>
        <p>Our research shows:</p>
        <ul>
          <li>ESG-focused portfolios outperform by 3-5% annually</li>
          <li>Lower cost of capital from green finance instruments</li>
          <li>Reduced regulatory and reputational risks</li>
          <li>Enhanced stakeholder relationships and social license to operate</li>
        </ul>
        
        <h4>Implementing ESG in Practice</h4>
        <p>Our five-step ESG integration framework:</p>
        <ol>
          <li><strong>Materiality Assessment:</strong> Identify relevant ESG factors for each investment</li>
          <li><strong>Due Diligence:</strong> Comprehensive ESG evaluation during deal screening</li>
          <li><strong>Value Creation Plan:</strong> ESG initiatives tied to financial returns</li>
          <li><strong>Monitoring & Reporting:</strong> Transparent metrics and regular updates</li>
          <li><strong>Stakeholder Engagement:</strong> Continuous dialogue with communities and regulators</li>
        </ol>
        
        <h4>Case Study: Community Investment Program</h4>
        <p>Our 2% revenue commitment to community development has delivered:</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0;">
          <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent)">12</div>
            <div>Schools Built</div>
          </div>
          <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent)">45</div>
            <div>Healthcare Facilities</div>
          </div>
          <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent)">85%</div>
            <div>Local Employment</div>
          </div>
          <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent)">40%</div>
            <div>Reduced Carbon Footprint</div>
          </div>
        </div>
        
        <h4>Future Trends</h4>
        <p>The next wave of ESG integration includes:</p>
        <ul>
          <li>Nature-based solutions and biodiversity credits</li>
          <li>Just transition frameworks for affected communities</li>
          <li>Digital tools for ESG monitoring and reporting</li>
          <li>Green bond market development across African exchanges</li>
        </ul>
        
        <h4>Conclusion</h4>
        <p>ESG is not a cost center but a value driver. African investors who embrace this reality will capture the greatest opportunities in the continent's sustainable development journey.</p>
      `,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      category: 'sustainability',
      tags: ['ESG', 'Sustainable Investing', 'Impact', 'Green Finance'],
      author: 'Kwame Osei',
      authorRole: 'CEO & Founder',
      date: 'February 28, 2024',
      readTime: '15 min read',
      views: '2,156'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: 4 },
    { id: 'energy', name: 'Energy', count: 1 },
    { id: 'mining', name: 'Mining', count: 1 },
    { id: 'infrastructure', name: 'Infrastructure', count: 1 },
    { id: 'sustainability', name: 'Sustainability', count: 1 },
    { id: 'markets', name: 'Markets', count: 0 },
    { id: 'technology', name: 'Technology', count: 0 }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? blogArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : blogArticles.filter(article => 
        article.category === activeCategory && (
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-page">
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
              Investment <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Expert analysis, market intelligence, and strategic perspectives on Africa's investment landscape
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          {/* Search and Filter Bar */}
          <motion.div 
            className="blog-controls"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="clear-search">
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedArticle(null);
                  }}
                >
                  {category.name}
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {activeCategory === 'all' && !searchTerm && (
            <motion.div 
              className="featured-post"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="featured-image"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=500&fit=crop)`
                }}
              >
                <div className="featured-overlay">
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured Analysis
                  </div>
                  <h2>Africa Investment Outlook 2024: $100B+ Opportunities</h2>
                  <p>Comprehensive analysis of emerging sectors, regulatory trends, and strategic investment approaches for the coming year</p>
                  <div className="post-meta">
                    <span className="author">
                      <i className="fas fa-user"></i> Kwame Osei
                    </span>
                    <span className="date">
                      <i className="far fa-calendar"></i> April 1, 2024
                    </span>
                    <span className="read-time">
                      <i className="far fa-clock"></i> 12 min read
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Articles Grid */}
          <div className="blog-articles">
            {filteredArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                className={`blog-article ${expandedArticle === article.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="article-image"
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <div className="article-category">{article.category.toUpperCase()}</div>
                  <div className="article-views">
                    <i className="far fa-eye"></i> {article.views}
                  </div>
                </div>
                
                <div className="article-content">
                  <div className="article-header">
                    <div className="article-meta">
                      <span className="article-author">
                        <img 
                          src={article.author === 'Kwame Osei' ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop' :
                               article.author === 'Amina Mohammed' ? 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop' :
                               article.author === 'David Mensah' ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop' :
                               'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop'}
                          alt={article.author}
                          className="author-avatar"
                        />
                        <div className="author-info">
                          <div className="author-name">{article.author}</div>
                          <div className="author-role">{article.authorRole}</div>
                        </div>
                      </span>
                      <span className="article-date">
                        <i className="far fa-calendar"></i> {formatDate(article.date)}
                      </span>
                      <span className="article-read-time">
                        <i className="far fa-clock"></i> {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    
                    <div className="article-tags">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="article-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedArticle === article.id && (
                      <motion.div 
                        className="article-full-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          className="article-body"
                          dangerouslySetInnerHTML={{ __html: article.fullContent }}
                        />
                        
                        <div className="article-actions">
                          <button className="action-btn">
                            <i className="far fa-thumbs-up"></i> Like
                          </button>
                          <button className="action-btn">
                            <i className="far fa-comment"></i> Comment
                          </button>
                          <button className="action-btn">
                            <i className="fas fa-share"></i> Share
                          </button>
                          <button className="action-btn">
                            <i className="far fa-bookmark"></i> Save
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="article-footer">
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleArticle(article.id)}
                    >
                      {expandedArticle === article.id ? (
                        <>
                          <i className="fas fa-chevron-up"></i> Show Less
                        </>
                      ) : (
                        <>
                          <i className="fas fa-chevron-down"></i> Read Full Analysis
                        </>
                      )}
                    </button>
                    
                    <div className="article-share">
                      <span>Share:</span>
                      <a href="#" className="share-icon">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="share-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="share-icon">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#" className="share-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div 
            className="newsletter-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3>Stay Ahead of Market Trends</h3>
              <p>Subscribe to receive our latest investment research and market insights directly in your inbox</p>
              
              <div className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your professional email"
                    className="newsletter-input"
                  />
                  <button className="btn btn-primary">
                    Subscribe <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox" id="privacy" defaultChecked />
                  <label htmlFor="privacy">
                    I agree to receive investment insights and updates. You can unsubscribe at any time.
                  </label>
                </div>
              </div>
              
              <div className="newsletter-stats">
                <div className="stat-item">
                  <div className="stat-number">5,000+</div>
                  <div className="stat-label">Subscribers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Weekly</div>
                  <div className="stat-label">Market Updates</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Exclusive</div>
                  <div className="stat-label">Research Reports</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Popular Tags */}
          <div className="popular-tags">
            <h4>Popular Topics</h4>
            <div className="tags-container">
              {['Renewable Energy', 'ESG Investing', 'Infrastructure', 'Mining', 'African Markets', 
                'Private Equity', 'Green Finance', 'Technology', 'Sustainability', 'Emerging Markets'].map((tag, idx) => (
                <button key={idx} className="tag-btn">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;