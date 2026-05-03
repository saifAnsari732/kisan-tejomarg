"use client";

export default function JoinCommunity() {
  return (
    <section className="section-padding alt-section">
      <div className="container">
        <div className="join-community animate-fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>तेजोमार्ग परिवार से जुड़ें</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            सनातन धर्म और संस्कृति के इस पावन मार्ग पर हमारे साथ चलें। यूट्यूब और इंस्टाग्राम पर हमारे दैनिक विचारों से जुड़ें।
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ background: 'white' }}>
              YouTube
            </a>
            <a href="https://www.instagram.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'rgba(0,0,0,0.8)', color: 'white' }}>
              Instagram
            </a>
            <a href="https://www.facebook.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ background: 'white' }}>
              Facebook
            </a>
            <a href="https://x.com/tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ background: 'white' }}>
              Twitter
            </a>
            <a href="https://in.pinterest.com/tejomarg/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ background: 'white' }}>
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
