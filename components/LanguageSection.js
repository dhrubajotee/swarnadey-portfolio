'use client'

import Image from 'next/image'
import { useState } from 'react'

const finnishCredentials = [
  {
    org: 'Spring House Oy',
    detail: 'Integration Training, Jyväskylä',
    status: 'Starting May 2026',
    color: '#C1A577',
    bg: '#F5ECD9',
    src: '/images/spring_house.jpg'
  },
  {
    org: 'Xamk',
    detail: "Beginner's Finnish 1 · 2 ECTS",
    status: 'Completed Mar 2026',
    color: '#BAA7AA',
    bg: '#F0E4E6',
    src: '/images/xamk.png'
  },
  {
    org: 'GRADIA',
    detail: 'Jyväskylä Educational Consortium',
    status: 'Nov 2025 – 2026',
    color: '#9D9BAD',
    bg: '#ECEAF5',
    src: '/images/gradia.jpg'
  },
]

const otherLanguages = [
  {
    name: 'Bengali',
    level: 'Native',
    flag: '🇧🇩',
    countryCode: 'bd',
    accent: '#C1A577',
    accentLight: '#F5ECD9',
    accentMid: '#E8D4B0',
    description: 'Mother tongue — full fluency in speaking, reading, and writing.',
  },
  {
    name: 'English',
    level: 'C1 — Full Professional',
    sublevel: 'IELTS 7.5',
    flag: '🇬🇧',
    countryCode: 'gb',
    accent: '#9D9BAD',
    accentLight: '#ECEAF5',
    accentMid: '#D8D6E8',
    description: 'Full professional proficiency across all contexts — academic, administrative, and interpersonal.',
  },
  {
    name: 'Hindi',
    level: 'Spoken Proficiency',
    flag: '🇮🇳',
    countryCode: 'in',
    accent: '#BAA7AA',
    accentLight: '#F0E4E6',
    accentMid: '#DECCCE',
    description: 'Conversational spoken proficiency through cultural exposure and multilingual environments.',
  },
]

export default function LanguageSection() {
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

      {/* ── LEFT: language boxes ── */}
      <div style={{ flex: '1 1 0', minWidth: 0 }}>

        {/* Finnish — highlighted big box */}
        <FinnishCard />

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          margin: '1.8rem 0 1.4rem',
        }}>
          <div style={{ flex: 1, height: 1, background: '#EDE8E2' }} />
          <span style={{
            fontSize: '0.65rem', color: '#C5C3D0',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>Other Languages</span>
          <div style={{ flex: 1, height: 1, background: '#EDE8E2' }} />
        </div>

        {/* Three small cards */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.75rem' }}>
          {otherLanguages.map((lang, i) => (
            <SmallLangCard key={i} lang={lang} />
            
          ))}
        </div>
      </div>

      {/* ── RIGHT: 2 photo placeholders ── */}
      <div style={{
        width: 220,
        minWidth: 220,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingTop: '0.3rem',
      }}>
        <Image src="/images/language.jpg" alt="Language Club" width={200} height={200} style={{ objectFit: 'cover' }} borderRadius={14} />
        {/* <PhotoPlaceholder
          label="Photo 2"
          bg="#ECEAF5"
          accentBorder="#D8D6E8"
          hint="Add your photo here"
        /> */}
      </div>

    </div>
  )
}

// ── FINNISH CARD ──────────────────────────────────────────────────────────────

function FinnishCard() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #F5ECD9 0%, #EDE8F5 100%)',
      border: '1.5px solid #E8D4B0',
      borderRadius: 16,
      padding: '1.6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blob */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 160, height: 160, borderRadius: '50%',
        background: 'rgba(197,195,208,0.2)',
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🇫🇮</span>
          <div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.25rem', fontWeight: 700,
              color: '#3A3530', lineHeight: 1.1,
            }}>
              Finnish
            </div>
            <div style={{ fontSize: '0.75rem', color: '#C1A577', fontWeight: 500 }}>
              A1.2 Basic
            </div>
          </div>
        </div>
        {/* Active badge */}
        <span style={{
          fontSize: '0.62rem', letterSpacing: '0.07em',
          background: 'rgba(193,165,119,0.15)',
          border: '1px solid rgba(193,165,119,0.3)',
          color: '#9A7F55', borderRadius: 20,
          padding: '3px 10px', fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>
          Actively progressing
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 4, background: '#EDE8E2', borderRadius: 2,
        marginBottom: '1.1rem', overflow: 'hidden',
      }}>
        <div style={{
          width: '22%', height: '100%',
          background: 'linear-gradient(to right, #C1A577, #C5C3D0)',
          borderRadius: 2,
        }} />
      </div>

      {/* Description intro */}
      <p style={{
        fontSize: '0.82rem', color: '#5A504A',
        lineHeight: 1.75, marginBottom: '1.2rem',
      }}>
        Currently enrolled in Integration Training and actively improving through daily use, language clubs, and independent study.
      </p>

      {/* Credential badges row */}
      <div style={{
        fontSize: '0.65rem', color: '#BAA7AA',
        textTransform: 'uppercase', letterSpacing: '0.1em',
        marginBottom: '0.75rem', fontWeight: 500,
      }}>
        Qualifications & Courses
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {finnishCredentials.map((cred, i) => (
          <CredentialBadge key={i} cred={cred} />
        ))}
      </div>
    </div>
  )
}

