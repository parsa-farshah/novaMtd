import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import { FaTelegram } from "react-icons/fa";
import {
  RiInstagramLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Top = () => {
  return (
    <section className="w-full bg-primary px-6 hidden md:flex">
      <div className="w-full 2xl:mx-auto 2xl:container flex items-center justify-between">
        {/* email and phone */}
        <section className="flex items-center gap-[26px]">
          {/* phone number */}
          <div className="flex items-center gap-2 py-2.5 ">
            <PhoneIcon width={20} height={20} className="text-white" />
            <span className="text-white  font-bold text-xs">09372440469</span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2 py-2.5 ">
            <EnvelopeIcon width={20} height={20} className="text-white" />
            <span className="text-white  font-bold text-xs">
              ParsaFarashah@gmail.com
            </span>
          </div>
        </section>
        {/* socials */}
        <ul className="flex gap-1 items-center">
          <li>
            <a href="">
              <RiWhatsappLine className="text-white text-[32px]" />
            </a>
          </li>
          <li>
            <a href="">
              <RiInstagramLine className="text-white text-[32px]" />
            </a>
          </li>
          <li>
            <a href="">
              <RiTelegramLine className="text-white text-[32px]" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Top;
