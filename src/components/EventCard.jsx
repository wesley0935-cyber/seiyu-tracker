import React from 'react';
import { PALETTES, TYPE_MAP, daysUntil, fmtDate, typeLabel } from '../data/constants';

export const PaletteCtx = React.createContext(PALETTES.yellow);

const BRIGHT_TILES = ['#fff200', '#00e5ff', '#ffd966', '#fbbf24', '#22d3ee', '#f3eedd', '#fff3f7', '#f0eafd', '#ff7eb6'];

export default function EventCard({ event, lang = 'tc', onSub, isSub, idx = 0, vaId }) {
  const pal = React.useContext(PaletteCtx);
  const typeKey = TYPE_MAP[event.event_type] || 'other';
  const days = daysUntil(event.event_date);
  const vaName = event.voice_actors?.name_jp || '?';
  const vaFirstChar = vaName[0] || '?';

  const tileBgMap = {
    concert: pal.p2,
    meet:    pal.p1,
    radio:   pal.p3,
    stage:   pal.ink === '#0e0e0e' ? '#ff7a00' : pal.p1,
    other:   pal.cream,
  };
  const tileBg = tileBgMap[typeKey] || pal.p2;
  const tileInk = BRIGHT_TILES.includes(tileBg) ? '#0e0e0e' : '#fff';
  const cdAccent = tileBg === pal.p2 ? pal.p1 : pal.p2;
  const tilt = ((event.id || 0) % 5 - 2) * 0.8;

  return (
    <div
      className="posb-tile-wrap posb-pop"
      style={{
        position: 'relative',
        transform: `rotate(${tilt}deg)`,
        animationDelay: `${idx * 40}ms`,
        '--posb-shadow': pal.p2,
      }}
    >
      <div className="posb-tile-body" style={{
        background: tileBg, color: tileInk,
        padding: '20px 18px 16px',
        position: 'relative', overflow: 'hidden',
        border: `3px solid ${pal.ink}`,
        boxShadow: `8px 8px 0 ${pal.ink}`,
        transition: 'box-shadow .25s',
      }}>
        {/* Ghost initial character */}
        <div style={{
          position: 'absolute', right: -20, bottom: -50,
          fontFamily: '"Anton","Bebas Neue",sans-serif',
          fontSize: 220, fontWeight: 900, lineHeight: .8,
          color: 'rgba(0,0,0,.12)', letterSpacing: '-.05em', pointerEvents: 'none',
        }}>{vaFirstChar}</div>

        {/* Type label + ticket number */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: '"Space Mono",monospace', fontSize: 10,
          fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase',
          marginBottom: 10, position: 'relative', zIndex: 1,
        }}>
          <span>
            <span className="posb-star-slow">★</span> {typeLabel(typeKey, lang)} <span className="posb-star-rev">★</span>
          </span>
          <span>NO.{String(event.id || 0).padStart(3, '0')}</span>
        </div>

        {/* Title */}
        <div style={{
          fontFamily: '"Anton","Bebas Neue",sans-serif',
          fontSize: 28, fontWeight: 400, lineHeight: .95, letterSpacing: '.01em',
          textTransform: 'uppercase', marginBottom: 8,
          position: 'relative', zIndex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{event.title_jp}</div>

        {/* VA name */}
        <div style={{
          fontFamily: '"Shippori Mincho B1",serif',
          fontSize: 18, fontWeight: 700,
          marginBottom: 14, position: 'relative', zIndex: 1,
        }}>{vaName}</div>

        {/* Date / venue / countdown */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginTop: 20, position: 'relative', zIndex: 1,
        }}>
          <div style={{ fontFamily: '"Space Mono",monospace', fontSize: 11, lineHeight: 1.4 }}>
            <div style={{ fontWeight: 700 }}>{fmtDate(event.event_date, lang)}</div>
            {event.venue && <div style={{ opacity: .85 }}>{event.venue}</div>}
            {event.source_url && (
              <a
                href={event.source_url}
                target="_blank"
                rel="noreferrer"
                style={{ color: tileInk, fontSize: 10, opacity: .65, textDecoration: 'none', marginTop: 4, display: 'block' }}
                onClick={e => e.stopPropagation()}
              >→ DETAILS</a>
            )}
          </div>
          <div className="posb-tile-cd" style={{
            background: pal.ink, color: cdAccent,
            padding: '8px 12px',
            fontFamily: '"Anton",sans-serif',
            fontSize: 24, fontWeight: 400, lineHeight: .85, textAlign: 'center',
            transform: 'rotate(-3deg)',
          }}>
            <div style={{ fontSize: 9, letterSpacing: '.2em', marginBottom: 2 }}>D-</div>
            {Math.max(days, 0)}
          </div>
        </div>

        {/* Follow sticker button */}
        {onSub && (
          <button
            onClick={e => { e.stopPropagation(); onSub(vaId); }}
            className="posb-sticker"
            style={{
              position: 'absolute', top: -10, right: 18,
              background: isSub ? pal.p1 : '#fff',
              color: pal.ink, border: `2px solid ${pal.ink}`,
              padding: '4px 10px', fontFamily: '"Space Mono",monospace',
              fontSize: 10, fontWeight: 700, letterSpacing: '.1em',
              transform: 'rotate(8deg)', zIndex: 2, cursor: 'pointer',
            }}
          >{isSub ? '✓ FAN' : '+ FOLLOW'}</button>
        )}
      </div>

      {/* Ticket stub footer */}
      <div style={{
        background: pal.cream, border: `3px solid ${pal.ink}`, borderTop: 'none',
        padding: '6px 14px',
        fontFamily: '"Space Mono",monospace', fontSize: 10,
        display: 'flex', justifyContent: 'space-between',
        boxShadow: `8px 8px 0 ${pal.ink}`,
        letterSpacing: '.1em', color: pal.ink,
      }}>
        <span>TICKET #{String(event.id || 0).padStart(4, '0')}</span>
        <span>→ DETAILS</span>
      </div>
    </div>
  );
}
