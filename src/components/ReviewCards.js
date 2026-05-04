"use client";

export default function ReviewCards() {
  const reviews = [
    {
      id: 1,
      name: "प्रिया शर्मा",
      text: "कुंडली सेवा अविश्वसनीय रूप से सटीक थी। इसने मुझे अपने जीवन पथ को बेहतर ढंग से समझने में मदद की।",
      rating: 5,
    },
    {
      id: 2,
      name: "राजेश कुमार",
      text: "प्रामाणिक उत्पाद और उत्कृष्ट सेवा। मेरे द्वारा ऑर्डर की गई पूजा सामग्री प्रीमियम गुणवत्ता की है।",
      rating: 5,
    },
    {
      id: 3,
      name: "अंजलि पटेल",
      text: "इस प्लेटफॉर्म के माध्यम से सेवा में योगदान देना अत्यधिक संतोषजनक रहा है। वास्तविक प्रभाव!",
      rating: 5,
    },
    {
      id: 4,
      name: "विक्रम सिंह",
      text: "प्रामाणिक आध्यात्मिक मार्गदर्शन के लिए सबसे अच्छी जगह। भक्ति वीडियो बहुत ज्ञानवर्धक और शांतिदायक हैं।",
      rating: 5,
    },
    {
      id: 5,
      name: "मीरा देवी",
      text: "मुझे हाई-रेस वॉलपेपर बहुत पसंद हैं! जब भी मैं अपना फोन खोलती हूं तो वे बहुत सकारात्मक ऊर्जा लाते हैं।",
      rating: 5,
    },
    {
      id: 6,
      name: "अमित वर्मा",
      text: "आरती और भजन संग्रह बहुत व्यापक है। यह मेरी दैनिक सुबह की प्रार्थनाओं का हिस्सा बन गया है।",
      rating: 5,
    },
    {
      id: 7,
      name: "सुनीता गुप्ता",
      text: "तेजोमार्ग अगली पीढ़ी के लिए हमारी परंपराओं को संरक्षित करने का बहुत अच्छा काम कर रहा है। बहुत गर्व है!",
      rating: 5,
    },
    {
      id: 8,
      name: "रोहन दास",
      text: "इंटरफेस बहुत साफ और प्रीमियम है। यह अब तक का सबसे उपयोगकर्ता-अनुकूल आध्यात्मिक ऐप है।",
      rating: 5,
    },
    {
      id: 9,
      name: "कविता अय्यर",
      text: "यहां साझा किया गया ज्ञान गहरा है फिर भी समझने में आसान है। वास्तव में धर्म के पथ पर एक प्रकाश।",
      rating: 5,
    },
    {
      id: 10,
      name: "दीपक जोशी",
      text: "बिना किसी व्यावसायिक विकर्षण के सच्ची आध्यात्मिक सामग्री। तेजोमार्ग टीम का धन्यवाद!",
      rating: 5,
    },
    {
      id: 11,
      name: "नेहा रेड्डी",
      text: "भक्ति वीडियो सिनेमाई और उच्च गुणवत्ता वाले हैं। मैं उन्हें हर दिन अपने बुजुर्गों के साथ साझा करती हूं।",
      rating: 5,
    },
    {
      id: 12,
      name: "संजय बंसल",
      text: "महान समुदाय और हमें अपनी जड़ों से फिर से जोड़ने की अद्भुत पहल। अत्यधिक अनुशंसित।",
      rating: 5,
    },
  ];

  // इनफिनिट स्क्रॉल इफेक्ट के लिए डुप्लिकेट
  const doubleReviews = [...reviews, ...reviews];

  return (
    <section className="section-padding bg-main overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">हमारे समुदाय की क्या राय है</h2>
          <p className="section-subtitle">पूरे भारत में हजारों भक्तों द्वारा विश्वसनीय</p>
        </div>

        <div className="review-slider-wrapper rounded-3xl">
          <div className="review-track">
            {doubleReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card-horizontal glass-effect">
                <div className="review-header">
                  <span className="verified-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    सत्यापित सदस्य
                  </span>
                </div>
                
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                
                <p className="review-text italic">“{review.text}”</p>
                
                <div className="review-footer">
                  <h4 className="author-name">{review.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}