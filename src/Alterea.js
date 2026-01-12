// Alterea.js
import React, { useEffect } from "react";
import Nav from "./Nav";

export default function Alterea() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="alterea">

        <header className="tl__header">
          <h1 className="tl__title">Agents of Influence</h1>
          <p className="tl__subtitle">Beta Testing | UX Improvements | Teacher Dashboard</p>
        </header>

        <div className="tl__bannerContainer">
          <video src="/videos/alterea-2.mp4" alt="Agents of Influence banner" className="tl__banner" autoPlay loop muted />
        </div>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitle">A spy-themed media literacy game with research, conversation, and analysis modes.</p></h2>

          <h3><strong>My Role:</strong> </h3> 
            <ul className="tl__list">
              <li>Conducted targeted beta testing and synthesized 15+ UI/UX pain points.</li>
              <li>Designed actionable UI fixes for both gameplay and the teacher dashboard based on player feedback.</li>
              <li>Developed an onboarding and gameplay guide used by over 600+ teachers, 
                reducing onboarding friction and improving classroom integration. </li>
            </ul>

        </section>

        <section className="tl__section" aria-label="Beta testing findings">
          <h2 className="tl__sectionTitle">Beta testing UI/UX suggestions</h2>
          <p className="tl__list">Research game example: highlighted items caused confusion — blue highlights were not draggable and yellow highlights were draggable, but players expected otherwise.</p>

          <div className="tl__img tl__img--spaced" aria-label="Research game highlights">
            <img src="/images/alterea-1.png" alt="Screenshot showing blue and yellow highlights in the research game" />
          </div>

          
          <section className="tl__section tl__twoCol" aria-label="Beta testing findings">
            <div className="tl__twoColInner">
              <div className="tl__col">
                <h3 className="tl__colTitle">Points of confusion:</h3>
                <ul className="tl__list">
                  <li>“Highlighted items” is confusing because there are both yellow and blue highlights, but blue highlighted items are not draggable. I tried to drag the blue initially when playing.</li>
                  <li>The yellow highlight on the image can be confused as a design element (aesthetic yellow tinge) rather than an interactive element.</li>
                  <li>It is confusing to know when you need to click vs drag.</li>
                </ul>
              </div>
              <div className="tl__col">
                <h3 className="tl__colTitle">Solutions:</h3>
                <ul className="tl__list">
                  <li>Clarify "highlighted items IN YELLOW can be dragged" (give the photo as an example).</li>
                  <li>Specify "highlighted items in BLUE can be clicked for further investigation".</li>
                  <li>Have a more distinct design for the yellow highlights on images that indicate it is draggable (Ex: yellow dotted outline).</li>
                  <li>Add floating text when you hover the mouse over highlights ("drag" or "click") at least for the first game that they play.</li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="tl__section" aria-label="Teacher dashboard">
          <h2 className="tl__sectionTitle">Teacher Dashboard Improvements</h2>

          <h3 className="tl__sectionSubtitle">Improvement Point Sample</h3>
          <ul className="tl__list">
            <li>Table layout with long horizontal cells make scan direction unclear — left to right (by rows) or up to down (columns).</li>
            <li>Large number of subjects leads to inconvenience and increased search time for teachers.</li>
          </ul>

          <div className="tl__img" aria-label="Teacher dashboard screenshot">
            <img src="/images/alterea-2.png" alt="Teacher dashboard mockup showing table layout" />
          </div>

          <h3 className="tl__sectionSubtitle">Solutions</h3>
          <ul className="tl__list">
            <li>Switch to narrower vertical columns to emphasize column-based scanning (top-to-bottom).</li>
            <li>Add a search function to quickly find subjects or classes.</li>
          </ul>
          
          <div className="tl__img" aria-label="Teacher dashboard screenshot">
            <img src="/images/alterea-3.png" alt="Teacher dashboard edits" />
          </div>

        </section>

        <section className="tl__section" aria-label="Gameplay guide">
          <h2 className="tl__sectionTitle">Gameplay Guide & Tutorials</h2>
          <p>I was tasked with independently developing the 
            Agents of Influence Gameplay document.  The Gameplay document covers game access, 
            teacher onboarding, student onboarding, game mechanics, and other important 
            information for both students and teachers.  Below are samples of the Gameplay 
            document with my annotated screenshots and written explanations.<br/> </p>
          
          <h3 className="tl__sectionSubtitle">Research Game</h3>
            <p style={{ marginTop: '-10px' }}>I developed annotated visual aids with clear indicators 
              to ensure intuitive gameplay at a glance.</p>

          <div className="tl__img2" aria-label="Gameplay guide example">
            <img src="/images/alterea-4.png" alt="Annotated gameplay guide screenshot" />
          </div>

          <h3 className="tl__sectionSubtitle">Analysis Game</h3>
            <p style={{ marginTop: '-10px' }}>I developed annotated visual aids with clear indicators 
              to ensure intuitive gameplay at a glance.</p>

          <div className="tl__img tl__img--sideBySide" aria-label="Gameplay guide examples side by side">
            <img src="/images/alterea-5.png" alt="Annotated gameplay guide screenshot 1" />
            <img src="/images/alterea-6.png" alt="Annotated gameplay guide screenshot 2" />
          </div>

          <h3 className="tl__sectionSubtitle">Conversation Game</h3>
            <p style={{ marginTop: '-10px' }}>I developed annotated visual aids with clear indicators 
              to ensure intuitive gameplay at a glance.</p>
          
          <div className="tl__img2" aria-label="Gameplay guide example">
            <img src="/images/alterea-7.png" alt="Annotated gameplay guide screenshot" />
          </div>

        </section>
        
        <hr className="altereaFullBleed" />

        <div>
          <div className="altereaFooter">
            <div>
              Check out Agents of Influence!
            </div>
            <div>
              <a
                className="externalBtn"
                href="https://www.agentsofinfluencegame.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Agents of Influence site"
              >
                See Game
              </a>
            </div>
          </div>
        </div>

        </main>
      </div>
    </>
  );
}
