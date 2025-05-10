import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "販売管理システム",
  description: "勉強用の販売管理システムです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
