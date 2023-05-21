"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillType } from "../types";
import { urlFor } from "../lib/client";

type SkillData = {
  idx: number;
  skill: SkillType;
  directionLeft: boolean;
};

function Skill({ skill, directionLeft }: SkillData) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(skill?.icon)?.url()}
        alt="skillImages"
        className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-24 md:h-24  filter
        group-hover:grayscale "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white h-12 w-12  md:h-24 md:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-base md:text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
