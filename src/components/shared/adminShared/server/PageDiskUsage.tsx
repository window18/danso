import Image from "next/image";

const PageDiskUsage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='dark:bg-[#0F1827] h-[130px] w-full bg-[#DBDBDB] px-[25px] py-2.5'>
        <h1 className="font-bold text-[17px]">Использывание Дисков</h1>
        <div className="flex items-center mt-2.5">
          <Image src="/icons-admin-svg/disk.svg" alt="Disk" width={100} height={100} className="w-[50px] h-10"/>
          <p>Использывание дисков сервера</p>
        </div>
      </div>
      <div className="px-10 py-10 h-full overflow-hidden bg-[#DBDBDB] dark:bg-[#0F1827]">
        <div className="h-full overflow-y-auto table-scroll">
          <table className="w-full text-center bg-white dark:bg-[#070F19]">
            <thead className="bg-white dark:bg-[#070F19] sticky top-0 outline-2 outline-[#585353] h-11">
              <tr>  
                <th className="text-xl">ℕ</th>
                <th><span className="flex items-center justify-center border-x-2 border-[#585353] h-10">Диск</span></th>
                <th>Используесться</th>
                <th><span className="flex items-center justify-center border-x-2 border-[#585353] h-10">Остоток</span></th>
                <th>Резервирование</th>
                <th><span className="flex items-center justify-center border-x-2 border-[#585353] h-10">Работа</span></th>
                <th className="w-2/6"></th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i}>
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
// 9710
export default PageDiskUsage;