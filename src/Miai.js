// Miai.js
import React, { useEffect, useState } from "react";
import Nav from "./Nav";

function Slideshow({ images = [] }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="slideshow">
      <button className="slideshow__arrow slideshow__arrow--left" aria-label="Previous" onClick={prev}>&larr;</button>
      <img className="slideshow__img" src={images[index]} alt={`Slide ${index + 1}`} />
      <button className="slideshow__arrow slideshow__arrow--right" aria-label="Next" onClick={next}>&rarr;</button>

      <div className="slideshow__dots" aria-hidden="false">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot ${i === index ? 'slideshow__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Miai() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="miai">

        <header className="tl__header">
          <h1 className="tl__title">MIAI</h1>
          <p className="tl__subtitle">Wireframing | Game Design | Prototyping</p>
        </header>

        <div className="tl__bannerContainer">
          <img src="/images/miai-banner.webp" alt="MIAI Puppeteer Interface Banner" className="tl__banner"/>
        </div>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitle">Human or AI? A Turing-style interrogation game</p></h2>

          <p><strong>Team:</strong> June Lee, Blaire Kim, Charlette Huang </p>

          <p><strong>Overview:</strong> A single-player 2D PvE interrogation game for PC. </p>
          <p className="story">You are a human player "hijacking" one of three AI suspects. You are sitting across 
            from the Inquisitor (the AI judge). To win, you must uncover the actual culprit among 
            the suspects while acting exactly like AI to stay undercover. Only the culprit and the human player may lie.</p>
          
        </section>
        <h2 className="tl__sectionTitle-vid">2.5D Prototype</h2>
        <div className="tl__img2" aria-label="MIAI project video">
          <video src="/images/miai-video.mp4" className="tl__video" controls />
        </div>

        <section className="tl__section" aria-label="Design challenge">
          <h2 className="tl__sectionTitle">Design Challenge</h2>
          <ul className="tl__list">
            <li>Design the Puppeteer POV interface</li>
            <li>Create an immersive 2D experience despite the original 2.5D prototype (executive decision made to change to 2D instead.)</li>
            <li>Provide easy access to chat log, incident summary, and suspect profiles</li>
          </ul>
        </section>

        <section className="tl__section tl__twoCol" aria-label="Style guide">
          <h2 className="tl__sectionTitle">Developing Style Guide</h2>

          <div className="tl__twoColInner">
            <div className="tl__col">
              <div className="tl__img" aria-label="Style guide preview">
                <img src="/images/miai-1.png" alt="Style guide and typeface samples" />
              </div>
            </div>

            <div className="tl__col">
              <ol className="tl__list">
                <li>received typeface preferences from art team (“sci-fi”, “futuristic”, “pixel”)</li>
                <li>researched and compiled pixel and sci-fi typeface options free for commercial use</li>
                <li>Incorporated pixel art created by the art team to gauge the visual compatibility of the typeface</li>
                <li>Picked out 3 different header typefaces (one pixel, and two non-pixel) and compatible body typeface that is easy to read (game is text heavy)</li>
                <li>Chose color palette in collaboration with art team.</li>
              </ol>
            </div>
          </div>

          <div className="tl__img" aria-label="Interface sketches">
            <img src="/images/miai-3.png" alt="Interface sketches and brainstormed formats" />
          </div>
        </section>

        <section className="tl__section" aria-label="Interface design">
          <h2 className="tl__sectionTitle">Designing the Puppeteer Interface</h2>
          <p className="tl__list">Inspired by video conferencing layouts, the Puppeteer receives a dedicated screen among the AIC lineup; chat and info panels are surfaced constantly in a tri-fold layout for quick reference.</p>

          <div className="tl__img" aria-label="Interface sketches">
            <img src="/images/miai-4.png" alt="Interface sketches and brainstormed formats" />
          </div>
        </section>

        <section className="tl__section" aria-label="Drafts and iterations">
          <h2 className="tl__sectionTitle">Drafts & Iterations</h2>

          <h3 className="tl__subhead">Draft 1 — Trifold</h3>
          <p className="tl__list"><strong>Challenge: </strong>The chat log and info packet were easily accessible via buttons on the screen.  
            However, the game play required almost constant access of the chat log and having to constantly 
            open and close the log would be cumbersome.</p><br/>

          <p className="tl__list"><strong>Solution: </strong>We transitioned to a tri-fold design to allow for constant access to both the chat log, incident summary, 
            and the suspect profiles. The chat log was placed on the right to allow for easy reading of “left to right” 
            from the AIC dialogue in the center of the screen.</p><br/>

          <div className="tl__img2" aria-label="Interface sketches">
            <img src="/images/trifold-1.png" alt="Interface sketches and brainstormed formats" />
          </div>

          <h3 className="tl__subhead">Draft 2 — INQ left panel</h3>

          <p className="tl__list"><strong>Edits: </strong>INQ moved to the left panel to create a clear boundary between the INQ and AICs. 
          Later, added a round timer, response timer, chat filter, and other features for smoother play.</p>

          <div className="tl__img2" aria-label="Final mockup">
            <img src="/images/trifold-2.png" alt="Final Puppeteer interface mockup" />
          </div>

          <h3 className="tl__subhead">Draft 3 & 4 — 3 AIC layout & smoother transitions</h3>

          <p className="tl__list"><strong>Edits: </strong>Two frames were created to alternate between 
          when the INQ asked a question to one AIC vs all of the AIC.  This allows us to highlight the specific 
          AIC talking for “to one AIC” rounds and increase dialogue space. </p>

          <div className="tl__img2" aria-label="Interface sketches">
            <img src="/images/trifold-3.png" alt="Interface sketches and brainstormed formats" />
          </div>

        </section>

        <section className="tl__section" aria-label="Final mockup">
          <h2 className="tl__sectionTitle">Final Draft of All Pages</h2>

          <div className="tl__img" aria-label="Interface sketches">
            <Slideshow images={[
              '/images/miai-6.png',
              '/images/miai-7.png',
              '/images/miai-8.png',
              '/images/miai-9.png',
              '/images/miai-10.png',
              '/images/miai-11.png',
              '/images/miai-12.png',
              '/images/miai-13.png'
            ]} />
          </div>
        </section>

        <section className="tl__section tl__centerBottomPad" aria-label="Testing and launch">
          <h2 className="tl__sectionTitle">Project launched in summer 2025</h2>
          <p>Prototype playtests validated the tri-fold access pattern and the clarity of the Puppeteer cues. </p>
          <p>Playable demo: <a href="https://miai.dev/game" target="_blank" rel="noreferrer">miai.dev/game</a></p>
        </section>


        </main>
      </div>
    </>
  );
}
