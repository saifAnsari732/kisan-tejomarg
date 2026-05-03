"use client";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-centered">
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow secondary"></div>
      <div className="hero-bg-glow tertiary"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-centered animate-fade-in">
          
          {/* <div className="hero-logo-mark" style={{ marginBottom: '1rem' }}>
            <img src="/Tejomarglogo.png" alt="Tejomarg Logo" style={{ height: '160px', width: 'auto', filter: 'drop-shadow(0 10px 20px rgba(255, 123, 0, 0.2))' }} />
          </div> */}

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
