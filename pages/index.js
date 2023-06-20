import Popup from '../components/Popup'
import Layout from '../components/Layout'
import { brokerage } from '../data/brokerage'
import { programs } from '../data/programs'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { classNames } from '../utils/helpers'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
  MailIcon,
  LinkIcon,
  BookOpenIcon,
  DocumentDownloadIcon,
} from '@heroicons/react/outline'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 8000,
  draggable: false,
})

const SOLUTIONS = [
  ...programs.map((p) => ({
    ...p,
    href: `/programs/${p.slug}`,
  })),
  ...brokerage.map((b) => ({
    ...b,
    href: `/brokerage/${b.slug}`,
  })),
]

const BENEFITS = [
  {
    icon: GlobeAltIcon,
    name: 'Experience',
    description:
      'Since 2016 we have been providing insurance solutions with expertise, diversity of products, and underwriting integrity!',
  },
  {
    icon: ScaleIcon,
    name: 'Innovation',
    description:
      "WealthGuard's executive leadership has unprecedented access to innovative commercial insurance products and solutions.",
  },
  {
    icon: LightningBoltIcon,
    name: 'Relationship Driven',
    description:
      'We have years of insurance experience helping carriers and brokers provide solutions to their clients. You will build a one on one relationship at WealthGuard',
  },
]

