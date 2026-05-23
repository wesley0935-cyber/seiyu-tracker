import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PALETTES, LANGS_POSTER, str, mapLang } from './data/constants';
import { PaletteCtx } from './components/EventCard';
import EventList from './components/EventList';
import NotificationManager from './components/NotificationManager';
import VisitorCounter from './components/VisitorCounter';

export default function App() {
  const { i18n } = useTranslation();
  const [palKey, setPalKey] = useState('yellow');
  const [query, setQuery] = useState('');
  const [notif, setNotif] = useState(() => {
    try { return Notification.permission === 'granted'; } catch { return false; }
  });
  const [subs, setSubs] = useState(() => {
    try {
      const saved = localStorage.getItem('subscribed_va');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  const pal = PALETTES[palKey];
  const lang = mapLang(i18n.language);

  const toggleSub = (id) => {
    setSubs(prev => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      try { localStorage.setItem('subscribed_va', JSON.stringify([...s])); } catch {}
      return s;
    });
  };

  return (
    <PaletteCtx.Provider value={pal}>
      <div style={{
        background: pal.bg, color: pal.text, minHeight: '100vh',
        fontFamily: '"Noto Sans JP","Inter",sans-serif',
        '--posb-ink': pal.ink,
        '--posb-shadow': pal.p2,
        transition: 'background .4s',
        position: 'relative',
      }}>
        {/* Halftone dot background */}
        <div style={{
          position: 'fixed', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          zIndex: 0,
        }} />

        {/* ── VISITOR COUNTER ── */}
        <VisitorCounter lang={lang} />

        {/* ── MARQUEE ── */}
        <div style={{
          background: pal.p1, color: pal.ink,
          padding: '8px 0', borderBottom: `3px solid ${pal.ink}`,
          fontFamily: '"Anton",sans-serif', fontSize: 18, letterSpacing: '.1em',
          overflow: 'hidden', position: 'relative', zIndex: 2,
        }}>
          <div style={{
            display: 'flex', whiteSpace: 'nowrap', width: 'max-content',
            animation: 'posb-marquee 36s linear infinite',
          }}>
            {[0, 1].map(group => (
              <div key={group} style={{ display: 'flex', gap: 24, paddingRight: 24 }}>
                {[...Array(6)].map((_, i) => (
                  <span key={i}>
                    ★ VOICE × ACTION · {str('brand', lang).toUpperCase()} · {str('tagline', lang).toUpperCase()} · 2026 SUMMER ★
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── TOPBAR ── */}
        <div style={{
          padding: '14px 32px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', position: 'relative', zIndex: 2,
          borderBottom: `1px solid rgba(255,255,255,.1)`, gap: 16, flexWrap: 'wrap',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              background: pal.p2, color: '#fff', padding: '6px 12px',
              fontFamily: '"Anton",sans-serif', fontSize: 24, letterSpacing: '.05em',
              transform: 'rotate(-3deg)', border: '2px solid #fff',
            }}>{str('brand', lang)}</div>
            <div style={{
              fontFamily: '"Space Mono",monospace', fontSize: 11,
              letterSpacing: '.15em', textTransform: 'uppercase', opacity: .7,
            }}>VOL.06 / MAY 2026</div>
          </div>

          {/* Search bar */}
          <div style={{
            flex: '0 0 260px', display: 'flex', alignItems: 'center', gap: 8,
            background: '#fff', color: pal.ink, padding: '8px 14px',
            border: '2px solid #fff',
          }}>
            <span>⌕</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={str('search', lang)}
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontFamily: 'inherit', fontSize: 13, color: 'inherit',
              }}
            />
            {query && (
              <button onClick={() => setQuery('')} style={{
                border: 'none', background: 'transparent', cursor: 'pointer',
                fontSize: 12, color: pal.ink, padding: 0,
              }}>✕</button>
            )}
          </div>

          {/* Palette switcher */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '4px 10px', border: '1px solid rgba(255,255,255,.25)',
          }}>
            <span style={{
              fontFamily: '"Space Mono",monospace', fontSize: 10,
              letterSpacing: '.18em', opacity: .7,
            }}>{str('palette', lang).toUpperCase()}</span>
            {Object.keys(PALETTES).map(k => {
              const p = PALETTES[k];
              return (
                <button
                  key={k}
                  onClick={() => setPalKey(k)}
                  className="posb-pal-btn"
                  title={p.name[lang] || k}
                  style={{
                    width: 22, height: 22, padding: 0, borderRadius: '50%',
                    border: palKey === k ? '2px solid #fff' : '2px solid rgba(255,255,255,.3)',
                    background: `conic-gradient(${p.swatches[0]} 0 33%, ${p.swatches[1]} 0 66%, ${p.swatches[2]} 0 100%)`,
                    boxShadow: palKey === k ? `0 0 0 2px ${p.p2}` : 'none',
                    cursor: 'pointer',
                  }}
                />
              );
            })}
          </div>

          {/* Language switcher */}
          <div style={{ display: 'flex', gap: 4 }}>
            {LANGS_POSTER.map(l => (
              <button
                key={l.code}
                onClick={() => i18n.changeLanguage(l.i18n)}
                className="posb-lang-btn"
                style={{
                  padding: '6px 10px',
                  background: lang === l.code ? pal.p1 : 'transparent',
                  color: lang === l.code ? pal.ink : '#fff',
                  border: `2px solid ${lang === l.code ? pal.p1 : 'rgba(255,255,255,.4)'}`,
                  fontFamily: '"Space Mono",monospace', fontSize: 11,
                  fontWeight: 700, cursor: 'pointer', letterSpacing: '.05em',
                }}
              >{l.label}</button>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <EventList subs={subs} toggleSub={toggleSub} lang={lang} query={query} />

        {/* ── SUBSCRIBE SECTION ── */}
        <NotificationManager
          subs={subs}
          toggleSub={toggleSub}
          lang={lang}
          notif={notif}
          setNotif={setNotif}
        />

        {/* ── FOOTER ── */}
        <div style={{
          padding: '20px 32px',
          background: pal.p1, color: pal.ink,
          borderTop: `3px solid ${pal.ink}`,
          fontFamily: '"Anton",sans-serif', fontSize: 24, letterSpacing: '.1em',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          © 2026 {str('brand', lang).toUpperCase()} · MADE FOR FANS ·{' '}
          <span className="posb-star">★</span>
          <span className="posb-star-rev">★</span>
          <span className="posb-star-slow">★</span>
        </div>
      </div>
    </PaletteCtx.Provider>
  );
}
