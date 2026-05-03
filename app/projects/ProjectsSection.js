'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { projects } from './projectsData'

export default function ProjectsSection() {
  const scrollRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const checkPos = () => {
    const el = scrollRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 10)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10)
  }

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    // Scroll one card width at a time (~300px card + gap)
    el.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
    setTimeout(checkPos, 420)
  }

  return (
    <section id="projects" style={{ padding: '4rem 3.5rem', borderBottom: '1px solid #EDE8E2', maxWidth: 860 }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          fontSize: '0.72rem', color: '#BAA7AA', letterSpacing: '0.13em',
          textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500,
        }}>
          03 — Projects & Initiatives
        </div>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem',
          fontWeight: 600, color: '#3A3530', lineHeight: 1.2, marginBottom: '0.6rem',
        }}>
          Work & <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Initiatives</em>
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#7A6E68', lineHeight: 1.75, maxWidth: 520, margin: 0 }}>
          Community projects, creative work, and volunteer initiatives spanning Finland and Bangladesh.
          The first three are always visible — scroll right to explore more.
        </p>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative' }}>
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          style={{
            position: 'absolute', left: -20, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            background: '#FAF7F2', border: '1px solid #E0D6CB',
            borderRadius: '50%', width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: atStart ? 'default' : 'pointer',
            opacity: atStart ? 0.3 : 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
            color: '#7A6E68', fontSize: '1rem',
            transition: 'opacity 0.2s',
            pointerEvents: atStart ? 'none' : 'auto',
          }}
        >
          ←
        </button>

        {/* Cards scroll row */}
        <div
          ref={scrollRef}
          onScroll={checkPos}
          style={{
            display: 'flex', gap: '1.1rem',
            overflowX: 'auto', scrollSnapType: 'x mandatory',
            paddingBottom: '0.5rem', paddingLeft: '2px', paddingRight: '2px',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          style={{
            position: 'absolute', right: -20, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            background: '#FAF7F2', border: '1px solid #E0D6CB',
            borderRadius: '50%', width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: atEnd ? 'default' : 'pointer',
            opacity: atEnd ? 0.3 : 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
            color: '#7A6E68', fontSize: '1rem',
            transition: 'opacity 0.2s',
            pointerEvents: atEnd ? 'none' : 'auto',
          }}
        >
          →
        </button>
      </div>

      {/* Hint */}
      <p style={{
        textAlign: 'right', fontSize: '0.7rem', color: '#C5C3D0',
        marginTop: '0.75rem', letterSpacing: '0.04em',
      }}>
        {!atEnd && 'More projects →'}
      </p>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  const isFirst3 = index < 3

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ textDecoration: 'none', flexShrink: 0, scrollSnapAlign: 'start' }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 272,
          borderRadius: 14,
          overflow: 'hidden',
          border: `1px solid ${hovered ? project.accentBorder : '#EDE8E2'}`,
          background: '#FEFCFA',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? '0 10px 28px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
        }}
      >
        {/* Thumbnail — pastel placeholder with icon */}
        <div
          style={{
            height: 155,
            background: project.accent,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Subtle watermark circles */}
          <div style={{
            position: 'absolute', top: -30, right: -30,
            width: 120, height: 120, borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
          }} />
          <div style={{
            position: 'absolute', bottom: -20, left: -20,
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
          }} />

          {/* Icon circle */}
          <div style={{
            width: 54, height: 54, borderRadius: '50%',
            background: 'rgba(255,255,255,0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', marginBottom: '0.5rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            {project.icon}
          </div>

          {/* Location */}
          <div style={{
            fontSize: '0.65rem', color: '#7A6E68',
            background: 'rgba(255,255,255,0.65)',
            borderRadius: 20, padding: '2px 9px',
            letterSpacing: '0.04em',
          }}>
            📍 {project.location}
          </div>

          {/* Featured badge (first 3) */}
          {isFirst3 && (
            <span style={{
              position: 'absolute', top: 10, left: 10,
              background: 'rgba(255,255,255,0.75)',
              borderRadius: 20, padding: '2px 9px',
              fontSize: '0.6rem', letterSpacing: '0.07em',
              color: '#9A7F55', fontWeight: 500,
            }}>
              Featured
            </span>
          )}

          {/* Status badge */}
          <span style={{
            position: 'absolute', top: 10, right: 10,
            background: project.statusBg,
            borderRadius: 20, padding: '2px 9px',
            fontSize: '0.6rem', color: '#3A3530',
            letterSpacing: '0.04em',
          }}>
            {project.status}
          </span>
        </div>

        {/* Card body */}
        <div style={{ padding: '1.1rem 1.2rem' }}>
          {/* Date */}
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#C5C3D0',
            margin: '0 0 0.35rem 0',
          }}>
            {project.period}
          </p>

          {/* Title */}
          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.05rem', fontWeight: 600, color: '#3A3530',
            margin: '0 0 0.18rem 0', lineHeight: 1.25,
          }}>
            {project.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            fontSize: '0.77rem', color: '#BAA7AA',
            margin: '0 0 0.65rem 0', fontStyle: 'italic',
          }}>
            {project.subtitle}
          </p>

          {/* Description */}
          <p style={{
            fontSize: '0.81rem', color: '#7A6E68',
            lineHeight: 1.65, margin: '0 0 0.85rem 0',
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '0.75rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                background: project.tagBg,
                borderRadius: 20, padding: '2px 9px',
                fontSize: '0.63rem', color: project.tagColor,
                letterSpacing: '0.04em',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* View link */}
          <div style={{
            fontSize: '0.75rem', color: '#C1A577',
            display: 'flex', alignItems: 'center', gap: 4,
            letterSpacing: '0.03em',
          }}>
            View project <span style={{ fontSize: '0.7rem' }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
