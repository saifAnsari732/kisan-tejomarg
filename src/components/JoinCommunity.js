"use client";

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function JoinCommunity() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const socials = [
    { name: "YouTube", url: "https://www.youtube.com/@Tejomarg", icon: "youtube", color: "#FF0000" },
    { name: "Instagram", url: "https://www.instagram.com/tejomarg/", icon: "instagram", color: "#E4405F" },
    { name: "Facebook", url: "https://www.facebook.com/tejomarg/", icon: "facebook", color: "#1877F2" },
    { name: "Twitter", url: "https://x.com/tejomarg", icon: "twitter", color: "#1DA1F2" },
    { name: "Pinterest", url: "https://in.pinterest.com/tejomarg/", icon: "pinterest", color: "#BD081C" },
  ];

  return (
    <section className="section-padding community-section">
      <div className="container">
        <div className="join-community-card glass-effect animate-fade-in">
          <div className="join-content text-center">
            <span className="hero-pill mb-4">{t.invitation}</span>
            <h2 className="section-title-large mb-6">{language === 'hi' ? 'हमारे साथ जुड़ें' : 'Connect With Us'}</h2>
            <p className="text-muted text-lg mb-4 max-w-2xl mx-auto">
              {t.desc}
            </p>
            <p className="text-saffron font-bold text-xl mb-10">
              {t.email}
            </p>
            
            <div className="social-pill-grid">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill-item"
                >
                  <span className="social-dot" style={{ background: social.color }}></span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
