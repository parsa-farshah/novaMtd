"use client";

import ButtonMain from "./ButtonMain";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavigationComponent() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { label: "خانه", href: "/" },
    { label: "ثبت نام", href: "/SignUp" },
    { label: "تماس باما", href: "/contactUs" },
    { label: "درباره ما", href: "/aboutUs" },
    { label: "وبلاگ", href: "/blog" },
    { label: "پانسمان های تخصصی", href: "/neuro-bandages" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 w-full z-40 h-fit
        transition-all duration-300 ease-in-out bg-primary
        ${
          isScrolled
            ? "bg-primary shadow-lg py-2 top-0"
            : `py-4 bg-primary md:bg-transparent ${isHome ? "md:top-[46px] md:bg-transparent" : "top-0 "}`
        }`}
      >
        <div className="px-3 md:px-6">
          <div className="flex justify-between items-center 2xl:mx-auto 2xl:container">
            {/* logo */}
            <div className="flex items-center gap-3">
              <div
                className={`rounded-2xl p-2 shadow-sm ring-1 transition-all duration-300
                ${
                  isScrolled
                    ? "bg-primary ring-white/20"
                    : "bg-primary ring-slate-200/30"
                }`}
              >
                <Image
                  src="/images/logo2.png"
                  alt="Logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>

              <h1
                className={`text-lg md:text-xs lg:text-sm xl:text-lg font-bold transition-all duration-300 ${
                  isScrolled ? "text-white" : "text-white md:text-slate-900"
                }`}
              >
                نوا
              </h1>
            </div>

            {/* mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/contactUs"
                className="px-6 py-3 rounded-xl border border-white/80 text-white text-[10px] font-bold whitespace-nowrap transition-all hover:bg-white hover:text-primary"
              >
                تماس
              </Link>
              <MobileMenu currentPage="/" />
            </div>

            {/* nav - تغییرات در اینجا برای کنترل فضا */}
            <div className="hidden md:flex xl:gap-2">
              <NavLinks
                items={navItems}
                activePage="/"
                className="!px-0 lg:px-2"
                // استفاده از سایز فونت کوچکتر برای صفحات md و lg
                activeClass={
                  isScrolled
                    ? "text-gray-300 text-[12px] lg:text-[14px]"
                    : "text-primary text-[12px] lg:text-[14px]"
                }
                inactiveClass={
                  isScrolled
                    ? "text-white text-[12px] lg:text-[14px]"
                    : "text-[#848484] text-[12px] lg:text-[14px]"
                }
                hoverClass={
                  isScrolled
                    ? "hover:text-white/80 duration-300"
                    : "hover:text-primary duration-300"
                }
              />
            </div>

            {/* buttons - تغییر پدینگ و سایز فونت */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <Link
                href="/contactUs"
                // کاهش پدینگ و سایز فونت برای حالت md
                className={`px-2 lg:px-4 py-2 rounded-2xl border-2 font-bold text-[10px] lg:text-[12px] whitespace-nowrap transition-all duration-300
    ${
      isScrolled
        ? "border-white text-white hover:bg-white hover:text-primary"
        : "border-primary text-primary hover:bg-primary hover:text-white"
    }`}
              >
                مشاوره با کارشناس
              </Link>

              <Link
                href="/catalog"
                className={`inline-flex items-center justify-center px-3 lg:px-4 py-2 rounded-2xl border-2 font-bold text-[10px] lg:text-[12px] whitespace-nowrap transition-all duration-300
  ${
    isScrolled
      ? "border-white text-white hover:bg-white hover:text-primary"
      : "border-primary text-primary hover:bg-primary hover:text-white"
  }`}
              >
                دریافت کاتالوگ
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavigationComponent;
