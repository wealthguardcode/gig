import Layout from '../../components/Layout'
import Link from 'next/link'
import { CogIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/outline'

export default function AboutUsOverview() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-white">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-5 text-xl text-gray-800">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet.
            </p>
            <p className="mt-5 text-xl text-gray-800">
              Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh
              integer quis. Eu vulputate diam sit tellus quis at.
            </p>
            <Link href="/about-us/leadership" passHref>
              <a>
                <button
                  type="button"
                  className="inline-flex items-center uppercase mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Meet Our Leadership
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-2 mx-4 flex flex-col">
          <CogIcon height={80} />
          <h1>Programs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-2 mx-4 flex flex-col">
          <GlobeIcon height={80} />
          <h1>Wholesale</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-2 mx-4 flex flex-col">
          <UserGroupIcon height={80} />
          <h1>Group Captives</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
      </div>
    </Layout>
  )
}
