import Layout from '../../components/Layout'
import Link from 'next/link'
import {
  CogIcon,
  ScaleIcon,
  UserGroupIcon,
  OfficeBuildingIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline'

export default function AboutUsOverview() {
  return (
    <Layout title='WIG | About Us'>
      {/* Hero */}
      <div className='relative bg-white dark:bg-gray-800'>
        <div className='h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full'>
          <div className='h-full w-full xl:grid xl:grid-cols-2'>
            <div className='h-full xl:relative xl:col-start-2'>
              <img
                className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                src='https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
                alt='People working on laptops'
              />
              <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-gray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
              />
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
          <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl lg:text-6xl'>
              About Us
            </h1>
            <p className='mt-5 text-xl text-gray-800 dark:text-gray-400'>
              WealthGuard Insurance Group is a company built on relationships.
              Our combined leadership has 50+ years of cultivating, delivering
              and continuing the best relationships in the business. Over time,
              we have surrounded ourselves with the best talent available and
              are poised to continue our success in providing insurance.
            </p>
            <Link href='/about-us/leadership' passHref>
              <a>
                <button
                  type='button'
                  className='inline-flex items-center uppercase mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-lg hover:shadow-2xl text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                  Meet Our Leadership
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 md:mt-0 '>
        <div className='p-10 mx-10 -mt-16 md:-mt-16 relative flex flex-col bg-white border-2 border-gray-300 hover:border-gray-400 dark:hover:border-red-600 rounded-lg shadow-xl hover:shadow-2xl mb-4 dark:bg-gray-900'>
          <CogIcon height={80} className='dark:text-gray-300' />
          <h1 className='text-3xl tracking-wider my-4 text-center font-semibold dark:text-gray-300'>
            Programs
          </h1>
          <p className='prose-lg my-2 dark:text-gray-400'>
            We have years of insurance experience helping carriers and brokers
            provide solutions to their clients. Experience the difference of
            WealthGuard&apos;s newest Programs and Binding Authority division:
          </p>
          <ul className='list-disc ml-6 dark:text-gray-400'>
            <li>Assisted Living Facilities Insurance</li>
            <li>Marina Insurance </li>
            <li>Coastal Property</li>
            <li>Cargo & Logistics Insurance</li>
            <li>Terrorism & Sabotage Insurance</li>
            <li>Active Assailant and Violent Malicious Acts Insurance</li>
            <li>Deductible buy-down options</li>
          </ul>
        </div>
        <div className='p-10 mx-10 md:-mt-16 relative flex flex-col bg-white border-2 border-gray-300 hover:border-gray-400 dark:hover:border-red-600 rounded-lg shadow-xl hover:shadow-2xl mb-4 dark:bg-gray-900'>
          <ScaleIcon height={80} className='dark:text-gray-300' />
          <h1 className='text-3xl tracking-wider my-4 text-center font-semibold dark:text-gray-300'>
            Stability
          </h1>
          <p className='prose-lg my-2 dark:text-gray-400'>
            As an independent broker, you have the privilege of going to market
            for your client. WealthGuard&apos;s executive leadership has
            unprecedented access to innovative commercial insurance products and
            solutions that are broad in scope, properly priced and highly
            serviced.
          </p>
        </div>
        <div className='p-10 mx-10 md:mt-16 lg:-mt-16 relative flex flex-col bg-white border-2 border-gray-300 hover:border-gray-400 dark:hover:border-red-600 rounded-lg shadow-xl hover:shadow-2xl mb-4 dark:bg-gray-900'>
          <UserGroupIcon height={80} className='dark:text-gray-300' />
          <h1 className='text-3xl tracking-wider my-4 text-center font-semibold dark:text-gray-300'>
            Relationships
          </h1>
          <p className='prose-lg my-2 dark:text-gray-400'>
            Each client has different insurance needs. For 30+ years, our
            leadership team has delivered strong results, year over year, for
            our key trading partners and brokers. We credit this success for the
            personal and professional relationships that have enjoyed over the
            past years and years to come. If your looking for a partner, we are
            here for you!
          </p>
        </div>
      </div>

      {/* Why WealthGuard - header */}
      <div className='bg-white dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl sm:tracking-tight lg:text-5xl'>
              Why WealthGuard?
            </p>
          </div>
        </div>
      </div>

      {/* Why WealthGuard - content */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 md:mt-0'>
        <div className='p-10 mx-10 flex flex-col bg-red-300 dark:bg-red-400 border-t-2 border-gray-600 dark:border-red-500 rounded-lg shadow-xl hover:shadow-2xl mb-4'>
          <h1 className='text-3xl tracking-wider my-4 font-semibold dark:text-gray-800'>
            Focus
          </h1>
          <p className='prose my-2'>
            Independent Agents have limited time and resources to place their
            commercial business. They are seeking insurance advisors who
            understand their needs and the complexity of the risk being placed.
          </p>
          <p className='prose my-2'>
            WealthGuard Insurance Group has access to innovative commercial
            insurance products and solutions that are broad in scope, properly
            priced and highly serviced. We closely partner with Independent
            Agents and Brokers who seek the value in our expertise, enjoy our
            relationship and utilize our diversity of products.
          </p>
        </div>

        <div className='p-10 mx-10 flex flex-col bg-gray-300 dark:bg-gray-300 border-t-2 dark:border-red-500 border-gray-600  rounded-lg shadow-xl hover:shadow-2xl mb-4'>
          <h1 className='text-3xl tracking-wider my-4 font-semibold dark:text-gray-800'>
            Differentiator
          </h1>

          <ul className='list-disc prose my-2'>
            <li>
              Partner with our capacity providers to make the platform as “low
              touch” as possible
            </li>
            <li>
              Align our interests with our partner carriers/companies for
              collaborative terms of coverage, rate/deductibles and commissions
            </li>
            <li>
              Underwriting discipline is paramount as we develop opportunistic
              strategies for each class/segment so we can stay ahead of the
              market
            </li>
          </ul>
        </div>
        <div className='p-10 mx-10 flex flex-col dark:border-red-500 bg-red-300 dark:bg-red-400 border-t-2 border-gray-600  rounded-lg shadow-xl hover:shadow-2xl mb-4'>
          <h1 className='text-3xl tracking-wider my-4 font-semibold dark:text-gray-800'>
            Passion
          </h1>
          <p className='prose my-2'>
            Each client has different insurance needs. For 30+ years, our
            leadership team has delivered strong results, year over year, for
            our key trading partners and brokers. We credit this success for the
            personal and professional relationships that have enjoyed over the
            past years and years to come. If your looking for a partner, we are
            here for you!
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className='flex flex-col justify-around items-center md:flex-row p-4 mx-4 my-10 border-t-2 border-gray-600 hover:border-2 rounded-lg shadow-xl hover:shadow-2xl dark:bg-gray-700'>
        <div className='mx-4 p-4 sm:mx-auto align-middle'>
          <OfficeBuildingIcon height={200} className='dark:text-gray-300' />
        </div>
        <div className='mx-8 p-4 flex flex-col'>
          <h1 className='text-3xl font-semibold my-3 dark:text-gray-300'>
            Our Mission:
          </h1>
          <p className='prose-lg my-3 dark:text-gray-400'>
            Aenean imperdiet metus dolor, sed feugiat velit semper in. Aliquam
            cursus laoreet laoreet. Sed volutpat augue vitae congue tincidunt:
          </p>
          <ol className='list-decimal prose my-3 sm:ml-5'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
      </div>

      {/* CTA */}
      <div className='relative bg-gray-800 dark:bg-gray-900'>
        <div className='h-56 bg-red-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1444718070663-99afd7176287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80&blend=6366F1&sat=-100&blend-mode=multiply'
            alt='WealthGuard is here to help'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold uppercase tracking-wider text-gray-300'>
              Don&apos;t worry
            </h2>
            <p className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
              We&apos;re here to help
            </p>
            <p className='mt-3 text-lg text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <Link href='/contact-us'>
                  <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'>
                    Contact us
                    <ExternalLinkIcon
                      className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
