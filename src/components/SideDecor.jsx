// Decorative HUD chrome for the side margins: rotated edge labels, tick
// marks (via CSS), and a faint scrolling "memory dump" data stream.
function hexDump(rows) {
  const line = () =>
    Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'),
    ).join(' ')
  return Array.from({ length: rows }, line).join('\n')
}

const dump = hexDump(28)

export default function SideDecor() {
  return (
    <>
      <div className="edge edge--left" aria-hidden="true">
        <svg className="edge__svg" viewBox="0 0 28 620" width="28" height="620">
          <path id="edge-path-l" d="M 17 596 Q 5 310 17 24" fill="none" />
          <text className="edge__label" textAnchor="middle">
            <textPath href="#edge-path-l" startOffset="50%">
              ROBCO INDUSTRIES // TERMLINK PROTOCOL
            </textPath>
          </text>
        </svg>
      </div>
      <div className="edge edge--right" aria-hidden="true">
        <svg className="edge__svg" viewBox="0 0 28 620" width="28" height="620">
          <path id="edge-path-r" d="M 11 24 Q 23 310 11 596" fill="none" />
          <text className="edge__label" textAnchor="middle">
            <textPath href="#edge-path-r" startOffset="50%">
              VAULT-TEC // 21.3°N 157.8°W // P4 PHOSPHOR
            </textPath>
          </text>
        </svg>
      </div>
      <div className="datastream" aria-hidden="true">
        <pre className="datastream__inner">{dump + '\n' + dump}</pre>
      </div>
    </>
  )
}
