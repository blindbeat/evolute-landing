import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import localFont from '@next/font/local'

const retroFont = localFont({ src: '../assets/fonts/retroGaming.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.scrollTo(0, 1)
    setTimeout(() => window.scrollTo(0, 0), 0)
  }, [])
  return (
    <main className={retroFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
