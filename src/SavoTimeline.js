import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./SavoTimeline.css";

const cards = [
  { id: "c1", text: "Received key research objectives from CEO" },
  { id: "c2", text: "Referenced previous stakeholder calls to develop a script for discovery calls" },
  { id: "c3", text: "Compiled DPP provider contacts" },

  { id: "c4", text: "Conducted interviews and used Otter.ai to record the conversation" },
  { id: "c5", text: "Scheduled interview times" },
  { id: "c6", text: "Cold-called DPP providers and asked to interview program organizers and life style coaches" },

  { id: "c7", text:  "Used Otter.ai to parse interviews for common themes and developed an insights report" },
  { id: "c8", text: "Created journey maps for DPP stakeholder personas" },
  { id: "c9", text: "Presented final deliverable to CEO at the end of 4 weeks"},
];

// Backwards S path:
// top row: 1 -> 2 -> 3
// second row: 6 -> 5 -> 4
// third row: 7 -> 8 -> 9
const revealOrder = [0, 1, 2, 5, 4, 3, 6, 7, 8];

export default function ResearchProcessGrid() {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [lines, setLines] = useState([]);

  const cardOrderMap = useMemo(() => {
    const map = {};
    revealOrder.forEach((cardIndex, orderIndex) => {
      map[cardIndex] = orderIndex;
    });
    return map;
  }, []);

  useLayoutEffect(() => {
    const calculateLines = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      const centers = cardRefs.current.map((el) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();

        return {
          x: rect.left - wrapperRect.left + rect.width / 2,
          y: rect.top - wrapperRect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          left: rect.left - wrapperRect.left,
          top: rect.top - wrapperRect.top,
          right: rect.left - wrapperRect.left + rect.width,
          bottom: rect.top - wrapperRect.top + rect.height,
        };
      });

      const nextLines = [];
      const connectorOffset = 6;

      for (let i = 1; i < revealOrder.length; i++) {
        const prevIndex = revealOrder[i - 1];
        const nextIndex = revealOrder[i];

        const from = centers[prevIndex];
        const to = centers[nextIndex];

        if (!from || !to) continue;

        let x1, y1, x2, y2;

        // Same row: connect horizontally from edge to edge
        if (Math.abs(from.y - to.y) < 10) {
          const leftToRight = from.x < to.x;

          x1 = leftToRight ? from.right + connectorOffset : from.left - connectorOffset;
          y1 = from.y;
          x2 = leftToRight ? to.left - connectorOffset : to.right + connectorOffset;
          y2 = to.y;
        } else {
          // Different row: connect vertically from bottom/top center
          const topToBottom = from.y < to.y;

          x1 = from.x;
          y1 = topToBottom ? from.bottom + connectorOffset : from.top - connectorOffset;
          x2 = to.x;
          y2 = topToBottom ? to.top - connectorOffset : to.bottom + connectorOffset;
        }

        nextLines.push({
          key: `${prevIndex}-${nextIndex}`,
          x1,
          y1,
          x2,
          y2,
          orderIndex: i,
        });
      }

      setLines(nextLines);
    };

    calculateLines();

    const resizeObserver = new ResizeObserver(() => {
      calculateLines();
    });

    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) resizeObserver.observe(card);
    });

    window.addEventListener("resize", calculateLines);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateLines);
    };
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        node.classList.add("rpg-start");
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rpg-wrapper" ref={wrapperRef}>
      <svg className="rpg-lines" aria-hidden="true">
        {lines.map((line) => {
          const length = Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
          const cardDelay = 0.2 + line.orderIndex * 0.5;
          const lineDelay = Math.max(0, cardDelay - 0.24);

          return (
            <line
              key={line.key}
              className="rpg-line"
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              style={{
                "--line-length": length,
                "--line-delay": `${lineDelay}s`,
              }}
            />
          );
        })}
      </svg>

      <div className="rpg-grid">
        {cards.map((card, index) => {
          const orderIndex = cardOrderMap[index];
          const delay = 0.2 + orderIndex * 0.5;

          return (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="rpg-card"
              style={{ "--card-delay": `${delay}s` }}
            >
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}