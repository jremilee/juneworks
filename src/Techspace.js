// Techspace.js
import React, { useEffect } from "react";
import Nav from "./Nav";

export default function Techspace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="tlPage">
        <main className="content" id="techspace">

        <div className="tl__bannerContainer">
          <img src="/images/techspace-banner.png" alt="TechSpace banner" className="tl__banner"/>
        </div>

        <header className="tl__header">
          <h1 className="tl__title">TechSpace (for the girls)</h1>
          <p className="tl__subtitle">Frontend Implementation | React | Hackathon Project</p>
        </header>

        <section className="tl__section" aria-label="Project Overview">
          <h2 className="tl__sectionTitle"><p className="tl__subtitleD">A supportive community platform for women in tech.</p></h2>

          <p><strong>My role:</strong> Designed and implemented the frontend for the team’s project using React during a 24-hour DivHacks hackathon.</p>
          <p><strong>Skills / Tools:</strong> HTML, CSS, JavaScript, React, Tailwind, Axios</p>

          <div className="tl__img" aria-label="Overview image">
            <img src="/images/techspace-landing.png" alt="TechSpace landing page mockup" />
          </div>
        </section>

        <section className="tl__section" aria-label="Inspiration">
          <h2 className="tl__sectionTitle">Inspiration</h2>
          <p>
            TechSpace was created to provide women a stigma-free place to share struggles,
            swap tools, and feel seen—especially around mental health. The Space supports
            all stages of career growth by connecting users through topic-based "planet"
            threads and lightweight moderation.
          </p>
        </section>

        <section className="tl__section" aria-label="What it does">
          <h2 className="tl__sectionTitle">What it does</h2>
          <p className="tl__list">
            A SpacePage displays topic planets (similar to forum threads). Users post
            publicly or anonymously, read and sort comments, and add their own. Built-in
            moderation, crisis resources, and report/block tools keep the space safe.
          </p>

          <div className="tl__img" aria-label="Topic planets screenshot">
            <img src="/images/techspace-planets.png" alt="Topic planets and thread view mockup" />
          </div>
        </section>

        <section className="tl__section" aria-label="How we built it">
          <h2 className="tl__sectionTitle">How we built it</h2>
          <p>
            UI mockups were designed in Figma. Frontend used React + Tailwind + Axios.
            Backend used FastAPI, with Firebase Auth for login and Firestore for data
            storage (threads, comments, profiles).
          </p>

          <div className="tl__img2" aria-label="Figma screenshots">
            <img src="/images/techspace-figma.png" alt="Figma designs for login and thread pages" />
          </div>
        </section>

        <section className="tl__section" aria-label="Next steps">
          <h2 className="tl__sectionTitle">What's next</h2>
          <p className="tl__list">
            Planned features include live audio rooms on each planet, mentor matching,
            AI-assisted moderation, multilingual support, reactions/notifications,
            search (Algolia/Meilisearch), a zoomable SpacePage canvas, and a mobile app
            with offline-first posting.
          </p>
        </section>

        <section className="tl__section" aria-label="Video Demo">
          <h2 className="tl__sectionTitle">Demo</h2>
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

        <section className="tl__section" aria-label="What I did">
          <h2 className="tl__sectionTitle">My Role</h2>
          <ul className="tl__list">
            <li>Designed UI in Figma for login, landing, and thread pages.</li>
            <li>Implemented frontend in React, integrated Tailwind and Axios.</li>
            <li>Connected Firebase Auth and Firestore for authentication and data.</li>
            <li>Focused on accessible, clear thread interactions and lightweight moderation tools.</li>
          </ul>
        </section>

        </main>
      </div>
    </>
  );
}
