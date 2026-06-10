import Image from "next/image";
import React from "react";

const Banners = () => {
  return (
    <section className="px-4 mt-[60px]">
      <section className="w-full rounded-3xl bg-[#3f8cff1c] p-6 flex flex-col gap-3 lg:flex-row  lg:justify-between lg:items-center">
        {/* Main banner */}
        <section className="w-full lg:w-[58%]">
          <div className="bg-primary rounded-3xl px-6 py-6 flex items-center gap-6 md:px-12 md:py-9 lg:h-[340px] h-full">
            {/* Product image */}
            <div className="shrink-0 min-w-[150px] w-[150px] h-[100px] md:min-w-[280px] md:w-[280px] md:h-[240px]">
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
            <div className="flex flex-col items-start gap-3 lg:gap-5 md:w-[361px] lg:w-full">
              <span className="font-vazir text-xs md:text-lg lg:text-sm font-bold text-white">
                لورم ایپسوم متن ساختگی تولید
              </span>

              <p className="font-vazir text-[8px] md:text-sm lg:text-sm text-[#E3E3E3] leading-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>

              <button className="cursor-pointer bg-primary border border-white px-3 py-1.5 rounded-lg text-white font-vazir text-sm font-bold">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </section>

        {/* Side banners */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-3 lg:w-[40%] lg:h-[340px]">
          {/* Banner 2 */}
          <section className="flex-1 md:w-1/2 lg:w-full">
            <div className="bg-primary rounded-3xl px-6 py-6 flex items-center gap-4 h-full">
              {/* Product image */}
              <div className="shrink-0 min-w-[120px] w-[120px] h-[90px] lg:min-w-[150px] lg:w-[150px] lg:h-[100px]">
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
              <div className="flex flex-col gap-2">
                <span className="font-vazir text-xs lg:text-sm font-bold text-white">
                  لورم ایپسوم متن ساختگی تولید
                </span>

                <p className="font-vazir text-[8px] lg:text-xs text-[#E3E3E3] leading-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و
                </p>

                <div>
                  <button className="cursor-pointer bg-primary border border-white px-3 py-1 rounded-lg text-white font-vazir text-xs font-bold">
                    بیشتر بدانید
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Banner 3 */}
          <section className="flex-1 md:w-1/2 lg:w-full">
            <div className="bg-primary rounded-3xl px-6 py-6 flex items-center gap-4 h-full">
              {/* Product image */}
              <div className="shrink-0 min-w-[120px] w-[120px] h-[90px] lg:min-w-[150px] lg:w-[150px] lg:h-[100px]">
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
              <div className="flex flex-col gap-2">
                <span className="font-vazir text-xs lg:text-sm font-bold text-white">
                  لورم ایپسوم متن ساختگی تولید
                </span>

                <p className="font-vazir text-[8px] lg:text-xs text-[#E3E3E3] leading-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و
                </p>

                <div>
                  <button className="cursor-pointer bg-primary border border-white px-3 py-1 rounded-lg text-white font-vazir text-xs font-bold">
                    بیشتر بدانید
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Banners;
