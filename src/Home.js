// Home.js
import React from "react";

export default function Home() {
  return (
    <div className="home">
      {/* Top Nav */}
      <header className="nav">
        <div className="nav__inner">
          <nav className="nav__links" aria-label="Primary">
            <a className="nav__link nav__link--active" href="#home">
              Home
            </a>
            <a className="nav__link" href="#about">
              About
            </a>
          </nav>
        </div>
        <div className="nav__divider" />
      </header>

      <main className="content" id="home">
        {/* Hero */}
        <section className="hero">

          <div className="hero__left">
            <h1 className="hero__title">Hi! I’m June, a UX designer based in NYC</h1>
            <p className="hero__subtitle">
              With a background in cognitive science and ADA compliance, I craft accessible and
              imaginative gamified experiences that make a meaningful difference in users’ lives.
            </p>
          </div>

        
          {/* hand image */}
          <div className="hero__bg" aria-hidden="true">
            <img src="/images/hand-transparent.png" alt="Image of hand holding minature objects" />
          </div>

        </section>

        {/* Projects */}
        <div className="projectsCols">
          <div className="projectsCol projectsCol--left">
            {/* Project 1 */}
            <a
              id="sharp"
              href="#"
              className="proj-left"
              aria-label="Accessibility Audit project"
            >
              <div className="proj__thumb">
                <img src="/images/sharp-consolidation.png" alt="Accessibility Audit project" />
              </div>

              <div className="proj__overlay">
                <div className="proj__overlayInner">Accessibility Audit</div>
              </div>
            </a>

            {/* Project 3 */}
            <a
              id="thirstylion"
              href="#"
              className="proj-left"
              aria-label="Mobile UX Case Study project"
            >
              <div className="proj__thumb">
                <img src="/images/thirstylion-2.png" alt="Mobile UX Case Study project" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">Mobile UX Case Study</div>
              </div>
            </a>
          </div>

          <div className="projectsCol projectsCol--right">
            {/* Project 2 */}
            <a
              id="miai"
              href="#"
              className="proj-right"
              aria-label="Research Dashboard project"
            >
              <div className="proj__thumb">   
                <img src="/images/miai-laptop.png" alt="Research Dashboard project" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">Research Dashboard</div>
              </div>
            </a>

            {/* Project 4 */}
            <a
              id="alterea"
              href="#"
              className="proj-right"
              aria-label="Gamified Learning Tool project"
            >
              <div className="proj__thumb">
                <img src="/images/alterea-tablet.png" alt="Gamified Learning Tool project" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">Gamified Learning Tool</div>
              </div>
            </a>

            {/* Project 5 */}
            <a
              id="techspace"
              href="#"
              className="proj-right"
              aria-label="Space Threads App project"
            >
              <div className="proj__thumb">
                <img src="/images/techspace.png" alt="Space Threads App project" />
              </div>

              <div className="proj__overlay">
                <div className="proj__overlayInner">Space Threads App</div>
              </div>
            </a>
          </div>
        </div>


        {/* Other creative works */}
        <section className="other" aria-label="Other creative works">
          <div className="other__row">
            <span className="other__text">OTHER CREATIVE</span>

            {/* Simple brain doodle as inline SVG (optional). Replace/remove if you want. */}
            <span className="other__icon" aria-hidden="true">
              <svg
                viewBox="0 0 120 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="brainSvg"
              >
                <path
                  d="M24 46c-8-6-9-17-2-24 7-7 18-6 24 2 6-8 18-9 26-2 7-7 18-8 25 0 7 7 6 18-2 24 8 6 9 17 2 24-7 7-18 6-24-2-6 8-18 9-26 2-7 7-18 8-25 0-7-7-6-18 2-24Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 26c-5 6-5 14 0 20m12-26c-6 9-6 21 0 30m12-30c-6 9-6 21 0 30m12-24c5 6 5 14 0 20"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="other__text">WORKS</span>
          </div>
        </section>
      </main>
    </div>
  );
}
