"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SocialSidebar from './socialmediaicon';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero-centered">
      <SocialSidebar />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content-centered animate-fade-in">
          
          <div className="divine-badge">
            {language === 'hi' ? '॥ जय श्री राम ॥' : '॥ Jai Shree Ram ॥'}
          </div>

          {/* टाइटल यहाँ है */}
            <p className='text-7xl font-semibold text-white '>तेजोमार्ग</p>
          <h1 className="hero-main-title">
            {t.title}
          </h1>

          <p className="hero-description">
            {t.subtitle}
          </p>

          <div className="hero-buttons">
            <Link href="#about" className="btn btn-primary btn-pill">
              {t.cta_primary}
            </Link>
            <Link href="/our-mission" className="btn btn-primary btn-pill">
              {t.cta_secondary}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-centered {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10rem 1rem;
             width: 100%;
             height: 100%;
          overflow: hidden;
          transition: all 0.5s ease;
          
          /* लाइट मोड बैकग्राउंड (image_0103d9.jpg जैसा इफ़ेक्ट) */
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/images/DFG.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        /* डार्क मोड बैकग्राउंड */
        :global([data-theme="dark"]) .hero-centered {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/dark.jpeg');
        }

        /* --- टाइटल कलर लॉजिक --- */
        
        .hero-main-title {
          font-family: "Playfair Display", serif;
          // font-size: clamp(2.2rem, 6vw, 4.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          transition: color 0.4s ease;
           padding-top: 30px;
          /* लाइट मोड में Yellow */
          // color: #ff9f00; 
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* डार्क मोड में Red */
        :global([data-theme="dark"]) .hero-main-title {
          color: #FF3131;
          text-shadow: 0 0 20px rgba(255, 49, 49, 0.4);
        }

        /* ----------------------- */

        .divine-badge {
          display: inline-block;
          background: rgba(255, 123, 0, 0.2);
          backdrop-filter: blur(8px);
          color: #ffcc80;
          padding: 8px 25px;
          border-radius: 50px;
          font-weight: 700;
          border: 1px solid rgba(255, 204, 128, 0.3);
          margin-bottom: 2rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #ffffff;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn-pill {
          border-radius: 50px !important;
          padding: 1rem 2.5rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff7b00, #ffb700);
          border: none;
          color: white;
        }

        .btn-outline {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid white;
          color: white;
        }

        @media (max-width: 768px) {
          .hero-buttons { flex-direction: column; align-items: center; }
          .btn-pill { width: 85%; }
        }
      `}</style>
    </section>
  );
}