export const TODAY = new Date('2026-05-22T00:00:00');

export const VAS = [
  { id: 'kamiya',    ja: '神谷浩史', romaji: 'Kamiya',    color: '#2563eb', bday: '01-28', age: 50, debut: 1994 },
  { id: 'hanazawa',  ja: '花澤香菜', romaji: 'Hanazawa',  color: '#ff5e8a', bday: '02-25', age: 36, debut: 2003 },
  { id: 'kaji',      ja: '梶裕貴',   romaji: 'Kaji',      color: '#0f766e', bday: '09-03', age: 40, debut: 2004 },
  { id: 'kugimiya',  ja: '釘宮理恵', romaji: 'Kugimiya',  color: '#f97316', bday: '05-30', age: 47, debut: 1998 },
  { id: 'kobayashi', ja: '小林愛香', romaji: 'Aika',      color: '#a855f7', bday: '12-12', age: 29, debut: 2014 },
  { id: 'yamashita', ja: '山下大輝', romaji: 'Yamashita', color: '#e11d48', bday: '09-07', age: 31, debut: 2014 },
  { id: 'okamoto',   ja: '岡本信彦', romaji: 'Okamoto',   color: '#0284c7', bday: '10-24', age: 39, debut: 2006 },
  { id: 'seki',      ja: '関智一',   romaji: 'Seki',      color: '#65a30d', bday: '09-08', age: 53, debut: 1988 },
  { id: 'iwata',     ja: '岩田陽葵', romaji: 'Iwata',     color: '#db2777', bday: '05-25', age: 24, debut: 2019 },
  { id: 'toki',      ja: '土岐隼一', romaji: 'Toki',      color: '#7c3aed', bday: '07-15', age: 31, debut: 2017 },
];

export const ROOKIES = [
  { id: 'tsukishiro', ja: '月城ひかり', romaji: 'Tsukishiro', color: '#10b981', age: 19, debut: 2025, role: '魔法少女・主役' },
  { id: 'morikawa',   ja: '森川蓮',     romaji: 'Morikawa',   color: '#06b6d4', age: 21, debut: 2025, role: 'スポーツ系・準主役' },
  { id: 'umino',      ja: '海野楓',     romaji: 'Umino',      color: '#f43f5e', age: 18, debut: 2026, role: 'デビュー作主演' },
  { id: 'kiritani',   ja: '桐ヶ谷涼',   romaji: 'Kiritani',   color: '#f59e0b', age: 22, debut: 2025, role: 'ヒロイン枠' },
];

export const TYPES = {
  all:     { tc: '全部',   ja: '全て',     en: 'All',          ko: '전체',   color: '#111' },
  concert: { tc: '演唱會', ja: 'ライブ',   en: 'Concert',      ko: '콘서트', color: '#ff3366' },
  meet:    { tc: '見面會', ja: 'イベント', en: 'Meet & Greet', ko: '팬미팅', color: '#9b5cff' },
  radio:   { tc: '廣播',   ja: 'ラジオ',   en: 'Radio Show',   ko: '라디오', color: '#0ea5e9' },
  stage:   { tc: '舞台劇', ja: '舞台',     en: 'Stage',        ko: '연극',   color: '#f59e0b' },
  other:   { tc: '其他',   ja: 'その他',   en: 'Other',        ko: '기타',   color: '#64748b' },
};

// Supabase event_type (中文) → design type key (英文)
export const TYPE_MAP = {
  // 日文（Supabase 實際存的值）
  'ライブ':   'concert',
  'イベント': 'meet',
  '握手会':   'meet',
  'ラジオ':   'radio',
  '舞台':     'stage',
  '舞台挨拶': 'stage',
  'その他':   'other',
  // 中文（舊資料相容）
  '演唱會': 'concert',
  '見面會': 'meet',
  '握手會': 'meet',
  '廣播':   'radio',
  '舞台劇': 'stage',
  '其他':   'other',
};

export const STR = {
  brand:     { tc: '聲優NOW',                  ja: '声優NOW',                    en: 'VOICE NOW',                        ko: '성우NOW' },
  tagline:   { tc: '日本聲優活動每週更新',      ja: '声優イベント情報を毎週更新',  en: 'Weekly Japanese voice actor events', ko: '일본 성우 이벤트 주간 업데이트' },
  search:    { tc: '搜尋活動或聲優…',          ja: 'イベントや声優を検索…',       en: 'Search events or VAs…',            ko: '이벤트 또는 성우 검색…' },
  subscribe: { tc: '訂閱聲優',                 ja: '声優をフォロー',              en: 'Follow voice actors',              ko: '성우 구독' },
  notify:    { tc: '開啟瀏覽器通知',           ja: '通知をオン',                  en: 'Enable notifications',             ko: '알림 켜기' },
  notifyOn:  { tc: '通知已開啟',               ja: '通知中',                      en: 'Notifying you',                    ko: '알림 켜짐' },
  featured:  { tc: '本週焦點',                 ja: '今週の注目',                  en: 'This Week',                        ko: '이번 주 주목' },
  upcoming:  { tc: '即將舉行',                 ja: '近日開催',                    en: 'Upcoming',                         ko: '예정' },
  countdown: { tc: '倒數',                     ja: 'あと',                        en: 'IN',                               ko: 'D-' },
  days:      { tc: '天',                       ja: '日',                          en: 'DAYS',                             ko: '일' },
  events:    { tc: '場活動',                   ja: '件のイベント',                 en: 'events',                           ko: '개' },
  reset:     { tc: '清除篩選',                 ja: 'クリア',                      en: 'Clear filters',                    ko: '초기화' },
  myList:    { tc: '我的訂閱',                 ja: 'フォロー中',                  en: 'My list',                          ko: '내 구독' },
  myListSub: { tc: '你追蹤的聲優最近活動',     ja: 'お気に入りの最新イベント',    en: 'Latest from VAs you follow',       ko: '구독한 성우의 최신 활동' },
  emptySubs: { tc: '下方訂閱聲優就會出現在這裡', ja: '声優をフォローするとここに表示', en: 'Follow VAs and they appear here', ko: '성우를 구독하면 여기에 표시' },
  bdayWeek:  { tc: '本週生日',                 ja: '今週の誕生日',                en: 'Birthdays this week',              ko: '이번주 생일' },
  bdaySub:   { tc: '記得送花 🎂',              ja: 'お祝いを忘れずに 🎂',         en: 'Send some love 🎂',                ko: '축하 메시지 🎂' },
  rookie:    { tc: '新人聲優',                 ja: '新人声優',                    en: 'Rookie voices',                    ko: '신인 성우' },
  rookieSub: { tc: '剛出道值得關注的新人',     ja: '今注目のデビュー組',          en: 'Fresh debuts worth following',     ko: '주목해야 할 신인들' },
  yrs:       { tc: '歲',                       ja: '歳',                          en: 'yrs',                              ko: '세' },
  debutY:    { tc: '出道',                     ja: 'デビュー',                    en: 'Debut',                            ko: '데뷔' },
  palette:   { tc: '主題色',                   ja: 'カラー',                      en: 'Palette',                          ko: '테마' },
  empty:     { tc: '目前沒有活動',             ja: 'イベントがありません',         en: 'No events',                        ko: '활동 없음' },
  loading:   { tc: '載入中…',                 ja: '読み込み中…',                  en: 'Loading…',                         ko: '로딩 중…' },
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

// i18n 語言碼 (zh/ja/en/ko) → 海報語言碼 (tc/ja/en/ko)
export function mapLang(i18nLang) {
  return i18nLang === 'zh' ? 'tc' : (i18nLang || 'tc');
}
