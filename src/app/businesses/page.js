"use client";

import { motion } from 'framer-motion';
import {
  Megaphone, Rocket, Target, LineChart,
  CheckCircle2, Users, ShieldCheck, Quote
} from 'lucide-react';

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
      icon: <Megaphone size={28} />,
      themeColor: "#3b82f6",
      desc: "Insights on digital media trends, social media, and content creation."
    },
    {
      title: "Business & Entrepreneurship",
      icon: <Rocket size={28} />,
      themeColor: "#f97316",
      desc: "Startup ecosystems, MSME guidance, and strategic planning."
    },
    {
      title: "Consulting & Professional Services",
      icon: <Users size={28} />,
      themeColor: "#8b5cf6",
      desc: "Business solutions, organizational development, and operational efficiency."
    },
    {
      title: "Marketing & Branding",
      icon: <Target size={28} />,
      themeColor: "#f43f5e",
      desc: "Brand positioning, SEO, and performance marketing strategies."
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
    "At the heart of our mission is the need for constant creation of the new and the adaptation of the old. We strive to pioneer creative business paradigms, fostering an environment where traditional methods blend seamlessly with cutting-edge strategies.",
    "We foresee improving our worldwide reach by nurturing more profound, longer-lasting connections with our customers. Our goal is to expand our digital footprint globally, ensuring that every partnership is rooted in trust, transparency, and shared growth.",
    "Looking ahead, it is also our aim to drive sustainable growth - not just for us but also for our clients. We construct resilient roadmaps that allow businesses to flourish responsibly, leaving a positive, lasting impact on the economy.",
    "We believe in promoting digital transformation and modern business practices to stay ahead of the curve. By leveraging state-of-the-art technologies and data insights, we empower brands to confidently navigate the complexities of tomorrow."
  ];

  return (
    <>
      <div className="biz-page">
        <a href="/" className="biz-floating-back-btn">Back to Home</a>
        {/* Hero Section */}
        <section className="biz-hero">
          <div className="biz-hero-glow"></div>
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
                  <a href="#insights" className="biz-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Explore Insights</a>
                  <a
                    href="https://wa.me/919511150925?text=नमस्ते! मुझे Tejomarg के बारे में अधिक जानकारी चाहिए।"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="biz-btn-outline"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Join Community
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="biz-hero-image-wrap"
              >
                <img src="/business/presentation.webp" alt="Business Presentation" className="biz-hero-img" />
                <div className="biz-glass-card">
                  <div className="biz-glass-icon"><LineChart size={20} /></div>
                  <div>
                    <h4>Growth Driven</h4>
                    <p>Accelerate your business scale</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Strictly matching layout) */}
        <section className="biz-section">
          <div className="biz-container">
            <div className="biz-vision-layout">
              {/* Header Title on Top Left, Subtitle Centered */}
              <div className="biz-vision-header-container">
                <div className="biz-vision-title-left">
                  Mission & <span style={{ color: '#0ea5e9' }}>Vision</span>
                </div>
                <div className="biz-vision-subtitle-right">
                  Our core principles driving meaningful growth.
                </div>
              </div>

              {/* Ladder Stack (Matches screenshot style) */}
              <div className="biz-screenshot-ladder">
                {ladderSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="biz-screenshot-step"
                  >
                    <div className="biz-screenshot-number-box">
                      0{idx + 1}
                    </div>
                    <div className="biz-screenshot-card">
                      <p>{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Bar */}
            <motion.div {...fadeInUp} className="biz-stats-bar" style={{ marginLeft: "62px" }}>
              <div className="biz-stats-grid "  >
                <div className="biz-stat-item">
                  <Users size={28} />
                  <div>
                    <h4>10+</h4>
                    <p>Years Experience</p>
                  </div>
                </div>
                <div className="biz-stat-item">
                  <ShieldCheck size={28} />
                  <div>
                    <h4>1000+</h4>
                    <p>Customers Satisfied</p>
                  </div>
                </div>
                <div className="biz-stat-item">
                  <Target size={28} />
                  <div>
                    <h4>96%+</h4>
                    <p>Client Retention</p>
                  </div>
                </div>
              </div>
              <div className="biz-stat-btn-wrap">
                <a href="https://wa.me/919511150925?text=नमस्ते!%20मैं%20अपने%20व्यवसाय/परियोजना%20के%20लिए%20Tejomarg%20Business%20के%20साथ%20काम%20करना%20चाहता%20हूँ।" target="_blank" rel="noopener noreferrer" className="biz-btn-cyan" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Ready To Start Your Project
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* What We Cover Section (Converted to top-down layout) */}
        <section id="insights" className="biz-section ">
          <div className="biz-container ">
            <motion.div {...fadeInUp} className="biz-cover-topdown-header text-center ">
              <span className="biz-small-label centered">What We Cover</span>
              <h2 className="biz-cover-topdown-heading !mb-8">
                From marketing strategies to financial insights, we provide comprehensive resources for your business growth.
              </h2>
            </motion.div>

            <div className="biz-cover-grid ">
              {coverages.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.08)', borderColor: item.themeColor }}
                  className="biz-cover-card"
                >
                  <div className="biz-cover-card-bar" style={{ backgroundColor: `${item.themeColor}12`, color: item.themeColor }}>
                    {item.icon}
                  </div>
                  <div className="biz-cover-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="biz-cover-bottom-img-wrap"
            >
              <img src="/business/analytics.webp" alt="Business Analytics Metrics" className="biz-cover-bottom-img" />
            </motion.div>
          </div>
        </section>

        {/* Industry Coverage Section */}
        <section className="biz-section">
          <div className="biz-container">
            <div className="biz-cover-split reverse">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="biz-cover-left"
              >
                <img src="/business/signing.webp" alt="Business Signing" className="biz-cover-main-img" />
              </motion.div>

              <div className="biz-cover-right">
                <span className="biz-small-label">Target Markets</span>
                <h2 className="biz-cover-heading">
                  Tejomarg Business Info spans a wide range of industries, providing deep insights tailored to specific sectors.
                </h2>
                <div className="biz-tags-grid">
                  {industries.map((industry, idx) => (
                    <span key={idx} className="biz-industry-tag">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="biz-section">
          <div className="biz-container">
            <motion.div {...fadeInUp} className="biz-center-header text-center ">
              <span className="biz-small-label centered">Testimonials</span>
              <h2 className="biz-section-title">What People Say About Tejomarg Business Info</h2>
              <p className="biz-section-subtitle !py-4 !mb-6">
                At Tejomarg, we measure our success through the growth, trust, and positive impact we create for businesses, entrepreneurs, professionals, and organizations.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="biz-testimonials-grid"
            >
              {testimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="biz-testimonial-card"
                >
                  <div className="biz-testimonial-top">
                    <div className="biz-testimonial-role-badge">
                      <span className="biz-dot"></span>
                      {testi.role}
                    </div>
                    <div className="biz-testimonial-quote-icon">
                      <Quote size={20} />
                    </div>
                  </div>
                  <p className="biz-testimonial-quote">
                    "{testi.quote}"
                  </p>
                  <div className="biz-testimonial-author">
                    {testi.author}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brainstorming Banner */}
        <section className="biz-banner-section">
          <div className="biz-banner-bg">
            <img src="/business/brainstorming.webp" alt="Brainstorming" />
            <div className="biz-banner-overlay"></div>
          </div>
          <div className="biz-container biz-banner-inner">
            <motion.div {...fadeInUp}>
              <h2>Knowledge. Innovation. Growth.</h2>
              <p>"Where Ideas Become Opportunities and Information Becomes Growth."</p>
              {/* <button className="biz-btn-cyan-large">Share Your Success Story</button> */}
            </motion.div>
          </div>
        </section>

        {/* Trusted By / Community */}
        <section className="biz-section">
          <div className="biz-container">
            <div className="biz-cover-split">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="biz-cover-left"
              >
                <img src="/business/handshake.webp" alt="Handshake Collaboration" className="biz-cover-main-img" />
              </motion.div>

              <div className="biz-cover-right">
                <span className="biz-small-label">Our Community</span>
                <h2 className="biz-cover-heading">
                  Trusted by Visionaries & Entrepreneurs
                </h2>
                <p className="biz-section-paragraph">
                  "Tejomarg Business Info is committed to empowering businesses with knowledge, innovation, and opportunities that drive meaningful growth."
                </p>
                <div className="biz-check-list">
                  {[
                    "Entrepreneurs & Startup Founders",
                    "Business Owners & MSMEs",
                    "Consultants & Advisors",
                    "Digital Creators & Media Professionals"
                  ].map((member, idx) => (
                    <div key={idx} className="biz-check-item">
                      <div className="biz-check-icon">
                        <CheckCircle2 size={18} />
                      </div>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Global page layout using system's theme background */
        .biz-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: var(--bg-main);
          color: var(--text-dark);
          overflow-x: hidden;
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .biz-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Floating Back Button */
        .biz-floating-back-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 100;
          color: var(--text-dark);
          border: 1px solid var(--border-color);
          background: var(--bg-white);
          padding: 8px 18px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }
        .biz-floating-back-btn:hover {
          background-color: var(--bg-section);
          border-color: var(--primary-saffron);
          transform: translateY(-1px);
        }

        /* Hero Section */
        .biz-hero {
          position: relative;
          padding: 80px 0 90px 0;
          overflow: hidden;
        }
        .biz-hero-glow {
          position: absolute;
          top: -200px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .biz-hero-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 48px;
        }

        .biz-hero-text {
          max-width: 800px;
          margin: 0 auto;
        }

        .biz-badge {
          display: inline-block;
          background-color: rgba(59, 130, 246, 0.08);
          color: #2563eb;
          border: 1px solid rgba(59, 130, 246, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }

        .biz-title {
          font-size: clamp(2.5rem, 5.5vw, 4.4rem);
          font-weight: 850;
          line-height: 1.18;
          margin-bottom: 24px;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }

        .biz-gradient-text {
          background: linear-gradient(to right, #0ea5e9, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .biz-subtitle {
          font-size: 1.35rem;
          color: var(--text-muted);
          margin-bottom: 36px;
          line-height: 1.65;
        }

        .biz-hero-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .biz-btn-primary {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.2);
        }
        .biz-btn-primary:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
        }

        .biz-btn-outline {
          background-color: transparent;
          color: var(--text-dark);
          border: 1.5px solid var(--border-color);
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .biz-btn-outline:hover {
          border-color: var(--text-dark);
          background-color: var(--bg-section);
          transform: translateY(-2px);
        }

        .biz-hero-image-wrap {
          position: relative;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
        }
        .biz-hero-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }
        .biz-glass-card {
          position: absolute;
          bottom: 24px;
          left: -24px;
          width: 280px;
          background: var(--bg-white);
          backdrop-filter: blur(12px);
          padding: 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          z-index: 10;
        }
        @media (max-width: 768px) {
          .biz-glass-card {
            left: 20px;
            right: 20px;
            width: auto;
          }
        }
        .biz-glass-icon {
          color: #0ea5e9;
          background: rgba(14, 165, 233, 0.1);
          padding: 10px;
          border-radius: 8px;
        }
        .biz-glass-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 2px 0;
        }
        .biz-glass-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Generic Section */
        .biz-section {
          padding: 80px 0;
        }        /* Vision & Mission Layout */
        .biz-vision-layout {
          max-width: 1000px;
          margin: 0 auto 60px auto;
        }
        .biz-vision-header-container {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .biz-vision-title-left {
          font-size: 2.8rem;
          font-weight: 900;
          font-family: serif, 'Playfair Display';
          background: linear-gradient(135deg, #090d16 0%, #1e3a8a 60%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .biz-vision-subtitle-right {
          font-size: 1.1rem;
          color: var(--text-muted);
        }
        
        .biz-screenshot-ladder {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .biz-screenshot-ladder {
            grid-template-columns: 1fr;
          }
        }
        .biz-screenshot-step {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .biz-screenshot-step:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(37, 99, 235, 0.4);
        }

        .biz-screenshot-number-box {
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #090d16 0%, #1e3a8a 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: serif, 'Playfair Display';
        }
        
        .biz-screenshot-card {
          background: transparent;
          border-radius: 0;
          padding: 0;
          width: 100%;
          box-shadow: none;
        }
        .biz-screenshot-card p {
          color: var(--text-dark);
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* Stats Bar */
        .biz-stats-bar {
          background: var(--bg-section);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 30px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 40px;
        }
        .biz-stats-grid {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .biz-stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #0ea5e9;
        }
        .biz-stat-item h4 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 0;
        }
        .biz-stat-item p {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
        }
        .biz-btn-cyan {
          background-color: #0091ea;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .biz-btn-cyan:hover {
          background-color: #0284c7;
        }

        /* What We Cover - Split Section */
        .biz-cover-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .biz-cover-split { grid-template-columns: 1fr 1.1fr; }
          .biz-cover-split.reverse .biz-cover-left { order: 2; }
          .biz-cover-split.reverse .biz-cover-right { order: 1; }
        }
        .biz-cover-left {
          position: relative;
        }
        .biz-cover-main-img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
        }

        .biz-cover-right {
          text-align: left;
        }
        .biz-small-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #0ea5e9;
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }
        .biz-small-label.centered {
          text-align: center;
        }
        .biz-cover-heading {
          font-size: 1.8rem;
          line-height: 1.45;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 36px;
        }
        @media (max-width: 768px) {
          .biz-cover-heading { font-size: 1.5rem; }
        }

        .biz-cover-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .biz-cover-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: transform 0.2s ease;
        }
        .biz-cover-icon-box {
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .biz-cover-item-text h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 6px 0;
        }
        .biz-cover-item-text p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        /* What We Cover - Top Down Layout */
        .biz-cover-topdown-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px auto;
        }
        .biz-cover-topdown-heading {
          font-size: 2.2rem;
          line-height: 1.35;
          font-weight: 800;
          color: var(--text-dark);
          margin-top: 12px;
        }
        @media (max-width: 768px) {
          .biz-cover-topdown-heading { font-size: 1.6rem; }
        }

        .biz-cover-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 50px;
        }
        @media (min-width: 992px) {
          .biz-cover-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .biz-cover-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-sm);
        }
        .biz-cover-card-bar {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .biz-cover-card:hover {
          transform: translateY(-8px);
        }
        .biz-cover-card-body {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .biz-cover-card-body h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 10px 0;
          line-height: 1.4;
        }
        .biz-cover-card-body p {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .biz-cover-bottom-img-wrap {
          max-width: 800px;
          margin: 40px auto 0 auto;
          position: relative;
        }
        .biz-cover-bottom-img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
        }

        /* Industry Tags */
        .biz-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .biz-industry-tag {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .biz-industry-tag:hover {
          background-color: #0ea5e9;
          color: white;
          border-color: #0ea5e9;
          transform: translateY(-1px);
        }

        /* Center Headers */
        .biz-center-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px auto;
        }
        .biz-section-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 12px 0 16px 0;
        }
        .biz-section-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Testimonials */
        :global(.biz-testimonials-grid) {
          display: grid !important;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important;
          gap: 24px !important;
        }
        :global(.biz-testimonial-card) {
          background: var(--bg-white) !important;
          border: 1px solid var(--border-color) !important;
          border-radius: 16px !important;
          padding: 32px !important;
          display: flex !important;
          flex-direction: column !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
          position: relative !important;
          box-shadow: var(--shadow-sm) !important;
        }
        :global(.biz-testimonial-card:hover) {
          transform: translateY(-8px) !important;
          border-color: rgba(5, 150, 105, 0.35) !important;
          box-shadow: 0 12px 30px rgba(0, 145, 234, 0.08) !important;
        }
        :global(.biz-testimonial-top) {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          margin-bottom: 20px !important;
          width: 100% !important;
        }
        :global(.biz-testimonial-role-badge) {
          background: rgba(14, 165, 233, 0.1) !important;
          color: #0284c7 !important;
          padding: 6px 14px !important;
          border-radius: 50px !important;
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
        }
        :global(.biz-dot) {
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          background-color: #0ea5e9 !important;
          display: inline-block !important;
        }
        :global(.biz-testimonial-quote-icon) {
          color: rgba(14, 165, 233, 0.25) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        :global(.biz-testimonial-quote) {
          font-size: 0.95rem !important;
          line-height: 1.65 !important;
          color: var(--text-muted) !important;
          margin-bottom: 24px !important;
          font-style: italic !important;
          flex-grow: 1 !important;
        }
        :global(.biz-testimonial-author) {
          font-weight: 700 !important;
          color: var(--text-dark) !important;
          font-size: 0.95rem !important;
          border-top: 1px solid var(--border-color) !important;
          padding-top: 16px !important;
        }

        /* Banner styling */
        .biz-banner-section {
          position: relative;
          padding: 100px 0;
          text-align: center;
          margin: 60px 0;
          overflow: hidden;
          border-radius: 24px;
        }
        .biz-banner-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .biz-banner-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .biz-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(2, 6, 23, 0.9) 0%, rgba(15, 23, 42, 0.75) 100%);
        }
        .biz-banner-inner {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
        }
        .biz-banner-inner h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .biz-banner-inner p {
          font-size: 1.15rem;
          color: #cbd5e1;
          margin-bottom: 30px;
        }
        .biz-btn-cyan-large {
          background-color: #0091ea;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .biz-btn-cyan-large:hover {
          background-color: #0284c7;
        }

        /* Community Check List */
        .biz-section-paragraph {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .biz-check-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .biz-check-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .biz-check-icon {
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .biz-check-item span {
          font-weight: 500;
          color: var(--text-dark);
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
