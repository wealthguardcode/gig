import Link from 'next/link'
import Image from 'next/image'

import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'

const resources = [
  {
    title: 'WealthGuard 2023 Product Guide',
    imageUrl: '/images/resources/WealthGuard 2023 Product Guide Cover Image.jpg',
    link: '/images/resources/WealthGuard Insurance Group - 2023 Product Guide.pdf',
  },
]

export default function BrokerResourcesPage() {
  return (
    <Layout title='WIG | Product Guide'>
      <Hero
        imageUrl='https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
        title='Broker Resources'
      />

      {/* Main */}
      <div className='bg-white dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='max-w-3xl mt-5 mx-auto text-xl md:text-2xl text-gray-500 dark:text-gray-400'>
              Download the complete WealthGuard 2023 Product Guide below. (Click PDF link to download).
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className='mb-48 mx-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {resources.map((resource) => (
            <div
              key={resource.title}
              className='relative rounded-lg border-2 border-gray-300 bg-white px-6 py-5 shadow-xl group hover:shadow-2xl flex justify-center items-center hover:border-gray-400 dark:hover:border-red-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition duration-500 hover:scale-105'>
              <div className='flex flex-col justify-center items-center'>
                <div>
                  <a href={resource.link} target='_blank' rel='noreferrer'>
                    <Image
                      src={resource.imageUrl}
                      alt={resource.title}
                      placeholder='blur'
                      blurDataURL={resource.imageUrl}
                      width={80}
                      height={80}
                      className='h-20 w-20 rounded-full'
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={resource.link}
                    target='_blank'
                    rel='noreferrer'
                    className='focus:outline-none'>
                    <span aria-hidden='true' />
                    <p className='text-lg font-medium text-gray-900'>
                      {resource.title}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactPrimaryCTA />
    </Layout>
  )
}
