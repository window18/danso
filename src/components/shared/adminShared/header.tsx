"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/camera", label: "Камеры" },
    { href: "/admin/analytics", label: "Аналитика" },
    { href: "/admin/mapcamera", label: "Карта камер" },
    { href: "/admin/users", label: "Пользователи" },
    { href: "/admin/add", label: "Добавить ШК" },
    { href: "/admin/server", label: "Настройки Сервера" },
  ];

  return (
    <div
      className={cn(
        "flex h-[65px] items-center justify-start border-b-2 border-[#E3E3E3] dark:border-[#313D48] bg-transparent px-8",
        className,
      )}
    >
      <nav className="relative flex items-center gap-10">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-1 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? ""
                  : "text-gray-600 hover:text-gray-900 dark:text-white",
              )}
            >
              {item.label}

              {/* Красивая синяя полоса с плавной анимацией */}
              {isActive && (
                <motion.div
                  layoutId="admin-nav-underline"
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-blue-600 rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
