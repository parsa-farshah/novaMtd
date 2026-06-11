import Image from "next/image";
import React from "react";

const Banners = () => {
  return (
    <section className="px-4 mt-[60px]">
      <section className="w-full rounded-3xl bg-[#3f8cff1c] p-6 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-stretch">
        {/* Main banner */}
        <section className="w-full lg:w-[58%]">
          <div className="bg-primary rounded-3xl px-6 py-6 flex items-center gap-6 h-[180px] md:h-[220px] lg:h-[340px]">
            {/* Product image */}
            <div className="shrink-0 w-[110px] h-[80px] md:w-[200px] md:h-[150px] lg:w-[280px] lg:h-[240px]">
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
            <div className="flex flex-col items-start gap-3 lg:gap-5">
              <span className="font-vazir text-xs md:text-sm font-bold text-white">
                لورم ایپسوم متن ساختگی تولید
              </span>

              <p className="font-vazir text-[10px] md:text-sm text-[#E3E3E3] leading-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>

              <button className="bg-primary border border-white px-3 py-1.5 rounded-lg text-white font-vazir text-xs font-bold">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </section>

        {/* Side banners */}
        <div className="flex flex-col gap-3 lg:w-[40%]">
          {/* Banner 2 */}
          <section className="w-full">
            <div className="bg-primary rounded-3xl px-4 py-4 flex items-center gap-4 h-[180px] md:h-[220px] lg:h-[165px]">
              <div className="shrink-0 w-[90px] h-[70px] md:w-[120px] md:h-[90px]">
                <figure className="relative w-full h-full">
                  <Image
                    src="/images/product.png"
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </figure>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-vazir text-xs font-bold text-white">
                  لورم ایپسوم متن ساختگی
                </span>

                <p className="font-vazir text-[9px] md:text-xs text-[#E3E3E3] leading-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>

                <button className="bg-primary border border-white px-2 py-1 rounded-lg text-white font-vazir text-[10px] font-bold w-fit">
                  بیشتر
                </button>
              </div>
            </div>
          </section>

          {/* Banner 3 */}
          <section className="w-full">
            <div className="bg-primary rounded-3xl px-4 py-4 flex items-center gap-4 h-[180px] md:h-[220px] lg:h-[165px]">
              <div className="shrink-0 w-[90px] h-[70px] md:w-[120px] md:h-[90px]">
                <figure className="relative w-full h-full">
                  <Image
                    src="/images/product.png"
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </figure>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-vazir text-xs font-bold text-white">
                  لورم ایپسوم متن ساختگی
                </span>

                <p className="font-vazir text-[9px] md:text-xs text-[#E3E3E3] leading-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>

                <button className="bg-primary border border-white px-2 py-1 rounded-lg text-white font-vazir text-[10px] font-bold w-fit">
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
