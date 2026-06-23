import Image from "next/image";
import React from "react";

const Banners = () => {
  return (
    <section className="px-4">
      <section className="w-full rounded-3xl bg-[#3f8cff1c] p-6 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-stretch">
        {/* Main banner */}
        <section className="w-full lg:w-[58%]">
          {/* تغییر اصلی: حذف flex-col و جایگزینی با flex-row در تمام سایزها */}
          <div className="bg-primary rounded-3xl px-4 py-4 md:px-6 md:py-6 flex flex-row items-center gap-4 md:gap-6 h-auto lg:h-[340px]">
            {/* Product image */}
            {/* تنظیم سایز تصویر برای اینکه در موبایل خیلی بزرگ نباشد و با بقیه همخوانی داشته باشد */}
            <div className="shrink-0 w-[80px] h-[70px] sm:w-[120px] sm:h-[90px] md:w-[180px] md:h-[130px] lg:w-[280px] lg:h-[240px]">
              <figure className="relative w-full h-full">
                <Image
                  src="/images/product.png"
                  alt="product"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>

            {/* Content */}
            {/* تغییر اصلی: حذف items-center و text-center برای حفظ حالت ردیفی در موبایل */}
            <div className="flex flex-col items-start text-right gap-2 md:gap-5 min-w-0 flex-grow">
              <span className="text-[11px] sm:text-sm md:text-base font-bold text-white">
                لورم ایپسوم متن ساختگی تولید
              </span>

              <p className="text-[10px] sm:text-xs md:text-sm text-[#E3E3E3] leading-4 md:leading-5 line-clamp-2 md:line-clamp-none">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>

              <button className="bg-primary border border-white px-3 py-1 rounded-lg text-white text-[10px] md:text-xs font-bold mt-1">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </section>

        {/* Side banners */}
        <div className="flex flex-col gap-3 lg:w-[40%]">
          {/* Banner 2 */}
          <section className="w-full">
            <div className="bg-primary rounded-3xl px-4 py-4 flex items-center gap-4 h-[140px] md:h-[220px] lg:h-[165px]">
              <div className="shrink-0 w-[80px] h-[70px] md:w-[180px] md:h-[140px] lg:w-[120px] lg:h-[90px]">
                <figure className="relative w-full h-full">
                  <Image
                    src="/images/product.png"
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </figure>
              </div>

              <div className="flex flex-col gap-1 md:gap-2 min-w-0">
                <span className="text-[11px] md:text-sm lg:text-xs font-bold text-white">
                  لورم ایپسوم متن ساختگی
                </span>
                <p className="text-[9px] md:text-sm lg:text-xs text-[#E3E3E3] leading-tight md:leading-6 lg:leading-4 line-clamp-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
                <button className="bg-primary border border-white px-2 py-1 rounded-lg text-white text-[10px] md:text-xs font-bold w-fit mt-1">
                  بیشتر
                </button>
              </div>
            </div>
          </section>

          {/* Banner 3 */}
          <section className="w-full">
            <div className="bg-primary rounded-3xl px-4 py-4 flex items-center gap-4 h-[140px] md:h-[220px] lg:h-[165px]">
              <div className="shrink-0 w-[80px] h-[70px] md:w-[180px] md:h-[140px] lg:w-[120px] lg:h-[90px]">
                <figure className="relative w-full h-full">
                  <Image
                    src="/images/product.png"
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </figure>
              </div>

              <div className="flex flex-col gap-1 md:gap-2 min-w-0">
                <span className="text-[11px] md:text-sm lg:text-xs font-bold text-white">
                  لورم ایپسوم متن ساختگی
                </span>
                <p className="text-[9px] md:text-sm lg:text-xs text-[#E3E3E3] leading-tight md:leading-6 lg:leading-4 line-clamp-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
                <button className="bg-primary border border-white px-2 py-1 rounded-lg text-white text-[10px] md:text-xs font-bold w-fit mt-1">
                  بیشتر
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Banners;
