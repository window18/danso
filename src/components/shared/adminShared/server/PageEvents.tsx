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
      <div className="h-full bg-[#DBDBDB] dark:bg-[#0F1827] px-10 py-5">
        {/*table*/}
        <div className="w-full min-h-[300px] h-full bg-white dark:bg-[#070F19] overflow-auto relative nice-scrollbar flex flex-col">
          {/*thead*/}
          <div className="border-b-2 sticky top-0 bg-white dark:bg-[#070F19]">
            <span className="px-20 py-1 inline-block">Типы</span>
            <span className="px-20 py-1 border-x-2 inline-block">События</span>
            <span className="px-20 py-1 inline-block">История</span>
            <span className="px-20 py-1 border-x-2 inline-block">
              Состояние
            </span>
          </div>
          {/*tbody*/}
          <div className="flex flex-col gap-2">
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
            <div>
              <span className="px-20 py-1 inline-block">Типы</span>
              <span className="px-20 py-1 inline-block">События</span>
              <span className="px-20 py-1 inline-block">История</span>
              <span className="px-20 py-1 inline-block">Состояние</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEvents;
