import ButtonMain from "./ButtonMain";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/16/solid";
import NavLinks from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link"; // اضافه کردن Link برای مدیریت مسیرها

function NavigationComponent() {
  const navItems = [
    { label: "خانه", href: "/" },
    { label: "ثبت نام", href: "/SignUp" },
    { label: "تماس باما", href: "/contactUs" },
    { label: "درباره ما", href: "/aboutUs" },
    { label: "وبلاگ", href: "/blog" },
  ];

  return (
    <section className="w-full bg-primary md:bg-[#fff0] px-3 md:px-6 md:py-3">
      <div className="flex justify-between items-center 2xl:mx-auto 2xl:container">
        {/* logo */}
        <div className="flex items-center gap-3 py-3">
          <div className="rounded-2xl bg-primary p-2 shadow-sm ring-1 ring-slate-200">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white md:text-slate-900">
              نوا
            </h3>
          </div>
        </div>

        {/* menu mobile */}
        <div className="flex md:hidden">
          <MobileMenu currentPage="/" />
        </div>

        {/* navigation */}
        <div className="hidden md:flex">
          <NavLinks
            items={navItems}
            activePage={"/"}
            activeClass="text-primary"
          />
        </div>

        {/* buttons group */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contactUs"
            className="px-5 py-2.5 rounded-2xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300"
          >
            مشاوره با کارشناس
          </Link>

          <ButtonMain txt="دریافت کاتالوگ" />
        </div>
      </div>
    </section>
  );
}

export default NavigationComponent;
