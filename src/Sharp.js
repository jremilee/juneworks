// ThirstyLion.js
import React, { useEffect } from "react";
import Nav from "./Nav";

export default function Sharp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="thirstylion">
        <header className="tl__header">
          <h1 className="tl__title">Thirsty Lion</h1>
          <p className="tl__subtitle">UI Design | Prototyping | Frontend Development</p>  
        </header>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitleD"><p className="tl__subtitle"> A crowdsourced platform for real-time water fountain ratings at Columbia University. </p></h2>
          <p><strong>The Problem:</strong> Columbia students often encounter broken, slow, or warm water fountains, leading to frustration and dehydration. Even when familiar with the building, students often struggle to find the next best water fountain especially since fountains are not listed on building maps.</p>
          <p><strong>Our Solution:</strong> A crowdsourced platform where students rate and track fountain performance (flow speed, temperature, and filter status) in real-time.</p>
          <p>Team: June Lee, Jeffrey Roh, Madeline Ou, Jadyn Park</p>

          <div className="tl__img" aria-label="Overview image ">
            <img src="/images/thirstylion-allscreens-pink.png" alt="Figma layout of all screens of the Thirsty Lion app" />
          </div>
        </section>

        <section className="tl__section" aria-label="Discovery & Contextual Inquiry">
          <h2 className="tl__sectionTitle">01. Discovery & Contextual Inquiry</h2>
          <p>
            We began by investigating why students were dissatisfied with campus hydration. Through contextual inquiries, we discovered that in addition to good water pressure, water <strong>quality</strong> was also important to students (e.g. temperature, taste).
          </p>
          <p><strong>Key Insight:</strong> Students are willing to walk further if they are guaranteed a high-pressure, cold-water refill.</p>

          <div className="tl__img" aria-label="Discovery image ">
            <img src="/images/thirstylion-postits.png" alt="Post-it notes from contextual inquiry" />
          </div>
        </section>

        <section className="tl__section" aria-label="Smoke & Mirrors Prototype">
          <h2 className="tl__sectionTitle">02. The "Smoke & Mirrors" Prototype</h2>
          <ul className="tl__list">
            <li><strong>The Setup:</strong> Placed QR-coded posters at 8 different fountains at Columbia's most popular library.</li>
            <li><strong>The System:</strong> QR codes led to a Google Form (for rating) and a live Spreadsheet (displaying average scores).</li>
            <li><strong>The Result:</strong> <strong>51 organic responses</strong> in a short window. <strong>80% of users</strong> confirmed they would switch fountains based on our data.</li>
          </ul>

          <div className="tl__img" aria-label="Smoke & Mirrors Prototype image">
            <img src="/images/thirstylion-excel.png" alt="Excel spreadsheet with contextual inquiry data" />
          </div>
        </section>

        <section className="tl__section" aria-label="Data-Driven Iteration">
          <h2 className="tl__sectionTitle">03. Data-Driven Iteration</h2>
          <ul className="tl__list">
            <li><strong>Negativity Bias:</strong> Users report bad fountains more often than good ones. We needed to gamify "good" reports to keep data fresh.</li>
            <li><strong>Broken Infrastructure:</strong> We discovered "green" filter lights don't always mean high pressure, leading us to add "Flow Strength" as a primary metric.</li>
            <li><strong>Visibility Gap:</strong> Fountains on higher floors had zero engagement, proving the need for an <strong>In-App Map</strong> to surface hidden "gem" fountains.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="Design & Prototyping">
          <h2 className="tl__sectionTitle">04. Design & Prototyping</h2>
          <p>
            Moving from low-fidelity sketches to high-fidelity Figma mockups, we focused on a "speed-first" UI for mobile devices. This way students filling water can easily scan a QR code on the fountains with their phone and they are not obligated to leave reviews, so we designed the interface to be tactile and efficient to lead to the least amount of resistance.
          </p>

          <ul className="tl__list">
            <li><strong>Fountain Query:</strong> Quick search by building for water fountain floor and rating.</li>
            <li><strong>Building Map:</strong> Visual guide to locate fountains without physical signage.</li>
            <li><strong>Rating System:</strong> A 1–5 scale for overall quality, and a section focusing on the "Big Three": Temperature, Taste, and Filter Status.</li>
          </ul>

            <div className="tl__img2" aria-label="Low-fidelity mockup">
              <img src="/images/thirstylion-lowfid.png" alt="High-fidelity mockup 1 of the Thirsty Lion app" />
            </div>
            
            <div className="tl__img2" aria-label="High-fidelity mockup">
              <img src="/images/thirstylion-highfid.png" alt="High-fidelity mockup 2 of the Thirsty Lion app" />
            </div>

        </section>

        <section className="tl__section" aria-label="Risk Mitigation & Future Roadmap">
          <h2 className="tl__sectionTitle">05. Risk Mitigation & Future Roadmap</h2>
          <p><strong>Current Strategy:</strong> We transitioned from physical fountain stickers (a sticker saying “fountain 1” on physical fountain) to an <strong>interactive digital map</strong> with photo-references of each fountain.</p>
          <p><strong>Crowdsourcing:</strong> Implementing a "Verification" system to ensure crowdsourced data remains accurate even as student traffic fluctuates.</p>
        </section>

        <section className="tl__section" aria-label="Technical Stack & Contributions">
          <h2 className="tl__sectionTitle">Technical Stack & Contributions</h2>
          <ul className="tl__list">
            <li><strong>Design:</strong> Figma (Low-to-High Fid), Journey Mapping, Storyboarding.</li>
            <li><strong>Frontend:</strong> React/JavaScript (Query &amp; Individual Fountain Pages).</li>
            <li><strong>Backend:</strong> Firebase for real-time rating updates.</li>
            <li><strong>Testing:</strong> User testing &amp; Smoke-and-Mirrors validation.</li>
          </ul>
        </section>

        <section className="tl__section" aria-label="What I did">
          <h2 className="tl__sectionTitle">My Role</h2>
          <ul className="tl__list">
            <li>Pitched the winning project concept from a pool of 40 internal team proposals.</li>
            <li>Conducted smoke-and-mirrors prototyping to gage app demand (51 responses in 24 hours).</li>
            <li>Designed two key pages using Figma (home page, map page) and implemented frontend for fountain query page and fountain details page.</li>
            <li>Conducted targeted user testing and synthesized feedback into actionable design changes.</li>
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
        </main>
      </div>
    </>
  );
}
