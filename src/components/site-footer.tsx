import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">ATLAS <span>1939</span></div>
          <p>전쟁을 영웅담이 아닌 인간·사회·구조의 역사로 기록합니다.</p>
        </div>
        <div className="footer-links">
          <Link href="/explore">전체 문서</Link>
          <Link href="/timeline">전쟁 연표</Link>
          <Link href="/about">편집 원칙</Link>
          <a href="https://github.com/junlee122-bot/world-war-ii-encyclopedia" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>ATLAS 1939 · OPEN HISTORY PROJECT</span>
        <span>역사적 인물·사건에 대한 서술은 미화나 선전을 목적으로 하지 않습니다.</span>
      </div>
    </footer>
  );
}
