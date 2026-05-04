"use client";

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function AboutMission() {
  const { language } = useLanguage();
  const t = translations[language].philosophy;
  const pillars = translations[language].pillars;

  return (
    <section id="about" className="section-padding alt-section">
      <div className="container">
        <span className="hero-pill mb-4">{t.section_tag}</span>
        <h2 className="section-title text-left" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{t.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <p className="text-lg" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            {t.description}
          </p>
          <p className="text-muted" style={{ fontSize: '1.1rem', borderLeft: '4px solid var(--primary-saffron)', paddingLeft: '2rem' }}>
            {t.detailed}
          </p>
        </div>
        
        <h2 className="section-title" style={{ marginTop: '4rem' }}>{pillars.title}</h2>
        <div className="card-grid">
          <div className="modern-card animate-fade-in">
            <h3 className="text-saffron">{pillars.p1.title}</h3>
            <p>{pillars.p1.desc}</p>
          </div>
          
          <div className="modern-card animate-fade-in delay-100">
            <h3 className="text-saffron">{pillars.p2.title}</h3>
            <p>{pillars.p2.desc}</p>
          </div>
          
          <div className="modern-card animate-fade-in delay-200">
            <h3 className="text-saffron">{pillars.p3.title}</h3>
            <p>{pillars.p3.desc}</p>
          </div>

          <div className="modern-card animate-fade-in delay-300">
            <h3 className="text-saffron">{pillars.p4.title}</h3>
            <p>{pillars.p4.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
