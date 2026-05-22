import { useEffect, useState, useContext } from 'react';
import { supabase } from '../supabaseClient';
import EventCard, { PaletteCtx } from './EventCard';
import {
  ROOKIES, TYPES, TYPE_MAP,
  str, typeLabel, fmtDate, daysUntil, birthdaysThisWeek,
} from '../data/constants';

function BirthdayCard({ va, lang, isSub, onSub }) {
  const pal = useContext(PaletteCtx);
  const dStr = `${String(va.bdayDate.getMonth() + 1).padStart(2, '0')}.${String(va.bdayDate.getDate()).padStart(2, '0')}`;
  return (
    <div style={{
      position: 'relative', flex: '1 1 0', minWidth: 200,
      background: '#fff', color: pal.ink, border: `3px solid ${pal.ink}`,
      padding: '18px 16px 14px', boxShadow: `6px 6px 0 ${pal.p1}`,
      overflow: 'hidden',
    }}>
      <div className="posb-bday" style={{ position: 'absolute', top: -6, right: -2, fontSize: 38 }}>🎂</div>
      <div style={{
        fontFamily: '"Space Mono",monospace', fontSize: 10,
        letterSpacing: '.2em', fontWeight: 700, color: pal.p2,
      }}>BDAY · {dStr}</div>
      <div style={{
        fontFamily: '"Shippori Mincho B1",serif', fontSize: 26, fontWeight: 800,
        margin: '6px 0 4px', letterSpacing: '-.01em',
      }}>{va.ja}</div>
      <div style={{
        fontFamily: '"Space Mono",monospace', fontSize: 11,
        letterSpacing: '.1em', color: 'rgba(0,0,0,.55)', marginBottom: 10,
      }}>{va.age} {str('yrs', lang)} · {va.romaji.toUpperCase()}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontFamily: '"Anton",sans-serif', fontSize: 44, lineHeight: .9, color: pal.p2 }}>
          D-{va.daysToBday}
        </div>
        <button onClick={() => onSub(va.id)} style={{
          marginLeft: 'auto', padding: '6px 10px',
          background: isSub ? va.color : 'transparent',
          color: isSub ? '#fff' : pal.ink,
          border: `2px solid ${isSub ? va.color : pal.ink}`,
          fontFamily: '"Space Mono",monospace', fontSize: 10, fontWeight: 700,
          letterSpacing: '.12em', cursor: 'pointer',
        }}>{isSub ? '✓ FAN' : '+ お祝い'}</button>
      </div>
    </div>
  );
}

function RookieCard({ va, lang, isSub, onSub }) {
  const pal = useContext(PaletteCtx);
  return (
    <div className="posb-rookie-card" style={{
      flex: '1 1 0', minWidth: 180,
      position: 'relative', background: va.color, color: '#fff',
      border: `3px solid ${pal.ink}`,
      boxShadow: `6px 6px 0 ${pal.p3}`,
      padding: '18px 16px', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: -12, bottom: -30,
        fontFamily: '"Shippori Mincho B1",serif',
        fontSize: 200, fontWeight: 900, lineHeight: .8,
        color: 'rgba(255,255,255,.15)', pointerEvents: 'none', letterSpacing: '-.05em',
      }}>{va.ja[0]}</div>
      <div style={{
        position: 'absolute', top: -6, right: 14,
        background: pal.p3, color: pal.ink,
        padding: '3px 10px', fontFamily: '"Space Mono",monospace',
        fontSize: 10, fontWeight: 700, letterSpacing: '.15em',
        transform: 'rotate(6deg)', border: `2px solid ${pal.ink}`,
      }}>★ NEW</div>
      <div style={{ position: 'relative' }}>
        <div style={{
          fontFamily: '"Space Mono",monospace', fontSize: 10,
          letterSpacing: '.2em', opacity: .85, marginBottom: 4,
        }}>{str('debutY', lang).toUpperCase()} {va.debut}</div>
        <div style={{
          fontFamily: '"Shippori Mincho B1",serif', fontSize: 24, fontWeight: 800,
          letterSpacing: '-.01em', marginBottom: 2,
        }}>{va.ja}</div>
        <div style={{
          fontFamily: '"Space Mono",monospace', fontSize: 11,
          opacity: .85, letterSpacing: '.05em', marginBottom: 12,
        }}>{va.age}{str('yrs', lang)} · {va.romaji}</div>
        <div style={{
          fontSize: 12, lineHeight: 1.4, opacity: .95, marginBottom: 14,
          fontFamily: '"Noto Sans JP",sans-serif',
        }}>{va.role}</div>
        <button onClick={() => onSub(va.id)} style={{
          padding: '6px 12px',
          background: isSub ? '#fff' : 'rgba(255,255,255,.18)',
          color: isSub ? va.color : '#fff',
          border: '2px solid #fff',
          fontFamily: '"Space Mono",monospace', fontSize: 10, fontWeight: 700,
          letterSpacing: '.15em', cursor: 'pointer', textTransform: 'uppercase',
        }}>{isSub ? '✓ FOLLOWING' : '+ FOLLOW EARLY'}</button>
      </div>
    </div>
  );
}

