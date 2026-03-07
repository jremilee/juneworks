import Nav from "./Nav";
import React, { useEffect, useRef, useState } from "react";
import "./ThirstyLion2.css";
import Footer from "./Footer";

// Replace these with your real image paths
import heroPhoneLeft from "./images/hero-phone-left-clear.png";
import heroPhoneRight from "./images/hero-phone-right-clear.png";
import contextBoard from "./images/context-board.png";
import solutionPhone from "./images/solution-phone-clear.png";
import stickyNotes from "./images/sticky-notes.png";
import journeyOne from "./images/journey-1.png";
import journeyTwo from "./images/journey-2.png";
import prototypeLaptop from "./images/prototype-laptop.png";
import dataDecisionGraphic from "./images/data-driven-icons.svg";
import designProcess from "./images/design-process-clear.png";
import lowFidMockup from "./images/low-fid-thirstylion.png";
import highFidMockup from "./images/highfidelity-thirstylion.png";
import finalScreens from "./images/final-screens.png";

const interviews = [
  {
    before: "“I’ll walk across campus just to fill my bottle at Milstein because the ",
    highlight: "water tastes best there",
    after: ".”",
  },
  {
    before: "“I honestly ",
    highlight: "didn’t even know",
    after: " there was a water fountain there.”",
  },
  {
    before: "“I usually just go somewhere else ",
    highlight: "instead of filling out a report",
    after: ".”",
  },
];

const findings = [
  "Other than a few fountains that they commonly used, students did not know where other fountains were.",
  "Facilities were slow to fix fountains and students rarely reported fountain issues to facilities.",
  "Students cared about not only fountain speed but also temperature and taste.",
  "Students would sometimes give up filling their bottles if the water fountain was too slow.",
];

const results = [
  {
    title: "50+",
    text: "Organic student responses confirmed that crowd-sourcing data was a feasible model for our app.",
  },
  {
    title: "Negativity Reporting Bias",
    text: "Users reported water fountains more when they were malfunctioning, which meant a few reviews for fountains functioning properly.",
  },
  {
    title: "80%",
    text: "Of users confirmed that they would go to a better fountain indicated by our app.",
  },
  {
    title: "“Forgotten” Fountains",
    text: "Fountains with good status but low usage were likely being overlooked. Better visibility could increase usage.",
  },
  {
    title: "Low filter status ≠ Low water pressure",
    text: "Students did not always interpret red filter status and low pressure the same way, so separate metrics were needed.",
  },
];

const topRowResults = results.slice(0, 3);
const bottomRowResults = results.slice(3);

const designDecisions = [
  {
    title: "Remove Login Friction",
    text: "We initially imagined student accounts, but requiring login would create unnecessary friction for a quick QR-to-web flow.",
  },
  {
    title: "Surface “Forgotten Fountains”",
    text: "Research showed high-quality fountains were underused due to limited visibility. Campus blueprints helped students discover nearby options.",
  },
  {
    title: "Separate Quality Metrics",
    text: "We learned that a single rating could not capture water quality. We broke out temperature, pressure, and taste as separate signals.",
  },
  {
    title: "Rethink Facilities Reporting",
    text: "Students rarely submitted maintenance reports, so we explored ways aggregated low ratings could better support facilities awareness.",
  },
  {
    title: "Design for Scale",
    text: "The UI was structured to be reusable across buildings with a searchable home page and expandable fountain pages.",
  },
];

const techStack = [
  "Design: Figma / low-to-high fidelity, journey mapping, storyboarding",
  "Frontend: React / JavaScript",
  "Backend: Firebase for real-time rating updates",
  "Testing: User testing and smoke-and-mirrors validation",
];

