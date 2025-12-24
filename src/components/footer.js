import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-logo-icon"
                >
                  <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                  <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                  <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                </svg>
                <span className="footer-brand-name">NetNexis</span>
              </div>
              <p className="footer-description section-content">
                Professional network infrastructure for small businesses. We
                specialize in robust WiFi, switch installations, and seamless PC
                connectivity to keep your business moving at light speed.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle r="2" cx="4" cy="4"></circle>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Email" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title section-subtitle">
                Our Services
              </h3>
              <nav className="footer-nav">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>WiFi Optimization</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Switch Infrastructure</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>PC &amp; Workstation Setup</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Access Point Installation</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Network Troubleshooting</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title section-subtitle">
                Quick Links
              </h3>
              <nav className="footer-nav">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="Homepage">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Service Areas</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#">
                      <div className="footer-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-legal-row">
              <p className="footer-copyright section-content">
                &amp;copy; 2025 NetNexis Infrastructure Services. All rights
                reserved.
              </p>
              <div className="footer-status">
                <span className="footer-status-dot"></span>
                <span className="footer-status-text section-content">
                  Network Status: Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.2);
opacity: 0.5;}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  // The footer uses CSS animations for the status pulse.
  // No complex JS required as per semantic HTML and performance guidelines.
  // Component is fully responsive and accessible via standard HTML/CSS.
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
