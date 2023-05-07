"use client";
import React from "react";
import { HeroImg, MyImage } from "../assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

type Props = {};

const text =
  ` Ecommerce, Etherium Blockchain, Sanity CMS, NodeJs, NextJs, TailwindCSS`.split(
    " "
  );

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
  return (
    <div className="max-w-7xl flex  min-h-screen flex-col  justify-center   mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="mt-14 text-center text-white "
      >
        <h3 className="text-3xl py-1 font-epilogue font-bold dark:text-white">
          Projects{" "}
        </h3>
        <p className="text-md font-epilogue py-2 leading-8 dark:text-gray-200 ">
          Since i&apos;m a beginner I&apos;ve done many full stack projects on{" "}
          {text.map((word, i) => (
            <motion.span className="text-teal-400" variants={child} key={i}>
              {word}{" "}
            </motion.span>
          ))}{" "}
          etc..
        </p>
        <p className="text-md py-2 dark:text-gray-200 leading-8 ">
          Willing to learn new skills along the way and provide services,
          including programming and teaching .
        </p>
      </motion.div>
      <Marquee pauseOnHover gradient={false} speed={100}>
        <div className="flex   transform   rounded-lg items-center gap-2 py-10 lg:flex-row ">
          <div className="w-80 h-90 cursor-pointer px-4 rounded-lg ">
            <Image
              alt="my-img"
              src={HeroImg}
              className="w-full h-full rounded-lg hover:scale-110 transition duration-[0.2s] ease-in object-contain"
            />
          </div>
          <div className="w-80 h-90 cursor-pointer px-4 rounded-lg">
            <Image
              alt="my-img"
              src={HeroImg}
              className="w-full h-full rounded-lg hover:scale-110 transition duration-[0.2s] ease-in object-contain"
            />
          </div>
          <div className="w-80 h-90 cursor-pointer px-4 rounded-lg">
            <Image
              alt="my-img"
              src={HeroImg}
              className="w-full h-full rounded-lg hover:scale-110 transition duration-[0.2s] ease-in object-contain"
            />
          </div>
          <div className="w-80 h-90 cursor-pointer px-4 rounded-lg">
            <Image
              alt="my-img"
              src={HeroImg}
              className="w-full h-full rounded-lg hover:scale-110 transition duration-[0.2s] ease-in object-contain"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Projects;
