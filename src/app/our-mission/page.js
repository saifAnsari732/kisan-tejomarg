"use client";
import '../components.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function OurMission() {
  return (
    <main className="bg-main min-h-screen">
      <Navbar />
      
      {/* Mission Hero Section with Background Image */}
      <section className="mission-hero-premium">
        <div className="mission-hero-overlay"></div>
        <div className="container relative z-10">
          <div className="mission-hero-content animate-fade-in text-center">
            <span className="hero-pill mb-6">Established with Devotion</span>
            <h1 className="mission-title-large">
              Our Spiritual <span>Journey</span>
            </h1>
            <p className="mission-subtitle-premium">
              Dedicated to preserving and spreading the light of Sanatan Dharma through modern digital wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section 1: The Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="mission-story-row">
            <div className="mission-story-text animate-fade-in">
              <span className="text-saffron font-bold tracking-widest uppercase text-sm">Vision</span>
              <h2 className="mb-6">Sowing Seeds of <span className="text-saffron">Wisdom</span></h2>
              <p className="mb-6 text-lg">
                तेजोमार्ग का जन्म एक सरल विचार से हुआ था: हमारी प्राचीन संस्कृति का प्रकाश हर घर तक पहुँचे। 
                हमारा विजन है कि हम तकनीक और परंपरा के बीच एक सेतु बनें।
              </p>
              <div className="mission-check-list">
                <div className="check-item">✨ Authentic Content from Shastras</div>
                <div className="check-item">✨ Modern Digital Accessibility</div>
                <div className="check-item">✨ Global Community Building</div>
              </div>
            </div>
            <div className="mission-story-image animate-fade-in delay-200">
              <img src="https://images.pexels.com/photos/2161432/pexels-photo-2161432.jpeg" alt="Temple" className="rounded-premium shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: Digital Reach (Reversed) */}
      <section className="section-padding bg-section-light">
        <div className="container">
          <div className="mission-story-row reverse">
            <div className="mission-story-image animate-fade-in">
              <img src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg" alt="Meditation" className="rounded-premium shadow-lg" />
            </div>
            <div className="mission-story-text animate-fade-in delay-200">
              <span className="text-saffron font-bold tracking-widest uppercase text-sm">Method</span>
              <h2 className="mb-6">Reaching the <span className="text-saffron">Youth</span></h2>
              <p className="text-lg">
                आधुनिक युग में सनातन धर्म की जड़ों से जुड़े रहना चुनौतीपूर्ण हो सकता है। 
                यूट्यूब और इंस्टाग्राम के माध्यम से हम युवाओं को उनकी जड़ों से जोड़ते हैं, 
                उन्हें वह ज्ञान देते हैं जो उन्हें जीवन के हर मोड़ पर मार्गदर्शन प्रदान करता है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="section-padding impact-section">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-item">
              <h3>1M+</h3>
              <p>Soul Connections</p>
            </div>
            <div className="impact-item">
              <h3>500+</h3>
              <p>Sacred Videos</p>
            </div>
            <div className="impact-item">
              <h3>100+</h3>
              <p>Aarti & Bhajans</p>
            </div>
            <div className="impact-item">
              <h3>Global</h3>
              <p>Reach across 20+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="section-padding text-center bg-gradient-saffron text-white">
        <div className="container">
          <h2 className="quote-text mb-8 text-white">"हर कर्म में धर्म, हर शब्द में सत्य"</h2>
          <p className="max-w-2xl mx-auto opacity-90 text-lg italic">
            - Join us in our mission to enlighten the world with the power of Tejomarg.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
