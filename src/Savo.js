import React, { useState } from "react";
import "./Savo.css";

import heroLaptopMockup from "./images/savo-hero-laptop.png";
import reportSlidePreview from "./images/savo-report-slide.png";
import footerFingerLaptop from "./images/footer-finger-laptop.png";

const SavoHealthProject = () => {
  const slides = [reportSlidePreview];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="savo-page">
      <header className="savo-topbar">
        <nav className="savo-nav">
          <a href="/" className="savo-nav-link">Home</a>
          <a href="/about" className="savo-nav-link">About</a>
        </nav>
      </header>

      <section className="savo-hero">
        <div className="savo-hero-text">
          <h1>Savo Health</h1>
          <p>
            Reimagining Workflows for Diabetes
            <br />
            Prevention Program Providers (DPP)
          </p>
        </div>

        <div className="savo-hero-image-wrap">
          <img
            src={heroLaptopMockup}
            alt="Savo Health laptop mockup"
            className="savo-hero-image"
          />
        </div>
      </section>

      <section className="savo-info-band">
        <div className="savo-info-item">
          <h3>MY ROLE</h3>
          <p>User research intern</p>
        </div>

        <div className="savo-info-item">
          <h3>DURATION</h3>
          <p>4 weeks</p>
        </div>

        <div className="savo-info-item">
          <h3>SKILLS</h3>
          <p>
            User research, discovery calls,
            <br />
            interviewing, qualitative analysis,
            <br />
            product-market fit
          </p>
        </div>

        <div className="savo-info-item">
          <h3>OUTCOME</h3>
          <p>
            Insights from my discovery initiative
            <br />
            led to substantial changes in MVP
            <br />
            features and pricing strategy
          </p>
        </div>
      </section>

      <main className="savo-content">
        <section className="savo-context-section">
          <div className="savo-tag">THE CONTEXT</div>
          <h2>Savo Health is a health tech start up</h2>
          <p className="savo-note">
            **Due to a confidentiality agreement, I can only disclose limited
            information about my work in my portfolio. If you are interested in
            learning more, please reach out via email at june1818jonei@icloud.com.
            Thank you!
          </p>
        </section>

        <section className="savo-research-section">
          <div className="savo-tag">RESEARCH</div>
          <h3>During my internship, I led a discovery initiative.</h3>

          <p>
            I conducted 60+ cold calls to diabetes prevention programs based in NY
            and completed 30–40 minute interviews with DPP leadership and staff to
            gain a comprehensive understanding of the logistics and difficulties of
            providing the program.
          </p>

          <p>
            At the end of my internship, I submitted a deliverable with analysis of
            the interviews and product direction suggestions. As a result of my
            findings, the CEO decided to change the pricing strategy of Savo and
            the billing feature was cut from an early version of the MVP.
          </p>

          <div className="savo-carousel-wrap">
            <button
              className="savo-carousel-btn savo-carousel-btn-left"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className="savo-carousel">
              <img
                src={slides[currentSlide]}
                alt={`Savo report slide ${currentSlide + 1}`}
                className="savo-carousel-image"
              />

              <div className="savo-carousel-counter">
                {currentSlide + 1}/{slides.length}
              </div>
            </div>

            <button
              className="savo-carousel-btn savo-carousel-btn-right"
              onClick={goNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </section>
      </main>

      <footer className="savo-footer">
        <div className="savo-footer-image-wrap">
          <img
            src={footerFingerLaptop}
            alt="Finger holding laptop"
            className="savo-footer-image"
          />
        </div>

        <div className="savo-footer-content">
          <h3>
            Thanks for stopping by –
            <br />
            want to grab a coffee and chat?
          </h3>

          <div className="savo-footer-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="savo-social-link"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:june1818jonei@icloud.com"
              className="savo-social-link savo-social-link-gmail"
              aria-label="Email"
            >
              M
            </a>
          </div>
        </div>

        <div className="savo-footer-credit">@juneworks2026</div>
      </footer>
    </div>
  );
};

export default SavoHealthProject;