export default function ThirstyLionProject() {
    const heroSectionRef = useRef(null);
    const videoRef = useRef(null);
    const quoteGridRef = useRef(null);
    const prototypeSectionRef = useRef(null);
    const resultsRowsRef = useRef(null);
    const [heroVisible, setHeroVisible] = useState(false);
    const [quotesVisible, setQuotesVisible] = useState(false);
  const [prototypeImageVisible, setPrototypeImageVisible] = useState(false);
    const [resultsVisible, setResultsVisible] = useState(false);

    useEffect(() => {
      const node = heroSectionRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setHeroVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const node = quoteGridRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setQuotesVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const node = prototypeSectionRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setPrototypeImageVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const node = resultsRowsRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setResultsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);
      
  return (
    <div className="thirsty-lion-page">
      <Nav />

      <main>
        {/* HERO */}
        <section className={`tl-section tl-hero${heroVisible ? " tl-hero--animate" : ""}`} ref={heroSectionRef}>
          <div className="tl-hero-text">
            <h1>Thirsty Lion</h1>
            <p className= "tl-hero-subtitle">
              A crowdsourced platform for real-time water fountain ratings and
              locations at Columbia University.
            </p>
          </div>

          <div className="tl-hero-images">
            <img
              src={heroPhoneLeft}
              alt="Thirsty Lion mobile screen"
              className="tl-phone tl-phone-left"
            />
            <img
              src={heroPhoneRight}
              alt="Map mobile screen"
              className="tl-phone tl-phone-right"
            />
          </div>
        </section>

        {/* INFO BAND */}
        <section className="tl-info-band">
          <div className="tl-info-item">
            <h4>MY ROLE</h4>
            <p>
              Pitched the winning concept from 40 internal proposals.
              <br />
              Conducted user research to validate demand.
              <br />
              Designed key screens and developed them in React.
            </p>
          </div>

          <div className="tl-info-item">
            <h4>TEAM</h4>
            <p>June Lee, Jeffrey Roh, Madeline Qu, Jialyn Park</p>
          </div>

          <div className="tl-info-item">
            <h4>DURATION</h4>
            <p>4 weeks</p>
          </div>

          <div className="tl-info-item">
            <h4>SKILLS</h4>
            <p>
              UI design, frontend development, project pitching, storyboarding,
              prototyping, user testing
            </p>
          </div>
        </section>

        {/* CONTEXT */}
        <section className="tl-section">
          <div className="tl-label">THE CONTEXT</div>
          <div className="tl-two-col context-layout">
            <div>
              <h2>
                Columbia students often encounter broken, slow, or warm water
                fountains, leading to frustration and dehydration.
              </h2>
              <p className="tl-body-large">
                Even when familiar with the building, students often struggle to
                find the next best water fountain because fountains are not
                listed on building maps.
              </p>
            </div>
          </div>

          <div className="tl-image-card tl-image-card--context">
            <img src={contextBoard} alt="Context and source material" />
          </div>
        </section>

        {/* SOLUTION */}
        <section className="tl-section tl-solution">
          <div className="tl-two-col solution-layout">
            <div>
              <div className="tl-label">OUR SOLUTION</div>
              <h2>
                A crowdsourced platform where students rate and track fountain
                performance in real-time.
              </h2>
              <p>
                Students can rate flow speed, temperature, and filter status.
                The site can also help users locate the nearest strong fountain
                and help surface maintenance issues.
              </p>
            </div>

            <div className="tl-image-side tl-image-side--solution">
              <img src={solutionPhone} alt="Solution mobile screen" />
            </div>
          </div>
        </section>

        {/* DISCOVERY */}
        <section className="tl-section tl-section-divider">
          <div className="tl-label">DISCOVERY & CONTEXTUAL INQUIRY</div>
          <h2>Identifying the Issues</h2>
          <p className="tl-section-intro">
            From our early research and online sources, it became clear that
            students were dissatisfied with campus fountains. We interviewed
            students on campus and clustered the insights into larger themes to
            shape product direction.
          </p>

          <div className="tl-quote-grid" ref={quoteGridRef}>
            {interviews.map((quote, index) => (
              <div
                className={`tl-quote-card tl-quote-card--animate${quotesVisible ? " is-visible" : ""}`}
                style={{ transitionDelay: quotesVisible ? `${index * 140}ms` : "0ms" }}
                key={index}
              >
                <p>
                  {quote.before}
                  <span className="tl-quote-highlight">{quote.highlight}</span>
                  {quote.after}
                </p>
                <span>STUDENT INTERVIEWEE</span>
              </div>
            ))}
          </div>

          <div className="tl-two-col discovery-layout">
            <div className="tl-image-card">
              <img src={stickyNotes} alt="Affinity mapping notes" />
            </div>

            <div>
              <h3 className="our-finding">Our Findings</h3>
              <ol className="tl-findings-list">
                {findings.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              <p className="tl-key-insight">
                <strong>Key insight:</strong> Students were willing to walk
                further if they were guaranteed a high-pressure, cold-water
                refill.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNEY MAPPING */}
        <section className="tl-section tl-muted-bg">
          <div className="tl-label">STORYBOARDING & JOURNEY MAPPING</div>
          <h2>Mapping key user journeys</h2>
          <p className="tl-section-intro">
            Using insights from our contextual inquiry, we mapped key journeys
            to define how the app would function in real-world scenarios.
          </p>

          <div className="tl-card-grid two-up">
            <div className="tl-image-card">
              <img src={journeyOne} alt="Journey map for facilities reporting" />
            </div>
            <div className="tl-image-card">
              <img src={journeyTwo} alt="Journey map for nearby fountain reroute" />
            </div>
          </div>
        </section>

        {/* PROTOTYPE */}
        <section className="tl-section" ref={prototypeSectionRef}>
          <div className="tl-two-col prototype-layout">
            <div>
              <div className="tl-label">SMOKE & MIRRORS PROTOTYPING</div>
              <h2>Testing our concept with a no-code prototype</h2>
              <p>
                We placed QR-coded posters at eight water fountains in
                Columbia’s most popular library. Scanning the code directed
                users to a Google Form where they could rate the fountain, and
                to a live spreadsheet displaying average ratings in real time.
              </p>
            </div>

            <div
              className={`tl-image-side tl-image-side--prototype-animate${prototypeImageVisible ? " is-visible" : ""}`}
            >
              <img src={prototypeLaptop} alt="Prototype spreadsheet on laptop" />
            </div>
          </div>

          <h3 className="tl-results-heading">Prototype Results</h3>
          <div className="tl-results-rows" ref={resultsRowsRef}>
            <div className="tl-results-row tl-results-row--top">
              {topRowResults.map((result, index) => (
                <div
                  className={`tl-result-card tl-result-card--animate${resultsVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: resultsVisible ? `${index * 140}ms` : "0ms" }}
                  key={`top-${index}`}
                >
                  <div className="tl-result-card__content">
                    <h4 className={/^[\d+%\s.]+$/.test(result.title) ? "tl-result-card__title--numeric" : ""}>{result.title}</h4>
                    <p>{result.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tl-results-row tl-results-row--bottom">
              {bottomRowResults.map((result, index) => (
                <div
                  className={`tl-result-card tl-result-card--animate${resultsVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: resultsVisible ? `${(topRowResults.length + index) * 140}ms` : "0ms" }}
                  key={`bottom-${index}`}
                >
                  <div className="tl-result-card__content">
                    <h4 className={/^[\d+%\s.]+$/.test(result.title) ? "tl-result-card__title--numeric" : ""}>{result.title}</h4>
                    <p>{result.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DATA DECISIONS */}
        <section className="tl-section">
          <div className="tl-label">DATA-DRIVEN DESIGN</div>
          <h2 className= "smoke-mirrors-h2">Our smoke-and-mirrors prototyping directly shaped our product direction.</h2>

          <div className="tl-two-col decisions-layout">
            <div className="tl-image-side tl-image-side--decisions">
              <img src={dataDecisionGraphic} alt="Design decisions graphic" />
            </div>

            <div className="tl-decision-list">
              {designDecisions.map((item, index) => (
                <div className="tl-decision-item" key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN PROCESS */}
        <section className="tl-section tl-muted-bg">
          <div className="tl-label">DESIGN & PROTOTYPING</div>
          <h2>
            We focused on a “speed-first” UI for mobile devices so students
            could easily scan the QR code with their phones and quickly access
            the site.
          </h2>
          <p className="tl-section-intro">
            We created five core pages: home page, fountain query page, map
            page, rating page, and fountain stats page.
          </p>

          <div className="tl-process-stack">
            <div className="tl-process-card tl-process-card--wireframing">
              <h3>Wireframing</h3>
              <img className = "wireframing" src={designProcess} alt="Wireframing and low-fi process" />
            </div>

            <div className="tl-process-card">
              <h3>Final Mobile Screens</h3>
              <img className="lowfid-screens" src={lowFidMockup} alt="Low-fidelity mockup" />
            </div>

            <div className="tl-process-card">
              <h3>Final Mobile Screens</h3>
              <img className="highfid-screens" src={highFidMockup} alt="Final mobile screens" />
              <p className="tl-design-note">For the high-fidelity mockup, I redesigned the map page to use more vertical space, creating a more immersive and usable layout. When users open the map by selecting a fountain, that fountain is highlighted with a blue navigation icon while other fountains appear in black. The selected fountain’s details slide up from the bottom, and users can tap other fountains to quickly view their information. I also replaced the floor toggle button with a dropdown menu, allowing users to switch floors more efficiently. <br/><br/> Additionally, I suggested grouping the current fountain ratings into a single box to clearly distinguish them from the previous reviews section. Users found our app easy to navigate and intuitive.  We made minor design tweaks (e.g. showing empty star outline) based on feedback.</p>
            </div>
          </div>
        </section>

        {/* ROADMAP + STACK */}
        <section className="tl-section">
          <div className="tl-label">RISK MITIGATION & FUTURE ROADMAP</div>
          <p className="tl-roadmap-copy">
            <strong>Current Strategy:</strong> Because Columbia facilities often
            remove student posters, we transitioned from physical fountain
            stickers to an interactive digital map with photo references for
            each fountain.
          </p>
          <p className="tl-roadmap-copy">
            <strong>Crowdsourcing:</strong> We discussed implementing a rolling
            average of recent data so crowd-sourced input remains accurate as
            usage and rating patterns fluctuate.
          </p>

          <div className="tl-label tl-label-spacing">TECHNICAL STACK & CONTRIBUTION</div>
          <ul className="tl-tech-list">
            {techStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </section>
        
        <div className="tl__videoContainer">
            <iframe 
              width="100%" 
              height="480" 
              src="https://www.youtube.com/embed/5AcqNHnTUBc" 
              title="Thirsty Lion Demo Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        
            <Footer/>

        
      </main>
    </div>
  );
}