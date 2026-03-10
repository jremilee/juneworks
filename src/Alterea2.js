import React, { useEffect } from "react";
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
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".aoi-guide-card"));
    if (!cards.length) return;

    const timeoutIds = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          cards.forEach((card, index) => {
            const timeoutId = window.setTimeout(() => {
              card.classList.add("is-visible");
            }, index * 320);
            timeoutIds.push(timeoutId);
          });

          observer.disconnect();
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(cards[0]);

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    const betaCards = Array.from(document.querySelectorAll(".aoi-beta-card"));
    if (!betaCards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    betaCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const outlineWrap = document.querySelector(".aoi-outline-wrap");
    if (!outlineWrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        outlineWrap.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(outlineWrap);

    return () => {
      observer.disconnect();
    };
  }, []);

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
        <div className="aoi-info-item aoi-info-item--role">
          <h4>MY ROLE</h4>
          <ul>
            <li>Targeted beta testing and synthesized 15+ UX pain points</li>
            <li>Designed actionable UI fixes for gameplay and dashboard</li>
            <li>Independently developed onboarding and gameplay guide</li>
          </ul>
        </div>

        <div className="aoi-info-item aoi-info-item--duration">
          <h4>DURATION</h4>
          <p>2 months</p>
        </div>

        <div className="aoi-info-item aoi-info-item--skills">
          <h4>SKILLS</h4>
          <p>Beta testing, UX design</p>
        </div>

        <div className="aoi-info-item aoi-info-item--outcome">
          <h4>OUTCOME</h4>
          <p>
            Onboarding and gameplay guide has helped over 600 teachers integrate
            Agents of Influence into their classrooms.
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="aoi-context">
        <h4 className="section-label">THE CONTEXT</h4>

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

      {/* BETA TESTING SECTION */}
      <section className="aoi-beta-section">
        <div className="aoi-beta-shell">
          <div className="section-label">BETA TESTING</div>

          <h2 className="aoi-beta-intro">
            Alterea was in the stage of preparing the game to send out to teachers for beta
            testing. I played through each of the games and synthesized a list of unclear
            points and provided UX solutions for each point.
          </h2>

          <p className="aoi-beta-subintro">
            Below I compiled samples of my work for the following games. In addition to
            pointing out potential points of confusion, I also helped track and identify
            reproducible bugs and glitches. For UI confusions that would not be fixable prior
            to the teacher launch deadline, I noted them down so I could clarify it in the
            game play document.
          </p>

          {/* Research Game Sample */}
          <div className="aoi-beta-card aoi-beta-card--from-left">
            <h3 className="aoi-beta-card-title">Research Game Sample</h3>

            <div className="aoi-beta-research-images">
              <div className="aoi-beta-research-image-wrap">
                <img src={researchOriginal} alt="Original research game sample" />
                <div className="aoi-beta-caption">original</div>
              </div>

              <div className="aoi-beta-research-image-wrap">
                <img src={researchUpdated} alt="Updated research game sample" />
                <div className="aoi-beta-caption">updated</div>
              </div>
            </div>

            <div className="aoi-beta-text-block">
              <h4>Game play friction</h4>
              <p>
                The research game required frequent tab switching between two character
                profiles. However, the original design made it so that the player had to
                fully exit one profile in order to view the other profile. This caused a lot
                of friction when comparing profiles and required excessive clicking.
              </p>


              <p>
                <span>Suggestion:</span> Remove the original home page as the base of the
                research game and create two tabs so that students can easily toggle between
                the two pages. This could also visually add to a "filing" folder feel which
                would be thematically fitting since this was the research game.
              </p>
            </div>
          </div>

          {/* Analysis Game */}
          <div className="aoi-beta-card aoi-beta-card--from-right">
            <h3 className="aoi-beta-card-title">Analysis Game Sample</h3>

            <div className="aoi-beta-two-col">
              <div className="aoi-beta-image-stack">
                <img src={analysisGame} alt="Analysis game confusion example" />
                <img src={accessibilityExample} alt="Accessibility compliance example" />
              </div>

              <div className="aoi-beta-side-text">
                <div className="aoi-beta-side-block">
                  <h4>Player confusion</h4>
                  <p>
                    User testing revealed that players were often confused about the
                    mechanics of the game. I identified specific points where players
                    struggled and proposed ways to clarify them while the tutorial. I also
                    noted that certain rules—such as tiles introduced later in the game—were
                    not accompanied by clear instructions.
                  </p>
                  <p>
                    <span>Suggestion:</span> Introduce the first round, the tutorial could
                    introduce new tiles or game elements as they appear rather than
                    presenting all instructions upfront. This would give students the
                    relevant information in context. I also suggested adding a darker overlay
                    to the T and F tiles to make it clearer that they are placeholders rather
                    than the actual tiles.
                  </p>
                </div>

                <div className="aoi-beta-side-block">
                  <h4>Accessibility compliance</h4>
                  <p>
                    I reviewed the game to identify assets and text that may not meet WCAG
                    accessibility standards. For example, the highlighted text in this
                    section failed the required color contrast ratio, making it difficult to
                    read for some users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conversation Game */}
          <div className="aoi-beta-card aoi-beta-card--from-left">
            <h3 className="aoi-beta-card-title">Conversation Game Sample </h3>

            <div className="aoi-beta-two-col">
              <div className="aoi-beta-image-stack">
                <img src={confusionExample} alt="Conversation game player confusion example" />
                <img src={bugExample} alt="Conversation game bugs example" />
              </div>

              <div className="aoi-beta-side-text">
                <div className="aoi-beta-side-block">
                  <h4>Player confusion</h4>
                  <p>
                    Having the arrow present when you are guessing may confuse the player in
                    thinking that there is more dialogue they should read before making a
                    decision.
                  </p>
                  <p>
                    <span>Suggestion:</span> Remove the arrow for times that they are
                    supposed to be making a decision.
                  </p>
                </div>

                <div className="aoi-beta-side-block">
                  <h4>Bugs</h4>
                  <p>
                    I helped identify and document minor bugs, such as assets appearing when
                    they should have been hidden and other small visual glitches.
                  </p>
                  <p>
                    For example, the text "0/1" remained visible on the page after its
                    initial appearance when it should have been hidden, and in some cases
                    images overlayed due to layer issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY GUIDE */}
      <section className="aoi-guide">
        <div className="section-label">GAME PLAY GUIDE & TUTORIALS</div>

        <h2>
          To prepare for classroom beta testing, I developed comprehensive
          onboarding materials to ensure seamless integration of Agents of
          Influence into teaching environments.
        </h2>

        <p>
          This included a teacher onboarding guide explaining how to use the dashboard to track student progress and learning outcomes, as well as a gameplay guide that allowed teachers to quickly understand game mechanics without having to play through the entire experience. The guide also provided clear, step-by-step instructions for students to minimize confusion during classroom use. 
          Below are sample pages featuring my annotated screenshots and written explanations.
        </p>

        <div className="aoi-guide-grid">
          <div className="aoi-guide-card">
            <img src={tutorialDialogue} alt="Dialogue tutorial" />
            <p>Selecting incorrect answers will reduce the Player’s health bar. If the health bar reaches zero, it’s game over.</p>
          </div>

          <div className="aoi-guide-card">
            <img src={tutorialChoices} alt="Choice tutorial" />
            <p>Players must choose the correct dialogue and actions, carefully considering the context in order to complete the mission successfully.</p>
          </div>

          <div className="aoi-guide-card">
            <img src={tutorialEvidence} alt="Evidence tutorial" />
            <p>Players will answer True or False Questions and correct answers earn corresponding tiles:
              A “T” tile for a correct True response.
              An “F” tile for a correct False response.
              Players can also click on a question to expand it for a larger view.
            </p>
          </div>

          <div className="aoi-guide-card">
            <img src={tutorialBoard} alt="Board tutorial" />
            <p>Next, players can drag T and F tiles onto designated blue placement zones next to the pink starting area. Once placed, the tile activates and turns pink. 
            The area where players can place tiles will expand around each newly placed tile, allowing for continued progression toward a corner.</p>
          </div>
        </div>
      </section>

        {/* PLAY GAME LINK */}
        <div className="aoi-outline-wrap">
          <svg
            className="aoi-outline-svg"
            viewBox="0 0 820 360"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* animated outline */}
            <path
              className="aoi-outline-path"
              pathLength="1"
              d="
                M 410 320
                L 24 320
                L 24 24
                L 796 24
                L 796 320
                L 410 320
              "
            />

            {/* bottom dot */}
            <circle className="aoi-outline-dot" cx="410" cy="320" r="7" />
          </svg>

          <div className="aoi-outline-content">
            <h2>Check out Agents of Influence!</h2>
            
            <a
              className="aoi-playGameBtn"
              href="https://www.agentsofinfluencegame.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Agents of Influence site"
            >
              See Game
            </a>
          </div>
        </div>
        
        

      {/* FOOTER */}
        <Footer />

    </div>
  );
}

export default AgentsOfInfluence;