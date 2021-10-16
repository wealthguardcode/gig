import Layout from '../components/Layout'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Complete Business </span>{' '}
                <span className="block text-blue-600 xl:inline">
                  Insurance Solutions
                </span>
              </h1>
              <p className="my-4 font-bold text-lg md:text-xl lg:text-4xl tracking-tight">
                <span className="block xl:inline">
                  for 25+ Industries Including Grading & Excavation, <br />
                </span>
                <span className="mt-2 block xl:inline">
                  Landscaping, Tree Services and Greenhouse Operations
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
          </main>
        </div>
      </div>
    </Layout>
  )
}
