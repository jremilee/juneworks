// Techspace.js
import React, { useEffect } from "react";
import Nav from "./Nav";
import "./Techspace.css";

export default function Techspace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="techspace">

        <header className="tl__header">
          <h1 className="tl__title">TechSpace (for the girls)</h1>
          <p className="tl__subtitle">Frontend Implementation | React | Hackathon Project</p>
        </header>

        <div className="tl__bannerContainer">
          <video src="/videos/techspace-banner.mp4" alt="TechSpace banner" className="tl__banner" autoPlay loop muted />
        </div>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitle"> A space-themed “gamified Reddit” that creates a safe, welcoming community for girls in tech. </p></h2>

          <p><strong>My role:</strong> Designed and implemented the frontend for the team’s project using React during a 24-hour DivHacks hackathon.</p>
          <p><strong>Skills / Tools:</strong> HTML, CSS, JavaScript, React, Tailwind, Axios</p>

          <div className="tl__videoContainer">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/w3bOyq8jnHU"
              title="TechSpace Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

        </section>

        <section className="tl__section" aria-label="Inspiration">
          <h2 className="tl__sectionTitle">Inspiration</h2>
          <p>
            We’ve been the “only” in the room. TechSpace was born to give women, an underrepresented group 
            in tech a safe, stigma-free place to share struggles, swap tools, and feel seen—especially around 
            mental health. No matter what part of their career journey, our TechSpace helps women connect with one 
            another and support each other through both personal and professional growth.
          </p>
        </section>

        <section className="tl__section" aria-label="What it does">
          <h2 className="tl__sectionTitle">What it does</h2>
          <p>
            A SpacePage displays topic planets (like Reddit threads). Users post
            publicly or anonymously, read and sort comments, and add their own. Built-in
            moderation, crisis resources, and report/block tools keep the space safe.
          </p>

        </section>

        <section className="tl__section" aria-label="How we built it">
          <h2 className="tl__sectionTitle">How we built it</h2>
          <p>
            I used Figma to design out login pages, landing page, and thread pages. 
            For frontend, we used React + Tailwind + Axios.
            For backend, we used FastAPI, with Firebase Auth for login and Firestore for data
            storage (threads, comments, profiles).
          </p>

          <div className="tl__img2" aria-label="Figma screenshots">
            <img src="/images/techspace-1.png" alt="Figma designs for login and thread pages" />
          </div>


          <div className="tl__img2" aria-label="Topic planets screenshot">
            <img src="/images/techspace-2.png" alt="Topic planets and thread view mockup" />
          </div>

        </section>

        <section className="tl__section" aria-label="Next steps">
          <h2 className="tl__sectionTitle">What's Next for TechSpace?</h2>
          <p className="tl__list">
            Planned features include live audio rooms on each planet, mentor matching,
            AI-assisted moderation, multilingual support, reactions/notifications,
            search (Algolia/Meilisearch), a zoomable SpacePage canvas, and a mobile app
            with offline-first posting.
          </p>
        </section>


        </main>

        <footer className="tl__footer">
          <div className="tl__footerInner">
            <a className="tl__linkBtn" href="https://devpost.com/software/techspace-for-girls" target="_blank" rel="noopener noreferrer">See hackathon entry</a>
          </div>
        </footer>

      </div>
    </>
  );
}
