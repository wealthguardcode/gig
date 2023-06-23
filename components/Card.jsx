import Link from 'next/link'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

export default function Card({ link, imageUrl, title }) {
  return (
    <div className='overflow-hidden w-full max-w-sm mx-auto border rounded shadow-xl hover:shadow-2xl hover:border-red-400 dark:hover:border-red-600 dark:bg-gray-900 transition duration-500 hover:scale-105 md:hover:scale-110'>
      <Link href={link} className='block w-full aspect-w-16 aspect-h-12'>
        <>
          <Image
            src={imageUrl}
            alt={title}
            priority
            placeholder='blur'
            blurDataURL={imageUrl}
            width={400}
            height={300}
            className='object-cover w-full'
          />
        </>
      </Link>
      <div className='flex flex-col items-center p-6'>
        <Link
          href={link}
          className='inline-flex items-center py-2 px-3 border border-transparent rounded-md text-xl font-bold leading-5 text-center text-white dark:text-white bg-red-500 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-500 dark:hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
          <>
            {title}
            <span>
              <ArrowTopRightOnSquareIcon className='ml-1' height={20} />
            </span>
          </>
        </Link>
      </div>
    </div>
  )
}
