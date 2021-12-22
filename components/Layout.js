import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        /> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

      <main>{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | WealthGuard Insurance Group',
  keywords: 'WealthGuard, WIG, insurance, small business insurance',
  description: 'WealthGuard Insurance Group',
}
