"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MotivationalPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = [
    { title: "Student Motivation", icon: "🎓", desc: "Ace your exams and build your career" },
    { title: "Success Stories", icon: "🌟", desc: "Real journeys of ordinary people doing extraordinary things" },
    { title: "Women Empowerment", icon: "👑", desc: "Inspiring stories of women leaders" },
    { title: "Mindset Mastery", icon: "🧠", desc: "Develop an unstoppable mindset" },
    { title: "Leadership", icon: "🦁", desc: "Lead with courage and vision" },
    { title: "Career Growth", icon: "📈", desc: "Strategies for rapid professional growth" }
  ];

  const stories = [
    { id: 1, title: "The Journey of Resilience: From Zero to Hero", image: "/images/resilience_thumb.webp", speaker: "Swami Vivekananda", views: "1.2M Views" },
    { id: 2, title: "Finding Inner Peace in a Chaotic World", image: "/images/inner_peace_thumb.webp", speaker: "Sri Aurobindo", views: "850K Views" },
    { id: 3, title: "The Power of Focus and Dedication", image: "/images/focus_thumb.webp", speaker: "Chanakya Niti", views: "2.4M Views" }
  ];

  return (
    <>
      <Navbar />
      <div className="mot-page">
        {/* Hero Section */}
        <section className="mot-hero">
          <div className="mot-hero-bg"></div>
          
          <div className="mot-blob mot-blob-1"></div>
          <div className="mot-blob mot-blob-2"></div>

          <div className="mot-container mot-relative">
            <div className="mot-hero-grid">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mot-hero-content"
              >
                <h1 className="mot-title">
                  Dream <span className="mot-text-orange">Bigger.</span><br />
                  Achieve <span className="mot-text-yellow">Greater.</span>
                </h1>
                <p className="mot-subtitle">
                  Fuel Your Dreams. Transform Your Future. Watch inspiring stories, success journeys, life-changing experiences and motivational talks from people across India.
                </p>
                <div className="mot-btn-group">
                  <button className="mot-btn mot-btn-primary">
                    Watch Stories
                    <svg className="mot-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                  <button className="mot-btn mot-btn-outline">
                    Explore Categories
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mot-hero-visual"
              >
                <div className="mot-video-placeholder">
                  <Image src="/images/sadhubaba.webp" alt="Video Placeholder" fill style={{ objectFit: 'cover' }} />
                  <div className="mot-video-inner" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                     <div className="mot-video-text">
                       <svg className="mot-video-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                       <p style={{ color: '#fff', fontWeight: 'bold' }}>Watch Highlight Video</p>
                     </div>
                  </div>
                </div>
                
                {/* Floating Element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="mot-floating-stat"
                >
                  <div className="mot-stat-icon">📈</div>
                  <div>
                    <p className="mot-stat-title">100k+ Views</p>
                    <p className="mot-stat-desc">This Month</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="mot-section mot-bg-white">
          <div className="mot-container">
            <motion.div {...fadeInUp} className="mot-section-header">
              <h2>Featured Inspirational Stories</h2>
              <div className="mot-divider"></div>
            </motion.div>

            <div className="mot-stories-grid">
              {stories.map((story) => (
                <motion.div key={story.id} {...fadeInUp} className="mot-story-card">
                  <div className="mot-story-thumb">
                    <Image src={story.image} alt={story.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className="mot-thumb-overlay"></div>
                    <div className="mot-play-btn">
                      <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>
                  <h3>{story.title}</h3>
                  <p>{story.speaker} • {story.views}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mot-section mot-bg-light">
          <div className="mot-container">
            <motion.div {...fadeInUp} className="mot-section-header">
              <h2>Find Your Motivation</h2>
              <div className="mot-divider"></div>
            </motion.div>

            <div className="mot-categories-grid">
              {categories.map((cat, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeInUp} 
                  transition={{ delay: idx * 0.1 }}
                  className="mot-cat-card"
                >
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Inspiration Quotes */}
        <section className="mot-quote-section">
          <div className="mot-quote-pattern"></div>
          <div className="mot-container mot-relative">
            <motion.div {...fadeInUp} className="mot-quote-content">
              <h2>Daily Inspiration</h2>
              <div className="mot-quote-box">
                <svg className="mot-quote-mark" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="mot-quote-text">
                  "Success is not final, failure is not fatal: it is the courage to continue that counts."
                </p>
                <p className="mot-quote-author">- Winston Churchill</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mot-cta-section">
          <div className="mot-container">
            <motion.div {...fadeInUp} className="mot-cta-content">
              <h2>Start Your Growth Journey Today</h2>
              <p>
                Join thousands of learners who are transforming their lives through our inspiring stories and motivational content.
              </p>
              <button className="mot-btn mot-btn-primary mot-btn-large">
                Get Inspired Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        /* Pure CSS Styling for Motivational Page */
        .mot-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
          min-height: 100vh;
          padding-top: 80px; /* Navbar offset */
        }

        :global([data-theme="dark"]) .mot-page {
          background-color: #0f172a;
          color: #f8fafc;
        }

        .mot-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mot-relative {
          position: relative;
          z-index: 10;
        }

        /* Hero Section */
        .mot-hero {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }

        .mot-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(245, 130, 32, 0.2) 0%, #ffedd5 100%);
          z-index: 0;
        }

        :global([data-theme="dark"]) .mot-hero-bg {
          background: linear-gradient(135deg, rgba(245, 130, 32, 0.1) 0%, #0f172a 100%);
        }

        /* Blobs */
        .mot-blob {
          position: absolute;
          width: 256px;
          height: 256px;
          border-radius: 50%;
          filter: blur(64px);
          opacity: 0.3;
          z-index: 0;
          mix-blend-mode: multiply;
          animation: motBlobAnim 7s infinite alternate ease-in-out;
        }

        .mot-blob-1 {
          top: 80px;
          left: 40px;
          background-color: #fdba74;
        }

        .mot-blob-2 {
          top: 80px;
          right: 40px;
          background-color: #fde047;
          animation-delay: 2s;
        }

        @keyframes motBlobAnim {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(20px, 20px); }
        }

        .mot-hero-grid {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .mot-hero-grid {
            flex-direction: row;
          }
          .mot-hero-content, .mot-hero-visual {
            width: 50%;
          }
        }

        .mot-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #0f172a;
        }

        @media (min-width: 768px) {
          .mot-title {
            font-size: 4.5rem;
          }
        }

        :global([data-theme="dark"]) .mot-title {
          color: #ffffff;
        }

        .mot-text-orange { color: #f58220; }
        .mot-text-yellow { color: #eab308; }

        .mot-subtitle {
          font-size: 1.125rem;
          color: #475569;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .mot-subtitle { font-size: 1.25rem; }
        }

        :global([data-theme="dark"]) .mot-subtitle {
          color: #cbd5e1;
        }

        .mot-btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .mot-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-family: 'Inter', sans-serif;
        }

        .mot-btn-primary {
          background-color: #f58220;
          color: #ffffff;
        }

        .mot-btn-primary:hover {
          background-color: #ea580c;
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(245, 130, 32, 0.4);
        }

        .mot-btn-outline {
          background-color: #ffffff;
          color: #f58220;
          border: 1px solid #f58220;
        }

        :global([data-theme="dark"]) .mot-btn-outline {
          background-color: #1e293b;
        }

        .mot-btn-outline:hover {
          background-color: #fff7ed;
          transform: scale(1.05);
        }

        :global([data-theme="dark"]) .mot-btn-outline:hover {
          background-color: #334155;
        }

        .mot-btn-icon {
          width: 20px;
          height: 20px;
          margin-left: 8px;
        }

        .mot-btn-large {
          font-size: 1.125rem;
          padding: 16px 40px;
        }

        .mot-hero-visual {
          position: relative;
        }

        .mot-video-placeholder {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 4px solid #ffffff;
          aspect-ratio: 16 / 9;
          background-color: #1e293b;
        }

        :global([data-theme="dark"]) .mot-video-placeholder {
          border-color: #1e293b;
          background-color: #0f172a;
        }

        .mot-video-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mot-video-text {
          text-align: center;
          color: #94a3b8;
        }

        .mot-video-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 8px;
          opacity: 0.5;
        }

        /* Floating Stat */
        .mot-floating-stat {
          position: absolute;
          bottom: -24px;
          left: -24px;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        :global([data-theme="dark"]) .mot-floating-stat {
          background-color: rgba(30, 41, 59, 0.9);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .mot-stat-icon {
          background-color: #dcfce7;
          color: #16a34a;
          padding: 8px;
          border-radius: 50%;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mot-stat-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        :global([data-theme="dark"]) .mot-stat-title {
          color: #ffffff;
        }

        .mot-stat-desc {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
        }

        /* Generic Section */
        .mot-section {
          padding: 80px 0;
        }

        .mot-bg-white { background-color: #ffffff; }
        :global([data-theme="dark"]) .mot-bg-white { background-color: #1e293b; }

        .mot-bg-light { background-color: #f8fafc; }
        :global([data-theme="dark"]) .mot-bg-light { background-color: #0f172a; }

        .mot-section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .mot-section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .mot-section-header h2 { font-size: 2.5rem; }
        }

        :global([data-theme="dark"]) .mot-section-header h2 {
          color: #ffffff;
        }

        .mot-divider {
          width: 96px;
          height: 4px;
          background-color: #f58220;
          margin: 0 auto;
          border-radius: 4px;
        }

        /* Featured Stories Grid */
        .mot-stories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .mot-stories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .mot-story-card {
          cursor: pointer;
        }

        .mot-story-card:hover .mot-thumb-bg {
          transform: scale(1.1);
        }

        .mot-story-card:hover .mot-thumb-overlay {
          background-color: rgba(0, 0, 0, 0.4);
        }

        .mot-story-card:hover .mot-play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .mot-story-card:hover h3 {
          color: #f58220;
        }

        .mot-story-thumb {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          aspect-ratio: 16 / 9;
          margin-bottom: 16px;
        }

        .mot-thumb-bg {
          position: absolute;
          inset: 0;
          background-color: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }

        :global([data-theme="dark"]) .mot-thumb-bg {
          background-color: #334155;
        }

        .mot-thumb-bg span {
          color: #94a3b8;
        }

        .mot-thumb-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }

        .mot-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 64px;
          height: 64px;
          background-color: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mot-play-btn svg {
          width: 32px;
          height: 32px;
          color: #ffffff;
        }

        .mot-story-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        :global([data-theme="dark"]) .mot-story-card h3 {
          color: #ffffff;
        }

        .mot-story-card p {
          color: #475569;
          font-size: 0.875rem;
          margin: 0;
        }

        :global([data-theme="dark"]) .mot-story-card p {
          color: #94a3b8;
        }

        /* Categories Grid */
        .mot-categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (min-width: 768px) {
          .mot-categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .mot-cat-card {
          background-color: #ffffff;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global([data-theme="dark"]) .mot-cat-card {
          background-color: #1e293b;
          border-color: #334155;
        }

        .mot-cat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .mot-cat-icon {
          font-size: 2.25rem;
          margin-bottom: 16px;
        }

        .mot-cat-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        :global([data-theme="dark"]) .mot-cat-card h3 {
          color: #ffffff;
        }

        .mot-cat-card p {
          font-size: 0.875rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        :global([data-theme="dark"]) .mot-cat-card p {
          color: #94a3b8;
        }

        /* Quote Section */
        .mot-quote-section {
          position: relative;
          padding: 80px 0;
          background-color: #f58220;
          color: #ffffff;
          overflow: hidden;
        }

        .mot-quote-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);
          background-size: 32px 32px;
        }

        .mot-quote-content {
          max-width: 896px;
          margin: 0 auto;
          text-align: center;
        }

        .mot-quote-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 48px;
        }

        .mot-quote-box {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 40px;
          border-radius: 24px;
          backdrop-filter: blur(10px);
        }

        .mot-quote-mark {
          width: 48px;
          height: 48px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0 auto 24px;
        }

        .mot-quote-text {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .mot-quote-text { font-size: 1.875rem; }
        }

        .mot-quote-author {
          font-size: 1.125rem;
          font-weight: 700;
          color: #fed7aa;
          margin: 0;
        }

        /* CTA Section */
        .mot-cta-section {
          padding: 96px 0;
          background-color: #ffffff;
          text-align: center;
        }

        :global([data-theme="dark"]) .mot-cta-section {
          background-color: #0f172a;
        }

        .mot-cta-content {
          max-width: 768px;
          margin: 0 auto;
        }

        .mot-cta-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .mot-cta-content h2 { font-size: 3rem; }
        }

        :global([data-theme="dark"]) .mot-cta-content h2 {
          color: #ffffff;
        }

        .mot-cta-content p {
          font-size: 1.25rem;
          color: #475569;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        :global([data-theme="dark"]) .mot-cta-content p {
          color: #cbd5e1;
        }
      `}</style>
    </>
  );
}
