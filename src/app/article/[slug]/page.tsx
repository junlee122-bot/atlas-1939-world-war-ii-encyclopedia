import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookMarked, CalendarRange, Clock3, Hash, LibraryBig, Quote } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { articles, getArticle, getRelatedArticles } from "@/data/wiki";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "문서를 찾을 수 없음" };
  return { title: article.title, description: article.summary, keywords: article.tags };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(article);

  return (
    <main id="main-content" className="article-page" style={{ "--article-accent": article.accent } as React.CSSProperties}>
      <section className="article-hero">
        <div className="page-width">
          <div className="article-breadcrumb"><Link href="/explore"><ArrowLeft size={15} /> 전체 문서</Link><span>/</span><span>{article.category}</span></div>
          <div className="article-hero-grid">
            <div><p className="page-eyebrow">{article.category.toUpperCase()} · ATLAS ENTRY</p><h1>{article.title}</h1><p className="article-subtitle">{article.subtitle}</p><div className="article-tags">{article.tags.map((tag) => <span key={tag}><Hash size={12} />{tag}</span>)}</div></div>
            <div className="article-abstract"><Quote size={22} /><p>{article.summary}</p></div>
          </div>
          <div className="article-meta"><span><CalendarRange size={16} />{article.period}</span><span><Clock3 size={16} />예상 읽기 {article.readTime}</span><span><BookMarked size={16} />검토용 참고문헌 {article.bibliography.length}종</span></div>
        </div>
      </section>

      <div className="article-layout page-width">
        <aside className="article-toc">
          <p>이 문서의 구성</p>
          <nav>{article.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</nav>
          <div className="toc-note"><LibraryBig size={18} /><span>마지막 검토</span><strong>2026.07.15</strong></div>
        </aside>
        <article className="article-body">
          <div className="fact-grid">{article.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div>
          {article.sections.map((section, index) => (
            <section id={section.id} className="content-section" key={section.id}>
              <div className="content-index">{String(index + 1).padStart(2, "0")}</div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
          <section className="bibliography">
            <div><BookMarked size={22} /><span>SELECTED BIBLIOGRAPHY</span></div>
            <h2>더 읽을 자료</h2>
            <ol>{article.bibliography.map((source) => <li key={source}>{source}</li>)}</ol>
            <p>이 목록은 입문을 위한 선별 참고문헌입니다. 서로 다른 연구 관점을 함께 읽는 것을 권장합니다.</p>
          </section>
        </article>
      </div>

      <section className="related-section"><div className="page-width"><div className="section-heading light-heading"><div><p className="section-kicker">CONNECTED HISTORY</p><h2>이어서 읽을 문서</h2></div><Link className="text-link" href="/explore">전체 아카이브 <ArrowRight size={16} /></Link></div><div className="related-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>
    </main>
  );
}
