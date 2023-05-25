import React from "react";
import { motion } from "framer-motion";
import { CertificateType } from "../types";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { Particles } from "./Particles";
import { HighlightGroup, HighlighterItem } from "./HighLighterItem";

type props = {
  key: string;
  certificate: CertificateType;
  index: number;
};

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const CertificateCard = ({ key, certificate, index }: props) => {
  return (
    <HighlightGroup className="h-full  group">
      <div
        className="h-full md:col-span-6 lg:col-span-12  group/item"
        data-aos="fade-down"
      >
        <HighlighterItem>
          <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
            <Particles
              className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
              quantity={200}
              color={["#34d399", "#fde047", "#f43f5e"][index ? index % 3 : 0]}
              vy={-0.2}
            />
            <div className="flex flex-col">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
              </div>

              <motion.div
                variants={fadeIn("up", "spring", index * 0.5, 1)}
                className={`flex md:flex-row w-full p-4 relative  rounded-lg h-full flex-col gap-4`}
              >
                <Image
                  src={urlFor(certificate?.image).url()}
                  width={100}
                  height={250}
                  unoptimized={true}
                  alt="planet-01"
                  className="md:w-[270px] w-full h-[250px] rounded-[32px]  object-fill "
                />
                <div className="w-full flex justify-between items-center">
                  <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                    <h4 className="inline-flex text-3xl md:text-4xl items-baseline pb-1 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                      {certificate?.name}
                    </h4>
                    <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-zinc-400">
                      {certificate?.description}
                    </p>
                  </div>
                  <Link href={certificate?.link} target="_blank">
                    <div
                      className="lg:flex hidden    items-center justify-center w-[100px] h-[100px] rounded-full   bg-transparent bg-clip-text border-zinc-500
    border-[1px] "
                    >
                      <Image
                        width={40}
                        height={40}
                        src="/arrow.svg"
                        alt="arrow"
                        className="w-[40%] h-[40px] object-contain "
                      />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </HighlighterItem>
      </div>
    </HighlightGroup>
  );
};

export default CertificateCard;
