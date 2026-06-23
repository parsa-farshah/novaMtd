// components/NavLinks.tsx
import React from "react";

interface NavItem {
  label: string;
  href: string;
  // می‌توانید ویژگی‌های دیگری مانند آیکون یا وضعیت فعال را اضافه کنید
}

interface NavLinksProps {
  items: NavItem[];
  className?: string; // برای اضافه کردن کلاس‌های اضافی از والد
  activePage?: string; // برای مشخص کردن صفحه فعال
  activeClass?: string; // کلاسی که به لینک فعال داده می‌شود
  inactiveClass?: string; // کلاسی که به لینک‌های غیر فعال داده می‌شود
  hoverClass?: string; // کلاسی که در حالت هاور برای لینک‌های غیر فعال داده می‌شود
}

const NavLinks: React.FC<NavLinksProps> = ({
  items,
  className = "",
  activePage,
  activeClass = "text-primary", // پیش‌فرض: رنگ primary
  inactiveClass = "text-[#848484]", // پیش‌فرض: رنگ خاکستری
  hoverClass = "hover:text-primary hover:duration-500", // پیش‌فرض: رنگ primary در هاور
}) => {
  return (
    <ul
      className={`*:px-4 items-center ${className} hidden md:flex text-sm lg:text-lg`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={`font-semibold
              ${activePage === item.href ? activeClass : `${inactiveClass} ${hoverClass}`}
            `}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
