// JuneWalk.js
import React, { useEffect, useMemo, useState } from "react";

import centerStopLeft from "./images/center-stop-left.png";
import centerStopRight from "./images/center-stop-right.png";

import rightF1 from "./images/right-f1.png";
import rightF2 from "./images/right-f2.png";
import rightF3 from "./images/right-f3.png";
import rightF4 from "./images/right-f4.png";
import rightF5 from "./images/right-f5.png";

import rightStop1 from "./images/right-stop-1.png";
import rightStop2 from "./images/right-stop-2.png";
import rightStop3 from "./images/right-stop-3.png";

import leftF1 from "./images/left-f1.png";
import leftF2 from "./images/left-f2.png";
import leftF3 from "./images/left-f3.png";
import leftF4 from "./images/left-f4.png";
import leftF5 from "./images/left-f5.png";

import leftStop1 from "./images/left-stop-1.png";
import leftStop2 from "./images/left-stop-2.png";
import leftStop3 from "./images/left-stop-3.png";

const WALK_FRAME_MS = 90;
const STOP_FRAME_MS = 85;
export default function JuneWalk({ direction = null, size = 250 }) {

  const frames = useMemo(() => ({
    idleLeft: centerStopLeft,
    idleRight: centerStopRight,
    walkRight: [rightF1,rightF2,rightF3,rightF4,rightF5],
    walkLeft: [leftF1,leftF2,leftF3,leftF4,leftF5],
    stopRight: [rightStop1,rightStop2,rightStop3],
    stopLeft: [leftStop1,leftStop2,leftStop3]
  }), []);

  const [heldDirection,setHeldDirection] = useState(null);
  const [facingDirection,setFacingDirection] = useState("right");
  const [animationState,setAnimationState] = useState("idle");
  const [,setFrameIndex] = useState(0);
  const [currentFrame,setCurrentFrame] = useState(frames.idleRight);

  useEffect(()=>{

    setHeldDirection(direction);

  },[direction]);

  useEffect(()=>{

    if(heldDirection==="left"){
      setFacingDirection("left");
      setAnimationState("walking-left");
      setFrameIndex(0);
      setCurrentFrame(frames.walkLeft[0]);
    }

    else if(heldDirection==="right"){
      setFacingDirection("right");
      setAnimationState("walking-right");
      setFrameIndex(0);
      setCurrentFrame(frames.walkRight[0]);
    }

    else{

      setAnimationState(prev=>{

        if(prev==="walking-left") return "stopping-left";
        if(prev==="walking-right") return "stopping-right";

        return "idle";
      });

      setFrameIndex(0);
    }

  },[heldDirection,frames]);

  useEffect(()=>{
    if(animationState!=="idle") return;
    setCurrentFrame(facingDirection==="left" ? frames.idleLeft : frames.idleRight);
  },[animationState,facingDirection,frames]);

  useEffect(()=>{

    let interval;

    if(animationState==="walking-left"){

      interval=setInterval(()=>{

        setFrameIndex(prev=>{

          const next=(prev+1)%frames.walkLeft.length;

          setCurrentFrame(frames.walkLeft[next]);

          return next;
        });

      },WALK_FRAME_MS);
    }

    if(animationState==="walking-right"){

      interval=setInterval(()=>{

        setFrameIndex(prev=>{

          const next=(prev+1)%frames.walkRight.length;

          setCurrentFrame(frames.walkRight[next]);

          return next;
        });

      },WALK_FRAME_MS);
    }

    if(animationState==="stopping-left"){

      setCurrentFrame(frames.stopLeft[0]);

      interval=setInterval(()=>{

        setFrameIndex(prev=>{

          const next=prev+1;

          if(next<frames.stopLeft.length){

            setCurrentFrame(frames.stopLeft[next]);

            return next;
          }

          setCurrentFrame(frames.idleLeft);
          setAnimationState("idle");

          return 0;

        });

      },STOP_FRAME_MS);
    }

    if(animationState==="stopping-right"){

      setCurrentFrame(frames.stopRight[0]);

      interval=setInterval(()=>{

        setFrameIndex(prev=>{

          const next=prev+1;

          if(next<frames.stopRight.length){

            setCurrentFrame(frames.stopRight[next]);

            return next;
          }

          setCurrentFrame(frames.idleRight);
          setAnimationState("idle");

          return 0;

        });

      },STOP_FRAME_MS);
    }

    return ()=>clearInterval(interval);

  },[animationState,frames]);

  return (

    <div
      style={{
        position:"relative",
        width:`${size}px`,
        height:`${size}px`
      }}
    >

      <img
        src={currentFrame}
        alt="June character"
        draggable={false}
        style={{
          width:"100%",
          height:"100%",
          objectFit:"contain"
        }}
      />

    </div>

  );
}