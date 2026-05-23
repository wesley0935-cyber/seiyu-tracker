import { useContext } from 'react';
import { PaletteCtx } from './EventCard';

const CONTACT_TEXT = {
  tc: '有任何問題或建議，歡迎來信',
  ja: 'ご意見・お問い合わせはこちら',
  en: 'Questions or feedback? Drop us a line.',
  ko: '문의 및 제안은 이메일로 연락해 주세요',
};

export default function Footer({ lang = 'tc' }) {
  const pal = useContext(PaletteCtx);
  const email = 'voicesaiko.fans@gmail.com';
  const text = CONTACT_TEXT[lang] || CONTACT_TEXT.tc;

  return (
    <footer style={{ position: 'relative', zIndex: 1 }}>

      {/* ── 上半：MADE FOR FANS 橫幅 ── */}
      <div style={{
        background: pal.p1,
        color: pal.ink,
        borderTop: `3px solid ${pal.ink}`,
        padding: '18px 32px',
        fontFamily: '"Anton",sans-serif',
        fontSize: 22,
        letterSpacing: '.12em',
        textAlign: 'center',
      }}>
        <span className="posb-star">★</span>
        {' '}聲優NOW · VOICE NOW · MADE FOR FANS · 2026{' '}
        <span className="posb-star-rev">★</span>
        <span className="posb-star-slow">★</span>
      </div>

      {/* ── 下半：聯絡資訊 + 版權 ── */}
      <div style={{
        background: pal.ink,
        borderTop: `2px solid rgba(255,255,255,.08)`,
        padding: '28px 32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
      }}>
        {/* 聯絡呼籲 */}
        <p style={{
          margin: 0,
          fontFamily: '"Shippori Mincho B1",serif',
          fontSize: 15,
          color: 'rgba(255,255,255,.55)',
          letterSpacing: '.06em',
        }}>{text}</p>

        {/* Email 連結 */}
        <a
          href={`mailto:${email}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '9px 22px',
            border: `2px solid ${pal.p1}`,
            background: 'transparent',
            color: pal.p1,
            fontFamily: '"Space Mono",monospace',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.1em',
            textDecoration: 'none',
            transition: 'background .2s, color .2s',
            boxShadow: `3px 3px 0 ${pal.p2}`,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = pal.p1;
            e.currentTarget.style.color = pal.ink;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = pal.p1;
          }}
        >
          ✉ {email}
        </a>

        {/* 分隔線 */}
        <div style={{
          width: 48,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${pal.p2}, transparent)`,
          margin: '2px 0',
        }} />

        {/* 版權 */}
        <p style={{
          margin: 0,
          fontFamily: '"Space Mono",monospace',
          fontSize: 10,
          letterSpacing: '.2em',
          color: 'rgba(255,255,255,.25)',
          textTransform: 'uppercase',
        }}>© 2026 聲優NOW · VOICE NOW · ALL RIGHTS RESERVED</p>
      </div>

    </footer>
  );
}
