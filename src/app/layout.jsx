import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/toastProvider/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "쿠팡 앱",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="ko">
      <body className={inter.className}>
        <ToastProvider />
        {children}
        </body>
    </html>
  );
}
