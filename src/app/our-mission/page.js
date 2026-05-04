"use client";
import '../components.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export default function OurMission() {
  const { language } = useLanguage();
  const t = translations[language].about_us;

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
              {t.title}
            </h1>
            <p className="mission-subtitle-premium">
              {t.content}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section 1: The Team */}
      <section className="section-padding">
        <div className="container">
          <div className="mission-story-row">
            <div className="mission-story-text animate-fade-in">
              <span className="text-saffron font-bold tracking-widest uppercase text-sm">{language === 'hi' ? 'हमारी टीम' : 'Our Team'}</span>
              <h2 className="mb-6">{language === 'hi' ? 'परंपरा और तकनीक का' : 'Balance of Tradition and'} <span className="text-saffron">{language === 'hi' ? 'सामंजस्य' : 'Technology'}</span></h2>
              <p className="mb-6 text-lg">
                {t.team}
              </p>
            </div>
            <div className="mission-story-image animate-fade-in delay-200">
              <img src="https://images.pexels.com/photos/2161432/pexels-photo-2161432.jpeg" alt="Temple" className="rounded-premium shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
             <div className="modern-card">
               <h3 className="text-saffron mb-4">{t.mission.title}</h3>
               <p className="text-lg">{t.mission.desc}</p>
             </div>
             <div className="modern-card">
               <h3 className="text-saffron mb-4">{t.vision.title}</h3>
               <p className="text-lg">{t.vision.desc}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="section-padding text-center bg-gradient-saffron text-white">
        <div className="container">
          <h2 className="quote-text mb-8 text-white">{language === 'hi' ? '"हर कर्म में धर्म, हर शब्द में सत्य"' : '"Dharma in every action, Truth in every word"'}</h2>
          <p className="max-w-2xl mx-auto opacity-90 text-lg italic">
            {language === 'hi' ? '- तेजोमार्ग की शक्ति के साथ विश्व को आलोकित करने के हमारे मिशन में शामिल हों।' : '- Join us in our mission to enlighten the world with the power of Tejomarg.'}
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
