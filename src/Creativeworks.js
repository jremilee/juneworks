// Creativeworks.js
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";

export default function Creativeworks() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const paintings = [
    { src: "/images/church.png", alt: "church painting" },
    { src: "/images/pots.png", alt: "pots painting" },
    { src: "/images/boat.png", alt: "boat painting" },
  ];

  const randomMediums = [
    { src: "/images/foldingcube.png", alt: "folding cube image" },
    { src: "/images/egg.png", alt: "carved ostrich egg" },
    { src: "/images/cardboard.png", alt: "cardboard art" },
    { src: "/images/flowerwoman.png", alt: "pencil drawing of woman's face with flower petal hair" },
  ];

  const digitalExperimentations = [
    { src: "/images/mindcloset.png", alt: "June's mind closer" },
    { src: "/images/converse.png", alt: "Converse Ad" },
    { src: "/images/waves.png", alt: "website design inspo" },
    { src: "/images/goatpuzzle.png", alt: "goat puzzle" },
  ];

  return (
    <>
      <Nav />
      <div className="cwPage">
        <h1 className="cw__mainTitle">Creative works</h1>

        <CarouselSection title="Paintings" items={paintings} />
        <CarouselSection title="Random Mediums" items={randomMediums} />
        <CarouselSection title="Digital Experimentations" items={digitalExperimentations} />
      </div>
    </>
  );
}

function CarouselSection({ title, items }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollRef = useRef(null);

  // Keep internal state synced with the real scroll position.
  // Use ResizeObserver and image "load" events to ensure metrics are correct
  // when the user first navigates to the page (no refresh required).
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateMetrics = () => {
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      setMaxScroll(max);
      setScrollPos(container.scrollLeft);
    };

    updateMetrics();

    const onScroll = () => setScrollPos(container.scrollLeft);
    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateMetrics);

    // If images are still loading, update metrics when each finishes loading.
    const imgs = container.querySelectorAll("img");
    const onImgLoad = () => updateMetrics();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    // Use ResizeObserver to handle dynamic layout/content changes.
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateMetrics());
      ro.observe(container);
      // also observe images in case their intrinsic size loads later
      imgs.forEach((img) => ro.observe(img));
    }

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMetrics);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      if (ro) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320; // card width + gap
    const base = container.scrollLeft;
    const target = clamp(
      base + (direction === "left" ? -scrollAmount : scrollAmount),
      0,
      maxScroll
    );
    container.scrollTo({ left: target, behavior: "smooth" });
  };

  const atStart = scrollPos <= 0;
  const atEnd = scrollPos >= maxScroll - 1; // tolerance for precision
  const progressPct = maxScroll > 0 ? (scrollPos / maxScroll) * 100 : 0;

  return (
    <section className="cw__section">
      <h2 className="cw__sectionTitle">{title}</h2>
      <div className="cw__carouselWrap">
        <button
          className="cw__scrollBtn cw__scrollBtn--left"
          onClick={() => scroll("left")}
          disabled={atStart}
          aria-disabled={atStart}
          title={atStart ? "Start of gallery" : "Scroll left"}
        >
          ←
        </button>
        <div className="cw__carousel" ref={scrollRef}>
          {items.map((item, idx) => (
            <img key={idx} src={item.src} alt={item.alt} className="cw__carouselImg" />
          ))}
        </div>
        <button
          className="cw__scrollBtn cw__scrollBtn--right"
          onClick={() => scroll("right")}
          disabled={atEnd}
          aria-disabled={atEnd}
          title={atEnd ? "End of gallery" : "Scroll right"}
        >
          →
        </button>
      </div>
      <div className="cw__progress" aria-hidden="true">
        <div className="cw__progressBar" style={{ width: `${progressPct}%` }} />
      </div>
    </section>
  );
}
