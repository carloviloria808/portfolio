// Fixed overlay that gives the viewport a curved CRT "glass" look:
// bulging rounded screen edges, corner vignette, and a soft screen glare.
// Purely decorative and non-interactive — it sits above content but lets
// clicks pass through.
export default function CrtScreen() {
  return (
    <>
      <div className="crt-vignette" aria-hidden="true" />
      <div className="crt-bezel" aria-hidden="true" />
    </>
  )
}
