import Layout from '../../components/Layout'
import ProgramCoverage from '../../components/ProgramCoverage'
import ProgramCTA from '../../components/ProgramCTA'
import ProjectDescription from '../../components/ProjectDescription'
import ProgramForm from '../../components/ProgramForm'
import ProgramHero from '../../components/ProgramHero'
import ProgramHighlights from '../../components/ProgramHighlights'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

toast.configure({
  autoClose: 8000,
  draggable: false,
})

export default function ProgramPage({
  frontmatter: {
    title,
    heroDescription,
    image,
    image2,
    subHeading,
    description,
    highlights,
    coverage,
  },
  content,
}) {
  return (
    <Layout title={`WIG | ${title}`}>
      <ProgramHero
        image={image}
        title={title}
        heroDescription={heroDescription}
      />

      {/* Main content */}
      <div className='pt-16 bg-white dark:bg-gray-800'>
        <div className='max-w-5xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
          {/* Description & Form */}
          <div className='flex flex-col md:flex-row'>
            <ProjectDescription
              subHeading={subHeading}
              description={description}
            />

            <ProgramForm title={title} />
          </div>

          <ProgramCoverage
            image={image}
            image2={image2}
            title={title}
            content={content}
          />
        </div>
      </div>

      <ProgramHighlights highlights={highlights} />

      <ProgramCTA />
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('programs'))

  const filteredPaths = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join('programs', filename),
        'utf-8'
      )

      const { data: frontmatter } = matter(markdownWithMeta)

      return { filename, frontmatter }
    })
    .filter(
      ({ frontmatter }) => !frontmatter.type || frontmatter.type !== 'brokerage'
    )
    .map(({ filename }) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))

  return {
    paths: filteredPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('programs', slug + '.md'),
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
