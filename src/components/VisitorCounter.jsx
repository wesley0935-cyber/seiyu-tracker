import { useEffect, useState, useContext } from 'react';
import { supabase } from '../supabaseClient';
import { PaletteCtx } from './EventCard';

// 多語言標籤（不依賴 i18n，內嵌即可）
const LABELS = {
  tc: { today: '今日瀏覽', total: '累計',  unit: '次' },
  ja: { today: '本日閲覧', total: '累計',  unit: '回' },
  en: { today: 'TODAY',    total: 'TOTAL', unit: 'views' },
  ko: { today: '오늘',     total: '누적',  unit: '회' },
};

function fmt(n) {
  if (n == null) return '—';
  return n.toLocaleString();
}

export default function VisitorCounter({ lang = 'tc' }) {
  const pal = useContext(PaletteCtx);
  const [todayCount, setTodayCount] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  const lbl = LABELS[lang] || LABELS.tc;
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  useEffect(() => {
    async function recordAndFetch() {
      // ── 每個 session 只計一次，避免 F5 洗版 ──
      const alreadyCounted = sessionStorage.getItem('pv_counted') === today;

      if (!alreadyCounted) {
        // 查今天的 row
        const { data: existing } = await supabase
          .from('page_views')
          .select('id, count')
          .eq('date', today)
          .maybeSingle();

        if (existing) {
          // 今天已有紀錄 → count + 1
          await supabase
            .from('page_views')
            .update({ count: existing.count + 1 })
            .eq('id', existing.id);
        } else {
          // 今天第一筆 → 新增
          await supabase
            .from('page_views')
            .insert({ date: today, count: 1 });
        }
        sessionStorage.setItem('pv_counted', today);
      }

      // ── 讀取今日 & 總計 ──
      const { data: todayRow } = await supabase
        .from('page_views')
        .select('count')
        .eq('date', today)
        .maybeSingle();

      setTodayCount(todayRow?.count ?? 0);

      const { data: allRows } = await supabase
        .from('page_views')
        .select('count');

      if (allRows) {
        setTotalCount(allRows.reduce((sum, r) => sum + (r.count || 0), 0));
      }
    }

    recordAndFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{
      background: pal.ink,
      borderBottom: `2px solid ${pal.p1}`,
      padding: '6px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      position: 'relative',
      zIndex: 3,
      overflow: 'hidden',
    }}>
      {/* 左側：眼睛圖示 + 日期 */}
      <div style={{
        fontFamily: '"Space Mono",monospace',
        fontSize: 10,
        letterSpacing: '.18em',
        color: 'rgba(255,255,255,.4)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        👁 {today}
      </div>

      {/* 分隔線 */}
      <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,.15)' }} />

      {/* 今日瀏覽 */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: 10, letterSpacing: '.15em',
          color: 'rgba(255,255,255,.45)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>{lbl.today}</span>
        <span style={{
          fontFamily: '"Anton",sans-serif',
          fontSize: 20, lineHeight: 1,
          color: pal.p1,
          letterSpacing: '.04em',
          transition: 'color .3s',
        }}>{fmt(todayCount)}</span>
        <span style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: 10, color: 'rgba(255,255,255,.4)',
          letterSpacing: '.1em',
        }}>{lbl.unit}</span>
      </div>

      {/* 分隔線 */}
      <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,.15)' }} />

      {/* 總計 */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: 10, letterSpacing: '.15em',
          color: 'rgba(255,255,255,.45)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>{lbl.total}</span>
        <span style={{
          fontFamily: '"Anton",sans-serif',
          fontSize: 20, lineHeight: 1,
          color: pal.p3,
          letterSpacing: '.04em',
          transition: 'color .3s',
        }}>{fmt(totalCount)}</span>
        <span style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: 10, color: 'rgba(255,255,255,.4)',
          letterSpacing: '.1em',
        }}>{lbl.unit}</span>
      </div>

      {/* 右側裝飾 */}
      <div style={{ marginLeft: 'auto' }}>
        <span style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: 9, letterSpacing: '.2em',
          color: 'rgba(255,255,255,.2)',
          textTransform: 'uppercase',
        }}>◆ LIVE STATS ◆</span>
      </div>
    </div>
  );
}
