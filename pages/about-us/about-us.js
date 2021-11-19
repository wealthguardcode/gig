import Layout from '../../components/Layout'
import Link from 'next/link'
import {
  CogIcon,
  GlobeIcon,
  UserGroupIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline'

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
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-0">
        <div className="p-10 mx-10  md:-mt-16 relative flex flex-col bg-white border rounded-lg shadow-xl mb-4">
          <CogIcon height={80} />
          <h1 className="text-3xl tracking-wider my-4 text-center font-semibold">
            Programs
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-10 mx-10 md:-mt-16 relative flex flex-col bg-white border rounded-lg shadow-xl mb-4">
          <GlobeIcon height={80} />
          <h1 className="text-3xl tracking-wider my-4 text-center font-semibold">
            Wholesale
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-10 mx-10 md:-mt-16 relative flex flex-col bg-white border rounded-lg shadow-xl mb-4">
          <UserGroupIcon height={80} />
          <h1 className="text-3xl tracking-wider my-4 text-center font-semibold">
            Group Captives
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
      </div>

      {/* Why GoGuard - header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              Why GoGuard?
            </p>
          </div>
        </div>
      </div>

      {/* Why GoGuard - content */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-0">
        <div className="p-10 mx-10  flex flex-col bg-blue-200 border-t-2 border-gray-600 rounded-lg shadow-xl mb-4">
          <h1 className="text-3xl tracking-wider my-4  font-semibold">
            Ingenuity
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-10 mx-10 flex flex-col bg-gray-200 border-t-2 border-gray-600 rounded-lg shadow-xl mb-4">
          <h1 className="text-3xl tracking-wider my-4  font-semibold">
            Service
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
        <div className="p-10 mx-10 flex flex-col bg-blue-200 border-t-2 border-gray-600 rounded-lg shadow-xl mb-4">
          <h1 className="text-3xl tracking-wider my-4  font-semibold">
            Passion
          </h1>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
          <p className="prose my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            imperdiet metus dolor, sed feugiat velit semper in. Aliquam cursus
            laoreet laoreet. Sed volutpat augue vitae congue tincidunt.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col justify-around items-center md:flex-row p-4 mx-4 my-10 border-t-2 border-gray-600 rounded-lg shadow-xl">
        <div className="mx-4 p-4 sm:mx-auto align-middle">
          <OfficeBuildingIcon height={200} />
        </div>
        <div className="mx-8 p-4 flex flex-col">
          <h1 className="text-3xl font-semibold my-3">Our Mission:</h1>
          <p className="prose-lg my-3">
            Aenean imperdiet metus dolor, sed feugiat velit semper in. Aliquam
            cursus laoreet laoreet. Sed volutpat augue vitae congue tincidunt:
          </p>
          <ol className="list-decimal prose my-3 sm:ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
      </div>
    </Layout>
  )
}
