import Layout from '../../components/Layout'
import ProgramsCTA from '../../components/ProgramsCTA'
import ProgramsGrid from '../../components/ProgramsGrid'
import ProgramsHero from '../../components/ProgramsHero'
import { getPrograms } from '../../lib/programs'

export default function BrokerageProgramsPage({ programs }) {
  return (
    <Layout title='WIG | Our Brokerage Programs'>
      <ProgramsHero title='Our Brokerage Programs'>
        We have years of insurance experience helping carriers and brokers
        provide solutions to their clients. Experience the difference of
        WealthGuard&apos;s newest Programs and Binding Authority division.
      </ProgramsHero>

      <ProgramsGrid rootSlug='brokerage' programs={programs} />

      <ProgramsCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      programs: getPrograms('brokerage'),
    },
  }
}
