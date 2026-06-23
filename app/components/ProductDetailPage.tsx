"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // برای افکت‌های انیمیشنی
import { StarIcon } from "@heroicons/react/24/solid"; // آیکن ستاره برای امتیازدهی

// فرض می‌کنیم این اطلاعات از API یا یک فایل JSON گرفته می‌شود
const productData = {
  id: "med-12345",
  name: "مانیتور علائم حیاتی بیمار مدل ProCare 5000",
  brand: "Meditech",
  price: "85,000,000",
  currency: "تومان",
  discountPrice: "79,500,000",
  discountPercentage: 6,
  rating: 4.9,
  totalReviews: 87,
  images: [
    "/images/medical-product-1.jpg",
    "/images/medical-product-2.jpg",
    "/images/medical-product-3.jpg",
    "/images/medical-product-4.jpg",
  ],
  shortDescription:
    "مانیتور علائم حیاتی ProCare 5000 برای پایش دقیق ضربان قلب، فشار خون، SpO2 و دمای بدن در مراکز درمانی و بخش‌های مراقبت ویژه طراحی شده است.",
  longDescription:
    "مانیتور علائم حیاتی بیمار ProCare 5000 یک دستگاه حرفه‌ای و قابل اعتماد برای استفاده در بیمارستان‌ها، کلینیک‌ها و بخش ICU است. این دستگاه با نمایشگر باکیفیت و دقت بالا، امکان پایش هم‌زمان پارامترهای حیاتی بیمار را فراهم می‌کند. طراحی ارگونومیک، کاربری ساده و آلارم‌های هوشمند از ویژگی‌های برجسته این محصول هستند.",
  specifications: [
    { label: "نوع دستگاه", value: "مانیتور علائم حیاتی" },
    { label: "پارامترها", value: "ECG، SpO2، NIBP، Temperature" },
    { label: "صفحه نمایش", value: "نمایشگر رنگی 12 اینچ" },
    { label: "منبع تغذیه", value: "برق شهری و باتری داخلی" },
    { label: "کاربرد", value: "بیمارستان، ICU، اورژانس" },
    { label: "کشور سازنده", value: "چین / تحت لیسانس اروپا" },
    { label: "وزن", value: "4.2 کیلوگرم" },
    { label: "گارانتی", value: "12 ماه" },
  ],
  reviews: [
    {
      id: "rev-001",
      userName: "دکتر احمدی",
      rating: 5,
      date: "1403/03/15",
      title: "دقت بالا و کاربری آسان",
      comment:
        "در بخش ICU استفاده می‌کنیم و از دقت و کیفیت نمایش اطلاعات بسیار رضایت داریم.",
    },
    {
      id: "rev-002",
      userName: "پرستار رضایی",
      rating: 4,
      date: "1403/03/10",
      title: "مناسب برای استفاده روزمره",
      comment:
        "کار با دستگاه ساده است و آلارم‌ها به‌موقع عمل می‌کنند. برای بخش درمانی گزینه خوبی است.",
    },
  ],
};

