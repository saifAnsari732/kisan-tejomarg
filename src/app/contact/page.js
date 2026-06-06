"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { submitContact } from '../../actions/contactAction';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaClock, 
  FaUserAlt,
  FaYoutube,
  FaInstagram,
  FaGlobe,
  FaArrowRight,
  FaRegHeart
} from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineMail } from 'react-icons/hi';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const form = new FormData(e.target);
      const res = await submitContact(form);

      if (res.success) {
        setStatus({ type: 'success', message: '✨ संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: res.message || '⚠️ संदेश भेजने में विफल। कृपया पुनः प्रयास करें।' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/5starlaptopadda/' },
    { name: 'Email', icon: HiOutlineMail, url: 'mailto:tejomarg9@gmail.com' },
  ];

  const quickLinks = [
    { name: 'हमारे बारे में', href: '/about' },
    { name: 'शोध लेख', href: '/research' },
    { name: 'सेवाएं', href: '/services' },
    { name: 'संपर्क', href: '/contact' },
  ];

  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>

          <div className="hero-content">
            <div className="hero-badge">
              <HiOutlineSparkles />
              <span>संपर्क करें</span>
            </div>
            
            <h1 className="hero-title">हमसे संपर्क करें</h1>
            <div className="hero-divider"></div>
            
            <p className="hero-description">
              यदि आप तेजोमार्ग की शिक्षाओं से प्रेरित हैं और किसी भी रूप में हमारे साथ सहयोग देना चाहते हैं, तो आपका स्वागत है।
            </p>
            
            <div className="hero-tag">
              <FaRegHeart />
              <span>लेखक, कलाकार या शोधकर्ता के रूप में जुड़ें</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="main-content">
          <div className="content-grid">
            
            {/* Left Column - Contact Form */}
            <div className="form-column">
              <div className="contact-form-card">
                <h2 className="form-title">हमें संदेश भेजें</h2>
                <p className="form-subtitle">अपनी बात हमसे साझा करें। हम 24-48 घंटे में उत्तर देंगे।</p>

                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>आपका नाम <span className="required">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="राम कुमार"
                    />
                  </div>

                  <div className="form-group">
                    <label>आपका ईमेल <span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>आपका संदेश <span className="required">*</span></label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="यहाँ अपना संदेश लिखें..."
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        भेजा जा रहा है...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        संदेश भेजें
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="info-column">
              {/* संपर्क जानकारी */}
              <div className="info-card">
                <h2 className="info-title">
                  <div className="title-bar"></div>
                  संपर्क जानकारी
                </h2>
                
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-details">
                      <p className="contact-label">ईमेल</p>
                      <a href="mailto:tejomarg9@gmail.com">tejomarg9@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-details">
                      <p className="contact-label">फोन</p>
                      <a href="tel:+919450422087">+91 94504 22087</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-details">
                      <p className="contact-label">स्थान</p>
                      <p>नौका विहार के सामने ताल बाज़ार के अंदर</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Cards Grid */}
              <div className="info-grid">
                <div className="info-small-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <p className="info-label">प्रतिक्रिया समय</p>
                  <p className="info-value">24/7 घंटे</p>
                </div>
                
                <div className="info-small-card">
                  <div className="info-icon">
                    <FaUserAlt />
                  </div>
                  <p className="info-label">जुड़ने का तरीका</p>
                  <p className="info-value-small">लेखक / कलाकार</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-card">
                <h3>हमसे जुड़ें</h3>
                <div className="social-links">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.name}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="quick-links-card">
                <h3>
                  <FaGlobe />
                  महत्वपूर्ण लिंक
                </h3>
                <div className="quick-links">
                  {quickLinks.map((link, idx) => (
                    <a key={idx} href={link.href} className="quick-link">
                      <FaArrowRight />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #fef08a 100%);
          min-height: 100vh;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 20px 60px;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          width: 256px;
          height: 256px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          mix-blend-mode: multiply;
          animation: blob 7s infinite;
        }

        .blob-1 {
          top: 80px;
          left: 40px;
          background: #fbbf24;
          animation-delay: 0s;
        }

        .blob-2 {
          top: 160px;
          right: 40px;
          background: #fb923c;
          animation-delay: 2s;
        }

        .blob-3 {
          bottom: 80px;
          left: 33%;
          background: #fde047;
          animation-delay: 4s;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 50px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border: 1px solid #fcd34d;
          margin-bottom: 24px;
          font-size: 14px;
          color: #92400e;
          font-weight: 500;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #92400e 0%, #ea580c 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-divider {
          width: 96px;
          height: 4px;
          background: linear-gradient(to right, #fbbf24, #f97316);
          margin: 0 auto 24px;
          border-radius: 50px;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #374151;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(254, 243, 199, 0.8);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 50px;
          margin-top: 24px;
          font-size: 14px;
          color: #92400e;
          font-weight: 500;
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 20px 80px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        /* Form Column */
        .form-column {
          grid-column: span 1;
        }

        .contact-form-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 32px;
          border: 1px solid #fde68a;
          position: sticky;
          top: 32px;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .form-subtitle {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .status-message {
          padding: 16px;
          border-radius: 8px;
          font-weight: 500;
          margin-bottom: 24px;
          animation: slideDown 0.3s ease-out;
        }

        .status-message.success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .status-message.error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        .required {
          color: #ef4444;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #1f2937;
          background: white;
          transition: all 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .form-group textarea {
          resize: none;
          font-family: inherit;
        }

        .submit-btn {
          background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
          color: white;
          font-weight: bold;
          padding: 14px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
          font-size: 1rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: scale(1.01);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Info Column */
        .info-column {
          grid-column: span 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 24px;
          border: 1px solid #fde68a;
        }

        .info-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .title-bar {
          width: 4px;
          height: 24px;
          background: linear-gradient(to bottom, #f97316, #f59e0b);
          border-radius: 50px;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-label {
          font-size: 0.75rem;
          color: #9ca3af;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .contact-details a,
        .contact-details p {
          font-size: 0.875rem;
          color: #1f2937;
          font-weight: 500;
          word-break: break-all;
          text-decoration: none;
        }

        .contact-details a:hover {
          color: #ea580c;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .info-small-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          border: 1px solid #fde68a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: #fff7ed;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ea580c;
          margin: 0 auto 12px;
          font-size: 1.125rem;
        }

        .info-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .info-value {
          font-size: 1rem;
          font-weight: bold;
          color: #1f2937;
        }

        .info-value-small {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1f2937;
        }

        .social-card {
          background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #fed7aa;
        }

        .social-card h3 {
          font-weight: bold;
          color: #1f2937;
          text-align: center;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
          font-size: 1.25rem;
        }

        .social-link:hover {
          background: #f97316;
          color: white;
          transform: scale(1.1);
        }

        .quick-links-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #fde68a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .quick-links-card h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 16px;
          font-size: 0.9375rem;
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4b5563;
          text-decoration: none;
          font-size: 0.875rem;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .quick-link:hover {
          color: #ea580c;
          background: #fff7ed;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .form-column,
          .info-column {
            grid-column: span 1;
          }

          .contact-form-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .contact-form-card,
          .info-card {
            padding: 20px;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 100px 16px 40px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .main-content {
            padding: 32px 16px 60px;
          }
        }
      `}</style>
    </>
  );
}