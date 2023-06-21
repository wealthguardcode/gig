import Head from 'next/head'
// TODO: Add a new scroll to top button
// import ScrollToTopButton from './ScrollToTopButton'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>{children}</main>

      {/* <ScrollToTopButton /> */}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | WealthGuard Insurance Group',
  keywords: 'WealthGuard, WIG, insurance, small business insurance',
  description: 'WealthGuard Insurance Group',
}
