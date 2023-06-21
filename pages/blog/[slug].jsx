import fs from 'fs'
import path from 'path'
import { useMemo } from 'react'
import Image from 'next/image'
import matter from 'gray-matter'
import format from 'date-fns/format'

import ContactSecondaryCTA from '../../components/ContactSecondaryCTA'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import MarkdownContent from '../../components/MarkdownContent'
import { classNames } from '../../utils/helpers'

export default function ArticlePage({
  frontmatter: { title, author, published, heroDescription, image, image2 },
  content,
}) {
  return (
    <Layout title={`WIG | Blog | ${title}`}>
      <Hero image={image} title={title}>
        {heroDescription}
      </Hero>

      {/* Main content */}
      <div className='max-w-2xl mx-auto py-16 px-4 space-y-8 bg-white dark:bg-gray-800 sm:px-6 lg:px-8'>
        {(published || !!author) && (
          <p className='text-md md:text-lg text-gray-500 dark:text-gray-300'>
            Published
            {published ? ` on ${format(new Date(published), 'PPP')}` : ``}
            {author ? ` by ${author}` : ``}.
          </p>
        )}
        <MarkdownContent content={content} />
      </div>

      <div className='relative max-w-lg my-32 mx-auto'>
        <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow-2xl'>
          <Gallery
            items={[
              {
                id: 'hero',
                imageUrl: image,
                title,
              },
              {
                id: 'alt',
                imageUrl: image2,
                title,
              },
            ]}
          />
        </div>
      </div>

      <ContactSecondaryCTA />
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('markdown', 'blog'))

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
    path.join('markdown', 'blog', slug + '.md'),
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
