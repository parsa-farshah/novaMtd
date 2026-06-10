import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselProducts() {
  return (
    <Carousel
      className="w-full relative "
      opts={{
        direction: "rtl",
      }}
    >
      <CarouselContent className="w-full mx-auto p-0 m-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full shrink-0  flex justify-center"
          >
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
                <span className="font-vazir font-bold text-white">
                  لورم ایپسوم متن ساختگی
                </span>
              </div>

              {/* description */}
              <p className="font-vazir text-xs text-[#E3E3E3] leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="!left-2 !right-auto z-50 bg-white rotate-180 border-0" />

      <CarouselPrevious className="!right-2 !left-auto z-50 bg-white -rotate-180 border-0" />
    </Carousel>
  );
}
