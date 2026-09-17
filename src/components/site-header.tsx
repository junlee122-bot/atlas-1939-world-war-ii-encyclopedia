import Link from "next/link";
import { Menu, Search } from "lucide-react";

const navigation = [
  { href: "/explore", label: "주제 탐색" },
  { href: "/battles", label: "전투 도감" },
  { href: "/timeline", label: "전쟁 연표" },
  { href: "/article/korea-under-total-war", label: "한국과 전쟁" },
  { href: "/about", label: "소개" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="아틀라스 1939 홈">
          <span className="brand-mark" aria-hidden="true"><span>19</span><i /><span>45</span></span>
          <span className="brand-copy"><strong>ATLAS 1939</strong><small>제2차 세계대전 백과사전</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <form className="header-search" action="/explore">
          <Search size={16} aria-hidden="true" />
          <input name="q" aria-label="백과사전 검색" placeholder="검색" />
          <kbd>⌘ K</kbd>
        </form>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><Menu size={22} /></summary>
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
