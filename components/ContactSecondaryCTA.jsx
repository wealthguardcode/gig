import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'

export default function ContactSecondaryCTA() {
  return (
    <div className='bg-gray-300 dark:bg-gray-600'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-24 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-500 dark:text-gray-300 md:text-4xl'>
          <span className='block'>Ready to learn more?</span>
          <span className='block text-red-700 dark:text-red-600'>
            Contact us today.
          </span>
        </h2>
        <div className='flex mt-8 lg:flex-shrink-0 lg:mt-0'>
          <div className='inline-flex rounded-md shadow'>
            <Link href='/contact-us' passHref>
              <a className='inline-flex justify-center items-center py-3 px-5 border border-transparent rounded-md text-base font-medium text-white bg-gray-600 hover:text-gray-300 hover:bg-gray-700 dark:bg-gray-400 dark:hover:bg-gray-500'>
                Contact us{' '}
                <MailIcon
                  className='flex-shrink-0 h-5 w-5 ml-3 text-gray-50'
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
