import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaPills } from "react-icons/fa";

export function CarouselProducts() {
  return (
    <Carousel
      className="w-full"
      opts={{
        direction: "rtl",
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="!m-0 !p-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="!p-0 !px-[5%] basis-auto">
            <div className="w-[220px] p-3 bg-[#3F8BFF] border border-[#096bff] rounded-3xl shadow-xs">
              {/* image */}
              <div className="w-full h-[200px] rounded-3xl bg-white">
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
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselNext className="!left-4 !right-auto z-50 bg-white rotate-180 border border-black" />
      <CarouselPrevious className="!right-4 !left-auto z-50 bg-white -rotate-180 border border-black" /> */}
    </Carousel>
  );
}
