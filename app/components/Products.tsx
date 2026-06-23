import React from "react";
import { CarouselProducts } from "./CarouselProducts";
import Image from "next/image";

const Products = () => {
  return (
    <section className="w-full flex justify-center relative 2xl:container 2xl:mx-auto h-fit px-3 md:px-6">
      <section className="bg-primary pb-40 md:pb-0 rounded-2xl  py-8 flex flex-col items-center w-full gap-10">
        {/* top text */}
        <div className="md:flex md:items-start md:px-[42px] md:pt-6 w-full md:w-[712px] md:h-[273px] lg:w-full px-6">
          {/* right text*/}
          <div className="w-full ">
            <span className=" text-xl lg:text-[32px] font-bold text-white">
              محصولات
            </span>

            <p className=" text-sm font-bold lg:text-xl text-[#E3E3E3] mt-[25px] w-[95%]">
              لورم ایپسوم متن ساختگی با تولیدلورم ایپسوم متن ساختگی با تولید
              لورم ایپسوم متن ساختگی
            </p>
          </div>

          {/* line*/}
          <div className="my-4 md:my-0 md:mx-8 self-start">
            {/* mobile */}
            <div className="w-[200px] h-[1px] bg-white md:hidden" />

            {/* desktop */}
            <div className="hidden md:block w-[1px] h-[120px] lg:h-[140px] bg-white" />
          </div>

          {/* text left*/}
          <div className="md:w-[317px] lg:w-[50%]">
            <p className=" text-xs font-medium text-[#E3E3E3] lg:text-[16px] lg:font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و گرافیک
              است. چاپگرها و متون بلکه روزنام لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و گرافیک است. چاپگرها و متون بلکه روزنام
            </p>
          </div>
        </div>
        {/* products */}
        <div className="w-full overflow-hidden flex md:hidden absolute top-[65%]">
          <CarouselProducts />
        </div>
        {/* ----------------------- products tablet and desktop ----------------------*/}
        <section className="absolute md:top-[60%]  lg:bottom-[-70%] hidden md:flex md:flex-col md:gap-9 lg:flex-row lg:gap-5">
          {/* top */}
          <section className="flex gap-9 lg:gap-5">
            {/* card1 */}
            <section>
              <div className="w-[233px] p-3 bg-[#3F8BFF] border border-[#0962EA] rounded-3xl mx-auto shadow-xs">
                {/* image */}
                <div className="w-[209px] h-[200px] rounded-3xl bg-white">
                  <figure className="relative w-full h-full">
                    <Image
                      src="/images/product.png"
                      alt="products"
                      fill
                      className="object-contain"
                    />
                  </figure>
                </div>

                {/* title */}
                <div className="py-4">
                  <span className=" font-bold text-white">
                    لورم ایپسوم متن ساختگی
                  </span>
                </div>

                {/* description */}
                <p className=" text-xs text-[#E3E3E3] leading-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </section>
            {/* card2 */}
            <section>
              <div className="w-[233px] p-3 bg-[#3F8BFF] border border-[#0962EA] rounded-3xl mx-auto shadow-xs">
                {/* image */}
                <div className="w-[209px] h-[200px] rounded-3xl bg-white">
                  <figure className="relative w-full h-full">
                    <Image
                      src="/images/product.png"
                      alt="products"
                      fill
                      className="object-contain"
                    />
                  </figure>
                </div>

                {/* title */}
                <div className="py-4">
                  <span className=" font-bold text-white">
                    لورم ایپسوم متن ساختگی
                  </span>
                </div>

                {/* description */}
                <p className=" text-xs text-[#E3E3E3] leading-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </section>
          </section>
          {/* bottom */}
          <section className="flex gap-9 lg:gap-5">
            {/* card 3 */}
            <section>
              <div className="w-[233px] p-3 bg-[#3F8BFF] border border-[#0962EA] rounded-3xl mx-auto shadow-xs">
                {/* image */}
                <div className="w-[209px] h-[200px] rounded-3xl bg-white">
                  <figure className="relative w-full h-full">
                    <Image
                      src="/images/product.png"
                      alt="products"
                      fill
                      className="object-contain"
                    />
                  </figure>
                </div>

                {/* title */}
                <div className="py-4">
                  <span className=" font-bold text-white">
                    لورم ایپسوم متن ساختگی
                  </span>
                </div>

                {/* description */}
                <p className=" text-xs text-[#E3E3E3] leading-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </section>
            {/* card 4 */}
            <section>
              <div className="w-[233px] p-3 bg-[#3F8BFF] border border-[#0962EA] rounded-3xl mx-auto shadow-xs">
                {/* image */}
                <div className="w-[209px] h-[200px] rounded-3xl bg-white">
                  <figure className="relative w-full h-full">
                    <Image
                      src="/images/product.png"
                      alt="products"
                      fill
                      className="object-contain"
                    />
                  </figure>
                </div>

                {/* title */}
                <div className="py-4">
                  <span className=" font-bold text-white">
                    لورم ایپسوم متن ساختگی
                  </span>
                </div>

                {/* description */}
                <p className=" text-xs text-[#E3E3E3] leading-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
