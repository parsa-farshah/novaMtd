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

              <h3
                className={`text-lg font-bold transition-all duration-300 ${
                  isScrolled ? "text-white" : "text-white md:text-slate-900"
                }`}
              >
                نوا
              </h3>
            </div>

            {/* mobile */}
            <div className="flex md:hidden">
              <MobileMenu currentPage="/" />
            </div>

            {/* nav */}
            <div className="hidden md:flex">
              <NavLinks
                items={navItems}
                activePage="/"
                activeClass={isScrolled ? "text-gray-300" : "text-primary"}
                inactiveClass={isScrolled ? "text-white" : "text-[#848484]"}
                hoverClass={
                  isScrolled
                    ? "hover:text-white/80 duration-300"
                    : "hover:text-primary duration-300"
                }
              />
            </div>

            {/* buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contactUs"
                className={`px-5 py-2.5 rounded-2xl border-2 font-bold text-sm transition-all duration-300
                ${
                  isScrolled
                    ? "border-white text-white hover:bg-white hover:text-primary"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                مشاوره با کارشناس
              </Link>

              <div className={isScrolled ? "button-scrolled-variant" : ""}>
                <ButtonMain txt="دریافت کاتالوگ" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavigationComponent;
