import React from "react";
import AboutUsTxt from "./AboutUsTxt";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-9 md:flex-row-reverse md:items-center md:justify-center md:gap-0 mt-[70px] md:mt-[740px] lg:mt-[300px] px-6 py-3 md:px-9 overflow-hidden">
      <AboutUsTxt />
      <div className="w-full h-[280px] px-6 md:h-[298px] lg:w-[40%]">
        <figure className="relative w-full h-full rounded-[50px] overflow-hidden">
          <Image src="/images/aboutUs.jfif" alt="" fill objectFit="cover" />
        </figure>
      </div>
    </div>
  );
};

export default AboutUs;
