"use client";

import { useSearchParams } from "next/navigation";
import React, { use } from "react";
import { HeroImg } from "../../../../assets";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Hero from "../../../../components/Hero";
import Navbar from "../../../../components/Navbar";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";
import Footer from "../../../../components/Footer";

const text =
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate voluptates vitae deserunt eos vel explicabo consectetur sed, dicta molestias dolor dignissimos! Ex reiciendis provident a numquam labore excepturi nisi mollitia!`.split(
    " "
  );

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
  {
    id: 43434,
    name: "project 3",
    source: { HeroImg },
    date: "12-12-2022",
    description: "this is the best project i have ever seen",
  },
  {
    id: 56465,
    name: "project 4",
    source: { HeroImg },
    date: "12-12-2022",
    description: "this is the best project i have ever seen",
  },
];

//parmas can be used in this way also
//{params}:{params:{id:string}}

const ProjectHomePage = () => {
  const router = useSearchParams();

  const router1 = useRouter();
  const id = router.get("id");

  const filters = () => {
    return DUMMY_DATA.filter((data) => data.id === Number(id));
  };

  const data = filters();

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
    <div className="bg-gray-900 min-h-screen px-4">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-6 md:mt-4 mb-4 border-b border-gray-600  gap-8 grid md:grid-cols-2 justify-center items-center sm:h-[100vh] lg:h-[80vh]">
        <div className="">
          <motion.div
            drag
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
            className="rounded-xl flex justify-center"
          >
            <Image
              alt="vercel"
              height={40}
              width={40}
              unoptimized
              className="object-cover bg-gray-600   rounded-lg h-[200px]  md:h-[50vh] w-[30vh] md:w-[30vw]"
              src={HeroImg}
            />
          </motion.div>
          <div className="flex gap-1 mt-8 justify-center">
            <div className=" p-5 rounded-xl">
              <Image
                alt="vercel"
                unoptimized
                className="object-contain bg-gray-600 rounded-lg  h-[10vh] md:h-[15vh] w-[10vh] md:w-[10vw]"
                src={HeroImg}
              />
            </div>
            <div className=" p-5 rounded-xl">
              <Image
                alt="vercel"
                unoptimized
                className="object-contain bg-gray-600 rounded-lg  h-[10vh] md:h-[15vh] w-[10vh] md:w-[10vw]"
                src={HeroImg}
              />
            </div>
            <div className=" p-5 rounded-xl">
              <Image
                alt="vercel"
                unoptimized
                className="object-contain bg-gray-600 rounded-lg  h-[10vh] md:h-[15vh] w-[10vh] md:w-[10vw]"
                src={HeroImg}
              />
            </div>
          </div>
        </div>
        <motion.div
          // style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex  text-white flex-col   justify-center"
        >
          <h1 className="font-bold font-epilogue p-2 text-xl  sm:mt-0 sm:text-2xl ">
            {data[0].name.toUpperCase()}
          </h1>
          <div className="">
            <h3 className="font-bold underline font-epilogue p-2  text-xl  sm:text-2xl  text-left">
              About
            </h3>
            <p className=" leading-7 p-2 font-epilogue font-semibold text-left">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div>
            <h3 className="font-bold underline p-2 font-epilogue  text-xl  sm:text-2xl  text-left">
              Techonongy used
            </h3>
            <p className=" leading-7  p-2 font-epilogue font-semibold ">
              Next-js Tailwind css Node js Sanity
            </p>
          </div>
          <div>
            <h3 className="font-bold underline font-epilogue p-2 text-xl sm:text-2xl  text-left">
              Objective
            </h3>
            <p className=" leading-7 p-2  font-epilogue font-semibold ">
              Next-js Tailwind css Node js Sanity
            </p>
          </div>
          <div>
            <h3 className="font-bold underline font-epilogue p-2 text-xl  sm:text-2xl  text-left">
              Challeges Faced
            </h3>
            <p className=" leading-7 p-2  font-epilogue font-semibold ">
              Next-js Tailwind css Node js Sanity
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto justify-center items-center sm:h-[90vh] md:h-[70vh] lg:h-[65vh]">
        <div className=" font-bold font-epilogue mt-4 p-4  text-3xl text-center  text-white ">
          <h1 className="h-full w-full bg-gray-900">You May also Like</h1>
        </div>
        <Marquee pauseOnHover gradient={false} speed={100}>
          <div className="flex   transform   rounded-lg items-center gap-2 py-10 lg:flex-row  ">
            {DUMMY_DATA.map((project, idx) => (
              <div
                className="justify-center"
                onClick={() => router1.push(`project/id?id=${project.id}`)}
                key={idx}
              >
                <div className="w-80 h-90 cursor-pointer px-4 rounded-lg contained">
                  <Image
                    alt={project.name}
                    src={HeroImg}
                    className="w-full h-full rounded-lg hover:scale-110 transition duration-[0.2s] ease-in object-contain"
                  />
                </div>
                <div className="text-white text-center">
                  <p>{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectHomePage;
