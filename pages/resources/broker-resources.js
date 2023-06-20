import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'

const resources = [
  {
    title: 'Flood Action Plan',
    imageUrl: '/images/resources/resource.jpeg',
    link: '/images/resources/floodActionPlan.pdf',
  },
  {
    title: 'Hail Action Plan',
    imageUrl: '/images/resources/resource.jpeg',
    link: '/images/resources/hailActionPlan.pdf',
  },
  {
    title: 'Hurricane Action Plan',
    imageUrl: '/images/resources/resource.jpeg',
    link: '/images/resources/hurricaneActionPlan.pdf',
  },
  {
    title: 'Tornado Action Plan',
    imageUrl: '/images/resources/resource.jpeg',
    link: '/images/resources/tornadoActionPlan.pdf',
  },
]

export default function BrokerResourcesPage() {
  return (
    <Layout title='WIG | Broker Resources'>
      <div className='relative bg-red-400'>
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            layout='fill'
            objectFit='cover'
            priority={true}
            placeholder='blur'
            blurDataURL
            alt='Broker Resources'
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Broker Resources
          </h1>
        </div>
      </div>

      {/* Main */}
      <div className='bg-white dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='max-w-3xl mt-5 mx-auto text-xl md:text-2xl text-gray-500 dark:text-gray-400'>
              WealthGuard supports the continual education of brokers through
              our own collection of articles, webinars, industry white papers,
              case studies, videos, infographics, and program supplementals.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className='mx-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {resources.map((resource) => (
            <div
              key={resource.title}
              className='relative rounded-lg border-2 border-gray-300 bg-white px-6 py-5 shadow-xl group hover:shadow-2xl flex justify-center items-center hover:border-gray-400 dark:hover:border-red-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transform transition duration-500 hover:scale-105'>
              <div className='flex flex-col justify-center items-center'>
                <div className=''>
                  <a href={resource.link} target='_blank' rel='noreferrer'>
                    <Image
                      className='h-20 w-20 rounded-full'
                      height={80}
                      width={80}
                      placeholder='blur'
                      blurDataURL
                      src={resource.imageUrl}
                      alt={resource.title}
                    />
                  </a>
                </div>
                <div className=''>
                  <a
                    href={resource.link}
                    target='_blank'
                    rel='noreferrer'
                    className='focus:outline-none'>
                    <span className=' ' aria-hidden='true' />
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

      {/* Programs */}
      <div className='p-8 my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {/* {programs.map((program) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-xl mx-auto hover:shadow-2xl hover:border-indigo-200"
            key={program.slug}>
            <Link href={`/programs/${program.slug}`} passHref>
              <a>
                <img
                  className="w-full"
                  src={program.image.url}
                  alt={program.title}
                />
              </a>
            </Link>
            <div className="px-6 py-4 flex flex-col items-center">
              <Link href={`/programs/${program.slug}`} passHref>
                <a>
                  <div className="font-bold text-xl mb-2 text-center">
                    {program.title}
                  </div>
                </a>
              </Link>
              <div className="flex justify-center">
                <Link href={`/programs/${program.slug}`} passHref>
                  <a>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Learn more
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      {/* CTA section */}
      <div className='bg-red-700'>
        <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
            <span className='block'>Ready to learn more?</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-red-200'>
            Do not hesitate to reach out to us with your questions or concerns
            today.
          </p>
          <Link href='/contact-us'>
            <a className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 sm:w-auto'>
              Contact us{' '}
              <MailIcon
                className='ml-3 h-5 w-5 flex-shrink-0 text-gray-400'
                aria-hidden='true'
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
