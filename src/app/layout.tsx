"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 다크모드 상태 관리
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 초기 모드 설정 (로컬스토리지 등 활용 가능)
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 다크모드 토글 버튼 */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-[#232323]/80 border border-gray-300 dark:border-gray-700 rounded-full shadow px-4 py-2 flex items-center gap-2 text-xl font-bold transition hover:scale-105 hover:shadow-lg"
          aria-label="다크모드 전환"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        {children}
      </body>
    </html>
  );
}
