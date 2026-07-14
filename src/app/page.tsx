import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight, Clock3, Crosshair, Globe2, Landmark, Map, Radar, Scale, Search, Users } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { BattleCard } from "@/components/battle-card";
import { StrategicMap } from "@/components/strategic-map";
import { battles } from "@/data/battles";
import { articles, categories, featuredSlugs, timeline } from "@/data/wiki";

const categoryIcons = { compass: Globe2, map: Map, crosshair: Crosshair, users: Users, landmark: Landmark, radar: Radar, globe: Globe2, scale: Scale };

export default function Home() {
  const featured = featuredSlugs.map((slug) => articles.find((article) => article.slug === slug)!).filter(Boolean);
  const timelinePreview = timeline.filter((entry) => [1939, 1941, 1942, 1944, 1945].includes(entry.year)).filter((entry, index, all) => all.findIndex((item) => item.year === entry.year) === index);

  return (
    <main id="main-content">
      <section className="hero-shell">
        <div className="hero-grid page-width">
          <div className="hero-copy">
            <div className="eyebrow"><span>THE COMPLETE ARCHIVE</span><i />개정 2026.07</div>
            <h1>한 번의 전쟁이<br /><em>세계를 다시 그렸다.</em></h1>
            <p>전선과 전투를 넘어 정치, 경제, 기술, 민간인의 삶과 전후 질서까지. 흩어진 사건을 하나의 연결된 역사로 읽는 제2차 세계대전 아카이브.</p>
            <form className="hero-search" action="/explore">
              <Search size={20} aria-hidden="true" />
              <input name="q" aria-label="문서 검색" placeholder="인물, 전투, 작전, 국가를 검색하세요" />
              <button type="submit">탐색하기 <ArrowRight size={17} /></button>
            </form>
            <div className="popular-searches"><span>많이 찾는 주제</span><Link href="/article/stalingrad">스탈린그라드</Link><Link href="/article/holocaust">홀로코스트</Link><Link href="/article/korea-under-total-war">식민지 조선</Link></div>
          </div>
          <StrategicMap />
        </div>
        <div className="hero-stats page-width">
          <div><strong>{articles.length}</strong><span>심층 문서</span></div>
          <div><strong>{battles.length}</strong><span>전투 도감</span></div>
          <div><strong>{timeline.length}</strong><span>핵심 연표</span></div>
          <div><strong>8</strong><span>주제 영역</span></div>
          <p><BookOpen size={18} /> 모든 문서는 1차·2차 자료의 교차 검토를 지향합니다.</p>
        </div>
      </section>

      <section className="section page-width category-section">
        <div className="section-heading">
          <div><span className="section-index">01</span><p className="section-kicker">KNOWLEDGE MAP</p><h2>어디에서 시작할까요?</h2></div>
          <p>연대순으로 읽거나, 관심 있는 주제의 문을 여세요.<br />모든 문서는 서로 연결되어 있습니다.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            const href = category.name === "전투와 작전" ? "/battles" : `/explore?category=${encodeURIComponent(category.name)}`;
            return <Link href={href} className="category-card" key={category.name}><Icon size={22} /><div><h3>{category.name}</h3><p>{category.description}</p></div><span>{category.count.toString().padStart(2, "0")}</span><ChevronRight size={17} /></Link>;
          })}
        </div>
      </section>

      <section className="section featured-section">
        <div className="page-width">
          <div className="section-heading light-heading">
            <div><span className="section-index">02</span><p className="section-kicker">EDITOR&apos;S PATH</p><h2>전쟁을 이해하는 네 개의 입구</h2></div>
            <Link className="text-link" href="/explore">전체 문서 보기 <ArrowRight size={16} /></Link>
          </div>
          <div className="featured-grid">
            {featured.map((article, index) => <ArticleCard key={article.slug} article={article} large={index === 0} />)}
          </div>
        </div>
      </section>

      <section className="section page-width home-battles">
        <div className="section-heading">
          <div><span className="section-index">03</span><p className="section-kicker">DEEP BATTLE DOSSIERS</p><h2>전투는 하루에 결정되지 않았다</h2></div>
          <Link className="text-link dark-link" href="/battles">13개 전투 도감 보기 <ArrowRight size={16} /></Link>
        </div>
        <p className="home-battles-lead">전투 이전의 전략과 보급부터 분 단위의 전환점, 승패 이후의 기억과 논쟁까지. 널리 퍼진 야사에는 신뢰도 판정을 붙였습니다.</p>
        <div className="battle-grid">{battles.slice(0, 3).map((battle) => <BattleCard key={battle.slug} battle={battle} />)}</div>
      </section>

      <section className="section page-width timeline-home">
        <div className="section-heading">
          <div><span className="section-index">04</span><p className="section-kicker">WAR IN MOTION</p><h2>6년, 세계가 무너지고 다시 세워진 시간</h2></div>
          <Link className="text-link dark-link" href="/timeline">전체 연표 보기 <ArrowRight size={16} /></Link>
        </div>
        <div className="timeline-track">
          <div className="timeline-line" />
          {timelinePreview.map((entry, index) => (
            <div className="timeline-stop" key={entry.date}>
              <span className={index === 2 ? "active" : ""} />
              <strong>{entry.year}</strong>
              <small>{entry.theater}</small>
              <h3>{entry.title}</h3>
              <p>{entry.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="principles-band">
        <div className="page-width principles-grid">
          <div><span className="section-index">05</span><p className="section-kicker">HOW WE READ HISTORY</p><h2>숫자보다 맥락,<br />결론보다 근거.</h2></div>
          <div className="principle"><strong>01</strong><h3>다중 시점</h3><p>유럽 중심 연표를 넘어 중국, 식민지 조선, 동남아시아와 점령지의 경험을 함께 봅니다.</p></div>
          <div className="principle"><strong>02</strong><h3>개념의 구분</h3><p>사실과 해석, 직접 원인과 구조적 조건, 합의된 연구와 계속되는 논쟁을 구분합니다.</p></div>
          <div className="principle"><strong>03</strong><h3>인간 중심</h3><p>무기 제원과 지휘관의 결단만큼 민간인, 포로, 강제동원자와 생존자의 경험을 기록합니다.</p></div>
        </div>
      </section>

      <section className="closing-cta page-width">
        <div><Clock3 size={20} /><span>오늘의 읽기 · 약 24분</span></div>
        <h2>먼저, 전쟁 전체를<br />한눈에 조망해보세요.</h2>
        <Link href="/article/second-world-war">제2차 세계대전 총론 읽기 <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
