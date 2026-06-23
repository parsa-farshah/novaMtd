import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-20 md:mt-32 bg-gradient-to-t from-slate-50 to-white border-t border-slate-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
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
                <p className="text-xs text-slate-500">تجهیزات پزشکی و سلامت</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600 text-justify">
              ارائه‌دهنده‌ی انواع تجهیزات پزشکی با کیفیت، استاندارد و مناسب
              مراکز درمانی، کلینیک‌ها و کاربران حرفه‌ای.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-bold text-slate-900">دسترسی سریع</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-600 transition-colors"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-bold text-slate-900">دسته‌بندی‌ها</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  مانیتورینگ علائم حیاتی
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  تجهیزات تشخیصی
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  تجهیزات اتاق عمل
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  ملزومات و اقلام مصرفی
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-bold text-slate-900">تماس با ما</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <p>📍 شیراز، استان فارس، ...</p>
              <p>📞 ۰۷۱-۳۲XXXXXX</p>
              <p>✉️ info@yourmedicalbrand.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-slate-200 bg-white/70">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-6">
            مجوزها و تاییدیه‌ها
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            {/* دانش‌بنیان */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center p-3">
                <Image
                  src="/images/knowledge-based.png"
                  alt="شرکت دانش‌بنیان"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-slate-500">شرکت دانش‌بنیان</span>
            </div>

            {/* علوم پزشکی فسا */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center p-3">
                <Image
                  src="/images/fasa-university.png"
                  alt="دانشکده علوم پزشکی فسا"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-slate-500">
                دانشکده علوم پزشکی فسا
              </span>
            </div>

            {/* eNamad */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center p-3">
                <Image
                  src="/images/e-namad.jfif"
                  alt="ای نماد"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-slate-500">نماد اعتماد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© تمامی حقوق این وب‌سایت محفوظ است. ۱۴۰۳</p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-600 transition-colors"
            >
              قوانین و مقررات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
