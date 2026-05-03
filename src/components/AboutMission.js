"use client";

export default function AboutMission() {
  return (
    <section id="about" className="section-padding alt-section">
      <div className="container">
        <h2 className="section-title">तेजोमार्ग क्या है?</h2>
        <p className="section-subtitle">
          ज्ञान, धर्म और संस्कृति का एक सच्चा माध्यम। हर कर्म में धर्म, हर शब्द में सत्य।
        </p>
        
        <div className="card-grid">
          <div className="modern-card animate-fade-in">
            <span className="card-pill">Our Mission</span>
            <h3 className="text-saffron">सनातन संस्कृति का प्रसार</h3>
            <p>
              तेजोमार्ग एक आध्यात्मिक और सांस्कृतिक मंच है, जो सनातन धर्म को मानने वाले लोगों, 
              हिंदू संस्कृति और भारतीय आध्यात्मिक परंपरा को आधुनिक डिजिटल माध्यमों के द्वारा जन-जन तक पहुँचाने के लिए समर्पित है।
            </p>
          </div>
          
          <div className="modern-card animate-fade-in delay-100">
            <span className="card-pill">Core Belief</span>
            <h3 className="text-saffron">सरल और सुलभ ज्ञान</h3>
            <p>
              हमारा उद्देश्य शास्त्रों, संतों और परंपराओं के अमूल्य ज्ञान को सरल और प्रभावी रूप में प्रस्तुत करना है। 
              ज्ञान वह प्रकाश है जो हर हृदय तक पहुँचना चाहिए।
            </p>
          </div>
          
          <div className="modern-card animate-fade-in delay-200">
            <span className="card-pill">Digital Reach</span>
            <h3 className="text-saffron">डिजिटल पहुँच</h3>
            <p>
              यूट्यूब और इंस्टाग्राम के माध्यम से युवाओं और हर वर्ग तक संस्कृति का प्रसार करना। 
              आधुनिक युग में सनातन धर्म की जड़ों से जुड़े रहने का एक सशक्त माध्यम।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
