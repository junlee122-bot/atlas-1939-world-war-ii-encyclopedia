"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import type { Article } from "@/data/wiki";

export function Explorer({ articles, categories, initialQuery = "", initialCategory = "전체" }: { articles: Article[]; categories: string[]; initialQuery?: string; initialCategory?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = category === "전체" || article.category === category;
      const haystack = [article.title, article.subtitle, article.summary, article.period, ...article.tags].join(" ").toLowerCase();
      return categoryMatch && (!normalized || haystack.includes(normalized));
    });
  }, [articles, category, query]);

  return (
    <div className="explorer">
      <div className="explorer-controls">
        <label className="explorer-search">
          <Search size={19} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="예: 미드웨이, 강제동원, 전쟁경제" aria-label="문서 검색" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="검색어 지우기"><X size={16} /></button>}
        </label>
        <div className="result-count"><SlidersHorizontal size={16} /><strong>{results.length}</strong>개 문서</div>
      </div>
      <div className="filter-row" role="group" aria-label="카테고리 필터">
        {["전체", ...categories].map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} type="button">{item}</button>)}
      </div>
      {results.length > 0 ? (
        <div className="explorer-grid">{results.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      ) : (
        <div className="empty-state"><Search size={28} /><h2>일치하는 문서가 없습니다.</h2><p>검색어를 줄이거나 다른 주제 분류를 선택해보세요.</p><button type="button" onClick={() => { setQuery(""); setCategory("전체"); }}>필터 초기화</button></div>
      )}
    </div>
  );
}
