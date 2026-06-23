import Image from "next/image";
import React from "react";
import { FaPills } from "react-icons/fa";
import { CarouselOurServices } from "./CarouselOurServices";

const OurServices = () => {
  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden py-10 2xl:container 2xl:mx-auto">
      {/* doctor image */}
      <div className="absolute -left-[5%] xl:-left-[4%] bottom-0 hidden lg:flex z-0 pointer-events-none">
        <figure className="relative lg:w-[299px] lg:h-[399px]">
          <Image
            src="/images/doctor.png"
            alt="doctor"
            fill
            className="object-contain"
          />
        </figure>
      </div>

      {/* title */}
      <h2 className="text-[28px] md:text-[32px] font-black text-center">
        خدمات ما
      </h2>

      {/* mobile carousel */}
      <div className="w-full overflow-hidden flex md:hidden mt-6">
        <CarouselOurServices />
      </div>

      {/* cards */}
      <section className="flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:w-[637px] xl:w-[950px] mt-6 hidden md:flex">
        {/* card */}
        <article className="bg-primary px-6 py-5 w-[70%] md:w-[248px] rounded-3xl flex flex-col gap-3 xl:w-[354px] xl:h-[192px] transition hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-3xl text-white" />
          </div>

          <span className="font-bold text-sm text-white leading-6">
            لورم ایپسوم متن ساختگی با
          </span>

          <p className="text-[#E3E3E3] font-normal text-xs leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </article>

        {/* card */}
        <article className="bg-primary px-6 py-5 w-[70%] md:h-[192px] md:w-[367px] rounded-3xl flex flex-col gap-3 xl:w-[580px] transition hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-3xl text-white" />
          </div>

          <span className="font-bold text-sm text-white leading-6">
            لورم ایپسوم متن ساختگی با
          </span>

          <p className="text-[#E3E3E3] font-normal text-xs leading-6 xl:w-[280px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </article>

        {/* card */}
        <article className="bg-primary px-6 py-5 w-[70%] md:h-[192px] md:w-[367px] rounded-3xl flex flex-col gap-3 xl:w-[580px] transition hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-3xl text-white" />
          </div>

          <span className="font-bold text-sm text-white leading-6">
            لورم ایپسوم متن ساختگی با
          </span>

          <p className="text-[#E3E3E3] font-normal text-xs leading-6 xl:w-[280px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </article>

        {/* card */}
        <article className="bg-primary px-6 py-5 w-[70%] md:w-[248px] rounded-3xl flex flex-col gap-3 xl:w-[354px] xl:h-[192px] transition hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-[21px] bg-white rounded-full"></div>
            <FaPills className="text-3xl text-white" />
          </div>

          <span className="font-bold text-sm text-white leading-6">
            لورم ایپسوم متن ساختگی با
          </span>

          <p className="text-[#E3E3E3] font-normal text-xs leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </article>
      </section>

      {/* contact bar */}
      <div className="w-[90%] md:w-[637px] xl:w-[948px] border-[3px] border-primary px-[21px] py-[10px] rounded-full flex justify-between items-center mt-8 relative z-10">
        <span className="text-[10px] md:text-sm text-primary font-bold">
          شماره تماس :
          <span dir="ltr" className="text-[#353535] mr-1">
            ۰۷۱‑۳۲XXXXXX
          </span>
        </span>

        <div className="flex items-center gap-2">
          <span className="text-[#353535] text-[10px] md:text-sm font-bold">
            شروع گفتگو و ارتباط با ما
          </span>

          <figure className="relative w-6 h-[34px] md:w-[50px] md:h-[60px]">
            <Image
              src="/images/ArrowLeft.png"
              alt="arrow"
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
