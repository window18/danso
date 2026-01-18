import React from 'react';
import Image from 'next/image';
const PageActions = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-[200px] px-4 py-4 flex flex-col gap-6">
        <h2 className="font-bold text-[17px]">Действия</h2>
        <div className="flex gap-2 items-center">
          <Image
            src="/icons-admin-svg/books.svg"
            alt="User Image"
            width={50}
            height={50}
            className="w-[50px] h-[45px]"
          />
          <span className="font-light text-[14px]">
            Опредилите действие
          </span>
        </div>
      </div>
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-[90px] px-[45px] items-center flex gap-10">
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/ss.png"
            alt="copy"
            width={30}
            height={23}
            className="w-[30px] h-[23px]"
          />
          <span className="font-light text-[14px]">Добавить</span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/copy.png"
            alt="copy"
            width={30}
            height={23}
            className="w-[30px] h-[23px]"
          />
          <span className="font-light text-[14px]">Изменить</span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/delete.png"
            alt="copy"
            width={25}
            height={23}
            className="w-[25px] h-[23px]"
          />
          <span className="font-light text-[14px]">Удалить </span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <span className="font-light text-[14px]">Фильтр:</span>
          <div className="w-[140px] h-7 bg-[#919191]"></div>
        </div>
      </div>
      <div className="px-10 py-10 h-full overflow-hidden bg-[#DBDBDB] dark:bg-[#0F1827]">
        <div className="h-full overflow-y-auto table-scroll">
          <table className="w-full text-center bg-white dark:bg-[#070F19]">
            <thead className="bg-white dark:bg-[#070F19] sticky top-0 outline-2 outline-[#585353] h-11">
              <tr>
                <th className="text-2xl">ℕ</th>
                <th><span className='border-x-2 flex h-10 border-[#585353] justify-center items-center'>Название</span></th>
                <th>Отключить </th>
                <th><span className='border-x-2 flex h-10 border-[#585353] justify-center items-center'>Описание</span></th>
                <th className=" w-2/6"></th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i}>
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">Камера {i + 1}</td>
                  <td className="p-2 border">192.168.1.1</td>
                  <td className="p-2 border">1980 / 1080</td>
                  <td className=""></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageActions;