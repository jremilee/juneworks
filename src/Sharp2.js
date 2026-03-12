import React, { useEffect, useRef, useState } from "react";
import "./Sharp2.css";
import Footer from "./Footer";
import Nav from "./Nav";
import heroDesktopMockup from "./images/sharp-hero-desktop-mockup.png";
import contextSharpBusiness from "./images/context-sharp-business.svg";
import contextSharpSbs from "./images/context-sharp-sbs.svg";
import challengeConsolidationDiagram from "./images/challenge-consolidation-diagram.svg";

import processHierarchyFlow from "./images/process-hierarchy-flow.svg";
import processWireframeAnnotations from "./images/process-wireframe-annotations.svg";
import processDraftComparison from "./images/process-draft-comparison.svg";
import additionalWorkPages from "./images/additional-work-pages.svg";

import googleAnalyticsLogo from "./images/google-analytics-logo.svg";

// TEMP placeholder image so missing imports don't break the build
const placeholder = "https://via.placeholder.com/1200x700?text=Image";

// Temporary image assignments (replace with real imports later)




const processFilterCards = placeholder;




function SectionLabel({ children }) {
  return <div className="sharp-section-label">{children}</div>;
}

function InfoItem({ title, text }) {
  return (
    <div className="sharp-info-item">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function ImageCard({ src, alt, caption, className = "" }) {
  return (
    <div className={`sharp-image-card ${className}`}>
      <img src={src} alt={alt} />
      {caption && <p className="sharp-image-caption">{caption}</p>}
    </div>
  );
}

export default function SharpWebConsolidation() {
  const contextCardsRef = useRef(null);
  const processFilterRef = useRef(null);
  const [contextCardsVisible, setContextCardsVisible] = useState(false);
  const [processFilterVisible, setProcessFilterVisible] = useState(false);

  useEffect(() => {
    const node = contextCardsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setContextCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = processFilterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setProcessFilterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const panels = document.querySelectorAll(".sharp-page .process-image-panel");
    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fullImages = document.querySelectorAll(".sharp-page .sharp-full-image");
    if (!fullImages.length) return;

    fullImages.forEach((imageBlock) => imageBlock.classList.add("sharp-full-image--animate"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    fullImages.forEach((imageBlock) => observer.observe(imageBlock));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sharp-page">
      <Nav />

      <main>
        <section className="sharp-hero">
          <div className="sharp-hero-text">
            <h1>
              SHARP Web
              <br />
              Consolidation
            </h1>
            <p>
              Redesigning Sharp’s two websites into one cohesive site.
            </p>
          </div>

          <div className="sharp-hero-image">
            <img src={heroDesktopMockup} alt="Sharp web consolidation hero mockup" />
          </div>
        </section>

        <section className="sharp-info-band">
          <div className="sharp-container sharp-info-grid">
            <InfoItem title="MY ROLE" text="Website Redesign, Sharp Marketing Intern" />
            <InfoItem title="TEAM" text="Sharp Marketing Team & Web Frontend Team" />
            <InfoItem title="DURATION" text="2 months" />
            <InfoItem title="SKILLS" text="UX design, SEO copy writing" />
          </div>
        </section>

        <section className="sharp-section sharp-container">
          <SectionLabel>THE CONTEXT</SectionLabel>

          <h2 className="sharp-section-title">
            Sharp wanted to merge their two sites: Sharp Business for dealers, and Sharp SBS for Sharp’s direct sales division.
          </h2>

          <p className="sharp-body-text sharp-body-text--narrow">
            The two sites were redundant and hurt SEO ranking by competing with one another.
            Customers were also confused about which site to visit.
          </p>

          <div className="sharp-two-up" ref={contextCardsRef}>
            <ImageCard
              src={contextSharpBusiness}
              alt="Sharp Business website"
              caption="Sharp Business"
              className={`sharp-image-card--from-left${contextCardsVisible ? " is-visible" : ""}`}
            />
            <ImageCard
              src={contextSharpSbs}
              alt="Sharp SBS website"
              caption="Sharp SBS"
              className={`sharp-image-card--from-right${contextCardsVisible ? " is-visible" : ""}`}
            />
          </div>
        </section>

        <section className="sharp-section sharp-container">
          <SectionLabel>THE CHALLENGE</SectionLabel>

          <h2 className="sharp-section-title">
            How can I consolidate all the content from the SBS page into one cohesive page on the Sharp business site?
          </h2>

          <p className="sharp-body-text">
            While the websites had mostly identical content, there was still some SBS-specific content that was not
            posted on the business site. I needed to figure out a way to put SBS content onto a single page so that
            users could access important SBS information on the business site.
          </p>

          <p className="sharp-body-text">
            We decided to generalize the copy of the mostly identical content to move it to the business site and
            condense the four core SBS pages into a single page under the “About Sharp B2B” tab on the business site.
          </p>

          <div className="sharp-full-image">
            <img
              src={challengeConsolidationDiagram}
              alt="Diagram showing SBS content being consolidated into one page on the business site"
            />
          </div>
        </section>

        <section className="sharp-section sharp-section--gray">
          <div className="sharp-container">
            <SectionLabel>THE PROCESS</SectionLabel>

            <div className="sharp-process-block">
              <h3 className="sharp-process-title">
                1. First, I started by compiling all SBS specific content (across four pages).
              </h3>

              <p className="sharp-body-text">
                As I compiled the resources, I noticed that some of the content may no longer be relevant or that
                some of the pages had excessive copy. By working with the marketing team and asking about the
                importance of certain pages/info, I helped whittle down content using the following three filters.
              </p>

            <div className={`process-filter-container${processFilterVisible ? " is-visible" : ""}`} ref={processFilterRef}>
                
                <div className="process-filter-card">
                    <p>
                    Is it <span className="highlight">SBS specific</span> information that
                    can’t be found on other parts of the business site?
                    </p>
                </div>

                <div className="process-filter-card">
                    <p>
                    Is it <span className="highlight">still relevant</span> (e.g. outdated,
                    no longer pertinent to include)?
                    </p>
                </div>

                <div className="process-filter-card">
                    <p>
                    Is it <span className="highlight">important enough</span> to include on
                    the new SBS page (given that there is a lot of content)?
                    </p>
                </div>

                </div>
            </div>

            <div className="sharp-process-block">
              <h3 className="sharp-process-title">
                2. Using Adobe XD, I made a hierarchy of the “most important” content and designed a draft of the new SBS page.
              </h3>

              <p className="sharp-body-text">
                Important links to our products and services were kept, while links to infographics and whitepapers
                were considered not critical. I chose to only include the copy from the “Get to know Sharp Business Systems”
                page and leave out copy from the locations page which did not include any critical information.
              </p>

              <div className="sharp-stacked-images">
                <div className="sharp-full-image">
                  <div className="process-image-panel">
                    <img
                      src={processHierarchyFlow}
                      alt="Content hierarchy and page planning"
                    />
                  </div>
                </div>

                <div className="sharp-full-image sharp-full-image--from-left">
                  <div className="process-image-panel">
                    <img
                      src={processWireframeAnnotations}
                      alt="Annotated wireframe showing page structure and content flow"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sharp-process-block">
              <h3 className="sharp-process-title">
                3. Received feedback and edited page to visually match Sharp’s new website color palette and other fine tuning.
              </h3>

              <p className="sharp-body-text">
                I presented the page to the marketing team. They noted that several links directed users to
                low-traffic pages slated for removal and that the location section had overlinking (more location links once you clicked on a location).
              </p>

              <p className="sharp-body-text">
                In the final iteration, I removed outdated links and restructured the location section to make
                individual branch pages more accessible. Collaborating with the website-wide color redesign, the
                interface was changed to match the beige theme. I also used this iteration to minimize excessive
                text and remove other less critical elements.
              </p>

              <div className="sharp-full-image">
                <div className="process-image-panel">
                  <img
                    src={processDraftComparison}
                    alt="Comparison between first draft and final draft"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sharp-section sharp-container">
          <SectionLabel>ADDITIONAL WORK</SectionLabel>

          <h2 className="sharp-section-title">Edited other SBS content</h2>

          <p className="sharp-body-text">
            In addition to the main SBS page, I helped redesign and modify other business pages for improved
            SEO copywriting and clearer visual flow while ensuring accessibility compliance.
          </p>

          <div className="sharp-full-image sharp-additional-pages">
            <img src={additionalWorkPages} alt="Additional SBS page redesigns" />
          </div>

          <div className="sharp-analytics-block">
            <h2 className="sharp-section-title">Google Analytics & SEO Improvements for entire site</h2>

            <div className="sharp-analytics-logo">
              <img src={googleAnalyticsLogo} alt="Google Analytics logo" />
            </div>

            <p className="sharp-body-text">
              I used Google Analytics data (e.g. traffic reports) to identify and remove outdated, low-quality,
              and redundant pages, improving the website’s overall quality and relevance. I implemented best
              SEO practices when editing content for the new web pages, including strategic keyword placement
              to enhance searchability and internal linking.
            </p>

            <p className="sharp-body-text">
              Merging the sites was successful in increasing traffic to Sharp’s business site. Sharp will monitor
              the pages after launch and make adjustments as needed.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}