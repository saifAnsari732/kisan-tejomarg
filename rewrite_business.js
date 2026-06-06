const fs = require('fs');

const code = `"use client";

import { motion } from 'framer-motion';
import { 
  Megaphone, Rocket, Target, LineChart, Cpu, 
  CheckCircle2, Globe, Users, ShieldCheck, Lightbulb
} from 'lucide-react';
import Footer from '../../components/Footer';

export default function BusinessesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const coverages = [
    {
      title: "Digital Media & Communication",
      icon: <Megaphone size={32} />,
      themeColor: "#3b82f6",
      items: [
        "Digital media trends and innovations",
        "Social media strategies",
        "Content creation and creator economy",
        "Audience engagement and community building"
      ]
    },
    {
      title: "Business & Entrepreneurship",
      icon: <Rocket size={32} />,
      themeColor: "#f97316",
      items: [
        "Startup ecosystem and innovation",
        "Business planning and execution",
        "Entrepreneurial success stories",
        "Small and medium enterprises (SMEs/MSMEs)"
      ]
    },
    {
      title: "Consulting & Professional Services",
      icon: <Users size={32} />,
      themeColor: "#8b5cf6",
      items: [
        "Business consulting solutions",
        "Strategic planning",
        "Organizational development",
        "Operational efficiency"
      ]
    },
    {
      title: "Marketing & Branding",
      icon: <Target size={32} />,
      themeColor: "#f43f5e",
      items: [
        "Brand strategy and positioning",
        "Digital & Performance marketing",
        "Search engine optimization (SEO)",
        "Customer acquisition and retention"
      ]
    }
  ];

  const industries = [
    "Retail & E-Commerce", "Real Estate", "Healthcare & HealthTech", 
    "Education & EdTech", "Agriculture & AgriTech", "Manufacturing", 
    "Travel & Hospitality", "Infrastructure & Construction", 
    "Energy & Sustainability", "FMCG & Consumer Brands", 
    "Logistics & Supply Chain", "Automobile Industry", "FinTech", 
    "Media & Entertainment", "Sports Business", "Government & Public Sector"
  ];

  const testimonials = [
    { role: "Startup Founder", quote: "Tejomarg Business Info provides practical insights that go beyond theory. The content helped us understand market trends, improve our branding strategy, and make more confident business decisions.", author: "Startup Entrepreneur" },
    { role: "Business Consultant", quote: "The platform covers a wide range of industries and delivers information in a way that is easy to understand and implement. It has become one of my preferred sources for business updates.", author: "Business Consultant" },
    { role: "Digital Media Professional", quote: "The digital media and branding content from Tejomarg has been extremely valuable. The insights on audience engagement helped us strengthen our digital presence.", author: "Media & Marketing Professional" },
    { role: "Small Business Owner", quote: "Running a business requires constant learning. Tejomarg Business Info provides relevant knowledge, practical guidance, and fresh perspectives that help businesses stay competitive.", author: "Small Business Owner" },
    { role: "Industry Professional", quote: "What makes Tejomarg unique is its ability to combine business knowledge, innovation, and real-world applications. The platform offers valuable information for professionals across different sectors.", author: "Industry Expert" },
    { role: "Entrepreneur & Investor", quote: "Tejomarg Business Info serves as a bridge between ideas and execution. The content is insightful, informative, and highly relevant for anyone looking to grow professionally or commercially.", author: "Entrepreneur & Investor" }
  ];

  const ladderSteps = [
    "At the heart of our mission is the need for constant creation of the new and the adaptation of the old.",
    "We foresee improving our worldwide reach by nurturing more profound, longer-lasting connections with our customers.",
    "Looking ahead, it is also our aim to drive sustainable growth - not just for us but also for our clients.",
    "We believe in promoting digital transformation and modern business practices to stay ahead of the curve."
  ];

  return (
    <>
      <div className="biz-top-bar">
        <div className="biz-top-bar-inner">
          <div className="biz-top-logo">
            <img src="/business/logo.webp" alt="Tejomarg Business Logo" />
          </div>
          <a href="/" className="biz-back-btn">Back to Home</a>
        </div>
      </div>

      <div className="biz-page">
        {/* Hero Section */}
        <section className="biz-hero">
          <div className="biz-hero-bg-accent"></div>
          <div className="biz-container biz-hero-content">
            <div className="biz-hero-grid">
              <motion.div {...fadeInUp} className="biz-hero-text">
                <span className="biz-badge">Tejomarg Business Info</span>
                <h1 className="biz-title">
                  Empowering Businesses Through <br />
                  <span className="biz-gradient-text">Knowledge & Innovation</span>
                </h1>
                <p className="biz-subtitle">
                  In today’s rapidly evolving business landscape, success is driven by informed decisions, strategic thinking, innovation, and adaptability.
                </p>
                <div className="biz-hero-actions">
                  <button className="biz-btn-primary">Explore Insights</button>
                  <button className="biz-btn-outline">Join Community</button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="biz-hero-image-wrap"
              >
                <img src="/business/presentation.webp" alt="Business Presentation" className="biz-hero-img" />
                <div className="biz-glass-card biz-glass-1">
                  <LineChart size={24} className="text-blue-500 mb-2" />
                  <h4>Growth Driven</h4>
                  <p>Accelerate your business</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Ladder Section */}
        <section className="biz-section biz-bg-light">
          <div className="biz-container">
            <motion.div {...fadeInUp} className="biz-section-header">
              <h2>Mission & <span style={{color: '#0ea5e9'}}>Vision</span></h2>
              <p className="biz-section-desc">Our core principles driving meaningful growth.</p>
            </motion.div>

            <div className="biz-ladder-container">
              {ladderSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className={\`biz-ladder-step \${idx % 2 === 0 ? 'left' : 'right'}\`}
                >
                  <div className="biz-ladder-number">{idx + 1}</div>
                  <div className="biz-ladder-content">
                    <p>{step}</p>
                  </div>
                  {idx < ladderSteps.length - 1 && <div className="biz-ladder-line"></div>}
                </motion.div>
              ))}
            </div>

            {/* Stats bar */}
            <motion.div {...fadeInUp} className="biz-stats-bar">
              <div className="biz-stat">
                <Users size={32} />
                <div className="biz-stat-info">
                  <h4>10+</h4>
                  <p>Year Experience</p>
                </div>
              </div>
              <div className="biz-stat">
                <ShieldCheck size={32} />
                <div className="biz-stat-info">
                  <h4>1000+</h4>
                  <p>Customer Satisfied</p>
                </div>
              </div>
              <div className="biz-stat">
                <Target size={32} />
                <div className="biz-stat-info">
                  <h4>96%+</h4>
                  <p>Client Retention</p>
                </div>
              </div>
              <div className="biz-stat-action">
                <button className="biz-btn-cyan">Ready To Start Your Project</button>
              </div>
            </motion.div>

          </div>
        </section>

        {/* What We Cover Section with Analytics Image */}
        <section className="biz-section">
          <div className="biz-container">
            <div className="biz-split-section">
              <motion.div {...fadeInUp} className="biz-split-image">
                <img src="/business/analytics.webp" alt="Business Analytics" className="rounded-3xl shadow-2xl" />
              </motion.div>
              <div className="biz-split-content">
                <motion.div {...fadeInUp} className="biz-section-header" style={{textAlign: 'left'}}>
                  <h2>What We Cover</h2>
                  <div className="biz-divider" style={{marginLeft: 0}}></div>
                  <p className="biz-section-desc" style={{margin: '20px 0 0 0'}}>
                    From marketing strategies to financial insights, we provide comprehensive resources for your business growth.
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="biz-grid-compact">
                  {coverages.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeInUp}
                      className="biz-card-mini"
                      style={{ '--theme-color': item.themeColor }}
                    >
                      <div className="biz-card-icon-mini">{item.icon}</div>
                      <h4>{item.title}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Coverage with Signing Image */}
        <section className="biz-section biz-bg-light">
          <div className="biz-container">
            <div className="biz-split-section reverse">
              <motion.div {...fadeInUp} className="biz-split-image">
                <img src="/business/signing.webp" alt="Business Signing" className="rounded-3xl shadow-2xl" />
              </motion.div>
              <div className="biz-split-content">
                <motion.div {...fadeInUp} className="biz-section-header" style={{textAlign: 'left'}}>
                  <h2>Industry Coverage</h2>
                  <div className="biz-divider" style={{marginLeft: 0}}></div>
                  <p className="biz-section-desc" style={{margin: '20px 0 0 0'}}>
                    Tejomarg Business Info spans a wide range of industries, providing deep insights tailored to specific sectors.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="biz-tags">
                  {industries.map((industry, idx) => (
                    <motion.span key={idx} variants={fadeInUp} className="biz-tag">
                      {industry}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="biz-section">
          <div className="biz-container">
            <motion.div {...fadeInUp} className="biz-section-header">
              <h2>What People Say About Tejomarg Business Info</h2>
              <p className="biz-section-desc">
                At Tejomarg, we measure our success through the growth, trust, and positive impact we create for businesses, entrepreneurs, professionals, and organizations.
              </p>
              <div className="biz-divider" style={{ marginTop: '24px' }}></div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="biz-grid">
              {testimonials.map((testi, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  className="biz-testi-card"
                >
                  <div className="biz-testi-role">{testi.role}</div>
                  <p className="biz-testi-quote">"{testi.quote}"</p>
                  <div className="biz-testi-author">{testi.author}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brainstorming Banner */}
        <section className="biz-banner-section">
          <div className="biz-banner-image">
            <img src="/business/brainstorming.webp" alt="Brainstorming" />
            <div className="biz-banner-overlay"></div>
          </div>
          <div className="biz-container biz-banner-content">
            <motion.div {...fadeInUp}>
              <h2>Knowledge. Innovation. Growth.</h2>
              <p>"Where Ideas Become Opportunities and Information Becomes Growth."</p>
              <button className="biz-btn-primary mt-6">Share Your Success Story</button>
            </motion.div>
          </div>
        </section>
        
        {/* Trusted By Section with Handshake */}
        <section className="biz-section biz-bg-light">
          <div className="biz-container">
            <div className="biz-split-section">
              <motion.div {...fadeInUp} className="biz-split-image">
                <img src="/business/handshake.webp" alt="Handshake" className="rounded-3xl shadow-2xl" />
              </motion.div>
              <div className="biz-split-content">
                <motion.div {...fadeInUp} className="biz-section-header" style={{textAlign: 'left'}}>
                  <h2>Trusted by Visionaries & Entrepreneurs</h2>
                  <div className="biz-divider" style={{marginLeft: 0}}></div>
                  <p className="biz-section-desc" style={{margin: '20px 0 0 0'}}>
                    "Tejomarg Business Info is committed to empowering businesses with knowledge, innovation, and opportunities that drive meaningful growth."
                  </p>
                </motion.div>

                <div className="biz-community-list">
                  {[
                    "Entrepreneurs & Startup Founders",
                    "Business Owners & MSMEs",
                    "Consultants & Advisors",
                    "Digital Creators & Media Professionals"
                  ].map((member, idx) => (
                    <motion.div key={idx} {...fadeInUp} className="biz-community-item">
                      <CheckCircle2 size={24} className="text-green-500 mr-3" />
                      <span>{member}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        /* Pure CSS Styling */

        /* Top Bar */
        .biz-top-bar {
          background-color: #111827; /* Very dark blue/black */
          padding: 15px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .biz-top-bar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .biz-top-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: absolute;
          left: 0;
          pointer-events: none;
        }
        .biz-top-logo img {
          height: 40px;
          object-fit: contain;
        }
        .biz-back-btn {
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s;
          margin-left: auto; /* Pushes to the right */
          position: relative;
          z-index: 2;
        }
        .biz-back-btn:hover {
          background-color: rgba(255,255,255,0.1);
        }

        .biz-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: #ffffff;
          color: #1e293b;
          overflow-x: hidden;
        }

        .biz-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .biz-hero {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          overflow: hidden;
        }
        
        .biz-hero-bg-accent {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%);
          border-radius: 50%;
        }

        .biz-hero-content {
          position: relative;
          z-index: 10;
        }

        .biz-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .biz-hero-grid { grid-template-columns: 1.1fr 0.9fr; }
        }

        .biz-hero-text {
          text-align: left;
        }

        .biz-badge {
          display: inline-block;
          background-color: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .biz-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #0f172a;
        }

        .biz-gradient-text {
          background: linear-gradient(to right, #2563eb, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .biz-subtitle {
          font-size: 1.25rem;
          color: #475569;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .biz-hero-actions {
          display: flex;
          gap: 16px;
        }

        .biz-btn-primary {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 20px -10px rgba(37,99,235,0.5);
        }
        .biz-btn-primary:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
        }

        .biz-btn-outline {
          background-color: transparent;
          color: #0f172a;
          border: 2px solid #e2e8f0;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .biz-btn-outline:hover {
          border-color: #cbd5e1;
          background-color: #f1f5f9;
        }

        .biz-btn-cyan {
          background-color: #0ea5e9;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .biz-btn-cyan:hover {
          background-color: #0284c7;
        }

        .biz-hero-image-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }

        .biz-hero-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .biz-glass-card {
          position: absolute;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.5);
        }
        .biz-glass-1 {
          bottom: 20px;
          left: -20px;
          animation: float 4s ease-in-out infinite;
        }
        .biz-glass-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }
        .biz-glass-card p {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* Generic Section */
        .biz-section {
          padding: 100px 0;
        }
        .biz-bg-light {
          background-color: #f8fafc;
        }
        .biz-section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .biz-section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }
        .biz-section-desc {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Mission & Vision Ladder */
        .biz-ladder-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto 80px auto;
          padding: 40px 0;
        }

        .biz-ladder-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }
        .biz-ladder-step:last-child {
          margin-bottom: 0;
        }
        .biz-ladder-step.left {
          flex-direction: row;
          padding-right: 15%;
        }
        .biz-ladder-step.right {
          flex-direction: row-reverse;
          padding-left: 15%;
          text-align: right;
        }

        .biz-ladder-number {
          width: 50px;
          height: 50px;
          background-color: #0ea5e9;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          border-radius: 8px;
          flex-shrink: 0;
          z-index: 2;
          box-shadow: 0 10px 20px -5px rgba(14,165,233,0.4);
        }

        .biz-ladder-step.left .biz-ladder-number {
          margin-right: 24px;
        }
        .biz-ladder-step.right .biz-ladder-number {
          margin-left: 24px;
        }

        .biz-ladder-content {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
          flex-grow: 1;
        }
        .biz-ladder-content p {
          margin: 0;
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.6;
        }

        .biz-ladder-line {
          position: absolute;
          width: 2px;
          background-color: #cbd5e1;
          z-index: 1;
        }
        
        .biz-ladder-step.left .biz-ladder-line {
          left: 24px; /* center of number box */
          top: 50px;
          bottom: -60px;
        }
        
        /* Stats Bar */
        .biz-stats-bar {
          background-color: #e0f2fe; /* Light cyan */
          border: 1px solid #bae6fd;
          border-radius: 16px;
          padding: 30px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .biz-stat {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #0369a1;
        }
        .biz-stat h4 {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
        }
        .biz-stat p {
          margin: 0;
          font-size: 0.9rem;
          color: #475569;
          font-weight: 500;
        }

        /* Split Sections */
        .biz-split-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .biz-split-section { grid-template-columns: 1fr 1fr; }
          .biz-split-section.reverse .biz-split-image { order: 2; }
          .biz-split-section.reverse .biz-split-content { order: 1; }
        }

        .biz-split-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Compact Grid */
        .biz-grid-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 40px;
        }
        .biz-card-mini {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
          transition: all 0.3s;
        }
        .biz-card-mini:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .biz-card-icon-mini {
          color: var(--theme-color);
          margin-bottom: 16px;
        }
        .biz-card-mini h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        /* Tags */
        .biz-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }
        .biz-tag {
          background-color: #f1f5f9;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #334155;
          border: 1px solid #e2e8f0;
          transition: all 0.2s;
        }
        .biz-tag:hover {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        /* Community List */
        .biz-community-list {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .biz-community-item {
          display: flex;
          align-items: center;
          background: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          font-weight: 500;
          color: #1e293b;
        }

        /* Testimonials */
        .biz-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }
        .biz-testi-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
        }
        .biz-testi-role {
          display: inline-block;
          background-color: #fef3c7; /* yellow-100 */
          color: #d97706; /* yellow-600 */
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 20px;
          align-self: flex-start;
        }
        .biz-testi-quote {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .biz-testi-author {
          font-weight: 700;
          color: #0f172a;
          border-top: 1px solid #e2e8f0;
          padding-top: 16px;
        }

        /* Banner */
        .biz-banner-section {
          position: relative;
          padding: 120px 0;
          color: white;
          text-align: center;
        }
        .biz-banner-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .biz-banner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .biz-banner-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
        }
        .biz-banner-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }
        .biz-banner-content h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .biz-banner-content p {
          font-size: 1.25rem;
          color: #cbd5e1;
        }

        /* Utility */
        .mt-6 { margin-top: 24px; }
        .text-blue-500 { color: #3b82f6; }
        .text-green-500 { color: #10b981; }
        .mb-2 { margin-bottom: 8px; }
        .mr-3 { margin-right: 12px; }
        .rounded-3xl { border-radius: 1.5rem; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }

      \`}</style>
    </>
  );
}
`;

fs.writeFileSync('c:/Users/home/Desktop/kisan-tejomarg/src/app/businesses/page.js', code);
console.log('businesses/page.js updated successfully!');
