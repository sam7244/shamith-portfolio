"use client";
import React from "react";
import Image from "next/image";
import { MyImage } from "../assets";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <div className="max-w-7xl mx-auto h-screen px-4 gap-8 flex flex-col md:flex-row  justify-center items-center">
      <motion.div
        initial={{ x: "-100vw", opacity: 0.5 }}
        animate={{ opacity: 1, x: 0, type: "spring" }}
        transition={{ duration: 1 }}
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
      <div className="flex gap-4 text-white flex-col h-[30vh] md:h-[50vh] w-[30vh] md:w-[50vw] leading-5 items-center justify-center">
        <h1 className="font-bold text-xl text-center">
          Here's a little information about me.
        </h1>
        <p className="px-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          voluptates vitae deserunt eos vel explicabo consectetur sed, dicta
          molestias dolor dignissimos! Ex reiciendis provident a numquam labore
          excepturi nisi mollitia!
        </p>
      </div>
    </div>
  );
}

export default About;
