"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HeaderModal } from "./headermodal";
import {useState} from "react"

import * as React from "react";
import ThemeToggle from "./ThemeToggle";
import { CircleX } from "lucide-react";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/video", label: "Видеонаблюдения", id:1 },
    { href: "/", label: "Главная", id:2 },
    { href: "/search", label: "Поиск по ШК", id:3 },
    { href: "/admin", label: "Администрирование", id:4 },
  ];
  const [activeNav, setActiveNav] = useState(false)
  return (
    <div>
      <header
        className={cn(
          "border-b border-[#585353] dark:border-[#313D48] w-full flex items-center p-1.5 text-[#6C6C6C]",
          className,
        )}
      >
        {/*right*/}
        <div className="flex items-center">
            <Image
              src="/brand.ico"
              width="40"
              height="40"
              alt="logo"
              className="rounded-md max-lg:cursor-pointer"
            priority
            onClick={() => setActiveNav(true)}
            />
          {/* Навигация */}
          <nav className="relative flex items-center max-lg:hidden">
            <div className="gap-8 flex">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/admin"
                    ? pathname.startsWith("/admin")
                    : pathname === item.href;
              
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-150",
                      isActive
                        ? "text-foreground font-bold"
                        : "text-[#6C6C6C] dark:text-white"
                    )}
                  >
                    {item.label}
              
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
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
        <div className="flex items-center justify-end gap-3.5 pr-4 absolute right-0">
          <ThemeToggle />
          <HeaderModal />
          <div className="w-8 h-8 bg-blue-300 rounded-full text-white flex items-center justify-center text-xs font-medium">
            НД
          </div>
        </div>
      </header>
      <div className="hidden max-lg:block">
        {activeNav && (
          <div className="w-full z-10 absolute h-full top-0 bg-black/50 flex flex-col items-center justify-center"  onClick={() => setActiveNav(false)}>
            <div className="absolute left-1.5 top-1.5 cursor-pointer bg-gray-500 w-10 h-10 rounded-md" onClick={() => setActiveNav(false)}>
              <span><CircleX size={40} className="text-white dark:text-black"/></span>
            </div>
            <div className="dark:bg-[#0F1827] w-60 h-50 rounded-2xl bg-gray-400 text-white"   onClick={(e) => e.stopPropagation()}>
              <nav className="relative px-10 py-10 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
            
                  return (
                    <div key={item.id} className="relative">
                      {isActive && (
                        <span
                          className="
                            absolute
                            -left-5
                            top-1/2
                            -translate-y-1/2
                            w-2.5
                            h-2.5
                            rounded-full
                            bg-blue-500
                          "
                        />
                      )}
            
                      <Link
                        href={item.href}
                        onClick={() => setActiveNav(false)}
                        className={cn(
                          'relative inline-block pb-1 transition-colors',
                          isActive ? 'text-blue-400' : 'text-white'
                        )}
                      >
                        {item.label}
            
                        {/* Нижнее подчёркивание */}
                        <span
                          className={cn(
                            'absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 transition-all duration-300',
                            isActive ? 'w-full' : 'w-0'
                          )}
                        />
                      </Link>
                    </div>
                  )
                })}
              </nav>
            </div>
            
          </div>
        )}
      </div>
      
      
    </div>
    
  );
};
