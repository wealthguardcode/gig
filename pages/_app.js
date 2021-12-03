import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ParallaxProvider } from 'react-scroll-parallax'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <SimpleReactLightbox>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </SimpleReactLightbox>
      </ThemeProvider>
    </>
  )
}

export default MyApp
