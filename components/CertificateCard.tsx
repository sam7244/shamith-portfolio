import React from 'react'
import { motion } from 'framer-motion'
import { CertificateType } from '../types';
import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';

type props = {
    key : string;
    certificate :CertificateType;
    index : number;
}

const fadeIn = (direction:string, type :string, delay : number, duration:number) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
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
        ease: 'easeOut',
      },
    },
  });

const CertificateCard = ({key,certificate,index}:props) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className={`flex md:flex-row flex-col gap-4`}
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
  )
}

export default CertificateCard