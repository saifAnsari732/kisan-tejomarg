"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">तेजोमार्ग</h3>
            <p className="footer-desc">
              सनातन धर्म, हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को जन-जन तक पहुँचाने के लिए समर्पित एक मंच।
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/#about">About Tejomarg</Link></li>
              <li><Link href="/our-mission">Our Mission</Link></li>
              <li><Link href="/#voices">True Voices</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Connect With Us</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tejomarg/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tejomarg/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/tejomarg" target="_blank" rel="noopener noreferrer">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/tejomarg/" target="_blank" rel="noopener noreferrer">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tejomarg (तेजोमार्ग). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
