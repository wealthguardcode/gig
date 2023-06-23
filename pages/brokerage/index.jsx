import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SolutionsGrid from '../../components/SolutionsGrid'
import { getMarkdown } from '../../lib/getMarkdown'

export default function BrokeragePage({ solutions }) {
  return (
    <Layout title='WIG | Our Brokerage Solutions'>
      <Hero
        image='/images/brokerage/brokerage-1280x800.jpg'
        title='Our Brokerage Solutions'>
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
  let solutions = await getMarkdown('brokerage')

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
