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
        // bg-[#ee4444] bg-[#ff0055] [#22cc88] [#0099ff]
        ref={ref}
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative transform-style-3d"
      >
        <div
          className={`${side} rotate-y-0 translate-z-[100px] bg-gray-400 `}
        />
        <div
          className={`${side}  -rotate-y-90 translate-z-[100px] bg-gray-800`}
        />
        <div
          className={`${side}  rotate-y-90 translate-z-[100px] bg-zinc-900 border-2 border-white`}
        />
        <div
          className={`${side}  rotate-x-90 translate-z-[100px] bg-zinc-900 border-2`}
        />
        <div
          className={`${side}    -rotate-x-90 translate-z-[100px] bg-zinc-900 border-2`}
        />
        <div
          className={`${side}  rotate-y-180 translate-z-[100px] bg-zinc-900 border-2`}
        />
      </div>
    </div>
  );
}

export default Cube;
