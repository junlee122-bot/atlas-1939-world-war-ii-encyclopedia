import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, CircleHelp, Compass, Flag, MapPin, Shield, Sparkles, Swords, Users } from "lucide-react";
import { BattleCard } from "@/components/battle-card";
import { battles, getBattle, getRelatedBattles, type EvidenceLevel } from "@/data/battles";
import { articles } from "@/data/wiki";

type BattlePageProps = { params: Promise<{ slug: string }> };

const evidenceIcons = { "기록 확인": CheckCircle2, "해석 논쟁": CircleHelp, "후대의 전설": Sparkles };

function evidenceClass(level: EvidenceLevel) {
  if (level === "기록 확인") return "verified";
  if (level === "해석 논쟁") return "debated";
  return "legend";
}

export function generateStaticParams() {
  return battles.map((battle) => ({ slug: battle.slug }));
}

export async function generateMetadata({ params }: BattlePageProps): Promise<Metadata> {
  const battle = getBattle((await params).slug);
  if (!battle) return {};
  return {
    title: `${battle.title} 심층 도감`,
    description: battle.summary,
  };
}

export default async function BattlePage({ params }: BattlePageProps) {
  const battle = getBattle((await params).slug);
  if (!battle) notFound();

  const relatedBattles = getRelatedBattles(battle);
  const relatedArticle = battle.relatedArticle ? articles.find((article) => article.slug === battle.relatedArticle) : undefined;
  const contents = [
    ["background", "전투 이전"], ["forces", "양측 전력"], ["plans", "작전 구상"], ["chronology", "시간순 전개"],
    ["decision", "승패를 가른 것"], ["aftermath", "결과와 영향"], ["stories", "야사와 검증"], ["books", "책의 관점"], ["sources", "출처"],
  ];

  return (
    <main id="main-content" className="battle-detail">
      <section className="battle-detail-hero" style={{ "--battle-accent": battle.accent } as CSSProperties}>
        <div className="page-width">
          <Link className="battle-back" href="/battles"><ArrowLeft size={15} /> 심층 전투 도감</Link>
          <div className="battle-detail-hero-grid">
            <div>
              <p className="page-eyebrow">{battle.theater} · {battle.type}</p>
              <span className="battle-original">{battle.originalName}</span>
              <h1>{battle.title.split(" ").map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}</h1>
              <p className="battle-deck">{battle.summary}</p>
            </div>
            <div className="battle-quick-facts">
              <div><CalendarDays size={18} /><span>기간</span><strong>{battle.dates}</strong></div>
              <div><MapPin size={18} /><span>전장</span><strong>{battle.location}</strong></div>
              <div><Flag size={18} /><span>결과</span><strong>{battle.result}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <nav className="battle-section-nav" aria-label="문서 목차">
        <div className="page-width">{contents.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}</div>
      </nav>

      <div className="battle-body page-width">
        <section className="battle-reading-intro" aria-labelledby="reading-title">
          <div><p className="section-kicker">THREE-MINUTE BRIEF</p><h2 id="reading-title">먼저 잡아야 할 숫자</h2></div>
          <div className="battle-number-grid">
            {battle.keyNumbers.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong>{item.caveat && <p>{item.caveat}</p>}</div>)}
          </div>
        </section>

        <section className="dossier-section" id="background">
          <header><span>01</span><div><p>BEFORE THE BATTLE</p><h2>왜 이 전투가 벌어졌나</h2></div></header>
          <div className="longform-copy">{battle.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="dossier-section" id="forces">
          <header><span>02</span><div><p>FORCES &amp; COMMAND</p><h2>누가, 무엇을 가지고 싸웠나</h2></div></header>
          <div className="side-comparison">
            {battle.sides.map((side, index) => (
              <article key={side.name}>
                <div className="side-label"><Shield size={19} /><span>SIDE {index + 1}</span></div>
                <h3>{side.name}</h3>
                <dl><div><dt>주요 지휘관</dt><dd>{side.commanders.join(" · ")}</dd></div><div><dt>전력</dt><dd>{side.strength}</dd></div></dl>
                <p>{side.note}</p>
              </article>
            ))}
          </div>
          <p className="numbers-caution">※ 병력과 장비 수치는 집계 시점·포함 범위·가동 가능 여부에 따라 달라질 수 있습니다. 이 도감은 단일 숫자보다 비교 가능한 범위와 전력의 질을 함께 봅니다.</p>
        </section>

        <section className="dossier-section" id="plans">
          <header><span>03</span><div><p>OPERATIONAL DESIGN</p><h2>양측은 무엇을 노렸나</h2></div></header>
          <div className="plan-grid">
            {battle.plans.map((plan) => <article key={`${plan.side}-${plan.title}`}><span>{plan.side}</span><h3>{plan.title}</h3><p>{plan.description}</p></article>)}
          </div>
        </section>

        <section className="dossier-section" id="chronology">
          <header><span>04</span><div><p>BATTLE IN MOTION</p><h2>시간순으로 읽는 전투</h2></div></header>
          <ol className="phase-timeline">
            {battle.phases.map((phase, index) => <li key={`${phase.date}-${phase.title}`}><div className="phase-marker">{String(index + 1).padStart(2, "0")}</div><div><time>{phase.date}</time><h3>{phase.title}</h3><p>{phase.description}</p></div></li>)}
          </ol>
        </section>

        <section className="dossier-section" id="decision">
          <header><span>05</span><div><p>WHY IT TURNED</p><h2>승패를 가른 결정적 요인</h2></div></header>
          <div className="factor-grid">
            {battle.decisiveFactors.map((factor, index) => <article key={factor.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{factor.title}</h3><p>{factor.description}</p></article>)}
          </div>
        </section>

        <section className="dossier-section" id="aftermath">
          <header><span>06</span><div><p>AFTERMATH</p><h2>전투가 남긴 것</h2></div></header>
          <div className="aftermath-copy">{battle.aftermath.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="dossier-section story-section" id="stories">
          <header><span>07</span><div><p>STORIES UNDER REVIEW</p><h2>전장 밖의 이야기와 사실 확인</h2></div></header>
          <div className="story-grid">
            {battle.stories.map((story) => {
              const Icon = evidenceIcons[story.level];
              return <article className={evidenceClass(story.level)} key={story.title}><div className="evidence-badge"><Icon size={15} />{story.level}</div><h3>{story.title}</h3><p>{story.story}</p><div><strong>판정</strong><span>{story.verdict}</span></div></article>;
            })}
          </div>
        </section>

        <section className="dossier-section book-section" id="books">
          <header><span>08</span><div><p>READING THE HISTORIANS</p><h2>관련 서적에서 읽어낸 관점</h2></div></header>
          <p className="book-method"><BookOpen size={18} /> 아래 내용은 책의 문장을 옮긴 인용이 아니라, 핵심 논지를 이 문서의 맥락에 맞춰 풀어쓴 요약입니다.</p>
          <div className="book-note-grid">
            {battle.bookNotes.map((note) => <article key={`${note.book}-${note.author}`}><span>BOOK NOTE</span><h3>{note.book}</h3><small>{note.author}</small><p>{note.insight}</p>{note.url && <a href={note.url} target="_blank" rel="noreferrer">책 정보 확인 <ArrowUpRight size={14} /></a>}</article>)}
          </div>
        </section>

        <section className="dossier-section source-section" id="sources">
          <header><span>09</span><div><p>SOURCES &amp; FURTHER READING</p><h2>확인한 자료와 더 읽을 곳</h2></div></header>
          <div className="source-list">
            {battle.sources.map((source, index) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{source.publisher}</small><strong>{source.label}</strong></div><ArrowUpRight size={17} /></a>)}
          </div>
          {relatedArticle && <Link className="related-essay" href={`/article/${relatedArticle.slug}`}><Compass size={19} /><span><small>연결해서 읽기</small><strong>{relatedArticle.title}</strong></span><ArrowRight size={17} /></Link>}
        </section>

        <section className="more-battles">
          <div className="more-battles-heading"><div><Swords size={21} /><span>NEXT DOSSIERS</span></div><h2>같은 전쟁, 다른 전장을 이어 읽기</h2></div>
          <div className="battle-grid">{relatedBattles.map((item) => <BattleCard key={item.slug} battle={item} />)}</div>
          <Link className="all-battles-link" href="/battles"><Users size={16} /> 전투 도감 전체 보기 <ArrowRight size={16} /></Link>
        </section>
      </div>
    </main>
  );
}
