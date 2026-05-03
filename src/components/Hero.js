"use client";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-centered">
      <div className="hero-bg-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-centered animate-fade-in">
          
          <div className="hero-logo-mark">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="bird-icon">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <h2 className="hero-brand-name">Tejomarg (तेजोमार्ग)</h2>
          </div>

          <h1 className="hero-main-title">
            सनातन धर्म और संस्कृति का एक आध्यात्मिक मंच
          </h1>
          <h3 className="hero-sub-title">
            सच्चा ज्ञान, सच्ची आवाज़ें, और हमारी परंपरा
          </h3>
          <p className="hero-description">
            हमारा उद्देश्य शास्त्रों, संतों और परंपराओं के अमूल्य ज्ञान को सरल और प्रभावी रूप में प्रस्तुत करना है। जहां सनातन धर्म का शाश्वत ज्ञान जीवन के हर पहलू को प्रकाशित करता है।
          </p>

          <div className="hero-buttons">
            <Link href="#about" className="btn btn-primary btn-pill">
              Join the Movement
            </Link>
            <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-pill">
              Explore Wisdom
            </a>
          </div>

          <div className="hero-trust-dots">
            <span><span className="dot"></span> सच्ची आवाज़ें (Genuine Devotees)</span>
            <span><span className="dot"></span> सरल ज्ञान (Timeless Wisdom)</span>
            <span><span className="dot"></span> सनातन संस्कृति (Cultural Heritage)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
