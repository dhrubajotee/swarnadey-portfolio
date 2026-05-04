'use client'

import { useState, useEffect, useRef } from 'react'

// ── DATA ─────────────────────────────────────────────────────────────────────

const communityCards = [
  {
    id: 1,
    category: 'Facilitation',
    title: 'Community Session Facilitator',
    org: 'International House Jyväskylä',
    date: '17 April 2026',
    accent: '#C1A577',
    accentLight: '#F5ECD9',
    accentMid: '#E8D4B0',
    // Each "photo" is a pastel placeholder — swap src for real images later
    photos: [
      { bg: '#F5ECD9', label: 'Session overview', emoji: '🗣️' },
      { bg: '#EDD9C0', label: 'Discussion group', emoji: '👥' },
      { bg: '#F2E6D0', label: 'Advisor meeting', emoji: '📋' },
    ],
    bullets: [
      'Identified recurring challenges in employment, services, and daily life through direct engagement with international residents',
      'Structured key themes and facilitated a discussion session with an advisor and civic orientation participants',
      'Strengthened dialogue between service providers and users through guided, solution-focused discussion',
    ],
  },
  {
    id: 2,
    category: 'Advocacy',
    title: 'Multicultural Forum',
    org: 'MOVE Network · Central Finland',
    date: '15 April 2026',
    accent: '#9D9BAD',
    accentLight: '#ECEAF5',
    accentMid: '#D8D6E8',
    photos: [
      { bg: '#ECEAF5', label: 'Forum panel', emoji: '🌐' },
      { bg: '#DDD9EE', label: 'Group dialogue', emoji: '🤝' },
      { bg: '#E6E4F2', label: 'Regional network', emoji: '📢' },
    ],
    bullets: [
      'Engaged in regional dialogue on employment, inclusion, and access to opportunities for international residents',
      'Contributed perspectives on networking barriers and practical integration challenges',
      'Selected for continued involvement in future forum activities and collaborative initiatives',
    ],
  },
  {
    id: 3,
    category: 'Cultural',
    title: 'Volunteer & Cultural Representative',
    org: 'Paremmin Yhdessä ry · Meidän Jyväskylä',
    date: '23 April 2026',
    accent: '#BAA7AA',
    accentLight: '#F0E4E6',
    accentMid: '#DECCCE',
    photos: [
      { bg: '#F0E4E6', label: 'Cultural event', emoji: '🎭' },
      { bg: '#E4D4D6', label: 'Bangladesh booth', emoji: '🇧🇩' },
      { bg: '#EAD8DA', label: 'Event coordination', emoji: '📌' },
    ],
    bullets: [
      'Supported coordination of multicultural events with diverse community participation',
      'Represented Bangladesh through cultural performance and interactive booth engagement',
      'Assisted in event logistics and on-site coordination',
    ],
  },
  {
    id: 4,
    category: 'Service',
    title: 'Community Service Volunteer',
    org: 'Aseman Pysäkki & Jyväskylä Churches',
    date: 'Ongoing',
    accent: '#A8B89A',
    accentLight: '#E8F0E4',
    accentMid: '#D0E0CA',
    photos: [
      { bg: '#E8F0E4', label: 'Coffee House', emoji: '☕' },
      { bg: '#DCECD6', label: 'Kitchen support', emoji: '🍽️' },
      { bg: '#E2EEDe', label: 'Church events', emoji: '🕊️' },
    ],
    bullets: [
      'Supported community services including International Coffee House, assisting in food service, kitchen operations, and visitor support',
      'Participated in language clubs and community activities, facilitating interaction in multicultural and low-barrier environments',
      'Assisted in kitchen logistics and event support across multiple churches (Keltinmäki, Palokka) on different occasions',
    ],
  },
  {
    id: 5,
    category: 'Civic',
    title: 'Participant — Civic Orientation Programme',
    org: 'International House Jyväskylä · City of Jyväskylä',
    date: '2025-2026',
    accent: '#B8A8C8',
    accentLight: '#EDE8F5',
    accentMid: '#D8D0E8',
    photos: [
      { bg: '#EDE8F5', label: 'Orientation module', emoji: '🏛️' },
      { bg: '#E2DCF0', label: 'Civic learning', emoji: '📚' },
      { bg: '#E8E0F2', label: 'Group sessions', emoji: '🤲' },
    ],
    bullets: [
      'Built practical understanding of Finnish society, public services, and municipal systems through structured, real-life learning modules',
      'Engaged in discussion-based sessions on employment, rights, and civic participation, contributing lived perspectives alongside diverse participants',
      'Developed the ability to navigate services, ask informed questions, and transition from service user to active participant in the community',
    ],
  },
  {
    id: 6,
    category: 'Cultural',
    title: 'Volunteer',
    org: 'Jyväskylä Art Museum',
    date: 'Ongoing',
    accent: '#C1A577',
    accentLight: '#F5ECD9',
    accentMid: '#E8D4B0',
    photos: [
      { bg: '#F5ECD9', label: 'Museum events', emoji: '🎨' },
      { bg: '#EDD9C0', label: 'Public activities', emoji: '🖼️' },
      { bg: '#F2E6D0', label: 'Finnish language', emoji: '🇫🇮' },
    ],
    bullets: [
      'Volunteer for event logistics and public activities at the museum',
      'Strengthened practical Finnish language use through regular engagement with visitors and staff',
    ],
  },
]

