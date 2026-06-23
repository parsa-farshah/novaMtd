import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

const HeaderImage = () => {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] lg:h-[520px]">
      <Image
        src="/images/header.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="flex flex-col justify-center h-full gap-3 px-3 py-5 relative z-10 md:px-6">
        <h1 className="text-lg font-bold md:text-2xl leading-relaxed">
          لورم ایپسوم متن ساختگی با تولید سادگی
        </h1>

        <p className="text-[#353535] text-xs md:text-[16px] leading-6 md:leading-7 max-w-[420px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و گرافیک
          است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          است.
        </p>

        <div className="pt-1">
          <ButtonMain txt="کلیک کنید" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
