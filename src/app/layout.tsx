import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://world-war-ii-encyclopedia.vercel.app"),
  title: {
    default: "아틀라스 1939 — 제2차 세계대전 백과사전",
    template: "%s | 아틀라스 1939",
  },
  description:
    "제2차 세계대전의 전선, 인물, 전투, 사회, 기술과 전후 세계를 맥락과 근거 중심으로 탐구하는 한국어 디지털 백과사전.",
  keywords: ["제2차 세계대전", "2차 세계대전", "세계사", "전쟁사", "WWII", "한국사"],
  icons: { icon: "/atlas-mark.svg" },
  openGraph: {
    title: "아틀라스 1939 — 제2차 세계대전 백과사전",
    description: "전쟁의 모든 층위를 연결해서 읽는 한국어 디지털 아카이브",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
