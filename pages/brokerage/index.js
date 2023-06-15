import Layout from '../../components/Layout'
import ProgramsCTA from '../../components/ProgramsCTA'
import ProgramsGrid from '../../components/ProgramsGrid'
import ProgramsHero from '../../components/ProgramsHero'
import { getBrokerage } from '../../lib/brokerage'

export default function BrokeragePage({ programs }) {
  return (
    <Layout title='WIG | Our Brokerage Solutions'>
      <ProgramsHero title='Our Brokerage Solutions'>
        WealthGuard brokerage solutions empower agents and brokers to deliver
        the best possible commercial insurance products to their clients.
        Discover WealthGuard brokerage product lines below.
      </ProgramsHero>

      <ProgramsGrid rootSlug='brokerage' programs={programs} />

      <ProgramsCTA />
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
