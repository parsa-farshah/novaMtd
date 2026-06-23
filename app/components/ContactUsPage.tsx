"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] mt-[83px] md:mt-[86px]">
      {/* Breadcrumb */}
      <div className="w-full px-4 md:px-6 pt-4">
        <div className="flex items-center gap-2 text-sm md:text-base text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">
            خانه
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">تماس با ما</span>
        </div>
      </div>

      <main className="w-full px-4 md:px-6 py-6 md:py-10">
        <div className="w-full max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Hero Section */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Side */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center gap-4 md:gap-6">
                <div className="inline-flex w-fit items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs md:text-sm font-medium">
                  در ارتباط باشیم
                </div>

                <div className="space-y-3">
                  <h1 className="text-2xl md:text-4xl font-bold text-slate-800 leading-tight">
                    تماس با ما
                  </h1>
                  <p className="text-sm md:text-base text-slate-600 leading-7">
                    اگر سوالی درباره خدمات، محصولات، سفارش‌ها یا همکاری دارید،
                    از طریق فرم زیر یا اطلاعات تماس با ما در ارتباط باشید. تیم
                    پشتیبانی ما در سریع‌ترین زمان پاسخگوی شما خواهد بود.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-2">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">پاسخ‌گویی</p>
                    <p className="font-bold text-slate-800">۲۴ ساعته</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">زمان پاسخ</p>
                    <p className="font-bold text-slate-800">کمتر از ۱ روز</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">پشتیبانی</p>
                    <p className="font-bold text-slate-800">تلفنی و آنلاین</p>
                  </div>
                </div>
              </div>

              {/* Image / Contact Card Side */}
              <div className="bg-primary text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-3xl font-bold">
                    راه‌های ارتباطی
                  </h2>
                  <p className="text-white/85 text-sm md:text-base leading-7">
                    از طریق یکی از راه‌های زیر با ما در تماس باشید یا فرم تماس
                    را تکمیل کنید.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-white/70 text-sm mb-1">شماره تماس</p>
                    <p className="font-semibold text-base md:text-lg">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-white/70 text-sm mb-1">ایمیل</p>
                    <p className="font-semibold text-base md:text-lg">
                      info@example.com
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-white/70 text-sm mb-1">آدرس</p>
                    <p className="font-semibold text-base md:text-lg leading-7">
                      تهران، خیابان مثال، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-slate-800 mb-2">
                فرم تماس
              </h2>
              <p className="text-sm md:text-base text-slate-500">
                پیام خود را برای ما ارسال کنید تا در اولین فرصت بررسی شود.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  شماره تماس
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                  placeholder="09xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  موضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                  placeholder="موضوع پیام"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  پیام شما
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition resize-none"
                  placeholder="متن پیام خود را وارد کنید..."
                />
              </div>

              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="rounded-xl bg-primary text-white px-6 py-3 font-bold hover:opacity-90 transition"
                >
                  ارسال پیام
                </button>
              </div>
            </form>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
            <h2 className="text-xl md:text-3xl font-bold text-slate-800 mb-6">
              سوالات متداول
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
                <h3 className="font-bold text-slate-800 mb-2">
                  چه مدت طول می‌کشد تا پاسخ بدهید؟
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-7">
                  معمولاً کمتر از ۲۴ ساعت کاری به پیام‌ها پاسخ داده می‌شود.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
                <h3 className="font-bold text-slate-800 mb-2">
                  آیا امکان تماس تلفنی وجود دارد؟
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-7">
                  بله، در ساعات کاری می‌توانید با شماره پشتیبانی تماس بگیرید.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
                <h3 className="font-bold text-slate-800 mb-2">
                  آیا می‌توانم برای همکاری تجاری پیام بفرستم؟
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-7">
                  بله، لطفاً موضوع پیام را روی همکاری تجاری قرار دهید تا به بخش
                  مربوطه ارجاع شود.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary rounded-3xl text-white p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                آماده‌ایم تا پاسخگوی شما باشیم
              </h2>
              <p className="text-white/85 text-sm md:text-base leading-7">
                اگر سوال یا پیشنهادی دارید، همین حالا با ما در میان بگذارید.
              </p>
            </div>

            <a
              href="#"
              className="rounded-xl bg-white text-primary px-6 py-3 font-bold hover:opacity-95 transition"
            >
              شروع تماس
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
