import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function ContactPrimaryCTA() {
  return (
    <div className='bg-red-700'>
      <div className='max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>Ready to learn more?</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-gray-200'>
          Do not hesitate to reach out to us with your questions or concerns
          today.
        </p>
        <Link
          href='/contact-us'
          className='inline-flex justify-center items-center w-full mt-8 py-3 px-5 border border-transparent rounded-md text-base font-medium text-red-600 bg-white hover:bg-red-50 sm:w-auto'>
          <>
            <span>Contact us</span>
            <EnvelopeIcon
              aria-hidden='true'
              className='shrink-0 h-5 w-5 ml-3 text-gray-400'
            />
          </>
        </Link>
      </div>
    </div>
  )
}
