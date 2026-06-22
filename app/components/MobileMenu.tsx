"use client";
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
import { Bars3Icon } from "@heroicons/react/24/outline"; // فرض می‌کنیم این آیکون را دارید
import React, { useState } from "react"; // برای مدیریت وضعیت باز و بسته شدن

// فرض می‌کنیم این نوع داده برای آیتم‌های ناوبری باشد
interface NavItem {
  label: string;
  href: string;
  // می‌توانید ویژگی‌های بیشتری مانند آیکون یا وضعیت فعال را اضافه کنید
}

// صفحات شما
const pages: NavItem[] = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/aboutUs" },
  { label: "ثبت نام", href: "/SignUp" },
  { label: "محصولات ما", href: "/products" },
  { label: "صفحات ما", href: "/pages" },
];

interface MobileMenuProps {
  currentPage: string; // prop برای تعیین صفحه فعلی
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false); // مدیریت وضعیت Drawer

  return (
    // کانتینر برای آیکون و Drawer
    <div className="relative">
      {/* آیکون برای باز کردن Drawer */}
      <div
        className="p-3 border border-white lg:hidden group hover:bg-primary duration-500 cursor-pointer"
        onClick={() => setIsOpen(true)} // با کلیک، Drawer را باز می‌کنیم
      >
        <Bars3Icon
          width={25}
          height={25}
          className="text-white group-hover:text-black duration-500"
        />
      </div>

      {/* Drawer که فقط سمت راست باز می‌شود */}
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild style={{ display: "none" }}>
          {/* DrawerTrigger را مخفی می‌کنیم چون با کلیک روی آیکون کنترل می‌شود */}
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-64 p-4 bg-white !rounded-none !border-0">
          {" "}
          {/* تنظیمات برای ارتفاع کامل و عرض */}
          <DrawerHeader>
            <DrawerTitle>منوی ناوبری</DrawerTitle>
            <DrawerDescription>
              دسترسی سریع به بخش‌های مختلف سایت.
            </DrawerDescription>
          </DrawerHeader>
          {/* ناوبری داخلی */}
          <nav className="flex-grow overflow-y-auto">
            {" "}
            {/* برای اسکرول در صورت نیاز */}
            <ul className="flex flex-col items-start **:text-black *:text-lg *:font-bold *:py-3 *:duration-500">
              {" "}
              {/* تنظیمات برای لیست عمودی */}
              {pages.map((page) => (
                <li key={page.href} className="w-full">
                  <a
                    href={page.href}
                    className={`block px-[15px] w-full
                      ${
                        currentPage === page.href
                          ? "!text-primary" // رنگ برای صفحه فعال
                          : "text-white hover:text-primary" // رنگ عادی و هاور
                      }`}
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DrawerFooter className="mt-auto">
            {" "}
            {/* Footer در پایین Drawer */}
            <DrawerClose asChild>
              <Button variant="outline" className="cursor-pointer">
                بستن
              </Button>
            </DrawerClose>
            {/* می‌توانید دکمه‌های دیگری مانند دکمه Submit یا Actions اینجا اضافه کنید */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

// نحوه استفاده از کامپوننت در صفحه والد:
// فرض کنید در صفحه اصلی هستید و currentPage برابر با '/' است.
// <MobileMenu currentPage="/" />

// اگر در صفحه درباره ما هستید:
// <MobileMenu currentPage="/about" />
