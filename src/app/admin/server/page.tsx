"use client";
import PageInfo from "@/src/components/shared/adminShared/server/PageInfo";
import PageUsers from "@/src/components/shared/adminShared/server/PageUsers";
import PageEvents from "@/src/components/shared/adminShared/server/PageEvents";
import { useState } from "react";
import PageDiskUsage from "@/src/components/shared/adminShared/server/PageDiskUsage";
import PageCameraUsage from "@/src/components/shared/adminShared/server/PageCameraUsage";
import PageConnections from "@/src/components/shared/adminShared/server/PageConnections";
import PageSchedule from "@/src/components/shared/adminShared/server/PageSchedule";
import PageActions from "@/src/components/shared/adminShared/server/PageActions";
import PageScripts from "@/src/components/shared/adminShared/server/PageScripts";
import PageRecordingProfiles from "@/src/components/shared/adminShared/server/PageRecordingProfiles";
import PageDisks from "@/src/components/shared/adminShared/server/PageDisks";

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
    <div className="py-[30px] px-[55px] flex gap-5 admin">
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-full w-[300px] rounded-lg flex flex-col">
        {navList.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedNav(item)}
            className={`
              relative py-3 px-4 cursor-pointer transition-all duration-200
              hover:bg-[#E5E5E5] dark:hover:bg-[#1E293B] hover:rounded-lg
              ${
                selectedNav === item
                  ? "bg-[#E5E5E5] dark:bg-[#1E293B] font-medium rounded-lg"
                  : ""
              }
            `}
          >
            {selectedNav === item && (
              <div className="absolute right-0 top-2 bottom-0 w-1 bg-blue-600 rounded-md h-8" />
            )}

            <span className="relative z-10">{item}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full">
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
