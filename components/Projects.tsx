"use client";
import React, { useState } from "react";
import { HeroImg, MyImage } from "../assets";
import { GlowTop } from "../assets";
import styles from  '../src/app/styles/Contacts.module.css'
import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import TitleText from "./TitleText";
import { useRouter } from "next/navigation";
import { Particles } from "./Particles";

type Props = {};

const text = ` Click To See My Works In Detail | `.split(" ");

function Projects({}: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative  max-w-6xl  px-4 mx-auto sm:px-6">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>

        <Particles
          className="absolute inset-0 -z-10 opacity-40 group-hover/item:opacity-100   transition-opacity duration-1000 ease-in-out"
          quantity={40}
        />
        <motion.div
          variants={container}  
          initial="hidden"
          whileInView="visible"
          className=" text-white "
        >
          {/* <h3 className="text-5xl group p-4 font-epilogue font-bold dark:text-white text-cyan-400">
            Projects{" "}
            <span className="block max-w-0 group-hover:max-w-[203px] transition-all duration-500 h-0.5 bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"></span>
          </h3> */}
          <div className="mt-10">
        {/* Radial gradient */}
       
    <motion.div 
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth} mx-auto flex  flex-col `}
     >
      
        <TypingText title="| About Projects" textStyles="text-center" />
        <TitleText title="Projects " textStyles="text-center" />
    </motion.div>
    </div>
          <p className="text-2xl font-normal px-4 py-2 leading-8 dark:text-gray-200 ">
            {text.map((word, i) => (
              <motion.span
                className="text-zinc-400 text-xl"
                variants={child}
                key={i}
              >
                {word}{" "}
              </motion.span>
            ))}{" "}
          </p>
        </motion.div>
        <div className="  h-full w-full flex overflow-hidden relative transform   rounded-lg gap-2 py-10   ">
          <div className="flex justify-center gap-3">
            <div className="flex flex-col lg:flex-row    items-center max-w-7xl w-full m-4">
              <div className="bg-no-repeat bg-cover hover:scale-110 transition duration-300 ease-in-out rounded-lg bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
                <img
                  src="https://source.unsplash.com/random/500x400/?girl"
                  alt=""
                  className="h-full object-fill rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg  bg-zinc-900 bg-opacity-50">
                  <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                    <div className="font-bold text-lg m-2 mt-[30%]">
                      {" "}
                      <a href="">
                        Everything has beauty, but not everyone sees it.
                      </a>
                    </div>
                    <div className=" m-2 text-sm">
                      <a href="">
                        There is no one definition of beauty. Beauty standards
                        vary from culture to culture and change over time. In
                        Western cultures, beauty standards have traditionally
                        been based on ideals of youth and femininity.{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-no-repeat  hover:scale-110 transition duration-300 ease-in-out bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
                <img
                  src="https://source.unsplash.com/random/500x400/?girl"
                  className="h-full object-fill rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg  bg-zinc-900 bg-opacity-50">
                  <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                    <div className="font-bold text-lg m-2 mt-[30%]">
                      {" "}
                      <a href="">
                        Everything has beauty, but not everyone sees it.
                      </a>
                    </div>
                    <div className=" m-2 text-sm">
                      <a href="">
                        There is no one definition of beauty. Beauty standards
                        vary from culture to culture and change over time. In
                        Western cultures, beauty standards have traditionally
                        been based on ideals of youth and femininity.{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-no-repeat bg-cover  hover:scale-110 transition duration-300 ease-in-out bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
                <img
                  src="https://source.unsplash.com/random/500x400/?girl"
                  className="h-full object-fill rounded-lg "
                />
                <div className="absolute inset-0 rounded-lg  bg-zinc-900 bg-opacity-50">
                  <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                    <div className="font-bold text-lg m-2 mt-[30%]">
                      {" "}
                      <a href="">
                        Everything has beauty, but not everyone sees it.
                      </a>
                    </div>
                    <div className=" m-2 text-sm">
                      <a href="">
                        There is no one definition of beauty. Beauty standards
                        vary from culture to culture and change over time. In
                        Western cultures, beauty standards have traditionally
                        been based on ideals of youth and femininity.{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover  hover:scale-110 transition duration-300 ease-in-out bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
                <img
                  src="https://source.unsplash.com/random/500x400/?forest"
                  className="h-full object-fill rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg  bg-zinc-900 bg-opacity-50">
                  <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                    <div className="font-bold text-lg m-2 mt-[30%]">
                      {" "}
                      <a href="">
                        There is no Wi-Fi in the forest, but I promise you will
                        find a better connection
                      </a>
                    </div>
                    <div className=" m-2 text-sm">
                      <a href="">
                        There is something about mountains that is both humbling
                        and invigorating. Their very presence seems to demand
                        respect and even a certain amount of reverence.{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat hover:scale-110 transition duration-300 ease-in-out   bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
                <img
                  src="https://source.unsplash.com/random/500x400/?galaxy"
                  className="h-full object-fill rounded-lg "
                />
                <div className="absolute inset-0 rounded-lg  bg-zinc-900 bg-opacity-50">
                  <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                    <div className="font-bold text-lg m-2 mt-[30%]">
                      {" "}
                      <a href="">
                        The twinkle in your eyes is light the brightest stars on
                        the clearest night.
                      </a>
                    </div>
                    <div className=" m-2 text-sm">
                      <a href="">
                        There is something magical about the universe. It is so
                        vast and mysterious, and it is always expanding. Every
                        day, we are learning more about it and discovering new
                        things.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
