import type { Metadata } from "next";
import { Header } from "@/src/components/shared/adminShared/header";

export const metadata: Metadata = {
  title: "Danso Digital | Администрирование",
  description: "pass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full flex flex-col">
      <Header />
      {children}
    </main>
  );
}
