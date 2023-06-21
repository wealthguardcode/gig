import Image from 'next/image'
import { marked } from 'marked'

import Gallery from './Gallery'

export default function SolutionCoverage({ image, image2, title, content }) {
  return (
    <div className='lg:grid lg:grid-cols-1 lg:gap-8 lg:items-end'>
      <div>
        <div className='prose prose-xl md:max-w-md lg:max-w-xl'>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl'>
            Coverage
          </p>
          <div className='dark:text-gray-400'>
            <div
              className='text-md md:text-lg'
              dangerouslySetInnerHTML={{
                __html: marked.parse(content, {
                  headerIds: false,
                  mangle: false,
                }),
              }}></div>
          </div>
        </div>
      </div>
      <div className='mt-12 relative text-base max-w-lg mx-auto lg:mt-0 md:pt-28'>
        <div className='relative bg-gray-50 dark:bg-gray-900 rounded-lg shadow-2xl p-4 mb-8'>
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
    </div>
  )
}
