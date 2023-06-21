import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SolutionsGrid from '../../components/SolutionsGrid'
import { getMarkdown } from '../../lib/getMarkdown'

export default function BrokeragePage({ solutions }) {
  return (
    <Layout title='WIG | Our Brokerage Solutions'>
      <Hero image='/images/programs-hero.jpeg' title='Our Brokerage Solutions'>
        WealthGuard brokerage solutions empower agents and brokers to deliver
        the best possible commercial insurance products to their clients.
        Discover WealthGuard brokerage product lines below.
      </Hero>

      <SolutionsGrid rootSlug='brokerage' solutions={solutions} />

      <ContactPrimaryCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      solutions: getMarkdown('brokerage'),
    },
  }
}
