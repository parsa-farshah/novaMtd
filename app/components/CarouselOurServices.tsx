import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
      <CarouselContent className="px-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[70%] shrink-0 py-6">
            <article className="bg-primary px-6 py-5 w-full rounded-3xl flex flex-col gap-3 shadow-md shadow-black/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-[20px] bg-white rounded-full"></div>
                <FaPills className="text-3xl text-white" />
              </div>

              <span className="font-bold text-sm text-white leading-6">
                لورم ایپسوم متن ساختگی با
              </span>

              <p className="text-[#E3E3E3] text-xs leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
              </p>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
