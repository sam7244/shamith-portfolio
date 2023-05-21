import React from "react";
import { motion } from "framer-motion";
import { CertificateType } from "../types";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { Particles } from "./Particles";
import { HighlighterItem } from "./HighLighterItem";

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
    <div
      className="h-full md:col-span-6 lg:col-span-12  group/item"
      data-aos="fade-down"
    >
      <HighlighterItem>
        <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
          <Particles
            className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
            quantity={200}
          />
          <div className="flex flex-col">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
            </div>

            {/* <div className="p-8">
              <h3 className="text-lg font-semibold leading-8">Self Hosted</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Self host and maintain Highstorm on your own servers
              </p>
              <div className="mt-16 ">
                <Link
                  className="font-medium  whitespace-nowrap transition duration-150 ease-in-out text-zinc-100 hover:text-white group"
                  href="https://github.com/chronark/highstorm"
                >
                  Deploy your own
                </Link>
              </div>
            </div> */}
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 1)}
              className={`flex md:flex-row w-full p-4 rounded-lg h-full flex-col gap-4`}
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
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    {certificate?.name}
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                    {certificate?.description}
                  </p>
                </div>
                <Link href={certificate?.link} target="_blank">
                  <div
                    className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent
    border-[1px] border-white"
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
  );
};

export default CertificateCard;
