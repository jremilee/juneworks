// ThirstyLion.js
import React, { useEffect } from "react";
import Nav from "./Nav";
import { allImages } from "./utils/imageLoader";

export default function Sharp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="sharp">


        <header className="tl__header">
          <h1 className="tl__title">SHARP Web Consolidation</h1>
          <p className="tl__subtitle">UI Design | SEO | Google Analytics</p>  
        </header>

        <div className="tl__bannerContainer">
          <video src="/videos/sharp-omma2-frame.mp4" alt="Sharp Web Consolidation Banner" className="tl__banner" autoPlay loop muted />
        </div>
        
        <h2 className="tl__sectionTitleD"><p className="tl__subtitle"> Sharp Electronics wanted to merge their two sites: Sharp Business for dealers, and Sharp SBS for Sharp’s direct sales division.  </p></h2>


        <section className="tl__section" aria-label="Project Overview">
          <p><strong>The Problem</strong> </p> 
          <p> The sites were redundant and hurt SEO ranking by competing with one another. Customers were also confused about which site to visit. 
            Sharp’s SBS site and Sharp Business site had pages with mostly identical content. However, there was still some SBS-specific content that was not posted on the business site.</p>
          <p><strong>Our Solution</strong> </p> 
          <p> 1. SBS-specific content was edited to be generalized and suitable for posting on the business site.  
            <br/> 2. The four SBS-specific pages would be consolidated into a single SBS page on the business site.</p>
          <p>Team: Sharp Marketing Team </p>

          <div className="tl__img2" aria-label="Overview image">
            <img src={allImages['sharp-1.png']} alt="Merging Sharp SBS site content into Sharp Business site" />
          </div>
        </section>

        <section className="tl__section tl__spacedBottom" aria-label="What I did">
          <h3><strong>My Role:</strong> </h3> 
          <ul className="tl__list">
            <li>Designed the main page and other key pages in the consolidation project</li>
            <li>Search Engine Optimization (SEO) improvements for better site visibility and increased user traffic.</li>
            <li>Utilized Google Analytics data to inform design decisions.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="Discovery & Contextual Inquiry">
          <h2 className="tl__sectionTitle">01. Designing the Webpage First Draft</h2>
          <p className="tl__list">
            I designed the first draft on Adobe XD by combining the four primary SBS pages into a single “to the point” page.  Explanations for each element is provided below. 
          </p>
          <p><strong>Note:</strong> Design decisions explained in the image below.</p>

          <div className="tl__img" aria-label="Discovery image">
            <img src={allImages['sharp-2.png']} alt="First draft of the Sharp consolidation page" />
          </div>

          <div className="tl__img" aria-label="Consolidation first draft">
            <img src={allImages['sharp-3.png']} alt="second half of first draft of consolidation page" />
          </div>
        </section>

        <section className="tl__section" aria-label="final draft">
          <h2 className="tl__sectionTitle">02. Webpage final draft</h2>
          <p className="tl__list">
            Collaborating with the website-wide color redesign, the interface was changed to match the beige theme.  
            I also used this iteration to minimize cognitive load, distilling the experience down to its most pertinent, 
            high-impact features by reducing copy and other less critical elements.
          </p>

          <div className="tl__img" aria-label="Final draft image">
            <img src={allImages['sharp-4.png']} alt="final draft screenshot" />
          </div>

        </section>

        <section className="tl__section" aria-label="Data-Driven Iteration">
          <h2 className="tl__sectionTitle">03. Other SBS content </h2>
          <p className="tl__list">
           In addition to the main SBS page, I helped redesign and modify other business pages for improved SEO copywriting and clearer visual flow while ensuring accessibility compliance.
          </p>

            <div className="tl__img2" aria-label="Low-fidelity mockup of consolidation page">
              <img src={allImages['sharp-5.png']} alt="Low-fidelity mockup of the Sharp consolidation page" />
            </div>
        </section>

        <section className="tl__section" aria-label="Design & Prototyping">
          <h2 className="tl__sectionTitle">04. Google Analytics & SEO Improvements</h2>
          <p> I used Google Analytics data (e.g. traffic reports) to identify and remove outdated, low-quality, and redundant pages, improving the website's overall quality and relevance.  
            I implemented best SEO practices when editing content for the new webpages, including strategic keyword placement to enhance searchability and internal linking. 
            Merging the sites was successful in increasing traffic to Sharp’s business site. Sharp will monitor the pages after launch and make adjustments as needed.
          </p>

            
            <div className="tl__img2" aria-label="Google Analytics screenshot">
              <img src={allImages['sharp-googleanalytics.png']} alt="Google Analytics report showing Sharp site traffic improvements" />
            </div>

        </section>

        
        </main>
      </div>
    </>
  );
}
