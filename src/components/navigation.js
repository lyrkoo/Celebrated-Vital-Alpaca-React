import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="NetNexis Home" className="navigation-logo-link">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand section-title">NetNexis</span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span>Solutions</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span>Process</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="/">
              <div className="btn-primary btn btn-sm navigation-cta">
                <span>Get Connected</span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-controls="mobileOverlay"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="icon-menu"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div aria-label="NetNexis Home" className="navigation-logo-link">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand section-title">NetNexis</span>
            </div>
          </a>
          <button
            id="navClose"
            aria-label="Close menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li className="stagger-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="stagger-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>Solutions</span>
                </div>
              </a>
            </li>
            <li className="stagger-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>Process</span>
                </div>
              </a>
            </li>
            <li className="stagger-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>About</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="stagger-item navigation-mobile-actions">
            <a href="/">
              <div className="btn-primary btn navigation-mobile-cta btn-lg">
                <span>Start Your Project</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay, .stagger-item {
  transition: none;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("navToggle")
  const closeBtn = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const body = document.body

  function openMenu() {
    mobileOverlay.classList.add("is-open")
    toggleBtn.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-open")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("navigation-mobile-link")) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset
    const nav = document.querySelector(".navigation-wrapper")

    if (currentScroll > 50) {
      nav.style.boxShadow = "0 10px 30px -10px color-mix(in srgb, var(--color-on-surface) 10%, transparent)"
      nav.style.padding = "var(--spacing-xs) 0"
    } else {
      nav.style.boxShadow = "none"
      nav.style.padding = "0"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
