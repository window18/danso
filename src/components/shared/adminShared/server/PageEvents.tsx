import Image from "next/image";
import React from "react";

const PageEvents = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className=" bg-[#DBDBDB] dark:bg-[#0F1827] max-h-[180px] px-4 py-4 flex flex-col gap-4">
        <h2 className="font-bold text-[17px]">Журнал событий</h2>
        <div className="flex items-center gap-3">
          <Image
            src="/icons-admin-svg/events.svg"
            width="50"
            height="50"
            alt="Job Icon"
            className="w-[50px] h-[50px]"
          />
          <p className="font-light text-[14px]">Журнал Событий сервера</p>
        </div>
      </div>
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] py-10 px-20 grid xl:grid-cols-4 items-center gap-10 md:grid-cols-2 sm:grid-cols-1">
        <div className="cursor-pointer flex items-center gap-4">
          <Image
            src="/free-icon-search-11741045 1.png"
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
            alt="icon search"
          />
          <span className="font-light text-[14px]">Поиск</span>
        </div>
        <div className="cursor-pointer flex items-center gap-4">
          <Image
            src="/free-icon-refresh-2893384 1.png"
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
            alt="icon search"
          />
          <span className="font-light text-[14px]">Обновить</span>
        </div>
        <div className="cursor-pointer flex items-center gap-4">
          <Image
            src="/sss.png"
            width={30}
            height={20}
            className="w-[30px] h-5"
            alt="icon search"
          />
          <span className="font-light text-[14px]">Просмотреть</span>
        </div>
        <div className="cursor-pointer flex items-center gap-4">
          <Image
            src="/free-icon-floppy-disk-595471 2.png"
            width={20}
            height={20}
            className="w-5 h-5"
            alt="icon search"
          />
          <span className="font-light text-[14px]">Экспортировать</span>
        </div>
      </div>
      <div className="px-10 py-10 h-full overflow-hidden bg-[#DBDBDB] dark:bg-[#0F1827]">
        <div className="h-full overflow-y-auto table-scroll">
          <table className="w-full text-center bg-white dark:bg-[#070F19]">
            <thead className="bg-white dark:bg-[#070F19] sticky top-0">
              <tr className="outline-2 outline-[#585353]">
                <th className="p-2">Типы</th>
                <th><span className="flex justify-center items-center border-x-2 h-10 border-[#585353]">События</span></th>
                <th className="p-2">История</th>
                <th><span className="flex justify-center items-center border-x-2 h-10 border-[#585353]">Состояние</span></th>
                <th className="p-2 w-2/6"></th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i}>
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">Элемент {i + 1}</td>
                  <td className="p-2 border">Данные</td>
                  <td className="p-2 border">Активный</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageEvents;
