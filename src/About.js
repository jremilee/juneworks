// About.js
import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getGap = () => {
      const cs = getComputedStyle(track);
      const gapVal = parseFloat(cs.gap || cs.columnGap || "0");
      return isNaN(gapVal) ? 0 : gapVal;
    };
    let gap = getGap();

    let x = 0;
    const speed = 0.6; // px per frame (~36 px/s)
    let rafId;

    // Seed: put the last card before the first so the left edge is never empty
    const seed = () => {
      const last = track.lastElementChild;
      if (!last) return;
      const w = last.getBoundingClientRect().width;
      track.insertBefore(last, track.firstChild);
      x = -(w + gap);
      track.style.transform = `translateX(${x}px)`;
    };
    seed();

    const loop = () => {
      rafId = requestAnimationFrame(loop);
      if (paused) return;

      x += speed;

      // Wrap: move the last card to front BEFORE any gap appears
      while (true) {
        const last = track.lastElementChild;
        if (!last) break;
        const w = last.getBoundingClientRect().width;
        // Change condition: trigger when x reaches 0 (not when it exceeds w+gap)
        if (x < 0) break;
        track.insertBefore(last, track.firstChild);
        x -= w + gap;
      }

      track.style.transform = `translateX(${x}px)`;
    };

    rafId = requestAnimationFrame(loop);

    const onResize = () => { gap = getGap(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [paused]);

  return (
    <div className="aboutPage">
      {/* Top Nav */}
      <Nav />

      <main className="aboutMain" id="about">
        {/* ABOUT HERO */}
        <section className="aboutHero">
          <div className="aboutHero__inner">
            <div className="aboutHero__left">
              {/* Replace with your image path in /public, e.g. /about-finger.png */}
              <img
                className="finger__image"
                src="/images/finger-comp-transparent.png"
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
            </div>
          </div>
        </section>

        {/* HIGHLIGHT BOXES */}
        <section
          className="aboutBoxes"
          aria-label="Highlights"
        >
          <div className="aboutBoxes__inner" ref={trackRef}>
            <div className="aboutBox aboutBox--list">
              <ul className="aboutBox__list">
                <li className="aboutBox__title">My Favorite Classes</li>
                <li>TECHNOLOGY, RELIGION, FUTURE</li>
                <li>USER INTERFACE DESIGN</li>
                <li>PHILOSOPHY OF MIND</li>
                <li>PSYCHOLOGY OF IMAGINATION</li>
                <li>INTRODUCTION TO LINGUISTICS</li>
              </ul>
            </div>

            <div className="aboutBox aboutBox--image">
              <img className="aboutBox__img" src="/images/brainbanter.png" alt="Brain Banter placeholder" />
              <div className="aboutBox__caption">My favorite extracurricular</div>
            </div>

            <div id="published" className="aboutBox aboutBox--text aboutBox--wide">
              <h3 className="aboutBox__title">Published works</h3>
              <ul className="aboutBox__bullets">
                <li>§ Tart (Turning the Corner Erber & Wein Publishing)</li>
                <li>§ Illusion of Inadequacy, essay (finalist for National PTA Reflections)</li>
                <li>§ Dirty Rain, poem about anti-Asian sentiment during Covid (published in Anthology)</li>
                <li>§ Illusion of Inadequacy and All 10 were part of an anthology which won four national and state level awards (CSPA Crown Award, NSPA All American’s highest rating with four distinctions, ASPA first place distinction, and the ESSPA 1st Place Gold Award)  </li>
              </ul>
            </div>

            <div className="aboutBox aboutBox--text">
              <h3 className="aboutBox__title">Areas of Research</h3>
              <ul className="aboutBox__bullets aboutBox__bullets-research">
                <br/>
                <li>Bilingualism & Mental Imagery</li>
                <br/>
                <li>Perception & memory of stimuli in VR</li>
                <br/>
                <li>Impact of text vs speech, and voice gender on learning and source monitoring </li>
              </ul>
            </div>
          </div>
        </section>



        {/* EDUCATION */}
        <section className="aboutSection" aria-label="Education">
          <h2 className="aboutSection__title">Education</h2>

          <div className="aboutInfoRow">
            <div className="aboutInfoRow__left">
              <div className="aboutInfoRow__line">
                BA Cognitive Science, Education minor (GPA: 4.1)
              </div>
              <div className="aboutInfoRow__line">Phi Beta Kappa</div>
              <a className="aboutInfoRow__link" href="#transcript">
                Link to transcript
              </a>
            </div>

            <div className="aboutInfoRow__right">Expected May 2026</div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="aboutSection" aria-label="Work Experience">
          <h2 className="aboutSection__title">Work Experience</h2>

          <div className="aboutInfoRow aboutInfoRow--stack">
            <div className="aboutInfoRow__left">
              <div className="aboutInfoRow__line">
                Other than user design, my work experience spans research,
                education and marketing.
              </div>
              <a className="aboutInfoRow__link" href="#resume">
                Link to resume
              </a>
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section className="aboutConnect" aria-label="Contact">
          <h2 className="aboutConnect__title">Let’s Connect!</h2>
          <p className="aboutConnect__text">
            Feel free to reach out to talk about anything: UI/UX, EdTech, or fun
            project ideas. I’m also open to internships and freelance
            opportunities.
          </p>

          <div className="aboutConnect__icons">
            <a
              className="aboutIconBtn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              {/* Simple inline SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 23.5h4V7.5h-4v16ZM8.5 7.5h3.83v2.19h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v9.77h-4v-8.66c0-2.07-.04-4.72-2.88-4.72-2.88 0-3.32 2.25-3.32 4.57v8.81h-4V7.5Z" />
              </svg>
            </a>

            <a
              className="aboutIconBtn"
              href="mailto:hello@yourdomain.com"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

