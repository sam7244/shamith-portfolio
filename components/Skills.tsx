"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillType } from "../types";
import styles from "../src/app/styles/Contacts.module.css";
import TypingText from "./TypingText";
import TitleText from "./TitleText";
type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="flex items-center justify-center md:justify-start flex-col h-screen">
      <div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex  flex-col mb-10`}
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
            {skills
              ?.slice(0, skills?.length / 2)
              .map((skill: any, idx: number) => (
                <Skill
                  key={skill?._id}
                  idx={idx}
                  skill={skill}
                  directionLeft={true}
                />
              ))}
            {skills
              ?.slice(skills?.length / 2)
              .map((skill: any, idx: number) => (
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
