import { useEffect, useState } from 'react'

// Live ambient temperature + condition for Waipahu, HI via Open-Meteo (no key).
const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=21.39&longitude=-158.01&current=temperature_2m,weather_code&temperature_unit=fahrenheit'

// Map WMO weather codes to a short label + matching Tabler icon.
function describe(code) {
  if (code === 0) return { label: 'CLEAR', icon: 'sun' }
  if (code === 1) return { label: 'MOSTLY CLEAR', icon: 'sun' }
  if (code === 2) return { label: 'PARTLY CLOUDY', icon: 'cloud' }
  if (code === 3) return { label: 'OVERCAST', icon: 'cloud' }
  if (code === 45 || code === 48) return { label: 'FOG', icon: 'cloud-fog' }
  if (code >= 51 && code <= 57) return { label: 'DRIZZLE', icon: 'cloud-rain' }
  if (code >= 61 && code <= 67) return { label: 'RAIN', icon: 'cloud-rain' }
  if (code >= 71 && code <= 77) return { label: 'SNOW', icon: 'cloud-snow' }
  if (code >= 80 && code <= 82) return { label: 'SHOWERS', icon: 'cloud-rain' }
  if (code === 85 || code === 86) return { label: 'SNOW', icon: 'cloud-snow' }
  if (code >= 95) return { label: 'STORM', icon: 'cloud-storm' }
  return { label: 'UNKNOWN', icon: 'cloud' }
}

export default function Weather() {
  const [data, setData] = useState(null)

  useEffect(() => {
    let alive = true
    fetch(URL)
      .then((r) => r.json())
      .then((d) => {
        const t = d?.current?.temperature_2m
        const c = d?.current?.weather_code
        if (alive && typeof t === 'number') {
          setData({ temp: Math.round(t), ...describe(c) })
        }
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  if (!data) return null
  return (
    <p className="hero__telemetry">
      <i className={`ti ti-${data.icon}`} aria-hidden="true" />
      &gt; AMBIENT {data.temp}°F // {data.label}
    </p>
  )
}
