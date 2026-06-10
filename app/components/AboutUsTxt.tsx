import React from "react";
import { AiFillLike } from "react-icons/ai";
import ButtonMain from "./ButtonMain";

const AboutUsTxt = () => {
  return (
    <div className="font-vazir flex flex-col gap-5 lg:w-[40%] ">
      <span className="text-lg font-bold">درباره ما</span>
      <span className="font-bold">لورم ایپسوم متن ساختگی با تولید سادگی</span>
      <p className="text-xs font-medium text-[#353535]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و{" "}
      </p>
      {/* text */}
      <div className="flex gap-5">
        {/* right */}
        <div className="flex flex-col gap-3 font-vazir">
          <AiFillLike className="text-primary text-3xl" />
          <span className="font-bold text-xs">لورم ایپسوم متن ساختگی</span>
          <p className="text-[#353535] text-[10px] w-[70%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
        </div>
        {/* left */}
        <div className="flex flex-col gap-3 font-vazir">
          <AiFillLike className="text-primary text-3xl" />
          <span className="font-bold text-xs">لورم ایپسوم متن ساختگی</span>
          <p className="text-[#353535] text-[10px] w-[70%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
        </div>
      </div>
      {/* button */}
      <div>
        <ButtonMain txt="بیشتر بدانید" />
      </div>
    </div>
  );
};

export default AboutUsTxt;
