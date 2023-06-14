import Link from 'next/link'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function ProgramsGrid({ rootSlug = 'programs', programs }) {
  return (
    <div className='p-8 my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {programs.map((program) => (
        <div
          className='max-w-sm rounded overflow-hidden shadow-xl mx-auto hover:shadow-2xl border hover:border-red-400 dark:hover:border-red-600 dark:bg-gray-900 transform transition duration-500 md:hover:scale-110 hover:scale-105'
          key={program.slug}
        >
          <Link href={`/${rootSlug}/${program.slug}`} passHref>
            <a>
              <Image
                className='w-full'
                src={program.frontmatter.image}
                height={300}
                width={400}
                priority={true}
                placeholder='blur'
                blurDataURL
                alt={program.frontmatter.title}
              />
            </a>
          </Link>
          <div className='px-6 py-4 flex flex-col items-center'>
            <Link href={`/${rootSlug}/${program.slug}`} passHref>
              <a>
                <div className='font-bold mb-2 text-center dark:text-gray-300'>
                  <button
                    type='button'
                    className='inline-flex items-center px-3 py-2 border border-transparent text-xl leading-4 font-medium rounded-md text-white bg-red-500 dark:bg-red-700 dark:text-white hover:bg-red-700 dark:hover:bg-red-500 dark:hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  >
                    {program.frontmatter.title}{' '}
                    <span>
                      <ExternalLinkIcon className='ml-1' height={20} />
                    </span>
                  </button>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
