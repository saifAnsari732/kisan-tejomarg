"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaBookOpen, FaBrain, FaLeaf } from "react-icons/fa";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about_us;
  const pillars = translations[language].pillars;

  return (
    <main className="about-main">
      <Navbar />

      {/* Decorative Background Glows */}
      <div className="bg-glow top-glow"></div>
      <div className="bg-glow bottom-glow"></div>

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-badge">
          <HiOutlineSparkles className="badge-icon" />
          <span>{language === "hi" ? "आध्यात्मिक मंच" : "Spiritual Platform"}</span>
        </div>

        <h1 className="hero-title">{t.title}</h1>

        <p className="hero-desc">{t.content}</p>

        {/* Hero Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <h3>10K+</h3>
            <span>{language === "hi" ? "साधक" : "Seekers"}</span>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <span>{language === "hi" ? "मार्गदर्शक" : "Guides"}</span>
          </div>
          <div className="stat-item">
            <h3>∞</h3>
            <span>{language === "hi" ? "ज्ञान" : "Wisdom"}</span>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="who-we-are">
          <div className="who-text glass-card">
            <h2>{language === "hi" ? "हम कौन हैं" : "Who We Are"}</h2>
            <p>{t.team}</p>
          </div>
          <div className="who-image">
            <Image
              src="/images/sadhubaba.webp"
              alt="Tejomarg Spiritual Journey"
              fill
              className="about-img"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mission-vision">
          <div className="glass-card mv-card">
            <div className="mv-icon-wrapper">
              <FaBrain className="mv-icon" />
            </div>
            <h2>{t.mission.title}</h2>
            <p>{t.mission.desc}</p>
          </div>
          
          <div className="glass-card mv-card">
            <div className="mv-icon-wrapper">
              <FaLeaf className="mv-icon" />
            </div>
            <h2>{t.vision.title}</h2>
            <p>{t.vision.desc}</p>
          </div>
        </div>

        {/* PILLARS OF WISDOM */}
        <div className="pillars-header">
          <h2>{pillars.title}</h2>
        </div>

        <div className="pillars-grid">
          {[pillars.p1, pillars.p2, pillars.p3, pillars.p4].map((pillar, idx) => (
            <div key={idx} className="glass-card pillar-card">
              <div className="pillar-icon-wrapper">
                <FaBookOpen className="pillar-icon" />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>{language === "hi" ? "अपनी आध्यात्मिक यात्रा शुरू करें" : "Start Your Spiritual Journey"}</h2>
          <p>{language === "hi" ? "आत्म-साक्षात्कार की दिशा में आज ही पहला कदम उठाएं।" : "Take the first step towards self-realization today."} 🚀</p>

          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              {language === "hi" ? "संपर्क करें" : "Contact Us"}
            </a>
            <a href="/services" className="btn-secondary">
              {language === "hi" ? "सेवाएं देखें" : "Explore Services"}
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .about-main {
          background-color: #000617;
          color: white;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: sans-serif;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        
        .top-glow {
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background-color: rgba(234, 88, 12, 0.2);
          filter: blur(120px);
        }
        
        .bottom-glow {
          bottom: 20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background-color: rgba(245, 158, 11, 0.1);
          filter: blur(150px);
        }

        .about-hero {
          padding: 9rem 1rem 5rem 1rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1.5rem;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.2);
        }

        .badge-icon {
          color: #fbbf24;
          font-size: 1.125rem;
        }

        .hero-badge span {
          color: #fcd34d;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.025em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          background: linear-gradient(to right, #fb923c, #fcd34d, #eab308);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 3.75rem; }
        }

        @media (min-width: 1024px) {
          .hero-title { font-size: 4.5rem; }
        }

        .hero-desc {
          color: #d1d5db;
          max-width: 48rem;
          margin: 0 auto;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.625;
        }

        @media (min-width: 768px) {
          .hero-desc { font-size: 1.25rem; }
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 4rem;
        }

        @media (min-width: 768px) {
          .hero-stats { gap: 4rem; }
        }

        .stat-item h3 {
          font-size: 2.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          font-family: serif;
        }

        @media (min-width: 768px) {
          .stat-item h3 { font-size: 3rem; }
        }

        .stat-item span {
          color: #fbbf24;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
        }

        .about-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1rem 5rem 1rem;
          position: relative;
          z-index: 10;
        }

        .glass-card {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
        }

        .who-we-are {
          display: grid;
          gap: 3rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        @media (min-width: 1024px) {
          .who-we-are { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .who-text {
          padding: 2rem;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
        }

        @media (min-width: 768px) {
          .who-text { padding: 2.5rem; }
        }

        .who-text:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .who-text h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        .who-text p {
          color: #d1d5db;
          line-height: 1.625;
          font-size: 1.125rem;
        }

        .who-image {
          position: relative;
          height: 600px;
          width: 100%;
          border-radius: 2rem;
          object-fit: cover;
          overflow: hidden;
          // border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.2);
        }

        .about-img {
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .who-image:hover .about-img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #020617, transparent, transparent);
          opacity: 0.8;
        }

        .mission-vision {
          display: grid;
          gap: 2rem;
          margin-bottom: 6rem;
        }

        @media (min-width: 768px) {
          .mission-vision { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .mv-card {
          padding: 2.5rem;
          background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          transition: border-color 0.5s ease;
        }

        .mv-card:hover {
          border-color: rgba(245, 158, 11, 0.3);
        }

        .mv-icon-wrapper {
          width: 3.5rem;
          height: 3.5rem;
          background-color: rgba(249, 115, 22, 0.2);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .mv-card:hover .mv-icon-wrapper {
          background-color: #f97316;
        }

        .mv-icon {
          color: #fbbf24;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }

        .mv-card:hover .mv-icon {
          color: white;
        }

        .mv-card h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          font-family: serif;
        }

        .mv-card p {
          color: #d1d5db;
          line-height: 1.625;
        }

        .pillars-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .pillars-header h2 {
          font-size: 1.875rem;
          font-weight: 700;
          background: linear-gradient(to right, #fb923c, #fcd34d);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-family: serif;
          display: inline-block;
        }

        @media (min-width: 768px) {
          .pillars-header h2 { font-size: 2.25rem; }
        }

        .pillars-grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .pillars-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 1024px) {
          .pillars-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        .pillar-card {
          padding: 2rem;
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .pillar-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.15);
        }

        .pillar-icon-wrapper {
          margin-bottom: 1.5rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-wrapper {
          opacity: 1;
        }

        .pillar-icon {
          font-size: 1.875rem;
          color: #fbbf24;
        }

        .pillar-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          font-family: serif;
        }

        .pillar-card p {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.625;
        }

        .about-cta {
          position: relative;
          padding: 6rem 1rem;
          text-align: center;
          overflow: hidden;
        }

        .cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(67, 20, 7, 0.4));
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 48rem;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          font-family: serif;
        }

        @media (min-width: 768px) {
          .cta-content h2 { font-size: 3rem; }
        }

        .cta-content p {
          color: #d1d5db;
          margin-bottom: 2.5rem;
          font-size: 1.125rem;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(to right, #e2450c, #FFD700);
          color: white;
          border-radius: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 0 20px rgba(226, 69, 12, 0.4);
          transition: transform 0.3s ease;
        }

        .btn-primary:hover {
          transform: scale(1.05);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          border: 1px solid rgba(245, 158, 11, 0.5);
          color: #fbbf24;
          border-radius: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(245, 158, 11, 0.1);
        }
      `}</style>
    </main>
  );
}
