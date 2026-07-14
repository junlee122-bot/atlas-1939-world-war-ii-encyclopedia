import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Article } from "@/data/wiki";

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <Link className={`article-card${large ? " article-card-large" : ""}`} href={`/article/${article.slug}`} style={{ "--accent": article.accent } as React.CSSProperties}>
      <div className="card-topline">
        <span>{article.category}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <div className="card-body">
        <p className="card-period">{article.period}</p>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
      </div>
      <div className="card-meta">
        <span><Clock3 size={14} /> {article.readTime}</span>
        <span>{article.tags.slice(0, 2).join(" · ")}</span>
      </div>
    </Link>
  );
}
