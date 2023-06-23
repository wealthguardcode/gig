import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SolutionsGrid from '../../components/SolutionsGrid'
import { getMarkdown } from '../../lib/getMarkdown'

export default function ProgramsPage({ solutions }) {
  return (
    <Layout title='WIG | Our Programs'>
      <Hero image='/images/programs-hero.jpeg' title='Our Programs'>
        We have years of insurance experience helping carriers and brokers
        provide solutions to their clients. Experience the difference of
        WealthGuard&apos;s newest Programs and Binding Authority division.
      </Hero>

      <SolutionsGrid rootSlug='programs' solutions={solutions} />

      <ContactPrimaryCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  let solutions = await getMarkdown('programs')

  solutions = (solutions || [])
    .slice()
    .sort((a, b) =>
      (a.frontmatter.title || '').localeCompare(b.frontmatter.title || '')
    )

  return {
    props: {
      solutions,
    },
  }
}
