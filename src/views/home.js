import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Celebrated Vital Alpaca</title>
        <meta property="og:title" content="Celebrated Vital Alpaca" />
        <link
          rel="canonical"
          href="https://celebrated-vital-alpaca-dy97wx.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-overlay">
        <video
          src="https://videos.pexels.com/video-files/7140937/7140937-hd_1280_720_24fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/7140937/pictures/preview-0.jpg"
          autoPlay="true"
          playsInline="true"
          className="hero-bg-video"
        ></video>
        <div className="hero-scrim"></div>
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-title home-hero-title">
              Hyper-Reliable Networks for Your Small Business
            </h1>
            <p className="hero-subtitle home-hero-subtitle">
              Professional installation of switches, access points, and Wi-Fi
              infrastructure. We connect your team so you can focus on growth.
            </p>
            <div className="hero-cta-group">
              <a href="#contact">
                <div className="btn-primary btn btn-lg">
                  <span>Get a Free Survey</span>
                </div>
              </a>
              <a href="#services">
                <div className="btn btn-lg btn-outline">
                  <span>View Services</span>
                </div>
              </a>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-badge">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                <span>Secure Setup</span>
              </div>
              <div className="trust-badge">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span>Certified Tech</span>
              </div>
              <div className="trust-badge">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services-grid">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Network Services</h2>
            <p className="section-subtitle">
              Tailored infrastructure solutions for modern small businesses.
            </p>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="14" rx="2" width="20" height="8"></rect>
                  <path d="M6.01 18H6m4.01 0H10m5-8v4m2.84-6.83a4 4 0 0 0-5.66 0m8.48-2.83a8 8 0 0 0-11.31 0"></path>
                </svg>
              </div>
              <h3>Switch Installations</h3>
              <ul className="service-bullets">
                <li>
                  <span>Managed L2/L3 switch setup</span>
                </li>
                <li>
                  <span>VLAN configuration &amp; security</span>
                </li>
                <li>
                  <span>Rack mounting &amp; cable management</span>
                </li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"></path>
                </svg>
              </div>
              <h3>AP Deployment</h3>
              <ul className="service-bullets">
                <li>
                  <span>Strategic placement for coverage</span>
                </li>
                <li>
                  <span>PoE ceiling &amp; wall mounting</span>
                </li>
                <li>
                  <span>Mesh &amp; controller-based setups</span>
                </li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m13.11 7.664l1.78 2.672m-.728 2.452l-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <circle r="2" cx="12" cy="6"></circle>
                  <circle r="2" cx="16" cy="12"></circle>
                  <circle r="2" cx="9" cy="15"></circle>
                </svg>
              </div>
              <h3>Wi-Fi Site Surveys</h3>
              <ul className="service-bullets">
                <li>
                  <span>Heatmap coverage analysis</span>
                </li>
                <li>
                  <span>Interference troubleshooting</span>
                </li>
                <li>
                  <span>Spectrum &amp; bandwidth tuning</span>
                </li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" rx="2" width="14" height="8"></rect>
                  <rect x="2" y="14" rx="2" width="20" height="8"></rect>
                  <path d="M6 18h2m4 0h6"></path>
                </svg>
              </div>
              <h3>PC &amp; Endpoint Setup</h3>
              <ul className="service-bullets">
                <li>
                  <span>Wired workstation connectivity</span>
                </li>
                <li>
                  <span>Printer &amp; NAS integration</span>
                </li>
                <li>
                  <span>Network adapter optimization</span>
                </li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3>Network Security</h3>
              <ul className="service-bullets">
                <li>
                  <span>Firewall implementation</span>
                </li>
                <li>
                  <span>Guest network isolation</span>
                </li>
                <li>
                  <span>VPN for remote access</span>
                </li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-4v2m-4-1.996H6.657C4.085 16 2 13.993 2 11.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773c1.88-.572 3.956-.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486s-1.551 3.487-3.465 3.487H16"></path>
                </svg>
              </div>
              <h3>Cloud Management</h3>
              <ul className="service-bullets">
                <li>
                  <span>Remote monitoring dashboard</span>
                </li>
                <li>
                  <span>Firmware update scheduling</span>
                </li>
                <li>
                  <span>Performance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="process-steps">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Efficient Process</h2>
            <p className="section-subtitle">
              From initial audit to ongoing peace of mind.
            </p>
          </div>
          <div className="process-wrapper">
            <div className="process-step">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h4>Consultation</h4>
                <p>
                  We audit your current setup and define your specific bandwidth
                  and coverage needs.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h4>Install &amp; Test</h4>
                <p>
                  Professional on-site deployment with rigorous stress-testing
                  of all connections.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h4>Support</h4>
                <p>
                  Handover documentation and 24/7 monitoring to ensure zero
                  downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-grid">
        <div className="stats-overlay"></div>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">
              <span>250+</span>
            </div>
            <div className="stat-label">
              <span>Installs Completed</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <span>2hr</span>
            </div>
            <div className="stat-label">
              <span>Avg. Response Time</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <span>99%</span>
            </div>
            <div className="stat-label">
              <span>Uptime Improvement</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <span>150+</span>
            </div>
            <div className="stat-label">
              <span>Satisfied Clients</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <span>15k+</span>
            </div>
            <div className="stat-label">
              <span>Feet of Cable Run</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              <span>5★</span>
            </div>
            <div className="stat-label">
              <span>Average Rating</span>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-rail">
        <div className="container-full">
          <div className="section-header-centered">
            <h2 className="section-title">Trusted by Local Businesses</h2>
          </div>
          <div className="testimonials-scroll">
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;NetNexis transformed our office connectivity. No more dead
                zones in the warehouse!&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Sarah Jenkins</strong>
                  <span>CEO, Urban Logistics</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;Professional, fast, and organized. The rack wiring looks
                like a work of art.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Mark Thompson</strong>
                  <span>IT Manager, Creative Hub</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;The site survey was eye-opening. We finally have Wi-Fi
                that actually works for everyone.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Elena Rodriguez</strong>
                  <span>Owner, Sunnyside Cafe</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &quot;Reliable support when we needed to scale our PC fleet.
                Highly recommend their services.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>David Chen</strong>
                  <span>Founder, Tech-Start Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-grid">
        <div className="container-full">
          <div className="section-header-centered">
            <h2 className="section-title">Recent Work Showcase</h2>
          </div>
          <div className="showcase-wrapper">
            <div className="showcase-item">
              <img
                alt="Clean switch rack cabling"
                src="https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>Managed Switch Rack</h5>
                <p>Enterprise-grade L3 setup</p>
              </div>
            </div>
            <div className="showcase-item">
              <img
                alt="WiFi Access Point installation"
                src="https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>AP Deployment</h5>
                <p>Seamless mesh coverage</p>
              </div>
            </div>
            <div className="showcase-item">
              <img
                alt="Office workstation setup"
                src="https://images.pexels.com/photos/18471532/pexels-photo-18471532.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>Endpoint Connectivity</h5>
                <p>Wired office workstations</p>
              </div>
            </div>
            <div className="showcase-item">
              <img
                alt="Server room maintenance"
                src="https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>Infrastructure Audit</h5>
                <p>Full hardware refresh</p>
              </div>
            </div>
            <div className="showcase-item">
              <img
                alt="Network monitoring setup"
                src="https://images.pexels.com/photos/17489156/pexels-photo-17489156.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>Monitoring Station</h5>
                <p>Real-time uptime tracking</p>
              </div>
            </div>
            <div className="showcase-item">
              <img
                alt="Fiber optic cabling"
                src="https://images.pexels.com/photos/4497197/pexels-photo-4497197.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="showcase-caption">
                <h5>Fiber Backbone</h5>
                <p>High-speed data linking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title">Ready to Upgrade Your Network?</h2>
              <p className="section-content">
                Contact NetNexis today for a professional site survey. We
                specialize in rapid response for urgent installations.
              </p>
              <div className="cta-emergency-note">
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
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <span>
                  Emergency Support Available: Response within 2 hours.
                </span>
              </div>
            </div>
            <form
              action="/submit"
              method="POST"
              data-form-id="2993f818-088e-4a66-80fa-8c80071c029a"
              className="cta-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="thq_textinput_ND1K"
                  name="textinput"
                  required="true"
                  placeholder="Your Name"
                  data-form-field-id="thq_textinput_ND1K"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="thq_textinput_GHc8"
                  name="textinput"
                  required="true"
                  placeholder="Business Email"
                  data-form-field-id="thq_textinput_GHc8"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <select
                  id="thq_select__NUm"
                  name="select"
                  required="true"
                  data-form-field-id="thq_select__NUm"
                  className="form-input"
                >
                  <option value="true" disabled="true" selected="true">
                    Service Needed
                  </option>
                  <option value="wifi">Wi-Fi Survey</option>
                  <option value="switch">Switch/Rack Install</option>
                  <option value="endpoint">PC/Endpoint Connectivity</option>
                  <option value="emergency">Emergency Repair</option>
                </select>
              </div>
              <button
                id="thq_button_nrkO"
                name="button"
                type="submit"
                data-form-field-id="thq_button_nrkO"
                className="btn btn-lg btn-accent"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="netnexis-interactions">
(function(){
  // Simple scroll animation for showcase items
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .process-step, .stat-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })

  // Horizontal scroll for testimonials
  const scrollContainer = document.querySelector(".testimonials-scroll")
  let isDown = false
  let startX
  let scrollLeft

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true
    startX = e.pageX - scrollContainer.offsetLeft
    scrollLeft = scrollContainer.scrollLeft
  })

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false
  })

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false
  })

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - scrollContainer.offsetLeft
    const walk = (x - startX) * 2
    scrollContainer.scrollLeft = scrollLeft - walk
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon39"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text81">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
