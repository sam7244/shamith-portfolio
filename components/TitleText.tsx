import React from 'react'
import { motion } from 'framer-motion'

const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  type props = {
    title : string;
    textStyles : any;
  }

const TitleText = ({title , textStyles} :props) => {
  return (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
  )
}

export default TitleText