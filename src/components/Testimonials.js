"use client";
import { useRef } from 'react';

export default function Testimonials() {
  const sliderRef = useRef(null);

  const shortIds = [
    "Ir5uACO6Elk",
    "o7cu6oAAeGw",
    "8_CxT_1UhzI",
    "zfB_Y81fQ7M",
    "KCmRh5JCfYA",
    "l9slZJ5xJeo",
    "-RU6hWzJFzI",
    "pV3x3-a7iXQ",
    "cwnP4mv2Ajs",
    "PCNHzXhk_hg"
  ];

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding alt-section" id="testimonials">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>सच्ची कहानियाँ</h2>
            <p className="section-subtitle" style={{ margin: '0', textAlign: 'left' }}>हमारे समुदाय के अनुभव और विचार</p>
          </div>
          
          <div className="slider-controls">
            <button onClick={() => slide('left')} className="slider-btn" aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button onClick={() => slide('right')} className="slider-btn" aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        
        <div className="shorts-container">
          <div className="shorts-grid" ref={sliderRef}>
            {shortIds.map((id, index) => (
              <div key={index} className="short-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <iframe 
                  src={`https://www.youtube.com/embed/${id}`} 
                  title={`YouTube Short ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