const categories = ['All', 'Facilitation', 'Advocacy', 'Cultural', 'Service', 'Civic']

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function CommunitySection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? communityCards
    : communityCards.filter(c => c.category === activeFilter)

  return (
    <div>
      {/* Micro tagline */}
      <p style={{
        fontSize: '0.84rem',
        color: '#7A6E68',
        lineHeight: 1.75,
        maxWidth: 580,
        marginBottom: '1.8rem',
        fontStyle: 'italic',
      }}>
        Engaging with city initiatives, multicultural networks, and public services to support inclusion and participation in Finland.
      </p>

      {/* Filter tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
        paddingBottom: '1.2rem',
        borderBottom: '1px solid #EDE8E2',
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '0.35rem 1rem',
              borderRadius: 20,
              fontSize: '0.74rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              border: activeFilter === cat ? '1.5px solid #C1A577' : '1.5px solid #EDE8E2',
              background: activeFilter === cat ? 'rgba(193,165,119,0.12)' : '#FAF7F2',
              color: activeFilter === cat ? '#9A7F55' : '#7A6E68',
              fontWeight: activeFilter === cat ? 500 : 400,
              transition: 'all 0.2s',
            }}
          >
            {activeFilter === cat && <span style={{ marginRight: 5 }}>■</span>}
            {cat}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.2rem',
      }}>
        {filtered.map(card => (
          <CommunityCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

// ── CARD ─────────────────────────────────────────────────────────────────────

function CommunityCard({ card }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef(null)

  // Auto-rotate photos every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPhotoIndex(prev => (prev + 1) % card.photos.length)
    }, 3000)
    return () => clearInterval(intervalRef.current)
  }, [card.photos.length])

  const photo = card.photos[photoIndex]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FEFCFA',
        border: `1.5px solid ${hovered ? card.accentMid : '#EDE8E2'}`,
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 36px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo area */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', flexShrink: 0 }}>
        {/* Crossfading photos */}
        {card.photos.map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              background: p.bg,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: i === photoIndex ? 1 : 0,
              transition: 'opacity 0.8s ease',
              gap: 8,
            }}
          >
            {/* Decorative blobs */}
            <div style={{
              position: 'absolute', top: -30, right: -30,
              width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
            }} />
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
            }} />

            {/* Emoji icon */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.6)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '1.6rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              position: 'relative', zIndex: 1,
            }}>
              {p.emoji}
            </div>

            {/* Label */}
            <div style={{
              fontSize: '0.65rem', color: '#7A6E68',
              background: 'rgba(255,255,255,0.65)',
              borderRadius: 20, padding: '2px 10px',
              position: 'relative', zIndex: 1,
              letterSpacing: '0.04em',
            }}>
              {p.label}
            </div>
          </div>
        ))}

        {/* Category pill */}
        <span style={{
          position: 'absolute', top: 12, left: 12, zIndex: 5,
          background: 'rgba(255,255,255,0.8)',
          border: `1px solid ${card.accentMid}`,
          borderRadius: 20, padding: '2px 10px',
          fontSize: '0.62rem', color: card.accent,
          letterSpacing: '0.06em', fontWeight: 500,
        }}>
          {card.category}
        </span>

        {/* Photo dot indicators */}
        <div style={{
          position: 'absolute', bottom: 10, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', gap: 5, zIndex: 5,
        }}>
          {card.photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setPhotoIndex(i)}
              style={{
                width: i === photoIndex ? 16 : 6,
                height: 6,
                borderRadius: 3,
                background: i === photoIndex ? card.accent : 'rgba(255,255,255,0.6)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4,
          background: `linear-gradient(to bottom, transparent 60%, ${card.accentLight}CC)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Text body */}
      <div style={{ padding: '1.1rem 1.2rem 1.3rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>

        {/* Date */}
        <div style={{
          fontSize: '0.65rem', color: '#C5C3D0',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {card.date}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.05rem', fontWeight: 600,
          color: '#3A3530', lineHeight: 1.25, margin: 0,
        }}>
          {card.title}
        </h3>

        {/* Org */}
        <div style={{
          fontSize: '0.75rem', color: '#BAA7AA',
          fontStyle: 'italic', lineHeight: 1.4,
        }}>
          {card.org}
        </div>

        {/* Divider */}
        <div style={{
          width: 32, height: 1.5,
          background: card.accentMid,
          borderRadius: 2, margin: '0.2rem 0',
          transition: 'width 0.3s',
          ...(hovered ? { width: 48 } : {}),
        }} />

        {/* Bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {card.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <span style={{
                flexShrink: 0, marginTop: '0.42rem',
                width: 5, height: 5, borderRadius: '50%',
                background: card.accentMid,
                border: `1.5px solid ${card.accent}`,
                display: 'inline-block',
              }} />
              <span style={{ fontSize: '0.8rem', color: '#5A504A', lineHeight: 1.75 }}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
