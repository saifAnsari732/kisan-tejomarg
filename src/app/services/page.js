"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="page">
      <Navbar />

      {/* VEDIC HERO SECTION */}
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container center">
          <div className="om-symbol">ॐ</div>
          <h1 className="hero-title">सेवा और समर्पण</h1>
          <p className="hero-sub">
            योग: कर्मसु कौशलम् - कर्म में कुशलता ही योग है। <br />
            हम प्राचीन वैदिक मूल्यों को आधुनिक डिजिटल युग की तकनीक के साथ जोड़ते हैं।
          </p>

          <div className="stats">
            <div className="stat-item"><h3>१०८+</h3><p>धर्म लेख</p></div>
            <div className="stat-item"><h3>५१+</h3><p>कलाकार</p></div>
            <div className="stat-item"><h3>११K+</h3><p>साधक</p></div>
          </div>
        </div>
      </section>

      {/* TECH & DHARMA INTERSECTION */}
      <section className="section divine-tech">
        <div className="container">
          <div className="tech-card">
            <div className="tech-content">
              <h2>चेतना और</h2>
              <p>
                शास्त्रों में कहा गया है कि यथा पिण्डे तथा ब्रह्माण्डे (जैसा शरीर में, वैसा ब्रह्मांड में)। 
                Next.js में <strong></strong> उसी चेतना की तरह है जो केवल वहीं सक्रिय होती है जहाँ अनुभव की आवश्यकता हो। 
                यह कोड को जीवंत बनाता है, जिससे यूजर इंटरैक्शन संभव होता है—ठीक वैसे ही जैसे भक्त की पुकार पर भगवान की कृपा सक्रिय होती है।
              </p>
            </div>
            <div className="tech-visual">
              <div className="pulse"></div>
              <span>Interactive Consciousness</span>
            </div>
          </div>
        </div>
      </section>

      {/* DHARMIC SERVICES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">हमारी दैवीय सेवाएँ</h2>
          <div className="grid">
            {[
              { t: "डिजिटल ग्रंथालय", d: "ब्रह्मा जी के ज्ञान को आपके फोन तक पहुँचाना।", icon: "📖" },
              { t: "दृश्य काव्य (Cinematic)", d: "भगवान विष्णु की लीलाओं का आधुनिक चित्रण।", icon: "🎬" },
              { t: "डिजिटल सत्संग", d: "महादेव की तरह शून्य से अनंत तक की चर्चा।", icon: "🕉️" },
              { t: "वैदिक कंटेंट", d: "सरस्वती माँ की कृपा से शुद्ध और प्रामाणिक लेखन।", icon: "✍️" },
              { t: "संस्कार मीडिया", d: "आने वाली पीढ़ी के लिए धर्म का आधुनिक स्वरूप।", icon: "🚩" },
              { t: "अनुसंधान केंद्र", d: "विज्ञान और अध्यात्म के बीच सेतु का निर्माण।", icon: "🔍" }
            ].map((item, i) => (
              <div key={i} className="dharmic-card">
                <div className="card-icon-top">{item.icon}</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES (DEITIES) */}
      <section className="section light deities">
        <div className="container">
          <h2 className="section-title">हमारे मार्गदर्शक सिद्धांत</h2>
          <div className="deity-grid">
            <div className="deity-box">
              <h4>श्री गणेश: प्रारंभ</h4>
              <p>हर कार्य की शुरुआत शुभता और बाधाओं को दूर करने के साथ।</p>
            </div>
            <div className="deity-box">
              <h4>हनुमान जी: सेवा</h4>
              <p>अतुलित बल और बुद्धि के साथ निस्वार्थ सेवा भाव।</p>
            </div>
            <div className="deity-box">
              <h4>माँ लक्ष्मी: समृद्धि</h4>
              <p>ज्ञान और संसाधनों का उचित वितरण और समृद्धि।</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS: SADHANA STEPS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">कार्य प्रक्रिया (साधना)</h2>
          <div className="timeline-dharmic">
            {["चिंतन (Research)", "सृजन (Creation)", "प्रसार (Distribution)", "संगठन (Community)"].map((step, i) => (
              <div key={i} className="sadhana-step">
                <div className="circle-step">{i + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-dharmic">
        <div className="container center">
          <h2>धर्मो रक्षति रक्षित:</h2>
          <p>धर्म की रक्षा करो, धर्म तुम्हारी रक्षा करेगा। हमारे साथ जुड़कर इस महान यात्रा का हिस्सा बनें।</p>
          <a href="/contact" className="btn-divine">जुड़ें (Join Us)</a>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page { background: #fff8f0; color: #5c2d12; font-family: 'Poppins', sans-serif; }
        .container { max-width: 1200px; margin: auto; padding: 0 20px; }
        .center { text-align: center; }

        /* Hero with Mandala Background */
        .hero { 
          padding: 120px 0; 
          background: radial-gradient(circle at center, #fff2e0 0%, #ffedd5 100%);
          position: relative;
          overflow: hidden;
        }
        .om-symbol { font-size: 4rem; color: #ea580c; opacity: 0.8; margin-bottom: 10px; }
        .hero-title { font-size: 3.5rem; font-weight: 800; color: #7c2d12; margin-bottom: 20px; }
        .hero-sub { font-size: 1.4rem; color: #9a3412; font-style: italic; max-width: 800px; margin: 0 auto; }

        /* Stats */
        .stats { display: flex; justify-content: center; gap: 50px; margin-top: 50px; }
        .stat-item h3 { font-size: 3rem; color: #c2410c; margin: 0; }
        .stat-item p { font-weight: bold; color: #7c2d12; }

        /* Divine Tech Section */
        .divine-tech { padding: 60px 0; }
        .tech-card { 
          background: #431407; color: #ffedd5; padding: 50px; border-radius: 30px; 
          display: grid; grid-template-columns: 2fr 1fr; align-items: center; gap: 40px;
          border: 2px solid #fb923c;
        }
        .tech-visual { 
          height: 150px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: rgba(251, 146, 60, 0.1); border-radius: 20px; border: 1px dashed #fb923c;
        }
        .pulse { 
          width: 40px; height: 40px; background: #fb923c; border-radius: 50%; 
          box-shadow: 0 0 20px #fb923c; animation: pulse 2s infinite; margin-bottom: 15px;
        }
        @keyframes pulse { 0% { transform: scale(0.9); } 70% { transform: scale(1.2); opacity: 0; } 100% { transform: scale(0.9); opacity: 0; } }

        /* Dharmic Cards */
        .section-title { font-size: 2.5rem; text-align: center; margin-bottom: 60px; color: #7c2d12; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .dharmic-card { 
          background: white; padding: 40px 30px; border-radius: 20px; border-bottom: 5px solid #ea580c;
          transition: 0.3s ease; box-shadow: 0 10px 30px rgba(124, 45, 18, 0.05); text-align: center;
        }
        .dharmic-card:hover { transform: translateY(-10px); background: #fff7ed; }
        .card-icon-top { font-size: 3rem; margin-bottom: 20px; }

        /* Deity Grid */
        .deity-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .deity-box { background: #ffedd5; padding: 30px; border-radius: 15px; border: 1px solid #fed7aa; text-align: center; }
        .deity-box h4 { color: #c2410c; font-size: 1.5rem; margin-bottom: 10px; }

        /* Sadhana Timeline */
        .timeline-dharmic { display: flex; justify-content: space-between; position: relative; padding: 40px 0; }
        .timeline-dharmic::before { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: #fed7aa; z-index: 1; }
        .sadhana-step { position: relative; z-index: 2; background: #fff8f0; padding: 10px 20px; text-align: center; }
        .circle-step { width: 40px; height: 40px; background: #7c2d12; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }

        /* CTA Dharmic */
        .cta-dharmic { 
          background: linear-gradient(rgba(124, 45, 18, 0.9), rgba(124, 45, 18, 0.9)), url('https://www.transparenttextures.com/patterns/paper-fibers.png'); 
          color: white; padding: 80px 0; border-top: 8px solid #fb923c;
        }
        .btn-divine { 
          display: inline-block; background: #fb923c; color: white; padding: 18px 45px; 
          border-radius: 50px; font-weight: bold; text-decoration: none; margin-top: 30px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: 0.3s;
        }
        .btn-divine:hover { background: #ffedd5; color: #7c2d12; transform: scale(1.05); }

        @media(max-width: 850px) {
          .grid, .deity-grid { grid-template-columns: 1fr; }
          .tech-card { grid-template-columns: 1fr; }
          .timeline-dharmic { flex-direction: column; gap: 30px; }
          .timeline-dharmic::before { display: none; }
        }
      `}</style>
    </div>
  );
}