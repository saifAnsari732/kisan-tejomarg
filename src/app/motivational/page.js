"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaBriefcase, FaSeedling, FaHandshake, FaStar, FaBullseye, FaEye, FaRocket, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MotivationalPage() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

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

  const storiesCategories = [
    { title: "Everyday Heroes", subtitle: "The backbone of every city, town, and village.", list: ["Auto and taxi drivers", "Rickshaw pullers", "Street vendors", "Tea stall owners", "Food cart operators", "Delivery partners", "Shopkeepers", "Small traders", "Skilled workers"], icon: <FaUsers /> },
    { title: "Entrepreneurs & Small Business", subtitle: "The dreamers and builders of local economies.", list: ["Startup founders", "Small business owners", "Family-run businesses", "Independent professionals", "Local entrepreneurs", "Self-made business leaders"], icon: <FaBriefcase /> },
    { title: "Rural India & Traditional", subtitle: "The voices that represent India's roots and traditions.", list: ["Farmers", "Artisans", "Craftsmen", "Village entrepreneurs", "Traditional workers", "Rural innovators"], icon: <FaSeedling /> },
    { title: "Change Makers & Leaders", subtitle: "Individuals making a positive impact in society.", list: ["Teachers", "Social workers", "Volunteers", "Community organizers", "Youth leaders", "Grassroots innovators"], icon: <FaHandshake /> },
    { title: "Courage & Transformation", subtitle: "Life-changing journeys that inspire hope.", list: ["People overcoming adversity", "Financial struggle to success", "Personal transformation", "Resilience and perseverance", "Inspirational life experiences"], icon: <FaStar /> }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Auto Driver", text: "\"For the first time, someone asked about my journey rather than just my profession. Tejomarg gave me an opportunity to share my struggles and achievements with people who would otherwise never know my story.\"" },
    { name: "Sunita Devi", role: "Street Food Vendor", text: "\"I never imagined that my small food stall and life journey could inspire others. The Tejomarg team treated my story with respect and helped me share my experiences with a wider audience.\"" },
    { name: "Amit Verma", role: "Small Business Owner", text: "\"The conversation felt natural and genuine. Tejomarg focuses on real people and real experiences, which makes every story meaningful and relatable.\"" },
    { name: "Neha Sharma", role: "Viewer", text: "\"Watching Tejomarg Real Talk changed my perspective. These stories remind us that inspiration exists all around us, not only in famous personalities.\"" },
    { name: "Rakesh Singh", role: "Farmer", text: "\"Our voices are rarely heard outside our villages. Tejomarg gave me a platform to share the realities, challenges, and hopes of farming life.\"" }
  ];

  return (
    <>
      <Navbar />
      <div className="mot-page">
        {/* Premium Hero Section */}
        <section className="mot-hero">
          <div className="mot-hero-bg"></div>
          <div className="mot-hero-overlay"></div>

          <div className="mot-container mot-relative h-full flex items-center">
            <div className="mot-hero-grid">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mot-hero-visual"
              >
                <div className="mot-hero-collage">
                  <div className="mot-collage-main">
                    <Image src="/images/resilience_thumb.webp" alt="Resilience" fill style={{ objectFit: 'cover' }} className="mot-rounded-img shadow-xl" priority />
                  </div>
                  <div className="mot-collage-side">
                    <div className="mot-collage-img">
                      <Image src="/images/focus_thumb.webp" alt="Focus" fill style={{ objectFit: 'cover' }} className="mot-rounded-img shadow-lg" priority />
                    </div>
                    <div className="mot-collage-img">
                      <Image src="/images/inner_peace_thumb.webp" alt="Inner Peace" fill style={{ objectFit: 'cover' }} className="mot-rounded-img shadow-lg" priority />
                    </div>
                  </div>
                  
                  <div className="mot-image-glass-card">
                    <div className="flex items-center gap-4">
                      <div className="mot-glass-icon"><FaStar className="text-yellow-400" /></div>
                      <div>
                        <p className="mot-glass-title">1M+ Views</p>
                        <p className="mot-glass-desc">Inspiring millions everyday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mot-hero-content"
              >
                <div className="mot-badge">Tejomarg Real Talk</div>
                <h1 className="mot-title">
                  Real People.<br />
                  <span className="mot-text-gradient">Real Stories.</span><br />
                  Real Inspiration.
                </h1>
                <p className="mot-hero-desc">
                  In today's world, most stories that reach millions of people belong to celebrities, influencers, politicians, and public figures. Yet beyond the headlines and social media trends exists another world—one filled with extraordinary stories hidden within ordinary lives.
                </p>
                <div className="mot-btn-group">
                  <button className="mot-btn mot-btn-primary">
                    <FaPlay className="mr-2" /> Watch Stories
                  </button>
                  <button className="mot-btn mot-btn-outline">
                    Explore Categories
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Untold Stories Section (Moved text from hero to here) */}
        <section className="mot-section mot-bg-light">
          <div className="mot-container">
            <div className="mot-split-grid">
              <motion.div 
                {...fadeInUp}
                className="mot-split-image"
              >
                <Image src="/images/sadhu.webp" alt="Authentic Stories" fill style={{ objectFit: 'cover' }} className="rounded-3xl shadow-xl" />
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                className="mot-split-content"
              >
                <h2 className="mot-section-title">The Untold Stories</h2>
                <div className="mot-divider-left"></div>
                <p className="mot-text-lg">Every day, millions of people wake up before sunrise, work tirelessly, overcome hardships, support their families, and contribute to society without recognition or applause.</p>
                <p className="mot-text-base">Their journeys are filled with courage, sacrifice, resilience, hope, and wisdom. Unfortunately, their stories often remain unheard.</p>
                <div className="mot-highlight-box">
                  <p>Tejomarg Real Talk was created to change that.</p>
                </div>
                <p className="mot-text-base">We believe that every individual has a story worth telling and every life carries lessons that can inspire others. Whether it is an auto driver navigating life's challenges, a street food vendor building a livelihood from scratch, a farmer working against unpredictable conditions, a teacher shaping future generations, or a small business owner pursuing a dream against all odds—these stories deserve a platform.</p>
                <p className="mot-text-bold">Tejomarg Real Talk is dedicated to documenting, preserving, and sharing these authentic human experiences with the world.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Purpose & Different */}
        <section className="mot-section mot-bg-white">
          <div className="mot-container">
            <div className="mot-grid-2">
              <motion.div {...fadeInUp} className="mot-info-card mot-card-hover">
                <div className="mot-info-icon"><FaBullseye /></div>
                <h3>Our Purpose</h3>
                <p><strong>To give a voice to the unheard and bring the stories of everyday people to the forefront of society.</strong></p>
                <p>We are committed to showcasing the lives, experiences, challenges, achievements, and perspectives of individuals whose contributions often go unnoticed but whose journeys have the power to inspire countless others.</p>
                <p>Through meaningful conversations and genuine storytelling, we seek to build a deeper understanding of humanity and create connections that transcend social status, profession, religion, geography, and background.</p>
              </motion.div>
              <motion.div {...fadeInUp} className="mot-info-card mot-card-hover">
                <div className="mot-info-icon"><FaStar /></div>
                <h3>What Makes Us Different?</h3>
                <p>Unlike traditional media that often focuses on fame, controversy, or sensationalism, Tejomarg Real Talk focuses on authenticity.</p>
                <p><strong>We are not searching for celebrities. We are searching for stories.</strong></p>
                <p>We believe that inspiration can come from a tea seller who built a successful business through determination, a laborer who never gave up despite hardships, a mother who sacrificed everything for her children, or a farmer who continues to persevere through uncertainty.</p>
                <p>Our conversations are honest, respectful, and centered around real-life experiences. Every episode aims to answer one important question:<br/><br/><em>"What can we learn from the life journey of an ordinary person?"</em></p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stories We Cover */}
        <section className="mot-section mot-bg-light mot-relative">
          <div className="mot-pattern-bg"></div>
          <div className="mot-container mot-relative">
            <motion.div {...fadeInUp} className="mot-section-header text-center">
              <h2 className="mot-section-title">Stories We Cover</h2>
              <div className="mot-divider mx-auto"></div>
              <p className="mot-section-subtitle">Categories of inspiring journeys we bring to light</p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mot-categories-grid"
            >
              {storiesCategories.map((cat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="mot-cat-card"
                >
                  <div className="mot-cat-icon-wrapper">
                    <div className="mot-cat-icon">{cat.icon}</div>
                  </div>
                  <h3>{cat.title}</h3>
                  <p className="mot-cat-subtitle">{cat.subtitle}</p>
                  <ul className="mot-cat-list">
                    {cat.list.map((item, i) => (
                      <li key={i}>
                        <span className="mot-list-bullet"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision, Mission, Approach */}
        <section className="mot-section mot-bg-dark text-white">
          <div className="mot-container">
            <div className="mot-grid-3">
              <motion.div {...fadeInUp} className="mot-core-card mot-dark-card">
                <div className="mot-core-icon text-orange-400"><FaEye /></div>
                <h3 className="text-white">Our Storytelling Approach</h3>
                <p className="text-gray-300">At Tejomarg Real Talk, we believe every story should be told with dignity and respect. Our team travels to communities, marketplaces, villages, temples, businesses, and neighborhoods to connect directly with people.</p>
                <ul className="text-gray-300 mt-4 space-y-2">
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> We listen before we speak.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> We understand before we judge.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> We document stories as they are—not as they are expected to be.</li>
                </ul>
              </motion.div>

              <motion.div {...fadeInUp} className="mot-core-card mot-dark-card">
                <div className="mot-core-icon text-orange-400"><FaBullseye /></div>
                <h3 className="text-white">Our Vision</h3>
                <p className="text-gray-300">To become India's most trusted platform for authentic human storytelling, where every individual—regardless of status, profession, or background—has an opportunity to share their journey with the world.</p>
                <p className="text-gray-300 mt-4">We envision a society where inspiration is discovered not only in famous personalities but also in the everyday heroes whose dedication, values, and perseverance shape our communities.</p>
              </motion.div>

              <motion.div {...fadeInUp} className="mot-core-card mot-dark-card">
                <div className="mot-core-icon text-orange-400"><FaRocket /></div>
                <h3 className="text-white">Our Mission</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> To discover and share inspiring human stories.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> To amplify voices that often go unheard.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> To celebrate the dignity of honest work.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> To preserve local culture, wisdom, and experiences.</li>
                  <li className="flex items-start"><span className="text-orange-400 mr-2">✓</span> To inspire future generations through real-life examples.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why These Stories Matter */}
        <section className="mot-quote-section">
          <div className="mot-container">
            <div className="mot-quote-layout">
              <motion.div {...fadeInUp} className="mot-quote-text-side">
                <h2>Why These Stories Matter</h2>
                <div className="mot-divider-left bg-white"></div>
                <p className="mot-quote-main-text">
                  "Every person has dreams. Every person faces challenges. Every person carries lessons learned through life."
                </p>
                <p className="mot-quote-desc">
                  Yet many of these experiences never leave the boundaries of a neighborhood, village, workplace, or family. By sharing these stories, we create opportunities for learning, inspiration, and connection.
                </p>
                <div className="mot-quote-highlight">
                  These stories remind us that success is not always measured by fame or wealth—it is often measured by character, courage, and commitment.
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="mot-quote-image-side">
                <div className="mot-image-wrapper">
                  <Image src="/images/team.webp" alt="Impact" fill style={{ objectFit: 'cover' }} className="rounded-3xl shadow-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mot-section mot-bg-light">
          <div className="mot-container">
            <motion.div {...fadeInUp} className="mot-section-header text-center">
              <h2 className="mot-section-title">Testimonials</h2>
              <div className="mot-divider mx-auto"></div>
              <p className="mot-section-subtitle">What people are saying about Tejomarg Real Talk</p>
            </motion.div>

            <div className="mot-slider-wrapper">
              <button className="mot-slider-btn mot-slider-prev" onClick={scrollLeft} aria-label="Previous">
                <FaChevronLeft />
              </button>
              
              <div className="mot-testimonials-slider" ref={sliderRef}>
                {testimonials.map((test, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="mot-test-card"
                  >
                    <div className="mot-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="mot-test-text">{test.text}</p>
                    <div className="mot-test-author">
                      <strong>{test.name}</strong>
                      <span>{test.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="mot-slider-btn mot-slider-next" onClick={scrollRight} aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mot-cta-section">
          <div className="mot-container">
            <motion.div {...fadeInUp} className="mot-cta-box">
              <h2>Join the Movement</h2>
              <p className="mot-cta-desc">
                Do you know someone with an inspiring story? Perhaps an auto driver, a tea seller, a teacher, a laborer, a small business owner, a farmer, or an individual whose journey deserves recognition.
              </p>
              <div className="mot-cta-highlight-text">
                We would love to hear their story.
              </div>
              <p className="mot-cta-desc-small">
                Together, let's create a platform where every voice matters, every journey is respected, and every story has the opportunity to inspire.
              </p>
              <button className="mot-btn mot-btn-primary mot-btn-large mt-8">
                Share a Story
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx global>{`
        /* Pure CSS Styling for Premium Motivational Page */
        .mot-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
          min-height: 100vh;
          padding-top: 80px; /* Navbar offset */
        }

        [data-theme="dark"] .mot-page {
          background-color: #0f172a;
          color: #f8fafc;
        }

        .mot-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mot-relative {
          position: relative;
          z-index: 10;
        }

        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .mr-2 { margin-right: 0.5rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .gap-4 { gap: 1rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        
        .text-white { color: #ffffff; }
        .text-gray-300 { color: #d1d5db; }
        .text-orange-400 { color: #fb923c; }
        .bg-white { background-color: #ffffff; }

        /* Premium Hero Section */
        .mot-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 60px 0;
          overflow: hidden;
        }

        .mot-hero-bg {
          position: absolute;
          inset: 0;
          background-color: #f8fafc;
          z-index: 0;
        }

        [data-theme="dark"] .mot-hero-bg {
          background-color: #0f172a;
        }

        .mot-hero-overlay {
          display: none;
        }

        .mot-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          z-index: 2;
          position: relative;
        }

        @media (min-width: 1024px) {
          .mot-hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
        }

        .mot-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(245, 130, 32, 0.1);
          color: #f58220;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 24px;
          border: 1px solid rgba(245, 130, 32, 0.2);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .mot-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #0f172a;
        }

        @media (min-width: 768px) {
          .mot-title { font-size: 4.5rem; }
        }
        @media (min-width: 1024px) {
          .mot-title { font-size: 5rem; }
        }

        [data-theme="dark"] .mot-title {
          color: #ffffff;
        }

        .mot-text-gradient {
          background: linear-gradient(to right, #f58220, #eab308);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mot-hero-desc {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 600px;
        }

        [data-theme="dark"] .mot-hero-desc {
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
          box-shadow: 0 10px 20px -10px rgba(245, 130, 32, 0.5);
        }

        .mot-btn-primary:hover {
          background-color: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 15px 25px -10px rgba(245, 130, 32, 0.6);
        }

        .mot-btn-outline {
          background-color: transparent;
          color: #0f172a;
          border: 2px solid #cbd5e1;
        }

        [data-theme="dark"] .mot-btn-outline {
          color: #f8fafc;
          border-color: #475569;
        }

        .mot-btn-outline:hover {
          background-color: rgba(245, 130, 32, 0.1);
          color: #f58220;
          border-color: #f58220;
        }

        .mot-hero-visual {
          position: relative;
          height: 100%;
          min-height: 400px;
          width: 100%;
          display: block;
        }
        
        .mot-hero-collage {
          display: flex;
          gap: 16px;
          height: 500px;
          width: 100%;
          position: relative;
        }

        .mot-collage-main {
          flex: 2;
          position: relative;
          height: 100%;
        }

        .mot-collage-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
        }

        .mot-collage-img {
          flex: 1;
          position: relative;
          height: 50%;
        }
        
        .mot-rounded-img {
          border-radius: 24px;
        }
        
        @media (max-width: 768px) {
          .mot-hero-collage {
            height: 350px;
          }
        }

        .mot-image-glass-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          padding: 20px 24px;
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.5);
          z-index: 10;
        }

        [data-theme="dark"] .mot-image-glass-card {
          background: rgba(30, 41, 59, 0.85);
          border-color: rgba(255,255,255,0.1);
        }

        .mot-glass-icon {
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        [data-theme="dark"] .mot-glass-icon { background: #0f172a; }

        .mot-glass-title {
          font-weight: 800;
          font-size: 1.25rem;
          color: #0f172a;
          margin: 0;
        }

        [data-theme="dark"] .mot-glass-title { color: #fff; }

        .mot-glass-desc {
          color: #64748b;
          font-size: 0.875rem;
          margin: 0;
        }

        /* Generic Section */
        .mot-section { padding: 96px 0; }
        
        .mot-bg-white { background-color: #ffffff; }
        [data-theme="dark"] .mot-bg-white { background-color: #1e293b; }

        .mot-bg-light { background-color: #f8fafc; }
        [data-theme="dark"] .mot-bg-light { background-color: #0f172a; }

        .mot-bg-dark { background-color: #0f172a; }
        [data-theme="dark"] .mot-bg-dark { background-color: #020617; }

        .mot-section-header { margin-bottom: 64px; }

        .mot-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .mot-section-title { font-size: 3rem; }
        }

        [data-theme="dark"] .mot-section-title { color: #ffffff; }

        .mot-section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          margin-top: 16px;
        }

        .mot-divider {
          width: 80px;
          height: 4px;
          background-color: #f58220;
          border-radius: 4px;
        }
        
        .mot-divider-left {
          width: 64px;
          height: 4px;
          background-color: #f58220;
          margin-bottom: 32px;
          border-radius: 4px;
        }

        /* Split Section */
        .mot-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .mot-split-grid {
            grid-template-columns: 1fr 1.2fr;
          }
        }

        .mot-split-image {
          position: relative;
          height: 600px;
          width: 100%;
        }
        
        @media (max-width: 1024px) {
          .mot-split-image {
             display: none;
          }
        }

        .mot-text-lg {
          font-size: 1.25rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        
        .mot-text-base {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .mot-text-bold {
          font-size: 1.125rem;
          color: #0f172a;
          line-height: 1.7;
          font-weight: 700;
          border-left: 4px solid #f58220;
          padding-left: 20px;
          margin-top: 32px;
        }

        [data-theme="dark"] .mot-text-lg,
        [data-theme="dark"] .mot-text-base { color: #cbd5e1; }
        [data-theme="dark"] .mot-text-bold { color: #f8fafc; }

        .mot-highlight-box {
          background: rgba(245, 130, 32, 0.1);
          padding: 24px;
          border-radius: 12px;
          margin: 32px 0;
          border-left: 4px solid #f58220;
        }

        .mot-highlight-box p {
          color: #ea580c;
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0;
        }

        /* Grids */
        .mot-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) { .mot-grid-2 { grid-template-columns: 1fr 1fr; } }

        .mot-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) { .mot-grid-3 { grid-template-columns: repeat(3, 1fr); } }

        /* Cards */
        .mot-info-card {
          background: #f8fafc;
          padding: 48px;
          border-radius: 24px;
          border: 1px solid #f1f5f9;
        }
        [data-theme="dark"] .mot-info-card {
          background: #0f172a;
          border-color: #1e293b;
        }

        .mot-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mot-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        }

        .mot-info-icon {
          font-size: 2.5rem;
          color: #f58220;
          margin-bottom: 24px;
        }

        .mot-info-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #0f172a;
        }
        [data-theme="dark"] .mot-info-card h3 { color: #f8fafc; }

        .mot-info-card p {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 16px;
          font-size: 1.125rem;
        }
        [data-theme="dark"] .mot-info-card p { color: #cbd5e1; }

        /* Categories Grid */
        .mot-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) { .mot-categories-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .mot-categories-grid { grid-template-columns: repeat(3, 1fr); } }

        .mot-cat-card {
          background-color: #ffffff;
          padding: 40px 32px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .mot-cat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: #f58220;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .mot-cat-card:hover::before { transform: scaleX(1); }
        .mot-cat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        [data-theme="dark"] .mot-cat-card {
          background-color: #1e293b;
          border-color: #334155;
        }

        .mot-cat-icon-wrapper {
          width: 72px;
          height: 72px;
          background: #fff7ed;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        [data-theme="dark"] .mot-cat-icon-wrapper { background: #0f172a; }

        .mot-cat-icon {
          font-size: 2.5rem;
          color: #f58220;
        }

        .mot-cat-card h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }
        [data-theme="dark"] .mot-cat-card h3 { color: #ffffff; }

        .mot-cat-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 24px !important;
          line-height: 1.5;
        }

        .mot-cat-list {
          color: #475569;
          font-size: 0.95rem;
        }
        [data-theme="dark"] .mot-cat-list { color: #cbd5e1; }

        .mot-cat-list li {
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
        }
        
        .mot-list-bullet {
          width: 6px;
          height: 6px;
          background-color: #f58220;
          border-radius: 50%;
          margin-top: 8px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        /* Core Dark Cards */
        .mot-dark-card {
          background: rgba(255,255,255,0.05);
          padding: 40px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .mot-dark-card h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .mot-core-icon {
          font-size: 3rem;
          margin-bottom: 24px;
        }

        /* Quote Section */
        .mot-quote-section {
          background: linear-gradient(135deg, #f58220 0%, #ea580c 100%);
          padding: 0;
          position: relative;
        }

        .mot-quote-layout {
          display: grid;
          grid-template-columns: 1fr;
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .mot-quote-layout { grid-template-columns: 1fr 1fr; }
        }

        .mot-quote-text-side {
          padding: 80px 24px;
          color: white;
        }

        @media (min-width: 1024px) {
          .mot-quote-text-side { padding: 120px 64px 120px 0; }
        }

        .mot-quote-text-side h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .mot-quote-main-text {
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 24px;
          font-style: italic;
        }

        .mot-quote-desc {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 32px;
          opacity: 0.9;
        }

        .mot-quote-highlight {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fffbeb;
          background: rgba(0,0,0,0.1);
          padding: 24px;
          border-radius: 16px;
          border-left: 4px solid #fff;
        }

        .mot-quote-image-side {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .mot-quote-image-side {
            display: block;
            position: relative;
            min-height: 100%;
          }
        }

        /* Testimonials Slider */
        .mot-slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .mot-testimonials-slider {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 24px;
          padding: 16px 0 32px 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
          width: 100%;
          scroll-behavior: smooth;
        }
        
        .mot-testimonials-slider::-webkit-scrollbar { display: none; }

        .mot-slider-btn {
          position: absolute;
          z-index: 10;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          font-size: 1.25rem;
        }

        [data-theme="dark"] .mot-slider-btn {
          background: #1e293b;
          border-color: #334155;
          color: #f8fafc;
        }

        .mot-slider-btn:hover {
          background: #f58220;
          color: #ffffff;
          border-color: #f58220;
          transform: scale(1.1);
        }

        .mot-slider-prev { left: -28px; }
        .mot-slider-next { right: -28px; }
        
        @media (max-width: 1024px) {
          .mot-slider-prev, .mot-slider-next { display: none; }
        }

        .mot-test-card {
          background: #ffffff;
          flex: 0 0 100%;
          scroll-snap-align: center;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          border: 1px solid #f1f5f9;
        }

        @media (min-width: 768px) { .mot-test-card { flex: 0 0 calc(50% - 12px); } }
        @media (min-width: 1024px) { .mot-test-card { flex: 0 0 calc(33.333% - 16px); } }

        [data-theme="dark"] .mot-test-card {
          background: #1e293b;
          border-color: #334155;
        }

        .mot-stars {
          display: flex;
          gap: 4px;
          color: #fbbf24;
          font-size: 1.25rem;
          margin-bottom: 24px;
        }

        .mot-test-text {
          font-size: 1.125rem;
          color: #475569;
          font-style: italic;
          line-height: 1.7;
          flex-grow: 1;
          margin-bottom: 32px;
        }

        [data-theme="dark"] .mot-test-text { color: #cbd5e1; }

        .mot-test-author { display: flex; flex-direction: column; }
        .mot-test-author strong { color: #0f172a; font-size: 1.125rem; font-weight: 700; }
        [data-theme="dark"] .mot-test-author strong { color: #f8fafc; }
        .mot-test-author span { color: #64748b; font-size: 0.875rem; margin-top: 4px; }

        /* CTA Section */
        .mot-cta-section {
          padding: 120px 0;
          background-color: #ffffff;
          text-align: center;
        }
        [data-theme="dark"] .mot-cta-section { background-color: #0f172a; }

        .mot-cta-box {
          max-width: 800px;
          margin: 0 auto;
          background: #f8fafc;
          padding: 64px 40px;
          border-radius: 32px;
          border: 1px solid #f1f5f9;
        }
        [data-theme="dark"] .mot-cta-box {
          background: #1e293b;
          border-color: #334155;
        }

        .mot-cta-box h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }
        [data-theme="dark"] .mot-cta-box h2 { color: #ffffff; }

        .mot-cta-desc {
          font-size: 1.125rem;
          color: #475569;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        [data-theme="dark"] .mot-cta-desc { color: #cbd5e1; }

        .mot-cta-highlight-text {
          font-size: 2rem;
          font-weight: 800;
          color: #f58220;
          margin-bottom: 32px;
          font-family: 'Playfair Display', serif;
        }

        .mot-cta-desc-small {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
