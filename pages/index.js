import Layout from "../components/Layout";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
  MailIcon,
  LinkIcon,
  BookOpenIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const features = [
  {
    name: "Petroleum & Gas Distributors",
    description:
      "WealthGuard offers Excess Coverage for petroleum and gas distributors. Learn more about our risk appetite across industry categories.",
    href: "/programs/petroleum-and-gas-distributors",
  },
  {
    name: "Marina Insurance",
    description:
      "All perils coverage including wind & hail, flood, earthquake and collapse. No co-insurance- Agreed value for property.",
    href: "/programs/westwall-marina-package",
  },
  {
    name: "Coastal Property",
    description:
      "Hurricanes cause more damage than any other natural disaster known to man, and every year they are responsible for 28 billion dollars of destruction.",
    href: "/programs/coastal-property",
  },
  {
    name: "Cargo & Logistics",
    description:
      "Our Cargo and Logistics team are leaders in helping your business avoid business disruptions and recover from costly perils.",
    href: "/programs/cargo-and-logistics",
  },
  {
    name: "Terrorism & Sabotage",
    description:
      "The harm of life and property brought by acts of terrorism or sabotage is significant and incidents are increasing each year. ",
    href: "/programs/terrorism-and-sabotage",
  },
  {
    name: "Active Assailant",
    description:
      "The financial impact can be devastating to a business and this coverage will help keep you in business as you work through the emotional and financial recovery.",
    href: "/programs/active-assailant",
  },
  {
    name: "Violent Malicious Acts",
    description:
      "Designed to help you and your facility move forward after a tragedy, homicide, nonfatal injuries, or substantial damage to property.",
    href: "/programs/violent-malicious-acts",
  },
  {
    name: "Deductible Buy-down Options",
    description:
      "Helping you limit the first-dollar losses that you may experience by reducing or eliminating the deductible.",
    href: "/programs",
  },
  {
    name: "Hard to Place Risk",
    description:
      "Helping you get the reliable coverage for hard to place liability risk that may not fit the mold of a traditional insurance risk.",
    href: "/programs/hard-to-place-risk",
  },
  {
    name: "Yacht Program",
    description:
      "Designed to help with liability coverage for bodily injury or damage to the property of others and damage to personal property on the vessel.",
    href: "/programs/yacht-program",
  },
];

