import Image from "next/image";
import React from "react";
import { FaPills } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="mt-6 w-full flex flex-col items-center relative overflow-hidden 2xl:container 2xl:mx-auto">
      {/* image doctore */}
      <div className="absolute -left-[5%] xl:-left-[4%] bottom-0 hidden lg:flex z-0">
        <figure className="relative lg:w-[299px] lg:h-[399px]">
          <Image src="/images/doctor.png" alt="doctor" fill />
        </figure>
      </div>
      {/* text */}
      <span className="font-vazir text-[32px] font-black">خدمات ما</span>
      {/* cards */}
      <section className="flex flex-col items-center gap-[15px] md:flex-row md:flex-wrap md:justify-center md:w-[637px] xl:w-[950px] mt-4">
        {/* card 1 */}
        <section className="bg-primary px-6 py-4 w-[70%]  md:w-[248px] rounded-3xl flex flex-col gap-[14px] xl:w-[354px] xl:h-[192px]">
          <div className="flex gap-3.5">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-5xl text-white" />
          </div>
          <span className="font-vazir font-bold text-sm text-white">
            لورم ایپسوم متن ساختگی با
          </span>
          <p className="text-[#E3E3E3] font-vazir font-normal text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنام
          </p>
        </section>
        {/* card 2 */}
        <section className="bg-primary px-6 py-4 w-[70%] md:h-[192px] md:w-[367px] rounded-3xl flex flex-col gap-[14px] xl:w-[580px]">
          <div className="flex gap-3.5">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-5xl text-white" />
          </div>
          <span className="font-vazir font-bold text-sm text-white">
            لورم ایپسوم متن ساختگی با
          </span>
          <p className="text-[#E3E3E3] font-vazir font-normal text-xs xl:w-[280px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنام
          </p>
        </section>
        {/* card 3 */}
        <section className="bg-primary px-6 py-4 w-[70%] md:h-[192px] md:w-[367px] rounded-3xl flex flex-col gap-[14px] xl:w-[580px]">
          <div className="flex gap-3.5">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-5xl text-white" />
          </div>
          <span className="font-vazir font-bold text-sm text-white">
            لورم ایپسوم متن ساختگی با
          </span>
          <p className="text-[#E3E3E3] font-vazir font-normal text-xs xl:w-[280px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنام
          </p>
        </section>
        {/* card 4 */}
        <section className="bg-primary px-6 py-4 w-[70%] md:w-[248px] rounded-3xl flex flex-col gap-[14px] xl:w-[354px] xl:h-[192px]">
          <div className="flex gap-3.5">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-5xl text-white" />
          </div>
          <span className="font-vazir font-bold text-sm text-white">
            لورم ایپسوم متن ساختگی با
          </span>
          <p className="text-[#E3E3E3] font-vazir font-normal text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنام
          </p>
        </section>
      </section>
      {/* information */}
      <div className="w-[90%]  md:w-[637px]  xl:w-[948px] border-[3px] border-primary px-[21px] py-[7px] rounded-full flex justify-between items-center mt-5 relative z-10">
        <span className="text-[10px] text-primary md:text-sm font-bold">
          شماره تماس : <span className="text-[#353535]">09372440469</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[#353535] text-[10px] md:text-sm font-bold">
            شروع گفتگو و ارتباط با ما
          </span>
          <figure className="relative w-6 h-[34px] md:w-[50px] md:h-[60px]">
            <Image
              src="/images/ArrowLeft.png"
              alt="arrow left"
              fill
              objectFit="fit"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
