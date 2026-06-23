import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-center h-fit items-center lg:flex-row lg:items-center  lg:gap-6 2xl:container 2xl:mx-auto">
      <div className="lg:w-[113px] flex items-center h-fit">
        <span className=" text-2xl font-bold lg:text-center  lg:text-[28px]  ">
          مزایای همکاری با novamtd
        </span>
      </div>
      {/* cards */}
      <section className="flex flex-col gap-2 mt-[58px] lg:mt-0 md:flex-row md:justify-between md:px-6 md:gap-0 md:items-center h-full">
        {/* card 1 */}
        <section className="w-[280px] md:w-[32%]">
          <div className="bg-primary rounded-3xl px-3 py-6  flex items-center gap-6 md:gap-8">
            <FaCheckSquare className="text-white text-5xl md:text-7xl" />
            <div className="flex flex-col gap-5">
              <span className=" text-xs font-bold text-white lg:text-sm">
                لورم ایپسوم متن ساختگی تولید
              </span>
              <p className=" text-[8px] text-[#E3E3E3] leading-4 lg:text-xs lg:w-[70%]">
                لورم ایپسوم متن ساختگی با تولیدلورم ایپسوم متن ساختگی با تولید
                لورم ایپسوم متن ساختگی با تولید
              </p>
            </div>
          </div>
        </section>
        {/* card 2 */}
        <section className="w-[280px] md:w-[32%]">
          <div className="bg-primary rounded-3xl px-3 py-6  flex items-center gap-6 md:gap-8">
            <FaCheckSquare className="text-white text-5xl md:text-7xl" />
            <div className="flex flex-col gap-5">
              <span className=" text-xs font-bold text-white lg:text-sm">
                لورم ایپسوم متن ساختگی تولید
              </span>
              <p className=" text-[8px] text-[#E3E3E3] leading-4 lg:text-xs lg:w-[70%]">
                لورم ایپسوم متن ساختگی با تولیدلورم ایپسوم متن ساختگی با تولید
                لورم ایپسوم متن ساختگی با تولید
              </p>
            </div>
          </div>
        </section>{" "}
        {/* card 3 */}
        <section className="w-[280px] md:w-[32%]">
          <div className="bg-primary rounded-3xl px-3 py-6  flex items-center gap-6 md:gap-8">
            <FaCheckSquare className="text-white text-5xl md:text-7xl" />
            <div className="flex flex-col gap-5">
              <span className=" text-xs font-bold text-white lg:text-sm">
                لورم ایپسوم متن ساختگی تولید
              </span>
              <p className=" text-[8px] text-[#E3E3E3] leading-4 lg:text-xs lg:w-[70%]">
                لورم ایپسوم متن ساختگی با تولیدلورم ایپسوم متن ساختگی با تولید
                لورم ایپسوم متن ساختگی با تولید
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default WhyChooseUs;
