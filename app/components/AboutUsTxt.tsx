import React from "react";
import { AiFillLike } from "react-icons/ai";
import ButtonMain from "./ButtonMain";

const features = [
  {
    title: "لورم ایپسوم متن ساختگی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
  },
  {
    title: "لورم ایپسوم متن ساختگی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
  },
];

const AboutUsTxt = () => {
  return (
    <section className="flex flex-col gap-6 lg:w-[40%]">
      {/* header */}
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold text-primary">درباره ما</span>
        <h2 className="text-xl font-bold text-[#111111] leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی
        </h2>
        <p className="text-sm font-medium leading-7 text-[#353535]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        </p>
      </div>

      {/* features */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <AiFillLike className="text-3xl text-primary" />

            <h3 className="text-sm font-bold text-[#111111] leading-6">
              {item.title}
            </h3>

            <p className="text-sm leading-6 text-[#353535]">
              {item.description}
            </p>

            <div className="pt-2">
              <ButtonMain txt="بیشتر بدانید" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsTxt;
