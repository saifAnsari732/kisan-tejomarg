"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Briefcase, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const modalTranslations = {
  en: {
    title: "Choose Your Journey",
    subtitle: "Select the category that best matches your interests and explore our curated content",
    motivational_title: "Motivational",
    motivational_desc: "Stories, inspiration, success journeys, life lessons, self-growth content, leadership talks, and motivational videos to ignite your inner flame.",
    motivational_btn: "Explore Motivation",
    businesses_title: "Businesses",
    businesses_desc: "Entrepreneurship, startup stories, business strategies, marketing insights, finance, innovation, and industry trends to build your enterprise.",
    businesses_btn: "Explore Business"
  },
  hi: {
    title: "अपनी यात्रा चुनें",
    subtitle: "अपनी रुचि के अनुसार सही श्रेणी चुनें और हमारे द्वारा संजोई गई सामग्री का अन्वेषण करें",
    motivational_title: "प्रेरणात्मक (Motivational)",
    motivational_desc: "कहानियां, प्रेरणा, सफलता की यात्राएं, जीवन के पाठ, आत्म-विकास की सामग्री, नेतृत्व वार्ता और आपकी आंतरिक ऊर्जा को जगाने वाले वीडियो।",
    motivational_btn: "प्रेरणा की खोज करें",
    businesses_title: "व्यापार (Businesses)",
    businesses_desc: "उद्यमिता, स्टार्टअप कहानियां, व्यावसायिक रणनीतियां, विपणन अंतर्दृष्टि, वित्त, नवाचार और आपके व्यवसाय को बढ़ाने के लिए उद्योग के रुझान।",
    businesses_btn: "व्यापार की खोज करें"
  }
};

