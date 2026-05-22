import { useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';
import { PaletteCtx } from './EventCard';
import { str } from '../data/constants';

export default function NotificationManager({ subs, toggleSub, lang, notif, setNotif }) {
  const pal = useContext(PaletteCtx);
  const [voiceActors, setVoiceActors] = useState([]);

  useEffect(() => {
    supabase
      .from('voice_actors')
      .select('id, name_jp')
      .order('name_jp')
      .then(({ data }) => { if (data) setVoiceActors(data); });
  }, []);

  async function requestPermission() {
    try {
      const result = await Notification.requestPermission();
      setNotif(result === 'granted');
    } catch {
      // Notification API 不可用 (非 HTTPS 或舊版瀏覽器)
    }
  }

  return (
    <div style={{
      padding: '24px 32px',
      borderTop: `3px solid rgba(255,255,255,.1)`,
      borderBottom: `3px solid rgba(255,255,255,.1)`,
      position: 'relative', zIndex: 1,
    }}>
      {/* Section header */}
      <div style={{
        fontFamily: '"Anton",sans-serif', fontSize: 32, marginBottom: 16,
        letterSpacing: '.05em',
      }}>
        <span className="posb-star">★</span> {str('subscribe', lang).toUpperCase()} ·{' '}
        <span style={{ color: pal.p2 }}>{subs.size}/{voiceActors.length}</span>
      </div>

      {/* Notification bell button */}
      <button
        onClick={notif ? undefined : requestPermission}
        className="posb-cta"
        style={{
          display: 'inline-block', padding: '10px 20px',
          background: notif ? pal.p3 : pal.p1,
          color: pal.ink,
          border: `3px solid ${pal.ink}`,
          fontFamily: '"Anton",sans-serif', fontSize: 18, letterSpacing: '.1em',
          cursor: notif ? 'default' : 'pointer',
          marginBottom: 20,
          boxShadow: `4px 4px 0 ${pal.p2}`,
        }}
      >
        {notif
          ? '🔔 ' + str('notifyOn', lang).toUpperCase()
          : '🔕 ' + str('notify', lang).toUpperCase()}
      </button>

      {/* VA sticker buttons */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {voiceActors.map((v, i) => {
          const tilt = (i % 3 - 1) * 3;
          const isSub = subs.has(v.id);
          return (
            <button
              key={v.id}
              onClick={() => toggleSub(v.id)}
              className="posb-sticker"
              style={{
                padding: '8px 16px',
                background: isSub ? pal.p2 : '#fff',
                color: isSub ? '#fff' : pal.ink,
                border: `2px solid ${pal.ink}`,
                fontFamily: '"Shippori Mincho B1",serif', fontSize: 16, fontWeight: 700,
                transform: `rotate(${tilt}deg)`,
                boxShadow: `3px 3px 0 ${pal.p1}`,
                cursor: 'pointer',
              }}
            >{isSub ? '✓ ' : '+ '}{v.name_jp}</button>
          );
        })}
      </div>
    </div>
  );
}
