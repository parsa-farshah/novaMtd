import ButtonMain from "./ButtonMain";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/16/solid";
import NavLinks from "./NavLinks";

function NavigationComponent() {
  const navItems = [
    { label: "لورم", href: "/page1" }, // فرض کنید صفحات شما این آدرس‌ها را دارند
    { label: "لورم", href: "/page2" },
    { label: "درباره ما", href: "/aboutUs" },
    { label: "ثبت نام", href: "/SignUp" },
  ];

  return (
    <section className="w-full bg-primary md:bg-[#fff0] px-3 md:px-6 md:py-3">
      <div className="flex justify-between items-center 2xl:mx-auto 2xl:container">
        {/* logo */}
        <figure>
          <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </figure>
        {/* menu moblie */}
        <button className="p-2 border border-white cursor-pointer md:hidden">
          <Bars3Icon width={22} height={22} className="text-white" />
        </button>
        {/* navigation */}
        {/* navigation */}
        <NavLinks
          items={navItems}
          activePage={"./"}
          // استایل‌های پیش‌فرض کامپوننت NavLinks را اینجا بازنویسی می‌کنید
          // اگر استایل‌های پیش‌فرض مناسب هستند، نیازی به اینها نیست
          // className="hidden md:flex" // این کلاس را خود کامپوننت NavLinks دارد
          // activeClass="text-primary" // اگر بخواهید تغییر دهید
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
