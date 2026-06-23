import {
  FaShieldAlt,
  FaHeartbeat,
  FaUserMd,
  FaCheckCircle,
} from "react-icons/fa";

const NeuroBenefits = () => {
  return (
    <section className="mt-12 px-3 md:px-6">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-primary rounded-3xl p-6 text-white flex flex-col gap-3 shadow-md">
          <FaShieldAlt className="text-3xl" />
          <span className="font-bold">محافظت از اعصاب</span>
          <p className="text-xs text-white/80">
            جلوگیری از آسیب بیشتر به بافت‌های عصبی.
          </p>
        </div>

        <div className="bg-primary rounded-3xl p-6 text-white flex flex-col gap-3 shadow-md">
          <FaHeartbeat className="text-3xl" />
          <span className="font-bold">تسریع ترمیم</span>
          <p className="text-xs text-white/80">
            کمک به بهبود سریع‌تر زخم‌های عصبی.
          </p>
        </div>

        <div className="bg-primary rounded-3xl p-6 text-white flex flex-col gap-3 shadow-md">
          <FaUserMd className="text-3xl" />
          <span className="font-bold">توصیه پزشکان</span>
          <p className="text-xs text-white/80">
            مناسب برای استفاده در درمان‌های تخصصی.
          </p>
        </div>

        <div className="bg-primary rounded-3xl p-6 text-white flex flex-col gap-3 shadow-md">
          <FaCheckCircle className="text-3xl" />
          <span className="font-bold">مورد اعتماد</span>
          <p className="text-xs text-white/80">
            انتخابی مطمئن با کیفیت و اثربخشی بالا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeuroBenefits;
