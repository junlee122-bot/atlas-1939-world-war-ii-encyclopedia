import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, GitBranch, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "아카이브 소개", description: "아틀라스 1939의 편집 원칙과 기술 구조를 소개합니다." };

const principles = [
  { icon: BookOpenCheck, title: "근거 중심", text: "날짜와 수치는 단일 출처에 의존하지 않고 연구 합의와 불확실성 범위를 함께 표시합니다." },
  { icon: Scale, title: "논쟁의 분리", text: "사실관계, 인과 해석, 도덕적 판단을 구분하고 중요한 역사학 논쟁은 복수 관점을 소개합니다." },
  { icon: ShieldCheck, title: "피해자 존중", text: "학살·성폭력·강제동원을 선정적으로 소비하지 않고 구조와 책임, 생존자의 목소리를 중심에 둡니다." },
  { icon: GitBranch, title: "열린 확장", text: "문서 데이터와 화면을 분리해 새로운 전역·인물·지역사를 지속적으로 추가할 수 있습니다." },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero page-width"><p className="page-eyebrow">ABOUT THE ARCHIVE</p><h1>더 많은 정보보다,<br /><em>더 나은 연결을.</em></h1><p>아틀라스 1939는 제2차 세계대전을 전투 목록으로 축소하지 않는 한국어 지식 프로젝트입니다. 세계적 규모와 지역의 구체성, 국가의 전략과 개인의 경험을 한 구조 안에서 연결합니다.</p></section>
      <section className="about-manifesto page-width"><span>OUR PURPOSE</span><blockquote>“전쟁은 장군의 지도 위에서만 일어나지 않는다.<br />공장과 부엌, 철도와 수용소, 식민지와 난민의 길에서도 일어난다.”</blockquote></section>
      <section className="principle-cards page-width">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon size={22} /><span>0{index + 1}</span></div><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="scope-section"><div className="page-width scope-grid"><div><p className="section-kicker">CURRENT SCOPE</p><h2>완성된 책이 아니라<br />성장하는 아카이브입니다.</h2></div><div><p>현재 버전은 총론과 8개 주제 영역의 핵심 문서를 담은 기반판입니다. ‘모든 정보’는 한 번에 완성되는 양이 아니므로, 문서별 참고문헌·상호 링크·검토일을 갖는 구조로 만들었습니다.</p><p>다음 확장 우선순위는 참전국별 문서, 주요 인물·무기 데이터베이스, 전투 지도, 1차 사료 인용과 문서별 주석 체계입니다.</p><Link href="/explore">현재 문서 살펴보기 <ArrowRight size={17} /></Link></div></div></section>
    </main>
  );
}
