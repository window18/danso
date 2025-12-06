"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Layout2x2 } from "./Layout2x2";

interface CameraTemplate {
  id: number;
  name: string;
  image: string;
  template?: React.ReactNode;
}

interface Layout {
  id: number;
  name: string;
  type: "2x2";
  cameras: CameraTemplate[];
}

export const RightAside: React.FC<{ className?: string }> = ({ className }) => {
  const itemList: CameraTemplate[] = [
    1, 4, 7, 8, 9, 10, 13, 16, 19, 22, 25, 28, 31, 34, 40, 46, 53, 58, 61, 64,
  ].map((num) => ({
    id: num,
    name: `Камера ${num}`,
    image: `/camera${num}.svg`,
    template: <></>,
  }));

  const [selectedItem, setSelectedItem] = useState<CameraTemplate | null>(null);
  const [newName, setNewName] = useState("");
  const [addedList, setAddedList] = useState<Layout[]>([]);
  const [selectedLayoutId, setSelectedLayoutId] = useState<number | null>(null);

  const selectedLayout = addedList.find((l) => l.id === selectedLayoutId);

  const handleAdd = () => {
    if (!newName.trim()) return;

    const cameras: CameraTemplate[] = Array(4)
      .fill(null)
      .map((_, i) => {
        if (i === 0 && selectedItem) {
          return selectedItem;
        }
        return {
          id: Date.now() + i,
          name: `Пустой слот ${i + 1}`,
          image: "/placeholder.svg",
          template: (
            <div className="w-full h-full bg-gray-800/70 flex items-center justify-center text-gray-400 text-xs rounded">
              Камера не назначена
            </div>
          ),
        };
      });

    const newLayout: Layout = {
      id: Date.now(),
      name: newName,
      type: "2x2",
      cameras,
    };

    setAddedList((prev) => [...prev, newLayout]);
    setSelectedLayoutId(newLayout.id);
    setNewName("");
    setSelectedItem(null);
  };

  const handleRemove = (id: number) => {
    setAddedList((prev) => prev.filter((item) => item.id !== id));
    if (selectedLayoutId === id) setSelectedLayoutId(null);
  };

  return (
    <div className={cn("w-full h-full flex flex-col gap-5", className)}>
      <div className="h-12 w-full flex items-center gap-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-[35px] cursor-pointer dark:bg-[#070F19] dark:text-white">
              Сделать раскладку
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[520px] h-[280px] bg-[#BABABA] dark:bg-[#070F19]"
            align="start"
          >
            <div className="w-full h-full flex items-center justify-between pr-6">
              {/* Левая колонка — твои 19 камер */}
              <div className="nice-scrollbar w-40 h-full flex flex-col overflow-y-auto px-2 py-2">
                {itemList.map((camera) => (
                  <div
                    key={camera.id}
                    onClick={() => setSelectedItem(camera)}
                    className={`flex items-center gap-2 cursor-pointer p-3 rounded transition-all ${
                      selectedItem?.id === camera.id
                        ? "bg-black/30 ring-2 ring-white"
                        : "hover:bg-black/15"
                    }`}
                  >
                    <Image
                      src={camera.image}
                      alt={camera.name}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <span className="font-light text-[15px]">
                      {camera.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-[280px] relative">
                <Input
                  placeholder="Введите название раскладки"
                  className="bg-white mb-2 dark:text-white"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  autoFocus
                />

                <div className="w-full h-[130px] relative">
                  <span className="bg-[#D9D9D9] w-1 h-full inline-block absolute rounded-full left-0"></span>
                  <div className="absolute left-6 overflow-auto h-[130px] w-full nice-scrollbar flex flex-col gap-2">
                    {addedList.map((item, index) => (
                      <div
                        key={item.id}
                        className="cursor-pointer dark:text-white flex gap-1 hover:text-red-500"
                        onClick={() => handleRemove(item.id)}
                      >
                        <span className="font-bold">{index + 1}.</span>
                        <h2>{item.name}</h2>
                      </div>
                    ))}
                  </div>
                  <span className="bg-[#D9D9D9] w-1 h-full inline-block absolute rounded-full right-0"></span>
                </div>

                <div className="flex gap-8 absolute bottom-4 right-0">
                  <Button
                    className="bg-[#FF9595] text-black h-[30px] hover:bg-[#FF9595]/60"
                    onClick={() => {
                      setNewName("");
                      setSelectedItem(null);
                    }}
                  >
                    Отменить
                  </Button>
                  <Button
                    className="bg-[#C8F4AE] text-black h-[30px] hover:bg-[#C8F4AE]/60"
                    onClick={handleAdd}
                    disabled={!newName.trim()}
                  >
                    Создать
                  </Button>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <select
          value={selectedLayoutId ?? ""}
          onChange={(e) => setSelectedLayoutId(Number(e.target.value) || null)}
          className="bg-[#E3E3E3] dark:bg-[#070F19] w-[220px] h-[35px] rounded-md px-3 text-sm"
        >
          <option value="" disabled>
            Выберите раскладку
          </option>
          {addedList.map((layout) => (
            <option key={layout.id} value={layout.id}>
              {layout.name}
            </option>
          ))}
        </select>

        <Button className="bg-[#E3E3E3] text-[#6C6C6C] dark:bg-[#070F19] dark:text-white">
          Добавить камеру
        </Button>
      </div>

      <div className="w-full h-full bg-[#E3E3E3] dark:bg-[#0F1827] rounded-lg p-4">
        {!selectedLayout ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Image
              src="/gra.png"
              alt=""
              width={85}
              height={55}
              className="mb-4 opacity-60"
            />
            <p className="text-[#555555] dark:text-gray-400 font-bold text-lg">
              Выберите раскладку из списка
            </p>
          </div>
        ) : (
          <div className="w-full h-full">
            <Layout2x2 cameras={selectedLayout.cameras} />
          </div>
        )}
      </div>
    </div>
  );
};
