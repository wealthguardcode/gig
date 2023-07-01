import ContactSecondaryCTA from './ContactSecondaryCTA'
import Gallery from './Gallery'
import Hero from './Hero'
import Layout from './Layout'
import SolutionDescription from './SolutionDescription'
import SolutionForm from './SolutionForm'
import SolutionHighlights from './SolutionHighlights'

export default function SolutionTemplate({ meta, children }) {
  const {
    title,
    heroDescription,
    image,
    image2,
    subHeading,
    description,
    highlights,
  } = meta

  return (
    <Layout title={`WIG | ${title}`} description={heroDescription}>
      <Hero imageUrl={image} title={title}>
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

          <div className='lg:grid lg:grid-cols-1 lg:gap-8 lg:items-end'>
            <div>
              <div className='md:max-w-md lg:max-w-xl'>
                <p className='mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl'>
                  Coverage
                </p>
                <div className='prose dark:prose-dark md:prose-xl'>
                  {children}
                </div>
              </div>
            </div>
            <div className='relative w-full max-w-lg mt-12 mx-auto text-base md:pt-28 lg:mt-0'>
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
        </div>
      </div>

      <SolutionHighlights highlights={highlights} />

      <ContactSecondaryCTA />
    </Layout>
  )
}
