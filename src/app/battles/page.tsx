import type { Metadata } from "next";
import { BookMarked, CheckCircle2, CircleHelp, Sparkles } from "lucide-react";
import { BattleExplorer } from "@/components/battle-explorer";
import { battles, battleTheaters } from "@/data/battles";

export const metadata: Metadata = {
  title: "심층 전투 도감",
  description: "제2차 세계대전 주요 전투의 배경, 병력, 작전, 시간순 전개, 승패 요인과 야사를 출처와 함께 읽습니다.",
};

const evidence = [
  { icon: CheckCircle2, label: "기록 확인", text: "전쟁일지·공식 기록·복수 연구에서 골격이 확인되는 이야기" },
  { icon: CircleHelp, label: "해석 논쟁", text: "사실관계는 있으나 동기나 영향에 관해 연구자 견해가 갈리는 이야기" },
  { icon: Sparkles, label: "후대의 전설", text: "널리 알려졌지만 과장되었거나 사료로 확정하기 어려운 이야기" },
];

export default function BattlesPage() {
  return (
    <main id="main-content" className="battles-page">
      <section className="battle-archive-hero">
        <div className="page-width battle-archive-hero-grid">
          <div>
            <p className="page-eyebrow">BATTLE DOSSIERS · 1939–1945</p>
            <h1>지도 위의 화살표를 넘어,<br /><em>전투가 움직인 방식</em></h1>
          </div>
          <div className="battle-archive-intro">
            <p>왜 이곳에서 싸웠는지부터 누가 무엇을 오판했는지까지. 병력 숫자만 나열하지 않고 계획, 보급, 지형, 통신, 개인의 판단을 시간순으로 엮었습니다.</p>
            <div><strong>{battles.length}</strong><span>개의 전투·작전<br />심층 도감</span></div>
          </div>
        </div>
      </section>

      <section className="evidence-guide page-width" aria-labelledby="evidence-title">
        <div className="evidence-guide-heading"><BookMarked size={21} /><div><p>STORY CHECK</p><h2 id="evidence-title">야사는 흥미롭게, 신뢰도는 분명하게</h2></div></div>
        <div className="evidence-guide-items">
          {evidence.map(({ icon: Icon, label, text }) => <div key={label}><Icon size={17} /><p><strong>{label}</strong>{text}</p></div>)}
        </div>
      </section>

      <section className="battle-list-section page-width">
        <div className="battle-list-heading"><span>THE COMPLETE INDEX</span><h2>전역별로 살펴보기</h2><p>각 수치는 출처와 산정 기준에 따라 달라질 수 있어, 필요한 경우 범위와 주의점을 함께 적었습니다.</p></div>
        <BattleExplorer battles={battles} theaters={battleTheaters} />
      </section>
    </main>
  );
}
