// Miai.js
import React, { useEffect } from "react";
import Nav from "./Nav";

export default function Miai() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="miai">

        <div className="tl__bannerContainer">
          <img src="/images/miai-banner.webp" alt="MIAI Puppeteer Interface Banner" className="tl__banner"/>
        </div>

        <header className="tl__header">
          <h1 className="tl__title">MIAI</h1>
          <p className="tl__subtitle">UX Design | System Design | Prototyping</p>
        </header>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitleD">Human or AI? A Turing-style interrogation game</p></h2>

          <p><strong>Overview:</strong> Single-player 2D PvE interrogation game for PC. The Inquisitor (INQ) interrogates three suspects. Two suspects are AI-controlled; one is controlled by a Puppeteer (PUP). Only the culprit and the PUP may lie. The INQ must identify the culprit and the hijacked AIC. The PUP must mimic AI behavior to mislead the INQ while solving the case.</p>
        </section>

        <section className="tl__section" aria-label="Design challenge">
          <h2 className="tl__sectionTitle">Design Challenge</h2>
          <ul className="tl__list">
            <li>Design the Puppeteer POV interface</li>
            <li>Create an immersive 2D experience despite the original 2.5D prototype</li>
            <li>Provide easy access to chat log, incident summary, and suspect profiles</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="Style guide">
          <h2 className="tl__sectionTitle">Developing Style Guide</h2>
          <p className="tl__list">Typeface exploration (sci-fi, futuristic, pixel), pixel art integration, and a readable body face for a text-heavy experience. Color palette chosen with the art team to match the game's tone.</p>

          <div className="tl__img" aria-label="Style guide preview">
            <img src="/images/miai-style.png" alt="Style guide and typeface samples" />
          </div>
        </section>

        <section className="tl__section" aria-label="Interface design">
          <h2 className="tl__sectionTitle">Designing the Puppeteer Interface</h2>
          <p className="tl__list">Inspired by video conferencing layouts. The Puppeteer receives a dedicated screen among the AIC lineup; chat and info panels are surfaced constantly in a tri-fold layout for quick reference.</p>

          <div className="tl__img2" aria-label="Interface sketches">
            <img src="/images/miai-layouts.png" alt="Interface sketches and brainstormed formats" />
          </div>
        </section>

        <section className="tl__section" aria-label="Drafts and iterations">
          <h2 className="tl__sectionTitle">Drafts & Iterations</h2>

          <h3 className="tl__subhead">Draft 1 — Trifold</h3>
          <p>The tri-fold design places chat on the right for left-to-right reading of dialogue, while incident summary and suspect profiles remain immediately available.</p>

          <h3 className="tl__subhead">Draft 2 — INQ left panel</h3>
          <p>Moving the INQ to a left panel creates a clear boundary with the AICs, adds timers, chat filters, and gives space to highlight the active speaker.</p>

          <h3 className="tl__subhead">Draft 3 & 4 — 3 AIC layout & smoother transitions</h3>
          <p>Reorganized AIC placement to allow larger widgets and smoother transitions when targeting single or multiple AICs.</p>
        </section>

        <section className="tl__section" aria-label="Final mockup">
          <h2 className="tl__sectionTitle">Final Draft</h2>
          <p className="tl__list">Finalized a centered fold for the three AICs, persistent chat and summary panels, and visual cues for the targeted AIC to maintain player orientation between rounds.</p>

          <div className="tl__img" aria-label="Final mockup">
            <img src="/images/miai-final.png" alt="Final Puppeteer interface mockup" />
          </div>
        </section>

        <section className="tl__section" aria-label="Testing and launch">
          <h2 className="tl__sectionTitle">Testing</h2>
          <p>Prototype playtests validated the tri-fold access pattern and the clarity of the Puppeteer cues. Project launched in summer 2025.</p>
          <p>Playable demo: <a href="https://miai.dev/game" target="_blank" rel="noreferrer">miai.dev/game</a></p>
        </section>

        <section className="tl__section" aria-label="What I did">
          <h2 className="tl__sectionTitle">My Role</h2>
          <ul className="tl__list">
            <li>Developed Puppeteer POV interface design and prototypes.</li>
            <li>Collaborated with art team on typeface and palette selection.</li>
            <li>Conducted prototype playtests and iterated on interaction flow.</li>
          </ul>
        </section>

        </main>
      </div>
    </>
  );
}
