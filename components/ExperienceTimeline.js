'use client'

import { useState } from 'react'

const experiences = [
  {
    role: 'Work Trainee',
    roleDetail: 'Customer Service Assistant',
    org: 'Aseman Pysäkki, Jyväskylän Seurakunta',
    location: 'Jyväskylä, Finland',
    period: 'Sept 2025 - Feb 2026',
    accent: '#9A7A45',
    accentLight: '#F5ECD9',
    accentMid: '#E8D4B0',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bullets: [
      <>Delivered customer service in Finnish and English, supporting <strong>50–70 daily visitors</strong> in a multicultural community setting</>,
      <>Planned and facilitated group activities and events, increasing <strong>participation and engagement among local and international visitors</strong></>,
      <>Founded and scaled a weekly Art Club to <strong>50+ participants from 10+ nationalities</strong>, strengthening community inclusion</>,
      <>Produced clear internal guidance materials, improving <strong>consistency and onboarding for new trainees</strong></>,
      <>Supported daily operations and team coordination, adapting to <strong>dynamic service and event needs</strong></>,
    ],
  },
  {
    role: 'Visa Assistant',
    roleDetail: '',
    org: 'High Commission of India',
    location: 'Dhaka, Bangladesh',
    period: 'Dec 2022 – Sept 2024',
    accent: '#BAA7AA',
    accentLight: '#F0E4E6',
    accentMid: '#DECCCE',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M7 15h2"/>
        <path d="M12 15h5"/>
      </svg>
    ),
    bullets: [
      <>Processed <strong>5,000+ visa applications per month with zero data or compliance errors</strong>, ensuring strict adherence to consular regulations</>,
      <>Verified and assessed documentation, identifying inconsistencies and reducing <strong>risk of fraud and processing delays</strong></>,
      <>Managed high-volume caseloads under pressure, maintaining <strong>accuracy, confidentiality, and processing efficiency</strong></>,
      <>Coordinated with senior officials to monitor workflows and improve <strong>case processing and reporting systems</strong></>,
      <>Resolved complex client inquiries via phone and email, delivering <strong>accurate guidance in time-sensitive situations</strong></>,
    ],
  },
  {
    role: 'Research Intern',
    roleDetail: '',
    org: 'Bangladesh Institute of Social Research (BISR) Trust',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2021 – Feb 2022',
    accent: '#9D9BAD',
    accentLight: '#ECEAF5',
    accentMid: '#D8D6E8',
    icon: (color) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    bullets: [
      <>Conducted data validation, coding, and statistical analysis using <strong>SPSS</strong>, supporting research projects</>,
      <>Designed data collection tools and conducted fieldwork under <strong>academic and ethical standards</strong></>,
      <>Organised datasets and documentation, improving <strong>accuracy and usability of research outputs</strong></>,
    ],
  },
]

export default function ExperienceTimeline() {
  const [active, setActive] = useState(0)

  return (
    <div style={{ width: '100%' }}>

      {/* ── CARDS ROW ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${experiences.length}, 1fr)`,
        gap: '1.1rem',
        marginBottom: '0',
        position: 'relative',
      }}>
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            exp={exp}
            isActive={active === i}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* ── HORIZONTAL TIMELINE BAR ── */}
      <div style={{ position: 'relative', margin: '0 0', padding: '0 2%' }}>
        {/* Gradient line */}
        <div style={{
          position: 'absolute',
          left: '2%', right: '2%',
          top: '50%', transform: 'translateY(-50%)',
          height: 3,
          borderRadius: 4,
          background: 'linear-gradient(to right, #9A7A45, #BAA7AA, #C5C3D0)',
        }} />

        {/* Dots + labels row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${experiences.length}, 1fr)`,
          position: 'relative',
          padding: '28px 0',
        }}>
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                width: active === i ? 18 : 13,
                height: active === i ? 18 : 13,
                borderRadius: '50%',
                background: exp.accent,
                border: `3px solid #FAF7F2`,
                boxShadow: active === i
                  ? `0 0 0 3px ${exp.accentMid}`
                  : '0 1px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.25s',
                zIndex: 2,
                position: 'relative',
              }} />

              {/* Period label */}
              <div style={{
                fontSize: '0.75rem',
                color: active === i ? exp.accent : '#BAA7AA',
                fontWeight: active === i ? 800 : 400,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
                lineHeight: 1.3,
                textAlign: 'center',
              }}>
                {exp.period}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── DETAIL PANEL ── */}
      <DetailPanel exp={experiences[active]} />
    </div>
  )
}