// ── CREDENTIAL BADGE ─────────────────────────────────────────────────────────

function CredentialBadge({ cred }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        background: hovered ? cred.bg : 'rgba(255,255,255,0.6)',
        border: `1px solid ${hovered ? cred.color + '55' : '#EDE8E2'}`,
        borderRadius: 10,
        padding: '0.6rem 0.85rem',
        transition: 'all 0.2s',
        cursor: 'default',
      }}
    >
      {/* Logo placeholder circle */}
      <div style={{
        width: 36, height: 36, minWidth: 36,
        borderRadius: '50%',
        background: cred.bg,
        border: `1.5px dashed ${cred.color}88`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Placeholder text — replace with <img> */}
        {/* <span style={{
          fontSize: '0.52rem', color: cred.color,
          textAlign: 'center', lineHeight: 1.2,
          letterSpacing: '0.02em',
          userSelect: 'none',
        }}>
          LOGO
        </span> */}
        <Image src={cred.src} fill style={{ objectFit: 'cover', borderRadius: '50%' }}/>
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '0.82rem', fontWeight: 500,
          color: '#3A3530', lineHeight: 1.2,
        }}>
          {cred.org}
        </div>
        <div style={{ fontSize: '0.73rem', color: '#7A6E68', lineHeight: 1.4 }}>
          {cred.detail}
        </div>
      </div>

      {/* Status pill */}
      <span style={{
        fontSize: '0.6rem', whiteSpace: 'nowrap',
        color: cred.color,
        background: cred.bg,
        borderRadius: 20, padding: '2px 8px',
        letterSpacing: '0.04em',
        flexShrink: 0,
      }}>
        {cred.status}
      </span>
    </div>
  )
}

// ── SMALL LANGUAGE CARD ───────────────────────────────────────────────────────

function SmallLangCard({ lang }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        background: hovered ? lang.accentLight : '#FEFCFA',
        border: `1.5px solid ${hovered ? lang.accentMid : '#EDE8E2'}`,
        borderRadius: 12,
        padding: '0.85rem 1.1rem',
        transition: 'all 0.22s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
    >
      {/* Flag + level bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
        {/* <span style={{ fontSize: '1.3rem' }}>{lang.flag}</span> */}
        <img
              src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
              width={28}
              height={20}
              alt={lang.name}
              style={{ borderRadius: 3, objectFit: 'cover' }}
            />
      </div>

      {/* Name + level */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem', fontWeight: 600,
            color: '#3A3530',
          }}>
            {lang.name}
          </span>
          {lang.sublevel && (
            <span style={{
              fontSize: '0.65rem', color: '#FAF7F2',
              background: lang.accent,
              borderRadius: 20, padding: '1px 7px',
              letterSpacing: '0.04em',
            }}>
              {lang.sublevel}
            </span>
          )}
        </div>
        <div style={{ fontSize: '0.75rem', color: lang.accent, fontWeight: 500, marginBottom: '0.15rem' }}>
          {lang.level}
        </div>
        <div style={{ fontSize: '0.78rem', color: '#7A6E68', lineHeight: 1.6 }}>
          {lang.description}
        </div>
      </div>
    </div>
  )
}

// ── PHOTO PLACEHOLDER ─────────────────────────────────────────────────────────

function PhotoPlaceholder({ src, label, bg, accentBorder, hint }) {
  return (
    <div style={{
      height: 200,
      background: bg,
      border: `1.5px dashed ${accentBorder}`,
      borderRadius: 14,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      cursor: 'default',
    }}>
      {/* Camera icon */}
      {/* <div style={{
        width: 44, height: 44,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.65)',
        border: `1px solid ${accentBorder}`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accentBorder} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div> */}
      {/* <Image src={src} alt={label} width={200} height={200} style={{ objectFit: 'cover' }} /> */}
      <div style={{ fontSize: '0.68rem', color: '#BAA7AA', letterSpacing: '0.05em', textAlign: 'center', lineHeight: 1.5 }}>
        {hint}
      </div>
      <div style={{
        fontSize: '0.58rem', color: '#C5C3D0',
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        {label}
      </div>
    </div>
  )
}