export default function EventList({ subs, toggleSub, lang, query }) {
  const pal = useContext(PaletteCtx);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*, voice_actors(name_jp)')
        .gte('event_date', new Date().toISOString().slice(0, 10))
        .order('event_date', { ascending: true });
      if (!error && data) setEvents(data);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  const filtered = events.filter(e => {
    if (filter !== 'all') {
      const typeKey = TYPE_MAP[e.event_type] || 'other';
      if (typeKey !== filter) return false;
    }
    if (query) {
      const q = query.toLowerCase();
      const hay = ((e.title_jp || '') + ' ' + (e.voice_actors?.name_jp || '')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const featured = filtered[0] || null;
  const featuredVaName = featured?.voice_actors?.name_jp || '';
  const featDays = featured ? Math.max(daysUntil(featured.event_date), 0) : 0;

  const mySubEvents = filtered
    .filter(e => subs.has(e.voice_actor_id) && e !== featured)
    .sort((a, b) => daysUntil(a.event_date) - daysUntil(b.event_date));

  const restEvents = filtered.filter(e => !subs.has(e.voice_actor_id) && e !== featured);

  const bdays = birthdaysThisWeek();

  return (
    <div>
      {/* ── HERO ── */}
      {featured && !loading && (
        <div style={{
          padding: '40px 32px',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32,
          position: 'relative', zIndex: 1,
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              background: pal.p1, color: pal.ink,
              padding: '48px 40px', border: '4px solid #fff',
              position: 'relative', overflow: 'hidden',
              boxShadow: `12px 12px 0 ${pal.p2}`,
            }}>
              <div style={{
                position: 'absolute', right: -30, bottom: -80,
                fontFamily: '"Anton",sans-serif', fontSize: 560, fontWeight: 900,
                lineHeight: .8, color: 'rgba(0,0,0,.1)', letterSpacing: '-.05em', pointerEvents: 'none',
              }}>{featuredVaName[0] || '?'}</div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  display: 'inline-block', padding: '4px 10px',
                  background: pal.ink, color: pal.p1,
                  fontFamily: '"Space Mono",monospace', fontSize: 11,
                  fontWeight: 700, letterSpacing: '.2em', marginBottom: 14,
                }}>
                  <span className="posb-star">★</span> FEATURED · {typeLabel(TYPE_MAP[featured.event_type] || 'other', lang).toUpperCase()} <span className="posb-star-rev">★</span>
                </div>
                <div style={{
                  fontFamily: '"Anton","Bebas Neue",sans-serif',
                  fontSize: 64, lineHeight: .9, fontWeight: 400,
                  textTransform: 'uppercase', marginBottom: 12, letterSpacing: '.005em',
                }}>{featured.title_jp}</div>
                <div style={{
                  fontFamily: '"Shippori Mincho B1",serif',
                  fontSize: 28, fontWeight: 700, marginBottom: 24,
                }}>＝ {featuredVaName} ＝</div>
                <div style={{
                  display: 'flex', gap: 16, fontFamily: '"Space Mono",monospace',
                  fontSize: 13, fontWeight: 700, marginTop: 60, flexWrap: 'wrap',
                }}>
                  <div>
                    <div style={{ opacity: .6, fontSize: 10, letterSpacing: '.2em' }}>DATE</div>
                    {fmtDate(featured.event_date, lang)}
                  </div>
                  {featured.venue && (
                    <div>
                      <div style={{ opacity: .6, fontSize: 10, letterSpacing: '.2em' }}>VENUE</div>
                      {featured.venue}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="posb-tape-wave" style={{
              position: 'absolute', top: -12, left: 60, width: 120, height: 28,
              background: `${pal.p1}99`, border: '1px solid rgba(0,0,0,.1)',
              transform: 'rotate(-6deg)', boxShadow: '0 2px 8px rgba(0,0,0,.2)',
              animation: 'posb-tape-wave 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: -12, right: 80, width: 120, height: 28,
              background: `${pal.p3}99`, border: '1px solid rgba(0,0,0,.1)',
              transform: 'rotate(4deg)', boxShadow: '0 2px 8px rgba(0,0,0,.2)',
            }} />
          </div>

          {/* Countdown box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: pal.p2, color: '#fff', border: '4px solid #fff',
              padding: '24px 24px 20px', position: 'relative',
              boxShadow: `8px 8px 0 ${pal.p1}`,
            }}>
              <div style={{
                fontFamily: '"Space Mono",monospace', fontSize: 11,
                letterSpacing: '.25em', marginBottom: 8, opacity: .9,
              }}>★ {str('countdown', lang)} ★</div>
              <div className="posb-bigcount" style={{
                fontFamily: '"Anton",sans-serif', fontSize: 160,
                fontWeight: 400, lineHeight: .85, letterSpacing: '-.04em',
                textShadow: `6px 6px 0 ${pal.ink}`, color: '#fff',
              }}>{featDays}</div>
              <div style={{
                fontFamily: '"Anton",sans-serif', fontSize: 28,
                letterSpacing: '.05em', marginTop: 8,
              }}>{str('days', lang)} TO GO</div>
            </div>
          </div>
        </div>
      )}

      {/* ── MY LIST ── */}
      <div className="posb-pin" style={{
        padding: '32px 32px 16px', position: 'relative', zIndex: 1,
        borderTop: `3px solid ${pal.p2}`,
        background: `linear-gradient(180deg, ${pal.p2}22, transparent)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 18 }}>
          <div>
            <div style={{
              display: 'inline-block', background: pal.p2, color: '#fff',
              padding: '4px 12px', fontFamily: '"Space Mono",monospace',
              fontSize: 11, fontWeight: 700, letterSpacing: '.2em',
              marginBottom: 8, transform: 'rotate(-1deg)', border: `2px solid ${pal.ink}`,
            }}>📌 PINNED</div>
            <div style={{
              fontFamily: '"Anton",sans-serif', fontSize: 44,
              letterSpacing: '.02em', color: '#fff', lineHeight: .95,
            }}>
              <span className="posb-star">★</span> {str('myList', lang).toUpperCase()} <span style={{ color: pal.p1 }}>({subs.size})</span>
            </div>
            <div style={{
              fontFamily: '"Shippori Mincho B1",serif', fontSize: 14,
              fontStyle: 'italic', color: 'rgba(255,255,255,.65)', marginTop: 4,
            }}>{str('myListSub', lang)}</div>
          </div>
          <div style={{
            marginLeft: 'auto', fontFamily: '"Space Mono",monospace', fontSize: 12,
            letterSpacing: '.18em', color: 'rgba(255,255,255,.6)', paddingBottom: 6,
          }}>{String(mySubEvents.length).padStart(2, '0')} {str('events', lang).toUpperCase()}</div>
        </div>

        {mySubEvents.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 32px' }}>
            {mySubEvents.slice(0, 6).map((e, i) => (
              <EventCard key={e.id} event={e} lang={lang} idx={i}
                onSub={toggleSub} isSub={subs.has(e.voice_actor_id)} vaId={e.voice_actor_id} />
            ))}
          </div>
        ) : (
          <div style={{
            padding: '30px', textAlign: 'center',
            border: '2px dashed rgba(255,255,255,.25)',
            fontFamily: '"Shippori Mincho B1",serif', fontStyle: 'italic',
            fontSize: 16, color: 'rgba(255,255,255,.6)',
          }}>{str('emptySubs', lang)}</div>
        )}
      </div>

      {/* ── BIRTHDAYS THIS WEEK ── */}
      {bdays.length > 0 && (
        <div style={{ padding: '24px 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{
              fontFamily: '"Anton",sans-serif', fontSize: 40,
              letterSpacing: '.02em', color: pal.p1, lineHeight: .95,
            }}>🎂 {str('bdayWeek', lang).toUpperCase()} 🎉</div>
            <div style={{
              fontFamily: '"Shippori Mincho B1",serif', fontSize: 13,
              fontStyle: 'italic', color: 'rgba(255,255,255,.65)', marginTop: 4,
            }}>{str('bdaySub', lang)}</div>
          </div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {bdays.map(v => (
              <BirthdayCard key={v.id} va={v} lang={lang}
                isSub={subs.has(v.id)} onSub={toggleSub} />
            ))}
          </div>
        </div>
      )}

      {/* ── FILTER BAR ── */}
      <div style={{
        padding: '12px 32px',
        background: pal.cream, color: pal.ink,
        borderTop: `3px solid ${pal.ink}`, borderBottom: `3px solid ${pal.ink}`,
        display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontFamily: '"Anton",sans-serif', fontSize: 22, marginRight: 8, letterSpacing: '.05em',
        }}>FILTER —</div>
        {Object.keys(TYPES).map(k => (
          <button key={k} onClick={() => setFilter(k)} style={{
            padding: '6px 14px',
            background: filter === k ? pal.ink : 'transparent',
            color: filter === k ? '#fff' : pal.ink,
            border: `2px solid ${pal.ink}`,
            fontFamily: '"Space Mono",monospace', fontSize: 12, fontWeight: 700,
            letterSpacing: '.1em', cursor: 'pointer', textTransform: 'uppercase',
            transition: 'transform .12s',
          }}>
            {filter === k && k !== 'all' && (
              <span style={{
                display: 'inline-block', width: 8, height: 8,
                background: TYPES[k].color, marginRight: 6, verticalAlign: 'middle',
              }} />
            )}
            {typeLabel(k, lang)}
          </button>
        ))}
        <span style={{
          marginLeft: 'auto', fontFamily: '"Space Mono",monospace', fontSize: 12,
          letterSpacing: '.15em', fontWeight: 700,
        }}>{String(filtered.length).padStart(2, '0')} {str('events', lang).toUpperCase()}</span>
      </div>

      {/* ── ROOKIE VOICES ── */}
      <div style={{ padding: '40px 32px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{
            fontFamily: '"Anton",sans-serif', fontSize: 40,
            letterSpacing: '.02em', color: pal.p3, lineHeight: .95,
          }}>
            <span className="posb-star-slow">✦</span> {str('rookie', lang).toUpperCase()} <span className="posb-star-rev">✦</span>
          </div>
          <div style={{
            fontFamily: '"Shippori Mincho B1",serif', fontSize: 13,
            fontStyle: 'italic', color: 'rgba(255,255,255,.65)', marginTop: 4,
          }}>{str('rookieSub', lang)}</div>
        </div>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          {ROOKIES.map(v => (
            <RookieCard key={v.id} va={v} lang={lang}
              isSub={subs.has(v.id)} onSub={toggleSub} />
          ))}
        </div>
      </div>

      {/* ── UPCOMING EVENTS GRID ── */}
      <div style={{ padding: '24px 32px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: '"Anton",sans-serif', fontSize: 44, marginBottom: 24,
          letterSpacing: '.02em', color: pal.p1, lineHeight: .95,
        }}>
          <span className="posb-star">★</span> {str('upcoming', lang).toUpperCase()} <span className="posb-star-rev">★</span>
          <span style={{
            marginLeft: 14, fontSize: 14, fontFamily: '"Space Mono",monospace',
            letterSpacing: '.2em', color: 'rgba(255,255,255,.5)',
          }}>· DISCOVER MORE</span>
        </div>

        {loading ? (
          <div style={{
            padding: 60, textAlign: 'center',
            fontFamily: '"Anton",sans-serif', fontSize: 24, color: pal.p1,
          }}>
            <span className="posb-star-slow">★</span> {str('loading', lang).toUpperCase()} <span className="posb-star-slow">★</span>
          </div>
        ) : restEvents.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 32px' }}>
            {restEvents.map((e, i) => (
              <EventCard key={e.id} event={e} lang={lang} idx={i}
                onSub={toggleSub} isSub={subs.has(e.voice_actor_id)} vaId={e.voice_actor_id} />
            ))}
          </div>
        ) : (
          <div style={{
            padding: 60, textAlign: 'center',
            fontFamily: '"Anton",sans-serif', fontSize: 28, color: pal.p1,
          }}>
            ★ {str('empty', lang).toUpperCase()} ★<br />
            <button onClick={() => setFilter('all')} style={{
              marginTop: 14, padding: '8px 16px', background: pal.p1,
              color: pal.ink, border: '2px solid #fff', cursor: 'pointer',
              fontFamily: '"Space Mono",monospace', fontSize: 12,
              letterSpacing: '.15em', fontWeight: 700,
            }}>{str('reset', lang).toUpperCase()}</button>
          </div>
        )}
      </div>
    </div>
  );
}
