import type { Metadata } from "next";  
import "./globals.css";


export const metadata: Metadata = {
  title: "Bee‑英语练习平台",
  description: "打字模式练习英语的学习平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
