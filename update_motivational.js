const fs = require('fs');
const path = 'c:/Users/home/Desktop/kisan-tejomarg/src/app/motivational/page.js';

let content = fs.readFileSync(path, 'utf8');

// 1. Replace <Navbar /> with custom nav
const customNav = `      {/* Custom Nav */}
      <div className="mot-custom-nav">
        <div className="mot-container mot-nav-inner">
          <Link href="/" className="mot-logo">
            <img src="/realTalk/realtalkLogo.png" alt="Real Talk Logo" className="mot-logo-img" />
          </Link>
          <Link href="/" className="mot-back-btn">Back to Home</Link>
        </div>
      </div>`;

content = content.replace('<Navbar />', customNav);

// 2. Adjust CSS
const cssToInject = `
        /* Custom Nav CSS */
        .mot-custom-nav {
          background: linear-gradient(135deg, #020617 0%, #1e3a8a 100%);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .mot-nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        .mot-logo-img {
          height: 60px;
          object-fit: contain;
        }
        .mot-back-btn {
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          transition: all 0.3s;
        }
        .mot-back-btn:hover {
          background: rgba(255,255,255,0.1);
        }
`;

// Replace background of mot-hero-bg to blue black gradient
content = content.replace(
  /background-color: #f8fafc;\s*z-index: 0;/g,
  'background: linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e3a8a 100%);\n          z-index: 0;'
);

// Fix title color for dark background
content = content.replace(
  /color: #0f172a;\s*\}\s*@media \(min-width: 768px\)/g,
  'color: #ffffff;\n        }\n\n        @media (min-width: 768px)'
);

// Fix desc color for dark background
content = content.replace(
  /color: #475569;\s*line-height: 1\.8;\s*margin-bottom: 40px;\s*max-width: 600px;/g,
  'color: #cbd5e1;\n          line-height: 1.8;\n          margin-bottom: 40px;\n          max-width: 600px;'
);

// Inject custom nav CSS after mot-page
content = content.replace(
  /padding-top: 80px; \/\* Navbar offset \*\/\s*\}/g,
  'padding-top: 0;\n        }\n' + cssToInject
);

fs.writeFileSync(path, content);
console.log('Done updating motivational page.');
