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
    <div className=" max-w-7xl mx-auto h-screen px-4  grid md:grid-cols-2 ">
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
        className="flex items-center  justify-center "
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
        className="flex gap-4 text-white flex-col p-2 leading-5 md:justify-center items-center"
      >
        <h1 className="font-bold  text-3xl  md:mt-0 sm:text-2xl text-center ">
          Here&apos;s a little information about me.
        </h1>
        <p className="px-4 leading-7  font-semibold text-center ">
          {text.map((word, i) => (
            <motion.span variants={child} key={i}>
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </motion.div>
      </div>
    </div>
  );
}

export default About;
