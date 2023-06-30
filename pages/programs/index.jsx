import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SolutionsGrid from '../../components/SolutionsGrid'
import { getMarkdown } from '../../lib/getMarkdown'

export default function ProgramsPage({ solutions }) {
  return (
    <Layout title='WIG | Our Programs'>
      <Hero
        imageUrl='/images/programs/programs-1280x800.jpg'
        title='Our Programs'>
        Discover WealthGuard Programs & Binding Authority division insurance solutions below.
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
