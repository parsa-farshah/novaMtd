"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  label: string;
  href: string;
}

const pages: NavItem[] = [
  { label: "خانه", href: "/" },
  { label: "تماس باما", href: "/contactUs" },
  { label: "درباره ما", href: "/aboutUs" },
  { label: "وبلاگ", href: "/blog" },
];

interface MobileMenuProps {
  currentPage: string;
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Trigger */}
      <div
        className="p-3 lg:hidden group hover:bg-primary duration-500 cursor-pointer rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon
          width={25}
          height={25}
          className="text-white group-hover:text-black duration-500"
        />
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild style={{ display: "none" }}>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>

        <DrawerContent className="h-full w-72 p-0 bg-white !rounded-none !border-0">
          <div className="flex h-full flex-col ">
            {/* Header */}
            <DrawerHeader className="relative border-b border-slate-200 p-5 text-right">
              {/* Close Button */}
              <DrawerClose asChild>
                <button
                  aria-label="بستن منو"
                  className="absolute left-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </DrawerClose>

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
                  <h3 className="text-lg font-bold text-slate-900">نوا</h3>
                </div>
              </div>
            </DrawerHeader>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              {/* Auth Actions */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="mb-3 text-sm font-bold text-slate-900">
                  حساب کاربری
                </h4>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/SignUp"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    <UserPlusIcon className="h-5 w-5" />
                    ثبت نام
                  </Link>

                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    ورود
                  </Link>
                </div>
              </div>

              <ul className="space-y-2 mt-6">
                {pages.map((page) => {
                  const active = currentPage === page.href;

                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                          active
                            ? "bg-blue-50 text-primary"
                            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                        }`}
                      >
                        {page.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Social Icons */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="mb-3 text-sm font-bold text-slate-900">
                  شبکه‌های اجتماعی
                </h4>

                <div className="flex items-center gap-3">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-pink-200 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </Link>

                  <Link
                    href="https://telegram.org"
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-sky-200 hover:bg-sky-50 hover:text-sky-500"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </nav>

            {/* Footer */}
            {/* <DrawerFooter className="border-t border-slate-200 p-4">
              <DrawerClose asChild>
                <Button variant="outline" className="w-full cursor-pointer">
                  بستن
                </Button>
              </DrawerClose>
            </DrawerFooter> */}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
