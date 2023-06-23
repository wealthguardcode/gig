import format from 'date-fns/format'

import ContactSecondaryCTA from './ContactSecondaryCTA'
import Gallery from './Gallery'
import Hero from './Hero'
import Layout from './Layout'

export default function ArticleTemplate({ meta, children }) {
  const { title, author, published, heroDescription, image, image2 } = meta

  return (
    <Layout title={`WIG | ${title}`} description={heroDescription}>
      <Hero imageUrl={image} title={title}>
        {heroDescription}
      </Hero>

      {/* Main content */}
      <div className='max-w-2xl mx-auto py-16 px-4 space-y-8 bg-white dark:bg-gray-800 sm:px-6 lg:px-8'>
        {(published || !!author) && (
          <p className='text-base md:text-lg font-bold text-gray-800 dark:text-gray-300'>
            Published
            {published ? ` on ${format(new Date(published), 'PPP')}` : ``}
            {author ? ` by ${author}` : ``}.
          </p>
        )}
        <div className='prose dark:prose-dark md:prose-xl'>{children}</div>
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
