"use client";
import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const side = `absolute w-full h-full opacity-[0.6]`;
type props = {};

function Cube({}: props) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    if (!ref.current) return;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
      <div
        ref={ref}
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative transform-style-3d"
      >
        <div
          className={`${side} rotate-y-0 translate-z-[100px] bg-[#ee4444]`}
        />
        <div
          className={`${side}  -rotate-y-90 translate-z-[100px] bg-[#8855ff]`}
        />
        <div
          className={`${side}  rotate-y-90 translate-z-[100px] bg-[#ffcc00]`}
        />
        <div
          className={`${side}  rotate-x-90 translate-z-[100px] bg-[#0099ff]`}
        />
        <div
          className={`${side}    -rotate-x-90 translate-z-[100px] bg-[#22cc88]`}
        />
        <div
          className={`${side}  rotate-y-180 translate-z-[100px] bg-[#ff0055]`}
        />
      </div>
    </div>
  );
}

export default Cube;