export default function Home() {
  const {
    ref: triggerPopupRef,
    isOpen,
    setOpen,
    closePopup,
  } = useTriggerPopup()

  return (
    <>
      {/* TODO: Remove button */}
      <div className='flex justify-center w-full p-3 bg-blue-900 dark:bg-blue-50'>
        <button
          onClick={() => {
            localStorage.setItem('homePopupShown', 'false')
          }}
          className='py-2 px-4 rounded-md text-white dark:text-blue-900 bg-blue-600 dark:bg-blue-200 disabled:opacity-50'>
          Reset Popup
        </button>
      </div>
      <HomePopup isOpen={isOpen} closePopup={closePopup} />
      <Layout>
        <div className='relative bg-white dark:bg-gray-800 overflow-hidden'>
          <div className='relative'>
            <div className='flex items-center h-screen-header w-full mx-auto px-4'>
              {/* BG Image */}
              <div className='absolute inset-0 flex items-center justify-center h-screen bg-fixed lg:bg-center bg-cover custom-img'>
                <div className='absolute inset-0 bg-gray-400 mix-blend-multiply' />
              </div>

              <div className='relative w-full text-center'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Commercial Insurance</span>{' '}
                  <span className='block text-red-700 font-extrabold '>
                    Programs &{' '}
                    <span className='block md:inline mt-3 md:mt-0'>
                      Brokerage
                    </span>
                  </span>
                </h1>
                <p className='outline my-3 pb-4 font-bold text-xl text-gray-300 lg:text-3xl tracking-tight'>
                  <span className='block xl:inline'>
                    Since 2016 we have been providing insurance solutions with
                    expertise,
                    <br />
                  </span>
                  <span className='mt-2 block xl:inline'>
                    diversity of products, and underwriting integrity!
                  </span>
                </p>
                <div className='border-t-4 w-1/5 mx-auto py-2 border-red-700' />
                <p className='hidden md:block mt-3 max-w-md mx-auto prose lg:prose-xl text-gray-300  font-semibold  md:mt-5  md:max-w-3xl'>
                  Whether you&apos;re a business owner or insurance
                  agent/broker, you&apos;ll find industry-specific resources and
                  specialty insurance coverages to meet the unique needs of the
                  industries we serve.
                </p>
                <div className='flex justify-center mt-8 mb-4'>
                  <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                    <Link href='/brokerage'>
                      <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600 md:py-4 md:text-lg md:px-10'>
                        For Brokers
                      </a>
                    </Link>
                  </div>
                  <div className='mt-3 rounded-md shadow sm:mt-0 ml-3'>
                    <Link href='/contact-us'>
                      <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className='py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='mb-8 md:mb-10 lg:mb-12 text-3xl font-extrabold text-gray-900 dark:text-gray-300'>
              WealthGuard Specialty Insurance Solutions
            </h2>
          </div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='lg:col-span-2'>
              <div className='max-w-5xl mx-auto sm:grid sm:grid-cols-2'>
                {SOLUTIONS.map((solution) => (
                  <div key={solution.name}>
                    <Link href={solution.href}>
                      <a className='group flex flex-1 gap-8 items-center p-4'>
                        <CheckIcon
                          className='flex-none h-8 w-8 text-green-500'
                          aria-hidden='true'
                        />
                        <span className='text-xl leading-normal font-medium text-gray-900 dark:text-gray-300 group-hover:text-red-700 dark:group-hover:text-red-700'>
                          {solution.name}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Broker/Business Tabs */}
        <div className='py-12 bg-white dark:bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='lg:text-center '>
              <p className='my-2 text-3xl leading-8 font-extrabold tracking-tight md:tracking-wider text-gray-900 dark:text-gray-300 sm:text-4xl text-center'>
                WealthGuard&apos;s insurance programs help businesses grow and
                thrive
              </p>
              <div className='border-t-4 w-1/5 mx-auto my-6 border-red-700' />
              <p className='mt-4 max-w-2xl prose-2xl md:tracking-wide text-gray-500 dark:text-gray-400 mx-auto'>
                We provide our partners help to insure their success by
                protecting their client&apos;s assets, minimizing exposure,
                while providing exceptional service.
              </p>
              <Image
                className='mediaobject'
                src='/images/Coverholder at Lloyds_black_rgb.png'
                alt='Coverholder at Lloyds logo black'
                width={400}
                height={150}
              />
              <p className='mt-4 max-w-2xl prose-2xl md:tracking-wide text-gray-500 dark:text-gray-400 mx-auto'>
                WealthGuard Insurance Group is a Coverholder at Lloyd&apos;s.
              </p>
            </div>

            <div className='mt-10 shadow-xl rounded-xl dark:bg-gray-300'>
              <div className='space-y-2 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10 shadow-2xl'>
                <div className='my-10'>
                  <h2 className='text-4xl text-white bg-gradient-to-r from-gray-400 via-gray-500 to-red-700 font-bold mx-2 text-center rounded py-1'>
                    For Brokers
                  </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='flex flex-col justify-center items-center p-4'>
                    <h3
                      ref={triggerPopupRef}
                      className='text-5xl tracking-wider dark:text-gray-900'>
                      Brokers
                    </h3>
                    <p className='mt-3 prose-xl mx-8 dark:text-gray-500'>
                      We work with selective brokers across the USA to bring
                      your clients best-in-class insurance solutions and provide
                      extensive resources to help you expand your business.
                    </p>
                  </div>

                  <div className='mx-4'>
                    <Image
                      className='mx-auto my-2 rounded'
                      src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                      alt='Insurance Broker'
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center mt- md:flex-row md:justify-around p-4'>
                  <Link href='/brokerage'>
                    <a className='flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0'>
                      <button
                        type='button'
                        className='inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'>
                        <BookOpenIcon
                          height={40}
                          className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                        />
                        <span className='flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700'>
                          Programs
                        </span>
                      </button>
                    </a>
                  </Link>
                  <Link href='/resources/broker-resources'>
                    <a
                      className='flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0'
                      aria-label='Useful Resources for Brokers'>
                      <button
                        type='button'
                        className='inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'>
                        <LinkIcon
                          height={40}
                          className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                        />
                        <span className='flex flex-start items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-600'>
                          Resources
                        </span>
                      </button>
                    </a>
                  </Link>

                  <Link href='/contact-us'>
                    <a className='flex flex-start items-center rounded group hover:shadow-2xl mb-3 md:mb-0'>
                      <button
                        type='button'
                        className='inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'>
                        <MailIcon
                          height={40}
                          className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                        />
                        <span className='flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700'>
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
        <section className='py-12 bg-gray-50 dark:bg-gray-700 overflow-hidden md:py-20 lg:py-24'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative'>
              <h2 className='max-w-3xl mx-auto text-center text-3xl leading-9 font-bold text-gray-900 dark:text-gray-300'>
                WealthGuard Testimonial
              </h2>
              <blockquote className='mt-6 '>
                <div className='max-w-3xl mx-auto text-center text-lg md:text-2xl leading-9 font-medium text-gray-900 dark:text-gray-400'>
                  <p className=''>
                    &ldquo;WealthGuard&apos;s program manager and team were a
                    pleasure to work with. They were very knowledgeable,
                    sincere, had great communication, and provided a level of
                    service that is rare from an underwriter. In addition to
                    seeking out the best coverages for my clients, he also
                    explained the many risk control services that WealthGuard
                    offers. I look forward to a long and fruitful relationship
                    with both WealthGuard as well as the whole team. I would
                    recommend their services for any one in need of broker
                    services.&rdquo;
                  </p>
                </div>
                <footer className='mt-8'>
                  <div className='md:flex md:items-center md:justify-center'>
                    <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                      <div className='text-base font-medium text-gray-900 dark:text-gray-400'>
                        Bill H
                      </div>

                      <svg
                        className='hidden md:block mx-1 h-5 w-5 text-red-700'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M11 0h3L9 20H6l5-20z' />
                      </svg>

                      <div className='text-base font-medium text-gray-500 dark:text-gray-400'>
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
        <div className='bg-white dark:bg-gray-800'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl font-extrabold text-gray-900 dark:text-gray-300'>
                Why Work With WealthGuard?
              </h2>
              <p className='mt-4 text-2xl text-gray-500 dark:text-gray-400'>
                Year over year we have consistently achieved{' '}
                <strong>200% growth</strong>,{' '}
                <span className='font-bold text-red-600'>
                  <a href='tel:832-930-3827' target='_blank' rel='noreferrer'>
                    call us
                  </a>
                </span>{' '}
                and learn why!
              </p>
            </div>

            <div className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8'>
              {BENEFITS.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.name}
                    className='shadow-xl hover:shadow-2xl rounded-xl m-2 p-4 dark:bg-gray-700 border dark:border-gray-500'>
                    <div>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 dark:bg-red-600 opacity-70 text-white mx-auto'>
                        {feature.icon ? (
                          <Icon className='h-6 w-6' aria-hidden='true' />
                        ) : null}
                      </div>
                      <p className='mt-5 text-xl leading-6 font-medium text-red-700 dark:text-gray-300 text-center '>
                        {feature.name}
                      </p>
                    </div>
                    <div className='mt-3 prose-lg text-gray-500 dark:text-gray-400 md:text-center'>
                      {feature.description}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

function HomePopup({ isOpen, closePopup }) {
  const firstNameEl = useRef(null)
  const lastNameEl = useRef(null)
  const emailEl = useRef(null)

  function requestPdf(e) {
    e.preventDefault()

    const { value: first_name = '' } = e.target.first_name
    const { value: last_name = '' } = e.target.last_name
    const { value: email = '' } = e.target.email

    if (!first_name || !last_name || !email) {
      return toast.error('Form cannot be empty!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    alert('Form submission has not be setup, yet.')

    // reset form values
    firstNameEl.current.value = ''
    lastNameEl.current.value = ''
    emailEl.current.value = ''
  }

  return (
    <Popup
      isOpen={isOpen}
      closePopup={closePopup}
      title='PDF in your Inbox'
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`}>
      <form
        onSubmit={requestPdf}
        className='grid grid-cols-1 gap-y-4 sm:grid-cols-2'>
        <div className='px-4'>
          <label
            htmlFor='first_name'
            className='block text-sm font-medium text-gray-700 dark:text-gray-800'>
            First name
          </label>
          <div className='mt-1'>
            <input
              ref={firstNameEl}
              type='text'
              name='first_name'
              id='first_name'
              autoComplete='given-name'
              className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md dark:text-gray-900'
            />
          </div>
        </div>
        <div className='px-4'>
          <label
            htmlFor='last_name'
            className='block text-sm font-medium text-gray-700 dark:text-gray-800'>
            Last name
          </label>
          <div className='mt-1'>
            <input
              ref={lastNameEl}
              type='text'
              name='last_name'
              id='last_name'
              autoComplete='family-name'
              className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md dark:text-gray-900'
            />
          </div>
        </div>
        <div className='px-4 sm:col-span-2'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 dark:text-gray-800'>
            Email
          </label>
          <div className='mt-1'>
            <input
              ref={emailEl}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md dark:text-gray-900'
            />
          </div>
        </div>
        <div className='flex justify-end items-center mt-2 p-4 border-t border-gray-200 dark:border-gray-300 sm:col-span-2'>
          <button
            type='submit'
            className='inline-flex justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            Request PDF
          </button>
        </div>
      </form>
    </Popup>
  )
}

function useTriggerPopup() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  })

  const { isIntersecting } = entry || {}

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (
      !isOpen & isIntersecting &&
      localStorage.getItem('homePopupShown') !== 'true'
    ) {
      setOpen(true)
    }
  }, [isIntersecting, isOpen])

  const closePopup = () => {
    setOpen(false)
    localStorage.setItem('homePopupShown', 'true')
  }

  return { ref, isOpen, setOpen, closePopup }
}