const relatedProducts = [
  {
    id: "med-67890",
    name: "پالس اکسیمتر انگشتی دیجیتال",
    price: "2,500,000",
    currency: "تومان",
    image: "/images/related-medical-1.jpg",
  },
  {
    id: "med-11223",
    name: "دستگاه فشارسنج دیجیتال بازویی",
    price: "3,200,000",
    currency: "تومان",
    image: "/images/related-medical-2.jpg",
  },
  {
    id: "med-33445",
    name: "ترمومتر دیجیتال غیرتماسی",
    price: "1,800,000",
    currency: "تومان",
    image: "/images/related-medical-3.jpg",
  },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // 'description', 'specs', 'reviews'

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    console.log("Added to cart:", { id: productData.id, quantity });
    alert(`${productData.name} با تعداد ${quantity} به سبد خرید اضافه شد!`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] pb-10">
      {/* Breadcrumb */}
      <div className="w-full px-4 md:px-6 pt-4">
        <div className="flex items-center gap-2 text-sm md:text-base text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">
            خانه
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">
            {productData.name.substring(0, 30)}...
          </span>
        </div>
      </div>

      <main className="w-full px-4 md:px-6 py-6 md:py-10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Product Images Section */}
          <div className="lg:col-span-1">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-4">
              <Image
                src={selectedImage}
                alt={productData.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productData.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(img)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 hover:border-primary transition ${
                    selectedImage === img
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 lg:p-10">
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 leading-tight">
                  {productData.name}
                </h1>
                <Link
                  href="#"
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  {productData.brand}
                </Link>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center">
                  {renderStars(productData.rating)}
                </div>
                <span className="text-sm text-slate-500">
                  ({productData.totalReviews} نظر)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3">
                  {productData.discountPrice ? (
                    <>
                      <span className="text-3xl font-bold text-primary">
                        {productData.discountPrice.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ",",
                        )}
                        <span className="text-lg font-normal">
                          {" "}
                          {productData.currency}
                        </span>
                      </span>
                      <span className="text-lg line-through text-slate-400">
                        {productData.price.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ",",
                        )}{" "}
                        {productData.currency}
                      </span>
                      <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">
                        -{productData.discountPercentage}%
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-slate-800">
                      {productData.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      {productData.currency}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-7 mb-6">
                {productData.shortDescription}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-lg text-slate-600 hover:bg-slate-100 transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-lg font-semibold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-lg text-slate-600 hover:bg-slate-100 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={addToCart}
                  className="flex-grow rounded-xl bg-primary text-white font-bold py-3 px-6 hover:opacity-90 transition"
                >
                  افزودن به سبد خرید
                </button>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="text-sm font-medium text-slate-700">
                  اشتراک گذاری:
                </div>
                <div className="flex gap-3">
                  <Link href="#" className="hover:text-primary transition">
                    <Image
                      src="/icons/social/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="#" className="hover:text-primary transition">
                    <Image
                      src="/icons/social/twitter.svg"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="#" className="hover:text-primary transition">
                    <Image
                      src="/icons/social/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details, Specs, Reviews Section */}
        <div className="mt-8 md:mt-12 w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 lg:p-10">
          {/* Tabs */}
          <div className="flex gap-4 md:gap-6 border-b border-slate-200 mb-6 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-lg font-semibold transition ${
                activeTab === "description"
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              توضیحات محصول
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`text-lg font-semibold transition ${
                activeTab === "specs"
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              مشخصات فنی
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`text-lg font-semibold transition ${
                activeTab === "reviews"
                  ? "text-primary border-b-2 border-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              نظرات کاربران ({productData.totalReviews})
            </button>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "description" && (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-slate-600 leading-7"
              >
                {productData.longDescription}
              </motion.div>
            )}
            {activeTab === "specs" && (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
              >
                {productData.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b border-slate-100"
                  >
                    <span className="text-slate-700 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-slate-500">{spec.value}</span>
                  </div>
                ))}
              </motion.div>
            )}
            {activeTab === "reviews" && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Add Review Form */}
                <div className="mb-8 p-6 border border-slate-200 rounded-xl bg-slate-50">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    دیدگاه خود را بنویسید
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        نام شما
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                        placeholder="نام و نام خانوادگی"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        عنوان دیدگاه
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
                        placeholder="مثال: بهترین لپ تاپ"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        امتیاز شما
                      </label>
                      {/* Simple rating input - can be improved with custom component */}
                      <div className="flex gap-1">{renderStars(4)}</div>{" "}
                      {/* Placeholder for rating selection */}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        دیدگاه شما
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition resize-none"
                        placeholder="جزئیات تجربه خود را بنویسید..."
                      />
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <button
                        type="submit"
                        className="rounded-xl bg-primary text-white font-bold py-3 px-6 hover:opacity-90 transition"
                      >
                        ثبت دیدگاه
                      </button>
                    </div>
                  </form>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {productData.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-6 border border-slate-200 rounded-xl"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {review.userName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              {review.userName}
                            </h4>
                            <p className="text-sm text-slate-500">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <h5 className="font-semibold text-slate-800 mb-2">
                        {review.title}
                      </h5>
                      <p className="text-sm text-slate-600 leading-7">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Related Products Section */}
        <div className="mt-8 md:mt-12 w-full max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center md:text-right">
            محصولات مرتبط
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 flex flex-col items-center hover:shadow-lg transition"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-primary mb-4">
                  {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  {product.currency}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="w-full text-center rounded-xl bg-primary text-white font-bold py-2 px-4 hover:opacity-90 transition"
                >
                  مشاهده محصول
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
