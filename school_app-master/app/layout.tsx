import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/page";
import Navbar from "./components/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full  pb-[15px]">
          <div>
            <Sidebar />
            <Navbar />
          </div>
          <div className="mt-[6rem] px-[28px] py-4 ml-64 w-[100%] overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