const features2 = [
  {
    name: "Experience",
    description:
      "Since 2016 we have been providing insurance solutions with expertise, diversity of products, and underwriting integrity!",
    icon: GlobeAltIcon,
  },
  {
    name: "Innovation",
    description:
      "WealthGuard's executive leadership has unprecedented access to innovative commercial insurance products and solutions.",
    icon: ScaleIcon,
  },
  {
    name: "Relationship Driven",
    description:
      "We have years of insurance experience helping carriers and brokers provide solutions to their clients. You will build a one on one relationship at WealthGuard",
    icon: LightningBoltIcon,
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
        <div className="relative pt-16 pb-10 md:pt-12">
          <div className="h-3/4 md:h-screen pb-12 mx-auto w-full px-4 sm:mt-0">
            {/* BG Image */}

            <div className="absolute inset-0 flex items-center justify-center h-screen md:mb-12 bg-fixed lg:bg-center bg-cover custom-img">
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>

            <div className="md:py-16 text-center relative">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Commercial Insurance</span>{" "}
                <span className="block text-red-700 font-extrabold ">
                  Programs &{" "}
                  <span className="block md:inline mt-3 md:mt-0">
                    Brokerage
                  </span>
                </span>
              </h1>
              <p className="outline my-3 pb-4 font-bold text-xl text-gray-300 lg:text-3xl tracking-tight">
                <span className="block xl:inline">
                  Since 2016 we have been providing insurance solutions with
                  expertise,
                  <br />
                </span>
                <span className="mt-2 block xl:inline">
                  diversity of products, and underwriting integrity!
                </span>
              </p>
              <div className="border-t-4 w-1/5 mx-auto py-2 border-red-700" />
              <p className="hidden md:block mt-3 max-w-md mx-auto prose lg:prose-xl text-gray-300  font-semibold  md:mt-5  md:max-w-3xl">
                Whether you&apos;re a business owner or insurance agent/broker,
                you&apos;ll find industry-specific resources and specialty
                insurance coverages to meet the unique needs of the industries
                we serve.
              </p>
              <div className="flex justify-center mt-8 mb-4">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/programs">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600 md:py-4 md:text-lg md:px-10">
                      For Brokers
                    </a>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 ml-3">
                  <Link href="/contact-us">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center xl:mt-12">
                <div className="">
                  <h1 className="text-xl font-semibold text-gray-200 mb-1 xl:mb-4">
                    Download Our{" "}
                  </h1>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 ml-3">
                  <a
                    href="/images/resources/theWealthGuardDifference.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-red-700 hover:border-red-600 dark:hover:border-red-600 text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    <DocumentDownloadIcon height={30} />
                    <span>The WealthGuard Difference</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300 md:pt-2 mt-10 md:mt-0 md:mx-0 pt-1 mx-1">
            WealthGuard Specialty Programs
          </h2>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:pb-24 lg:pt-12 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 ">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative cursor-pointer border-4 border-opacity-50 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:border-gray-300 dark:hover:border-red-700 transform transition duration-500 md:hover:scale-110 hover:scale-105"
                >
                  <div>
                    <CheckIcon
                      className="absolute h-8 w-8 text-green-500"
                      aria-hidden="true"
                    />
                    <Link href={feature.href}>
                      <a>
                        <p className="ml-9 text-xl leading-6 font-medium text-gray-900 dark:text-gray-300">
                          {feature.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <Link href={feature.href}>
                    <a>
                      <div className="mt-2 ml-9 prose-lg text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Broker/Business Tabs */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center ">
            <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight md:tracking-wider text-gray-900 dark:text-gray-300 sm:text-4xl text-center">
              WealthGuard&apos;s insurance programs help businesses grow and
              thrive
            </p>
            <div className="border-t-4 w-1/5 mx-auto my-6 border-red-700" />
            <p className="mt-4 max-w-2xl prose-2xl md:tracking-wide text-gray-500 dark:text-gray-400 mx-auto">
              We provide our partners help to insure their success by protecting
              their client&apos;s assets, minimizing exposure, while providing
              exceptional service.
            </p>
          </div>

          <div className="mt-10 shadow-xl rounded-xl dark:bg-gray-300">
            <div className="space-y-2 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10 shadow-2xl">
              <div className="my-10">
                <h1 className="text-4xl text-white bg-gradient-to-r from-gray-400 via-gray-500 to-red-700 font-bold mx-2 text-center rounded py-1">
                  For Brokers
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center items-center p-4">
                  <h1 className="text-5xl tracking-wider dark:text-gray-900">
                    Brokers
                  </h1>
                  <p className="mt-3 prose-xl mx-8 dark:text-gray-500">
                    We work with selective brokers across the USA to bring your
                    clients best-in-class insurance solutions and provide
                    extensive resources to help you expand your business.
                  </p>
                </div>

                <div className="mx-4">
                  <Image
                    className="mx-auto my-2 rounded"
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Insurance Broker"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt- md:flex-row md:justify-around p-4">
                <Link href="/programs">
                  <a className="flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                      <BookOpenIcon
                        height={40}
                        className="text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500"
                      />
                      <span className="flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700">
                        Programs
                      </span>
                    </button>
                  </a>
                </Link>
                <Link href="/resources/broker-resources">
                  <a
                    className="flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0"
                    aria-label="Useful Resources for Brokers"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                      <LinkIcon
                        height={40}
                        className="text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500"
                      />
                      <span className="flex flex-start items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-600">
                        Resources
                      </span>
                    </button>
                  </a>
                </Link>

                <Link href="/contact-us">
                  <a className="flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                      <MailIcon
                        height={40}
                        className="text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500"
                      />
                      <span className="flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700">
                        Contact Us
                      </span>
                    </button>
                  </a>
                </Link>
              </div>
            </div>

            {/* Brokers FAQ */}
            {/* <div className='bg-gray-50 dark:bg-gray-700'>
              <div className='max-w-7xl mx-auto py-6 px-4 sm:pt-8 sm:pb-16 sm:px-6 lg:px-8'>
                <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
                  <dl className='mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-500'>
                    {faqs.map((faq) => (
                      <Disclosure as='div' key={faq.question} className='pt-6'>
                        {({ open }) => (
                          <>
                            <dt className='text-xl'>
                              <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                                <span className='font-medium text-gray-900 dark:text-gray-300'>
                                  {faq.question}
                                </span>
                                <span className='ml-6 h-7 flex items-center'>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-6 w-6 transform dark:text-gray-500'
                                    )}
                                    aria-hidden='true'
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                              <p className='text-lg text-gray-500 dark:text-gray-400'>
                                {faq.answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <section className="py-12 bg-gray-50 dark:bg-gray-700 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="max-w-3xl mx-auto text-center text-3xl leading-9 font-bold text-gray-900 dark:text-gray-300">
              WealthGuard Testimonial
            </h1>
            <blockquote className="mt-6 ">
              <div className="max-w-3xl mx-auto text-center text-lg md:text-2xl leading-9 font-medium text-gray-900 dark:text-gray-400">
                <p className="">
                  &ldquo;WealthGuard&apos;s program manager and team were a
                  pleasure to work with. They were very knowledgeable, sincere,
                  had great communication, and provided a level of service that
                  is rare from an underwriter. In addition to seeking out the
                  best coverages for my clients, he also explained the many risk
                  control services that WealthGuard offers. I look forward to a
                  long and fruitful relationship with both WealthGuard as well
                  as the whole team. I would recommend their services for any
                  one in need of broker services.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900 dark:text-gray-400">
                      Bill H
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-red-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500 dark:text-gray-400">
                      VP Sales
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      {/* <div className='bg-gray-700 dark:bg-gray-300'>
        <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-white dark:text-gray-600 sm:text-4xl'>
            <span className='block'>Helpful Broker Resources</span>
          </h2>
          <p className='mt-4 text-xl leading-9 text-gray-200 dark:text-gray-500'>
            WealthGuard supports the continual education of brokers through our
            own collection of articles, webinars, industry white papers, case
            studies, videos, infographics, and program supplementals.
          </p>
          <Link href='/resources/broker-resources'>
            <a
              className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white dark:text-gray-300 dark:bg-gray-600 dark:hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 sm:w-auto'
              aria-label='Useful Resources for Brokers'>
              Broker Resources
            </a>
          </Link>
        </div>
      </div> */}

      {/* Why Work with WealthGuard */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300">
              Why Work With WealthGuard?
            </h2>
            <p className="mt-4 text-2xl text-gray-500 dark:text-gray-400">
              Year over year we have consistently achieved{" "}
              <strong>200% growth</strong>,{" "}
              <span className="font-bold text-red-600">
                <a href="tel:832-930-3827" target="_blank" rel="noreferrer">
                  call us
                </a>
              </span>{" "}
              and learn why!
            </p>
          </div>

          <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {features2.map((feature) => (
              <div
                key={feature.name}
                className="shadow-xl hover:shadow-2xl rounded-xl m-2 p-4 dark:bg-gray-700 border dark:border-gray-500"
              >
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 dark:bg-red-600 opacity-70 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xl leading-6 font-medium text-red-700 dark:text-gray-300 text-center ">
                    {feature.name}
                  </p>
                </div>
                <div className="mt-3 prose-lg text-gray-500 dark:text-gray-400 md:text-center">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
