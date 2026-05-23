export const TODAY = new Date();

export const VAS = [
  // 男聲優 15 位
  { id: 'kamiya',      ja: '神谷浩史',   romaji: 'Kamiya',      color: '#2563eb', bday: '01-28', age: 50, debut: 1994 },
  { id: 'miyano',      ja: '宮野真守',   romaji: 'Miyano',      color: '#7c3aed', bday: '06-08', age: 38, debut: 2003 },
  { id: 'nakamura',    ja: '中村悠一',   romaji: 'Nakamura',    color: '#0f766e', bday: '02-20', age: 42, debut: 2004 },
  { id: 'sugita',      ja: '杉田智和',   romaji: 'Sugita',      color: '#64748b', bday: '10-16', age: 41, debut: 2000 },
  { id: 'kaji',        ja: '梶裕貴',     romaji: 'Kaji',        color: '#0284c7', bday: '09-03', age: 40, debut: 2004 },
  { id: 'matsuoka',    ja: '松岡禎丞',   romaji: 'Matsuoka',    color: '#e11d48', bday: '09-17', age: 35, debut: 2012 },
  { id: 'hanae',       ja: '花江夏樹',   romaji: 'Hanae',       color: '#f97316', bday: '02-26', age: 31, debut: 2011 },
  { id: 'sakurai',     ja: '櫻井孝宏',   romaji: 'Sakurai',     color: '#475569', bday: '06-13', age: 49, debut: 1994 },
  { id: 'ishida',      ja: '石田彰',     romaji: 'Ishida',      color: '#94a3b8', bday: '11-02', age: 58, debut: 1989 },
  { id: 'fukuyama',    ja: '福山潤',     romaji: 'Fukuyama',    color: '#9333ea', bday: '11-26', age: 44, debut: 1998 },
  { id: 'ono_d',       ja: '小野大輔',   romaji: 'OnoD',        color: '#1d4ed8', bday: '05-04', age: 43, debut: 2004 },
  { id: 'suwabe',      ja: '諏訪部順一', romaji: 'Suwabe',      color: '#b45309', bday: '03-16', age: 51, debut: 1999 },
  { id: 'tsuda',       ja: '津田健次郎', romaji: 'Tsuda',       color: '#334155', bday: '08-11', age: 52, debut: 1995 },
  { id: 'shimono',     ja: '下野紘',     romaji: 'Shimono',     color: '#65a30d', bday: '12-21', age: 43, debut: 2002 },
  { id: 'saito',       ja: '齊藤壯馬',   romaji: 'Saito',       color: '#06b6d4', bday: '09-14', age: 32, debut: 2014 },
  // 女聲優 15 位
  { id: 'hanazawa',    ja: '花澤香菜',   romaji: 'Hanazawa',    color: '#ff5e8a', bday: '02-25', age: 36, debut: 2003 },
  { id: 'hayami',      ja: '早見沙織',   romaji: 'Hayami',      color: '#818cf8', bday: '05-29', age: 32, debut: 2007 },
  { id: 'takahashi',   ja: '高橋李依',   romaji: 'Takahashi',   color: '#f43f5e', bday: '02-27', age: 29, debut: 2013 },
  { id: 'minase',      ja: '水瀨祈',     romaji: 'Minase',      color: '#a78bfa', bday: '12-23', age: 27, debut: 2013 },
  { id: 'tanezaki',    ja: '種崎敦美',   romaji: 'Tanezaki',    color: '#34d399', bday: '11-08', age: 32, debut: 2012 },
  { id: 'sakura',      ja: '佐倉綾音',   romaji: 'Sakura',      color: '#fb7185', bday: '06-26', age: 32, debut: 2010 },
  { id: 'yuuki',       ja: '悠木碧',     romaji: 'Yuuki',       color: '#c084fc', bday: '03-27', age: 30, debut: 2003 },
  { id: 'kito',        ja: '鬼頭明里',   romaji: 'Kito',        color: '#f472b6', bday: '10-16', age: 26, debut: 2017 },
  { id: 'hayashibara', ja: '林原惠',     romaji: 'Hayashibara', color: '#dc2626', bday: '03-30', age: 57, debut: 1988 },
  { id: 'kugimiya',    ja: '釘宮理恵',   romaji: 'Kugimiya',    color: '#f97316', bday: '05-30', age: 47, debut: 1998 },
  { id: 'sawashiro',   ja: '澤城美雪',   romaji: 'Sawashiro',   color: '#7c3aed', bday: '03-20', age: 39, debut: 2003 },
  { id: 'kayano',      ja: '茅野愛衣',   romaji: 'Kayano',      color: '#0ea5e9', bday: '01-13', age: 37, debut: 2010 },
  { id: 'uchida',      ja: '內田真禮',   romaji: 'Uchida',      color: '#e879f9', bday: '12-23', age: 31, debut: 2011 },
  { id: 'amamiya',     ja: '雨宮天',     romaji: 'Amamiya',     color: '#38bdf8', bday: '09-27', age: 30, debut: 2013 },
  { id: 'ueda',        ja: '上田麗奈',   romaji: 'Ueda',        color: '#a3e635', bday: '06-27', age: 30, debut: 2013 },
];

