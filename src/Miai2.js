import React, { useEffect, useRef, useState } from "react";
import { allImages } from "./utils/imageLoader";
import "./Miai2.css";
import heroBanner from "./images/MIAI-poster.webp";
import contextTransitionImage from "./images/context-transition-frame.png";
import context2DImage from "./images/miai-video.mp4";
import styleGuideHeaderImage from "./images/style-guide-header.svg";
import styleGuideBodyImage from "./images/style-guide-body.svg";
import styleGuidePaletteImage from "./images/style-guide-palette.svg";
import aiShadow1 from "./images/ai-shadow1.svg";
import aiShadowWbubble from "./images/ai-shadow-wbubble.svg";
import aiShadow3 from "./images/ai-shadow-3.svg";
import humanShadow from "./images/human-shadow.svg";
import riskOneImage from "./images/risk-to-one.png";
import riskAllImage from "./images/risk-all.png";
import puppeteerInterfaceStrip from "./images/puppeteer-interface-strip.svg";
import trifoldDesignImage from "./images/trifold-design.svg";
import annotatedInterfaceImage from "./images/annotated-interface.svg";
import characterSelectionSummaryImage from "./images/character-summary-tab.svg";
import characterSelectionSuspectsImage from "./images/character-suspects-tab.svg";
import finalMockup1 from "./images/final-mockup-1.svg";
import finalMockup2 from "./images/final-mockup-2.svg";
import finalMockup3 from "./images/final-mockup-3.svg";
import finalMockup4 from "./images/final-mockup-4.svg";
import finalMockup5 from "./images/final-mockup-5.svg";
import finalMockup6 from "./images/final-mockup-6.svg";
import finalMockup7 from "./images/final-mockup-7.svg";
import finalMockup8 from "./images/final-mockup-8.svg";
import finalMockup9 from "./images/final-mockup-9.svg";

import contactLaptopHand from "./images/footer-finger-darkmode.svg";
import Nav from "./Nav";



const finalMockups = [
  finalMockup1,
  finalMockup2,
  finalMockup3,
  finalMockup4,
  finalMockup5,
  finalMockup6,
  finalMockup7,
  finalMockup8,
  finalMockup9,
];

function SectionLabel({ children }) {
  return <div className="miai-section-label">{children}</div>;
}

function InfoItem({ title, children }) {
  return (
    <div className="miai-info-item">
      <p className="miai-info-title">{title}</p>
      <p className="miai-info-text">{children}</p>
    </div>
  );
}

