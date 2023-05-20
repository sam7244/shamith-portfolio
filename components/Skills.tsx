"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillType } from "../types";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      className=" flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 xl:top-6 uppercase mb-5 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3
        className="absolute top-28 xl:top-16 uppercase tracking-[3px] text-gray-500 
        text-sm "
      >
        Hover over a skill for current proficiency{" "}
      </h3>
      <div className="grid  grid-cols-4  gap-5 ">
        {skills?.slice(0, skills?.length / 2).map((skill: any, idx: number) => (
          <Skill
            key={skill?._id}
            idx={idx}
            skill={skill}
            directionLeft={true}
          />
        ))}
        {skills?.slice(skills?.length / 2).map((skill: any, idx: number) => (
          <Skill
            key={skill?._id}
            idx={idx}
            skill={skill}
            directionLeft={false}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
