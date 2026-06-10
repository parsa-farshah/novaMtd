import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-primary px-3 py-8 mt-20 md:mt-32">
      {/* footer */}
      <div className="py-3 flex flex-col gap-9 md:flex-row md:items-center">
        {/* logo and text */}
        <div className="flex gap-3 md:w-[48%] lg:w-[55%]">
          {/* logo */}
          <figure className="shrink-0">
            <Image src="/images/logo.png" alt="logo" width={70} height={70} />
          </figure>
          <p className="font-vazir text-[10px] font-normal leading-5 text-white md:text-sm  leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، ستفاده قرار گیرد.
          </p>
        </div>
        {/* links */}
        <div className="flex justify-around text-white md:gap-8 md:w-[51%] lg:w-[35%]">
          {/* links 1 */}
          <div className="flex flex-col gap-6">
            <span className="font-vazir font-bold">لورم</span>
            <ul className="*:text-sm *:font-bold *:font-vazir flex flex-col gap-2">
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
            </ul>
          </div>
          {/* links 2 */}
          <div className="flex flex-col gap-6">
            <span className="font-vazir font-bold">لورم</span>
            <ul className="*:text-sm *:font-bold *:font-vazir flex flex-col gap-2">
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
            </ul>
          </div>{" "}
          {/* links 3 */}
          <div className="flex flex-col gap-6">
            <span className="font-vazir font-bold">لورم</span>
            <ul className="*:text-sm *:font-bold *:font-vazir flex flex-col gap-2">
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
              <li>
                <a href="">لورم ایپسوم</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
