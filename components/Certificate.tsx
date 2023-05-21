"use client";
import React from "react";
import { CertificateType } from "../types";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import TitleText from "./TitleText";
import CertificateCard from "./CertificateCard";
import Link from "next/link";
import { Particles } from "./Particles";
import { HighlighterItem } from "./HighLighterItem";

type props = {
  certificate: CertificateType[];
};

const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  // hero section
  heroHeading:
    "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]",
};

const staggerContainer = (staggerChildren: any, delayChildren: any) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const Certificate = ({ certificate }: props) => {
  return (
    <section id="certificates" className={`${styles.paddings} relative z-10 `}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col`}
      >
        <TypingText title="| Proof of work" textStyles="text-center" />
        <TitleText title="Certifications" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {certificate?.map((certificate, i) => (
            <CertificateCard
              key={`${certificate?.name}-${i}`}
              certificate={certificate}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificate;
