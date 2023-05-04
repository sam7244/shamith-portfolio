import React from "react";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="grid md:grid-cols-2 h-[90vh] py-8   ">
      <div className=" flex flex-col gap-4 justify-center items-center">
        <h1 className="p-2 text-black font-bold text-6xl animate-bounce">
          Shamith
        </h1>
        <h3 className="text-xl font-semibold">Software Dev</h3>
      </div>
      <div className="flex  justify-center items-center">
        <Image
          src={"/vercel.svg"}
          alt="/vercel.svg"
          height={100}
          width={100}
          className="w-full h-[90%]"
        />
      </div>
    </div>
  );
}

export default Hero;
