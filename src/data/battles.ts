export type EvidenceLevel = "기록 확인" | "해석 논쟁" | "후대의 전설";

export type BattleSide = {
  name: string;
  commanders: string[];
  strength: string;
  note: string;
};

export type BattlePhase = {
  date: string;
  title: string;
  description: string;
};

export type BattleDossier = {
  slug: string;
  title: string;
  originalName: string;
  theater: string;
  type: string;
  dates: string;
  location: string;
  result: string;
  accent: string;
  summary: string;
  background: string[];
  keyNumbers: { label: string; value: string; caveat?: string }[];
  sides: [BattleSide, BattleSide];
  plans: { side: string; title: string; description: string }[];
  phases: BattlePhase[];
  decisiveFactors: { title: string; description: string }[];
  aftermath: string[];
  stories: { title: string; level: EvidenceLevel; story: string; verdict: string }[];
  bookNotes: { book: string; author: string; insight: string; url?: string }[];
  sources: { label: string; publisher: string; url: string }[];
  relatedArticle?: string;
};

export const battles: BattleDossier[] = [
  {
    slug: "battle-of-britain",
    title: "영국 본토 항공전",
    originalName: "Battle of Britain",
    theater: "서부전선",
    type: "항공전",
    dates: "1940.07.10–10.31",
    location: "영국 남부·영국해협",
    result: "영국의 방공 성공, 독일 상륙계획 연기",
    accent: "#6688a1",
    summary: "영국 본토 항공전은 전투기끼리의 결투만이 아니라 레이더, 관측대, 전화망, 작전실과 정비 인력이 하나의 체계로 움직인 정보·소모전이었다. 독일 공군은 영국 전투기 사령부를 무너뜨리지 못했고, 독일은 바다사자 작전을 무기한 연기했다.",
    background: [
      "1940년 6월 프랑스가 무너지자 영국은 서유럽에서 독일에 맞서는 유일한 주요 교전국이 됐다. 독일이 영국해협을 건너 상륙하려면 먼저 영국 해군을 방해할 수 있는 제공권이 필요했다. 독일 공군의 임무는 전투기 사령부를 소진시키고 비행장·통신망을 파괴하는 것이었다.",
      "영국의 강점은 스핏파이어 한 기의 성능보다 ‘다우딩 체계’에 있었다. 해안 레이더와 관측대가 적 편대를 발견하면 정보가 필터룸과 집단사령부를 거쳐 섹터 비행장으로 전달됐다. 지휘관은 필요한 장소에 필요한 수만큼만 전투기를 올릴 수 있었고, 격추된 영국 조종사가 생환하면 다시 전투에 복귀할 수 있었다.",
    ],
    keyNumbers: [
      { label: "공식 전역 기간", value: "114일", caveat: "영국이 정한 7월 10일~10월 31일 기준" },
      { label: "RAF 전투 조종사", value: "약 3,000명", caveat: "영국·영연방·점령 유럽 출신 포함" },
      { label: "핵심 방어 자산", value: "레이더·섹터 작전실", caveat: "전투기 숫자만으로 설명할 수 없음" },
      { label: "전략적 결과", value: "상륙 조건 불충족", caveat: "독일의 영국 폭격은 이후에도 계속됨" },
    ],
    sides: [
      { name: "영국", commanders: ["휴 다우딩", "키스 파크", "트래퍼드 리맬러리"], strength: "전투기 사령부의 허리케인·스핏파이어와 통합 방공망", note: "본토 기지, 조종사 회수, 항공기 생산과 수리에서 유리했다." },
      { name: "독일", commanders: ["헤르만 괴링", "알베르트 케셀링", "후고 슈페를레"], strength: "3개 항공함대의 전투기·폭격기·급강하폭격기", note: "Bf 109의 체공시간과 해협 너머 조종사 손실이 작전을 제한했다." },
    ],
    plans: [
      { side: "영국", title: "전력을 보존하며 필요한 곳에서만 싸운다", description: "다우딩은 전투기를 한 번에 모두 내보내기보다 레이더 정보로 요격 시점과 규모를 조절했다. 비행장·정비·통신 체계를 유지하는 것이 격추 수보다 중요했다." },
      { side: "독일", title: "전투기 사령부를 끌어내 소진시킨다", description: "해협 선박 공격에서 시작해 해안 레이더와 비행장, 항공기 공장을 공격했다. 그러나 목표 우선순위가 자주 바뀌고 정보평가가 부정확했다." },
    ],
    phases: [
      { date: "7월 10일–8월 초", title: "해협전", description: "독일 공군은 영국해협의 수송선과 항만을 공격해 영국 전투기를 끌어냈다. 이 시기는 양측이 상대의 반응과 전술을 시험한 단계였다." },
      { date: "8월 13일–9월 6일", title: "비행장과 방공체계 공격", description: "‘독수리의 날’ 이후 대규모 공습이 이어졌다. 영국 남동부 섹터 비행장과 조종사의 피로가 위험 수준에 이르렀지만, 레이더망은 생각보다 빠르게 복구됐다." },
      { date: "9월 7일 이후", title: "런던으로 목표 전환", description: "독일은 런던 대공습으로 중심을 옮겼다. 전투기 사령부는 비행장 압박에서 숨을 돌렸고, 9월 15일 독일 폭격대는 큰 저항을 만났다." },
      { date: "10월", title: "주간 대공세의 소멸", description: "독일은 전폭기와 야간폭격 중심으로 전환했다. 상륙작전은 연기됐고 전투는 런던 대공습이라는 다른 형태로 이어졌다." },
    ],
    decisiveFactors: [
      { title: "다우딩 체계", description: "레이더는 적을 ‘보는’ 장비였고, 필터룸·전화망·섹터 관제는 그 정보를 행동으로 바꾸는 체계였다." },
      { title: "작전 거리", description: "독일 전투기는 목표 상공에서 머물 시간이 짧았다. 격추된 독일 조종사는 포로가 됐지만 영국 조종사는 다시 비행할 가능성이 높았다." },
      { title: "잘못된 손실 추정", description: "양측 모두 전과를 과장했지만 독일 정보부는 영국 전투기 사령부가 실제보다 훨씬 약해졌다고 판단해 전략 결정을 왜곡했다." },
    ],
    aftermath: [
      "영국은 전쟁에서 이긴 것이 아니라 패배하지 않을 기반을 지켰다. 이후 미국과 연합군이 서유럽으로 돌아올 수 있는 항공·해상 기지가 보존됐다.",
      "승리는 ‘소수의 영웅 조종사’ 서사로 기억됐지만 실제 방어는 정비사, 레이더 요원, 여성 보조공군, 관측대와 공장 노동자를 포함한 대규모 조직의 성과였다.",
    ],
    stories: [
      { title: "스핏파이어가 혼자 영국을 구했다?", level: "후대의 전설", story: "스핏파이어는 상징성이 컸지만 허리케인이 더 많은 비행대에 배치되어 폭격기 요격의 큰 몫을 담당했다.", verdict: "전투기 한 기종보다 통합 방공체계와 두 기종의 역할 분담이 핵심이었다." },
      { title: "런던 폭격은 베를린 공습에 대한 분노 때문이었다?", level: "해석 논쟁", story: "히틀러의 보복 심리가 영향을 줬지만, 전투기 사령부를 결전으로 끌어내려는 작전적 계산도 있었다.", verdict: "개인의 분노만으로 목표 전환을 설명하면 독일 공군 내부의 전략 논쟁을 놓친다." },
      { title: "외국인 조종사들의 전투", level: "기록 확인", story: "폴란드·체코슬로바키아·캐나다·뉴질랜드 등 여러 나라 조종사가 싸웠다. 폴란드 제303비행대는 짧은 기간 높은 전과를 올렸다.", verdict: "‘영국인만의 전투’라는 표현보다 다국적 방어전으로 보는 것이 정확하다." },
    ],
    bookNotes: [
      { book: "The Most Dangerous Enemy", author: "Stephen Bungay", insight: "승패를 기체 제원보다 지휘체계, 정보처리, 조종사 보충과 목표 선택의 상호작용으로 설명한다." },
      { book: "First Light", author: "Geoffrey Wellum", insight: "젊은 조종사가 하루 여러 차례 출격하며 느낀 공포와 피로를 보여줘 ‘기사도적 공중전’ 이미지를 현실로 끌어내린다." },
    ],
    sources: [
      { label: "8 Things You Need To Know About The Battle of Britain", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/8-things-you-need-to-know-about-the-battle-of-britain" },
      { label: "RAF pilots tell the story of the Battle of Britain", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/listen-to-raf-pilots-tell-the-story-of-the-battle-of-britain" },
    ],
    relatedArticle: "fall-of-europe",
  },
  {
    slug: "battle-of-moscow",
    title: "모스크바 공방전",
    originalName: "Battle of Moscow / Operation Typhoon",
    theater: "동부전선",
    type: "육상전·동계전",
    dates: "1941.09.30–1942.01.07",
    location: "소련 모스크바 서부·북서부·남부",
    result: "독일 공세 실패, 소련군 반격",
    accent: "#9b6254",
    summary: "모스크바 앞의 독일군은 승리 직전 갑자기 겨울에 패한 것이 아니다. 초기 포위전의 성공 뒤 보급망과 차량이 소진됐고, 소련은 새 예비대를 투입하며 방어선을 재건했다. 추위는 이미 약해진 독일군의 문제를 확대했다.",
    background: [
      "바르바로사 작전 석 달 동안 독일군은 거대한 영토를 점령하고 소련군 수백만 명을 포로로 잡았지만 소련 국가는 붕괴하지 않았다. 독일군은 키예프 전투 뒤 모스크바를 향한 마지막 대공세 ‘태풍 작전’을 준비했다.",
      "모스크바는 정치적 수도이자 철도·통신의 중심이었다. 함락은 큰 충격이었겠지만 소련의 즉각 항복을 보장하지는 않았다. 독일 계획은 또 한 번의 대포위가 남은 소련 예비대를 제거하리라 가정했다.",
    ],
    keyNumbers: [
      { label: "태풍 작전 개시", value: "1941.09.30/10.02", caveat: "남·중앙 공격축의 개시일 차이" },
      { label: "독일 선두의 최근접", value: "수도 약 20–30km권", caveat: "부대·지점별 기록이 다름" },
      { label: "소련 반격", value: "1941.12.05", caveat: "여러 전선군이 순차 개시" },
      { label: "핵심 제한", value: "보급·차량·병력 소모", caveat: "추위만으로 설명할 수 없음" },
    ],
    sides: [
      { name: "독일", commanders: ["페도어 폰 보크", "하인츠 구데리안", "에리히 회프너"], strength: "중부집단군의 3개 기갑집단과 보병군", note: "개전 이래 병력·차량 손실이 누적됐고 철도 전환이 지연됐다." },
      { name: "소련", commanders: ["게오르기 주코프", "이반 코네프", "세묜 티모셴코"], strength: "서부·예비·브랸스크 전선군과 새로 편성된 예비대", note: "초기 포위로 큰 손실을 입었지만 수도 주변 방어와 신규 부대를 재구성했다." },
    ],
    plans: [
      { side: "독일", title: "비야지마와 브랸스크의 이중 포위", description: "기갑부대가 모스크바 서쪽의 소련 주력을 감싸고, 이후 수도 북쪽과 남쪽으로 우회해 도시를 고립시키려 했다." },
      { side: "소련", title: "시간을 벌며 방어선을 겹친다", description: "모자이스크 방어선과 도시 접근로에 병력을 배치하고 시민 노동력을 동원했다. 극동을 포함한 예비대는 확인된 위협과 수송 여건에 따라 투입됐다." },
    ],
    phases: [
      { date: "9월 30일–10월 중순", title: "포위전의 대성공", description: "독일 기갑부대는 비야지마와 브랸스크에서 소련군 다수를 포위했다. 그러나 포위망 처리에는 시간과 보병이 필요했고, 일부 소련 부대는 빠져나와 새 방어선에 합류했다." },
      { date: "10월 중순–11월 초", title: "진흙과 방어선", description: "가을 진창이 비포장 도로를 마비시켰다. 모스크바에서는 정부 일부가 이동하고 공황이 발생했지만, 계엄과 동원으로 방어가 재정비됐다." },
      { date: "11월 15일–12월 초", title: "마지막 돌진", description: "땅이 얼자 독일군은 북쪽 클린과 남쪽 툴라 방향에서 재공세를 시작했다. 전투부대는 목표에 가까워졌지만 연료·탄약·보병이 부족했다." },
      { date: "12월 5일 이후", title: "소련군의 동계 반격", description: "새 예비군과 기병·스키부대가 넓은 전선에서 반격했다. 독일군은 100~250km가량 밀려났지만 전선 전체가 붕괴하지는 않았다." },
    ],
    decisiveFactors: [
      { title: "작전이 보급을 앞질렀다", description: "독일 철도는 소련 궤간으로 바꿔야 했고 트럭·말은 이미 소모됐다. 전진할수록 보급 거리는 길어졌다." },
      { title: "소련 동원력의 과소평가", description: "독일은 국경 전투의 손실이 소련의 마지막 예비대라고 믿었지만 새 사단과 공장 이전은 계속됐다." },
      { title: "겨울 대비 실패", description: "추위는 양측에 닥쳤으나 독일은 방한 장비·윤활유·정비체계가 부족했다. 이는 원인이라기보다 누적된 실패를 증폭했다." },
    ],
    aftermath: [
      "독일은 소련을 단기전으로 무너뜨릴 기회를 잃었다. 히틀러는 여러 지휘관을 해임하고 육군 지휘에 더 직접 개입했다.",
      "소련의 반격은 심리적 전환점이었지만 적을 전면 격퇴할 능력은 아직 부족했다. 1942년 봄의 과도한 공세는 다시 큰 손실을 낳았다.",
    ],
    stories: [
      { title: "‘시베리아 사단’이 모스크바를 구했다?", level: "해석 논쟁", story: "극동에서 온 숙련 부대가 중요한 역할을 했지만 반격 병력 전체가 시베리아 출신은 아니었다.", verdict: "조르게의 정보만으로 모든 극동군이 한꺼번에 이동했다는 서사는 과장이다." },
      { title: "붉은광장 열병식에서 곧장 전선으로", level: "기록 확인", story: "1941년 11월 7일 혁명기념 열병식이 공습 위험 속에 열렸다. 일부 참가 부대는 이후 전선으로 이동했다.", verdict: "정치적 상징성이 큰 실제 사건이지만 모든 병사가 광장에서 바로 참호로 간 것은 아니다." },
      { title: "독일군은 크렘린 첨탑을 봤다?", level: "후대의 전설", story: "선두 정찰대가 수도 중심을 육안으로 봤다는 이야기가 반복되지만 위치·날씨·기록이 일치하지 않는다.", verdict: "독일군이 수도 외곽에 접근한 것은 사실이나 ‘첨탑 목격’은 신중히 다뤄야 한다." },
    ],
    bookNotes: [
      { book: "Operation Typhoon", author: "David Stahel", insight: "태풍 작전을 독일 전력의 마지막 폭발로 보며, 공세 개시 전부터 인력·차량·보급의 위기가 깊었다고 분석한다." },
      { book: "When Titans Clashed", author: "David Glantz & Jonathan House", insight: "소련의 승리를 무한한 인명 투입이 아니라 동원 체계와 지휘 학습, 작전 종심의 회복 과정으로 설명한다." },
    ],
    sources: [
      { label: "The Red Army and the Second World War", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/product/616D3674160F13B3F1225B6CCFF97027" },
      { label: "Guide to Further Reading: Nazi-Soviet War", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/books/abs/cambridge-companion-to-the-nazisoviet-war/guide-to-further-reading/EADC3DA5AB644D89185681D6027E6C94" },
    ],
    relatedArticle: "eastern-front",
  },
  {
    slug: "battle-of-stalingrad",
    title: "스탈린그라드 전투",
    originalName: "Сталинградская битва / Schlacht von Stalingrad",
    theater: "동부전선",
    type: "시가전·포위전",
    dates: "1942.08.23–1943.02.02",
    location: "소련 스탈린그라드·돈강·볼가강",
    result: "소련 승리, 독일 제6군 항복",
    accent: "#b14f3c",
    summary: "스탈린그라드는 폐허 속 시가전과 도시에서 수십 킬로미터 떨어진 측면의 포위작전이 결합한 전투였다. 독일군은 도시 대부분을 점령했지만 볼가강을 완전히 차단하지 못했고, 소련군은 취약한 루마니아군 측면을 돌파해 제6군을 가뒀다.",
    background: [
      "1942년 독일은 모스크바가 아니라 남부의 코카서스 석유와 볼가 수송로를 목표로 청색 작전을 시작했다. 목표가 코카서스와 스탈린그라드로 갈리면서 병력과 보급도 분산됐다.",
      "도시는 군수공업과 볼가 수송의 거점이었지만 상징성도 커졌다. 히틀러와 스탈린의 이름이 걸린 전투라는 점이 군사적 계산에 정치적 집착을 더했다. 독일 제6군은 북쪽 대초원을 통해 도시에 도달했고, 소련 제62군은 볼가강을 등지고 방어했다.",
    ],
    keyNumbers: [
      { label: "도시 공습 개시", value: "1942.08.23", caveat: "대규모 민간인 피해 발생" },
      { label: "천왕성 작전", value: "1942.11.19", caveat: "북부와 남부 공격은 하루 차이" },
      { label: "포위 병력", value: "약 25만~30만 명", caveat: "독일·루마니아·지원인력 포함 범위에 따라 다름" },
      { label: "최종 항복", value: "1943.02.02", caveat: "남부집단은 1월 31일 먼저 항복" },
    ],
    sides: [
      { name: "추축군", commanders: ["프리드리히 파울루스", "에리히 폰 만슈타인", "볼프람 폰 리히트호펜"], strength: "독일 제6군·제4기갑군 일부와 루마니아·이탈리아·헝가리 동맹군", note: "도시 공격에 집중하면서 넓은 측면을 장비가 약한 동맹군이 맡았다." },
      { name: "소련", commanders: ["게오르기 주코프", "알렉산드르 바실렙스키", "바실리 추이코프", "콘스탄틴 로코솝스키"], strength: "스탈린그라드·돈·남서 전선군", note: "도시 수비군은 볼가를 통해 보급받으며 시간을 벌고 외곽에 대규모 예비대를 숨겼다." },
    ],
    plans: [
      { side: "독일", title: "볼가를 끊고 북쪽 측면을 고정한다", description: "제6군이 도시를 점령하고 제4기갑군이 남쪽에서 합류할 예정이었다. 그러나 시가전은 기갑·항공 우위를 작은 단위의 소모전으로 바꿨다." },
      { side: "소련", title: "도시에서는 붙들고, 외곽에서는 감싼다", description: "추이코프의 제62군은 독일군과 최대한 가까이 붙어 항공·포병 사용을 어렵게 했다. 최고사령부는 루마니아군 측면을 겨냥한 천왕성 작전을 비밀리에 준비했다." },
    ],
    phases: [
      { date: "8월 23일–9월 중순", title: "볼가 도달과 도시 진입", description: "독일군은 도시 북쪽에서 볼가에 도달하고 대규모 폭격을 실시했다. 소련 증원군은 강을 건너 곧바로 전투에 투입됐다." },
      { date: "9월 중순–11월 초", title: "공장지대의 소모전", description: "마마예프 쿠르간, 중앙역, 곡물창고, 붉은10월·바리카디 공장에서 건물과 층 하나를 두고 공방이 반복됐다. 독일군은 도시 대부분을 장악했지만 강변의 좁은 교두보를 제거하지 못했다." },
      { date: "11월 19–23일", title: "천왕성 작전", description: "소련군은 눈보라 속에서 루마니아 제3군과 제4군을 돌파했다. 두 공격축이 칼라치에서 만나 제6군과 지원부대를 포위했다." },
      { date: "12월", title: "공수보급과 구원 실패", description: "공군은 필요한 하루 보급량을 채우지 못했다. 만슈타인의 겨울폭풍 작전은 포위망 가까이 접근했지만 내부 돌파 명령이 내려지지 않았고 중단됐다." },
      { date: "1943년 1월–2월 2일", title: "고리 작전과 항복", description: "소련군은 포위망을 단계적으로 압축했다. 파울루스가 있는 남부가 먼저 항복했고 북부 공장지대의 잔여군도 이틀 뒤 무기를 내려놓았다." },
    ],
    decisiveFactors: [
      { title: "측면의 구조적 약점", description: "독일 정예부대가 도시에 묶인 동안 넓은 돈강 측면은 대전차장비와 예비대가 부족한 동맹군이 지켰다." },
      { title: "소련의 작전 기만", description: "병력·교량·탄약을 야간 이동과 통제로 숨겼다. 독일 정보는 소련 예비대 규모와 공격 방향을 과소평가했다." },
      { title: "돌파 대신 고수", description: "포위 직후 제6군이 자체 돌파했어도 성공은 보장되지 않았다. 그러나 ‘진지 고수’ 명령과 공수보급 약속은 선택지를 급격히 줄였다." },
    ],
    aftermath: [
      "추축군은 제6군과 동맹군 다수를 잃고 코카서스에서 철수했다. 독일 사회에 처음으로 국가적 패배가 공식 선포됐다.",
      "전략 주도권이 즉시 완전히 소련으로 넘어간 것은 아니지만, 독일은 1942년과 같은 규모의 남부 대공세를 다시 만들 수 없었다. 소련의 대규모 포위작전 능력이 입증됐다.",
    ],
    stories: [
      { title: "파울루스의 원수 진급", level: "기록 확인", story: "히틀러는 항복 직전 파울루스를 원수로 승진시켰다. 독일 역사상 포로가 된 원수가 없다는 메시지는 사실상 자결 압박으로 해석됐다.", verdict: "파울루스는 자결하지 않고 1월 31일 포로가 됐다." },
      { title: "파블로프의 집은 58일 동안 한 분대가 지켰다?", level: "해석 논쟁", story: "건물 방어는 실제였지만 수비 기간·인원과 파블로프 개인의 역할은 전시 선전 속에서 단순화됐다.", verdict: "상징적 가치와 실제 전술적 방어를 구분해야 한다." },
      { title: "스탈린의 ‘한 발짝도 물러서지 마라’", level: "기록 확인", story: "명령 제227호는 후퇴 통제와 형벌부대·차단부대를 규정했다. 그러나 소련군 1,300만 명이 차단부대에 의해 총살됐다는 식의 인터넷 수치는 근거가 없다.", verdict: "가혹한 통제는 사실이지만 규모와 작동 방식은 부대·시기별로 달랐다." },
    ],
    bookNotes: [
      { book: "Stalingrad", author: "Antony Beevor", insight: "상급 지휘의 결정과 병사·민간인의 편지·일기를 함께 엮어 전투가 인간에게 가한 압력을 보여준다.", url: "https://www.penguin.co.uk/books/22240/stalingrad-by-beevor-antony/9780141032405" },
      { book: "Stalingrad", author: "David Glantz & Jonathan House", insight: "도시 내부만이 아니라 돈강과 코틀루반 등 넓은 작전공간을 복원해, 알려지지 않은 소련 공세의 실패까지 포함한다." },
    ],
    sources: [
      { label: "Stalingrad", publisher: "Penguin Books", url: "https://www.penguin.co.uk/books/22240/stalingrad-by-beevor-antony/9780141032405" },
      { label: "Recent Literature on the Great Patriotic War", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/journals/contemporary-european-history/article/recent-literature-on-the-great-patriotic-war-of-the-soviet-union-19411945/E82F200712EDF8F293B4CF5AA09E2651" },
    ],
    relatedArticle: "stalingrad",
  },
  {
    slug: "battle-of-kursk",
    title: "쿠르스크 전투",
    originalName: "Курская битва / Unternehmen Zitadelle",
    theater: "동부전선",
    type: "기갑전·종심방어",
    dates: "1943.07.05–08.23",
    location: "소련 쿠르스크 돌출부·오룔·하르코우",
    result: "독일 공세 좌절, 소련의 연속 공세",
    accent: "#9c5741",
    summary: "쿠르스크는 ‘역사상 최대 전차전 하루’보다 훨씬 큰 작전이었다. 독일의 성채 작전은 깊은 지뢰지대와 포병·예비대에 소모됐고, 소련은 오룔과 하르코우 방향의 후속 공세로 전선을 서쪽으로 밀었다.",
    background: [
      "스탈린그라드 패배 뒤 만슈타인의 반격으로 전선에는 쿠르스크를 중심으로 동쪽에서 서쪽으로 튀어나온 거대한 돌출부가 생겼다. 독일은 북과 남에서 협공해 돌출부를 잘라내고 소련 예비대를 파괴하려 했다.",
      "공격은 신형 판터·티거·페르디난트 배치를 기다리며 여러 차례 미뤄졌다. 그 시간 동안 소련군은 독일 의도를 파악하고 수백 킬로미터 깊이의 방어대, 지뢰지대, 대전차 거점과 예비대를 준비했다.",
    ],
    keyNumbers: [
      { label: "성채 작전", value: "1943.07.05–07.16", caveat: "후속 소련 공세는 8월까지 지속" },
      { label: "방어 깊이", value: "수백 km의 다중 방어대", caveat: "모든 구간의 밀도는 동일하지 않음" },
      { label: "프로호롭카", value: "1943.07.12", caveat: "‘최대 전차전’ 표현은 논쟁적" },
      { label: "전략적 결과", value: "독일 주도권 상실", caveat: "국지적 반격 능력은 이후에도 존재" },
    ],
    sides: [
      { name: "독일", commanders: ["귄터 폰 클루게", "에리히 폰 만슈타인", "발터 모델", "헤르만 호트"], strength: "중부집단군 제9군·남부집단군 제4기갑군과 켐프 분견군", note: "신형 장비의 화력은 강했지만 초기 기계고장과 제한된 보병·공병이 문제였다." },
      { name: "소련", commanders: ["게오르기 주코프", "알렉산드르 바실렙스키", "콘스탄틴 로코솝스키", "니콜라이 바투틴", "이반 코네프"], strength: "중앙·보로네시·초원 전선군", note: "방어부대 뒤에 대규모 전차·기계화 예비대를 배치하고 후속 공세를 준비했다." },
    ],
    plans: [
      { side: "독일", title: "돌출부의 목을 자른다", description: "북쪽 모델의 제9군과 남쪽 호트의 제4기갑군이 쿠르스크 동쪽에서 만나 소련군을 포위할 예정이었다." },
      { side: "소련", title: "공격을 소모시킨 뒤 전 전선에서 반격한다", description: "첫 방어대에서 무조건 막기보다 독일 기갑을 지뢰·대전차포·포병으로 단계적으로 마모시킨 뒤 전략 예비대로 반격하려 했다." },
    ],
    phases: [
      { date: "7월 5일", title: "공세 개시와 선제 포격", description: "소련군은 포로 심문과 정보로 공격 시각을 좁혀 독일 집결지에 선제 포격을 실시했다. 효과는 제한적이었지만 기습은 사라졌다." },
      { date: "7월 5–11일", title: "북부의 정체, 남부의 진전", description: "모델의 북부 공격은 포니리와 올호바트카에서 빠르게 느려졌다. 남부 SS기갑군단은 더 깊이 진출했지만 방어대를 돌파할수록 전력이 줄었다." },
      { date: "7월 12일", title: "프로호롭카", description: "소련 제5근위전차군이 급히 반격했다. 좁은 지형과 혼란 속에 소련 전차 손실이 컸고 독일 전차군단을 ‘전멸’시키지는 못했다. 다만 독일 공세는 작전 목표에 도달하지 못했다." },
      { date: "7월 12일–8월 23일", title: "쿠투조프와 루먄체프", description: "소련군은 오룔 돌출부와 벨고로드·하르코우를 향해 공세를 시작했다. 독일 예비대는 시칠리아 상륙과 여러 위기에 분산됐고 후퇴가 이어졌다." },
    ],
    decisiveFactors: [
      { title: "시간이 방어자 편이었다", description: "공격 연기는 신형 장비를 늘렸지만 소련이 방어선과 예비대를 압도적으로 강화할 시간도 줬다." },
      { title: "종심방어와 공병", description: "지뢰와 대전차 거점이 독일 전차를 멈추면 포병과 기동 예비대가 집중됐다. 전차 성능만의 대결이 아니었다." },
      { title: "전략 예비대의 차이", description: "소련은 손실을 감수하고도 후속 공세를 위한 새 집단을 투입할 수 있었지만 독일은 여러 전선의 위기를 동시에 메워야 했다." },
    ],
    aftermath: [
      "독일군은 이후에도 전술적으로 강했고 국지적 반격을 성공시켰지만, 동부전선의 대규모 여름 공세 주도권은 소련으로 넘어갔다.",
      "소련의 승리 서사는 프로호롭카를 압도적 전차 승리로 묘사했으나, 냉전 이후 자료 공개로 당일 전술 결과와 손실 규모가 재평가됐다.",
    ],
    stories: [
      { title: "프로호롭카는 역사상 최대의 전차전이었다?", level: "해석 논쟁", story: "많은 전차가 좁은 구역에서 싸웠지만 참여 숫자와 손실에 대한 전후 설명은 크게 부풀려졌다.", verdict: "쿠르스크 전체의 전략적 승리와 프로호롭카 당일의 불리한 전술 결과를 동시에 볼 필요가 있다." },
      { title: "판터는 전투보다 고장으로 더 많이 멈췄다", level: "기록 확인", story: "초기형 판터는 엔진·변속기·화재 문제가 있었고 첫날 상당수가 기계고장과 지뢰로 이탈했다.", verdict: "회수·수리된 차량도 있어 ‘모두 파괴됐다’고 해석하면 안 된다." },
      { title: "히틀러가 시칠리아 때문에 이길 전투를 중단했다?", level: "해석 논쟁", story: "연합군의 시칠리아 상륙은 영향을 줬지만 북부 공세는 이미 정체했고 소련의 오룔 공세가 시작된 상태였다.", verdict: "한 번의 회의가 승리를 빼앗았다는 만슈타인식 회고는 자기정당화 가능성을 고려해야 한다." },
    ],
    bookNotes: [
      { book: "Demolishing the Myth", author: "Valeriy Zamulin", insight: "프로호롭카의 작전기록을 대조해 소련의 전술적 손실과 지휘 혼란을 복원하면서도 전체 전역의 전략 결과와 구분한다." },
      { book: "When Titans Clashed", author: "David Glantz & Jonathan House", insight: "쿠르스크를 단일 결전이 아니라 소련군이 방어에서 연속 공세로 전환한 학습 과정 속에 놓는다." },
    ],
    sources: [
      { label: "Guide to Further Reading: Nazi-Soviet War", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/books/abs/cambridge-companion-to-the-nazisoviet-war/guide-to-further-reading/EADC3DA5AB644D89185681D6027E6C94" },
      { label: "Recent Literature on the Great Patriotic War", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/journals/contemporary-european-history/article/recent-literature-on-the-great-patriotic-war-of-the-soviet-union-19411945/E82F200712EDF8F293B4CF5AA09E2651" },
    ],
    relatedArticle: "eastern-front",
  },
  {
    slug: "second-el-alamein",
    title: "제2차 엘알라메인 전투",
    originalName: "Second Battle of El Alamein / Operation Lightfoot",
    theater: "북아프리카",
    type: "육상전·돌파전",
    dates: "1942.10.23–11.04",
    location: "이집트 엘알라메인",
    result: "영국 제8군 승리, 추축군 서부 후퇴",
    accent: "#b18445",
    summary: "엘알라메인은 흔히 전차 기동전으로 기억되지만 실제 핵심은 깊은 지뢰지대에 보병과 공병이 통로를 내고 포병·항공·기갑이 이를 확대하는 소모전이었다. 몽고메리는 수적 우위를 한 번의 돌격이 아니라 계속 압박할 수 있는 예비력으로 사용했다.",
    background: [
      "1942년 여름 가잘라 전투와 토브루크 함락 뒤 롬멜의 기갑군은 이집트로 진입했다. 그러나 알렉산드리아와 수에즈로 향하는 길목인 엘알라메인은 북쪽 바다와 남쪽 카타라 저지대 때문에 넓은 우회가 불가능했다.",
      "제1차 엘알라메인에서 추축군 진격이 멈춘 뒤 양측은 전력을 재건했다. 영국은 중동 수송망과 미국제 장비, 울트라 정보와 해·공군 우위를 활용했다. 추축군은 긴 해상·육상 보급로와 연료 부족에 시달렸다.",
    ],
    keyNumbers: [
      { label: "영국 제8군", value: "약 19만 5천 명", caveat: "전투 단계·집계 범위에 따라 변동" },
      { label: "추축군", value: "약 11만 6천 명", caveat: "독일·이탈리아군 합계 추정" },
      { label: "포격 개시", value: "10월 23일 21:40", caveat: "대규모 야간 포병 준비" },
      { label: "최종 돌파", value: "11월 2–4일", caveat: "슈퍼차지 작전 이후" },
    ],
    sides: [
      { name: "연합군", commanders: ["버나드 몽고메리", "해럴드 알렉산더"], strength: "영국·호주·뉴질랜드·남아공·인도·자유프랑스·그리스 부대의 제8군", note: "병력·전차·포병·항공과 보급에서 우세했다." },
      { name: "추축군", commanders: ["에르빈 롬멜", "게오르크 슈투메", "에토레 바스티코"], strength: "독일 아프리카기갑군과 이탈리아군", note: "연료 부족과 질병, 해상 수송 손실 속에서 지뢰·대전차 방어에 의존했다." },
    ],
    plans: [
      { side: "연합군", title: "라이트풋: 보병이 먼저 길을 연다", description: "보병이 대전차지뢰 위를 통과해 교두보를 만들고 공병이 전차 통로를 개척한 뒤 기갑부대가 추축 예비대를 소모시킬 계획이었다." },
      { side: "추축군", title: "악마의 정원에서 적을 고정한다", description: "넓은 지뢰지대와 대전차포, 거점을 겹쳐 영국군을 좁은 통로로 유도하고 제한된 기갑 예비대로 반격하려 했다." },
    ],
    phases: [
      { date: "10월 23–25일", title: "라이트풋 작전", description: "포병 사격 뒤 보병이 전진하고 공병이 지뢰 통로를 만들었다. 예상보다 통로 개척이 늦어 전차가 병목에 갇혔다." },
      { date: "10월 26–28일", title: "소모와 북부 압박", description: "몽고메리는 계획을 조정해 호주군의 해안 방향 공격으로 추축 예비대를 북쪽에 끌어들였다. 양측 전차와 대전차포가 반복 교전했다." },
      { date: "11월 1–2일", title: "슈퍼차지", description: "뉴질랜드 사단을 중심으로 새 돌파가 시작됐다. 텔엘아카키르 주변에서 추축군 기갑 예비대가 큰 손실을 입었다." },
      { date: "11월 3–4일", title: "후퇴", description: "히틀러는 고수 명령을 내렸다가 뒤늦게 철수를 허가했다. 차량이 부족한 이탈리아 보병 다수는 포로가 됐고 기계화부대는 서쪽으로 빠져나갔다." },
    ],
    decisiveFactors: [
      { title: "보급 우위", description: "영국은 병력과 장비를 계속 보충할 수 있었지만 추축군은 지중해 수송 손실과 리비아 항만에서의 장거리 육상수송에 묶였다." },
      { title: "예비대 운용", description: "첫 돌파가 계획대로 되지 않아도 몽고메리는 새 공격축과 병력을 투입할 여유가 있었다." },
      { title: "다국적 군대의 통합", description: "제8군은 여러 국가의 보병·포병·기갑·공병을 공동 계획 아래 운용했고 공군이 전장과 보급로를 지속 공격했다." },
    ],
    aftermath: [
      "승리 직후 토치 작전이 모로코와 알제리에서 시작돼 추축군은 동서에서 압박받았다. 북아프리카 전역은 1943년 5월 튀니지 항복으로 끝났다.",
      "엘알라메인은 영국 육군의 중요한 단독 승리였지만 동부전선에 비해 전쟁 전체의 병력 규모는 작았다. 영국 기억 속 상징성과 세계대전의 전략적 비중을 구분해야 한다.",
    ],
    stories: [
      { title: "‘우리는 엘알라메인 이전에는 승리가 없었다’", level: "해석 논쟁", story: "처칠의 유명한 표현은 승리의 상징성을 강조하지만 영국군은 이미 동아프리카·컴퍼스 작전 등에서 승리한 적이 있었다.", verdict: "정확한 전적 요약이 아니라 사기를 위한 수사로 읽어야 한다." },
      { title: "롬멜은 전투가 시작될 때 없었다", level: "기록 확인", story: "롬멜은 건강 문제로 독일에 있었고 슈투메가 지휘하다 전투 초기에 사망했다. 롬멜은 10월 25일 복귀했다.", verdict: "그의 부재가 모든 패배를 설명하지는 않지만 초기 지휘 혼선에 영향을 줬다." },
      { title: "위장 파이프라인과 가짜 전차", level: "기록 확인", story: "버트럼 작전은 남쪽의 가짜 병력집결과 느리게 건설되는 가짜 송유관으로 공격 시기·방향을 속이려 했다.", verdict: "기만은 추축군의 예비대 판단을 흐렸지만 승리의 유일한 원인은 아니었다." },
    ],
    bookNotes: [
      { book: "The Pendulum of War", author: "Niall Barr", insight: "북아프리카 전역을 롬멜과 몽고메리의 개인 결투가 아니라 양측 군대가 실패에서 학습한 긴 과정으로 본다." },
      { book: "Alamein", author: "Jon Latimer", insight: "보병·공병의 지뢰지대 전투와 다국적 제8군의 기여를 중심에 놓아 ‘전차 장군의 승부’ 이미지를 수정한다." },
    ],
    sources: [
      { label: "How the Second Battle of El Alamein was won", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/how-the-second-battle-of-el-alamein-was-won" },
      { label: "Second Battle of El Alamein", publisher: "National Army Museum", url: "https://www.nam.ac.uk/explore/battle-alamein" },
    ],
    relatedArticle: "north-africa-mediterranean",
  },
  {
    slug: "battle-of-midway-dossier",
    title: "미드웨이 해전",
    originalName: "Battle of Midway / MI Operation",
    theater: "태평양",
    type: "항공모함 해전",
    dates: "1942.06.03–06.07",
    location: "중부 태평양 미드웨이 환초 인근",
    result: "미국 승리, 일본 주력 항공모함 4척 상실",
    accent: "#397b91",
    summary: "미드웨이는 암호해독이 만든 매복 기회, 일본의 분산된 작전계획, 정찰의 지연과 항공대의 우연한 도착이 겹친 전투였다. 승패는 몇 분 사이에 갈렸지만 그 몇 분은 전쟁 전 교리·훈련·정보체계가 누적된 결과였다.",
    background: [
      "진주만 이후 일본은 동남아시아와 서태평양을 빠르게 점령했지만 미국 항공모함을 제거하지 못했다. 둘리틀 공습은 일본 본토 방어선 확대와 미국 항공모함을 결전으로 끌어내야 한다는 야마모토의 주장을 강화했다.",
      "일본 연합함대 계획은 미드웨이 점령, 알류샨 공격, 주력함대 지원을 넓은 해역에 분산시켰다. 일본은 미국 항공모함이 늦게 출동하리라 예상했지만 미 해군은 JN-25 암호 분석으로 목표와 시기를 추정해 먼저 대기했다.",
    ],
    keyNumbers: [
      { label: "일본 항공모함", value: "4척 상실", caveat: "아카기·가가·소류·히류" },
      { label: "미국 항공모함", value: "요크타운 상실", caveat: "엔터프라이즈·호넷 생존" },
      { label: "결정적 공격", value: "6월 4일 10:20 전후", caveat: "세 항모가 짧은 시간에 피격" },
      { label: "미군 인명손실", value: "307명", caveat: "미 해군사령부 요약 기준" },
    ],
    sides: [
      { name: "일본", commanders: ["야마모토 이소로쿠", "나구모 주이치", "야마구치 다몬"], strength: "제1항공함대 항공모함 4척과 상륙·주력함대", note: "전체 병력은 우세했지만 여러 부대가 서로 지원하기 어려운 거리로 분산됐다." },
      { name: "미국", commanders: ["체스터 니미츠", "프랭크 플레처", "레이먼드 스프루언스"], strength: "항공모함 3척, 미드웨이 육상항공대와 잠수함", note: "정보 우위로 매복 위치를 선택했지만 항공대 전술과 통신은 불완전했다." },
    ],
    plans: [
      { side: "일본", title: "섬을 미끼로 미국 항모를 파괴한다", description: "미드웨이를 공습·점령하면 미 태평양함대가 출동하고, 나구모의 항모와 뒤따르는 주력함대가 이를 격멸할 것으로 예상했다." },
      { side: "미국", title: "예상 지점 북동쪽에서 먼저 친다", description: "니미츠는 항모를 ‘포인트 럭’에 배치하고 미드웨이 정찰을 전방 경보로 활용했다. 손상된 요크타운도 진주만에서 긴급 수리해 투입했다." },
    ],
    phases: [
      { date: "6월 3일", title: "첫 발견", description: "미드웨이 정찰기가 일본 상륙부대 일부를 발견했다. 육상 폭격기의 공격은 큰 성과를 내지 못했다." },
      { date: "6월 4일 새벽", title: "미드웨이 공습과 정찰 지연", description: "일본 1차 공격대가 섬을 폭격했지만 추가 공격 필요를 보고했다. 정찰기 한 대의 출발 지연과 불완전한 보고가 나구모의 판단 시간을 줄였다." },
      { date: "07:00–10:20", title: "흩어진 미군 공격", description: "미드웨이와 미 항모에서 출격한 부대는 따로 도착했다. 뇌격기들은 큰 피해를 입었지만 일본 전투기와 방공을 낮은 고도에 묶었다." },
      { date: "10:22–10:26", title: "세 항모 피격", description: "엔터프라이즈와 요크타운의 급강하폭격기가 거의 동시에 상공에 도착해 가가·아카기·소류를 공격했다. 연료·탄약·무장 작업 중인 격납고에서 화재가 확대됐다." },
      { date: "오후–6월 7일", title: "히류의 반격과 요크타운 침몰", description: "히류 공격대는 요크타운을 두 차례 타격했지만 미군이 히류를 찾아 파괴했다. 잠수함 I-168은 이후 요크타운과 구축함 해먼을 뇌격했다." },
    ],
    decisiveFactors: [
      { title: "정보가 선택권을 만들었다", description: "암호해독은 모든 답을 주지 않았지만 니미츠가 병력 열세 속에서도 매복 위치와 시점을 고를 수 있게 했다." },
      { title: "분산된 일본 계획", description: "알류샨·상륙부대·전함 주력이 멀리 떨어져 있어 항모전의 몇 시간 안에 전력 우위를 사용할 수 없었다." },
      { title: "갑판 운용과 손상통제", description: "일본 항모는 폐쇄형 격납고의 연료증기와 무장이 화재를 키웠다. 요크타운은 신속한 수리로 일본 조종사에게 다른 항모처럼 보일 정도로 회복했다." },
    ],
    aftermath: [
      "일본은 항공모함 네 척과 숙련된 항공·정비 인력을 잃었다. 미국도 큰 항공대 손실과 요크타운 상실을 겪었지만 산업·훈련 체계로 더 빠르게 보충할 수 있었다.",
      "전투는 일본을 즉시 방어로만 몰아넣지는 않았다. 두 달 뒤 과달카날을 둘러싼 긴 소모전이 시작됐고, 그 과정에서 일본 항공전력의 회복 가능성이 더 줄었다.",
    ],
    stories: [
      { title: "‘AF는 물이 부족하다’", level: "기록 확인", story: "미군은 미드웨이에 담수 고장 메시지를 평문으로 보내게 했고, 일본 암호통신에 AF의 물 부족 보고가 나타나 목표를 확인했다.", verdict: "널리 알려진 암호전 일화로 관련자 회고와 미 해군 자료가 뒷받침한다." },
      { title: "일본 갑판은 출격 직전 항공기로 가득했다?", level: "후대의 전설", story: "후치다 미쓰오의 전후 서술에서 널리 퍼졌지만 일본 항모 운용기록 분석은 공격기들이 격납고에 있었고 즉시 출격 준비 상태가 아니었다고 본다.", verdict: "Parshall·Tully의 연구가 대표적으로 반박한 통설이다." },
      { title: "아라시가 미 급강하폭격기를 일본 함대로 안내했다", level: "해석 논쟁", story: "잠수함을 추격한 구축함 아라시의 항적을 맥클러스키가 따라갔다는 설명이 유명하다.", verdict: "항적이 방향 판단에 도움을 준 것은 개연성이 높지만 발견을 오직 한 척의 배로만 설명하기는 어렵다." },
    ],
    bookNotes: [
      { book: "Shattered Sword", author: "Jonathan Parshall & Anthony Tully", insight: "일본 측 운용기록과 갑판 절차를 분 단위로 재구성해 ‘출격 5분 전’ 신화와 후치다의 서술을 비판한다.", url: "https://www.usni.org/magazines/naval-history-magazine/2006/april/book-reviews" },
      { book: "The Battle of Midway", author: "Craig L. Symonds", insight: "정보 우위와 우연을 대립시키지 않고, 좋은 정보가 우연을 활용할 수 있는 위치에 함대를 놓았다고 설명한다." },
    ],
    sources: [
      { label: "Battle of Midway", publisher: "U.S. Naval History and Heritage Command", url: "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1942/midway.html" },
      { label: "Shattered Sword review", publisher: "U.S. Naval Institute", url: "https://www.usni.org/magazines/naval-history-magazine/2006/april/book-reviews" },
    ],
    relatedArticle: "battle-of-midway",
  },
  {
    slug: "guadalcanal-campaign",
    title: "과달카날 전역",
    originalName: "Guadalcanal Campaign / Operation Watchtower",
    theater: "남태평양",
    type: "육·해·공 복합전",
    dates: "1942.08.07–1943.02.09",
    location: "솔로몬 제도 과달카날·인근 해역",
    result: "연합군 승리, 일본의 철수",
    accent: "#4f897f",
    summary: "과달카날은 미국의 첫 대규모 공세이자 양측이 낮에는 항공기, 밤에는 함대, 정글에서는 보병으로 같은 보급선을 다툰 반년의 소모전이었다. 미드웨이가 일본의 항모 우위를 꺾었다면 과달카날은 일본 해·공군의 숙련 인력을 되돌리기 어렵게 소모했다.",
    background: [
      "일본은 라바울에서 남쪽으로 방어권을 넓히고 미국과 호주 사이의 교통을 위협하기 위해 과달카날에 비행장을 건설했다. 연합군은 완성되기 전 비행장을 점령하기로 하고 준비가 부족한 상태에서 망루 작전을 시작했다.",
      "미 해병대는 8월 7일 상륙해 비행장을 확보했지만 사보섬 해전의 패배로 수송선이 일찍 철수했다. 해병대는 제한된 식량과 탄약으로 교두보를 지켜야 했고, 일본은 야간 고속수송으로 병력을 조금씩 투입했다.",
    ],
    keyNumbers: [
      { label: "미군 상륙", value: "1942.08.07", caveat: "툴라기·플로리다 제도 작전 포함" },
      { label: "비행장", value: "헨더슨 필드", caveat: "해병대 조종사 로프턴 헨더슨의 이름" },
      { label: "주요 해전", value: "약 6차례", caveat: "분류 방식에 따라 수가 달라짐" },
      { label: "일본 철수", value: "1943.02.01–07", caveat: "케 작전으로 비밀 철수" },
    ],
    sides: [
      { name: "연합군", commanders: ["알렉산더 밴더그리프트", "윌리엄 홀지", "리치먼드 터너"], strength: "미 해병·육군, 해군과 ‘선인장 항공대’", note: "낮 시간 헨더슨 필드의 항공력과 점차 개선된 해상보급에 의존했다." },
      { name: "일본", commanders: ["햐쿠타케 하루키치", "야마모토 이소로쿠", "미카와 군이치"], strength: "제17군 일부, 제8함대와 연합함대 항공전력", note: "과달카날의 미군 규모를 처음에 과소평가해 병력을 축차 투입했다." },
    ],
    plans: [
      { side: "연합군", title: "비행장을 지키며 해상권을 회복한다", description: "교두보를 확장하고 헨더슨 필드에서 항공기를 운용해 낮의 바다를 통제한다. 해군은 항모와 수상함 손실을 감수하며 보급선을 유지했다." },
      { side: "일본", title: "야간 수송과 반복 공격으로 비행장을 탈환한다", description: "구축함 중심 ‘도쿄 급행’으로 병력을 보내고 전함 포격으로 비행장을 무력화한 뒤 지상군이 점령하려 했다." },
    ],
    phases: [
      { date: "8월 7–9일", title: "상륙과 사보섬의 충격", description: "미군은 거의 완성된 비행장을 점령했다. 일본 순양함대는 밤에 연합군 순양함 4척을 침몰시켰지만 수송선 공격 없이 물러났다." },
      { date: "8월–9월", title: "일루강과 에드슨 능선", description: "이치키·가와구치 부대의 공격은 미군 규모를 과소평가한 채 분산 실시됐다. 해병대는 헨더슨 필드 방어선을 유지했다." },
      { date: "10월", title: "전역의 절정", description: "일본 전함이 비행장을 대규모 포격한 뒤 제2사단이 공격했으나 실패했다. 산타크루즈 해전에서 미국은 항모 호넷을 잃었지만 일본도 숙련 항공대에 큰 손실을 입었다." },
      { date: "11월 12–15일", title: "과달카날 해전", description: "혼란스러운 야간 수상전과 주간 공습 끝에 일본 증원 수송대가 큰 피해를 입었다. 비행장에 중화기를 충분히 전달할 가능성이 사라졌다." },
      { date: "1943년 1–2월", title: "케 철수작전", description: "일본은 증원으로 위장해 약 1만 명을 비밀리에 철수시켰다. 미군은 작전 의도를 늦게 파악했다." },
    ],
    decisiveFactors: [
      { title: "헨더슨 필드", description: "낮 동안 일본 수송선을 위협해 일본이 적재량이 작은 구축함 야간수송에 의존하게 만들었다." },
      { title: "축차 투입", description: "일본군은 미군 병력을 반복해서 과소평가해 충분한 병력을 한 번에 집중하지 못했다." },
      { title: "보충 능력", description: "양측 모두 함정과 조종사를 잃었지만 미국의 산업·훈련 체계는 손실을 더 빠르게 메웠다." },
    ],
    aftermath: [
      "일본은 남태평양에서 전략 방어로 전환했다. 라바울은 남아 있었지만 연합군은 우회·고립 전략으로 솔로몬 제도를 따라 전진했다.",
      "전역은 일본군의 기아와 질병, 미군의 전투피로를 함께 드러냈다. 일본 생존자들은 과달카날을 ‘굶주림의 섬’이라는 뜻의 아사시마로 부르기도 했다.",
    ],
    stories: [
      { title: "‘악어 개울’은 사실 일루강이 아니었다", level: "기록 확인", story: "미군 기록의 Alligator Creek 전투 장소는 현지명 테나루강과 일루강 사이의 작은 개울이었다. 통칭이 지리적 혼란을 남겼다.", verdict: "전투명과 실제 지형이 다를 수 있음을 보여주는 사례다." },
      { title: "도쿄 급행", level: "기록 확인", story: "일본 구축함의 야간수송을 연합군이 붙인 별명이다. 속도는 빨랐지만 중화기·식량을 충분히 나르기 어려웠다.", verdict: "전술적 기민함이 병참의 구조적 한계를 해결하지는 못했다." },
      { title: "사보섬에서 일본이 수송선을 공격했다면 전역은 끝났다?", level: "해석 논쟁", story: "미카와가 수송선을 파괴했다면 미 해병대는 더 심각한 위기에 놓였을 것이다.", verdict: "연료·공습 위험과 정보 부족을 고려하면 ‘확정적 승리 기회를 겁내서 버렸다’는 단정은 사후판단이다." },
    ],
    bookNotes: [
      { book: "Guadalcanal", author: "Richard B. Frank", insight: "일본·미국 자료와 암호정보를 함께 사용해 육해공 전투를 하나의 병참 경쟁으로 엮는다.", url: "https://www.usni.org/magazines/proceedings/1991/may/notable-naval-books-1990" },
      { book: "Guadalcanal Diary", author: "Richard Tregaskis", insight: "종군기자의 현장 기록으로 초기 해병대의 불확실성·질병·일상을 전하지만, 전체 작전 분석과는 구분해 읽어야 한다." },
    ],
    sources: [
      { label: "Guadalcanal Campaign", publisher: "U.S. Army Center of Military History", url: "https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/C%20Img/campaigns-wwii/pdf/18.pdf" },
      { label: "Guadalcanal: The Definitive Account review", publisher: "U.S. Naval Institute", url: "https://www.usni.org/magazines/naval-history-magazine/1992/june/book-reviews" },
    ],
    relatedArticle: "war-in-the-pacific",
  },
  {
    slug: "battle-of-the-atlantic-dossier",
    title: "대서양 전투",
    originalName: "Battle of the Atlantic",
    theater: "대서양",
    type: "해상수송·대잠전",
    dates: "1939.09.03–1945.05.08",
    location: "북대서양·미 동부·북극항로·서아프리카",
    result: "연합군 수송로 유지",
    accent: "#3f7181",
    summary: "대서양 전투는 한 번의 해전이 아니라 전쟁 첫날부터 마지막 주까지 이어진 수송체계의 생존 경쟁이었다. 호송선단, 호위함, 장거리 항공기, 레이더·소나·암호정보와 조선 생산이 결합해 U보트의 봉쇄 시도를 꺾었다.",
    background: [
      "영국은 식량·석유·원료와 미군을 바다 건너 받아야 했다. 독일은 대함대 결전 대신 잠수함으로 상선을 침몰시켜 영국의 수입량이 소비량 아래로 떨어지게 만들려 했다.",
      "프랑스 함락 뒤 U보트는 비스케이만 기지를 사용해 더 오래 대서양에 머물 수 있었다. 연합군은 배를 흩어 보내는 대신 호송선단으로 묶어 제한된 호위전력을 집중했다.",
    ],
    keyNumbers: [
      { label: "기간", value: "약 5년 8개월", caveat: "제2차 세계대전 최장 전역" },
      { label: "호송선단 규모", value: "최대 약 60척", caveat: "항로·시기별로 상이" },
      { label: "위기의 절정", value: "1942년 말–1943년 봄", caveat: "중부대서양 항공 공백" },
      { label: "전환점", value: "1943년 5월", caveat: "U보트 손실 급증으로 일시 철수" },
    ],
    sides: [
      { name: "연합국", commanders: ["퍼시 노블", "맥스 호턴", "어니스트 킹"], strength: "상선 호송대, 구축함·코르벳·호위항모, 장거리 초계기", note: "영국·캐나다·미국과 여러 망명 해군·상선대가 공동으로 수송망을 지켰다." },
      { name: "독일", commanders: ["카를 되니츠"], strength: "U보트 함대, 일부 수상함·장거리 항공기", note: "늑대떼 전술과 무선지휘로 호송대를 집중 공격했으나 무선 사용은 탐지 단서도 남겼다." },
    ],
    plans: [
      { side: "연합국", title: "선박이 아니라 수송량을 지킨다", description: "호송으로 손실률을 낮추고 우회항로·항공초계·지원그룹을 결합했다. 조선소는 침몰량보다 많은 상선을 건조하려 했다." },
      { side: "독일", title: "상선을 영국의 보충 속도보다 빨리 가라앉힌다", description: "정찰선이 호송대를 찾으면 다른 U보트가 모여 야간 수상공격을 실시했다. 목표는 모든 배가 아니라 수입 체계의 붕괴였다." },
    ],
    phases: [
      { date: "1939–1941", title: "초기 봉쇄와 대서양 기지", description: "U보트와 수상함이 상선을 공격했다. 프랑스 대서양항 획득 뒤 작전범위가 넓어졌고 영국은 호위·정보 체계를 확대했다." },
      { date: "1942년", title: "미국 연안의 ‘두 번째 행복한 시기’", description: "미국의 연안 호송 도입이 늦어 조명된 도시 앞바다에서 상선이 대량 격침됐다. 호송 시행 뒤 손실은 감소했다." },
      { date: "1942년 말–1943년 3월", title: "중부대서양 위기", description: "암호해독 공백과 U보트 증가로 호송대 손실이 커졌다. 연합군은 장거리 항공기와 호위항모를 더 투입했다." },
      { date: "1943년 5월", title: "검은 5월", description: "HF/DF, 센티미터 레이더, 항공기, 지원그룹과 정보가 결합해 U보트 손실이 급증했다. 되니츠는 북대서양 주력을 철수했다." },
      { date: "1944–1945", title: "위협의 억제", description: "스노클·신형 어뢰와 XXI형 잠수함이 등장했지만 너무 늦었다. 연합군은 노르망디 상륙에 필요한 대규모 수송을 수행했다." },
    ],
    decisiveFactors: [
      { title: "체계의 결합", description: "암호해독 하나가 아니라 레이더·방향탐지·항공기·호위함·전술훈련이 같은 작전실에서 연결됐다." },
      { title: "항공 공백의 폐쇄", description: "초장거리 리버레이터와 호위항모가 육상기지에서 닿지 않던 중부대서양을 순찰했다." },
      { title: "산업 생산", description: "미국 조선소의 표준화 건조는 손실을 보충했고 독일은 숙련 승조원과 잠수함 손실을 따라잡기 어려워졌다." },
    ],
    aftermath: [
      "대서양 수송로가 유지됐기에 영국이 버티고 소련이 지원을 받으며 미군이 유럽에 집결할 수 있었다. 노르망디 상륙은 대서양 전투의 승리 위에서 가능했다.",
      "상선 선원들은 군함보다 약한 방어와 높은 위험 속에서 반복 항해했다. 전후 기억에서는 잠수함 에이스와 암호해독에 비해 이들의 경험이 덜 조명됐다.",
    ],
    stories: [
      { title: "처칠이 유일하게 두려워한 것은 U보트였다?", level: "해석 논쟁", story: "처칠 회고록의 표현은 대서양 위협의 중요성을 강조하지만 전시 당시 감정을 정확히 순위화한 말로 보기는 어렵다.", verdict: "회고록의 강한 문장을 당시 정책의 유일한 동기로 사용하지 않는다." },
      { title: "PQ-17 산개 명령", level: "기록 확인", story: "티르피츠 공격을 우려한 영국 해군부가 1942년 북극 호송대에 흩어지라고 명령했고, 34척 중 11척만 목적지에 도착했다.", verdict: "실제 참사이며 불완전한 정보와 최악의 가정이 만든 지휘 실패다." },
      { title: "에니그마 해독이 전투를 혼자 이겼다?", level: "후대의 전설", story: "울트라는 중요했지만 해독이 끊긴 시기도 있었고 위치를 알아도 공격할 항공기·함정이 필요했다.", verdict: "정보·무기·훈련·생산이 결합한 체계의 승리로 보는 것이 정확하다." },
    ],
    bookNotes: [
      { book: "Hitler’s U-Boat War", author: "Clay Blair", insight: "호송 손실과 U보트 전과를 작전기록으로 재검토해 잠수함 에이스 중심의 과장된 전과 서사를 줄인다." },
      { book: "The Battle of the Atlantic", author: "Jonathan Dimbleby", insight: "전략회의에서 상선 선원의 일상까지 연결해 바다의 전투가 영국 사회 전체의 생존 문제였음을 보여준다." },
    ],
    sources: [
      { label: "The Battle of the Atlantic explained", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/the-battle-of-the-atlantic-explained" },
      { label: "What You Need To Know About The Battle Of The Atlantic", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/what-you-need-to-know-about-the-battle-of-the-atlantic" },
    ],
    relatedArticle: "battle-of-the-atlantic",
  },
  {
    slug: "normandy-campaign",
    title: "노르망디 전역",
    originalName: "Operation Overlord / Battle of Normandy",
    theater: "서부전선",
    type: "상륙전·기동전",
    dates: "1944.06.06–08.30",
    location: "프랑스 노르망디",
    result: "연합군 교두보 확보·프랑스 진격",
    accent: "#50799b",
    summary: "노르망디는 6월 6일의 해변만이 아니라 두 달 반의 교두보 전투였다. 기만·기상·공수작전·해군포격·상륙주정·인공항과 보급이 첫날을 만들었고, 보카주 소모전과 캉·생로·팔레즈 전투가 프랑스 돌파를 만들었다.",
    background: [
      "소련은 서방 연합군에 프랑스 제2전선을 요구했다. 미·영은 1942~43년에는 병력·상륙주정·경험이 부족하다고 보고 북아프리카와 이탈리아를 먼저 공격했다. 1944년 영국에는 수백만 병력과 방대한 물자가 집결했다.",
      "파드칼레는 거리가 짧지만 독일 방어가 강했다. 노르망디는 기습 가능성과 셰르부르 항만·비행장 접근성을 제공했다. 포티튜드 기만작전은 가상 군집단과 이중간첩으로 파드칼레가 주공처럼 보이게 했다.",
    ],
    keyNumbers: [
      { label: "D-Day 상륙·공수", value: "약 15만 6천 명", caveat: "당일 연합군 규모의 일반적 추정" },
      { label: "상륙해안", value: "5곳", caveat: "유타·오마하·골드·주노·소드" },
      { label: "참가국", value: "12개국 이상", caveat: "지휘·해공군·지원 포함 범위에 따라 다름" },
      { label: "팔레즈 포위망", value: "8월 중순", caveat: "완전 봉쇄 시점과 탈출 규모는 논쟁적" },
    ],
    sides: [
      { name: "연합군", commanders: ["드와이트 아이젠하워", "버나드 몽고메리", "오마 브래들리", "버트럼 램지"], strength: "미·영·캐나다군 중심의 연합 원정군과 압도적 해·공군", note: "상륙 뒤 하루 수만 톤을 내려야 하는 병참작전이 전투와 동등하게 중요했다." },
      { name: "독일", commanders: ["게르트 폰 룬트슈테트", "에르빈 롬멜", "프리드리히 돌만"], strength: "서부군과 B집단군, 해안방어사단·기갑예비대", note: "제공권 상실과 지휘권 분산 때문에 낮 이동과 예비대 집중이 어려웠다." },
    ],
    plans: [
      { side: "연합군", title: "한 번에 군대를 상륙시키고 끊임없이 보급한다", description: "공수부대가 측면과 도로를 장악하고 5개 해안에 상륙한다. 인공항·상륙주정·철도폭격으로 교두보를 유지하고 셰르부르를 확보할 계획이었다." },
      { side: "독일", title: "해변 또는 기갑 반격으로 바다에 밀어 넣는다", description: "롬멜은 제공권 때문에 해안 가까이에서 즉시 격퇴해야 한다고 봤고, 다른 지휘관들은 기갑예비대를 내륙에 모아 반격하기를 원했다. 히틀러가 예비대 통제권을 나눠 대응을 늦췄다." },
    ],
    phases: [
      { date: "6월 5–6일 밤", title: "공수와 기만", description: "미·영 공수부대가 해안 뒤에 투하됐다. 넓게 흩어진 부대도 있었지만 다리·도로를 확보하고 독일 지휘부의 상황 파악을 흐렸다." },
      { date: "6월 6일", title: "다섯 해안", description: "오마하는 강한 방어와 지원 실패로 큰 피해를 입었다. 다른 해안은 더 빠르게 연결됐지만 첫날의 야심찬 목표를 모두 달성한 곳은 없었다." },
      { date: "6월 7일–7월 중순", title: "셰르부르와 캉", description: "미군은 코탕탱 반도를 차단하고 셰르부르를 점령했으나 항만은 파괴돼 있었다. 영·캐나다군은 캉 주변에서 독일 기갑부대를 붙잡았다." },
      { date: "7월 25일", title: "코브라 돌파", description: "집중폭격 뒤 미군이 생로 서쪽에서 돌파했다. 오폭 피해가 있었지만 독일 방어선이 무너졌고 패튼의 제3군이 넓은 공간으로 진출했다." },
      { date: "8월", title: "모르탱과 팔레즈", description: "독일의 모르탱 반격이 공습과 저항에 막혔다. 연합군은 팔레즈 일대에서 독일군을 포위했으나 틈이 닫히기 전 상당수가 장비를 버리고 탈출했다." },
    ],
    decisiveFactors: [
      { title: "제해권·제공권", description: "독일은 상륙함대를 심각하게 방해하지 못했고 낮의 증원 이동은 공습 위험에 노출됐다." },
      { title: "기만과 지휘 지연", description: "독일 제15군은 파드칼레에 오래 남았다. 노르망디가 보조 상륙일 수 있다는 의심이 예비대 이동을 늦췄다." },
      { title: "보급의 규모", description: "폭풍으로 멀베리 항 하나가 파괴됐지만 해변 양륙과 영국 측 인공항, 파이프라인·트럭 체계가 교두보를 살렸다." },
    ],
    aftermath: [
      "독일 서부군은 막대한 장비와 병력을 잃고 센강 너머로 후퇴했다. 파리는 8월 25일 해방됐지만 연합군의 빠른 진격은 곧 연료와 항만 부족에 부딪혔다.",
      "프랑스 민간인 수만 명이 폭격·포격과 지상전으로 죽거나 집을 잃었다. ‘해방’ 서사는 민간인 피해와 약식 처벌, 성폭력 같은 어두운 경험도 함께 다뤄야 한다.",
    ],
    stories: [
      { title: "아이젠하워의 실패 성명", level: "기록 확인", story: "아이젠하워는 상륙이 실패할 경우 책임을 자신에게 돌리는 짧은 성명을 미리 썼다. 메모에는 날짜를 7월로 잘못 적었다.", verdict: "최고지휘관이 작전의 불확실성을 인식했음을 보여주는 실제 문서다." },
      { title: "낙하산 인형 ‘루퍼트’", level: "기록 확인", story: "일부 지역에 폭음장치가 달린 작은 인형을 투하해 공수부대가 넓게 내린 것처럼 보이게 했다.", verdict: "효과 규모는 과장되기도 하지만 실제 기만수단이었다." },
      { title: "히틀러가 늦잠 자서 기갑반격이 실패했다?", level: "후대의 전설", story: "히틀러가 자는 동안 아무도 깨우지 못해 예비대가 멈췄다는 이야기가 유명하다.", verdict: "명령구조의 비효율은 사실이지만, 거리·공습·상황 혼란이 더 근본적인 지연 원인이었다." },
    ],
    bookNotes: [
      { book: "D-Day", author: "Antony Beevor", insight: "해변·지휘부·프랑스 민간인의 경험을 교차해 상륙의 영웅담 뒤에 이어진 보카주 소모전을 보여준다.", url: "https://www.penguin.co.uk/books/133058/d-day-by-beevor-antony/9780241968970" },
      { book: "Sand and Steel", author: "Peter Caddick-Adams", insight: "상륙 이전 수년간의 훈련, 상륙주정 생산, 공병·해군 계획을 복원해 D-Day를 하루의 기습이 아닌 체계 구축의 결과로 본다." },
    ],
    sources: [
      { label: "D-Day: The Allies Invade Europe", publisher: "The National WWII Museum", url: "https://www.nationalww2museum.org/war/articles/d-day-allies-invade-europe" },
      { label: "D-Day", publisher: "Penguin Books", url: "https://www.penguin.co.uk/books/133058/d-day-by-beevor-antony/9780241968970" },
    ],
    relatedArticle: "operation-overlord",
  },
  {
    slug: "imphal-kohima",
    title: "임팔·코히마 전투",
    originalName: "Battles of Imphal and Kohima / Operation U-Go",
    theater: "버마·인도",
    type: "산악전·포위전",
    dates: "1944.03.08–07.18",
    location: "영국령 인도 마니푸르·나갈랜드",
    result: "연합군 승리, 일본 제15군 붕괴",
    accent: "#758b55",
    summary: "임팔·코히마는 일본군이 인도 국경을 넘은 마지막 대공세였다. 일본 계획은 영국·인도군의 보급품을 빼앗아 먹고 전진한다는 위험한 가정에 의존했고, 연합군은 포위된 부대를 공중보급하며 몬순 속에서도 버텼다.",
    background: [
      "1942년 버마를 점령한 일본은 인도 국경까지 도달했다. 1944년 무타구치 렌야는 임팔의 보급기지를 점령하고 인도 내 반영 감정을 자극해 연합군의 버마 반격을 막으려 했다.",
      "영국 제14군은 이전 패배에서 배워 보급선이 잘려도 퇴각하지 않고 항공보급을 받으며 방어하는 전술을 발전시켰다. 인도군의 확대와 말라리아 통제·수송 개선도 전투력을 바꿨다.",
    ],
    keyNumbers: [
      { label: "전역 기간", value: "약 4개월", caveat: "3월 공세부터 7월 일본 철수" },
      { label: "코히마 초기 수비", value: "약 2,500명", caveat: "비전투요원 포함 급조 수비대" },
      { label: "일본 제15군 손실", value: "약 5만 3천 명", caveat: "사망·실종 중심, 질병·기아 포함" },
      { label: "핵심 연합군 수단", value: "공중보급", caveat: "수송기와 제공권이 포위를 역전" },
    ],
    sides: [
      { name: "연합군", commanders: ["윌리엄 슬림", "제프리 스쿤스", "몬터규 스톱퍼드"], strength: "영국 제14군의 영국·인도·구르카·아프리카 부대", note: "공군 수송과 인도 철도·도로망으로 포위된 군단을 계속 보급했다." },
      { name: "일본·인도국민군", commanders: ["무타구치 렌야", "사토 고토쿠", "야나기다 모토소"], strength: "일본 제15군 3개 사단과 인도국민군 일부", note: "장거리 산악 보급을 현지 조달과 노획품에 의존했다." },
    ],
    plans: [
      { side: "연합군", title: "평원과 능선을 고수하며 하늘로 먹인다", description: "임팔 주위 사단을 안쪽으로 모으고 비행장을 지켰다. 코히마와 디마푸르 도로축을 증원해 포위망을 밖에서 압박했다." },
      { side: "일본", title: "빠른 포위로 임팔의 창고를 빼앗는다", description: "세 사단이 남·동·북에서 임팔을 감싸고, 31사단이 코히마를 넘어 디마푸르 보급기지를 위협할 계획이었다." },
    ],
    phases: [
      { date: "3월", title: "친드윈강 돌파", description: "일본군은 산악로를 넘어 영국·인도군 일부를 거의 포위했다. 연합군은 부대를 임팔 방어권으로 공수·후퇴시켰다." },
      { date: "4월 5–18일", title: "코히마 능선", description: "급조 수비대가 좁은 능선에서 약 1만 5천 일본군을 막았다. 총독 관저 테니스코트를 사이에 둔 근접전이 벌어졌다." },
      { date: "4–5월", title: "임팔 포위", description: "일본군은 눙시굼과 팔렐을 공격했지만 비행장을 닫지 못했다. 연합군은 병력·탄약뿐 아니라 차량과 동물까지 항공 수송했다." },
      { date: "5–6월", title: "코히마 구원과 도로 개통", description: "영국 제2사단이 능선을 되찾고 남쪽으로 진격했다. 6월 22일 임팔·코히마 도로가 다시 연결됐다." },
      { date: "7월", title: "기아 속 철수", description: "사토는 상관 명령을 거부하고 철수했으며 다른 사단도 몬순·질병·기아 속에 퇴각했다." },
    ],
    decisiveFactors: [
      { title: "공중보급", description: "일본은 포위가 곧 굶주림이라고 생각했지만 연합군은 하늘로 더 많은 물자를 받아 전투력을 유지했다." },
      { title: "병참 없는 야심", description: "무타구치는 적 창고를 점령한다는 가정에 보급을 걸었다. 공격이 늦어지자 병사와 수송동물이 함께 굶었다." },
      { title: "제14군의 학습", description: "슬림의 군대는 이전의 후퇴 경험에서 정글전·질병관리·합동작전과 사기를 개선했다." },
    ],
    aftermath: [
      "일본 제15군은 회복하기 어려운 피해를 입었고 연합군은 버마 탈환 공세로 전환했다. 1945년 메이크틸라·만달레이와 랑군으로 진격했다.",
      "이 전투는 오랫동안 유럽 중심 전쟁사에서 가려졌다. 실제로는 영국군만이 아니라 인도·구르카·아프리카 병력이 전역의 다수를 구성했다.",
    ],
    stories: [
      { title: "테니스코트 전투", level: "기록 확인", story: "코히마 총독 관저의 테니스코트 양쪽 참호가 불과 몇 미터 떨어져 수류탄과 근접전이 이어졌다.", verdict: "상징적 일화이지만 전체 방어선 여러 구역 중 하나였다." },
      { title: "사토의 명령 거부", level: "기록 확인", story: "제31사단장 사토는 보급 없는 공격을 계속하라는 무타구치의 명령을 비판하고 독자 철수를 시작했다.", verdict: "일본군 지휘체계의 붕괴와 병참 무시를 보여주는 드문 공개적 항명 사례다." },
      { title: "‘동양의 스탈린그라드’", level: "후대의 전설", story: "전투의 격렬함을 강조하려는 별칭이지만 규모·도시전 성격·전략 환경은 스탈린그라드와 다르다.", verdict: "비교 수사보다 임팔·코히마 자체의 식민지·아시아 맥락이 중요하다." },
    ],
    bookNotes: [
      { book: "Defeat into Victory", author: "William Slim", insight: "제14군 사령관의 회고로 학습·사기·병참을 명료하게 설명하지만 자신의 결정에 대한 사후 정당화도 고려해야 한다." },
      { book: "The Burma Campaign", author: "Frank McLynn", insight: "연합군 지휘관들의 충돌을 통해 버마전이 일본과의 전투이면서 제국 내부의 경쟁이기도 했음을 보여준다.", url: "https://yalebooks.yale.edu/book/9780300187441/the-burma-campaign/" },
    ],
    sources: [
      { label: "Battles of Imphal and Kohima", publisher: "National Army Museum", url: "https://www.nam.ac.uk/explore/battle-imphal" },
      { label: "Burma Campaign timeline", publisher: "National Army Museum", url: "https://www.nam.ac.uk/explore/timeline-burma-army" },
    ],
    relatedArticle: "china-burma-india",
  },
  {
    slug: "battle-of-iwo-jima",
    title: "이오지마 전투",
    originalName: "Battle of Iwo Jima / Operation Detachment",
    theater: "태평양",
    type: "상륙전·요새전",
    dates: "1945.02.19–03.26",
    location: "일본령 이오지마",
    result: "미군 점령, 일본 수비대 대부분 전사",
    accent: "#6d746f",
    summary: "이오지마는 해변에서의 만세돌격이 아니라 지하 진지와 상호 연결된 화점이 상륙군을 천천히 소모시킨 전투였다. 구리바야시는 해안에서 전멸하는 대신 섬 전체를 깊은 요새로 바꾸었다.",
    background: [
      "마리아나 제도에서 출격한 B-29는 일본 본토로 가는 길에 이오지마의 일본 전투기와 조기경보에 노출됐다. 미군은 이 섬을 전투기 호위·비상착륙·레이더 기지로 사용하려 했다.",
      "구리바야시 다다미치는 이전 섬 전투의 해안 결전을 버리고 동굴·터널·위장 포대를 연결했다. 장기간 폭격은 지상시설을 파괴했지만 깊은 지하진지 다수는 살아남았다.",
    ],
    keyNumbers: [
      { label: "상륙일", value: "1945.02.19", caveat: "미 해병 3개 사단 투입" },
      { label: "섬 크기", value: "약 21㎢", caveat: "작은 화산섬" },
      { label: "미군 사상자", value: "약 2만 6천 명", caveat: "전사·부상 합계의 일반적 추정" },
      { label: "일본 수비대", value: "약 2만 1천 명", caveat: "대부분 전사, 소수 포로·생존" },
    ],
    sides: [
      { name: "미국", commanders: ["홀랜드 스미스", "해리 슈미트", "마크 미처"], strength: "미 해병 제3·4·5사단과 제5함대", note: "압도적 해·공군 화력을 가졌지만 지하진지의 정확한 위치를 모두 파악하지 못했다." },
      { name: "일본", commanders: ["구리바야시 다다미치", "이치마루 리노스케"], strength: "육군·해군 약 2만 1천 명", note: "물과 식량이 제한된 상태에서 18km 이상으로 추정되는 터널망을 구축했다." },
    ],
    plans: [
      { side: "미국", title: "남쪽 비행장을 빠르게 점령하고 북진한다", description: "함포·항공폭격 뒤 해병대가 동남 해안에 상륙해 스리바치산을 고립시키고 비행장을 차례로 확보할 계획이었다." },
      { side: "일본", title: "상륙을 허용한 뒤 섬 안에서 피를 흘리게 한다", description: "해변 사격을 참아 병력이 밀집한 뒤 포격하고, 동굴 화점이 서로를 엄호하며 미군의 진격을 늦추려 했다." },
    ],
    phases: [
      { date: "2월 19일", title: "화산재 해변", description: "상륙은 큰 저항 없이 시작됐지만 부드러운 화산재가 차량과 보병을 묶었다. 일본 포병이 밀집한 해변에 사격을 시작하며 피해가 커졌다." },
      { date: "2월 20–23일", title: "스리바치산 고립", description: "미군은 섬 남부를 잘라내고 산을 포위했다. 23일 정상에 두 차례 성조기가 올랐다." },
      { date: "2월 말–3월 중순", title: "북부 요새지대", description: "모토야마 비행장, 382고지, ‘고기분쇄기’ 일대에서 동굴과 벙커를 하나씩 제거해야 했다. 점령한 진지 뒤에서 일본군이 다시 나타나기도 했다." },
      { date: "3월 16–26일", title: "잔여 저항", description: "섬의 확보가 선언된 뒤에도 전투가 이어졌다. 26일 새벽 일본군 수백 명이 마지막 기습을 벌였다." },
    ],
    decisiveFactors: [
      { title: "지하 요새", description: "폭격에서 살아남은 동굴과 터널이 병력 이동·탄약 저장·기습을 가능하게 했다." },
      { title: "미군의 화력과 공병", description: "전차·화염방사기·폭약·함포가 진지 제거에 사용됐다. 작은 섬에서 우회보다 정면 제거가 필요한 구간이 많았다." },
      { title: "고립", description: "일본 수비대는 증원·철수 가능성이 없었다. 전투 목표는 승리보다 미국에 최대 손실을 주고 시간을 버는 것이었다." },
    ],
    aftermath: [
      "이오지마는 B-29 비상착륙장과 전투기·구조 기지로 사용됐다. 섬의 전략적 가치와 희생의 비례를 둘러싼 논쟁은 계속된다.",
      "구리바야시의 종심방어는 오키나와 방어에도 영향을 줬다. 미군은 본토 상륙이 훨씬 더 큰 피해를 낳을 수 있다고 예상했다.",
    ],
    stories: [
      { title: "유명 사진은 두 번째 국기 게양", level: "기록 확인", story: "2월 23일 작은 첫 국기가 오른 뒤 더 큰 국기로 교체하는 장면을 조 로젠솔이 촬영했다.", verdict: "사진은 연출된 전투 장면이 아니지만 첫 게양 장면도 아니다." },
      { title: "사진 속 인물 식별", level: "해석 논쟁", story: "급박한 상황과 가려진 얼굴 때문에 참가자 신원이 여러 차례 수정됐다.", verdict: "2016년과 2019년 조사로 기존 식별 일부가 바뀌어, 집단기억도 자료에 따라 수정됨을 보여준다." },
      { title: "구리바야시의 시신은 발견되지 않았다", level: "기록 확인", story: "마지막 전투와 사망 장소에 대한 여러 증언이 있지만 확실한 유해는 확인되지 않았다.", verdict: "그의 마지막 돌격 방식과 정확한 사망 시점은 단정할 수 없다." },
    ],
    bookNotes: [
      { book: "The Ghosts of Iwo Jima", author: "Robert S. Burrell", insight: "상륙 결정을 당시 정보와 장기 전략 속에서 재평가해 ‘불필요한 전투’와 ‘필수 기지’라는 두 극단을 검토한다." },
      { book: "Flags of Our Fathers", author: "James Bradley with Ron Powers", insight: "사진 속 인물들의 전후 삶과 국가적 상징이 개인을 압도하는 과정을 다룬다. 이후 인물 식별 수정과 함께 읽어야 한다." },
    ],
    sources: [
      { label: "Iwo Jima, Nightmare in Hell", publisher: "U.S. Naval History and Heritage Command", url: "https://www.history.navy.mil/about-us/leadership/director/directors-corner/h-grams/h-gram-042/h-042-1.html" },
      { label: "U.S. Navy at War: Final Official Report", publisher: "U.S. Naval History and Heritage Command", url: "https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/u/us-navy-at-war-final-official-report.html" },
    ],
    relatedArticle: "war-in-the-pacific",
  },
  {
    slug: "battle-of-okinawa",
    title: "오키나와 전투",
    originalName: "Battle of Okinawa / Operation Iceberg",
    theater: "태평양",
    type: "상륙전·지구전·해공전",
    dates: "1945.04.01–06.22",
    location: "류큐 제도 오키나와",
    result: "연합군 점령, 일본 제32군 붕괴",
    accent: "#627f72",
    summary: "오키나와는 태평양전쟁 최대의 상륙전이자 군인과 민간인이 같은 섬에 갇힌 지구전이었다. 일본군은 해안 결전을 피하고 남부 능선에 방어를 집중했으며, 가미카제는 해상 지원함대에 전쟁 최대 규모의 자살공격을 가했다.",
    background: [
      "필리핀과 이오지마를 거친 미군은 일본 본토에서 약 550km 떨어진 오키나와를 비행장·함대기지와 본토 침공 준비지역으로 선택했다. 작전에는 1,600척 이상과 수십만 해군 인력이 동원됐다.",
      "우시지마 미쓰루의 제32군은 압도적 함포 사격을 피하려 북부와 해안 방어를 줄이고 슈리성을 중심으로 남부 석회암 능선에 깊은 진지를 만들었다. 일본 해군항공대는 대규모 가미카제 파상공격 기쿠스이를 준비했다.",
    ],
    keyNumbers: [
      { label: "미군 상륙", value: "1945.04.01", caveat: "부활절 일요일" },
      { label: "미군 사상자", value: "49,151명", caveat: "미 해군사령부 집계, 전사·실종 12,520" },
      { label: "가미카제 출격", value: "약 1,840회", caveat: "오키나와 전역 자살임무 추정" },
      { label: "민간인 사망", value: "수만~10만 이상 추정", caveat: "정확한 분류·집계가 어렵고 연구마다 차이" },
    ],
    sides: [
      { name: "연합군", commanders: ["사이먼 B. 버크너", "레이먼드 스프루언스", "로이 가이거"], strength: "미 제10군의 육군·해병대와 제5함대, 영국 태평양함대", note: "대규모 합동지휘와 해상보급을 운용했지만 가미카제와 장기 지상전에 큰 피해를 입었다." },
      { name: "일본", commanders: ["우시지마 미쓰루", "조 이사무", "오타 미노루"], strength: "제32군 약 7만 7천 명과 해군·현지 동원병", note: "오키나와 주민 약 2만 명도 방위대·노동대로 동원됐다." },
    ],
    plans: [
      { side: "연합군", title: "비행장을 확보하고 섬을 남북으로 가른다", description: "중서부 해안에 상륙해 가데나·요미탄 비행장을 점령하고, 육군은 남쪽 일본 주력으로, 해병대는 북쪽으로 진격할 계획이었다." },
      { side: "일본", title: "남부 능선에서 시간을 산다", description: "상륙해안에서 전멸하지 않고 지하진지·포병으로 미군을 오래 소모한다. 가미카제가 해상 수송과 지휘함을 공격해 지상군을 고립시키기를 기대했다." },
    ],
    phases: [
      { date: "4월 1–4일", title: "저항 없는 상륙", description: "미군은 예상과 달리 약한 해안 저항 속에 비행장을 점령하고 섬을 가로질렀다. 일본 주력은 남쪽에 숨어 있었다." },
      { date: "4월 6일 이후", title: "기쿠스이와 야마토", description: "가미카제 파상공격이 레이더 피켓 구축함을 집중 타격했다. 전함 야마토의 해상특공은 4월 7일 미 항공대에 격침됐다." },
      { date: "4월–5월", title: "가카즈·슈리 방어선", description: "미군은 능선·동굴·역사면 진지를 상대로 느린 소모전을 치렀다. 일본군의 5월 4일 반격은 큰 피해만 남기고 실패했다." },
      { date: "5월 말", title: "슈리 철수", description: "우시지마는 포위 전에 남부로 철수했다. 몬순 비와 진흙, 민간인 피란행렬 속에서 전선이 남쪽으로 이동했다." },
      { date: "6월", title: "남부 붕괴", description: "조직적 저항은 6월 22일 무렵 끝났고 우시지마와 조는 자결했다. 고립 병력과 민간인의 죽음은 이후에도 이어졌다." },
    ],
    decisiveFactors: [
      { title: "합동 해상력", description: "미군은 가미카제 피해에도 함포·항공·보급을 멈추지 않았다. 손상함을 수리·교대할 후방체계가 있었다." },
      { title: "깊은 지형 방어", description: "산호석 동굴과 능선은 포격 효과를 줄였지만 장기적으로 고립된 일본군의 보급을 해결할 수는 없었다." },
      { title: "민간인과 전장의 중첩", description: "주민 동원, 일본군 선전, 미군 포격과 전선 이동이 겹쳐 대규모 민간인 희생을 낳았다." },
    ],
    aftermath: [
      "오키나와의 피해는 미국 지도부가 일본 본토 침공 예상 손실을 판단하는 배경이 됐다. 다만 전투 피해와 원자폭탄 사용 결정 사이를 단일 인과로 단순화할 수는 없다.",
      "전후 오키나와는 1972년까지 미국 통치 아래 있었고 미군기지 집중 문제는 현재까지 이어진다. 전투 기억은 일본 본토 중심 서사와 다른 오키나와의 경험을 가진다.",
    ],
    stories: [
      { title: "히메유리 학도대", level: "기록 확인", story: "여학생과 교사들이 간호요원으로 동원돼 동굴병원에서 일했고 해산명령 뒤 다수가 전투와 자결 강요 속에 사망했다.", verdict: "개별 선택만이 아니라 국가·군의 동원과 교육이 만든 구조로 봐야 한다." },
      { title: "집단자결은 모두 자발적이었다?", level: "후대의 전설", story: "일본군의 명령·압박, 수류탄 배포, 미군에 대한 공포 선전과 지역 상황이 복합적으로 작용했다.", verdict: "‘숭고한 자발성’이나 단일한 직접명령 중 하나로만 설명하지 않는다." },
      { title: "가미카제가 미 해군을 거의 무너뜨렸다?", level: "해석 논쟁", story: "많은 함정과 승조원에게 심각한 피해와 정신적 충격을 줬지만 상륙지원과 보급을 중단시키지는 못했다.", verdict: "전술적 피해는 컸으나 작전 목표 달성에는 실패했다." },
    ],
    bookNotes: [
      { book: "Tennozan", author: "George Feifer", insight: "미·일 군인뿐 아니라 오키나와 주민의 경험을 중심에 놓아 ‘본토 방어의 전초전’이라는 국가 서사를 비판적으로 본다." },
      { book: "The Battle of Okinawa", author: "Yahara Hiromichi", insight: "일본 제32군 고급참모의 회고로 방어계획 내부를 보여주지만, 전후 자기책임 서술이라는 한계와 함께 읽어야 한다." },
    ],
    sources: [
      { label: "Battle of Okinawa", publisher: "U.S. Naval History and Heritage Command", url: "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1945/battle-of-okinawa.html" },
      { label: "Battle of Okinawa: Historic Overview & Importance", publisher: "U.S. Naval History and Heritage Command", url: "https://www.history.navy.mil/content/history/nhhc/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1945/battle-of-okinawa/okinawa-historic-overview-importance.html" },
    ],
    relatedArticle: "war-in-the-pacific",
  },
  {
    slug: "battle-of-berlin",
    title: "베를린 전투",
    originalName: "Берлинская наступательная операция / Battle of Berlin",
    theater: "동부전선",
    type: "도시전·최종 공세",
    dates: "1945.04.16–05.02",
    location: "독일 베를린·오데르강 전선",
    result: "소련 승리, 나치 정권 붕괴",
    accent: "#705e5a",
    summary: "베를린 전투는 이미 패배한 국가를 상대로 한 단순한 진군이 아니었다. 오데르강 방어선, 젤로고지와 시가전에서 큰 피해가 났고, 민간인·난민·강제노동자와 수용자들이 정권의 마지막 동원과 복수 폭력 사이에 놓였다.",
    background: [
      "1945년 1월 소련군은 비스와-오데르 공세로 베를린 60~70km 앞까지 진격했다. 보급과 측면을 정비한 뒤 주코프의 제1벨라루스전선군과 코네프의 제1우크라이나전선군이 수도를 향했다.",
      "독일은 정규군 잔여부대, 무장친위대, 국민돌격대와 히틀러유겐트를 동원했다. 서방 연합군은 엘베강을 향했지만 얄타에서 정해진 점령구역과 군사적 판단 때문에 베를린을 주 목표로 삼지 않았다.",
    ],
    keyNumbers: [
      { label: "공세 개시", value: "1945.04.16", caveat: "오데르·나이세 전선" },
      { label: "베를린 포위", value: "1945.04.25", caveat: "미·소군도 같은 날 토르가우에서 조우" },
      { label: "히틀러 자살", value: "1945.04.30", caveat: "총통벙커" },
      { label: "도시 항복", value: "1945.05.02", caveat: "독일 전체 항복은 5월 8일 발효" },
    ],
    sides: [
      { name: "소련·폴란드", commanders: ["게오르기 주코프", "이반 코네프", "콘스탄틴 로코솝스키"], strength: "3개 전선군의 대규모 포병·전차·항공전력", note: "주코프와 코네프의 경쟁은 진격 속도와 지휘 결정에 영향을 줬다." },
      { name: "독일", commanders: ["고트하르트 하인리치", "헬무트 바이틀링", "페르디난트 쇠르너"], strength: "비스와·중부집단군 잔여부대와 베를린 방위군", note: "병력 수치에는 훈련이 부족한 국민돌격대와 청소년이 포함돼 실전 능력 차이가 컸다." },
    ],
    plans: [
      { side: "소련", title: "오데르 방어를 돌파하고 도시를 포위한다", description: "주코프는 정면에서 젤로고지를 뚫고, 코네프는 남쪽에서 전차군을 북서쪽으로 돌려 베를린을 감싸며 서방 연합군과의 접촉선에 도달할 계획이었다." },
      { side: "독일", title: "방어선에서 시간을 벌고 구원군을 기다린다", description: "하인리치는 젤로고지에 종심 방어를 준비했다. 히틀러는 슈타이너와 벵크의 존재하지 않거나 약한 부대가 반격해 도시를 구할 것이라 명령했다." },
    ],
    phases: [
      { date: "4월 16–19일", title: "젤로고지", description: "소련의 대규모 조명·포격 뒤 공격이 시작됐지만 독일군은 전방진지를 비우고 고지에 방어했다. 진창·지형·혼잡으로 주코프군의 진격이 느려졌다." },
      { date: "4월 20–25일", title: "포위", description: "소련 포병이 히틀러 생일에 베를린을 사격하기 시작했다. 코네프군이 남쪽에서 올라와 도시를 감싸고 독일 제9군을 할베 일대에 고립시켰다." },
      { date: "4월 26–30일", title: "시가전과 총통벙커", description: "소련군은 철도·운하·두꺼운 건물을 따라 구역별로 진격했다. 히틀러는 30일 자살했고 괴벨스가 짧게 후계 내각을 이끌었다." },
      { date: "4월 30일–5월 2일", title: "국회의사당과 항복", description: "국회의사당에서 격전이 벌어졌고 여러 부대가 붉은 깃발을 세웠다. 방위사령관 바이틀링은 5월 2일 항복을 명령했다." },
    ],
    decisiveFactors: [
      { title: "압도적 작전 자원", description: "소련군은 포병·전차·공병과 보급에서 절대 우위를 가졌고 독일은 예비대·연료·통신이 붕괴했다." },
      { title: "정치가 군사를 압도", description: "나치 지도부는 민간인 대피와 합리적 항복보다 상징적 고수를 명령해 불필요한 희생을 늘렸다." },
      { title: "도시 지형", description: "운하·지하철·철근건물이 진격을 늦췄지만 독일 방어부대는 서로 단절돼 전체 반격을 조직할 수 없었다." },
    ],
    aftermath: [
      "베를린 함락 뒤 독일군은 5월 7일 랭스, 8일 베를린-카를스호르스트에서 무조건 항복문서에 서명했다. 도시는 4개 점령구역으로 나뉘어 냉전의 전면이 됐다.",
      "소련군의 대규모 성폭력과 약탈이 베를린과 동부독일에서 발생했다. 나치 범죄에 대한 복수와 상급부대의 통제 실패가 결합했으며 피해 규모의 정확한 집계에는 논쟁이 있다.",
    ],
    stories: [
      { title: "국회의사당의 유명한 깃발 사진", level: "기록 확인", story: "예브게니 할데이의 사진은 실제 전투 후 5월 2일 다시 연출해 촬영했고, 약탈한 시계로 보일 수 있는 병사의 손목 부분도 수정됐다.", verdict: "연출됐지만 국회의사당 점령 자체가 허구인 것은 아니다." },
      { title: "히틀러는 베를린에서 탈출했다?", level: "후대의 전설", story: "남미 탈출설이 반복되지만 벙커 생존자 증언과 치과기록·유해 감정은 4월 30일 자살을 강하게 뒷받침한다.", verdict: "대중문화적 음모론으로 역사적 근거가 없다." },
      { title: "슈타이너의 반격", level: "기록 확인", story: "히틀러는 지도 위의 불완전한 부대에 반격을 명령했다. 실제 병력은 대규모 작전을 수행할 수 없었다.", verdict: "벙커 지도부가 현실의 전력과 단절된 상징적 사건이다." },
    ],
    bookNotes: [
      { book: "Berlin: The Downfall 1945", author: "Antony Beevor", insight: "군사작전과 난민·여성·강제노동자의 경험을 교차해 승리와 복수폭력, 나치의 자기파괴를 함께 다룬다.", url: "https://www.penguin.co.uk/books/25571/berlin-by-beevor-antony/9780141903026" },
      { book: "The Last Battle", author: "Cornelius Ryan", insight: "다수의 인터뷰로 베를린 내부와 연합국 지휘부의 시점을 연결한 고전적 서사다. 냉전 초기 자료 한계와 함께 읽을 필요가 있다." },
    ],
    sources: [
      { label: "Berlin: The Downfall 1945", publisher: "Penguin Books", url: "https://www.penguin.co.uk/books/25571/berlin-by-beevor-antony/9780141903026" },
      { label: "1945: A momentous year", publisher: "Imperial War Museums", url: "https://www.iwm.org.uk/history/1945-a-momentous-year" },
    ],
    relatedArticle: "eastern-front",
  },
];

export const battleTheaters = ["전체", ...new Set(battles.map((battle) => battle.theater))];

export function getBattle(slug: string) {
  return battles.find((battle) => battle.slug === slug);
}

export function getRelatedBattles(battle: BattleDossier, limit = 3) {
  return battles
    .filter((item) => item.slug !== battle.slug)
    .map((item) => ({ item, score: (item.theater === battle.theater ? 3 : 0) + (item.type === battle.type ? 2 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