// ── EXPERIENCE CARD ───────────────────────────────────────────────────────────

function ExperienceCard({ exp, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? exp.accentLight : '#FFFFFF',
        border: `1.5px solid ${isActive ? exp.accentMid : '#F0EBE4'}`,
        borderRadius: 16,
        padding: '1.4rem 1.3rem 1.6rem',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isActive
          ? `0 8px 24px rgba(0,0,0,0.07)`
          : '0 1px 6px rgba(0,0,0,0.05)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.55rem',
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: isActive ? exp.accentMid : '#F2EDE4',
        border: `1.5px solid ${isActive ? exp.accent : '#EDE8E2'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '0.3rem',
        transition: 'all 0.25s',
        flexShrink: 0,
      }}>
        {exp.icon(isActive ? exp.accent : '#BAA7AA')}
      </div>

      {/* Role detail label */}
      {exp.roleDetail ? (
        <div style={{
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: isActive ? exp.accent : '#BAA7AA',
          fontWeight: 600,
          marginBottom: '0.1rem',
          transition: 'color 0.2s',
        }}>
          {exp.roleDetail}
        </div>
      ) : null}

      {/* Role title */}
      <div style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#2B1F1A',
        lineHeight: 1.2,
      }}>
        {exp.role}
      </div>

      {/* Org */}
      <div style={{
        fontSize: '0.88rem',
        color: '#7A6E68',
        lineHeight: 1.5,
      }}>
        {exp.org}
      </div>

      {/* Location pill */}
      <div style={{
        fontSize: '0.72rem',
        color: isActive ? exp.accent : '#9D9BAD',
        background: isActive ? exp.accentLight : 'rgba(0,0,0,0.03)',
        border: `1px solid ${isActive ? exp.accentMid : '#EDE8E2'}`,
        borderRadius: 20,
        padding: '3px 10px',
        letterSpacing: '0.03em',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginTop: '0.1rem',
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {exp.location}
      </div>

      {/* Arrow pointer down when active */}
      {isActive && (
        <div style={{
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: `10px solid ${exp.accentMid}`,
          zIndex: 3,
        }} />
      )}
    </div>
  )
}

// ── DETAIL PANEL ──────────────────────────────────────────────────────────────

function DetailPanel({ exp }) {
  return (
    <div style={{
      background: '#FEFCFA',
      border: `1px solid ${exp.accentMid}`,
      borderRadius: 14,
      padding: '1.8rem 2.2rem',
      marginTop: '1rem',
      boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
      transition: 'border-color 0.3s',
    }}>
      {/* Panel header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '1.4rem',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#2B1F1A',
            marginBottom: '0.25rem',
            lineHeight: 1.2,
          }}>
            {exp.role}{exp.roleDetail ? ` — ${exp.roleDetail}` : ''}
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#9A7A45',
            fontWeight: 700,
          }}>
            {exp.org} · {exp.location}
          </div>
        </div>

        {/* Period badge */}
        <span style={{
          fontSize: '0.75rem',
          color: '#9A7A45',
          background: exp.accentLight,
          border: `1px solid ${exp.accentMid}`,
          padding: '0.3rem 0.95rem',
          borderRadius: 20,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}>
          {exp.period}
        </span>
      </div>

      {/* Bullets */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
      }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '0.85rem',
            alignItems: 'flex-start',
          }}>
            {/* Checkmark circle */}
            <span style={{
              marginTop: '0.15rem',
              flexShrink: 0,
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: exp.accentLight,
              border: `1.5px solid ${exp.accentMid}`,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke={exp.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>

            <span style={{
              fontSize: '0.95rem',
              color: '#5A504A',
              lineHeight: 1.9,
            }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}