import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() { return <main id="main-content" className="not-found"><span>404 · ARCHIVE GAP</span><h1>이 문서는 아직<br />기록되지 않았습니다.</h1><p>검색어를 바꾸거나 전체 아카이브에서 다른 문서를 찾아보세요.</p><Link href="/explore"><ArrowLeft size={17} /> 전체 문서로 돌아가기</Link></main>; }
