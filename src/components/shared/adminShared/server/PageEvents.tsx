import Image from "next/image";
import React from "react";

const PageEvents = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className=" bg-[#DBDBDB] dark:bg-[#0F1827] h-[180px] px-4 py-4 flex flex-col gap-4">
        <h2 className="font-bold text-[17px]">Журнал событий</h2>
        <div className="flex items-center gap-3">
          <Image
            src="/job.png"
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
      {/*<div className="h-full bg-[#DBDBDB] dark:bg-[#0F1827] px-10 pt-5 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scroll">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Имя</th>
                <th className="p-2 border">Значение</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i} className="odd:bg-gray-100">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">Элемент {i + 1}</td>
                  <td className="p-2 border">Данные</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>*/}
      <div className="px-10 py-10 h-full overflow-hidden bg-[#DBDBDB] dark:bg-[#0F1827]">
        <div className="h-full overflow-y-auto nice-scrollbar">
          <table className="w-full text-center bg-white dark:bg-[#070F19]">
            <thead className="bg-white dark:bg-[#070F19]">
              <tr className="border-b-2 border-[#DBDBDB] dark:border-[#585353]">
                <th className="p-2">Типы</th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">События</th>
                <th className="p-2">История</th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Состояние</th>
                <th className="p-2 w-2/6"></th>
              </tr>
            </thead>

            <tbody className="">
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i} className="">
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
