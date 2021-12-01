import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SimpleReactLightbox>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
