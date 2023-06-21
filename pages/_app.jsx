import { useEffect } from 'react'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { ParallaxProvider } from 'react-scroll-parallax'
// TODO: Add a new lightbox component
// import SimpleReactLightbox from 'simple-react-lightbox'

import * as gtag from '../lib/gtag'
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ThemeProvider attribute='class'>
        {/* <SimpleReactLightbox> */}
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
        {/* </SimpleReactLightbox> */}
      </ThemeProvider>
    </>
  )
}
