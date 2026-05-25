export default function SectionHeader({ number, label, title }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div
        style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '0.6rem',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{number}</span>
        <span style={{ width: 24, height: 1, background: 'var(--text-muted)', display: 'inline-block' }} />
        {label}
      </div>
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '2.8rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
    </div>
  )
}