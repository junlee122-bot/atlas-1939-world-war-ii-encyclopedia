import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { timeline } from "@/data/wiki";

export const metadata: Metadata = { title: "전쟁 연표", description: "1937년 중일전쟁에서 1945년 전범재판까지 주요 사건을 하나의 흐름으로 읽습니다." };

export default function TimelinePage() {
  const years = [...new Set(timeline.map((entry) => entry.year))];
  return (
    <main id="main-content" className="timeline-page">
      <section className="timeline-hero page-width">
        <div><p className="page-eyebrow">CHRONOLOGY · 1937—1945</p><h1>세계가 전쟁으로<br /><em>연결된 순간들.</em></h1></div>
        <p>유럽의 시작만으로는 전쟁 전체를 볼 수 없습니다. 동아시아의 장기전, 대서양 수송로, 소련과 미국의 참전, 점령지의 학살과 해방을 같은 시간축 위에 놓았습니다.</p>
      </section>
      <nav className="year-nav page-width" aria-label="연도 바로가기">{years.map((year) => <a key={year} href={`#year-${year}`}>{year}</a>)}</nav>
      <section className="chronology page-width">
        {years.map((year) => {
          const entries = timeline.filter((entry) => entry.year === year);
          return (
            <div className="year-group" id={`year-${year}`} key={year}>
              <div className="year-label"><span>{year}</span><small>{year === 1945 ? "종전과 새로운 질서" : `${entries.length}개의 전환점`}</small></div>
              <div className="year-events">
                {entries.map((entry) => <article className="timeline-event" key={entry.date}><div className="event-date"><CalendarDays size={15} />{entry.date.slice(5)}</div><span>{entry.theater}</span><h2>{entry.title}</h2><p>{entry.detail}</p></article>)}
              </div>
            </div>
          );
        })}
      </section>
      <section className="timeline-cta page-width"><p>날짜 뒤의 구조를 더 깊이 읽어보세요.</p><h2>연표는 답이 아니라<br />다음 질문의 시작입니다.</h2><Link href="/explore">주제별 문서 탐색 <ArrowRight size={17} /></Link></section>
    </main>
  );
}
