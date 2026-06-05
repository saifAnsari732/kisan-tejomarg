"use client";

import { motion } from 'framer-motion';
import { 
  Megaphone, Rocket, Target, LineChart, Cpu, 
  CheckCircle2, Globe, Users, ShieldCheck, Lightbulb
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BusinessesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const coverages = [
    {
      title: "Digital Media & Communication",
      icon: <Megaphone size={32} />,
      themeColor: "#3b82f6", // blue
      items: [
        "Digital media trends and innovations",
        "Social media strategies",
        "Content creation and creator economy",
        "Podcasting and video production",
        "Online reputation management",
        "Influencer marketing",
        "Media technology and emerging platforms",
        "Audience engagement and community building"
      ]
    },
    {
      title: "Business & Entrepreneurship",
      icon: <Rocket size={32} />,
      themeColor: "#f97316", // orange
      items: [
        "Startup ecosystem and innovation",
        "Business planning and execution",
        "Entrepreneurial success stories",
        "Small and medium enterprises (SMEs/MSMEs)",
        "Family-owned businesses",
        "Business expansion strategies",
        "Leadership and decision-making",
        "Scaling and sustainability"
      ]
    },
    {
      title: "Consulting & Professional Services",
      icon: <Users size={32} />,
      themeColor: "#8b5cf6", // purple
      items: [
        "Business consulting solutions",
        "Strategic planning",
        "Organizational development",
        "Operational efficiency",
        "Corporate governance",
        "Leadership development",
        "Human resource strategies",
        "Business transformation initiatives"
      ]
    },
    {
      title: "Marketing, Branding & Customer Experience",
      icon: <Target size={32} />,
      themeColor: "#f43f5e", // rose
      items: [
        "Brand strategy and positioning",
        "Digital marketing",
        "Performance marketing",
        "Search engine optimization (SEO)",
        "Customer acquisition and retention",
        "Consumer behavior analysis",
        "Public relations and reputation management",
        "Customer experience and engagement"
      ]
    },
    {
      title: "Finance, Investment & Economic Insights",
      icon: <LineChart size={32} />,
      themeColor: "#10b981", // emerald
      items: [
        "Business finance and management",
        "Investment opportunities",
        "Startup funding and venture capital",
        "Financial planning and forecasting",
        "Market trends and economic developments",
        "Wealth creation strategies",
        "Corporate finance",
        "Risk management"
      ]
    },
    {
      title: "Technology & Innovation",
      icon: <Cpu size={32} />,
      themeColor: "#0ea5e9", // sky
      items: [
        "Artificial Intelligence (AI)",
        "Automation and process optimization",
        "Digital transformation",
        "Software and SaaS businesses",
        "Cybersecurity",
        "Data analytics and business intelligence",
        "Cloud computing",
        "Emerging technologies and future trends"
      ]
    }
  ];

  const industries = [
    "Retail & E-Commerce", "Real Estate", "Healthcare & HealthTech", 
    "Education & EdTech", "Agriculture & AgriTech", "Manufacturing", 
    "Travel & Hospitality", "Infrastructure & Construction", 
    "Energy & Sustainability", "FMCG & Consumer Brands", 
    "Logistics & Supply Chain", "Automobile Industry", "FinTech", 
    "Media & Entertainment", "Sports Business", "Government & Public Sector Initiatives"
  ];

  const missions = [
    "Deliver reliable and actionable business information.",
    "Support entrepreneurship and innovation.",
    "Promote digital transformation and modern business practices.",
    "Encourage leadership, creativity, and strategic thinking.",
    "Create awareness of emerging industries and opportunities.",
    "Build a strong bridge between businesses, professionals, and communities."
  ];

  return (
    <>
      <Navbar />
      <div className="biz-page">
        
        {/* Hero Section */}
        <section className="biz-hero">
          <div className="biz-container biz-hero-content">
            <motion.div {...fadeInUp} className="biz-hero-text">
              <span className="biz-badge">Tejomarg Business Info</span>
              <h1 className="biz-title">
                Empowering Businesses Through <br />
                <span className="biz-gradient-text">Knowledge & Innovation</span>
              </h1>
              <p className="biz-subtitle">
                In today’s rapidly evolving business landscape, success is driven by informed decisions, strategic thinking, innovation, and adaptability. Tejomarg Business Info is a comprehensive platform dedicated to delivering valuable insights, industry knowledge, and growth opportunities.
              </p>
              <p className="biz-desc">
                Whether you are building a startup, scaling an established company, exploring new opportunities, or navigating digital transformation, we serve as your reliable source for business knowledge and strategic guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="biz-section biz-bg-light">
          <div className="biz-container">
            <motion.div {...fadeInUp} className="biz-section-header">
              <h2>What We Cover</h2>
              <div className="biz-divider"></div>
            </motion.div>

            <div className="biz-grid">
              {coverages.map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="biz-card"
                  style={{ '--theme-color': item.themeColor }}
                >
                  <div className="biz-card-icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <ul className="biz-list">
                    {item.items.map((point, i) => (
                      <li key={i}>
                        <CheckCircle2 className="biz-check-icon" size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Coverage Section */}
        <section className="biz-section biz-border-y">
          <div className="biz-container">
            <div className="biz-flex-row">
              <motion.div {...fadeInUp} className="biz-flex-left">
                <div className="biz-icon-box">
                  <Globe size={32} />
                </div>
                <h2>Industry Coverage</h2>
                <p>
                  Tejomarg Business Info spans a wide range of industries, providing deep insights tailored to specific sectors.
                </p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="biz-flex-right">
                <div className="biz-tags">
                  {industries.map((industry, idx) => (
                    <span key={idx} className="biz-tag">
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="biz-section biz-bg-light">
          <div className="biz-container">
            <div className="biz-grid-2">
              
              {/* Vision */}
              <motion.div {...fadeInUp} className="biz-vision-card">
                <Lightbulb size={48} className="biz-vision-icon" />
                <h2>Our Vision</h2>
                <p>
                  To become a leading platform that connects businesses, entrepreneurs, innovators, and professionals with knowledge, opportunities, and insights that drive sustainable growth and positive impact.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div {...fadeInUp} className="biz-mission-card">
                <ShieldCheck size={48} className="biz-mission-icon" />
                <h2>Our Mission</h2>
                <ul className="biz-mission-list">
                  {missions.map((mission, idx) => (
                    <li key={idx}>
                      <div className="biz-mission-check">
                        <CheckCircle2 size={16} />
                      </div>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Tejomarg Section */}
        <section className="biz-cta-section">
          <div className="biz-cta-bg"></div>
          <div className="biz-container biz-cta-content">
            <motion.div {...fadeInUp}>
              <h2>Why Tejomarg Business Info?</h2>
              <p>
                At Tejomarg, we believe that every successful business begins with a vision, but sustainable success is achieved through knowledge, strategy, and continuous learning. Our platform is designed to inform, inspire, and empower individuals and organizations across every stage of their business journey.
              </p>
              <p className="biz-mb">
                From startups to established enterprises, from digital media to consulting, from local businesses to global industries—we cover everything that contributes to business growth, innovation, and success.
              </p>
              
              <div className="biz-quote-box">
                <h3>Knowledge. Innovation. Growth. Impact.</h3>
                <p>"Where Ideas Become Opportunities and Information Becomes Growth."</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        /* Pure CSS Styling for Businesses Page */
        .biz-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: #ffffff;
          color: #1e293b;
          min-height: 100vh;
        }

        :global([data-theme="dark"]) .biz-page {
          background-color: #0f172a;
          color: #f8fafc;
        }

        .biz-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .biz-hero {
          position: relative;
          padding: 160px 0 100px;
          overflow: hidden;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          color: #ffffff;
          text-align: center;
        }

        .biz-hero-content {
          position: relative;
          z-index: 10;
        }

        .biz-hero-text {
          max-width: 900px;
          margin: 0 auto;
        }

        .biz-badge {
          display: inline-block;
          background-color: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          border: 1px solid rgba(96, 165, 250, 0.3);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .biz-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .biz-gradient-text {
          background: linear-gradient(to right, #fb923c, #fcd34d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .biz-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .biz-desc {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* Generic Section */
        .biz-section {
          padding: 100px 0;
        }

        .biz-bg-light {
          background-color: #f8fafc;
        }

        :global([data-theme="dark"]) .biz-bg-light {
          background-color: #1e293b;
        }

        .biz-border-y {
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        :global([data-theme="dark"]) .biz-border-y {
          border-color: #334155;
        }

        .biz-section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .biz-section-header h2, .biz-flex-left h2, .biz-vision-card h2, .biz-mission-card h2, .biz-cta-content h2 {
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .biz-section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }

        :global([data-theme="dark"]) .biz-section-header h2 {
          color: #ffffff;
        }

        .biz-divider {
          width: 80px;
          height: 6px;
          background: linear-gradient(to right, #f97316, #fbbf24);
          margin: 0 auto;
          border-radius: 10px;
        }

        /* Grid & Cards */
        .biz-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .biz-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        :global([data-theme="dark"]) .biz-card {
          background-color: #0f172a;
          border-color: #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .biz-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        :global([data-theme="dark"]) .biz-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .biz-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background-color: color-mix(in srgb, var(--theme-color) 15%, transparent);
          color: var(--theme-color);
        }

        .biz-card h3 {
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 24px;
        }

        :global([data-theme="dark"]) .biz-card h3 {
          color: #ffffff;
        }

        .biz-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .biz-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        :global([data-theme="dark"]) .biz-list li {
          color: #cbd5e1;
        }

        .biz-check-icon {
          color: var(--theme-color);
          margin-right: 12px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Flex Layout */
        .biz-flex-row {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .biz-flex-row {
            flex-direction: row;
          }
          .biz-flex-left {
            flex: 0 0 35%;
          }
          .biz-flex-right {
            flex: 1;
          }
        }

        .biz-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background-color: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        :global([data-theme="dark"]) .biz-icon-box {
          background-color: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
        }

        .biz-flex-left h2 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #0f172a;
        }

        :global([data-theme="dark"]) .biz-flex-left h2 {
          color: #ffffff;
        }

        .biz-flex-left p {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.6;
        }

        :global([data-theme="dark"]) .biz-flex-left p {
          color: #cbd5e1;
        }

        .biz-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .biz-tag {
          padding: 12px 20px;
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          cursor: default;
          transition: all 0.2s ease;
        }

        :global([data-theme="dark"]) .biz-tag {
          background-color: #1e293b;
          border-color: #334155;
          color: #cbd5e1;
        }

        .biz-tag:hover {
          background-color: #fff7ed;
          border-color: #fed7aa;
          color: #ea580c;
        }

        :global([data-theme="dark"]) .biz-tag:hover {
          background-color: rgba(234, 88, 12, 0.1);
          border-color: #ea580c;
          color: #fb923c;
        }

        /* 2 Column Grid */
        .biz-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 992px) {
          .biz-grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .biz-vision-card {
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          border-radius: 32px;
          padding: 56px 48px;
          color: #ffffff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .biz-vision-icon {
          color: #60a5fa;
          margin-bottom: 32px;
        }

        .biz-vision-card h2 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .biz-vision-card p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 300;
        }

        .biz-mission-card {
          background-color: #ffffff;
          border-radius: 32px;
          padding: 56px 48px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
        }

        :global([data-theme="dark"]) .biz-mission-card {
          background-color: #1e293b;
          border-color: #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .biz-mission-icon {
          color: #f97316;
          margin-bottom: 32px;
        }

        .biz-mission-card h2 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 32px;
          color: #0f172a;
        }

        :global([data-theme="dark"]) .biz-mission-card h2 {
          color: #ffffff;
        }

        .biz-mission-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .biz-mission-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .biz-mission-check {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(249, 115, 22, 0.1);
          color: #ea580c;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .biz-mission-list span {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.6;
        }

        :global([data-theme="dark"]) .biz-mission-list span {
          color: #cbd5e1;
        }

        /* CTA Section */
        .biz-cta-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #ea580c 0%, #f59e0b 100%);
          color: #ffffff;
          text-align: center;
        }

        .biz-cta-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .biz-cta-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 32px;
          color: #ffffff;
        }

        .biz-cta-content p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #fff7ed;
          margin-bottom: 24px;
        }

        .biz-mb {
          margin-bottom: 48px !important;
        }

        .biz-quote-box {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 40px;
        }

        .biz-quote-box h3 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .biz-quote-box p {
          font-size: 1.125rem;
          font-style: italic;
          color: #ffedd5;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .biz-title {
            font-size: 2.5rem;
          }
          .biz-hero {
            padding: 120px 0 80px;
          }
          .biz-section {
            padding: 80px 0;
          }
          .biz-card {
            padding: 32px;
          }
          .biz-vision-card, .biz-mission-card {
            padding: 40px 32px;
          }
        }
      `}</style>
    </>
  );
}
