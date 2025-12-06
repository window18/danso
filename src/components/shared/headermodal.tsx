"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function HeaderModal() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Image src="/fe.png" width="25" height="25" alt="icon" priority />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-[#070F19]  w-[372px] flex flex-col items-center absolute right-0 top-2">
        <div className="w-[95px] h-[95px] bg-blue-300 rounded-full flex items-center justify-center text-white font-bold text-[36px]">
          НД
        </div>
        <span className="inline-block my-1.5">
          Новацкий Денис <br />
          Олександрович
        </span>
        <span className="flex items-center text-red-700 font-extrabold">
          Owner{" "}
          <Image src="/wefewf.png" width="20" height="13" alt="icon" priority />
        </span>
        <span>novatskyi.d@densogrops.com</span>
        <span className="inline-block mt-5 cursor-pointer">Выход</span>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
