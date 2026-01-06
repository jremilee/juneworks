// Home.js
import React, { useEffect, useRef } from "react";
import Nav from "./Nav";

export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => console.log('brain video played'))
      .catch((e) => console.error('brain video play failed', e));
  }, []);

  return (
    <div className="home">
      {/* Top Nav */}
      <Nav />

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
            <img src="/images/hand-2.png" alt="Image of hand holding minature objects" />
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

            {/* Decorative looping video (muted, autoplay, loop). */}
            <span className="other__icon" aria-hidden="true">
              <video
                ref={videoRef}
                className="other__video"
                autoPlay
                muted
                playsInline
                loop
                aria-hidden="true"
                poster="/images/brain-poster.png"
                onError={(e) => {
                  const v = e.currentTarget;
                  v.style.display = 'none';
                  const img = v.nextElementSibling;
                  if (img) img.style.display = 'block';
                }}
                preload="metadata"
              >
                <source src="/videos/brain.mp4" type="video/mp4" />
                <source src="/videos/brain.webm" type="video/webm" />

              </video>

              <img
                className="other__videoPoster"
                src="/images/brain-poster.png"
                alt="Brain doodle"
                style={{ display: 'none' }}
              />
            </span>

            <span className="other__text">WORKS</span>
          </div>
        </section>
      </main>
    </div>
  );
}
