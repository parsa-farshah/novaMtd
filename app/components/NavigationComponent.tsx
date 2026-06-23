import ButtonMain from "./ButtonMain";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/16/solid";
import NavLinks from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

function NavigationComponent() {
  const navItems = [
    { label: "خانه", href: "/" }, // فرض کنید صفحات شما این آدرس‌ها را دارند
    { label: "ثبت نام", href: "/SignUp" },
    { label: "تماس باما", href: "/contactUs" },
    { label: "درباره ما", href: "/aboutUs" },
    { label: "وبلاگ", href: "/blog" }, // فرض کنید صفحات شما این آدرس‌ها را دارند
  ];

  return (
    <section className="w-full bg-primary md:bg-[#fff0] px-3 md:px-6 md:py-3">
      <div className="flex justify-between items-center 2xl:mx-auto 2xl:container">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary p-2 shadow-sm ring-1 ring-slate-200">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">نوا</h3>
          </div>
        </div>
        {/* menu moblie */}
        <div className="flex md:hidden">
          <MobileMenu currentPage="/" />
        </div>
        {/* navigation */}
        <NavLinks
          items={navItems}
          activePage={"/"}
          // استایل‌های پیش‌فرض کامپوننت NavLinks را اینجا بازنویسی می‌کنید
          // اگر استایل‌های پیش‌فرض مناسب هستند، نیازی به اینها نیست
          // className="hidden md:flex" // این کلاس را خود کامپوننت NavLinks دارد
          activeClass="text-primary" // اگر بخواهید تغییر دهید
          // inactiveClass="text-[#848484]"
          // hoverClass="hover:text-primary hover:duration-500"
        />
        {/* button  */}
        <div className="hidden md:flex">
          <ButtonMain txt="دریافت کاتالوگ" />
        </div>
      </div>
    </section>
  );
}

export default NavigationComponent;
