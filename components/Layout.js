import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'GIG || GoGuard Insurance Group',
  keywords: 'GoGuard, GIG, insurance, small business insurance',
  description: 'GoGuard Insurance Group',
}
