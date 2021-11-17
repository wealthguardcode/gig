import Layout from '../../components/Layout'
import { getProgram, getProgramsSlugs } from '../../lib/data'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
  {
    question: "What's the best thing about Insurance?",
    answer:
      'Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const getStaticPaths = async () => {
  const slugRes = await getProgramsSlugs()
  const slugs = slugRes.programs

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
    },
  }
}

export default function ProgramPage({ program }) {
  console.log(program)
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={program.image.url}
            alt=""
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
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vellectus nisl eget eget ut
            consectetur.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {program.title}
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi
              vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <img
                  src={program.image2.url}
                  alt="Workcation"
                  className="h-auto rounded"
                />
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
