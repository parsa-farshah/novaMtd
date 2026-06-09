import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";
import HeaderImage from "./HeaderImage";

const Header = () => {
  return (
    <section>
      <section className="w-full bg-primary md:bg-[#fff0] px-3 md:py-3">
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
          <ul className="flex *:px-4 items-center *:text-[#848484] *:font-semibold *:font-vazir hidden md:flex">
            <li>
              <a href="">لورم</a>
            </li>{" "}
            <li>
              <a href="">لورم</a>
            </li>{" "}
            <li>
              <a href="">لورم</a>
            </li>{" "}
            <li>
              <a href="">لورم</a>
            </li>
          </ul>
          {/* button  */}
          <div className="hidden md:flex">
            <ButtonMain txt="دریافت کاتالوگ" />
          </div>
        </div>
      </section>
      <HeaderImage />
    </section>
  );
};

export default Header;
