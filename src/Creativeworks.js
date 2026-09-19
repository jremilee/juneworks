// Creativeworks.js
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import Nav from "./Nav";
import { allImages } from "./utils/imageLoader";
import JuneWalk from "./JuneWalk";

const DEBUG_WORLD = false;
const JUNE_SIZE_PX = 250;


export default function Creativeworks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = useMemo(
    () => [
      {
        id: "paintings",
        title: "Paintings",
        items: [
          { src: allImages["church.png"], alt: "church painting" },
          { src: allImages["pots.png"], alt: "pots painting" },
          { src: allImages["boat.png"], alt: "boat painting" },
          { src: allImages["apple-can-drawing.JPEG"], alt: "painting of an apple and a can" },
          { src: allImages["buni-drawing.JPEG"], alt: "dog painting" },
          { src: allImages["foldingcube.png"], alt: "folding cube image", label: "Various Mediums" },
          { src: allImages["egg.png"], alt: "carved ostrich egg" },
          { src: allImages["cardboard.png"], alt: "cardboard art" },
          {src: allImages["flowerwoman.png"],
            alt: "pencil drawing of woman's face with flower petal hair",
          },
          { src: allImages["hand-scratch-drawing.JPEG"], alt: "hand scratch drawing" },
          { src: allImages["boat-drawing.JPEG"], alt: "boat drawing" },
          { src: allImages["mindcloset.png"], alt: "June's mind closet", label: "Digital" },
          { src: allImages["converse.png"], alt: "Converse Ad" },
          { src: allImages["waves.png"], alt: "website design inspo" },
          { src: allImages["goatpuzzle.png"], alt: "goat puzzle" },
        ],
      },

    ],
    []
  );

  const sectionRefs = useRef({});
  const pressedKeysRef = useRef({ left: false, right: false });
  const [activeSectionId, setActiveSectionId] = useState("paintings");
  const [heldDirection, setHeldDirection] = useState(null);

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  const setSectionRef = useCallback((sectionId, node) => {
    if (node) {
      sectionRefs.current[sectionId] = node;
      return;
    }
    delete sectionRefs.current[sectionId];
  }, []);

  const resolveDirectionFromKeys = useCallback(() => {
    if (pressedKeysRef.current.right) return "right";
    if (pressedKeysRef.current.left) return "left";
    return null;
  }, []);

  const chooseActiveSection = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    let bestId = null;
    let bestScore = -Infinity;

    sectionIds.forEach((id) => {
      const node = sectionRefs.current[id];
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const visibleHeight = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
      );
      const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

      if (visibleRatio <= 0) return;

      const sectionCenter = rect.top + rect.height / 2;
      const distanceToViewportCenter = Math.abs(sectionCenter - viewportCenter);
      const score = visibleRatio * 1000 - distanceToViewportCenter;

      if (score > bestScore) {
        bestScore = score;
        bestId = id;
      }
    });

    if (!bestId) {
      sectionIds.forEach((id) => {
        const node = sectionRefs.current[id];
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distanceToViewportCenter = Math.abs(sectionCenter - viewportCenter);
        const score = -distanceToViewportCenter;

        if (score > bestScore) {
          bestScore = score;
          bestId = id;
        }
      });
    }

    if (bestId) {
      setActiveSectionId((prev) => (prev === bestId ? prev : bestId));
    }
  }, [sectionIds]);

  useEffect(() => {
    let rafId = null;
    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        chooseActiveSection();
      });
    };

    // Listen on both window and captured document scroll so nested scroll
    // containers still trigger active-section updates.
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    document.addEventListener("scroll", scheduleUpdate, true);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("scroll", scheduleUpdate, true);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [chooseActiveSection]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (!activeSectionId) return;

      e.preventDefault();
      if (e.key === "ArrowLeft") pressedKeysRef.current.left = true;
      if (e.key === "ArrowRight") pressedKeysRef.current.right = true;
      setHeldDirection(resolveDirectionFromKeys());
    };

    const onKeyUp = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      if (e.key === "ArrowLeft") pressedKeysRef.current.left = false;
      if (e.key === "ArrowRight") pressedKeysRef.current.right = false;
      setHeldDirection(resolveDirectionFromKeys());
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [activeSectionId, resolveDirectionFromKeys]);

  useEffect(() => {
    if (!activeSectionId) setHeldDirection(null);
  }, [activeSectionId]);

  return (
    <>
      <Nav />
      <div className="cwPage">
        <h1 className="cw__mainTitle">Welcome to June's Mind Gallery</h1>

        {sections.map((section) => (
          <WorldSection
            key={section.id}
            sectionId={section.id}
            title={section.title}
            items={section.items}
            isActive={activeSectionId === section.id}
            heldDirection={heldDirection}
            setSectionNode={setSectionRef}
          />
        ))}
      </div>
    </>
  );
}

