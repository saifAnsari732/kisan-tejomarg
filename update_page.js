const fs = require('fs');
const path = 'c:/Users/home/Desktop/kisan-tejomarg/src/app/businesses/page.js';

let content = fs.readFileSync(path, 'utf8');

// 1. Move Vision & Mission to top
const visionMissionStart = content.indexOf('{/* Vision & Mission Section */}');
const testimonialsStart = content.indexOf('{/* Testimonials Section */}');

if (visionMissionStart !== -1 && testimonialsStart !== -1) {
  const visionMissionBlock = content.substring(visionMissionStart, testimonialsStart);
  content = content.replace(visionMissionBlock, '');
  
  const whatWeCoverStart = content.indexOf('{/* What We Cover Section */}');
  if (whatWeCoverStart !== -1) {
    // Insert Vision & Mission before What We Cover
    content = content.slice(0, whatWeCoverStart) + visionMissionBlock + '\n        ' + content.slice(whatWeCoverStart);
  }
}

// 2. Add image to Hero section
const heroContent = `          <div className="biz-container biz-hero-content">
            <div className="biz-hero-grid">
              <motion.div {...fadeInUp} className="biz-hero-text" style={{textAlign: "left"}}>
                <span className="biz-badge">Tejomarg Business Info</span>
                <h1 className="biz-title">
                  Empowering Businesses Through <br />
                  <span className="biz-gradient-text">Knowledge & Innovation</span>
                </h1>
                <p className="biz-subtitle">
                  In today’s rapidly evolving business landscape, success is driven by informed decisions, strategic thinking, innovation, and adaptability.
                </p>
                <p className="biz-desc">
                  Whether you are building a startup, scaling an established company, exploring new opportunities, or navigating digital transformation, we serve as your reliable source for business knowledge and strategic guidance.
                </p>
              </motion.div>
              <motion.div {...fadeInUp} className="biz-hero-image-wrap">
                <img src="/business/presentation.webp" alt="Business Presentation" className="biz-hero-img" />
              </motion.div>
            </div>
          </div>`;

content = content.replace(
  /<div className="biz-container biz-hero-content">[\s\S]*?<\/div>\s*<\/section>/,
  heroContent + '\n        </section>'
);

// 3. Add styling for custom nav and hero grid
const newStyles = `
        /* Custom Nav */
        .biz-custom-nav {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .biz-nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        .biz-logo-img {
          height: 50px;
          object-fit: contain;
        }
        .biz-back-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          transition: all 0.3s;
        }
        .biz-back-link:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Hero Grid */
        .biz-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media(min-width: 992px) {
          .biz-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .biz-hero-image-wrap {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .biz-hero-img {
          width: 100%;
          height: auto;
          display: block;
          transform: scale(1.05);
          transition: transform 0.5s;
        }
        .biz-hero-image-wrap:hover .biz-hero-img {
          transform: scale(1);
        }
`;

content = content.replace('/* Pure CSS Styling for Businesses Page */', '/* Pure CSS Styling for Businesses Page */\n' + newStyles);

fs.writeFileSync(path, content);
console.log('Done replacing content');
