import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import ContactSecondaryCTA from '../../components/ContactSecondaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SolutionCoverage from '../../components/SolutionCoverage'
import SolutionDescription from '../../components/SolutionDescription'
import SolutionForm from '../../components/SolutionForm'
import SolutionHighlights from '../../components/SolutionHighlights'
import { classNames } from '../../utils/helpers'

export default function BrokerageSolutionPage({
  frontmatter: {
    title,
    heroDescription,
    image,
    image2,
    subHeading,
    description,
    highlights,
  },
  content,
}) {
  return (
    <Layout title={`WIG | ${title}`}>
      <Hero image={image} title={title}>
        {heroDescription}
      </Hero>

      {/* Main content */}
      <div className='pt-16 bg-white dark:bg-gray-800'>
        <div className='max-w-5xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
          {/* Description & Form */}
          <div className='flex flex-col md:flex-row'>
            <SolutionDescription
              subHeading={subHeading}
              description={description}
            />

            <SolutionForm title={title} />
          </div>

          <SolutionCoverage
            image={image}
            image2={image2}
            title={title}
            content={content}
          />
        </div>
      </div>

      <SolutionHighlights highlights={highlights} />

      <ContactSecondaryCTA />
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('markdown', 'brokerage'))

  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.replace('.md', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('markdown', 'brokerage', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
