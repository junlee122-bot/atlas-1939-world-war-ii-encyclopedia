import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { BattleDossier } from "@/data/battles";

export function BattleCard({ battle }: { battle: BattleDossier }) {
  return (
    <Link className="battle-card" href={`/battle/${battle.slug}`}>
      <div className="battle-card-top">
        <span style={{ backgroundColor: battle.accent }} />
        <p>{battle.theater} · {battle.type}</p>
        <ArrowUpRight size={17} aria-hidden="true" />
      </div>
      <div className="battle-card-copy">
        <small>{battle.originalName}</small>
        <h2>{battle.title}</h2>
        <p>{battle.summary}</p>
      </div>
      <dl className="battle-card-meta">
        <div><dt><CalendarDays size={14} /> 기간</dt><dd>{battle.dates}</dd></div>
        <div><dt><MapPin size={14} /> 전장</dt><dd>{battle.location}</dd></div>
      </dl>
      <div className="battle-card-result"><span>결과</span><strong>{battle.result}</strong></div>
    </Link>
  );
}
