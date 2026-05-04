"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/Tejomarglogo.png" alt="Tejomarg Logo" style={{ height: '80px' }} />
        </Link>
        
        {/* Desktop Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.home}</Link>
          <Link href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
          <Link href="/our-mission" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.mission}</Link>
          <Link href="/#voices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.TrueVoices}</Link>
          <Link href="/#img" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.Images}</Link>
          
          {/* Mobile Actions */}
          <div className="mobile-only-actions" style={{ display: 'none', gap: '1rem', marginTop: '1rem' }}>
             <button onClick={toggleLanguage} className="lang-toggle-btn">
               {language === 'hi' ? 'English' : 'हिंदी'}
             </button>
          </div>

          <div className="mobile-socials">
            <Link href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              YouTube
            </Link>
            <Link href="https://www.instagram.com/tejomarg/reels/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Instagram
            </Link>
          </div>
        </div>
        
        <div className="nav-actions">
          <button onClick={toggleLanguage} className="lang-toggle-btn desktop-only">
            {language === 'hi' ? 'EN' : 'हिं'}
          </button>
          
          <ThemeToggle />
          
          <div className="social-icons">
            <Link href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              YouTube
            </Link>
            <Link href="https://www.instagram.com/tejomarg/reels/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Instagram
            </Link>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

