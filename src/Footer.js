import { allImages } from "./utils/imageLoader";
import footerHand from "./images/footer-hand.png";
import "./Footer.css";

export default function Footer() {
  return (
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
          <div className="aboutConnect__icons">
            <a
              className="aboutIconBtn"
              href="https://www.linkedin.com/in/june-lee-18snvk90/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src={allImages["linkedin-icon.png"]} alt="LinkedIn Icon" />
            </a>

            <span style={{ position: "relative", display: "inline-block" }}>
              <a
                className="aboutIconBtn"
                href="mailto:jrl2227@barnard.edu"
                aria-label="Email"
                title="Email"
              >
                <img src={allImages["gmail-icon.png"]} alt="email Icon" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="tl-footer-copyright">@juneworks2026</div>
    </section>
  );
}