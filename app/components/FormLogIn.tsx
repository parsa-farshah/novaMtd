"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormLogInProps = {
  onSwitchToSignUp?: () => void;
};

export function FormLogIn({ onSwitchToSignUp }: FormLogInProps) {
  return (
    <div className="w-full max-w-xs mx-auto" dir="rtl">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-1 tracking-tight">
          ورود به حساب
        </h2>
        <p className="text-slate-500 text-xs">لطفاً مشخصات خود را وارد کنید</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="email-input"
            className="text-slate-700 font-semibold mr-1 text-xs"
          >
            ایمیل
          </Label>
          <Input
            id="email-input"
            type="email"
            placeholder="example@mail.com"
            required
            className="h-10 text-sm bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg placeholder:text-slate-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password-input"
              className="text-slate-700 font-semibold mr-1 text-xs"
            >
              رمز عبور
            </Label>
            <a
              href="#"
              className="text-[10px] font-medium text-[#0962ea] hover:text-[#074fb3] transition-colors"
            >
              فراموشی رمز عبور؟
            </a>
          </div>
          <Input
            id="password-input"
            type="password"
            required
            className="h-10 text-sm bg-slate-50/50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0962ea] transition-all rounded-lg"
          />
        </div>

        <div className="pt-2 space-y-2.5">
          <Button
            type="submit"
            className="w-full h-10 text-sm font-bold bg-[#0962ea] hover:bg-[#074fb3] transition-all rounded-lg shadow-md shadow-blue-500/10 text-white"
          >
            ورود به حساب
          </Button>

          <Button
            variant="ghost"
            className="w-full h-10 text-xs text-slate-600 hover:bg-slate-100 transition-all rounded-lg font-medium border border-slate-200/60"
          >
            <span className="flex items-center gap-2">ورود با گوگل</span>
          </Button>
        </div>

        <div className="text-center pt-1">
          <p className="text-[11px] text-slate-500">
            هنوز ثبت‌نام نکرده‌اید؟{" "}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="text-[#0962ea] font-bold hover:underline"
            >
              ساخت حساب کاربری
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
