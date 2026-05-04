'use client'

import { useState, useEffect } from 'react'
import { profile, navLinks } from '../app/data'

export default function Sidebar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const mainEl = document.getElementById('main-scroll')
    if (!mainEl) return

    const handleScroll = () => {
      const sections = navLinks.map(l => document.getElementById(l.href.slice(1)))
      let current = 'about'
      sections.forEach(sec => {
        if (sec && mainEl.scrollTop >= sec.offsetTop - 140) {
          current = sec.id
        }
      })
      setActive(current)
    }

    mainEl.addEventListener('scroll', handleScroll)
    return () => mainEl.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const mainEl = document.getElementById('main-scroll')
    const target = document.getElementById(id)
    if (mainEl && target) {
      mainEl.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' })
    }
  }

  return (
    <aside
      className="sidebar-scroll"
      style={{
        width: '260px',
        minWidth: '260px',
        background: '#F2EDE4',
        borderRight: '1px solid #E0D6CB',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}
    >
      {/* Profile top */}
      <div style={{ padding: '2rem 1.6rem 1.6rem', borderBottom: '1px solid #E0D6CB' }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #BAA7AA, #C1A577)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.7rem',
            fontWeight: 700,
            color: '#FAF7F2',
            marginBottom: '1rem',
            letterSpacing: 1,
          }}
        >
          SD
        </div>
        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#3A3530',
            marginBottom: '0.3rem',
          }}
        >
          {profile.name}
        </div>
        {/* <div style={{ fontSize: '0.72rem', color: '#C1A577', letterSpacing: '0.07em', textTransform: 'uppercase', lineHeight: 1.6 }}>
          {profile.title}
        </div> */}
        <div style={{ fontSize: '0.72rem', color: '#9D9BAD', marginTop: '0.2rem', lineHeight: 1.6 }}>
          {profile.subtitle}
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '1.2rem 0', flex: 1 }}>
        {navLinks.map(link => {
          const isActive = active === link.href.slice(1)
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '0.65rem 1.6rem',
                fontSize: '0.78rem',
                fontWeight: isActive ? 500 : 400,
                color: isActive ? '#C1A577' : '#7A6E68',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderLeft: isActive ? '2px solid #C1A577' : '2px solid transparent',
                background: isActive ? 'rgba(193,165,119,0.08)' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              <NavIcon name={link.label} isActive={isActive} />
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* Contact bottom */}
      <div style={{ padding: '1rem 1.6rem', borderTop: '1px solid #E0D6CB', fontSize: '0.73rem', color: '#7A6E68', lineHeight: 2 }}>
        <div>📍 {profile.location}</div>
        <div>
          <a href={`mailto:${profile.email}`} style={{ color: '#C1A577', textDecoration: 'none' }}>
            {profile.email}
          </a>
        </div>
        <div>{profile.phone}</div>
      </div>
    </aside>
  )
}

function NavIcon({ name, isActive }) {
  const color = isActive ? '#C1A577' : '#9D9BAD'
  const s = { width: 13, height: 13, flexShrink: 0 }
  const icons = {
    About: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    Experience: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
      </svg>
    ),
    Projects: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    Community: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    Language: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/>
        <path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/>
      </svg>
    ),
    Education: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    Skills: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    Contact: (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  }
  return icons[name] || null
}
