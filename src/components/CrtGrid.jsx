// Fixed full-screen grid whose lines bow outward to imitate a curved CRT
// screen (barrel distortion). Lines are straight at the center and curve
// more toward the edges. Sits behind all content; purely decorative.
const SIZE = 1200
const STEP = 75 // spacing between grid lines (smaller = denser grid)
const BULGE = 0.15 // how far the lines curve out (0 = flat, higher = rounder)
const CENTER = SIZE / 2

function buildPaths() {
  const paths = []
  // Vertical lines — bow left/right, more toward the horizontal edges.
  for (let x = 0; x <= SIZE; x += STEP) {
    const cx = x + BULGE * (x - CENTER)
    paths.push(`M ${x} 0 Q ${cx} ${CENTER} ${x} ${SIZE}`)
  }
  // Horizontal lines — bow up/down, more toward the vertical edges.
  for (let y = 0; y <= SIZE; y += STEP) {
    const cy = y + BULGE * (y - CENTER)
    paths.push(`M 0 ${y} Q ${CENTER} ${cy} ${SIZE} ${y}`)
  }
  return paths
}

export default function CrtGrid() {
  return (
    <svg
      className="crt-grid"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {buildPaths().map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
