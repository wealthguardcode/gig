import Image from 'next/image'

// TODO: Add a new lightbox component
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { marked } from 'marked'

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
          {/* <SimpleReactLightbox> */}
          {/* <SRLWrapper> */}
          <div className='flex justify-between'>
            <div className='mr-2'>
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className='rounded mx-2 md:m-2 cursor-pointer'
              />
            </div>
            <div>
              <Image
                src={image2}
                alt={title}
                width={400}
                height={300}
                className='rounded mx-2 md:m-2 cursor-pointer'
              />
            </div>
          </div>
          {/* </SRLWrapper> */}
          {/* </SimpleReactLightbox> */}
        </div>
      </div>
    </div>
  )
}
