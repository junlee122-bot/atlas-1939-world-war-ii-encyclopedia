"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { BattleCard } from "@/components/battle-card";
import type { BattleDossier } from "@/data/battles";

export function BattleExplorer({ battles, theaters }: { battles: BattleDossier[]; theaters: string[] }) {
  const [query, setQuery] = useState("");
  const [theater, setTheater] = useState("전체");

  const needle = query.trim().toLocaleLowerCase("ko");
  const filtered = battles.filter((battle) => {
    const theaterMatches = theater === "전체" || battle.theater === theater;
    const text = [battle.title, battle.originalName, battle.location, battle.type, battle.summary].join(" ").toLocaleLowerCase("ko");
    return theaterMatches && (!needle || text.includes(needle));
  });

  return (
    <div className="battle-explorer">
      <div className="battle-controls">
        <label className="battle-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">전투 검색</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="전투, 지명, 작전명 검색" />
        </label>
        <div className="theater-filters" aria-label="전역 필터">
          <span><SlidersHorizontal size={15} /> 전역</span>
          {theaters.map((item) => (
            <button className={theater === item ? "active" : ""} type="button" key={item} onClick={() => setTheater(item)}>{item}</button>
          ))}
        </div>
      </div>
      <p className="battle-count"><strong>{filtered.length}</strong>개의 심층 기록</p>
      {filtered.length ? (
        <div className="battle-grid">{filtered.map((battle) => <BattleCard key={battle.slug} battle={battle} />)}</div>
      ) : (
        <div className="battle-empty"><strong>일치하는 전투가 없습니다.</strong><p>검색어를 줄이거나 다른 전역을 선택해 보세요.</p></div>
      )}
    </div>
  );
}
