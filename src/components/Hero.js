"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SocialSidebar from './socialmediaicon';
import { useState } from 'react';
import ConnectModal from './ConnectModal';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  return (
    <section className="hero-centered">
      <SocialSidebar />
      
      {/* Optimized Background Images using next/image */}
      <div className="hero-bg hero-bg-light">
        <Image 
          src="/images/bannerl.webp" 
          alt="Tejomarg Light Background" 
          fill 
          priority 
          quality={75}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-bg-overlay hero-overlay-light"></div>
      </div>

      <div className="hero-bg hero-bg-dark">
        <Image 
          src="/images/dark.webp" 
          alt="Tejomarg Dark Background" 
          fill 
          priority 
          quality={75}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-bg-overlay hero-overlay-dark"></div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content-centered animate-fade-in">
          
          <div className="divine-badge">
            {language === 'hi' ? '॥ जय श्री राम ॥' : '॥ Jai Shree Ram ॥'}
          </div>

          {/* टाइटल यहाँ है */}
            <p className='text-7xl md:text-8xl font-black text-white tracking-widest' style={{ textShadow: '0 4px 25px rgba(231, 68, 9, 0.5)', fontFamily: 'serif' }}>तेजोमार्ग</p>
          <h1 className="hero-main-title">
            {t.title}
          </h1>

          <p className="hero-description">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 relative z-10 w-full px-4" style={{ gap: '20px' }}>
            <button 
              onClick={() => setIsConnectModalOpen(true)}
              style={{ padding: '16px 36px', borderRadius: '50px', background: 'linear-gradient(to right, #f97316, #f59e0b)', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', boxSizing: 'border-box' }}
            >
              Verticals
            </button>
            <Link 
              href="#about" 
              style={{ padding: '14px 32px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', boxSizing: 'border-box' }}
            >
              {t.cta_primary}
            </Link>
            <Link 
              href="/our-mission" 
              style={{ padding: '14px 32px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', boxSizing: 'border-box' }}
            >
              {t.cta_secondary}
            </Link>
          </div>
        </div>
      </div>
      <ConnectModal isOpen={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)} />

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
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-overlay-light {
          background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5));
        }

        .hero-overlay-dark {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
        }

        /* Light mode visibility */
        .hero-bg-light { display: block; }
        .hero-bg-dark { display: none; }

        /* Dark mode visibility */
        :global([data-theme="dark"]) .hero-bg-light { display: none; }
        :global([data-theme="dark"]) .hero-bg-dark { display: block; }

        /* --- टाइटल कलर लॉजिक --- */
        
        .hero-main-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.8rem, 8.5vw, 6rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1.8rem;
          transition: all 0.4s ease;
          padding-top: 15px;
          color: #ff9f00; 
          text-shadow: 3px 5px 20px rgba(0, 0, 0, 0.7);
        }

        /* डार्क मोड में Red */
        :global([data-theme="dark"]) .hero-main-title {
          color: #ff3333;
          text-shadow: 0 0 30px rgba(255, 51, 51, 0.6);
        }

        /* ----------------------- */

        .divine-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(255, 69, 0, 0.25) 0%, rgba(255, 140, 0, 0.25) 100%);
          backdrop-filter: blur(8px);
          color: #ffe0b2;
          padding: 10px 30px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          border: 1px solid rgba(255, 204, 128, 0.4);
          margin-bottom: 2.5rem;
          letter-spacing: 1.5px;
          box-shadow: 0 4px 15px rgba(255, 69, 0, 0.15);
        }

        .hero-description {
          font-size: 1.45rem;
          color: #ffffff;
          max-width: 900px;
          margin: 0 auto 3.5rem auto;
          line-height: 1.65;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.95);
        }

        /* Hero buttons styling handled by Tailwind CSS */
      `}</style>
    </section>
  );
}