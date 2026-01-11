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

        <div className="tl__bannerContainer">
          <img src="/images/aoi-banner.png" alt="Agents of Influence banner" className="tl__banner"/>
        </div>

        <header className="tl__header">
          <h1 className="tl__title">Agents of Influence</h1>
          <p className="tl__subtitle">Beta Testing | UX Improvements | Teacher Dashboard</p>
        </header>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitleD">A spy-themed media literacy game with research, conversation, and analysis modes.</p></h2>

          <p><strong>Role:</strong> Beta tester / UX intern — conducted UI/UX testing and provided design recommendations for both the game and the teacher dashboard.</p>
          <p><strong>Contributions:</strong> Identified 15+ confusion points during beta tests, improved game flow, implemented teacher dashboard and tutorial enhancements, and authored guides used by 600+ teachers.</p>

          <div className="tl__img" aria-label="Overview image">
            <img src="/images/aoi-overview.png" alt="Annotated overview of Agents of Influence gameplay" />
          </div>
        </section>

        <section className="tl__section" aria-label="Beta testing findings">
          <h2 className="tl__sectionTitle">Beta testing UI/UX suggestions</h2>
          <p className="tl__list">Research game example: highlighted items caused confusion — blue highlights were not draggable and yellow highlights were draggable, but players expected otherwise.</p>

          <div className="tl__img" aria-label="Research game highlights">
            <img src="/images/aoi-highlights.png" alt="Screenshot showing blue and yellow highlights in the research game" />
          </div>

          <h3 className="tl__sectionSubtitle">Problems</h3>
          <ul className="tl__list">
            <li>Blue highlighted items appeared interactive but were not draggable.</li>
            <li>Yellow highlights looked like a visual tint rather than interactive elements.</li>
            <li>Players were unsure when to click versus drag.</li>
          </ul>

          <h3 className="tl__sectionSubtitle">Solutions</h3>
          <ul className="tl__list">
            <li>Clarify that <strong>yellow highlights</strong> can be dragged and use example illustrations.</li>
            <li>Indicate that <strong>blue highlights</strong> are clickable for more info.</li>
            <li>Make draggable highlights more visually distinct (e.g., dotted outline) and add hover text like "drag" or "click" for first-time players.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="Teacher dashboard">
          <h2 className="tl__sectionTitle">Teacher Dashboard Improvements</h2>
          <p className="tl__list">The dashboard used by teachers required clearer scanning patterns and faster subject lookup.</p>

          <div className="tl__img" aria-label="Teacher dashboard screenshot">
            <img src="/images/aoi-dashboard.png" alt="Teacher dashboard mockup showing table layout" />
          </div>

          <h3 className="tl__sectionSubtitle">Problems</h3>
          <ul className="tl__list">
            <li>Wide horizontal table cells made scan direction unclear.</li>
            <li>Large number of subjects increased search time for teachers.</li>
          </ul>

          <h3 className="tl__sectionSubtitle">Solutions</h3>
          <ul className="tl__list">
            <li>Switch to narrower vertical columns to emphasize column-based scanning (top-to-bottom).</li>
            <li>Add a search function to quickly find subjects or classes.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="Gameplay guide">
          <h2 className="tl__sectionTitle">Gameplay Guide & Tutorials</h2>
          <p className="tl__list">Authored the Agents of Influence gameplay document covering access, onboarding, game mechanics, and teacher-facing instructions. Created annotated screenshots to reduce instructor prep time.</p>

          <div className="tl__img2" aria-label="Gameplay guide example">
            <img src="/images/aoi-guide.png" alt="Annotated gameplay guide screenshot" />
          </div>

          <h3 className="tl__sectionSubtitle">Impact</h3>
          <ul className="tl__list">
            <li>Published guides and tutorials used by over 600 teachers.</li>
            <li>Reduced onboarding friction and improved classroom adoption.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="What I did">
          <h2 className="tl__sectionTitle">My Role</h2>
          <ul className="tl__list">
            <li>Conducted targeted beta testing and synthesized 15+ UI/UX pain points.</li>
            <li>Designed actionable UI fixes for both gameplay and the teacher dashboard.</li>
            <li>Developed onboarding materials and a gameplay document used by teachers.</li>
            <li>Helped implement dashboard layout and search improvements during the beta phase.</li>
          </ul>
        </section>

        </main>
      </div>
    </>
  );
}
