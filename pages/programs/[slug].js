import Layout from '../../components/Layout'
import { getProgram, getProgramsSlugs } from '../../lib/data'
import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'
import he from 'he'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const getStaticPaths = async () => {
  const slugRes = await getProgramsSlugs()
  const slugs = slugRes.programs

  console.log(slugs)

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const program = await getProgram(params.slug)

  return {
    props: {
      program: program.programs[0],
      coverage: await serialize(he.decode(program.programs[0].coverage)),
      highlights: await serialize(he.decode(program.programs[0].highlights)),
    },
  }
}

export default function ProgramPage({ program, coverage, highlights }) {
  // console.log(program)
  return (
    <Layout title={`GIG || ${program.title}`}>
      {/* Hero */}
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={program.image.url}
            alt={program.title}
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white  sm:text-5xl lg:text-6xl">
            {program.title}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-xl ">
            {program.heroDescription}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="pt-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center my-6">
            <div className="text-base max-w-prose  lg:max-w-none">
              <p className="mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {program.subHeading}
              </p>
            </div>
            <div className="relative z-10 prose prose-xl  mx-auto lg:max-w-5xl lg:mx-0 mb-10">
              <p className="text-lg ">{program.description}</p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-xl max-w-none">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Coverage
                </p>
                {<MDXRemote {...coverage} />}
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none md:pt-32">
              <blockquote className="relative bg-gray-50 rounded-lg shadow-lg p-8">
                <img
                  src={program.image.url}
                  alt={program.title}
                  className="h-auto rounded"
                />
                <img
                  src={program.image2.url}
                  alt={program.title}
                  className="h-auto rounded mt-8"
                />
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto ">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl my-4">
              Highlights
            </h2>
            <div className="prose prose-xl max-w-none mt-2">
              {<MDXRemote {...highlights} />}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to learn more?</span>
            <span className="block text-indigo-600">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact-us">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Contact us{' '}
                  <MailIcon
                    className="ml-3 h-5 w-5 flex-shrink-0 text-gray-50"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
