'use client'

import { useState } from 'react'

const experiences = [
  {
    role: 'Work Trainee',
    roleDetail: 'Customer Service Assistant',
    org: 'Aseman Pysäkki, Jyväskylän Seurakunta',
    location: 'Jyväskylä, Finland',
    period: 'Sept 2025 – Feb 2026',
    accent: '#C1A577',
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
      'Provided customer service in Finnish and English, supporting daily interaction and integration into Finnish work culture',
      'Planned and implemented group services and community events, promoting participation and inclusion',
      'Founded and facilitated a weekly Art Club (Taidekerho), attracting 50+ participants from 10+ nationalities',
      'Produced clear guidance materials to support new trainees',
      'Collaborated with team members to assist operational coordination, adapting to dynamic service needs',
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
      'Processed and managed high-priority caseloads and sensitive applicant data under strict consular confidentiality and data protection protocols',
      'Printed 5,000+ visas per month with zero compliance or data errors, demonstrating exceptional attention to detail',
      'Reviewed and verified documentation accuracy, identifying inconsistencies and mitigating potential compliance and fraud risks',
      'Coordinated with senior officials to prepare workload reports, monitor processing status, and improve case flow efficiency',
      'Resolved complex applicant inquiries via phone and email, providing accurate guidance under time-sensitive conditions',
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
      'Conducted data validation, coding, and statistical analysis to support research using SPSS',
      'Designed data collection tools and conducted fieldwork under academic and ethical standards',
      'Assisted senior researchers with data organization and administrative documentation',
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
            index={i}
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
          background: 'linear-gradient(to right, #C1A577, #BAA7AA, #C5C3D0)',
        }} />

        {/* Dots + labels row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${experiences.length}, 1fr)`,
          position: 'relative',
          padding: '18px 0',
        }}>
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
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
                fontSize: '0.68rem',
                color: active === i ? exp.accent : '#BAA7AA',
                fontWeight: active === i ? 600 : 400,
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

function ExperienceCard({ exp, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? exp.accentLight : '#FAF7F2',
        border: `1.5px solid ${isActive ? exp.accentMid : '#EDE8E2'}`,
        borderRadius: 16,
        padding: '1.4rem 1.3rem 1.6rem',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isActive ? `0 8px 24px rgba(0,0,0,0.07)` : '0 1px 4px rgba(0,0,0,0.04)',
        // Pentagon arrow pointing down to timeline
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

      {/* Role */}
      <div>
        <div style={{
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: isActive ? exp.accent : '#BAA7AA',
          fontWeight: 600,
          marginBottom: '0.2rem',
          transition: 'color 0.2s',
        }}>
          {exp.roleDetail || 'Position'}
        </div>
        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.05rem',
          fontWeight: 600,
          color: '#3A3530',
          lineHeight: 1.25,
        }}>
          {exp.role}
        </div>
      </div>

      {/* Org */}
      <div style={{
        fontSize: '0.75rem',
        color: '#7A6E68',
        lineHeight: 1.5,
      }}>
        {exp.org}
      </div>

      {/* Location pill */}
      <div style={{
        fontSize: '0.65rem',
        color: isActive ? exp.accent : '#9D9BAD',
        background: isActive ? `rgba(0,0,0,0.05)` : 'rgba(0,0,0,0.03)',
        borderRadius: 20,
        padding: '2px 9px',
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      }}>
        <span>📍</span> {exp.location}
      </div>

      {/* Arrow pointer down */}
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

function DetailPanel({ exp }) {
  return (
    <div style={{
      background: '#F2EDE4',
      border: `1px solid ${exp.accentMid}`,
      borderRadius: 14,
      padding: '1.6rem 2rem',
      marginTop: '1rem',
      transition: 'border-color 0.3s',
    }}>
      {/* Panel header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '1.2rem',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#3A3530',
            marginBottom: '0.15rem',
          }}>
            {exp.role}{exp.roleDetail ? ` — ${exp.roleDetail}` : ''}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#7A6E68' }}>
            {exp.org} · {exp.location}
          </div>
        </div>
        <span style={{
          fontSize: '0.72rem',
          color: exp.accent,
          background: exp.accentLight,
          border: `1px solid ${exp.accentMid}`,
          padding: '0.28rem 0.85rem',
          borderRadius: 20,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>
          {exp.period}
        </span>
      </div>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start',
          }}>
            <span style={{
              marginTop: '0.3rem',
              flexShrink: 0,
              width: 6, height: 6,
              borderRadius: '50%',
              background: exp.accentMid,
              border: `1.5px solid ${exp.accent}`,
              display: 'inline-block',
            }} />
            <span style={{
              fontSize: '0.86rem',
              color: '#5A504A',
              lineHeight: 1.8,
            }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
