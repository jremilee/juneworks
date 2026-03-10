import React from "react";
import "./AboutPage2.css";
import Nav from "./Nav";
import { allImages } from "./utils/imageLoader";

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
    detail: "Created wireframes and visual guidelines for a LLM (large language model) video game project.",
  },
  {
    role: "Instructional Design Intern",
    org: "Alterea",
    detail: "Improved usability of educational video game and developed a gameguide used by 600+ teachers.",
  },
  {
    role: "Associate Marketing Communications Specialist",
    org: "Sharp Electronics",
    detail: "Gathered user feedback from Sharp dealers. Used Adobe XD to design key pages in B2B and B2C website consolidation.",
  },
];

const researchItems = [
  "Bilingualism & Mental Imagery (Research)",
  "Perception and memory of stimuli in VR (Research)",
  "Poster Presentation — Columbia Linguistics Symposium",
  "Published Essay — National PTA Reflections",
  "Podcast Host — Brain Banter Neuroscience Podcast",
];

const projectCards = [
  {
    number: "01",
    title: "Agents of Influence",
    description: "Educational gameplay onboarding design",
    image: projectMockupAoi,
    color: "#e0e5f4",
  },
  {
    number: "02",
    title: "Thirsty Lion",
    description: "UX research &  water fountain rating system",
    image: projectMockupSigma,
    color: "#e3f5e8",
  },
  {
    number: "03",
    title: "Sharp Web Consolidation",
    description: "Designing a unified website for SEO optimization",
    image: projectMockupSharp,
    color: "#f8f0e1",
  },
];

function ContactIcon({ label }) {
  return <span className="about2-contact-icon" aria-hidden="true">{label}</span>;
}

export default function AboutPage2() {
  return (
    <div className="about2-page">
        <Nav />
      <section className="aboutHero">
        <div className="aboutHero__inner">
          <div className="aboutHero__left">
            <img
              className="finger__image"
              src={allImages['finger-comp-transparent.png']}
              alt="Hand holding a tiny laptop"
            />
          </div>

          <div className="aboutHero__right">
            <h1 className="aboutHero__title">About Me</h1>
            <p className="aboutHero__text">
              I’m a senior at Barnard College, where I study cognitive science
              and education. I began my journey as an ADA compliance
              specialist, which sparked my interest in inclusive design and
              eventually led me to broader design projects.
            </p>
            <p className="aboutHero__text">
              Recently, I’ve been exploring the EdTech industry. When I’m not
              designing interfaces, I enjoy playing guitar, building escape
              rooms, and learning languages.
            </p>

            <div className="about2-meta-pill">
              <span>Barnard College</span>
              <span>•</span>
              <span>Cognitive Science</span>
              <span>•</span>
              <span>GPA 4.1</span>
            </div>
          </div>
        </div>
      </section>
      <div className="about2-container">

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
                  {project.title.toLowerCase().includes("sharp") && (
                    <span className="about2-project-imprint" aria-hidden="true">
                      SHARP
                    </span>
                  )}
                  <span className="about2-project-number">{project.number}</span>
                  <img
                    className={project.title.toLowerCase().includes("sharp") ? "about2-project-image about2-project-image--sharp" : "about2-project-image"}
                    src={project.image}
                    alt={`${project.title} project mockup`}
                  />
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