function WorldSection({ sectionId, title, items, isActive, heldDirection, setSectionNode }) {
  const viewportRef = useRef(null);
  const worldRef = useRef(null);
  const [worldOffset, setWorldOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [characterOffset, setCharacterOffset] = useState(0);
  const [cardCenters, setCardCenters] = useState([]);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  useEffect(() => {
    const viewport = viewportRef.current;
    const world = worldRef.current;
    if (!viewport || !world) return;

    const updateBounds = () => {
      const nextMaxOffset = Math.max(0, world.scrollWidth - viewport.clientWidth);
      const nextViewportWidth = viewport.clientWidth;
      const nextCardCenters = Array.from(world.children).map(
        (card) => card.offsetLeft + card.offsetWidth / 2
      );
      setCardCenters((prev) =>
        prev.length === nextCardCenters.length &&
        prev.every((value, idx) => value === nextCardCenters[idx])
          ? prev
          : nextCardCenters
      );
      setMaxOffset(nextMaxOffset);
      setViewportWidth(nextViewportWidth);
      setWorldOffset((prev) => clamp(prev, 0, nextMaxOffset));
      setCharacterOffset((prev) => {
        const maxCharacterOffset = Math.max(0, nextViewportWidth / 2 - JUNE_SIZE_PX / 2 - 8);
        return clamp(prev, -maxCharacterOffset, maxCharacterOffset);
      });
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const imgs = world.querySelectorAll("img");
    const onImgLoad = () => updateBounds();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateBounds());
      ro.observe(viewport);
      ro.observe(world);
      imgs.forEach((img) => ro.observe(img));
    }

    return () => {
      window.removeEventListener("resize", updateBounds);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      if (ro) ro.disconnect();
    };
  }, []);

  const maxCharacterOffset = Math.max(0, viewportWidth / 2 - JUNE_SIZE_PX / 2 - 8);
  const canMoveRight = worldOffset < maxOffset - 0.5;
  const canMoveLeft = worldOffset > 0.5;
  const canShiftCharacterRight = characterOffset < maxCharacterOffset - 0.5;
  const canShiftCharacterLeft = characterOffset > -maxCharacterOffset + 0.5;
  const isCharacterCentered = Math.abs(characterOffset) <= 1;
  const inputDirection = isActive ? heldDirection : null;
  const isLeftOfCenter = characterOffset < -1;
  const isRightOfCenter = characterOffset > 1;

  let worldMovementDirection = null;
  let characterMovementDirection = null;
  let shouldSnapToCenter = false;

  if (inputDirection) {
    const worldCanMoveInInputDirection = inputDirection === "right" ? canMoveRight : canMoveLeft;
    const movingTowardCenter =
      (inputDirection === "right" && isLeftOfCenter) ||
      (inputDirection === "left" && isRightOfCenter);

    if (!isCharacterCentered) {
      // If we are off-center and the world can move in the held direction,
      // always recenter first, then resume world scrolling.
      if (movingTowardCenter && worldCanMoveInInputDirection) {
        characterMovementDirection = inputDirection;
        shouldSnapToCenter = true;
      } else {
        if (inputDirection === "right" && canShiftCharacterRight) characterMovementDirection = "right";
        if (inputDirection === "left" && canShiftCharacterLeft) characterMovementDirection = "left";
      }
    } else if (inputDirection === "right" && canMoveRight) {
      worldMovementDirection = "right";
    } else if (inputDirection === "left" && canMoveLeft) {
      worldMovementDirection = "left";
    } else {
      if (inputDirection === "right" && canShiftCharacterRight) characterMovementDirection = "right";
      if (inputDirection === "left" && canShiftCharacterLeft) characterMovementDirection = "left";
    }
  }

  const movementDirection = worldMovementDirection || characterMovementDirection;

  useEffect(() => {
    if (!worldMovementDirection && !characterMovementDirection) return;

    const speed = 300;
    let rafId = null;
    let lastTs = 0;

    const tick = (ts) => {
      if (!lastTs) {
        lastTs = ts;
      }

      const deltaSeconds = (ts - lastTs) / 1000;
      lastTs = ts;

      if (worldMovementDirection) {
        setWorldOffset((prev) => {
          const delta = worldMovementDirection === "right" ? speed * deltaSeconds : -speed * deltaSeconds;
          return clamp(prev + delta, 0, maxOffset);
        });
      }

      if (characterMovementDirection) {
        setCharacterOffset((prev) => {
          const delta = characterMovementDirection === "right" ? speed * deltaSeconds : -speed * deltaSeconds;
          const next = clamp(prev + delta, -maxCharacterOffset, maxCharacterOffset);

          if (shouldSnapToCenter) {
            const crossedCenter =
              (characterMovementDirection === "right" && prev < 0 && next >= 0) ||
              (characterMovementDirection === "left" && prev > 0 && next <= 0);
            if (crossedCenter) return 0;
          }

          return next;
        });
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [
    worldMovementDirection,
    characterMovementDirection,
    shouldSnapToCenter,
    maxOffset,
    maxCharacterOffset,
  ]);

  const progressPct = maxOffset > 0 ? (worldOffset / maxOffset) * 100 : 0;

  // The heading names the zone June is standing in: whichever card sits under
  // her, walked back to the most recent labelled card.
  const alignedCardIndex = useMemo(() => {
    if (!cardCenters.length) return 0;

    const probeX = viewportWidth / 2 + characterOffset;
    let bestIndex = 0;
    let bestDistance = Infinity;

    cardCenters.forEach((center, idx) => {
      const distance = Math.abs(center - worldOffset - probeX);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = idx;
      }
    });

    return bestIndex;
  }, [cardCenters, viewportWidth, characterOffset, worldOffset]);

  const displayTitle = useMemo(() => {
    let current = title;
    for (let i = 0; i <= alignedCardIndex && i < items.length; i += 1) {
      if (items[i].label) current = items[i].label;
    }
    return current;
  }, [alignedCardIndex, items, title]);

  useEffect(() => {
    if (!DEBUG_WORLD) return;
    console.log("section", sectionId, {
      isActive,
      heldDirection,
      worldOffset,
      maxOffset,
      characterOffset,
      maxCharacterOffset,
      worldMovementDirection,
      characterMovementDirection,
      shouldSnapToCenter,
      movementDirection,
    });
  }, [
    sectionId,
    isActive,
    heldDirection,
    worldOffset,
    maxOffset,
    characterOffset,
    maxCharacterOffset,
    worldMovementDirection,
    characterMovementDirection,
    shouldSnapToCenter,
    movementDirection,
  ]);

  return (
    <section
      className={`cw__section cw__worldSection ${isActive ? "cw__worldSection--active" : ""}`}
      ref={(node) => setSectionNode(sectionId, node)}
      aria-label={`${title} gallery world`}
    >
      <h2 className="cw__sectionTitle">{displayTitle}</h2>
      <div className="cw__worldViewport" ref={viewportRef}>
        <div className="cw__worldLayer" ref={worldRef} style={{ transform: `translateX(${-worldOffset}px)` }}>
          {items.map((item, idx) => (
            <figure key={idx} className="cw__worldCard">
              <img src={item.src} alt={item.alt} className="cw__carouselImg" />
            </figure>
          ))}
        </div>
      </div>
      <div className="cw__characterAboveProgress" style={{ transform: `translateX(${characterOffset}px)` }} aria-hidden="true">
        <JuneWalk direction={movementDirection} size={JUNE_SIZE_PX} />
      </div>
      <div className="cw__progress" aria-hidden="true" title={`${Math.round(progressPct)}% traversed`}>
        <div className="cw__progressBar" style={{ width: `${progressPct}%` }} />
      </div>
      <p className="cw__worldHint">
        {isActive
          ? "Use Left/Right arrow keys to move through this world"
          : "Scroll this section into view to control it with Left/Right arrows"}
      </p>
    </section>
  );
}
