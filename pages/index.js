import Layout from '../components/Layout'

import { CheckIcon } from '@heroicons/react/outline'
import BrokerBusinessTabs from '../components/BrokerBusinessTabs'

const features = [
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
  {
    name: 'Sample Industry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque efficitur posuere.',
  },
]

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Commercial</span>{' '}
                <span className="block text-blue-600 xl:inline">
                  Insurance Programs
                </span>
              </h1>
              <p className="my-4 font-bold text-lg md:text-xl lg:text-4xl tracking-tight">
                <span className="block xl:inline">
                  Providing insurance solutions with expertise,
                  <br />
                </span>
                <span className="mt-2 block xl:inline">
                  diversity of products and underwriting integrity!
                </span>
              </p>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Whether you&apos;re a business owner or insurance broker,
                you&apos;ll find industry-specific resources and specialty
                insurance coverages to meet the unique needs of the industries
                we serve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-900 opacity-70 m-8 h-48 flex justify-center">
                  <div className="m-auto">
                    <h1 className="text-4xl text-white my-2">Brokers</h1>
                    <button
                      type="button"
                      className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="bg-blue-900 opacity-70 m-8 h-48 flex justify-center">
                  <div className="m-auto">
                    <h1 className="text-4xl text-white my-2">Businesses</h1>
                    <button
                      type="button"
                      className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 pt-12">
            Industries We Insure: Boats to Loved Ones to Logistics
          </h2>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:pt-12 lg:px-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
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
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
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
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GoGuard&apos;s insurance programs help businesses grow and thrive
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We partner with businesses to help insure their success by
              protecting their assets, reducing exposure, and maintaining
              compliance.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
              <BrokerBusinessTabs />
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
