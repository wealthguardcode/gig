import Layout from '../components/Layout'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
} from '@heroicons/react/outline'
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
  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="h-full mx-auto w-full px-4 sm:mt-24">
            {/* BG Image */}
            <div className="absolute inset-0">
              <img
                className="h-auto w-full object-fill"
                src="/images/goGuard-hero.svg"
                alt="goGuard-hero"
              />
              <div className="absolute inset-0 bg-gray-50 mix-blend-multiply" />
              {/* <img
                className="h-screen w-full "
                src="/images/gigHero2.png"
                alt="goGuard-hero"
              /> */}
            </div>
            <div className="text-center relative">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Commercial</span>{' '}
                <span className="block text-blue-600 xl:inline">
                  Insurance Programs
                </span>
              </h1>
              <p className="my-4 pb-4 font-bold text-lg md:text-xl lg:text-4xl tracking-tight">
                <span className="block xl:inline">
                  Providing insurance solutions with expertise,
                  <br />
                </span>
                <span className="mt-2 block xl:inline">
                  diversity of products and underwriting integrity!
                </span>
              </p>
              <div className="border-t-4 w-1/5 mx-auto py-2 border-green-600" />
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Whether you&apos;re a business owner or insurance broker,
                you&apos;ll find industry-specific resources and specialty
                insurance coverages to meet the unique needs of the industries
                we serve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 py-6">
                <div className="bg-blue-900 opacity-70 m-8 h-48 flex justify-center">
                  <div className="m-auto">
                    <h1 className="text-4xl text-white my-2">Brokers</h1>
                    <a
                      href="#"
                      className="mt-3 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600 sm:w-auto">
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="bg-blue-900 opacity-70 m-8 h-48 flex justify-center">
                  <div className="m-auto">
                    <h1 className="text-4xl text-white my-2">Businesses</h1>
                    <a
                      href="#"
                      className="mt-3 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600 sm:w-auto">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 pt-2">
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
      <div className="py-12 bg-gradient-to-t from-gray-50 via-gray-50 to-white">
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

      {/* Testimonial */}
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="max-w-3xl mx-auto text-center text-3xl leading-9 font-bold text-gray-900">
              Example Testimonial
            </h1>
            <blockquote className="mt-6">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
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
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-100 sm:w-auto">
            Learn more
          </a>
        </div>
      </div>
      {/* Covid Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Business Support</span>
            <span className="block">Covid-19 Resource Center</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
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
            <p className="mt-4 text-lg text-gray-500">
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
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">
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
