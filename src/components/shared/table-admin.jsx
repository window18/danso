"use client";
import { useState, useRef } from "react";
import camers from "@/data/data_camera.json";
import { CopyCheck, Copy } from "lucide-react";

const Table = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const timeoutRef = useRef(null);

  const copyToClipboard = async (value, index) => {
    await navigator.clipboard.writeText(value);

    setCopiedIndex(index);

    // очищаем прошлый таймер
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  return (
    <div className="overflow-auto table-scroll h-full">
      <table className="w-full text-center">
        <thead className="sticky top-0 dark:bg-[#0F1827]">
          <tr>
            <th className="pb-1.5">Камеры</th>
            <th className="pb-1.5">IP Адрес</th>
            <th className="pb-1.5">Действие</th>
          </tr>
        </thead>
        <tbody>
          {camers.map((cam, index) => (
            <tr key={cam.ip} className="border-b-2 border-black/50">
              <td className="pt-3 pb-1">{cam.name}</td>
              <td className="pt-3 pb-1">{cam.ip}</td>
              <td className="pt-3 pb-1">
                <button
                  onClick={() => copyToClipboard(cam.ip, index)}
                  className="cursor-pointer"
                >
                  {copiedIndex === index ? (
                    <CopyCheck size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
