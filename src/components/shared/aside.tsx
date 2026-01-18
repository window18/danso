"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Online } from "./asideonline";
import { Archive } from "./asidearchive";

interface Props {
  className?: string;
}

export const Aside: React.FC<Props> = ({ className }) => {
  const [tab, setTab] = useState<"online" | "archive">("online");

  return (
    <div className={cn("w-[500px] flex flex-col gap-5", className)}>
      {/* ПЕРЕКЛЮЧАТЕЛЬ — БЕЗ ОТСТУПОВ, ЧИСТО И КРАСИВО */}
      <div className="w-full bg-[#E3E3E3] dark:bg-[#070F19] rounded-lg overflow-hidden">
        <div className="relative flex h-11">
          {/* Зелёная пилюлька — занимает ровно 50% ширины */}
          <motion.div
            className="absolute inset-y-0 w-1/2 bg-[#29DD51] rounded-lg"
            animate={{
              x: tab === "online" ? "0%" : "100%",
            }}
            initial={{ x: "0%" }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />

          {/* Кнопки — поверх пилюльки */}
          <button
            onClick={() => setTab("online")}
            className="cursor-pointer relative z-10 flex-1 text-sm font-medium text-center"
          >
            <span className={tab === "online" ? "text-white" : ""}>Онлайн</span>
          </button>

          <button
            onClick={() => setTab("archive")}
            className="cursor-pointer relative z-10 flex-1 text-sm font-medium text-center"
          >
            <span className={tab === "archive" ? "text-white" : ""}>Архив</span>
          </button>
        </div>
      </div>

      {/* Контент */}
      <div className="flex-1 w-full bg-[#E3E3E3] dark:bg-[#0F1827] rounded-lg overflow-hidden">
        {tab === "online" ? <Online /> : <Archive />}
      </div>
    </div>
  );
};
