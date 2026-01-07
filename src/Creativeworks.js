// Creativeworks.js
import React, { useState, useRef } from "react";
import "./App.css";

export default function Creativeworks() {
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
    <div className="cwPage">
      <h1 className="cw__mainTitle">Creative works</h1>

      <CarouselSection title="Paintings" items={paintings} />
      <CarouselSection title="Random Mediums" items={randomMediums} />
      <CarouselSection title="Digital Experimentations" items={digitalExperimentations} />
    </div>
  );
}

function CarouselSection({ title, items }) {
  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320; // card width + gap
    const newPos = scrollPos + (direction === "left" ? -scrollAmount : scrollAmount);
    setScrollPos(newPos);
    container.scrollTo({ left: newPos, behavior: "smooth" });
  };

  return (
    <section className="cw__section">
      <h2 className="cw__sectionTitle">{title}</h2>
      <div className="cw__carouselWrap">
        <button className="cw__scrollBtn cw__scrollBtn--left" onClick={() => scroll("left")}>
          ←
        </button>
        <div className="cw__carousel" ref={scrollRef}>
          {items.map((item, idx) => (
            <img key={idx} src={item.src} alt={item.alt} className="cw__carouselImg" />
          ))}
        </div>
        <button className="cw__scrollBtn cw__scrollBtn--right" onClick={() => scroll("right")}>
          →
        </button>
      </div>
    </section>
  );
}
