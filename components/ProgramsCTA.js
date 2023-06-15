import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'

export default function ProgramsCTA() {
  return (
    <div className='bg-red-700'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>Ready to learn more?</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-gray-200'>
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
  )
}