export default function ConnectModal({ isOpen, onClose }) {
  const { language } = useLanguage();
  const mt = modalTranslations[language] || modalTranslations.en;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cm-overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="cm-backdrop"
          />
          
          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="cm-box"
          >
            {/* Ambient Glow Blobs */}
            <div className="cm-blob cm-blob-orange"></div>
            <div className="cm-blob cm-blob-blue"></div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="cm-close-btn"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="cm-header">
              <h2>{mt.title}</h2>
              <p>{mt.subtitle}</p>
            </div>

            {/* Content Area */}
            <div className="cm-content-area">
              <div className="cm-grid">
                
                {/* Option 1: Motivational */}
                <Link href="/motivational" onClick={onClose} className="cm-link">
                  <div className="cm-card cm-card-orange">
                    <div className="cm-card-glow cm-glow-orange"></div>
                    
                    <div className="cm-card-content">
                      <div className="cm-icon-box cm-icon-orange">
                        <Rocket size={28} strokeWidth={2.2} />
                      </div>
                      
                      <h3>{mt.motivational_title}</h3>
                      <p>{mt.motivational_desc}</p>
                    </div>
                    
                    <div className="cm-card-footer">
                      <span className="cm-btn cm-btn-orange">
                        {mt.motivational_btn}
                        <ArrowRight size={18} className="cm-btn-icon" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Option 2: Businesses */}
                <Link href="/businesses" onClick={onClose} className="cm-link">
                  <div className="cm-card cm-card-blue">
                    <div className="cm-card-glow cm-glow-blue"></div>
                    
                    <div className="cm-card-content">
                      <div className="cm-icon-box cm-icon-blue">
                        <Briefcase size={28} strokeWidth={2.2} />
                      </div>
                      
                      <h3>{mt.businesses_title}</h3>
                      <p>{mt.businesses_desc}</p>
                    </div>
                    
                    <div className="cm-card-footer">
                      <span className="cm-btn cm-btn-blue">
                        {mt.businesses_btn}
                        <ArrowRight size={18} className="cm-btn-icon" />
                      </span>
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </motion.div>

          <style jsx>{`
            /* ConnectModal Pure CSS */
            :global(.cm-overlay) {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 16px;
              font-family: 'Inter', -apple-system, sans-serif;
            }

            @media (min-width: 640px) {
              :global(.cm-overlay) { padding: 24px; }
            }
            @media (min-width: 768px) {
              :global(.cm-overlay) { padding: 40px; }
            }

            :global(.cm-backdrop) {
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(30, 58, 138, 0.95) 100%);
              backdrop-filter: blur(12px);
            }

            :global(.cm-box) {
              position: relative;
              z-index: 10;
              width: 100%;
              max-width: 960px;
              max-height: 90vh;
              background-color: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(24px);
              border-radius: 32px;
              padding: 24px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border: 1px solid rgba(226, 232, 240, 0.5);
              display: flex;
              flex-direction: column;
              overflow: hidden;
            }

            @media (min-width: 768px) {
              .cm-box { padding: 48px; }
            }

            :global([data-theme="dark"]) .cm-box {
              background-color: rgba(15, 23, 42, 0.95);
              border-color: rgba(30, 41, 59, 0.8);
            }

            /* Ambient Blobs */
            .cm-blob {
              position: absolute;
              width: 384px;
              height: 384px;
              border-radius: 50%;
              filter: blur(64px);
              pointer-events: none;
              z-index: 0;
            }

            .cm-blob-orange {
              top: -160px;
              left: -160px;
              background-color: rgba(249, 115, 22, 0.1);
            }

            :global([data-theme="dark"]) .cm-blob-orange {
              background-color: rgba(249, 115, 22, 0.15);
            }

            .cm-blob-blue {
              bottom: -160px;
              right: -160px;
              background-color: rgba(59, 130, 246, 0.1);
            }

            :global([data-theme="dark"]) .cm-blob-blue {
              background-color: rgba(59, 130, 246, 0.15);
            }

            /* Close Button */
            .cm-close-btn {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background-color: #f1f5f9;
              color: #64748b;
              border: 1px solid rgba(226, 232, 240, 0.5);
              cursor: pointer;
              transition: all 0.3s ease;
              z-index: 20;
            }

            .cm-close-btn:hover {
              background-color: #e2e8f0;
              color: #0f172a;
              transform: rotate(90deg);
            }

            :global([data-theme="dark"]) .cm-close-btn {
              background-color: #1e293b;
              color: #94a3b8;
              border-color: rgba(51, 65, 85, 0.5);
            }

            :global([data-theme="dark"]) .cm-close-btn:hover {
              background-color: #334155;
              color: #ffffff;
            }

            /* Header */
            .cm-header {
              text-align: center;
              margin-bottom: 32px;
              position: relative;
              z-index: 10;
            }

            .cm-header h2 {
              font-family: 'Inter', -apple-system, sans-serif;
              font-size: 2rem;
              font-weight: 800;
              margin-bottom: 12px;
              letter-spacing: -0.025em;
              background: linear-gradient(to right, #ea580c, #f59e0b, #f97316);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            @media (min-width: 768px) {
              .cm-header h2 { font-size: 2.5rem; }
            }

            .cm-header p {
              font-family: 'Inter', -apple-system, sans-serif;
              color: #475569;
              font-size: 0.95rem;
              line-height: 1.5;
              max-width: 500px;
              margin: 0 auto;
            }

            @media (min-width: 768px) {
              .cm-header p { font-size: 1.05rem; }
            }

            :global([data-theme="dark"]) .cm-header p {
              color: #94a3b8;
            }

            /* Content Area */
            .cm-content-area {
              flex-grow: 1;
              overflow-y: auto;
              position: relative;
              z-index: 10;
              padding-right: 4px;
            }

            /* Custom Scrollbar */
            .cm-content-area::-webkit-scrollbar {
              width: 6px;
            }
            .cm-content-area::-webkit-scrollbar-track {
              background: transparent;
            }
            .cm-content-area::-webkit-scrollbar-thumb {
              background-color: #e2e8f0;
              border-radius: 10px;
            }
            :global([data-theme="dark"]) .cm-content-area::-webkit-scrollbar-thumb {
              background-color: #334155;
            }

            .cm-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
              padding: 4px;
            }

            @media (min-width: 768px) {
              .cm-grid {
                grid-template-columns: 1fr 1fr;
                gap: 32px;
              }
            }

            .cm-link {
              text-decoration: none;
              display: block;
              height: 100%;
              outline: none;
            }

            /* Cards */
            .cm-card {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              background-color: rgba(248, 250, 252, 0.8);
              border: 1px solid rgba(241, 245, 249, 1);
              border-radius: 24px;
              padding: 32px;
              box-sizing: border-box;
              transition: all 0.3s ease;
            }

            :global([data-theme="dark"]) .cm-card {
              background-color: rgba(30, 41, 59, 0.4);
              border-color: rgba(30, 41, 59, 0.5);
            }

            .cm-card:hover {
              background-color: #ffffff;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              transform: translateY(-4px);
            }

            :global([data-theme="dark"]) .cm-card:hover {
              background-color: #1e293b;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
            }

            .cm-card-glow {
              position: absolute;
              inset: 0;
              border-radius: 24px;
              opacity: 0;
              transition: opacity 0.3s ease;
              pointer-events: none;
            }

            .cm-glow-orange {
              background: linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(245, 158, 11, 0.05));
            }

            .cm-glow-blue {
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(14, 165, 233, 0.05));
            }

            .cm-card:hover .cm-card-glow {
              opacity: 1;
            }

            .cm-card-content {
              position: relative;
              z-index: 2;
            }

            /* Icons */
            .cm-icon-box {
              width: 64px;
              height: 64px;
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 24px;
              transition: transform 0.3s ease;
            }

            .cm-icon-orange {
              background-color: #fff7ed;
              color: #f97316;
              border: 1px solid rgba(255, 237, 213, 0.5);
            }

            :global([data-theme="dark"]) .cm-icon-orange {
              background-color: rgba(249, 115, 22, 0.1);
              color: #fb923c;
              border-color: rgba(249, 115, 22, 0.2);
            }

            .cm-icon-blue {
              background-color: #eff6ff;
              color: #3b82f6;
              border: 1px solid rgba(219, 234, 254, 0.5);
            }

            :global([data-theme="dark"]) .cm-icon-blue {
              background-color: rgba(59, 130, 246, 0.1);
              color: #60a5fa;
              border-color: rgba(59, 130, 246, 0.2);
            }

            .cm-card:hover .cm-icon-box {
              transform: scale(1.1);
            }

            /* Card Typography */
            .cm-card h3 {
              font-family: 'Inter', -apple-system, sans-serif;
              font-size: 1.25rem;
              font-weight: 700;
              margin-bottom: 12px;
              color: #1e293b;
              transition: color 0.2s ease;
            }

            @media (min-width: 768px) {
              .cm-card h3 { font-size: 1.5rem; }
            }

            :global([data-theme="dark"]) .cm-card h3 {
              color: #f1f5f9;
            }

            .cm-card-orange:hover h3 { color: #f97316; }
            .cm-card-blue:hover h3 { color: #3b82f6; }

            .cm-card p {
              font-family: 'Inter', -apple-system, sans-serif;
              color: #475569;
              font-size: 0.95rem;
              line-height: 1.6;
              margin-bottom: 32px;
            }

            @media (min-width: 768px) {
              .cm-card p { font-size: 1rem; }
            }

            :global([data-theme="dark"]) .cm-card p {
              color: #94a3b8;
            }

            /* Card Buttons */
            .cm-card-footer {
              position: relative;
              z-index: 2;
              width: 100%;
              margin-top: auto;
            }

            .cm-btn {
              width: 100%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 16px 24px;
              border-radius: 16px;
              font-family: 'Inter', -apple-system, sans-serif;
              font-weight: 700;
              font-size: 0.9rem;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              color: #ffffff;
              box-sizing: border-box;
              transition: all 0.3s ease;
            }

            .cm-btn-orange {
              background: linear-gradient(to right, #f97316, #f59e0b);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .cm-card-orange:hover .cm-btn-orange {
              background: linear-gradient(to right, #ea580c, #d97706);
              box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.3), 0 4px 6px -2px rgba(249, 115, 22, 0.15);
            }

            .cm-btn-blue {
              background: linear-gradient(to right, #2563eb, #0ea5e9);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .cm-card-blue:hover .cm-btn-blue {
              background: linear-gradient(to right, #1d4ed8, #0284c7);
              box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.15);
            }

            .cm-btn-icon {
              margin-left: 8px;
              transition: transform 0.3s ease;
            }

            .cm-card:hover .cm-btn-icon {
              transform: translateX(6px);
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
