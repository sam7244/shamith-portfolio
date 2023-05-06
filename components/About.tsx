"use client";
import React from "react";
import Image from "next/image";
import { MyImage } from "../assets";
import { motion } from "framer-motion";
type Props = {};

const text =
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate voluptates vitae deserunt eos vel explicabo consectetur sed, dicta molestias dolor dignissimos! Ex reiciendis provident a numquam labore excepturi nisi mollitia!`.split(
    " "
  );
console.log(text);

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
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className=" max-w-7xl mx-auto h-screen px-4 gap-8 flex flex-col md:flex-row  justify-center items-center">
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
      >
        <Image
          alt="vercel"
          height={40}
          width={40}
          unoptimized
          className="object-cover rounded-lg  h-[30vh] md:h-[50vh] w-[30vh] md:w-[30vw]"
          src={MyImage}
        />
      </motion.div>
      <motion.div
        // style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex gap-4 text-white flex-col h-[30vh] md:h-[50vh] w-[30vh] md:w-[50vw] leading-5 items-center justify-center"
      >
        <h1 className="font-bold text-xl mt-14 sm:mt-0 sm:text-2xl text-center">
          Here's a little information about me.
        </h1>
        <p className="px-4  font-semibold text-center">
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
