import React, { useEffect, useRef, useState } from "react";
import { allImages } from "./utils/imageLoader";
import footerHand from "./images/footer-hand.png";
import "./Footer.css";

export default function Footer() {
  const footerRef = useRef(null);
  const [fingerVisible, setFingerVisible] = useState(false);

  useEffect(() => {
    const preBottomOffset = 120;

    const revealWhenNearFooterBottom = () => {
      const footerNode = footerRef.current;
      if (!footerNode) return;

      const footerBottom = footerNode.getBoundingClientRect().bottom + window.scrollY;
      const viewportBottom = window.scrollY + window.innerHeight;
      const nearFooterBottom = viewportBottom >= footerBottom - preBottomOffset;

      if (nearFooterBottom) {
        setFingerVisible(true);
        window.removeEventListener("scroll", revealWhenNearFooterBottom);
        window.removeEventListener("resize", revealWhenNearFooterBottom);
      }
    };

    revealWhenNearFooterBottom();
    window.addEventListener("scroll", revealWhenNearFooterBottom, { passive: true });
    window.addEventListener("resize", revealWhenNearFooterBottom);

    return () => {
      window.removeEventListener("scroll", revealWhenNearFooterBottom);
      window.removeEventListener("resize", revealWhenNearFooterBottom);
    };
  }, []);

  useEffect(() => {
    const lockScrollToFooterBottom = () => {
      const footerNode = footerRef.current;
      if (!footerNode) return;

      const footerBottom = footerNode.getBoundingClientRect().bottom + window.scrollY;
      const maxScrollY = Math.max(0, footerBottom - window.innerHeight);

      if (window.scrollY > maxScrollY) {
        window.scrollTo(0, maxScrollY);
      }
    };

    lockScrollToFooterBottom();
    window.addEventListener("scroll", lockScrollToFooterBottom, { passive: true });
    window.addEventListener("resize", lockScrollToFooterBottom);

    return () => {
      window.removeEventListener("scroll", lockScrollToFooterBottom);
      window.removeEventListener("resize", lockScrollToFooterBottom);
    };
  }, []);

  return (
    <section className="tl-footer-cta" ref={footerRef}>
      <div className={`tl-footer-image tl-footer-image--animate${fingerVisible ? " is-visible" : ""}`}>
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