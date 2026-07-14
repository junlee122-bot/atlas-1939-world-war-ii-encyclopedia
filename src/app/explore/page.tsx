import type { Metadata } from "next";
import { Explorer } from "@/components/explorer";
import { articles, categories } from "@/data/wiki";

export const metadata: Metadata = { title: "전체 문서 탐색", description: "전선, 전투, 인물, 사회, 기술과 전후 세계를 주제별로 탐색합니다." };

export default async function ExplorePage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams;
  const availableCategories = categories.map((category) => category.name);
  const requestedCategory = params.category && availableCategories.includes(params.category as typeof availableCategories[number]) ? params.category : "전체";

  return (
    <main id="main-content" className="archive-page">
      <section className="archive-hero page-width">
        <p className="page-eyebrow">KNOWLEDGE ARCHIVE · {articles.length} ARTICLES</p>
        <h1>전쟁을 구성한<br /><em>모든 층위.</em></h1>
        <p>사건 하나를 고립해서 보지 않습니다. 원인에서 결과로, 전선에서 후방으로, 국가의 결정에서 한 사람의 경험으로 연결해 읽으세요.</p>
      </section>
      <section className="page-width archive-content">
        <Explorer articles={articles} categories={availableCategories} initialQuery={params.q ?? ""} initialCategory={requestedCategory} />
      </section>
    </main>
  );
}
