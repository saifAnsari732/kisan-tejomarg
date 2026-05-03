"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-area">
            <div className="footer-logo-wrapper">
              <img src="/Tejomarglogo.png" alt="Tejomarg Logo" />
            </div>
            <p className="footer-desc">
              सनातन धर्म, हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को जन-जन तक पहुँचाने के लिए समर्पित एक मंच। तेजोमार्ग के साथ अपनी आध्यात्मिक यात्रा शुरू करें।
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/#about">About Tejomarg</Link></li>
              <li><Link href="/our-mission">Our Mission</Link></li>
              <li><Link href="/wallpapers">Wallpapers</Link></li>
              <li><Link href="/aarti-bhajan">Aarti & Bhajan</Link></li>
              <li><Link href="/devotional-videos">Videos</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">📺</span>
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">📸</span>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">👤</span>
                <span>Facebook</span>
              </a>
              <a href="https://x.com/tejomarg" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
              <a href="https://in.pinterest.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-icon">📌</span>
                <span>Pinterest</span>
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
