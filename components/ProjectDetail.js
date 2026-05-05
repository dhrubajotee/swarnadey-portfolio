'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProjectDetail({ project }) {
  const [activeGallery, setActiveGallery] = useState(0)

  const {
    title, subtitle,slug, location, period, status,
    accent, accentBorder, tagBg, tagColor,
    icon, fullDescription, stats, timeline, gallery, tags, callToAction,
  } = project

  const statusColor = status === 'Ongoing'
    ? { bg: 'rgba(193,165,119,0.15)', text: '#9A7F55' }
    : { bg: 'rgba(197,195,208,0.2)', text: '#9D9BAD' }

  return (
    <div style={{
      fontFamily: '"Jost", sans-serif',
      color: '#3A3530',
      minHeight: '100vh',
      background: '#FAF7F2',
    }}>
      {/* Top bar */}
      <div style={{
        background: '#F2EDE4',
        borderBottom: '1px solid #E0D6CB',
        padding: '1rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
      }}>
        <Link
          href="/"
          style={{
            fontSize: '0.75rem', color: '#BAA7AA',
            textDecoration: 'none', letterSpacing: '0.05em',
          }}
        >
          Portfolio
        </Link>
        <span style={{ color: '#E0D6CB', fontSize: '0.7rem' }}>›</span>
        <Link
          href="/#projects"
          style={{
            fontSize: '0.75rem', color: '#BAA7AA',
            textDecoration: 'none', letterSpacing: '0.05em',
          }}
        >
          Projects
        </Link>
        <span style={{ color: '#E0D6CB', fontSize: '0.7rem' }}>›</span>
        <span style={{ fontSize: '0.75rem', color: '#7A6E68' }}>{title}</span>
      </div>

      <div style={{ maxWidth: '90%', margin: '0 auto', padding: '3rem 2.5rem' }}>
        {/* Back link */}
        <Link
          href="/#projects"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: '0.78rem', color: '#C1A577',
            textDecoration: 'none', marginBottom: '2rem',
            letterSpacing: '0.04em',
          }}
        >
          ← Back to Projects
        </Link>

        {/* Page title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#BAA7AA',
            marginBottom: '0.4rem',
          }}>
            {location} · {period}
          </p>
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '2.4rem', fontWeight: 600,
            margin: '0 0 0.3rem 0', lineHeight: 1.15, color: '#3A3530',
          }}>
            {title}
          </h1>
          <p style={{ fontSize: '1rem', color: '#BAA7AA', fontStyle: 'italic', margin: 0 }}>
            {subtitle}
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* LEFT column */}
          <div>
            {/* Hero placeholder */}
            <div style={{
              height: 280, background: accent,
              borderRadius: 16, border: `1px solid ${accentBorder}`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              marginBottom: '1.5rem',
            }}>
              {/* <Image src="/images/taidekerho.jpg" fill style={{ objectFit: 'contain', borderRadius: 8 }} /> */}
              {/* Decorative circles */}
              

              {/* Icon */}
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(255,255,255,0.6)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                marginBottom: '0.6rem',
              }}>
                {icon}
              </div>

              <div style={{
                fontSize: '0.72rem', color: '#7A6E68',
                background: 'rgba(255,255,255,0.65)',
                borderRadius: 20, padding: '3px 12px',
                letterSpacing: '0.04em',
              }}>
                📍 {location}
              </div>

              <span style={{
                position: 'absolute', top: 14, right: 14,
                background: statusColor.bg, borderRadius: 20,
                padding: '3px 12px', fontSize: '0.65rem',
                color: statusColor.text, letterSpacing: '0.04em',
              }}>
                {status}
              </span>

              {/* Cover image placeholder label */}
              {/* <span style={{
                position: 'absolute', bottom: 14, left: 14,
                background: 'rgba(255,255,255,0.55)',
                borderRadius: 8, padding: '3px 10px',
                fontSize: '0.6rem', color: '#9D9BAD',
                letterSpacing: '0.05em',
              }}>
                <Image src="/images/taidekerho.jpg" fill style={{ objectFit: 'cover', borderRadius: 8 }} />
              </span> */}
            </div>

            {/* About */}
            <h3 style={{
              fontSize: '0.88rem', fontWeight: 500,
              margin: '0 0 0.7rem 0', color: '#3A3530',
              letterSpacing: '0.03em',
            }}>
              About this project
            </h3>
            <div style={{
              fontSize: '0.87rem', lineHeight: 1.85,
              color: '#7A6E68', margin: '0 0 1.25rem 0',
            }}>
              {slug === 'instagram-art-community'? fullDescription : 
              <>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {fullDescription.map((b, i) => (
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
                            background: '#C1A577',
                            border: `1.5px solid #BAA7AA`,
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
              </>
              }

            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  background: tagBg, borderRadius: 20,
                  padding: '4px 12px', fontSize: '0.7rem',
                  color: tagColor, letterSpacing: '0.04em',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT column */}
          <div>
            {/* Timeline */}
            <div style={{
              marginBottom: '1.5rem',
              background: '#F2EDE4',
              border: '1px solid #E0D6CB',
              borderRadius: 14, padding: '1.25rem',
            }}>
              <p style={{
                fontSize: '0.68rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#BAA7AA',
                margin: '0 0 1rem 0', fontWeight: 500,
              }}>
                Timeline
              </p>
              <div style={{ display: 'flex', position: 'relative', overflowX: 'auto' }}>
                {/* Connector line */}
                <div style={{
                  position: 'absolute', top: 17, left: 18, right: 18,
                  height: 1, background: '#E0D6CB', zIndex: 0,
                }} />
                {timeline.map((item, i) => (
                  <div key={i} style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 5, position: 'relative',
                    zIndex: 1, minWidth: 64,
                  }}>
                    <div style={{
                      width: 34, height: 34,
                      background: '#FAF7F2',
                      border: `1.5px solid ${accentBorder}`,
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '0.9rem',
                    }}>
                      {item.icon}
                    </div>
                    <p style={{
                      fontSize: '0.62rem', fontWeight: 600,
                      color: '#3A3530', margin: 0, textAlign: 'center',
                    }}>
                      {item.year}
                    </p>
                    <p style={{
                      fontSize: '0.58rem', color: '#BAA7AA',
                      margin: 0, textAlign: 'center', lineHeight: 1.3,
                    }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.65rem', marginBottom: '1.5rem',
            }}>
              {stats.map((stat, i) => (
                <div key={i} style={{
                  background: '#F2EDE4',
                  border: '1px solid #E0D6CB',
                  borderRadius: 12, padding: '0.9rem 1rem',
                }}>
                  <div style={{ fontSize: '1.3rem', marginBottom: 4 }}>{stat.icon}</div>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.1rem', fontWeight: 600,
                    color: '#3A3530', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.65rem', color: '#BAA7AA',
                    marginTop: 3, letterSpacing: '0.04em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Photo gallery */}
            <div>
              <p style={{
                fontSize: '0.68rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#BAA7AA',
                margin: '0 0 0.7rem 0', fontWeight: 500,
              }}>
                Photo Gallery
              </p>

              {/* Main selected */}
              <div style={{
                height: 130, background: gallery[activeGallery]?.color || '#F2EDE4',
                borderRadius: 12, border: '1px solid #E0D6CB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 6,
                fontSize: '0.75rem', color: '#BAA7AA',
                marginBottom: '0.65rem',
                letterSpacing: '0.05em',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* <Image src="/images/ws.jpg" width={400} height={130} style={{ objectFit: 'cover' }} /> */}
                
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.45rem' }}>
                {gallery.map((g, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveGallery(i)}
                    style={{
                      height: 156, background: g.color,
                      borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.58rem', color: '#BAA7AA',
                      cursor: 'pointer',
                      border: i === activeGallery ? `2px solid ${accentBorder}` : '1px solid #E0D6CB',
                      transition: 'border 0.15s',
                      textAlign: 'center', padding: 4,
                      letterSpacing: '0.04em',
                      position: 'relative',   // add this
                      overflow: 'hidden'
                    }}
                  >
                    {/* {g.label} */}
                    {<Image src={g.src} height={86} width={250} style={{ objectFit: 'cover' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {callToAction && (
              <a
                href={callToAction.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: '#F2EDE4', border: '1px solid #E0D6CB',
                  borderRadius: 12, padding: '0.9rem 1.1rem',
                  marginTop: '1.2rem', textDecoration: 'none',
                  color: '#3A3530', fontSize: '0.82rem', fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#EDE8E2'}
                onMouseLeave={e => e.currentTarget.style.background = '#F2EDE4'}
              >
                <span style={{ fontSize: '1.2rem' }}>{callToAction.icon}</span>
                {callToAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
