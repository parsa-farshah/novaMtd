import Image from "next/image";
import ButtonMain from "./ButtonMain";

const NeuroHero = () => {
  return (
    <section className="w-full relative h-[420px] flex items-center 2xl:container 2xl:mx-auto px-3 md:px-6">
      <Image
        src="/images/herobg.png"
        alt="پانسمان تخصصی اعصاب"
        fill
        className="object-cover "
      />

      <div className="relative z-10 px-6 max-w-[500px] flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-black">
          پانسمان‌های تخصصی اعصاب
        </h1>

        <p className="text-sm leading-7 text-[#353535]">
          راهکاری پیشرفته برای مراقبت از آسیب‌های عصبی و تسریع روند ترمیم
          بافت‌های حساس با استفاده از تکنولوژی‌های نوین پزشکی.
        </p>

        <div>
          <ButtonMain txt="مشاهده محصولات" />
        </div>
      </div>
    </section>
  );
};

export default NeuroHero;
