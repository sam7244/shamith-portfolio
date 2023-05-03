"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
type Props = {};

function Navbar({}: Props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <motion.nav initial="hidden" whileInView="show">
      <div className="flex justify-between uppercase  items-center h-24 mx-auto px-4 max-w-7xl text-black">
        <h1 className={`w-full text-3xl ]  text-[#00df9a] font-bold`}>
          Shamith
        </h1>
        <ul className="md:flex hidden font-semibold ">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Projects</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        <div onClick={handleClick} className="md:hidden">
          {click ? <AiOutlineClose size={22} /> : <BiMenuAltRight size={22} />}
        </div>

        <div
          className={`${
            click
              ? "fixed md:hidden left-0 top-[19px] w-[60%] text-white h-full border-r ease-in-out  duration-500 border-r-gray-300 "
              : "fixed left-[-100%] "
          }`}
        >
          <ul className="text-black font-semibold uppercase p-4  ">
            <li className="p-4 border-b mt-20   cursor-pointer border-b-gray-600">
              Home
            </li>
            <li className="p-4 border-b  cursor-pointer border-b-gray-600">
              About
            </li>
            <li className="p-4 border-b  cursor-pointer border-b-gray-600">
              Projects
            </li>
            <li className="p-4 border-b  cursor-pointer border-b-gray-600">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