export const ROOKIES = [
  { id: 'kimura',     ja: '木村太飛',   romaji: 'Kimura',     color: '#e11d48', age: 23, debut: 2023, role: '陰陽廻天 Re:バース・業平猛' },
  { id: 'nakayama',   ja: '中山祥徳',   romaji: 'Nakayama',   color: '#0284c7', age: 24, debut: 2023, role: '薫る花は凛と咲く・紬凛太郎' },
  { id: 'takano',     ja: '高野大河',   romaji: 'Takano',     color: '#10b981', age: 22, debut: 2024, role: '声優アワード新人賞' },
  { id: 'terazawa',   ja: '寺澤百花',   romaji: 'Terazawa',   color: '#f43f5e', age: 21, debut: 2024, role: '声優アワード新人賞' },
  { id: 'hishikawa',  ja: '菱川花菜',   romaji: 'Hishikawa',  color: '#a855f7', age: 22, debut: 2024, role: '声優アワード新人賞' },
  { id: 'fujidera',   ja: '藤寺美徳',   romaji: 'Fujidera',   color: '#f59e0b', age: 23, debut: 2023, role: '声優アワード新人賞' },
  { id: 'mikawa',     ja: '三川華月',   romaji: 'Mikawa',     color: '#06b6d4', age: 20, debut: 2024, role: '声優アワード新人賞' },
  { id: 'murakami',   ja: '村上まなつ', romaji: 'Murakami',   color: '#ec4899', age: 21, debut: 2024, role: '声優アワード新人賞' },
];


export const TYPES = {
  all:     { tc: '全部',   ja: '全て',     en: 'All',          ko: '전체',   color: '#111' },
  concert: { tc: '演唱會', ja: 'ライブ',   en: 'Concert',      ko: '콘서트', color: '#ff3366' },
  meet:    { tc: '見面會', ja: 'イベント', en: 'Meet & Greet', ko: '팬미팅', color: '#9b5cff' },
  radio:   { tc: '廣播',   ja: 'ラジオ',   en: 'Radio Show',   ko: '라디오', color: '#0ea5e9' },
  stage:   { tc: '舞台劇', ja: '舞台',     en: 'Stage',        ko: '연극',   color: '#f59e0b' },
  other:   { tc: '其他',   ja: 'その他',   en: 'Other',        ko: '기타',   color: '#64748b' },
};

export const TYPE_MAP = {
  'ライブ':   'concert',
  'イベント': 'meet',
  '握手会':   'meet',
  'ラジオ':   'radio',
  '舞台':     'stage',
  '舞台挨拶': 'stage',
  'その他':   'other',
  '演唱會': 'concert',
  '見面會': 'meet',
  '握手會': 'meet',
  '廣播':   'radio',
  '舞台劇': 'stage',
  '其他':   'other',
};

export const STR = {
  brand:     { tc: '聲優NOW',                    ja: '声優NOW',                     en: 'VOICE NOW',                         ko: '성우NOW' },
  tagline:   { tc: '日本聲優活動每週更新',        ja: '声優イベント情報を毎週更新',   en: 'Weekly Japanese voice actor events', ko: '일본 성우 이벤트 주간 업데이트' },
  search:    { tc: '搜尋活動或聲優…',            ja: 'イベントや声優を検索…',        en: 'Search events or VAs…',             ko: '이벤트 또는 성우 검색…' },
  subscribe: { tc: '訂閱聲優',                   ja: '声優をフォロー',               en: 'Follow voice actors',               ko: '성우 구독' },
  notify:    { tc: '開啟瀏覽器通知',             ja: '通知をオン',                   en: 'Enable notifications',              ko: '알림 켜기' },
  notifyOn:  { tc: '通知已開啟',                 ja: '通知中',                       en: 'Notifying you',                     ko: '알림 켜짐' },
  featured:  { tc: '本週焦點',                   ja: '今週の注目',                   en: 'This Week',                         ko: '이번 주 주목' },
  upcoming:  { tc: '即將舉行',                   ja: '近日開催',                     en: 'Upcoming',                          ko: '예정' },
  countdown: { tc: '倒數',                       ja: 'あと',                         en: 'IN',                                ko: 'D-' },
  days:      { tc: '天',                         ja: '日',                           en: 'DAYS',                              ko: '일' },
  events:    { tc: '場活動',                     ja: '件のイベント',                  en: 'events',                            ko: '개' },
  reset:     { tc: '清除篩選',                   ja: 'クリア',                       en: 'Clear filters',                     ko: '초기화' },
  myList:    { tc: '我的訂閱',                   ja: 'フォロー中',                   en: 'My list',                           ko: '내 구독' },
  myListSub: { tc: '你追蹤的聲優最近活動',       ja: 'お気に入りの最新イベント',     en: 'Latest from VAs you follow',        ko: '구독한 성우의 최신 활동' },
  emptySubs: { tc: '下方訂閱聲優就會出現在這裡', ja: '声優をフォローするとここに表示', en: 'Follow VAs and they appear here',  ko: '성우를 구독하면 여기에 표시' },
  bdayWeek:  { tc: '本週生日',                   ja: '今週の誕生日',                 en: 'Birthdays this week',               ko: '이번주 생일' },
  bdaySub:   { tc: '記得送花 🎂',                ja: 'お祝いを忘れずに 🎂',          en: 'Send some love 🎂',                 ko: '축하 메시지 🎂' },
  rookie:    { tc: '新人聲優',                   ja: '新人声優',                     en: 'Rookie voices',                     ko: '신인 성우' },
  rookieSub: { tc: '剛出道值得關注的新人',       ja: '今注目のデビュー組',           en: 'Fresh debuts worth following',      ko: '주목해야 할 신인들' },
  yrs:       { tc: '歲',                         ja: '歳',                           en: 'yrs',                               ko: '세' },
  debutY:    { tc: '出道',                       ja: 'デビュー',                     en: 'Debut',                             ko: '데뷔' },
  palette:   { tc: '主題色',                     ja: 'カラー',                       en: 'Palette',                           ko: '테마' },
  empty:     { tc: '目前沒有活動',               ja: 'イベントがありません',          en: 'No events',                         ko: '활동 없음' },
  loading:   { tc: '載入中…',                   ja: '読み込み中…',                   en: 'Loading…',                          ko: '로딩 중…' },
  subSubtitle:{ tc: '追蹤喜歡的聲優，活動上線即時通知', ja: 'お気に入りの声優をフォローして最新情報を', en: 'Get notified when followed VAs have new events', ko: '좋아하는 성우 활동을 실시간 알림으로' },
};

