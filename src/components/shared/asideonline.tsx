"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import Image from "next/image";
interface Props {
  className?: string;
}

type Tab = "all" | "branch" | "terminal" | "delivery";

const tabs: { key: Tab; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "branch", label: "Отделение" },
  { key: "terminal", label: "Терминалы" },
  { key: "delivery", label: "Доставка" },
];

const tabContent: Record<Tab, React.ReactNode> = {
  all: <div className="px-5 text-center text-2xl">Контент «Все»</div>,
  branch: <div className="px-5 text-center text-2xl">Контент «Отделение»</div>,
  terminal: (
    <div className="px-5 relative flex items-center flex-col">
      <InputGroup className="bg-[#CFCFCF] h-10 dark:bg-[#070F19]">
        <InputGroupInput placeholder="Поиск" />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <div className="absolute top-[250px] flex flex-col items-center">
        <Image
          src="/gre.png"
          alt="Terminal"
          width="65"
          height="35"
          className="rotate-1 w-auto h-auto"
          priority
        />
        <p className="font-bold text-[15px] text-[#555555]">
          Ведите данные <br />
          для поиска
        </p>
      </div>
    </div>
  ),
  delivery: <div className="px-5 text-center text-2xl">Контент «Доставка»</div>,
};

export const Online: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <div className={cn("px", className)}>
      <span className="text-[11px] text-[#238CEE] font-medium cursor-pointer ml-5 hover:underline">
        Убрать Список
      </span>

      {/* Навигация */}
      <nav className="relative flex w-full justify-between px-5 mt-4 border-b-2 border-[#585353]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative z-10 px-2 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            {/* Текст вкладки */}
            <span
              className={cn(
                activeTab === tab.key ? "" : "text-gray-500 dark:text-white",
              )}
            >
              {tab.label}
            </span>

            {/* Активная вкладка — оборачиваем в motion.span с layoutId */}
            {activeTab === tab.key && (
              <motion.span
                layoutId="activeTabUnderline" // ← магия здесь!
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#07FF2F]"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Анимированный контент */}
      <div className="mt-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
