import Image from "next/image";

export const metadata = {
  title: "Danso Digital | Поиск по ШК",
};
export default function Admin() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#0C131F]">
      <Image
        src="https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1731947043/prod/content/dam/CRO-Images-2024/Cars/CR-Cars-InlineHero-10-Most-Satisfying-Cars-and-SUVs-1124"
        alt="Terminal"
        width="652"
        height="367"
        priority
      />
    </div>
  );
}
