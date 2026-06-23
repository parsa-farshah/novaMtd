"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  MinusIcon,
  PlusIcon,
  ChevronLeftIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type ProductImage = {
  src: string;
  alt?: string;
};

type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  images: ProductImage[];
  rating?: number;
  reviewsCount?: number;
  category?: string;
  brand?: string;
  inStock?: boolean;
  features?: string[];
};

type ProductDetailPageProps = {
  product?: Product;
  currentPage?: string;
};

const mockProduct: Product = {
  id: "mock-1",
  title: "دستگاه فشار خون دیجیتال مدل تستی",
  price: 1250000,
  oldPrice: 1550000,
  description:
    "این یک محصول تستی است که فقط برای مشاهده طراحی صفحه جزئیات محصول استفاده می‌شود. می‌توانی بعداً آن را با داده واقعی API جایگزین کنی.",
  images: [
    { src: "/images/placeholder.png", alt: "محصول تستی" },
    { src: "/images/placeholder.png", alt: "محصول تستی 2" },
    { src: "/images/placeholder.png", alt: "محصول تستی 3" },
    { src: "/images/placeholder.png", alt: "محصول تستی 4" },
  ],
  rating: 4.7,
  reviewsCount: 38,
  category: "تجهیزات پزشکی",
  brand: "نوا",
  inStock: true,
  features: ["دارای گارانتی", "نمایشگر دیجیتال", "مصرف کم", "حمل آسان"],
};

export default function ProductDetailPage({
  product,
  currentPage,
}: ProductDetailPageProps) {
  const safeProduct = product ?? mockProduct;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const discountPercent = useMemo(() => {
    if (!safeProduct.oldPrice || safeProduct.oldPrice <= safeProduct.price) {
      return 0;
    }
    return Math.round(
      ((safeProduct.oldPrice - safeProduct.price) / safeProduct.oldPrice) * 100,
    );
  }, [safeProduct.oldPrice, safeProduct.price]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${safeProduct.title} به سبد خرید اضافه شد`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8" dir="rtl">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-primary">
          خانه
        </Link>
        <ChevronLeftIcon className="h-4 w-4 rotate-180" />
        <Link href="/products" className="hover:text-primary">
          محصولات
        </Link>
        {safeProduct.category && (
          <>
            <ChevronLeftIcon className="h-4 w-4 rotate-180" />
            <span>{safeProduct.category}</span>
          </>
        )}
        <ChevronLeftIcon className="h-4 w-4 rotate-180" />
        <span className="text-slate-900">{safeProduct.title}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-square w-full">
              <Image
                src={
                  // safeProduct.images?.[selectedImage]?.src ||
                  "/images/product.png"
                }
                alt={
                  safeProduct.images?.[selectedImage]?.alt || safeProduct.title
                }
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {safeProduct.images && safeProduct.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {safeProduct.images.map((img, index) => (
                <button
                  key={`${img.src}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-2xl border transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Image
                    src="/images/product.png"
                    alt={img.alt || safeProduct.title}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              {safeProduct.brand && (
                <p className="mb-1 text-sm text-slate-500">
                  {safeProduct.brand}
                </p>
              )}
              <h1 className="text-2xl font-bold text-slate-900">
                {safeProduct.title}
              </h1>
            </div>

            <button
              type="button"
              onClick={() => setIsFavorite((prev) => !prev)}
              className={`rounded-full border p-2 transition-colors ${
                isFavorite
                  ? "border-red-200 bg-red-50 text-red-500"
                  : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
              }`}
            >
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              <StarIcon className="h-5 w-5 fill-amber-500" />
              <span className="text-sm font-semibold text-slate-700">
                {safeProduct.rating ?? "بدون امتیاز"}
              </span>
            </div>
            <span className="text-sm text-slate-400">
              ({safeProduct.reviewsCount ?? 0} نظر)
            </span>
          </div>

          <div className="mb-6 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                {safeProduct.price.toLocaleString()} تومان
              </span>
              {safeProduct.oldPrice &&
                safeProduct.oldPrice > safeProduct.price && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 line-through">
                      {safeProduct.oldPrice.toLocaleString()} تومان
                    </span>
                    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
                      {discountPercent}% تخفیف
                    </span>
                  </div>
                )}
            </div>
          </div>

          <p className="mb-6 leading-8 text-slate-600 text-justify">
            {safeProduct.description}
          </p>

          {safeProduct.features && safeProduct.features.length > 0 && (
            <div className="mb-6">
              <h2 className="mb-3 text-sm font-bold text-slate-900">
                ویژگی‌های محصول
              </h2>
              <div className="flex flex-wrap gap-2">
                {safeProduct.features.map((feature) => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() =>
                      setSelectedFeature(
                        feature === selectedFeature ? null : feature,
                      )
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      selectedFeature === feature
                        ? "border-primary bg-primary text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-slate-900">
              انتخاب تعداد
            </h2>
            <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={handleDecrease}
                className="p-3 text-slate-600 hover:bg-slate-50"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="min-w-14 px-4 text-center text-sm font-bold text-slate-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrease}
                className="p-3 text-slate-600 hover:bg-slate-50"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="submit"
              disabled={!safeProduct.inStock}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-bold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              {safeProduct.inStock ? "افزودن به سبد خرید" : "ناموجود"}
            </button>
          </form>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 text-center">
              <TruckIcon className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-medium text-slate-600">
                ارسال سریع
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 text-center">
              <ShieldCheckIcon className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-medium text-slate-600">
                ضمانت اصالت
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 text-center">
              <ArrowPathIcon className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-medium text-slate-600">
                ۷ روز بازگشت
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
