import React from "react";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen px-4 gap-8 flex flex-col md:flex-row  justify-center items-center">
      <div>
        <Image
          alt="vercel"
          height={40}
          width={40}
          className="h-[30vh] md:h-[50vh] w-[30vh] md:w-[50vw]"
          src={"/vercel.svg"}
        />
      </div>
      <div className="flex gap-4 flex-col h-[30vh] md:h-[50vh] w-[30vh] md:w-[50vw] leading-5 items-center justify-center">
        <h1 className="font-bold text-xl text-center">
          Here's a little information about me.
        </h1>
        <p className="px-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          voluptates vitae deserunt eos vel explicabo consectetur sed, dicta
          molestias dolor dignissimos! Ex reiciendis provident a numquam labore
          excepturi nisi mollitia!
        </p>
      </div>
    </div>
  );
}

export default About;