export default function MiaiVideogameProject() {
  const styleHeaderRef = useRef(null);
  const stylePaletteRef = useRef(null);
  const styleBodyRef = useRef(null);
  const mechanicsImagesRef = useRef(null);
  const centeredImageRef = useRef(null);
  const annotatedImageRef = useRef(null);
  const twoUpRef = useRef(null);
  const galleryRef = useRef(null);
  const revealQueueRef = useRef([]);
  const queuedKeysRef = useRef(new Set());
  const isProcessingQueueRef = useRef(false);
  const revealTimeoutRef = useRef(null);
  const [styleHeaderVisible, setStyleHeaderVisible] = useState(false);
  const [stylePaletteVisible, setStylePaletteVisible] = useState(false);
  const [styleBodyVisible, setStyleBodyVisible] = useState(false);
  const [mechanicsImagesVisible, setMechanicsImagesVisible] = useState(false);
  const [centeredImageVisible, setCenteredImageVisible] = useState(false);
  const [annotatedImageVisible, setAnnotatedImageVisible] = useState(false);
  const [twoUpVisible, setTwoUpVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const observers = [];
    const revealByKey = {
      header: setStyleHeaderVisible,
      palette: setStylePaletteVisible,
      body: setStyleBodyVisible,
    };

    const processRevealQueue = () => {
      if (isProcessingQueueRef.current) return;
      if (!revealQueueRef.current.length) return;

      isProcessingQueueRef.current = true;
      const nextKey = revealQueueRef.current.shift();
      queuedKeysRef.current.delete(nextKey);
      const reveal = revealByKey[nextKey];
      if (reveal) reveal(true);

      revealTimeoutRef.current = setTimeout(() => {
        isProcessingQueueRef.current = false;
        processRevealQueue();
      }, 300);
    };

    const enqueueReveal = (key) => {
      if (queuedKeysRef.current.has(key)) return;
      queuedKeysRef.current.add(key);
      revealQueueRef.current.push(key);
      processRevealQueue();
    };

    const observeOnce = (node, key) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            enqueueReveal(key);
            observer.disconnect();
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(node);
      observers.push(observer);
    };

    observeOnce(styleHeaderRef.current, "header");
    observeOnce(stylePaletteRef.current, "palette");
    observeOnce(styleBodyRef.current, "body");

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const node = mechanicsImagesRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setMechanicsImagesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = centeredImageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setCenteredImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = annotatedImageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnnotatedImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = twoUpRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTwoUpVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = galleryRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setGalleryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div className="miai2-page">
      <header className="miai-hero">
        <div className="miai-hero-image-wrap">
          <img
            src={heroBanner}
            alt="M.I.A.I. videogame hero artwork"
            className="miai-hero-image"
          />
          <div className="miai-hero-overlay" />
        </div>

        <div className="miai-hero-content">
          <h1>M.I.A.I. <br />Videogame</h1>
          <p>Human or AI? A Turing-style interrogation game</p>
        </div>
      </header>

      <section className="miai-project-meta">
        <InfoItem title="MY ROLE">User Experience Designer</InfoItem>
        <InfoItem title="TEAM">
          June Lee, Blaire Kim,
          <br />
          Charlotte Huang
        </InfoItem>
        <InfoItem title="DURATION">18 months (all part-time)</InfoItem>
        <InfoItem title="SKILLS">
          UX design, wire framing, game design
        </InfoItem>
      </section>

      <main className="miai-content">
        <section className="miai-section">
          <SectionLabel>THE CONTEXT</SectionLabel>
          <h2>M.I.A.I is a single-player 2D PvE interrogation game for PC.</h2>
          <p className="miai-body-copy">
            During the course of this 18-month project, the scope of the project and
            design was changed from 2.5D (3D but with 2D assets) to 2D and game
            structure was also changed. This case study focuses on the design
            decisions when transitioning from 2.5D to 2D but explains relevant
            design decisions from the 2.5D game.
          </p>

          <div className="miai-context-visual">
            <div className="miai-context-media-item">
              <div className="miai-context-card">
                <video
                  className="miai-context-video"
                  src={context2DImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="2.5D sample concept"
                />
              </div>
              <p className="miai-context-video-caption">
                Sample 2.5D concept footage (not final art)
              </p>
            </div>

            <div className="miai-context-arrow" aria-hidden="true">
              →
            </div>

            <div className="miai-context-media-item">
              <div className="miai-context-card miai-context-card--question">
                <img src={contextTransitionImage} alt="Transition concept frame" />
              </div>
              <p className="miai-context-video-caption"></p>
            </div>
          </div>
        </section>

        <section className="miai-section miai-section--tight-top">
          <SectionLabel>GAME MECHANICS</SectionLabel>
          <p className="miai-mechanics-text">
            You are a human player “hijacking” one of four AI suspects. You are
            sitting across from the Inquisitor (the AI judge). To win, you must
            uncover the actual culprit among the suspects while acting exactly like
            AI to stay undercover. Only the culprit and the human player may lie.
          </p>

          <div className={`miai-mechanics-images${mechanicsImagesVisible ? " is-visible" : ""}`} ref={mechanicsImagesRef}>
            <img src={aiShadow1} alt="AI shadow 1" />
            <img src={aiShadow1} alt="AI shadow with bubble" />
            <img src={aiShadow3} alt="AI shadow 3" />
            <img src={humanShadow} alt="Human shadow" />
          </div>
        </section>

        <section className="miai-section">
          <SectionLabel>THE CHALLENGE</SectionLabel>
          <h2>
            How can we create an immersive 2D experience from the puppeteer’s POV?
          </h2>
          <ul className="miai-bullet-list">
            <li>
              Interface must provide easy access to chat log, incident summary, and
              suspect profiles
            </li>
            <li>
              Designs should have static elements / not too many changes in screen
              structure so that it is easy to implement for the development team
              (in order to meet the fixed August deadline)
            </li>
          </ul>
        </section>

        <section className="miai-section">
          <SectionLabel>THE PROCESS</SectionLabel>
          <h2>Developing the Style Guide</h2>
          <div className="miai-copy-block dev-style-guide">
            <p>
              I worked directly with the art team to develop a style guide for the
              game (created during 2.5D stage).
            </p>
            <p>
              Based on the art team’s direction (“sci-fi”, “futuristic”, “pixel”),
              I researched commercially free typefaces and evaluated them within
              actual game mockups to ensure visual compatibility with pixel art and
              typography separately.
            </p>
            <p>
              I collaborated closely with the art team to balance stylistic impact
              with clarity, especially given the game’s text-heavy experience, and
              helped define a high-contrast palette that clearly separated the two
              opposing roles while maintaining visual cohesion.
            </p>
          </div>

          <div className="miai-style-guide-grid">
            <div
              className={`miai-style-card miai-style-header${styleHeaderVisible ? " is-visible" : ""}`}
              ref={styleHeaderRef}
            >
              <div className="miai-style-card-title">HEADER</div>
              <img src={styleGuideHeaderImage} alt="Header style guide" />
            </div>

            <div
              className={`miai-style-card miai-style-palette${stylePaletteVisible ? " is-visible" : ""}`}
              ref={stylePaletteRef}
            >
              <div className="miai-style-card-title">PALETTE</div>
              <img src={styleGuidePaletteImage} alt="Palette style guide" />
            </div>

            <div
              className={`miai-style-card miai-style-card--wide miai-style-body${styleBodyVisible ? " is-visible" : ""}`}
              ref={styleBodyRef}
            >
              <div className="miai-style-card-title">BODY</div>
              <img src={styleGuideBodyImage} alt="Body typography style guide" />
            </div>
          </div>
        </section>

        <section className="miai-section">
          <h2>Designing the Pupeteer’s Interface</h2>
          <div className="miai-copy-block">
            <p>
              When transitioning from 2.5D to 2D, we prioritized maintaining a
              strong sense of immersion. Drawing inspiration from video
              conferencing layouts, I brainstormed interfaces where the Puppeteer
              appears within a grid-like system — creating the feeling of being
              actively observed, similar to a Zoom setting.
            </p>
            <p>
              To align with the game director’s vision that the Puppeteer should
              feel like they are “hiding among the AIC”, I positioned the
              character directly within the AIC grid to reinforce tension and
              concealment. Insights from beta testing also showed that players
              required near-constant access to the chat log, incident summary, and
              suspect profiles, so we therefore structured the layout to make these
              elements easily accessible without disrupting gameplay flow.
            </p>
          </div>

          <div className="miai-full-image">
            <img
              src={puppeteerInterfaceStrip}
              alt="Early interface exploration strip"
            />
          </div>
        </section>

        <section className="miai-section">
          <h2>Trifold Design</h2>
          <div className="miai-copy-block">
            <p>
              User testing revealed that many players required almost constant access to 
              the chat log, incident summary, and suspect profiles (which are large chunks of text).  After debating between the screen looking cluttered and the
              importance of having easy access to the features, we came to the conclusion that having to open and
              close the chat logs, summary, etc., would add friction to the gameplay and make it unenjoyable
              for the player.
            </p>
            <p>
              We transitioned to a tri-fold design to allow for constant access to
              both the chat log, incident summary, and the suspect profiles. The
              chat log was placed on the right to allow for easy reading of “left
              to right” from the AIC dialogue in the center of the screen.
            </p>
          </div>

          <div
            className={`miai-centered-image miai-centered-image--medium miai-centered-image--float-up${centeredImageVisible ? " is-visible" : ""}`}
            ref={centeredImageRef}
          >
            <img src={trifoldDesignImage} alt="Trifold design mockup" />
          </div>
        </section>

        <section className="miai-section">
          <div className="miai-copy-block">
            <p>
              During the game, the Inquisitor alternates between asking a question
              to all 4 suspects or just 1 suspect. In order to highlight the AIC
              who is replying, I suggested that the Inquisitor (INQ) be moved to
              the side and the AIC who is responding to be shown on the larger
              screen. To accommodate the large amount of text, I added scroll bars to the
              incident summary and suspect profiles to allow players to access relevant
              text at any time.
            </p>
            <p>
              I also added a visual sliding timer above the typing box so that the user
              could easily correlate the ticking time and have visual access to how
              much time is left when typing. We also added a chat filter and an
              annotator to the chat log to allow players to easily parse the texts
              from specific AIC and also mark relevant evidence.
            </p>
          </div>

          <div className={`miai-annotated-image miai-annotated-image--float-up${annotatedImageVisible ? " is-visible" : ""}`} ref={annotatedImageRef}>
            <h3>
                Annotated interface 
            </h3>
            <p>
                Notes on design decisions and features such as the sliding timer, scrollable text boxes, and chat log improvements
            </p>
            <img
              src={annotatedInterfaceImage}
              alt="Annotated final interface with notes"
            />
          </div>

          <div className={`miai-two-up${twoUpVisible ? " is-visible" : ""}`} ref={twoUpRef}>
            <div className="miai-two-up-card">
              <h3>Ask one AIC</h3>
              <p>Players can choose one AIC to ask a question. The AIC being prompted is on the largest center screen for visual hierarchy</p>
              <img src={riskOneImage} alt="Risk to one interface state" />
            </div>

            <div className="miai-two-up-card">
              <h3>Ask all AICs</h3>
              <p>Players can ask all AICs a question. The AICs are shown on equal sized screens</p>
              <img src={riskAllImage} alt="Risk all interface state" />
            </div>
          </div>
        </section>

        <section className="miai-section">
          <SectionLabel>ADDITIONAL PAGES</SectionLabel>
          <h2>Designing character selection</h2>
          <div className="miai-copy-block">
            <p>
              To move beyond a static character selection screen, we designed a
              cyber-inspired manila filing folder interface with tabbed sections.
            </p>
            <p>
              This allowed us to organize the case summary and suspect profiles
              cleanly while reinforcing the game’s theme of misinformation and
              information overload. Navigating the tabs mirrors the experience of
              sifting through conflicting data to uncover the truth — making the UI
              feel narratively integrated rather than purely functional.
            </p>
          </div>

          <div className={`miai-two-image-gallery${galleryVisible ? " is-visible" : ""}`} ref={galleryRef}>
            <div className="miai-gallery-image-card">
              <img
                src={characterSelectionSummaryImage}
                alt="Character selection summary tab"
              />
            </div>
            <div className="miai-gallery-image-card">
              <img
                src={characterSelectionSuspectsImage}
                alt="Character selection suspects tab"
              />
            </div>
          </div>
        </section>

        <section className="miai-section">
          <h2>Final High Fidelity Mock Ups</h2>
          <div className="miai-mockup-grid">
            {finalMockups.map((mockup, index) => (
              <div className="miai-mockup-card" key={`mockup-${index}`}>
                <img
                  src={mockup}
                  alt={`Final high fidelity mockup ${index + 1}`}
                />
              </div>
            ))}
          </div>

            <div className="game-link-section">
                <p>
                    Project launched in summer 2025! Prototype playtests validated the
                    tri-fold access pattern and the clarity of the Puppeteer cues.
                </p>

                <a
                    className="externalBtn"
                    href="https://miai.dev/game"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Game
                </a>
            </div>
        </section>
      </main>

        

      <footer className="miai-footer">
        <div className="miai-footer-left">
          <img src={contactLaptopHand} alt="Finger holding laptop illustration" />
        </div>

        <div className="miai-footer-right">
          <h2>
            Thanks for stopping by -
            <br />
            want to grab a coffee and chat?
          </h2>

          <div className="miai-socials">
            <a
              href="https://www.linkedin.com/in/june-lee-18snvk90/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src={allImages["linkedin-icon.png"]} alt="LinkedIn Icon" />
            </a>


            <a
                href="mailto:jrl2227@barnard.edu"
                aria-label="Email"
                title="Email"
            >
                <img src={allImages["gmail-icon.png"]} alt="email Icon" />
            </a>

          </div>
        </div>

        <div className="miai-footer-credit">@juneworks2026</div>
      </footer>
    </div>
    </>
  );
}

