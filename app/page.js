'use client'

import Sidebar from '../components/Sidebar'
import SectionHeader from '../components/SectionHeader'
import Timeline from '../components/Timeline'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ProjectsSection from './projects/ProjectsSection'
import CommunitySection from '../components/CommunitySection'
import LanguageSection from '../components/LanguageSection'

import {
  profile,
  about,
  experience,
  // community,
  education,
  languages,
  skills,
  contact
} from './data'

const sectionStyle = {
  padding: '4rem 0.1rem',
  borderBottom: '1px solid var(--border)',
  width: '100%',
  maxWidth: '1100px',
  margin: '0 auto',
}

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-main)' }}>
      <Sidebar />

      <main
        id="main-scroll"
        style={{ flex: 1, overflowY: 'auto', height: '100vh' }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            padding: '5rem 3.5rem 4rem',
            background: 'var(--bg-main)',
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: '50%',
              background: 'rgba(197,195,208,0.25)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -40,
              right: 140,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'rgba(186,167,170,0.18)',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '0.9rem',
                fontWeight: 500,
              }}
            >
              Hello, I'm
            </div>
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '0.8rem',
              }}
            >
              {profile.name}
            </h1>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--accent-primary)',
                marginBottom: '1.2rem',
              }}
            >
              {profile.subtitle}
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                maxWidth: 560,
                lineHeight: 1.85,
                marginBottom: '2rem',
              }}
            >
              {profile.tagline}
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                maxWidth: 560,
                lineHeight: 1.85,
                marginBottom: '1rem',
              }}
            >
              {profile.endline}
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Administration', 'Case Handling', 'Customer Service', 'Community Integration', 'Creative Facilitation'].map(tag => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(193,165,119,0.12)',
                    border: '1px solid rgba(193,165,119,0.3)',
                    color: '#9A7F55',
                    fontSize: '0.72rem',
                    padding: '0.3rem 0.85rem',
                    borderRadius: 20,
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="01" label="About Me" title="Who I Am" />

          <div>
            Structured, detail-oriented professional with experience in administration, coordination, and community-based work across international environments.
            <ul>
              <li>
                <span style={{
                  marginTop: '0.3rem',
                  flexShrink: 0,
                  width: 6, height: 6,
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  border: `1.5px solid var(--text-muted)`,
                  display: 'inline-block',
                }} /> Experienced in <strong>high-volume administrative processes</strong>, handling 5,000+ monthly cases with accuracy and compliance</li>
              <li><span style={{
                marginTop: '0.3rem',
                flexShrink: 0,
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: `1.5px solid var(--text-muted)`,
                display: 'inline-block',
              }} /> Strong in <strong>coordination and service delivery</strong>, supporting daily operations and multicultural community environments  </li>

              <li><span style={{
                marginTop: '0.3rem',
                flexShrink: 0,
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: `1.5px solid var(--text-muted)`,
                display: 'inline-block',
              }} /> Proven ability to <strong>initiate and scale community projects</strong>, including building a 50+ member international art group in Finland  </li>
              <li><span style={{
                marginTop: '0.3rem',
                flexShrink: 0,
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: `1.5px solid var(--text-muted)`,
                display: 'inline-block',
              }} /> Skilled in <strong>cross-cultural communication</strong>, working with diverse stakeholders in both Bangladesh and Finland    </li>
              <li><span style={{
                marginTop: '0.3rem',
                flexShrink: 0,
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: `1.5px solid var(--text-muted)`,
                display: 'inline-block',
              }} /> Currently developing <strong>Finnish language and local system knowledge</strong>, with active involvement in community and integration initiatives     </li>

            </ul>
          </div>

        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="02" label="Work History" title="Professional Experience" />
          {/* <Timeline items={experience} /> */}
          <ExperienceTimeline />
        </section>

        {/* ── PROJECTS CAROUSEL ── */}
        <section style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <ProjectsSection />
        </section>


        {/* ── COMMUNITY ── */}
        <section id="community" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="04" label="Community Engagement" title="Community Work" />
          <CommunitySection />
        </section>

        {/* ── LANGUAGE ── */}
        <section id="language" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="05" label="Communication" title="Languages" />
          <LanguageSection />
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="06" label="Academic Background" title="Education" />

          {education.map((ed, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '1.4rem' }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  minWidth: 46,
                  borderRadius: 10,
                  background: 'rgba(193,165,119,0.12)',
                  border: '1px solid rgba(193,165,119,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                }}
              >
                {ed.initial}
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {ed.degree}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#9D9BAD' }}>
                  {ed.school} · {ed.year}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="07" label="Capabilities" title="Skills" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))',
              gap: '1.2rem',
            }}
          >
            {skills.map((group, i) => {
              const groupColors = [
                { bg: 'rgba(193,165,119,0.08)', border: 'rgba(193,165,119,0.2)', heading: '#9A7F55', tag: 'rgba(193,165,119,0.12)', tagBorder: 'rgba(193,165,119,0.22)', tagText: '#9A7F55' },
                { bg: 'rgba(186,167,170,0.08)', border: 'rgba(186,167,170,0.2)', heading: '#8E7478', tag: 'rgba(186,167,170,0.12)', tagBorder: 'rgba(186,167,170,0.25)', tagText: '#8E7478' },
                { bg: 'rgba(197,195,208,0.1)', border: 'rgba(197,195,208,0.3)', heading: '#9D9BAD', tag: 'rgba(197,195,208,0.15)', tagBorder: 'rgba(197,195,208,0.3)', tagText: '#9D9BAD' },
              ]
              const gc = groupColors[i % groupColors.length]
              return (
                <div
                  key={i}
                  style={{
                    background: gc.bg,
                    border: `1px solid ${gc.border}`,
                    borderRadius: 10,
                    padding: '1.3rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: gc.heading,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                      marginBottom: '1rem',
                    }}
                  >
                    {group.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {group.items.map((skill, j) => (
                      <span
                        key={j}
                        style={{
                          background: gc.tag,
                          border: `1px solid ${gc.tagBorder}`,
                          color: gc.tagText,
                          fontSize: '0.78rem',
                          padding: '0.28rem 0.7rem',
                          borderRadius: 4,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ ...sectionStyle, maxWidth: '90%', paddingRight: '3.5rem' }}>
          <SectionHeader number="08" label="Get In Touch" title="Contact" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: 'Email',
                value: profile.email,
                href: `mailto:${profile.email}`,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: 'Phone',
                value: profile.phone,
                href: `tel:${profile.phone}`,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5C3D0" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'linkedin.com/in/swarna-dey',
                href: profile.linkedin,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: 'Location',
                value: profile.location,
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '1.1rem 1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {item.icon}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#9D9BAD', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                      style={{ fontSize: '0.84rem', color: 'var(--accent-primary)', textDecoration: 'none' }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* References note */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.2rem 1.5rem',
              background: 'rgba(197,195,208,0.12)',
              border: '1px solid rgba(197,195,208,0.3)',
              borderRadius: 10,
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}
          >
            <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              Reference
            </div>
            <div>Sanna Rasinkangas - Deacon, Jyväskylän Seurakunta | sanna.rasinkangas@evl.fi | 0505497033</div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: '2rem 3.5rem',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            borderTop: '1px solid var(--border)',
          }}
        >
          © 2026 Swarna Dey · Jyväskylä, Finland · Open to opportunities
        </footer>
      </main>
    </div>
  )
}
