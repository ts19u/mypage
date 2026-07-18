import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX, y = e.clientY
      document.documentElement.style.setProperty('--mx', `${x}px`)
      document.documentElement.style.setProperty('--my', `${y}px`)
      const target = e.target
      const interactive = target.closest('a, button, [data-magnetic]')
      document.documentElement.style.setProperty('--cursor-scale', interactive ? '2.4' : '1')
      document.documentElement.style.setProperty('--cursor-hover', interactive ? '1' : '0')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="cursor-dot" aria-hidden />
      <div className="grain" aria-hidden />
      <Component {...pageProps} />
    </>
  )
}
