"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillType } from "../types";
import styles from  '../src/app/styles/Contacts.module.css'
import TypingText from "./TypingText";
import TitleText from "./TitleText";
type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
       <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
        >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
    <div>
        {/* Radial gradient */}
       
    <motion.div 
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth} mx-auto flex mt-10  flex-col mb-10`}
     >
      
        <TypingText title="| Test My SKills" textStyles="text-center" />
        <TitleText title="Skills " textStyles="text-center" />
    </motion.div>
    </div>
    <div>
    <motion.div
      className=" flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center"
    >
      
      
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
    </div>
    </div>
  );
};

export default Skills;
