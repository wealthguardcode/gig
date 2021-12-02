import Layout from '../../components/Layout'
import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'

const resources = [
  {
    title: 'Resource 1',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/70P5WHoARt24PjDRuo7C',
  },
  {
    title: 'Resource 2',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/70P5WHoARt24PjDRuo7C',
  },
  {
    title: 'Resource 3',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/70P5WHoARt24PjDRuo7C',
  },
  {
    title: 'Resource 4',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/70P5WHoARt24PjDRuo7C',
  },
]

export default function BrokerResourcesPage() {
  return (
    <Layout title="GIG || Broker Resources">
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Broker Resources"
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Broker Resources
          </h1>
        </div>
      </div>

      {/* Main */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ornare eleifend justo, hendrerit venenatis ligula posuere sed.
              Duis ac odio eget turpis accumsan dignissim quis sollicitudin
              diam. Sed dictum nibh vitae hendrerit imperdiet. Aenean tincidunt
              sed est at hendrerit.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mx-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="relative rounded-lg border-2 border-gray-300 bg-white px-6 py-5 shadow-xl group hover:shadow-2xl flex justify-center items-center hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <a href="#">
                    <img
                      className="h-20 w-20 rounded-full "
                      src={resource.imageUrl}
                      alt={resource.title}
                    />
                  </a>
                </div>
                <div className="">
                  <a href="#" className="focus:outline-none">
                    <span className=" " aria-hidden="true" />
                    <p className="text-lg font-medium text-gray-900">
                      {resource.title}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
