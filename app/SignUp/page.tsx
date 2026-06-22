"use client";

import React, { useState } from "react";
// فرض می‌کنیم این دو کامپوننت در مسیر ../components/ قرار دارند
import { FormLogIn } from "../components/FormLogIn";
import { FormSignUp } from "../components/FormSignUp";
// ایمپورت کردن کتابخانه انیمیشن
import { motion, AnimatePresence } from "framer-motion";
// ایمپورت کردن Image از next/image (اگر لازم است)
import Image from "next/image";
import Link from "next/link";

function Page() {
  // این State تعیین می‌کند کدام فرم نمایش داده شود: true برای ثبت‌نام، false برای ورود
  const [isSignUp, setIsSignUp] = useState(false);

  // تابع برای سوییچ به فرم ورود
  const handleSwitchToLogin = () => {
    setIsSignUp(!isSignUp);
  };

  // تعریف انیمیشن‌ها برای ورود و خروج فرم‌ها
  const formVariants = {
    initial: (direction: number) => ({
      // direction: 1 برای ورود از راست، -1 برای ورود از چپ
      opacity: 0,
      x: direction * 50, // جابه‌جایی اولیه
    }),
    animate: {
      opacity: 1,
      x: 0, // بازگشت به موقعیت اصلی
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -50, // جابه‌جایی هنگام خروج
    }),
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col px-3 md:px-6 py-4 gap-2">
      {/* Breadcrumb */}
      <div className="flex gap-3 items-center text-gray-500 text-sm px-3 md:px-6">
        <Link href="./">خانه /</Link>
        <span className="text-primary">{isSignUp ? "ثبت نام" : "ورود"}</span>
      </div>
      {/* box */}
      <main className="flex-grow flex items-center justify-center px-3 md:px-6 p-4 md:p-0">
        <div className="w-full max-w-7xl h-fit flex bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
          {/* سمت چپ: بخش فرم */}
          <div className="w-full md:w-[65%] lg:w-[45%] flex flex-col justify-between px-6 py-4 md:px-12 lg:px-16 bg-white overflow-hidden">
            {/* بخش بالا: لوگو */}
            <div className="flex items-center gap-2 shrink-0 ">
              {/* فرض می‌کنیم لوگو در public/images/logo.png قرار دارد */}
              <figure className="relative w-[50px] h-[50px]">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </figure>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                NovaMtd
              </span>
            </div>

            {/* بخش میانی: فرم‌ها با انیمیشن */}
            <div className="flex-grow flex items-center justify-center relative overflow-hidden">
              <AnimatePresence
                initial={false} // انیمیشن اولیه را وقتی صفحه لود می‌شود غیرفعال می‌کنیم تا از پرش جلوگیری شود
                custom={isSignUp ? 1 : -1} // تعیین جهت انیمیشن بر اساس وضعیت فعلی
                mode="wait" // صبر می‌کند تا انیمیشن خروج کامل شود، سپس انیمیشن ورود را شروع می‌کند
              >
                {isSignUp ? (
                  // کامپوننت فرم ثبت‌نام
                  <motion.div
                    key="signup" // کلید یکتا برای AnimatePresence
                    variants={formVariants}
                    initial="initial" // اجرای انیمیشن اولیه
                    animate="animate" // اجرای انیمیشن نمایش
                    exit="exit" // اجرای انیمیشن خروج
                    custom={isSignUp ? 1 : -1} // ارسال جهت به variants
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full flex justify-center" // برای اطمینان از اینکه فرم در مرکز قرار می‌گیرد
                  >
                    {/*
                      - onSwitchToLogin: این تابع را به FormSignUp پاس می‌دهیم
                      - وقتی روی "وارد شوید" کلیک شود، handleSwitchToLogin فراخوانی می‌شود
                    */}
                    <FormSignUp onSwitchToSignUp={handleSwitchToLogin} />
                  </motion.div>
                ) : (
                  // کامپوننت فرم ورود
                  <motion.div
                    key="login" // کلید یکتا برای AnimatePresence
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={isSignUp ? 1 : -1}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full flex justify-center"
                  >
                    {/*
                      - onSwitchToSignUp: این تابع را به FormLogIn پاس می‌دهیم
                      - وقتی روی "ساخت حساب کاربری" کلیک شود، handleSwitchToSignUp فراخوانی می‌شود
                    */}
                    <FormLogIn onSwitchToSignUp={handleSwitchToLogin} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* بخش پایین (بدون تغییر) */}
            <div className="shrink-0 text-center">
              <p className="text-xs text-slate-400">
                با ورود به سایت، شما با شرایط و قوانین ما موافقت می‌کنید.
              </p>
            </div>
          </div>

          {/* سمت راست: بخش تصویر (بدون تغییر) */}
          <div className="hidden md:flex md:w-[35%] lg:w-[55%] relative bg-gradient-to-br from-[#0962ea] via-[#074fb3] to-[#04367d] items-center justify-center overflow-hidden rounded-3xl">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center px-12">
              <h2 className="text-xl lg:text-3xl font-bold mb-3 text-white">
                خوش آمدید!
              </h2>
              <p className="text-blue-100 text-sm lg:text-lg font-light">
                برای مدیریت بهتر کارهای خود، وارد پنل کاربری شوید.
              </p>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
