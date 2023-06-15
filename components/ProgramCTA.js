import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'

export default function ProgramCTA() {
  return (
    <div className='bg-gray-300 dark:bg-gray-600'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-500 dark:text-gray-300 md:text-4xl'>
          <span className='block'>Ready to learn more?</span>
          <span className='block text-red-700 dark:text-red-600'>
            Contact us today.
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Link href='/contact-us'>
              <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 dark:bg-gray-400 dark:hover:bg-gray-500 hover:text-gray-300'>
                Contact us{' '}
                <MailIcon
                  className='ml-3 h-5 w-5 flex-shrink-0 text-gray-50'
                  aria-hidden='true'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
