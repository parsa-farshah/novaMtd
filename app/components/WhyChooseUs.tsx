import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    // افزایش padding از px-3 به px-6 یا px-8 برای ایجاد فاصله از لبه‌های صفحه
    <section className="w-full px-3 md:px-6 2xl:container 2xl:mx-auto flex flex-col justify-center h-fit items-start lg:flex-row lg:items-center lg:gap-12">
      {/* بخش عنوان */}
      <div className="w-full lg:w-[150px] flex items-center h-fit mb-6 lg:mb-0 justify-center">
        <span className="text-2xl font-bold lg:text-[28px] text-center">
          مزایای همکاری با نوا
        </span>
      </div>

      {/* بخش کارت‌ها */}
      <section className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
        {/* کارت ۱ */}
        <div className="w-full md:flex-1 bg-primary rounded-3xl px-4 py-6 flex items-center gap-4">
          <FaCheckSquare className="text-white text-5xl md:text-5xl shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white lg:text-sm">
              لورم ایپسوم متن ساختگی
            </span>
            <p className="text-[10px] text-[#E3E3E3] leading-5 lg:text-xs">
              لورم ایپسوم متن ساختگی با تولید محتوای ساده برای تست.
            </p>
          </div>
        </div>

        {/* کارت ۲ */}
        <div className="w-full md:flex-1 bg-primary rounded-3xl px-4 py-6 flex items-center gap-4">
          <FaCheckSquare className="text-white text-5xl md:text-5xl shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white lg:text-sm">
              لورم ایپسوم متن ساختگی
            </span>
            <p className="text-[10px] text-[#E3E3E3] leading-5 lg:text-xs">
              لورم ایپسوم متن ساختگی با تولید محتوای ساده برای تست.
            </p>
          </div>
        </div>

        {/* کارت ۳ */}
        <div className="w-full md:flex-1 bg-primary rounded-3xl px-4 py-6 flex items-center gap-4">
          <FaCheckSquare className="text-white text-5xl md:text-5xl shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white lg:text-sm">
              لورم ایپسوم متن ساختگی
            </span>
            <p className="text-[10px] text-[#E3E3E3] leading-5 lg:text-xs">
              لورم ایپسوم متن ساختگی با تولید محتوای ساده برای تست.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
