import { useEffect } from 'react'
import Layout from '../components/Layout'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
  MailIcon,
  LinkIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import { motion } from 'framer-motion'

import Link from 'next/link'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

const features = [
  {
    name: 'Assisted Living Facilities',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Marina Insurance',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Coastal Property',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Cargo & Logistics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Terrorism & Sabotage',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Active Assailant',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Violent Malicious Acts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Deductible buy-down options',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
]

const features2 = [
  {
    name: 'Claims Experience',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Risk Control',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Extensive Coverage',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

export default function Home() {
  useEffect(() => {
    new WOW().init()
  }, [])

  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative md:pt-48 pt-16 sm:pb-4">
          <div className="md:h-screen mx-auto w-full px-4 sm:mt-0">
            {/* BG Image */}

            <div className="absolute inset-0 flex items-center justify-center h-screen mb-12 bg-fixed md:bg-center bg-cover custom-img">
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>

            {/* <motion.div
              animate={{ y: [0, 25] }}
              transition={{ ease: 'easeOut', duration: 2 }}> */}
            <div className="text-center relative">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Commercial Insurance</span>{' '}
                <span className="block text-indigo-600 font-extrabold ">
                  Programs &{' '}
                  <span className="block md:inline mt-3 md:mt-0">
                    Brokerage
                  </span>
                </span>
              </h1>
              <p className="outline my-6 pb-4 font-bold text-xl text-green-500 lg:text-3xl tracking-tight">
                <span className="block xl:inline">
                  Since 2016 we have been providing insurance solutions with
                  expertise,
                  <br />
                </span>
                <span className="mt-2 block xl:inline">
                  diversity of products, and underwriting integrity!
                </span>
              </p>
              <div className="border-t-4 w-1/5 mx-auto py-2 border-gray-900" />
              <p className="mt-3 max-w-md mx-auto prose lg:prose-xl text-gray-200 font-semibold  md:mt-5  md:max-w-3xl">
                Whether you&apos;re a business owner or insurance broker,
                you&apos;ll find industry-specific resources and specialty
                insurance coverages to meet the unique needs of the industries
                we serve.
              </p>
              <div className="flex justify-center my-8">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/programs">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      For Brokers
                    </a>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 ml-3">
                  <Link href="/contact-us">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-white ">
        {/* <motion.div
          animate={{ y: [0, 25] }}
          transition={{ ease: 'easeOut', duration: 2 }}> */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:pt-2 mt-10 md:mt-0 md:mx-0 pt-1 mx-1">
            Industries We Insure: Boats to Loved Ones to Logistics
          </h2>
        </div>
        {/* </motion.div> */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:pt-12 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-xl leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Broker/Business Tabs */}
      <div className="py-12 bg-gradient-to-t from-gray-50 via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center ">
            <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              GoGuard&apos;s insurance programs help businesses grow and thrive
            </p>
            <div className="border-t-4 w-1/5 mx-auto my-6 border-green-600" />
            <p className="mt-4 max-w-2xl text-2xl text-gray-500 mx-auto">
              We partner with businesses to help insure their success by
              protecting their assets, reducing exposure, and maintaining
              compliance.
            </p>
          </div>

          <div className="mt-10 shadow-xl rounded-xl">
            <dl className="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10 shadow-xl">
              <div className="my-10">
                <h1 className="text-4xl text-blue-100 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500 font-bold mx-2 text-center rounded py-1">
                  For Brokers
                </h1>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col p-4">
                  <h3 className="text-4xl tracking-wider ">Brokers</h3>
                  <p className="mt-3">
                    Aenean dictum varius metus a imperdiet. Donec cursus nulla
                    sem, ac bibendum elit laoreet nec. Nulla facilisi. Fusce
                    tristique lacus enim, vitae mattis ex laoreet et. Fusce
                    fringilla lacus et neque convallis, eu bibendum urna
                    maximus.
                  </p>
                </div>

                <div className=" ">
                  <img
                    className="w-3/4 mx-auto my-2 rounded"
                    src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_1280.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt-3 md:flex-row md:justify-around p-4">
                <Link href="/programs">
                  <a className="flex flex-start items-center border-2 border-blue-100 rounded group hover:bg-blue-100 hover:border-blue-300 p-2 px-3 mb-3 md:mb-0">
                    <BookOpenIcon
                      height={50}
                      className="text-yellow-400 group-hover:text-white"
                    />{' '}
                    <span className="flex items-center text-xl font-bold ml-1 group-hover:text-blue-400">
                      Programs
                    </span>
                  </a>
                </Link>
                <Link href="/resources">
                  <a className="flex flex-start  items-center border-2 border-blue-100 rounded group hover:bg-blue-100 hover:border-blue-300 p-2 mb-3 md:mb-0">
                    <LinkIcon
                      height={50}
                      className="text-blue-400 group-hover:text-white"
                    />
                    <span className="flex flex-start items-center text-xl font-bold ml-1 group-hover:text-blue-400">
                      Resources
                    </span>
                  </a>
                </Link>

                <Link href="/contact-us">
                  <a className="flex flex-start items-center border-2 border-blue-100 rounded group hover:bg-blue-100 hover:border-blue-300 p-2 px-5 mb-3 md:mb-0">
                    <MailIcon
                      height={50}
                      className="text-green-400 group-hover:text-white"
                    />
                    <span className="flex items-center text-xl font-bold ml-1 group-hover:text-blue-400">
                      Contact
                    </span>
                  </a>
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="max-w-3xl mx-auto text-center text-3xl leading-9 font-bold text-gray-900 ">
              Example Testimonial
            </h1>
            <blockquote className="mt-6 ">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p className="">
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nemo expedita voluptas culpa sapiente alias molestiae.
                  Numquam corrupti in laborum sed rerum et corporis.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      John Smith
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      CEO, Example Co
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <div className="bg-gray-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Helpful Business Resources</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            In finibus purus sit amet leo tempus, et condimentum justo
            venenatis. Nam ac eros condimentum, blandit risus eu, dapibus
            tortor. Quisque ut scelerisque risus.
          </p>
          <Link href="/#">
            <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-100 sm:w-auto">
              Learn more
            </a>
          </Link>
        </div>
      </div>
      {/* Covid Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Business Support</span>
            <span className="block">Covid-19 Resource Center</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200 ">
            See the latest federal and state resources available to business
            owners to help offset the effects of the Covid-19 pandemic,
            including business emergency funding and relief programs.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-solid border-blue-50 text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-50 hover:text-blue-600 sm:w-auto">
            Learn more
          </a>
        </div>
      </div>

      {/* Why Work with GIG */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Work With GIG?
            </h2>
            <p className="mt-4 text-lg text-gray-500  ">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {features2.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 opacity-70 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center ">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  )
}
