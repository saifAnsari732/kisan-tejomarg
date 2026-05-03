"use client";

export default function ReviewCards() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "The Kundli service was incredibly accurate. It helped me understand my life path better.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      text: "Authentic products and excellent service. The puja items I ordered are of premium quality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anjali Patel",
      text: "Contributing to seva through this platform has been deeply fulfilling. Real impact!",
      rating: 5,
    },
    {
      id: 4,
      name: "Vikram Singh",
      text: "Best place for genuine spiritual guidance. The devotional videos are very enlightening and peaceful.",
      rating: 5,
    },
    {
      id: 5,
      name: "Meera Devi",
      text: "I love the high-res wallpapers! They bring so much positive energy whenever I open my phone.",
      rating: 5,
    },
    {
      id: 6,
      name: "Amit Verma",
      text: "The Aarti and Bhajan collection is exhaustive. It has become a part of my daily morning prayers.",
      rating: 5,
    },
    {
      id: 7,
      name: "Sunita Gupta",
      text: "Tejomarg is doing a great job in preserving our traditions for the next generation. Very proud!",
      rating: 5,
    },
    {
      id: 8,
      name: "Rohan Das",
      text: "The interface is very clean and premium. It's the most user-friendly spiritual app I've used.",
      rating: 5,
    },
    {
      id: 9,
      name: "Kavita Iyer",
      text: "The wisdom shared here is deep yet easy to understand. Truly a light on the path of dharma.",
      rating: 5,
    },
    {
      id: 10,
      name: "Deepak Joshi",
      text: "True spiritual content without any commercial distractions. Thank you Tejomarg team!",
      rating: 5,
    },
    {
      id: 11,
      name: "Neha Reddy",
      text: "The devotional videos are cinematic and high quality. I share them with my elders every day.",
      rating: 5,
    },
    {
      id: 12,
      name: "Sanjay Bansal",
      text: "Great community and a wonderful initiative to connect us back to our roots. Highly recommended.",
      rating: 5,
    },
  ];

  // Duplicate for infinite scroll effect
  const doubleReviews = [...reviews, ...reviews];

  return (
    <section className="section-padding bg-main overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">Trusted by thousands of devotees across India</p>
        </div>

        <div className="review-slider-wrapper rounded-3xl">
          <div className="review-track">
            {doubleReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card-horizontal glass-effect">
                <div className="review-header">
                  <span className="verified-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Member
                  </span>
                </div>
                
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                
                <p className="review-text italic">"{review.text}"</p>
                
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
