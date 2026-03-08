import React from "react";
import "./Alterea2.css";
import Nav from "./Nav";
import Footer from "./Footer";

import heroGameImage from "./images/aoi-hero-game.svg"
import researchOriginal from "./images/aoi-research-original.svg";
import researchUpdated from "./images/aoi-research-updated.svg";
import analysisGame from "./images/aoi-analysis-game.svg";
import accessibilityExample from "./images/aoi-accessibility.svg";

import confusionExample from "./images/aoi-confusion.svg";
import bugExample from "./images/aoi-bug.svg";

import tutorialDialogue from "./images/aoi-dialogue.svg";
import tutorialChoices from "./images/aoi-choices.svg";
import tutorialEvidence from "./images/aoi-evidence.svg";
import tutorialBoard from "./images/aoi-board.svg";




function AgentsOfInfluence() {
  return (
    <div className="aoi-page">
        <Nav />

      {/* HERO */}
      <section className="aoi-hero">
        <div className="aoi-hero-text">
          <h1>Agents of Influence</h1>
          <p>
            A spy-themed media literacy game with research, conversation,
            and analysis modes.
          </p>
        </div>

        <div className="aoi-hero-image">
          <img src={heroGameImage} alt="Agents of Influence gameplay" />
        </div>
      </section>

      {/* INFO BAND */}
      <section className="aoi-info-band">
        <div className="aoi-info-item">
          <h4>MY ROLE</h4>
          <ul>
            <li>Targeted beta testing and synthesized 15+ UX pain points</li>
            <li>Designed actionable UI fixes for gameplay and dashboard</li>
            <li>Independently developed onboarding and gameplay guide</li>
          </ul>
        </div>

        <div className="aoi-info-item">
          <h4>DURATION</h4>
          <p>2 months</p>
        </div>

        <div className="aoi-info-item">
          <h4>SKILLS</h4>
          <p>Beta testing, UX design</p>
        </div>

        <div className="aoi-info-item">
          <h4>OUTCOME</h4>
          <p>
            Onboarding and gameplay guide used by 600+ teachers integrating
            Agents of Influence into classrooms.
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="aoi-context">
        <div className="section-label">THE CONTEXT</div>

        <h2>
          Agents of Influence is an award-winning media literacy video game
          aimed at middle school and high school students to promote digital
          literacy and resilience to misinformation.
        </h2>

        <p>
          As an e-learning instructional design intern, I conducted targeted
          beta testing for the organization’s research, conversation, and
          analysis game, identifying usability improvements. I also developed a
          comprehensive onboarding and gameplay guide to help students and
          teachers integrate the game seamlessly into the classroom.
        </p>

        <p className="confidentiality-note">
          **Due to a confidentiality agreement, I can only disclose limited
          information about my work in my portfolio.
        </p>
      </section>

      {/* BETA TESTING */}
      <section className="aoi-beta">
        <div className="section-label">BETA TESTING</div>

        <p className="section-intro">
          Alterea was preparing the game to send to teachers for beta testing.
          I played through each game mode and synthesized unclear points while
          proposing UX improvements.
        </p>

        <div className="aoi-card">
          <h3>Research Game Sample</h3>

          <div className="aoi-image-row">
            <img src={researchOriginal} alt="Original UI" />
            <img src={researchUpdated} alt="Updated UI suggestion" />
          </div>

          <p>
            The research game required frequent tab switching between
            character profiles. The original design forced players to fully
            exit one profile to view another, creating friction.
          </p>
        </div>

        <div className="aoi-card">
          <h3>Analysis Game</h3>

          <div className="aoi-image-row">
            <img src={analysisGame} alt="Analysis board gameplay" />
            <img src={accessibilityExample} alt="Accessibility compliance" />
          </div>

          <p>
            I documented moments of player confusion and suggested UI
            improvements such as clearer rules, progressive instructions, and
            better visual contrast.
          </p>
        </div>

        <div className="aoi-card">
          <div className="aoi-image-row">
            <img src={confusionExample} alt="Player confusion example" />
            <img src={bugExample} alt="Bug example" />
          </div>

          <p>
            I also documented minor bugs and UI issues such as overlapping
            elements and incorrect layering.
          </p>
        </div>
      </section>

      {/* GAMEPLAY GUIDE */}
      <section className="aoi-guide">
        <div className="section-label">GAME PLAY GUIDE & TUTORIALS</div>

        <p>
          To prepare for classroom beta testing, I developed comprehensive
          onboarding materials to ensure seamless integration of Agents of
          Influence into teaching environments.
        </p>

        <div className="aoi-guide-grid">
          <img src={tutorialDialogue} alt="Dialogue tutorial" />
          <img src={tutorialChoices} alt="Choice tutorial" />
          <img src={tutorialEvidence} alt="Evidence tutorial" />
          <img src={tutorialBoard} alt="Board tutorial" />
        </div>
      </section>

      {/* FOOTER */}
        <Footer />

    </div>
  );
}

export default AgentsOfInfluence;