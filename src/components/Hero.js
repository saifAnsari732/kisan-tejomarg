"use client";
import Link from 'next/link';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero-centered">
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow secondary"></div>
      <div className="hero-bg-glow tertiary"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-centered animate-fade-in">
          
          <h1 className="hero-main-title">
            {t.title}
          </h1>
          <p className="hero-description" style={{ fontSize: '1.25rem', maxWidth: '850px' }}>
            {t.subtitle}
          </p>

          <div className="hero-buttons">
            <Link href="#about" className="btn btn-primary btn-pil">
              {t.cta_primary}
            </Link>
            <Link href="/our-mission" className="btn btn-outline btn-pil">
              {t.cta_secondary}
            </Link>
          </div>

          <div className="hero-trust-dots">
            <span><span className="dot"></span> {language === 'hi' ? 'सच्ची आवाज़ें' : 'Genuine Devotees'}</span>
            <span><span className="dot"></span> {language === 'hi' ? 'सरल ज्ञान' : 'Timeless Wisdom'}</span>
            <span><span className="dot"></span> {language === 'hi' ? 'सनातन संस्कृति' : 'Cultural Heritage'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

