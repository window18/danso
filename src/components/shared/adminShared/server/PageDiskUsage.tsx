import Image from "next/image";

const PageDiskUsage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='dark:bg-[#0F1827] h-[130px] w-full bg-[#DBDBDB] px-[25px] py-2.5'>
        <h1>Использывание Дисков</h1>
        <div>
          <Image src="/disk.png" alt="Disk" width={100} height={100} className="w-[50px] h-[40px]"/>
        </div>
      </div>
      <div className='dark:bg-[#0F1827] h-full w-full bg-[#DBDBDB]'></div>
    </div>
  );
};

export default PageDiskUsage;