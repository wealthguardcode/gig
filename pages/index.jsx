import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GlobeAltIcon,
  BoltIcon,
  ScaleIcon,
  CheckIcon,
  EnvelopeIcon,
  LinkIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import Popup from '../components/Popup'
import Layout from '../components/Layout'
import { brokerageSolutions } from '../data/brokerage'
import { programSolutions } from '../data/programs'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { classNames } from '../utils/helpers'

const solutions = [
  ...programSolutions.map((p) => ({
    ...p,
    href: `/programs/${p.slug}`,
  })),
  ...brokerageSolutions.map((b) => ({
    ...b,
    href: `/brokerage/${b.slug}`,
  })),
]

const benefits = [
  {
    icon: GlobeAltIcon,
    name: `Experience`,
    description: `Since 2016 we have been providing insurance solutions with expertise, diversity of products, and underwriting integrity!`,
  },
  {
    icon: ScaleIcon,
    name: `Innovation`,
    description: `WealthGuard's executive leadership has unprecedented access to innovative commercial insurance products and solutions.`,
  },
  {
    icon: BoltIcon,
    name: `Relationship Driven`,
    description: `We have years of insurance experience helping carriers and brokers provide solutions to their clients. You will build a one on one relationship at WealthGuard`,
  },
]

const popupContent = {
  title: `Don't miss this, MVP!`,
  image: {
    src: `/images/wig-7-step-checklist-thumb.jpg`,
    alt: `7-Step Commercial Insurance Strategy Checklist`,
    width: 153,
    height: 198,
  },
  description: [
    {
      fontSize: `lg`,
      text: `Get our "7-Step Commercial Insurance Strategy Checklist" (for agents, brokers & businesses)`,
    },
    {
      fontSize: `md`,
      text: `plus WealthGuard news delivered to your inbox`,
    },
  ],
  finePrint: `Privacy Policy: We don't share your info, and we don't like spam. Unsubscribe anytime.`,
  submitBtn: `Touchdown`,
}

