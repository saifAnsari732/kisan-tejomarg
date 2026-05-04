"use client";

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function TrueVoices() {
  const { language } = useLanguage();
  const t = translations[language].voices;

  return (
    <section id="voices" className="section-padding light-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="hero-grid" style={{ marginTop: '3rem' }}>
          <div className="hero-image-wrapper animate-fade-in">
            <img src="/images/sadhu.png" alt="Genuine devotee in meditation" />
          </div>
          
          <div className="modern-card animate-fade-in delay-100">
            <span className="card-pill">{t.tag}</span>
            <h3 className="text-saffron" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{t.heading}</h3>
            <blockquote style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-saffron)', paddingLeft: '1rem' }}>
              "{t.quote}"
            </blockquote>
            <p style={{ marginBottom: '2rem' }}>
              {t.content}
            </p>
            <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
