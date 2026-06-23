import Image from "next/image";
import ButtonMain from "./ButtonMain";

const NeuroProducts = () => {
  return (
    <section className="mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-black">محصولات پانسمان تخصصی</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 w-[90%]">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-primary rounded-3xl p-5 text-white flex flex-col gap-4"
          >
            <div className="relative w-full h-[180px]">
              <Image
                src="/images/product1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <span className="font-bold text-sm">پانسمان تخصصی اعصاب</span>

            <p className="text-xs text-[#E3E3E3]">
              مناسب برای مراقبت از زخم‌های عصبی و تسریع بهبود.
            </p>

            <ButtonMain txt="مشاهده محصول" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeuroProducts;
