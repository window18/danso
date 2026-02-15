"use client"
import { useState } from "react";
import { Aside } from "../components/shared/aside";
import { ArrowLeftFromLine } from "lucide-react"
import Image from "next/image";

export default function Home() {
  const template = [
    {
      id: 1,
      title: "1 камера",
      template: (
        <div className="bg-[#E3E3E3] w-full h-full rounded-md dark:bg-[#0F1827]">
        </div>
      ),
      img: "/camera1.svg"
    },
    {
      id: 2,
      title: "4 камеры",
      template: (
        <div className="w-full h-full grid grid-cols-2 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
      img: "/camera2.svg"
    },
    {
      id: 3,
      title: "6 камер",
      template: (
        <div className="w-full h-full grid grid-cols-[3fr_1fr] gap-3">
          <div className="w-full h-full grid grid-rows-[2fr_1fr] gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
        </div>
      ),
      img: "/camera0.svg"
    },
    {
      id: 4,
      title: "7 камер",
      template: (
        <div className="w-full h-full grid grid-cols-2 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
      img: "/camera3.svg"

    },
    {
      id: 5,
      title: "8 камер",
      template: (
        <div className="w-full h-full grid grid-cols-[3fr_1fr] gap-3">
          <div className="grid grid-rows-[2fr_1fr] gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
        </div>
      ),
      img: "/camera4.svg"

    },
    {
      id: 6,
      title: "9 камер",
      template: (
        <div className="w-full h-full grid grid-cols-3 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
      img: "/camera5.svg"

    },
    {
      id: 7,
      title: "10 камер",
      template: (
        <div className="w-full h-full grid grid-cols-2 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
      img: "/camera6.svg"

    },
    {
      id: 8,
      title: "13 камер",
      template: (
        <div className="w-full h-full grid grid-cols-[1fr_3fr_1fr] gap-3">
          {/* cols1 */}
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/* cols2 */}
          <div className="grid grid-rows-[1fr_2fr_1fr] gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            </div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            </div>
          </div>
          {/* cols3 */}
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
        </div>
      ),
      img: "/camera7.svg"

    },
    {
      id: 9,
      title: "16 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
      img: "/camera8.svg"

    },
    {
      id: 10,
      title: "19 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera9.svg"

    },
    {
      id: 11,
      title: "22 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera10.svg"

    },
    {
      id: 12,
      title: "25 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera11.svg"

    },
    {
      id: 13,
      title: "28 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera12.svg"

    },
    {
      id: 14,
      title: "31 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera13.svg"

    },
    {
      id: 15,
      title: "34 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera14.svg"

    },
    {
      id: 16,
      title: "40 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera15.svg"

    },
    {
      id: 17,
      title: "46 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera16.svg"

    },
    {
      id: 18,
      title: "53 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
        </div>
      ),
      img: "/camera17.svg"

    },
    {
      id: 19,
      title: "58 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
        </div>
      ),
      img: "/camera18.svg"

    },
    {
      id: 20,
      title: "61 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
        </div>
      ),
      img: "/camera19.svg"

    },
    {
      id: 21,
      title: "64 камер",
      template: (
        <div className="w-full h-full grid grid-cols-4 gap-3">
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          {/*  */}
        </div>
      ),
      img: "/camera20.svg"

    },
  ];
  const [addedTemplates, setAddedTemplates] = useState([]);
  const [, setError] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [changeInput, setChangeInput] = useState("");
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [openTemplate, setOpenTemplate] = useState(false)
  const handleAdd = () => {
    setError("");

    if (!activeTemplate) {
      setError("Выберите раскладку");
      return;
    }

    if (!changeInput.trim()) {
      setError("Введите название");
      return;
    }

    const newTemplate = {
      id: Date.now(),
      title: changeInput.trim(),
      template: activeTemplate.template,
    };

    setAddedTemplates([...addedTemplates, newTemplate]);
    setChangeInput("");
    setActiveTemplate(null);
    setOpenTemplate(false)
  };

  const handleCancel = () => {
    setChangeInput("");
    setActiveTemplate(null);
    setError("");
    setOpenTemplate(false)
  };

  const handleDelete = (id) => {
    setAddedTemplates(addedTemplates.filter((item) => item.id !== id));
    if (selectedTemplate?.id === id) setSelectedTemplate(null);
  };
  return (
    <div className="p-4 flex gap-8 home">
      <Aside />
      <section className="w-full relative flex flex-col gap-6">
        <header className="flex gap-10 h-11">
          <button className="text-[14px] h-full px-[22px] rounded-md bg-black cursor-pointer text-white" onClick={() => setOpenTemplate(prev => !prev)}>Сделать роскладку</button>
          <select
            className="h-full p-2 rounded-md dark:text-white outline-none cursor-pointer dark:bg-[#070F19] bg-[#E3E3E3] text-black"
            value={selectedTemplate?.id || ""}
            onChange={(e) =>
              setSelectedTemplate(
                addedTemplates.find(
                  (t) => t.id === Number(e.target.value),
                ),
              )
            }
          >
            <option value="select">
              Выбрать раскладку
            </option>
            {addedTemplates.map((option) => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </select>
          <button className="dark:bg-[#070F19] dark:text-white text-[14px] px-[22px] py-2 rounded-md bg-[#E3E3E3] text-black cursor-pointer">Добавить камеру</button>
        </header>
        {/* Modals */}
        {openTemplate && (
          <div className="fixed inset-0 flex items-center justify-center" onClick={() => setOpenTemplate(false)}>
            <div className="w-[650px] h-[350px] dark:bg-slate-800  rounded-md flex bg-[#BABABA] relative" onClick={(e) => e.stopPropagation()}>
              <div className="h-full w-[350px] px-2 flex flex-col gap-2 py-2 cursor-pointer overflow-auto table-scroll">
                {template.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full py-1.5 rounded-xl text-center flex items-center gap-3 px-3 ${activeTemplate?.id === item.id
                      ? "bg-gray-500 text-white"
                      : "dark:bg-[#0F1827] bg-[#E3E3E3]"
                      }`}
                    onClick={() => {
                      setActiveTemplate(item);
                      setError("");
                    }}
                  >
                    <Image src={item.img} width={50} height={30} alt="img" />

                    {item.title}
                  </div>
                ))}
              </div>
              <div className="w-full mt-5 mr-5 px-10 pt-5">
                <input
                  type="text"
                  placeholder="Введите название"
                  className="w-full outline-none bg-white/40 rounded-xl text-black dark:text-white px-5 mb-1"
                  value={changeInput}
                  onChange={(e) => {
                    setChangeInput(e.target.value);
                    setError("");
                  }}
                />
                <div className="w-full h-60 overflow-y-auto table-scroll">
                  {addedTemplates.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center w-full py-1.5 rounded-xl text-center bg-gray-400 mb-1 px-2 cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    >
                      <span
                        className="cursor-pointer"
                        onClick={() => setActiveTemplate(item)}
                      >
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full flex gap-20 absolute bottom-2 left-80">
                  <button
                    className="bg-red-500 text-white px-10 py-1 rounded-xl cursor-pointer"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={!changeInput.trim() || !activeTemplate}
                    className={`px-10 py-1 rounded-xl text-white ${!changeInput.trim() || !activeTemplate
                      ? "bg-green-500/40 cursor-not-allowed"
                      : "bg-green-500 cursor-pointer"
                      }`}
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

        )}
        <section className="h-full">
          {selectedTemplate && (
            <>
              {selectedTemplate.template}
            </>
          )}
          {!selectedTemplate &&
            <div className="bg-[#E3E3E3] w-full h-full rounded-md flex items-center justify-center dark:bg-[#0F1827]">
              <div>
                <ArrowLeftFromLine size={100}/>
                <p>Выберите Камеру <br />
                  со списка слева
                </p>
              </div>
            </div>}
        </section>
      </section>
    </div>
  );
}