export const PALETTES = {
  yellow: {
    name: { tc: '黃黑', ja: 'イエロー', en: 'YELLOW', ko: '옐로우' },
    bg: '#0e0e0e', text: '#fff',
    p1: '#fff200', p2: '#ff2d6f', p3: '#00e5ff',
    cream: '#f3eedd', ink: '#0e0e0e',
    swatches: ['#fff200', '#ff2d6f', '#0e0e0e'],
  },
  pinkblue: {
    name: { tc: '粉藍', ja: 'ピンク×ブルー', en: 'PINK×BLUE', ko: '핑크 블루' },
    bg: '#1a0f24', text: '#fff',
    p1: '#ff7eb6', p2: '#5b8def', p3: '#ffd966',
    cream: '#fff3f7', ink: '#1a0f24',
    swatches: ['#ff7eb6', '#5b8def', '#ffd966'],
  },
  purpleteal: {
    name: { tc: '紫青', ja: 'パープル×シアン', en: 'PURPLE×TEAL', ko: '퍼플 시안' },
    bg: '#0b0a1f', text: '#fff',
    p1: '#a78bfa', p2: '#22d3ee', p3: '#fbbf24',
    cream: '#f0eafd', ink: '#1a0b2e',
    swatches: ['#a78bfa', '#22d3ee', '#fbbf24'],
  },
};

export const LANGS_POSTER = [
  { code: 'tc', label: '繁中',   i18n: 'zh' },
  { code: 'ja', label: '日本語', i18n: 'ja' },
  { code: 'en', label: 'EN',     i18n: 'en' },
  { code: 'ko', label: '한국어', i18n: 'ko' },
];

export function daysUntil(dateStr, today = TODAY) {
  const d = new Date(dateStr + 'T00:00:00');
  return Math.round((d - today) / 86400000);
}

export function fmtDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00');
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
  const wd = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][d.getDay()];
  const wdJa = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];
  if (lang === 'ja') return `${y}.${String(m).padStart(2, '0')}.${String(day).padStart(2, '0')}（${wdJa}）`;
  if (lang === 'en') return `${wd} · ${['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][m-1]} ${day}, ${y}`;
  if (lang === 'ko') return `${y}.${m}.${day} (${['일','월','화','수','목','금','토'][d.getDay()]})`;
  return `${y}.${String(m).padStart(2, '0')}.${String(day).padStart(2, '0')}（${wdJa}）`;
}

export function str(key, lang) {
  return (STR[key] && STR[key][lang]) || (STR[key] && STR[key].tc) || key;
}

export function typeLabel(typeKey, lang) {
  return TYPES[typeKey] ? TYPES[typeKey][lang] : typeKey;
}

export function birthdaysThisWeek(today = TODAY) {
  const out = [];
  for (const v of VAS) {
    const [month, day] = v.bday.split('-').map(Number);
    let bd = new Date(today.getFullYear(), month - 1, day);
    if (bd < today) bd = new Date(today.getFullYear() + 1, month - 1, day);
    const diff = Math.round((bd - today) / 86400000);
    if (diff <= 8 && diff >= 0) out.push({ ...v, daysToBday: diff, bdayDate: bd });
  }
  return out.sort((a, b) => a.daysToBday - b.daysToBday);
}

export function mapLang(i18nLang) {
  return i18nLang === 'zh' ? 'tc' : (i18nLang || 'tc');
}