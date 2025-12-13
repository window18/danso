"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HeaderModal } from "./headermodal";

import * as React from "react";
import ThemeToggle from "./ThemeToggle";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/video", label: "Видеонаблюдения" },
    { href: "/", label: "Главная" },
    { href: "/search", label: "Поиск по ШК" },
    { href: "/admin/", label: "Администрирование" },
  ];

  return (
    <header
      className={cn(
        "border-b border-[#585353] dark:border-[#313D48] w-full flex items-center relative p-1.5 text-[#6C6C6C]",
        className,
      )}
    >
      {/*right*/}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/brand.ico"
            width="40"
            height="40"
            alt="logo"
            className="rounded-md"
            priority
          />
        </Link>

        {/* Навигация */}
        <nav className="relative flex items-center">
          <div className="gap-8 flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/admin/"
                  ? pathname.startsWith("/admin")
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium  transition-all duration-150",
                    isActive
                      ? "text-foreground font-bold"
                      : "text-[#6C6C6C] dark:text-white",
                  )}
                >
                  {item.label}

                  {/* Анимированная зелёная полоса — только если активна */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline" // Один layoutId — одна полоса на весь сайт
                      className="absolute inset-x-0 -bottom-2.5 h-[3px] bg-[#07FF2F] rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Правая часть */}
      <div className="flex items-center justify-end gap-3.5 pr-4 absolute left-1/2">
        <ThemeToggle />
        <HeaderModal />
        <div className="w-8 h-8 bg-blue-300 rounded-full text-white flex items-center justify-center text-xs font-medium">
          НД
        </div>
      </div>
    </header>
  );
};
