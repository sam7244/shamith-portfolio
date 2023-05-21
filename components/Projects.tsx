"use client";
import React, { useState } from "react";
import { HeroImg, MyImage } from "../assets";
import { GlowTop } from "../assets";

import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import { Particles } from "./Particles";

type Props = {};
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const text = ` Click To See My Works In Detail |😪 `.split(" ");

const DUMMY_DATA = [
  {
    id: 1234,
    name: "project 1",
    source: { HeroImg },
    date: "12-12-2022",
    description: "this is the best project i have ever seen",
  },
  {
    id: 3456,
    name: "project 2",
    source: { HeroImg },
    date: "12-12-2022",
    description: "this is the best project i have ever seen",
  },
  // {
  //   id: 43434,
  //   name: "project 3",
  //   source: { HeroImg },
  //   date: "12-12-2022",
  //   description: "this is the best project i have ever seen",
  // },
  // {
  //   id: 56465,
  //   name: "project 4",
  //   source: { HeroImg },
  //   date: "12-12-2022",
  //   description: "this is the best project i have ever seen",
  // },
  {
    id: 56463,
    name: "project 4",
    source: { HeroImg },
    date: "12-12-2022",
    description: "this is the best project i have ever seen",
  },
];

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

  // const handleOnclick = (id : any) =>{
  //     const path = `/product/${id}`;
  //     const x = useRouter();
  //     x.push(path);
  // }
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="relative max-w-6xl  px-4 mx-auto sm:px-6">
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
            <Image
              src={GlowTop}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
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
          <h3 className="text-5xl group p-4 font-epilogue font-bold dark:text-white text-cyan-400">
            Projects{" "}
            <span className="block max-w-0 group-hover:max-w-[203px] transition-all duration-500 h-0.5 bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"></span>
          </h3>
          <p className="text-2xl font-epilogue px-4 py-2 leading-8 dark:text-gray-200 ">
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
        {/* <Marquee pauseOnHover className=" p-2" gradient={false} speed={60}> */}

        <div className=" </div> h-full flex flex-shrink-0 items-center justify-center overflow-hidden overflow-x-scroll relative transform   rounded-lg gap-2 py-10   ">
          {DUMMY_DATA.map((project, idx) => (
            <div className="flex relative w-full">
              <div className="flex">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    className="w-[100px] h-[100px] xl:w-[300px] xl:h-[300px] rounded-full md:rounded-none"
                    key={page}
                    src="data:image/jpeg;base64,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"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  />
                </AnimatePresence>
              </div>
              <div
                className=" absolute w-[40px] rounded-full bg-white top-[50%] right-0 flex items-center h-[40px] z-10"
                onClick={() => paginate(1)}
              >
                {"‣"}
              </div>
              <div
                className="left-[10px]  -scale-1"
                onClick={() => paginate(-1)}
              >
                {"‣"}
              </div>
            </div>
          ))}
        </div>

        {/* </Marquee> */}
      </div>
    </div>
  );
}

export default Projects;
