import Image from "next/image";
import ButtonMain from "./ButtonMain";
import Link from "next/link";

const NeuroProducts = () => {
  return (
    <section className="mt-16 flex flex-col items-center px-3 md:px-6">
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

            <Link href="./productDetailPage" className="block w-full">
              <div className="w-full rounded-2xl bg-blue-600 border border-blue-500 border-t-white/30 px-4 py-3 text-center font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:border-blue-400 hover:shadow-lg active:scale-[0.98]">
                مشاهده محصول
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeuroProducts;
