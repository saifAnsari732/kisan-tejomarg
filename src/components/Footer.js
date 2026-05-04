"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-area">
            <div className="footer-logo-wrapper">
              <img src="/Tejomarglogo.png" alt="Tejomarg Logo" />
            </div>
            <p className="footer-desc" style={{ fontWeight: '700', color: 'var(--primary-saffron)', marginTop: '1rem' }}>
              {t.tagline}
            </p>
            <p className="footer-desc">
              {t.final_thought}
            </p>
          </div>
          
          <div className="footer-links">
            <h4>{language === 'hi' ? 'महत्वपूर्ण लिंक' : 'Quick Links'}</h4>
            <ul>
              <li><Link href="/">{t.links.home}</Link></li>
              <li><Link href="/#about">{t.links.about}</Link></li>
              <li><Link href="/our-mission">{t.links.articles}</Link></li>
              <li><Link href="#">{t.links.privacy}</Link></li>
              <li><Link href="#">{t.links.terms}</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>{language === 'hi' ? 'हमसे जुड़ें' : 'Connect With Us'}</h4>
            <div className="social-links">
              <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">📺</span>
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">📸</span>
                <span>Instagram</span>
              </a>
              <a href="mailto:tejomarg9@gmail.com" className="social-item">
                <span className="social-icon">✉️</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tejomarg (तेजोमार्ग). Crafted with ❤️ for Sanatan Dharma.</p>
        </div>
      </div>
    </footer>
  );
}
