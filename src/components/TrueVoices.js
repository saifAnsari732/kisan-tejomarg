"use client";

export default function TrueVoices() {
  return (
    <section id="voices" className="section-padding light-section">
      <div className="container">
        <h2 className="section-title">सच्ची आवाज़ें (True Voices)</h2>
        <p className="section-subtitle">उन साधकों और भक्तों का मंच जिन्हें कभी अवसर नहीं मिला</p>
        
        <div className="hero-grid" style={{ marginTop: '3rem' }}>
          <div className="hero-image-wrapper animate-fade-in">
            <img src="/images/sadhu.png" alt="Genuine devotee in meditation" />
          </div>
          
          <div className="modern-card animate-fade-in delay-100">
            <span className="card-pill">The Tejomarg Difference</span>
            <h3 className="text-saffron" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>अनुभव की गहराई</h3>
            <blockquote style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-saffron)', paddingLeft: '1rem' }}>
              "देश में अनेक ऐसे ज्ञानी, साधक और भक्त हैं, जिनके पास गहरा अनुभव है, लेकिन उन्हें मंच नहीं मिलता।"
            </blockquote>
            <p style={{ marginBottom: '2rem' }}>
              तेजोमार्ग का संकल्प है कि ऐसे सच्चे और अनुभवी लोगों को सम्मानपूर्वक अपनी बात रखने का अवसर दिया जाए। 
              हम मानते हैं कि सच्चा ज्ञान केवल प्रसिद्ध लोगों या धनवान व्यक्तियों तक सीमित नहीं होना चाहिए।
            </p>
            <a href="https://www.youtube.com/@Tejomarg" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Discover Their Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
