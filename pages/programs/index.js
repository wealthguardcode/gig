import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import ProgramsGrid from '../../components/ProgramsGrid'
import { getPrograms } from '../../lib/programs'

export default function ProgramsPage({ programs }) {
  return (
    <Layout title='WIG | Our Programs'>
      <Hero image='/images/programs-hero.jpeg' title='Our Programs'>
        We have years of insurance experience helping carriers and brokers
        provide solutions to their clients. Experience the difference of
        WealthGuard&apos;s newest Programs and Binding Authority division.
      </Hero>

      <ProgramsGrid rootSlug='programs' programs={programs} />

      <ContactPrimaryCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      programs: getPrograms(),
    },
  }
}
