"use client";

import { useTheme } from "next-themes";
import { useState, useLayoutEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  /* eslint-disable react-hooks/set-state-in-effect */
  useLayoutEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-14 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer relative transition"
    >
      {/* Иконки на фоне */}
      <div className="absolute left-1 top-1 w-4 h-4 text-yellow-400 flex items-center justify-center">
        <Sun className="w-3 h-3" />
      </div>
      <div className="absolute right-1  top-1 w-4 h-4 text-gray-500 flex items-center justify-center">
        <Moon className="w-3 h-3" />
      </div>

      {/* Ползунок */}
      <div
        className={`w-5 h-5 rounded-full bg-white dark:bg-black transition-transform ${
          theme === "light" ? "translate-x-0" : "translate-x-8"
        }`}
      />
    </div>
  );
}
