export default function Timeline({ items }) {
  return (
    <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
      {/* Vertical line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 8,
          width: 1,
          background: 'linear-gradient(to bottom, #C1A577, #BAA7AA, #C5C3D0)',
        }}
      />

      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            marginBottom: i < items.length - 1 ? '2.2rem' : 0,
            paddingBottom: i < items.length - 1 ? '2.2rem' : 0,
            borderBottom: i < items.length - 1 ? '1px solid #EDE8E2' : 'none',
          }}
        >
          {/* Dot */}
          <div
            className={item.current ? 'dot-pulse' : ''}
            style={{
              position: 'absolute',
              left: '-1.57rem',
              top: 6,
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: item.current ? '#C1A577' : '#BAA7AA',
              border: '2px solid #FAF7F2',
            }}
          />

          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '0.35rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#3A3530',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.05rem',
              }}
            >
              {item.role}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: '#C1A577',
                background: 'rgba(193,165,119,0.12)',
                padding: '0.22rem 0.7rem',
                borderRadius: 20,
                whiteSpace: 'nowrap',
                fontWeight: 500,
              }}
            >
              {item.period}
            </span>
          </div>

          {/* Org */}
          <div
            style={{
              fontSize: '0.8rem',
              color: '#9D9BAD',
              marginBottom: '0.75rem',
            }}
          >
            {item.org} · {item.location}
          </div>

          {/* Bullets */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {item.bullets.map((b, j) => (
              <li
                key={j}
                style={{
                  fontSize: '0.84rem',
                  color: '#7A6E68',
                  padding: '0.2rem 0 0.2rem 1rem',
                  position: 'relative',
                  lineHeight: 1.75,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.38rem',
                    color: '#BAA7AA',
                    fontSize: '0.65rem',
                  }}
                >
                  ▸
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
