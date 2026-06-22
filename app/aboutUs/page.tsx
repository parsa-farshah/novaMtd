import React from "react";
import Top from "../components/Top";
import NavigationComponent from "../components/NavigationComponent";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

function Page() {
  const stats = [
    { number: "+9", label: "میلیون کاربر" },
    { number: "+4", label: "هزار تنوع محصولات" },
    { number: "+1.5", label: "هزار فروشنده فعال" },
    { number: "+30", label: "هزار سفارش انجام شده" },
  ];

  // دیتای جدید برای ۴ باکس جدید
  const features = [
    {
      icon: "/icons/feature1.png", // مسیر آیکون‌ها را جایگزین کنید
      title: "امنیت بالا",
      description:
        "محافظت از داده‌های شما با استفاده از آخرین پروتکل‌های امنیتی جهانی.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: "/icons/feature2.png",
      title: "پرداخت سریع",
      description:
        "سیستم پرداخت هوشمند و بدون واسطه برای تسریع در انجام معاملات.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "/icons/feature3.png",
      title: "پشتیبانی ۲۴/۷",
      description:
        "تیم متخصص ما در تمام ساعات شبانه‌روز آماده پاسخگویی به شماست.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: "/icons/feature4.png",
      title: "تنوع بی‌نظیر",
      description: "دسترسی به هزاران محصول با کیفیت تضمین شده در یک کلیک.",
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen">
      <Top />
      <NavigationComponent />
      {/* header */}
      <div className="px-3 md:px-6 py-6 md:w-[90%] md:mx-auto 2xl:container">
        {/* Breadcrumb */}
        <div className="flex gap-3 items-center text-gray-500 text-sm">
          <Link href="./">خانه /</Link>
          <span className="text-primary">درباره ما</span>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          {/* کانتینر اصلی که شامل آیکون و بخش متن است */}
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 lg:items-center">
            {/* بخش سمت راست (متن + باکس‌های آماری) */}
            {/* اضافه کردن flex-col به این بخش باعث می‌شود باکس‌ها زیر متن قرار بگیرند */}
            <div className="flex flex-col gap-y-8 flex-1">
              {/* ۱. بخش هدر متن (لوگو و عنوان) */}
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-4 shrink-0">
                  <figure className="relative w-[50px] h-[50px]">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-tight text-slate-800">
                      درباره NovaMtd
                    </span>
                    <span className="font-medium text-sm tracking-tight text-gray-400">
                      About NovaMtd
                    </span>
                  </div>
                </div>

                {/* ۲. بخش پاراگراف */}
                <div>
                  <p className="text-gray-500 leading-8 text-justify text-sm md:text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    گرافیک است. چاپگرها و متون بلکه روزنام لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و گرافیک است.
                    چاپگرها و متون بلکه روزنام لورم ایپسوم متن ساختگی با تولید
                    سادگی نامفهوم از صنعت چاپ و گرافیک است. چاپگرها و متون بلکه
                    روزنام لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و گرافیک است. چاپگرها و متون بلکه روزنام لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و گرافیک است.
                  </p>
                </div>
              </div>

              {/* ۳. بخش آماری: طراحی مدرن و شناور با تم آبی */}
              <div className="w-full mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center md:items-start justify-center p-6 
                   bg-white rounded-3xl border border-gray-50
                   shadow-[4px_5px_5px_rgb(0,0,0,0.04)] 
                   hover:shadow-[0_20px_40px_rgba(9,98,234,0.1)] 
                   hover:-translate-y-1 transition-all duration-500 ease-out "
                    >
                      {/* یک المان تزئینی کوچک در گوشه برای زیبایی بیشتر (اختیاری) */}
                      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* عدد با فونت درشت و رنگ تم */}
                      <div className="relative">
                        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-[#0962ea] to-[#064fa3] bg-clip-text text-transparent">
                          {stat.number}
                        </span>
                        {/* یک نقطه کوچک زیر عدد برای جذابیت بیشتر */}
                        <div className="w-4 h-1 bg-[#0962ea]/20 rounded-full mt-1 group-hover:w-8 transition-all duration-500" />
                      </div>

                      {/* برچسب (Label) */}
                      <span className="text-[12px] md:text-sm font-medium text-gray-500 mt-3 text-center md:text-right w-full">
                        {stat.label}
                      </span>

                      {/* افکت درخشش ملایم در پس‌زمینه هنگام هاور */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0962ea]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* پایان بخش متن و آمار */}
            {/* بخش سمت چپ (آیکون مغز) - این بخش در دسکتاپ در کنار متن قرار می‌گیرد */}
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <figure className="w-[100px] h-[100px] relative">
                <Image
                  src="/icons/brain.png"
                  alt="brain icon"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* 4 box */}
      <div className="px-3 md:px-6 py-6 md:w-[90%] md:mx-auto mt-10 2xl:container 2xl:mx-auto">
        {/* ۳. بخش ۴ باکس جدید (اصلی‌ترین تغییر اینجاست) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* آیکون */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg shadow-blue-200/50 group-hover:scale-110 transition-transform duration-300`}
              >
                {/* اگر از فایل SVG یا Image استفاده می‌کنید: */}
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                  {/* اینجا می‌توانید آیکون خود را بگذارید */}
                  <span className="text-xl">✦</span>
                </div>
              </div>

              {/* خط جداکننده عمودی */}
              <div className="h-12 w-[1px] bg-gray-200 mx-5 shrink-0" />

              {/* محتوا (تیتر و متن) */}
              <div className="flex flex-col gap-y-1">
                <h4 className="text-base font-bold text-slate-800 group-hover:text-[#0962ea] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-5 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
