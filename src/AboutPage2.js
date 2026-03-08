import React from "react";
import "./AboutPage2.css";
import Nav from "./Nav";

// Placeholder image imports (using existing local assets to avoid missing-file build errors)
import heroHandImage from "./images/hand-transparent.png";
import projectMockupThirstyLion from "./images/thirstylion-phone.png";
import projectMockupAoi from "./images/aoi-hero-game.svg";
import projectMockupSigma from "./images/solution-phone-clear.png";
import projectMockupSharp from "./images/sharp-hero-desktop-mockup.png";

const experienceItems = [
  {
    role: "UX Designer & Frontend Developer",
    org: "Sigma Education",
    detail: "Led the mobile redesign of SigmaEd and improved design-to-build workflow.",
  },
  {
    role: "UX Research Intern",
    org: "Savo Health",
    detail: "Conducted 50+ stakeholder calls and translated insights into product design criteria.",
  },
  {
    role: "UI/UX Designer",
    org: "BAR21",
    detail: "Created wireframes and visual guidelines for a narrative video game project.",
  },
  {
    role: "Instructional Design Intern",
    org: "Alterea",
    detail: "Improved usability of the Agents of Influence educational game and teacher dashboard.",
  },
  {
    role: "Lead Research Assistant",
    org: "Columbia Living Lab",
    detail: "Managed bilingual research participants and conducted cognitive science experiments.",
  },
];

const researchItems = [
  "Bilingualism & Mental Imagery Research",
  "Perception and memory of stimuli in VR",
  "Poster Presentation — Columbia Linguistics Symposium",
  "Published Essay — National PTA Reflections",
  "Podcast Host — Brain Banter Neuroscience Podcast",
];

const projectCards = [
  {
    number: "01",
    title: "Thirsty Lion",
    description: "UX research & gamified water fountain rating system",
    image: projectMockupThirstyLion,
    color: "#f6ece8",
  },
  {
    number: "02",
    title: "Agents of Influence",
    description: "Educational ARG gameplay onboarding design",
    image: projectMockupAoi,
    color: "#eceff8",
  },
  {
    number: "03",
    title: "SigmaEd Mobile",
    description: "Mobile UX redesign",
    image: projectMockupSigma,
    color: "#edf4ef",
  },
  {
    number: "04",
    title: "Accessibility Compliance",
    description: "ADA redesign work at Sharp",
    image: projectMockupSharp,
    color: "#f3f0ea",
  },
];

function ContactIcon({ label }) {
  return <span className="about2-contact-icon" aria-hidden="true">{label}</span>;
}

export default function AboutPage2() {
  return (
    <div className="about2-page">
        <Nav />
      <div className="about2-container">
        <section className="about2-hero">
          <div className="about2-hero-copy">
            <h1>June Lee</h1>
            <h2>UX Designer interested in EdTech, Learning Systems, and Research.</h2>
            <p>
              I’m a Cognitive Science student at Barnard College exploring UX design,
              research, and learning technologies. My work sits at the intersection of
              education, human behavior, and digital product design.
            </p>
            <div className="about2-meta-pill">
              <span>Barnard College</span>
              <span>•</span>
              <span>Cognitive Science</span>
              <span>•</span>
              <span>GPA 4.1</span>
            </div>
          </div>

          <div className="about2-hero-visual" aria-hidden="true">
            <img src={heroHandImage} alt="Finger balancing a laptop" />
          </div>
        </section>

        <section className="about2-grid-section">
          <article className="about2-column-card">
            <h3>Experience</h3>
            <div className="about2-stack-list">
              {experienceItems.map((item) => (
                <div className="about2-stack-item" key={`${item.role}-${item.org}`}>
                  <h4>
                    {item.role} — {item.org}
                  </h4>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="about2-column-card">
            <h3>Research & Work</h3>
            <ul className="about2-research-list">
              {researchItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="about2-column-card">
            <h3>Contact</h3>
            <div className="about2-contact-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <ContactIcon label="in" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:junelee@example.com">
                <ContactIcon label="@" />
                <span>Email</span>
              </a>
              <a href="/pdf/june-lee-resume.pdf" target="_blank" rel="noreferrer">
                <ContactIcon label="CV" />
                <span>Resume</span>
              </a>
            </div>
          </article>
        </section>

        <section className="about2-featured-work">
          <div className="about2-featured-header">
            <h3>Featured Work</h3>
          </div>

          <div className="about2-project-gallery">
            {projectCards.map((project) => (
              <article className="about2-project-card" key={project.number}>
                <div
                  className="about2-project-top"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="about2-project-number">{project.number}</span>
                  <img src={project.image} alt={`${project.title} project mockup`} />
                </div>

                <div className="about2-project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
