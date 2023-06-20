import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import ProgramsGrid from '../../components/ProgramsGrid'
import { getBrokerage } from '../../lib/brokerage'

export default function BrokeragePage({ programs }) {
  return (
    <Layout title='WIG | Our Brokerage Solutions'>
      <Hero image='/images/programs-hero.jpeg' title='Our Brokerage Solutions'>
        WealthGuard brokerage solutions empower agents and brokers to deliver
        the best possible commercial insurance products to their clients.
        Discover WealthGuard brokerage product lines below.
      </Hero>

      <ProgramsGrid rootSlug='brokerage' programs={programs} />

      <ContactPrimaryCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      programs: getBrokerage(),
    },
  }
}
