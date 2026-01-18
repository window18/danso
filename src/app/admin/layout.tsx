import type { Metadata } from "next";
import { Header } from "@/src/components/shared/adminShared/header";
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Danso Digital | Администрирование",
  description: "",
};

export default function Admin({ children }: Props) {
  return (
    <div className="admin-home">
      <Header />
      {children}
    </div>
  );
}
