import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaPills } from "react-icons/fa";

export function CarouselOurServices() {
  return (
    <Carousel
      className="w-full"
      opts={{
        direction: "rtl",
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[65%] shrink-0 py-5">
            <section className="bg-primary px-6 py-4 w-[100%] rounded-3xl flex flex-col gap-[14px] shadow-sm shadow-black">
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
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="!left-7 !right-auto z-50 bg-white rotate-180 border border-black" />

      <CarouselPrevious className="!right-7 !left-auto z-50 bg-white -rotate-180 border border-black" />
    </Carousel>
  );
}
