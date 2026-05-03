import '../components.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Our Mission | Tejomarg',
  description: 'सनातन धर्म, हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को जन-जन तक पहुँचाने का संकल्प।',
};

export default function OurMission() {
  return (
    <main>
      <Navbar />
      
      {/* Mission Hero Section */}
      <section className="mission-hero">
        <div className="container">
          <div className="mission-hero-content animate-fade-in">
            <span className="hero-pill">Tejomarg</span>
            <h1 className="mission-title">
              Our <span>Mission</span>
            </h1>
            <p className="mission-subtitle">
              सनातन धर्म, हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को जन-जन तक पहुँचाने का संकल्प। 
              हमारा प्रयास है कि ज्ञान और धर्म हर घर तक पहुँचे।
            </p>
          </div>
        </div>
        <div className="hero-shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding alt-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          
          <div className="mission-grid">
            
            {/* Highlighted Main Card */}
            <div className="modern-card mission-highlight animate-fade-in">
              <div className="icon-wrapper saffron-gradient">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="text-saffron">सनातन संस्कृति का प्रसार</h3>
              <p>
                तेजोमार्ग एक आध्यात्मिक और सांस्कृतिक मंच है, जो सनातन धर्म को मानने वाले लोगों, 
                हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को आधुनिक डिजिटल माध्यमों के द्वारा जन-जन तक पहुँचाने के लिए समर्पित है।
              </p>
            </div>
            
            {/* Regular Cards */}
            <div className="modern-card animate-fade-in delay-100">
              <div className="icon-wrapper outline-saffron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="text-saffron">सरल और सुलभ ज्ञान</h3>
              <p>
                हमारा उद्देश्य शास्त्रों, संतों और परंपराओं के अमूल्य ज्ञान को सरल और प्रभावी रूप में प्रस्तुत करना है। 
                ज्ञान वह प्रकाश है जो हर हृदय तक पहुँचना चाहिए।
              </p>
            </div>
            
            <div className="modern-card animate-fade-in delay-200">
              <div className="icon-wrapper outline-saffron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h3 className="text-saffron">डिजिटल पहुँच</h3>
              <p>
                यूट्यूब और इंस्टाग्राम के माध्यम से युवाओं और हर वर्ग तक संस्कृति का प्रसार करना। 
                आधुनिक युग में सनातन धर्म की जड़ों से जुड़े रहने का एक सशक्त माध्यम।
              </p>
            </div>
            
            <div className="modern-card animate-fade-in delay-300">
              <div className="icon-wrapper outline-saffron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-saffron">वैश्विक समुदाय</h3>
              <p>
                हम एक ऐसा वैश्विक समुदाय बनाना चाहते हैं जो अपनी जड़ों से जुड़ा हो और भविष्य की ओर सकारात्मकता के साथ देखे।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quote / Vision Section */}
      <section className="section-padding">
        <div className="container">
          <div className="vision-banner animate-fade-in">
            <h2>"हर कर्म में धर्म, हर शब्द में सत्य"</h2>
            <p>यही तेजोमार्ग का मूल मंत्र है और यही हमारा रास्ता है।</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
