"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import ConnectModal from './ConnectModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  // WhatsApp number (अपना नंबर यहाँ डालें)
  const whatsappNumber = "+919511150925"; // देश कोड सहित (भारत के लिए 91)
  const whatsappMessage = "नमस्ते! मुझे Tejomarg के बारे में अधिक जानकारी चाहिए।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
          <img src="/Tejomarglogo.png" alt="Tejomarg Logo" style={{ height: '70px' }} />
        <h1 className='text-2xl font-semibold text-saffron'>तेजोमार्ग</h1>
        </Link>
        
        {/* Desktop Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.home}</Link>
          <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
          <Link href="/our-mission" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.mission}</Link>
          <Link href="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{language === 'hi' ? 'सेवाएँ' : 'Services'}</Link>
          <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.contact}</Link>
          <Link href="/#voices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.TrueVoices}</Link>
          
          {/* Mobile Actions */}
       
        </div>
        
        <div className="nav-actions">
          <button onClick={toggleLanguage} className="lang-toggle-btn desktop-only">
            {language === 'hi' ? 'EN' : 'हिं'}
          </button>
          
          <ThemeToggle />
          
          <div className="social-icons" style={{ alignItems: 'center' }}>
            
            <button 
              onClick={() => setIsConnectModalOpen(true)}
              className="btn btn-primary desktop-only"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '50px', padding: '0.5rem 1.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Connect
            </button>
           
            {/* WhatsApp Link for Desktop */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '50px', padding: '0.5rem 1.5rem' }}
            >
             
              <FaWhatsapp size={30} className='text-3xl'  style={{color:'green' }} /> WhatsApp
            </a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      <ConnectModal isOpen={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)} />
    </nav>
  );
}