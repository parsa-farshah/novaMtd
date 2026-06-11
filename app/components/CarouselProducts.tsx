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
      className="w-full"
      opts={{
        direction: "rtl",
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[55%]">
            <div className="p-2">
              <div className="w-[220px] mx-auto p-3 bg-[#3F8BFF] border border-[#0962EA] rounded-3xl shadow-xs">
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="!left-2 !right-auto z-50 bg-white rotate-180 border border-black" />

      <CarouselPrevious className="!right-2 !left-auto z-50 bg-white -rotate-180 border border-black" />
    </Carousel>
  );
}
