"use client";
import { Particles } from "./Particles";
import React from "react";
import { motion, useDragControls } from "framer-motion";
import BlackHole from "./BlackHole";
import Cube from "./Cube";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="max-w-7xl  min-h-screen relative grid md:grid-cols-2 h-full py-1 mx-auto gap-5 overflow-hidden ">
      <Particles className="absolute inset-0 -z-10 " />

      <div className="from-zinc-200/20 to-zinc-200 flex flex-col  justify-center py-8 md:py-0 gap-4 ">
        <h1
          className="p-2
          font-epilogue  text-white font-bold text-4xl md:text-7xl "
        >
          Shamith Kumar Jain
        </h1>
        <h3 className="text-2xl   md:text-2xl p-2  font-epilogue text-white font-semibold">
        Transforming concepts into captivating digital journeys
        </h3>
        <a href="https://drive.google.com/file/d/1Xkn9QD1O56PYssmlzBdD960buawtd000/view?usp=sharing" download="MyExampleDoc" target='_blank'>
        <button className="px-4  py-2 ml-2 font-bold hover:scale-110 transition duration-500 ease-in-out  rounded-md w-[50%] md:w-[30%]  bg-white text-black">
          My Resume
        </button>
        </a>
      </div>
      <motion.div className="flex mb-10 sm:mb-0 flex-1  md:mt-0 perspective-[800px]  justify-center items-center">
        <Cube />
      </motion.div>
    </div>
  );
}

export default Hero;