export default function HomePage() {
  const {
    ref: triggerPopupRef,
    isOpen,
    setOpen,
    closePopup,
  } = useTriggerPopup()

  return (
    <>
      <HomePopup isOpen={isOpen} closePopup={closePopup} />
      <Layout>
        <div className='relative bg-white dark:bg-gray-800 overflow-hidden'>
          <div className='relative'>
            <div className='flex items-center h-[calc(100vh_-_64px)] w-full mx-auto px-4'>
              {/* BG Image */}
              <div className='absolute inset-0 flex justify-center items-center h-[calc(100vh_-_64px)] custom-img bg-fixed bg-cover lg:bg-center'>
                <div className='absolute inset-0 bg-gray-400 mix-blend-multiply' />
              </div>

              <div className='relative w-full text-center'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Commercial Insurance</span>{' '}
                  <span className='block text-red-700 font-extrabold text-outline-white'>
                    Programs &{' '}
                    <span className='block md:inline mt-1 md:mt-0'>
                      Brokerage
                    </span>
                  </span>
                </h1>
                <p className='my-3 pb-4 font-bold text-xl text-white text-outline-black lg:text-3xl tracking-tight'>
                  <span className='block xl:inline'>
                    Specialized insurance solutions with industry expertise,
                    <br />
                  </span>
                  <span className='mt-2 block xl:inline'>
                    product diversity, and underwriting integrity!
                  </span>
                </p>
                <div className='border-t-4 w-1/5 mx-auto py-2 border-red-700' />
                <div className='flex flex-col gap-4 items-center mt-8 mb-4 md:flex-row md:justify-center'>
                  <div className='rounded-md shadow'>
                    <Link
                      href='/programs'
                      className='flex items-center justify-center w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:w-full md:py-4 md:px-10 md:text-lg'>
                      Programs
                    </Link>
                  </div>
                  <div className='rounded-md shadow'>
                    <Link
                      href='/brokerage'
                      className='flex items-center justify-center w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-600 md:w-full md:py-4 md:px-10 md:text-lg'>
                      Brokerage
                    </Link>
                  </div>
                  <div className='rounded-md shadow'>
                    <Link
                      href='/contact-us'
                      className='flex items-center justify-center w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 md:w-full md:py-4 md:px-10 md:text-lg'>
                      Contact Us
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

          <p className='block max-w-md mb-8 mx-auto prose-xl text-center text-gray-700 dark:text-gray-400 md:mt-5 md:max-w-3xl'>
            Whether you&apos;re a business owner or insurance agent/broker,
            you&apos;ll find industry-specific resources and specialty insurance
            coverages to meet the unique needs of the industries we serve.
          </p>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='lg:col-span-2'>
              <div className='max-w-5xl mx-auto sm:grid sm:grid-cols-2'>
                {solutions.map((solution) => (
                  <div key={solution.name}>
                    <Link
                      href={solution.href}
                      className='group flex flex-1 gap-8 items-center p-4'>
                      <>
                        <CheckIcon
                          aria-hidden='true'
                          className='flex-none w-8 h-8 text-emerald-500'
                        />
                        <span className='text-xl leading-normal font-medium text-gray-900 dark:text-gray-300 group-hover:text-red-700 dark:group-hover:text-red-700'>
                          {solution.name}
                        </span>
                      </>
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
            <div className='lg:text-center'>
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
              <div className='flex justify-center mt-4'>
                <Image
                  src='/images/Coverholder at Lloyds_black_rgb.jpg'
                  alt='Coverholder at Lloyds logo black'
                  width={414}
                  height={162}
                  className='inline-block'
                />
              </div>
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
                      src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                      alt='Insurance Broker'
                      width={600}
                      height={400}
                      className='mx-auto my-2 rounded'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center mt- md:flex-row md:justify-around p-4'>
                  <Link
                    href='/brokerage'
                    aria-label='Brokerage Solutions'
                    className='group inline-flex flex-start items-center mb-3 py-3 px-6 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 rounded-md text-base font-medium text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 md:mb-0'>
                    <>
                      <BookOpenIcon
                        height={40}
                        className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                      />
                      <span className='flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700'>
                        Solutions
                      </span>
                    </>
                  </Link>
                  <Link
                    href='/resources/broker-resources'
                    aria-label='Useful Resources for Brokers'
                    className='group inline-flex flex-start items-center mb-3 py-3 px-6 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 rounded-md text-base font-medium text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 md:mb-0'>
                    <>
                      <LinkIcon
                        height={40}
                        className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                      />
                      <span className='flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700'>
                        Resources
                      </span>
                    </>
                  </Link>
                  <Link
                    href='/contact-us'
                    aria-label='Useful Resources for Brokers'
                    className='group inline-flex flex-start items-center mb-3 py-3 px-6 border-2 border-gray-300 hover:border-gray-400 dark:border-red-700 rounded-md text-base font-medium text-gray-700 bg-white dark:bg-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 md:mb-0'>
                    <>
                      <EnvelopeIcon
                        height={40}
                        className='text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-500'
                      />
                      <span className='flex items-center text-xl font-bold ml-1 group-hover:text-red-700 dark:group-hover:text-red-700'>
                        Contact Us
                      </span>
                    </>
                  </Link>
                </div>
              </div>
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
                  <p>
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
              {benefits.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.name}
                    className='shadow-xl hover:shadow-2xl rounded-xl m-2 p-4 dark:bg-gray-700 border dark:border-gray-500'>
                    <div>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 dark:bg-red-600 opacity-70 text-white mx-auto'>
                        {feature.icon ? (
                          <Icon aria-hidden='true' className='w-6 h-6' />
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
  const emailEl = useRef(null)

  function requestPdf(e) {
    e.preventDefault()

    const { value: email = '' } = e.target.email

    if (!email) {
      return toast.error('Please enter your email address!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    emailjs
      .sendForm(
        'service_xq1c0nw',
        'template_f0mcoiq',
        e.target,
        'RfvnwrDrd9OYABRy3'
      )
      .then(
        (result) => {
          toast('🎉 Success, please check your inbox!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          console.log(result.text)

          // reset form values
          emailEl.current.value = ''

          closePopup()
        },
        (error) => {
          alert(error.text)
        }
      )
  }

  return (
    <Popup
      isOpen={isOpen}
      closePopup={closePopup}
      title={popupContent.title}
      description={
        Array.isArray(popupContent.description) &&
        popupContent.description.length > 0 && (
          <div className='after:content-[""] after:table after:clear-both'>
            {!!popupContent.image?.src && (
              <Image
                src={popupContent.image.src}
                alt={popupContent.image.alt}
                width={popupContent.image.width}
                height={popupContent.image.height}
                className='float-left w-24 sm:w-28 mr-3 border-2 border-red-600/50 rounded'
              />
            )}
            <span className='clear-left'>
              {popupContent.description.map(({ fontSize, text }, index) => (
                <p
                  key={index}
                  className={classNames(
                    'mb-3 last:mb-0',
                    ['xs', 'sm', 'lg', 'xl'].includes(fontSize)
                      ? `text-${fontSize}`
                      : fontSize === 'md'
                      ? 'text-base'
                      : ''
                  )}>
                  {text}
                </p>
              ))}
            </span>
          </div>
        )
      }>
      <form
        id='template_f0mcoiq'
        onSubmit={requestPdf}
        className='flex flex-col gap-y-4 mx-4 p-4 border border-gray-100 dark:border-gray-300 rounded-lg'>
        <div>
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
        <button
          type='submit'
          className='self-center inline-flex justify-center py-3 px-5 border border-transparent text-base font-medium uppercase rounded-md text-white bg-red-600 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
          {popupContent.submitBtn}
        </button>
      </form>
      <div className='max-w-xs mx-auto p-4 text-xs text-center text-gray-500 dark:text-gray-600'>
        <p>{popupContent.finePrint}</p>
      </div>
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
    if (isOpen || !isIntersecting) return

    let homePopupShown = localStorage.getItem('homePopupShown')
    if (homePopupShown) {
      homePopupShown = JSON.parse(homePopupShown)
    }

    if (
      !homePopupShown?.expires ||
      new Date(homePopupShown.expires) < new Date()
    ) {
      setOpen(true)
    }
  }, [isIntersecting, isOpen])

  const closePopup = () => {
    setOpen(false)

    const now = new Date()
    localStorage.setItem(
      'homePopupShown',
      JSON.stringify({
        expires: now.setDate(now.getDate() + 7),
      })
    )
  }

  return { ref, isOpen, setOpen, closePopup }
}
