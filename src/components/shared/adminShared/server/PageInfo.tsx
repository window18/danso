import React from "react";

const PageInfo = () => {
  return (
    <div className="h-full flex flex-col gap-10">
      <div className="bg-[#DBDBDB] px-4 py-4 dark:bg-[#0F1827] w-full h-full">
        <h2 className="font-bold text-[17px]">Сервер</h2>
        <table className="text-[#6C6C6C] font-light text-[15px] mt-2 w-[600px]">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <th>Время запуска :</th>
              <th>00.00.2025 / 00:00:00</th>
            </tr>
            <tr>
              <th>Версия:</th>
              <th>2.5.0</th>
            </tr>
            <tr>
              <th>Индификатор хоста:</th>
              <th>Token SN:000000000</th>
            </tr>
            <tr>
              <th>Адрес:</th>
              <th>172.17.22.01</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-[#DBDBDB] px-4 py-4 dark:bg-[#0F1827] w-full h-full">
        <h2 className="font-bold text-[17px]">Окружения</h2>
        <table className="text-[#6C6C6C] font-light text-[15px] mt-2 w-[600px]">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <th>Версия ОС:</th>
              <th>Microsoft Windows NT 6..2.92.00.0</th>
            </tr>
            <tr>
              <th>Версия Framework:</th>
              <th>4.0.30319.42000</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-[#DBDBDB] px-4 py-4 dark:bg-[#0F1827] w-full h-full">
        <h2 className="font-bold text-[17px]">Состояние</h2>
        <table className="text-[#6C6C6C] font-light text-[15px] mt-2 w-[600px]">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <th>Загрузка CPU:</th>
              <th>0</th>
            </tr>
            <tr>
              <th>Занято програмой:</th>
              <th>00М</th>
            </tr>
            <tr>
              <th>Физичиская память:</th>
              <th>17768М / 25412М</th>
            </tr>
            <tr>
              <th>Вертуальная память:</th>
              <th>17942М / 28096М</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-[#DBDBDB] px-4 py-4 dark:bg-[#0F1827] w-full h-full">
        <h2 className="font-bold text-[17px]">Категории</h2>
      </div>
    </div>
  );
};

export default PageInfo;
