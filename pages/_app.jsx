import { useEffect } from 'react'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { mdxComponents } from '../components/mdx'
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
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider attribute='class'>
        <ParallaxProvider>
          <MDXProvider components={mdxComponents}>
            <Component {...pageProps} />
          </MDXProvider>
          <ToastContainer />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  )
}
