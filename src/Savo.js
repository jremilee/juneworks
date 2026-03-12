import React, { useState } from "react";
import "./Savo.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { allImages } from "./utils/imageLoader";
import SavoTimeline from "./SavoTimeline";

import heroLaptopMockup from "./images/savo-hero-laptop.svg";
import reportSlidePreview from "./images/savo-report-slide.svg";

const getSavoSlide = (slideNumber) => {
  const baseName = `savo-${slideNumber}`;
  return (
    allImages[`${baseName}.png`] ||
    allImages[`${baseName}.jpg`] ||
    allImages[`${baseName}.jpeg`] ||
    allImages[`${baseName}.webp`] ||
    allImages[`${baseName}.svg`] ||
    null
  );
};

const savoSlides = [
  reportSlidePreview,
  ...Array.from({ length: 10 }, (_, index) => getSavoSlide(index + 2)).filter(Boolean),
];




const SavoHealthProject = () => {
  const slides = savoSlides;
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
          <h2>Savo Health is a health tech start up aimed at improving workflows for diabetes prevention program providers</h2>
          <p className="savo-note">
            **Due to a confidentiality agreement, I can only disclose limited
            information about my work in my portfolio. If you are interested in
            learning more, please reach out via email at june1818junel@icloud.com.
            Thank you!
          </p>
        </section>

        <section className="savo-research-section">
          <div className="savo-tag">RESEARCH</div>
          <h3>4-Week Discovery Initiative </h3>

          <p>
            I conducted 60+ cold calls to diabetes prevention programs based in NY
            and completed 30–40 minute interviews with DPP leadership and staff to
            gain a comprehensive understanding of the logistics and difficulties of
            providing the DPP program. This research helped me determine which features would be most valuable in Savo's MVP. 
          </p>

          <SavoTimeline />

          <p>
            At the end of my internship, I synthesized my findings and submitted a deliverable with analysis of
            the interviews and product direction suggestions. As a result of my
            findings, the CEO decided to change the pricing strategy of Savo and
            an unnecessary feature (originally thought to be essential) was cut from the early version of the MVP.
          </p>

          <div className="savo-carousel-wrap">
            <div className="savo-carousel">
              <div className="savo-carousel-image-frame">
                <img
                  src={slides[currentSlide]}
                  alt={`Savo report slide ${currentSlide + 1}`}
                  className="savo-carousel-image"
                />
              </div>

              <div className="savo-carousel-controls">
                <button
                  className="savo-carousel-btn savo-carousel-btn-left"
                  onClick={goPrev}
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                <div className="savo-carousel-counter">
                  {currentSlide + 1}/{slides.length}
                </div>

                <button
                  className="savo-carousel-btn savo-carousel-btn-right"
                  onClick={goNext}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SavoHealthProject;