import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white dark:bg-gray-600'>
        <main className='flex-grow flex flex-col justify-center  max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link href='/'>
              <a className='inline-flex'>
                <span className='sr-only'>WealthGuard</span>
                <Image
                  src='/images/wig-logo-v3.svg'
                  alt='Logo'
                  height={96}
                  width={260}
                />
              </a>
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-red-700 uppercase tracking-wide'>
                404 error
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:text-5xl'>
                Page not found.
              </h1>
              <p className='mt-2 text-base text-gray-500 dark:text-gray-400'>
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className='mt-6'>
                <Link href='/'>
                  <a className='text-base font-medium text-red-700 hover:text-red-600'>
                    Go back home<span aria-hidden='true'> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
