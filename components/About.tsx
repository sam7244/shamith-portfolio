"use client";
import React from "react";
import Image from "next/image";
import { MyImage } from "../assets";
import { motion } from "framer-motion";
import { Particles } from "./Particles";
import TypingText from "./TypingText";
import TitleText from "./TitleText";
type Props = {};

const text =
  `.I'm a tech enthusiast who thrives at the intersection of innovation and code, turning ideas into digital reality one line at a time.`.split(
    " "
  );

function About({}: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
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

  return (
    <div
      className=" max-w-7xl relative mx-auto h-screen justify-center  group/item  grid md:grid-cols-2 "
      data-aos="fade-down"
    >
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      
      <motion.div 
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={` flex  flex-col col-span-full h-[10rem] mt-10`}
     >
        <TypingText title="| Know About Me" textStyles="text-center" />
        <TitleText title="About " textStyles="text-center" />
    </motion.div>
      <Particles
        className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100   transition-opacity duration-1000 ease-in-out"
        quantity={40}
      />
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        // make effect only when we scroll down to the about section
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="flex items-center mb-12 justify-center "
      >
        <Image
          alt="vercel"
          height={40}
          width={40}
          unoptimized
          className="object-contain rounded-lg h-[200px] w-[200px] sm:h-[350px] sm:w-[250px] md:h-[50vh] md:w-[50vh]"
          src={MyImage}
        />
      </motion.div>
      <motion.div
        // style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex gap-4 text-white mb-12 flex-col p-2 leading-5 md:justify-center items-center"
      >
   
        <p className="px-4 leading-7 text-2xl font-semibold text-center ">
          {text.map((word, i) => (
            <motion.span variants={child} key={i}>
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </motion.div>
      </div>
  );
}

export default About;
