import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

const HeaderImage = () => {
  return (
    <div className="relative w-full h-[340px] md:h-[380px] lg:h-[500px]">
      <Image src="/images/header.png" alt="" fill objectFit="cover" />
      <div className="flex flex-col justify-center h-full gap-4 px-3 py-5 relative z-10 md:px-6">
        <h1 className=" text-lg font-bold md:text-2xl">
          لورم ایپسوم متن ساختگی با
        </h1>
        <p className="text-[#353535] text-xs w-[42%] md:w-[32%] md:text-[16px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و گرافیک
          است. چاپگرها و متون بلکه روزنام
        </p>
        <div>
          <ButtonMain txt="کلیک کنید" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
