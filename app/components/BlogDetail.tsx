import React from "react";
import Image from "next/image";
import Link from "next/link";

const relatedPosts = [
  {
    id: 1,
    title: "راهنمای انتخاب مانیتور علائم حیاتی برای کلینیک‌ها",
    image: "/images/blog.jpg",
  },
  {
    id: 2,
    title: "استانداردهای مهم در تجهیزات اتاق عمل",
    image: "/images/blog.jpg",
  },
  {
    id: 3,
    title: "نکات نگهداری از تجهیزات تشخیص طبی",
    image: "/images/blog.jpg",
  },
];

const BlogDetail = () => {
  return (
    <div className="min-h-screen bg-slate-50 mt-[83px] md:mt-[86px]" dir="rtl">
      {/* Breadcrumb */}
      <div className="w-full bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 pt-6">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              خانه
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              بلاگ
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600 font-medium truncate max-w-[200px] md:max-w-none">
              راهنمای جامع خرید تجهیزات مانیتورینگ
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                آموزش خرید
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                تجهیزات پزشکی
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              راهنمای جامع خرید تجهیزات مانیتورینگ برای کلینیک‌های خصوصی
            </h1>

            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 flex-wrap">
              <span>نویسنده: دکتر احمدی</span>
              <span>•</span>
              <span>تاریخ: ۱۴۰۳/۰۵/۲۰</span>
              <span>•</span>
              <span>زمان مطالعه: ۶ دقیقه</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative w-full h-[260px] md:h-[420px] rounded-3xl overflow-hidden shadow-sm mb-8">
              <Image
                src="/images/blog.jpg"
                alt="Blog featured"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <article className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
              <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                <p>
                  انتخاب تجهیزات مانیتورینگ مناسب برای کلینیک‌های خصوصی یکی از
                  مهم‌ترین تصمیم‌هایی است که بر کیفیت خدمات درمانی و تجربه بیمار
                  تأثیر مستقیم می‌گذارد. در این مقاله، به بررسی مهم‌ترین معیارها
                  برای انتخاب دستگاه مناسب می‌پردازیم.
                </p>

                <h2>چرا انتخاب درست تجهیزات مانیتورینگ مهم است؟</h2>
                <p>
                  مانیتورهای علائم حیاتی نقش کلیدی در پایش وضعیت بیماران دارند.
                  دقت بالا، کاربری ساده و قابلیت اطمینان از جمله ویژگی‌هایی
                  هستند که هنگام خرید باید به آن‌ها توجه شود.
                </p>

                <h2>ویژگی‌های مهم در خرید مانیتور علائم حیاتی</h2>
                <ul>
                  <li>دقت در نمایش پارامترهای حیاتی</li>
                  <li>قابلیت اتصال به سیستم مرکزی</li>
                  <li>نمایشگر با وضوح مناسب</li>
                  <li>هشدارهای صوتی و تصویری قابل تنظیم</li>
                  <li>خدمات پس از فروش و گارانتی معتبر</li>
                </ul>

                <h2>اشتباهات رایج هنگام خرید</h2>
                <p>
                  بسیاری از مراکز درمانی تنها بر اساس قیمت تصمیم می‌گیرند، در
                  حالی که کیفیت، دوام، پشتیبانی و سازگاری با محیط درمانی نیز
                  اهمیت زیادی دارد.
                </p>

                <blockquote>
                  یک انتخاب درست می‌تواند سال‌ها بهره‌وری بهتر، دقت بالاتر و
                  هزینه‌های نگهداری کمتر به همراه داشته باشد.
                </blockquote>

                <h2>جمع‌بندی</h2>
                <p>
                  پیش از خرید هر نوع تجهیز پزشکی، نیاز واقعی مرکز، بودجه، برند،
                  خدمات پشتیبانی و استانداردهای فنی را به‌دقت بررسی کنید تا
                  تصمیمی مطمئن و حرفه‌ای بگیرید.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                {[
                  "مانیتورینگ",
                  "تجهیزات پزشکی",
                  "خرید تجهیزات",
                  "کلینیک خصوصی",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Author Box */}
            <div className="mt-8 bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">
                DA
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  دکتر احمدی
                </h3>
                <p className="text-sm text-slate-600 leading-7">
                  متخصص حوزه تجهیزات پزشکی و مشاور خرید و راه‌اندازی تجهیزات
                  مراکز درمانی.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                مقالات مرتبط
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    href={`/blog/${post.id}`}
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-slate-900 leading-6 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">جستجو</h4>
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                دسته‌بندی‌ها
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex justify-between">
                  <span>آموزش خرید</span>
                  <span>12</span>
                </li>
                <li className="flex justify-between">
                  <span>اخبار پزشکی</span>
                  <span>8</span>
                </li>
                <li className="flex justify-between">
                  <span>نگهداری و تعمیرات</span>
                  <span>5</span>
                </li>
                <li className="flex justify-between">
                  <span>تکنولوژی</span>
                  <span>7</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-sm">
              <h4 className="text-lg font-bold mb-3">مشاوره خرید</h4>
              <p className="text-sm text-blue-100 leading-7 mb-5">
                برای انتخاب بهترین تجهیزات پزشکی، از کارشناسان ما مشاوره بگیرید.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full rounded-2xl bg-white text-blue-600 py-3 text-sm font-bold hover:bg-blue-50 transition-colors"
              >
                تماس با ما
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
