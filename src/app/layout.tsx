import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/shared/header";
import { Providers } from "./providers";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danso Digital | Главная",
  description: "pass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable} suppressHydrationWarning>
      <body className={` bg-[white] dark:bg-[#0C131F]`}>
        <main className="h-screen flex flex-col">
          <Providers>
            <Header></Header>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
