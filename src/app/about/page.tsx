import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, GitBranch, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "아카이브 소개", description: "아틀라스 1939의 편집 원칙과 기술 구조를 소개합니다." };

const principles = [
  { icon: BookOpenCheck, title: "근거 중심", text: "날짜와 수치를 출처에서 떼어 놓지 않고, 연구 합의와 불확실성의 범위를 함께 제시합니다." },
  { icon: Scale, title: "사실과 해석의 분리", text: "사실관계, 인과 해석, 후대의 기억을 구분합니다. 야사는 기록 확인·해석 논쟁·후대의 전설로 표시합니다." },
  { icon: ShieldCheck, title: "피해자의 존엄", text: "학살·성폭력·강제동원을 선정적으로 소비하지 않고 구조의 책임과 생존자의 목소리를 중심에 둡니다." },
  { icon: GitBranch, title: "열린 확장", text: "일반 문서와 전투 도감을 분리한 데이터 구조로 국가·인물·지역사를 지속해서 추가할 수 있습니다." },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero page-width"><p className="page-eyebrow">ABOUT THE ARCHIVE</p><h1>더 많은 정보보다,<br /><em>더 나은 연결.</em></h1><p>아틀라스 1939는 제2차 세계대전을 전투 목록으로 축소하지 않는 한국어 디지털 아카이브입니다. 전쟁의 규모와 지휘관의 결정을 국가의 동원 체제, 점령지의 경험, 보급과 기술, 민간인의 삶 속에 연결합니다.</p></section>
      <section className="about-manifesto page-width"><span>OUR PURPOSE</span><blockquote>“전쟁은 장군의 지도 위에서만 일어나지 않았다.<br />공장과 부엌, 철도와 수용소, 식민지와 피난길에서도 일어났다.”</blockquote></section>
      <section className="principle-cards page-width">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon size={22} /><span>0{index + 1}</span></div><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="scope-section"><div className="page-width scope-grid"><div><p className="section-kicker">CURRENT SCOPE</p><h2>완성된 책이 아니라,<br />검증하며 확장하는 위키.</h2></div><div><p>현재 버전은 24개 주제 문서, 13개 주요 전투·작전 심층 도감, 1937–1945 핵심 연표를 제공합니다. 전투 도감은 배경, 전력, 작전 구상, 시간순 경과, 승패 요인, 전후 영향, 야사 검증, 관련 서적의 관점을 한 문서에 모았습니다.</p><p>책의 관점은 저작권이 있는 문장을 복사하지 않고 핵심 논지를 풀어쓴 요약으로 제공합니다. 병력과 피해 수치는 집계 기준이 다르면 주의점을 표시하고, 공식 기록과 최신 연구가 충돌할 때는 단정 대신 논쟁의 범위를 설명합니다.</p><Link href="/battles">심층 전투 도감 살펴보기 <ArrowRight size={17} /></Link></div></div></section>
    </main>
  );
}
