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
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-full justify-center items-center flex flex-col px-4 py-4">
        <table className="dark:bg-[#070F19] bg-[#FFFFFF] w-full h-full">
          <thead className="border-b-2 h-[45px]">
            <tr>
              <th className="w-20"></th>
              <th className="border-x-2">Имя</th>
              <th className="border-x-2">Группа</th>
              <th className="border-x-2">Отключить</th>
              <th className="border-x-2">Описание</th>
              <th className="">Состояние</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-r-2">1</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">2</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">3</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">4</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">5</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">6</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">7</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">8</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">9</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-r-2">10</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageUsers;
