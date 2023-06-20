import ContactSecondaryCTA from '../../components/ContactSecondaryCTA'
import Layout from '../../components/Layout'
import { classNames } from '../../utils/helpers'

import { useMemo } from 'react'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import format from 'date-fns/format'

export default function ArticlePage({
  frontmatter: { title, author, published, heroDescription, image, image2 },
  content,
}) {
  return (
    <Layout title={`WIG | Blog | ${title}`}>
      <div className='relative bg-gray-400'>
        <div className='absolute inset-0'>
          <Image
            className='object-cover'
            src={image}
            layout='fill'
            objectFit='cover'
            priority={true}
            placeholder='blur'
            blurDataURL
            alt={title}
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply z-0'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white  sm:text-5xl lg:text-6xl'>
            {title}
          </h1>
          <p className='mt-6 text-xl text-gray-100 max-w-xl'>
            {heroDescription}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className='max-w-2xl mx-auto py-16 px-4 space-y-8 bg-white dark:bg-gray-800 sm:px-6 lg:px-8'>
        {(published || !!author) && (
          <p className='text-base md:text-xl text-gray-500 dark:text-gray-300'>
            Published
            {published ? ` on ${format(new Date(published), 'PPP')}` : ``}
            {author ? ` by ${author}` : ``}.
          </p>
        )}
        <div
          className='prose md:prose-xl md:max-w-xl dark:text-gray-400'
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        />
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
