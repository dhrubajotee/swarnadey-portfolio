export default function SectionHeader({ number, label, title }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{
          fontSize: '0.72rem',
          color: '#BAA7AA',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          fontWeight: 500,
        }}
      >
        {number} — {label}
      </div>
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#3A3530',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  )
}
