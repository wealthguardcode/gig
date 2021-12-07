import Layout from '../../components/Layout'
import { getPrograms } from '../../lib/data'
import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'

export const getStaticProps = async () => {
  const data = await getPrograms()
  // console.log(data)
  const programs = data.programs
  return {
    props: {
      programs,
    },
  }
}

export default function ProgramsPage({ programs }) {
  // console.log(programs)
  return (
    <Layout title="WIG | Our Programs">
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/n8fvyRIWRuK9U3wCa2tT"
            alt="GoGuard's Programs"
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            We have years of insurance experience helping carriers and brokers
            provide solutions to their clients. Experience the difference of
            GoGuard&apos;s newest Programs and Binding Authority division.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="p-8 my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((program) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-xl mx-auto hover:shadow-2xl border hover:border-blue-300 dark:hover:border-blue-600 dark:bg-gray-900"
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
                  <div className="font-bold text-xl mb-2 text-center dark:text-gray-300">
                    {program.title}
                  </div>
                </a>
              </Link>
              <div className="flex justify-center">
                <Link href={`/programs/${program.slug}`} passHref>
                  <a>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 dark:bg-blue-300 dark:text-blue-800 hover:bg-blue-200 dark:hover:bg-blue-300 dark:hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Learn more
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to learn more?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Do not hesitate to reach out to us with your questions or concerns
            today.
          </p>
          <Link href="/contact-us">
            <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
              Contact us{' '}
              <MailIcon
                className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
