// Home.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { allImages } from "./utils/imageLoader";

export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => console.log('S video played'))
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
            <img src={allImages['hand-2.png']} alt="Image of hand holding minature objects" />
          </div>

        </section>

        {/* Projects */}
        <div className="projectsCols">
          <div className="projectsCol projectsCol--left">
            {/* Project 1 */}
            <Link
              id="sharp"
              to = "/sharp"
              className="proj-left"
              aria-label="Sharp Electronics"
            >
              <div className="proj__thumb">
                <img src={allImages['sharp-consolidation.png']} alt="Sharp Electronics project" />
              </div>

              <div className="proj__overlay">
                <div className="proj__overlayInner">Sharp Electronics</div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link
              id="thirstylion"
              to="/thirstylion"
              className="proj-left"
              aria-label="Thirsty Lion project"
            >
              <div className="proj__thumb">
                <img src={allImages['thirstylion-2.png']} alt="Thirsty Lion" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">ThirstyLion</div>
              </div>
            </Link>
          </div>

          <div className="projectsCol projectsCol--right">
            {/* Project 2 */}
            <Link
              id="miai"
              to="/miai"
              className="proj-right"
              aria-label="M.I.A.I. Game"
            >
              <div className="proj__thumb">   
                <img src={allImages['miai-laptop.png']} alt="M.I.A.I. Game" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">M.I.A.I</div>
              </div>
            </Link>

            {/* Project 4 */}
            <Link
              id="alterea"
              to="/alterea"
              className="proj-right"
              aria-label="Gamified Learning Tool project"
            >
              <div className="proj__thumb">
                <img src={allImages['alterea-tablet.png']} alt="Gamified Learning Tool project" />
              </div>
              <div className="proj__overlay">
                <div className="proj__overlayInner">Agents of Influence Game</div>
              </div>
            </Link>

            {/* Project 5 */}
            <Link
              id="techspace"
              to="/techspace"
              className="proj-right"
              aria-label="Space Threads App project"
            >
              <div className="proj__thumb">
                <img src={allImages['techspace.png']} alt="Space Threads App project" />
              </div>

              <div className="proj__overlay">
                <div className="proj__overlayInner">TechSpace</div>
              </div>
            </Link>
          </div>
        </div>


        {/* Other creative works */}
        <section className="other" aria-label="Other creative works">
          <div className="other__row">
            <span className="other__text">OTHER CREATIVE</span>

            {/* Decorative looping video (muted, autoplay, loop). */}
            <span className="other__icon" aria-hidden="true">
              <Link to="/creativeworks" className="brainVideoBtn">
                <video
                  ref={videoRef}
                  className="other__video brainSvg"
                  autoPlay
                  muted
                  playsInline
                  loop
                  aria-hidden="true"
                  poster={allImages['brain-poster.png']}
                  onError={(e) => {
                    const v = e.currentTarget;
                    v.style.display = 'none';
                    const img = v.nextElementSibling;
                    if (img) img.style.display = 'block';
                  }}
                  preload="metadata"
                >
                  <source src={`${process.env.PUBLIC_URL}/videos/brain.mp4`} type="video/mp4" />
                  <source src={`${process.env.PUBLIC_URL}/videos/brain.webm`} type="video/webm" />

                </video>
              </Link>

              <img
                className="other__videoPoster"
                src={allImages['brain-poster.png']}
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
