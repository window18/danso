import React from "react";
import Image from "next/image";
const PageUsers = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-[200px] px-4 py-4 flex flex-col gap-6">
        <h2 className="font-bold text-[17px]">Пользыватели</h2>
        <div className="flex gap-10">
          <Image
            src="/jghj.png"
            alt="User Image"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
          <span className="font-light text-[14px]">
            Определите нобор пользывателей и групп с необходимыми правами
            доступа к обектам системы
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
            <thead className="bg-white dark:bg-[#070F19]">
              <tr className="border-b-2 border-[#DBDBDB] dark:border-[#585353]">
                <th className="p-2"></th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Имя</th>
                <th className="p-2">Группа</th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Отключить</th>
                <th className="p-2">Описание</th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Состояние</th>
                <th className="p-2 w-1/3"></th>
              </tr>
            </thead>

            <tbody className="">
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i} className="">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">Элемент {i + 1}</td>
                  <td className="p-2 border">Данные</td>
                  <td className="p-2 border">Активный</td>
                  <td className="p-2 border">Активный</td>
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

export default PageUsers;
