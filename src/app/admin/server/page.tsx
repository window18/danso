"use client";
import PageInfo from "@/src/components/shared/adminShared/server/PageInfo";
import PageUsers from "@/src/components/shared/adminShared/server/PageUsers";
import PageEvents from "@/src/components/shared/adminShared/server/PageEvents";
import React, { useState } from "react";

const Server = () => {
  const navList = [
    "Общая информация",
    "Пользователи",
    "Журнал событий",
    "Использование дисков",
    "Использование камер",
    "Подключения",
    "Расписание",
    "Действия",
    "Сценарии",
    "Профили записи",
    "Диски",
  ];

  const [selectedNav, setSelectedNav] = useState(navList[0]);

  return (
    <div className="h-full py-[30px] px-[55px] flex gap-5">
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-full w-[300px] rounded-lg flex flex-col overflow-hidden">
        {navList.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedNav(item)}
            className={`
              relative py-3 px-4 cursor-pointer transition-all duration-200
              hover:bg-[#E5E5E5] dark:hover:bg-[#1E293B]
              ${
                selectedNav === item
                  ? "bg-[#E5E5E5] dark:bg-[#1E293B] font-medium"
                  : ""
              }
            `}
          >
            {selectedNav === item && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-md" />
            )}

            <span className="relative z-10">{item}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full rounded-lg flex flex-col">
        {selectedNav === navList[0] && <PageInfo />}
        {selectedNav === navList[1] && <PageUsers />}
        {selectedNav === navList[2] && <PageEvents />}
        {selectedNav === navList[3] && <PageDiskUsage />}
        {selectedNav === navList[4] && <PageCameraUsage />}
        {selectedNav === navList[5] && <PageConnections />}
        {selectedNav === navList[6] && <PageSchedule />}
        {selectedNav === navList[7] && <PageActions />}
        {selectedNav === navList[8] && <PageScripts />}
        {selectedNav === navList[9] && <PageRecordingProfiles />}
        {selectedNav === navList[10] && <PageDisks />}
      </div>
    </div>
  );
};

export default Server;
