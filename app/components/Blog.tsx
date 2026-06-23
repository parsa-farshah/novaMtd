import React from "react";
import Image from "next/image";
import Link from "next/link";

// ساختار داده‌ای فرضی برای مقالات
const posts = [
  {
    id: 1,
    title: "راهنمای جامع خرید تجهیزات مانیتورینگ برای کلینیک‌های خصوصی",
    excerpt:
      "در این مقاله به بررسی ویژگی‌های کلیدی که باید هنگام خرید مانیتور علائم حیاتی به آن‌ها توجه کنید، می‌پردازیم...",
    category: "آموزش خرید",
    date: "۱۴۰۳/۰۵/۲۰",
    image: "/images/blog1.jpg",
    author: "دکتر احمدی",
  },
  {
    id: 2,
    title: "استانداردهای جدید تجهیزات اتاق عمل در سال ۲۰۲۵",
    excerpt:
      "تغییرات اخیر در استانداردهای بین‌المللی تجهیزات اتاق عمل چیست و چگونه بر کیفیت خدمات تأثیر می‌گذارد؟",
    category: "اخبار علمی",
    date: "۱۴۰۳/۰۵/۱۸",
    image: "/images/blog2.jpg",
    author: "مهندس رضایی",
  },
  {
    id: 3,
    title: "چگونه طول عمر دستگاه‌های تشخیص طبی خود را افزایش دهیم؟",
    excerpt:
      "نگهداری صحیح و کالیبراسیون دوره‌ای، کلید اصلی جلوگیری از خرابی‌های ناگهانی در تجهیزات حساس است...",
    category: "نگهداری و تعمیرات",
    date: "۱۴۰۳/۰۵/۱۵",
    image: "/images/blog3.jpg",
    author: "کارشناس فنی",
  },
  {
    id: 4,
    title: "بررسی تکنولوژی‌های نوین در تجهیزات تشخیص طبی",
    excerpt:
      "آشنایی با جدیدترین نوآوری‌ها در حوزه سونوگرافی و تشخیص‌های هوشمند...",
    category: "تکنولوژی",
    date: "۱۴۰۳/۰۵/۱۰",
    image: "/images/blog4.jpg",
    author: "دکتر سهرابی",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20" dir="rtl">
      {/* Hero Section: Featured Post */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/header.png" // تصویر اصلی بخش هیرو
          alt="Featured Post"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <span className="bg-blue-600 text-xs px-3 py-1 rounded-full mb-4 inline-block">
              مقاله ویژه
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              آینده تجهیزات پزشکی: چگونه هوش مصنوعی درمان را تغییر می‌دهد؟
            </h1>
            <p className="text-lg text-slate-200 mb-8 line-clamp-2">
              بررسی دقیق نقش الگوریتم‌های پیشرفته در بهبود دقت تشخیص‌های پزشکی و
              سرعت عمل پزشکان در مراکز درمانی...
            </p>
            <Link
              href="/blog/1"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
            >
              ادامه خواندن
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content: Blog Grid */}
          <main className="lg:w-2/3">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-slate-900 border-r-4 border-blue-600 pr-4">
                آخرین مقالات
              </h2>
              <div className="flex gap-2">
                {["همه", "آموزشی", "اخبار", "تکنولوژی"].map((cat) => (
                  <button
                    key={cat}
                    className="text-sm text-slate-600 hover:text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-slate-400 gap-3 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-relaxed">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-5 leading-7">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-bold text-blue-600 flex items-center gap-2 group/link"
                    >
                      مطالعه مقاله
                      <span className="group-hover/link:translate-x-[-5px] transition-transform">
                        ←
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <nav className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  3
                </button>
              </nav>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                جستجو در مقالات
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثلاً: مانیتورینگ..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  🔍
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-5">
                دسته‌بندی‌ها
              </h4>
              <ul className="space-y-3">
                {[
                  "آموزش خرید تجهیزات",
                  "اخبار پزشکی",
                  "تکنولوژی‌های نوین",
                  "سلامت و ایمنی",
                  "مقالات علمی",
                ].map((cat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600 cursor-pointer group"
                  >
                    <span>{cat}</span>
                    <span className="text-xs bg-slate-100 group-hover:bg-blue-100 px-2 py-1 rounded-md transition-colors">
                      ۱۲
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts Widget */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">
                مقالات پربازدید
              </h4>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start group cursor-pointer"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden">
                      <Image
                        src={`/images/pop-${i}.jpg`}
                        alt="pop"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug">
                        نکات بسیار مهم در کالیبراسیون دستگاه‌های تشخیص طبی
                      </h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        ۱.۲ هزار بازدید
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">خبرنامه تخصصی</h4>
                <p className="text-sm text-blue-100 mb-6">
                  آخرین اخبار و مقالات علمی را مستقیم در ایمیل خود دریافت کنید.
                </p>
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 text-sm placeholder:text-blue-100 focus:outline-none focus:bg-white/30 transition-all mb-4"
                />
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
                  عضویت در خبرنامه
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
