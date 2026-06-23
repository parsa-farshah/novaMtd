import { FaShieldAlt, FaHeartbeat, FaUserMd } from "react-icons/fa";

const NeuroBenefits = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6 mt-12">
      <div className="bg-primary rounded-3xl p-6 w-[260px] text-white flex flex-col gap-3">
        <FaShieldAlt className="text-3xl" />
        <span className="font-bold">محافظت از اعصاب</span>
        <p className="text-xs text-[#E3E3E3]">
          جلوگیری از آسیب بیشتر به بافت‌های عصبی.
        </p>
      </div>

      <div className="bg-primary rounded-3xl p-6 w-[260px] text-white flex flex-col gap-3">
        <FaHeartbeat className="text-3xl" />
        <span className="font-bold">تسریع ترمیم</span>
        <p className="text-xs text-[#E3E3E3]">
          کمک به بهبود سریع‌تر زخم‌های عصبی.
        </p>
      </div>

      <div className="bg-primary rounded-3xl p-6 w-[260px] text-white flex flex-col gap-3">
        <FaUserMd className="text-3xl" />
        <span className="font-bold">توصیه پزشکان</span>
        <p className="text-xs text-[#E3E3E3]">
          مناسب برای استفاده در درمان‌های تخصصی.
        </p>
      </div>
    </section>
  );
};

export default NeuroBenefits;
