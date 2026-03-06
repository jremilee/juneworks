import Nav from "./Nav";
import "./ThirstyLion2.css";

// Replace these with your real image paths
import heroPhoneLeft from "./images/hero-phone-left-clear.png";
import heroPhoneRight from "./images/hero-phone-right-clear.png";
import contextBoard from "./images/context-board.png";
import solutionPhone from "./images/solution-phone-clear.png";
import stickyNotes from "./images/sticky-notes.png";
import journeyOne from "./images/journey-1.png";
import journeyTwo from "./images/journey-2.png";
import prototypeLaptop from "./images/prototype-laptop.png";
import dataDecisionGraphic from "./images/data-decision-graphic.png";
import designProcess from "./images/design-process.png";
import finalScreens from "./images/final-screens.png";
import footerHand from "./images/footer-hand.png";

const interviews = [
  "“I’ll walk across campus just to fill my bottle at Milstein because the water tastes best there.”",
  "“I honestly didn’t even know there was a water fountain there.”",
  "“I usually just go somewhere else instead of filling out a report.”",
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
  return (
    <div className="thirsty-lion-page">
      <Nav />

      <main>
        {/* HERO */}
        <section className="tl-section tl-hero">
          <div className="tl-hero-text">
            <h1>Thirsty Lion</h1>
            <p>
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

          <div className="tl-image-card">
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

            <div className="tl-image-side">
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

          <div className="tl-quote-grid">
            {interviews.map((quote, index) => (
              <div className="tl-quote-card" key={index}>
                <p>{quote}</p>
                <span>STUDENT INTERVIEWEE</span>
              </div>
            ))}
          </div>

          <div className="tl-two-col discovery-layout">
            <div className="tl-image-card">
              <img src={stickyNotes} alt="Affinity mapping notes" />
            </div>

            <div>
              <h3>Our Findings</h3>
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
        <section className="tl-section">
          <div className="tl-label">SMOKE & MIRRORS PROTOTYPING</div>

          <div className="tl-two-col prototype-layout">
            <div>
              <h2>Testing our concept with a no-code prototype</h2>
              <p>
                We placed QR-coded posters at eight water fountains in
                Columbia’s most popular library. Scanning the code directed
                users to a Google Form where they could rate the fountain, and
                to a live spreadsheet displaying average ratings in real time.
              </p>
            </div>

            <div className="tl-image-side">
              <img src={prototypeLaptop} alt="Prototype spreadsheet on laptop" />
            </div>
          </div>

          <h3 className="tl-results-heading">Prototype Results</h3>
          <div className="tl-results-grid">
            {results.map((result, index) => (
              <div className="tl-result-card" key={index}>
                <h4>{result.title}</h4>
                <p>{result.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DATA DECISIONS */}
        <section className="tl-section">
          <div className="tl-label">DATA-DRIVEN DESIGN</div>
          <h2>Our smoke-and-mirrors prototyping directly shaped our product direction.</h2>

          <div className="tl-two-col decisions-layout">
            <div className="tl-image-side">
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
            <div className="tl-process-card">
              <h3>Wireframing</h3>
              <img src={designProcess} alt="Wireframing and low-fi process" />
            </div>

            <div className="tl-process-card">
              <h3>Final Mobile Screens</h3>
              <img src={finalScreens} alt="Final mobile screens" />
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

          <div className="tl-final-screen-strip">
            <img src={finalScreens} alt="Final product screens" />
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="tl-footer-cta">
          <div className="tl-footer-image">
            <img src={footerHand} alt="Hand holding laptop" />
          </div>

          <div className="tl-footer-copy">
            <h2>
              Thanks for stopping by —
              <br />
              want to grab a coffee and chat?
            </h2>

            <div className="tl-footer-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:youremail@example.com">Email</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}