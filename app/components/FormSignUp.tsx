"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormSignUpProps = {
  onSwitchToSignUp?: () => void;
};

export function FormSignUp({ onSwitchToSignUp }: FormSignUpProps) {
  return (
    // max-w-xs: عرض کلی فرم را کوچکتر می‌کند
    <div className="w-full max-w-xs mx-auto" dir="rtl">
      {/* mb-5: فاصله پایین هدر کمتر شد */}
      <div className="mb-4">
        {/* text-2xl -> text-xl: عنوان کوچکتر شد */}
        <h2 className="text-xl font-bold text-slate-800 mb-1 tracking-tight">
          ساخت حساب کاربری
        </h2>
        {/* text-xs -> text-[10px]: متن توضیحات کوچکتر شد */}
        <p className="text-slate-500 text-[10px]">
          برای شروع، اطلاعات خود را وارد کنید
        </p>
      </div>

      {/* space-y-3: فاصله بین آیتم‌های فرم کمتر شد */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
        <div className="space-y-1">
          <Label
            htmlFor="name-input"
            className="text-slate-700 font-semibold mr-1 text-[10px]" // فونت لیبل کوچکتر شد
          >
            نام و نام خانوادگی
          </Label>
          <Input
            id="name-input"
            type="text"
            placeholder="مثال: علی علوی"
            required
            // h-10 -> h-8: ارتفاع اینپوت کوچکتر شد
            // text-sm -> text-xs: فونت متن اینپوت کوچکتر شد
            // placeholder:text-slate-400 -> placeholder:text-slate-300: رنگ placeholder کمی کمرنگ تر شد
            className="h-8 text-xs bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg placeholder:text-slate-300"
          />
        </div>

        <div className="space-y-1">
          <Label
            htmlFor="email-input"
            className="text-slate-700 font-semibold mr-1 text-[10px]"
          >
            ایمیل
          </Label>
          <Input
            id="email-input"
            type="email"
            placeholder="example@mail.com"
            required
            className="h-8 text-xs bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg placeholder:text-slate-300"
          />
        </div>

        <div className="space-y-1">
          <Label
            htmlFor="password-input"
            className="text-slate-700 font-semibold mr-1 text-[10px]"
          >
            رمز عبور
          </Label>
          <Input
            id="password-input"
            type="password"
            placeholder="••••••••"
            required
            className="h-8 text-xs bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg"
          />
        </div>

        <div className="space-y-1">
          <Label
            htmlFor="confirm-password-input"
            className="text-slate-700 font-semibold mr-1 text-[10px]"
          >
            تکرار رمز عبور
          </Label>
          <Input
            id="confirm-password-input"
            type="password"
            placeholder="••••••••"
            required
            className="h-8 text-xs bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg"
          />
        </div>

        {/* pt-2 -> pt-1.5: فاصله بالای دکمه‌ها کمتر شد */}
        <div className="pt-1.5 space-y-2">
          {/* h-10 -> h-9: ارتفاع دکمه ثبت نام کوچکتر شد */}
          <Button
            type="submit"
            className="w-full h-9 text-xs font-bold bg-[#0962ea] hover:bg-[#074fb3] transition-all rounded-lg shadow-md shadow-blue-500/10 text-white"
          >
            ثبت نام در سیستم
          </Button>

          {/* h-10 -> h-9: ارتفاع دکمه گوگل کوچکتر شد */}
          <Button
            variant="ghost"
            className="w-full h-9 text-[10px] text-slate-600 hover:bg-slate-100 transition-all rounded-lg font-medium border border-slate-200/60"
          >
            <span className="flex items-center gap-2">ثبت نام با گوگل</span>
          </Button>
        </div>

        {/* pt-1 -> pt-0.5: فاصله بالای لینک ورود کمتر شد */}
        <div className="text-center pt-0.5">
          {/* text-[11px] -> text-[10px]: فونت متن لینک ورود کوچکتر شد */}
          <p className="text-[10px] text-slate-500">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="text-[#0962ea] font-bold hover:underline"
            >
              وارد شوید
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
