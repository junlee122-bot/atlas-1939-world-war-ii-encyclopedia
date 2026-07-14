const nodes = [
  { label: "북대서양", sub: "수송로", x: 17, y: 43 },
  { label: "서부유럽", sub: "1940 / 1944", x: 42, y: 32 },
  { label: "동부전선", sub: "1941–45", x: 59, y: 27 },
  { label: "북아프리카", sub: "1940–43", x: 45, y: 61 },
  { label: "중국", sub: "1937–45", x: 78, y: 47 },
  { label: "태평양", sub: "1941–45", x: 89, y: 64 },
];

export function StrategicMap() {
  return (
    <div className="strategic-map" aria-label="제2차 세계대전 주요 전역 개요">
      <div className="map-kicker"><span /> GLOBAL THEATERS · 1937–1945</div>
      <svg viewBox="0 0 100 72" role="img" aria-label="유럽, 아프리카, 아시아와 태평양을 연결한 추상 전략도">
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path className="map-route" d="M17 43 C26 28 34 29 42 32 S52 25 59 27 S70 42 78 47 S84 57 89 64" />
        <path className="map-route map-route-secondary" d="M42 32 C42 42 44 52 45 61 M59 27 C66 31 72 39 78 47" />
        {nodes.map((node, index) => (
          <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <circle className="map-pulse" r={index === 2 ? 4.2 : 3.2} />
            <circle className="map-dot" r="1.1" filter="url(#glow)" />
            <text className="map-label" x={node.x > 70 ? -3 : 3} y="-2" textAnchor={node.x > 70 ? "end" : "start"}>{node.label}</text>
            <text className="map-sub" x={node.x > 70 ? -3 : 3} y="2" textAnchor={node.x > 70 ? "end" : "start"}>{node.sub}</text>
          </g>
        ))}
      </svg>
      <div className="map-legend"><span><i className="allied" /> 연합국 주요 작전축</span><span><i className="axis" /> 추축국 최대 팽창권</span></div>
    </div>
  );
}
