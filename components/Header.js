import { classNames } from '../utils/helpers'

import { Fragment, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

const navigation = {
  categories: [
    {
      name: 'Programs',
      programs: [
        {
          name: 'View All Programs',
          href: '/programs',
        },
        {
          name: 'WestWall Marina Package',
          href: '/programs/westwall-marina-package',
        },
        {
          name: 'Cargo & Logistics',
          href: '/programs/cargo-and-logistics',
        },
        {
          name: 'Active Assailant',
          href: '/programs/active-assailant',
        },
        {
          name: 'Terrorism & Sabotage',
          href: '/programs/terrorism-and-sabotage',
        },
        {
          name: 'Violent & Malicious Acts',
          href: '/programs/violent-malicious-acts',
        },
      ],
    },
    {
      name: 'Brokerage',
      programs: [
        {
          name: 'View All Brokerage Solutions',
          href: '/brokerage',
        },
        {
          name: 'Auto Liability Excess Only',
          href: '/brokerage/Auto-Liability-Excess-Only',
        },
        {
          name: 'Contractors General Liability',
          href: '/brokerage/Contractors-General-Liability',
        },
        {
          name: 'Manufacturers Commercial General Liability',
          href: '/brokerage/Manufacturers-Commercial-General-Liability',
        },
        {
          name: 'Coastal Property',
          href: '/brokerage/coastal-property',
        },
        {
          name: 'Hard to Place Risk',
          href: '/brokerage/hard-to-place',
        },
        {
          name: 'Petroleum and Gas Distributors',
          href: '/brokerage/petroleum-and-gas-distributors',
        },
        {
          name: 'Yacht Program',
          href: '/brokerage/yacht-program',
        },
      ],
    },
    {
      name: 'Resources',
      programs: [
        {
          name: 'Broker Resources',
          href: '/resources/broker-resources',
        },
      ],
    },
    {
      name: 'About Us',
      programs: [
        {
          name: 'About Us Overview',
          href: '/about-us/about-us',
        },
        {
          name: 'Leadership',
          href: '/about-us/leadership',
        },
      ],
    },
  ],
  pages: [{ name: 'Contact Us', href: '/contact-us' }],
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)
  const buttonRef = useRef(null)
  const buttonRef2 = useRef(null)
  const buttonRef3 = useRef(null)
  const buttonRef4 = useRef(null)
  const [openState, setOpenState] = useState(false)
  const [openState2, setOpenState2] = useState(false)
  const [openState3, setOpenState3] = useState(false)
  const [openState4, setOpenState4] = useState(false)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  let timeout // NodeJS.Timeout
  const timeoutDuration = 400

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
  }
  const toggleMenu2 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState2((openState2) => !openState2)
    // toggle the menu by clicking on buttonRef
    buttonRef2?.current?.click() // eslint-disable-line
  }
  const toggleMenu3 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState3((openState3) => !openState3)
    // toggle the menu by clicking on buttonRef
    buttonRef3?.current?.click() // eslint-disable-line
  }
  const toggleMenu4 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState3((openState3) => !openState3)
    // toggle the menu by clicking on buttonRef
    buttonRef4?.current?.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover2 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState2 && action === 'onMouseEnter') ||
      (open && openState2 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu2(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover3 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState3 && action === 'onMouseEnter') ||
      (open && openState3 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu3(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover4 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState4 && action === 'onMouseEnter') ||
      (open && openState4 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu4(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick2 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick3 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick4 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative w-full bg-white dark:bg-gray-800 shadow-xl pb-12 flex flex-col overflow-y-auto'>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center dark:bg-gray-800 justify-center text-gray-400 dark:text-gray-400'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200 dark:border-gray-500'>
                    <Tab.List className='-mb-px flex px-4 space-x-2 md:space-x-8'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-red-700 border-red-700'
                                : 'text-gray-900 dark:text-gray-300 border-transparent hover:text-red-700 dark:hover:text-red-700',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-md font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='px-4 py-6 space-y-12'
                      >
                        <div className='grid grid-cols-1 gap-x-4 gap-y-4'>
                          {category.programs.map((item) => (
                            <div
                              key={item.name}
                              className='group relative mx-auto'
                            >
                              <a
                                href={item.href}
                                className={
                                  router.asPath === item.href
                                    ? 'mt-6 block font-medium text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-700 px-2 py-0.5'
                                    : 'mt-6 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'
                                }
                                onClick={newPathName}
                                pathname={pathName}
                              >
                                <span
                                  className='absolute z-10 inset-0'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Single Nav Links */}
                <div className='border-t divide-y border-gray-200 dark:border-gray-500 py-6 px-4 space-y-6 mx-auto'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className={
                          router.asPath === page.href
                            ? '-m-2 px-2 py=0.5 block font-medium text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-700'
                            : '-m-2 p-2 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'
                        }
                        aria-label={page.aria}
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='md:order-3 mx-auto'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-gray-500 hover:text-gray-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-gray-500 hover:text-gray-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Large Nav */}
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Secondary navigation */}
            <div className='bg-white dark:bg-gray-800 shadow-xl'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='h-16 flex items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                    <Link href='/'>
                      <a>
                        <span className='sr-only'>WealthGuard</span>
                        {theme === 'dark' ? (
                          <Image
                            height={50}
                            width={160}
                            src='/images/wig-logo-v3-dark.svg'
                            alt='WealthGuard Logo'
                            className='h-12 w-auto'
                          />
                        ) : (
                          <Image
                            height={50}
                            width={160}
                            src='/images/wig-logo-v3.svg'
                            alt='WealthGuard Logo'
                            className='h-12 w-auto'
                          />
                        )}
                      </a>
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Flyout hover menus */}
                    {/* Programs Flyout hover menu */}
                    <Popover.Group className='px-4 bottom-0 inset-x-0'>
                      <div className='h-full flex justify-center space-x-8'>
                        <Popover
                          key={navigation.categories[0].name}
                          className='flex'
                        >
                          {({ open }) => (
                            <div
                              onMouseEnter={() => onHover(open, 'onMouseEnter')}
                              onMouseLeave={() => onHover(open, 'onMouseLeave')}
                            >
                              <div className='relative flex'>
                                <Popover.Button
                                  ref={buttonRef}
                                  className={classNames(
                                    open
                                      ? 'text-red-700 my-5 outline-0'
                                      : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700 my-5',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 font-medium outline-none'
                                  )}
                                  onClick={() => handleClick(open)}
                                >
                                  {navigation.categories[0].name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-red-700' : '',
                                      'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden='true'
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute z-20 top-full inset-x-0 bg-white dark:bg-gray-800 text-md text-gray-500 dark:text-white'>
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow'
                                    aria-hidden='true'
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                    aria-hidden='true'
                                  >
                                    <div
                                      className={classNames(
                                        open
                                          ? 'bg-gray-200 dark:bg-gray-600'
                                          : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className='relative'>
                                    <div className='max-w-7xl mx-auto px-8'>
                                      <div className='grid grid-cols-1 py-8'>
                                        {navigation.categories[0].programs.map(
                                          (item) => (
                                            <div
                                              key={item.name}
                                              className='group relative'
                                            >
                                              <a
                                                href={item.href}
                                                className={
                                                  router.asPath === item.href
                                                    ? 'mt-4 font-base block font-medium text-red-700 bg-gray-100 dark:bg-gray-700 dark:text-red-700'
                                                    : 'mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'
                                                }
                                                onClick={newPathName}
                                                pathname={pathName}
                                              >
                                                <span
                                                  className='absolute z-10 inset-0 group-hover:block'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </a>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </div>
                          )}
                        </Popover>

                        {/* Brokerage Flyout hover menu */}
                        <Popover
                          key={navigation.categories[1].name}
                          className='flex'
                        >
                          {({ open }) => (
                            <div
                              onMouseEnter={() =>
                                onHover4(open, 'onMouseEnter')
                              }
                              onMouseLeave={() =>
                                onHover4(open, 'onMouseLeave')
                              }
                            >
                              <div className='relative flex'>
                                <Popover.Button
                                  ref={buttonRef4}
                                  className={classNames(
                                    open
                                      ? 'text-red-700 my-5 outline-0'
                                      : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700 my-5',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 font-medium outline-none'
                                  )}
                                  onClick={() => handleClick4(open)}
                                >
                                  {navigation.categories[1].name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-red-700' : '',
                                      'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden='true'
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute z-20 top-full inset-x-0 bg-white dark:bg-gray-800 text-md text-gray-500 dark:text-white'>
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow'
                                    aria-hidden='true'
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                    aria-hidden='true'
                                  >
                                    <div
                                      className={classNames(
                                        open
                                          ? 'bg-gray-200 dark:bg-gray-600'
                                          : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className='relative'>
                                    <div className='max-w-7xl mx-auto px-8'>
                                      <div className='grid grid-cols-1 py-8'>
                                        {navigation.categories[1].programs.map(
                                          (item) => (
                                            <div
                                              key={item.name}
                                              className='group relative'
                                            >
                                              <a
                                                href={item.href}
                                                className={
                                                  router.asPath === item.href
                                                    ? 'mt-4 font-base block font-medium text-red-700 bg-gray-100 dark:bg-gray-700 dark:text-red-700'
                                                    : 'mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'
                                                }
                                                onClick={newPathName}
                                                pathname={pathName}
                                              >
                                                <span
                                                  className='absolute z-10 inset-0 group-hover:block'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </a>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </div>
                          )}
                        </Popover>

                        {/* Resources Flyout Hover Menu */}
                        <Popover
                          key={navigation.categories[2].name}
                          className='flex'
                          id='PopoverPanel2'
                        >
                          {({ open }) => (
                            <div
                              onMouseEnter={() =>
                                onHover2(open, 'onMouseEnter')
                              }
                              onMouseLeave={() =>
                                onHover2(open, 'onMouseLeave')
                              }
                            >
                              <div className='relative flex'>
                                <Popover.Button
                                  ref={buttonRef2}
                                  className={classNames(
                                    open
                                      ? 'text-red-700 my-5'
                                      : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700 my-5',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 font-medium outline-none'
                                  )}
                                  onClick={() => handleClick2(open)}
                                >
                                  {navigation.categories[2].name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-red-700' : '',
                                      'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden='true'
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute z-20 top-full inset-x-0 bg-white dark:bg-gray-800 text-md text-gray-500 dark:text-white'>
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow'
                                    aria-hidden='true'
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                    aria-hidden='true'
                                  >
                                    <div
                                      className={classNames(
                                        open
                                          ? 'bg-gray-200 dark:bg-gray-600'
                                          : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className='relative'>
                                    <div className='max-w-7xl mx-auto px-8'>
                                      <div className='grid grid-cols-1 py-8'>
                                        <Fragment key={'PopoverPanel2<>'}>
                                          {navigation.categories[2].programs.map(
                                            (item) => (
                                              <div
                                                key={item.name}
                                                className='group relative'
                                              >
                                                <a
                                                  href={item.href}
                                                  className={
                                                    router.asPath === item.href
                                                      ? 'mt-4 font-base block font-medium text-red-700 bg-gray-100 dark:bg-gray-700 dark:text-red-700'
                                                      : 'mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'
                                                  }
                                                  onClick={newPathName}
                                                  pathname={pathName}
                                                >
                                                  <span
                                                    className='absolute z-10 inset-0 group-hover:block'
                                                    aria-hidden='true'
                                                  />
                                                  {item.name}
                                                </a>
                                              </div>
                                            )
                                          )}
                                        </Fragment>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </div>
                          )}
                        </Popover>
                        {/* About Us Flyout Hover Menu */}
                        <Popover
                          key={navigation.categories[3].name}
                          className='flex'
                          id='PopoverPanel3'
                        >
                          {({ open }) => (
                            <div
                              onMouseEnter={() =>
                                onHover3(open, 'onMouseEnter')
                              }
                              onMouseLeave={() =>
                                onHover3(open, 'onMouseLeave')
                              }
                            >
                              <div className='relative flex'>
                                <Popover.Button
                                  ref={buttonRef3}
                                  className={classNames(
                                    open
                                      ? 'text-red-700 my-5'
                                      : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700 my-5',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 font-medium outline-none'
                                  )}
                                  onClick={() => handleClick3(open)}
                                >
                                  {navigation.categories[3].name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-red-700' : '',
                                      'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden='true'
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute z-20 top-full inset-x-0 bg-white dark:bg-gray-800 text-md text-gray-500 dark:text-white'>
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow'
                                    aria-hidden='true'
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                    aria-hidden='true'
                                  >
                                    <div
                                      className={classNames(
                                        open
                                          ? 'bg-gray-200 dark:bg-gray-600'
                                          : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className='relative'>
                                    <div className='max-w-7xl mx-auto px-8'>
                                      <div className='grid grid-cols-1 py-8'>
                                        <Fragment key={'PopoverPanel3<>'}>
                                          {navigation.categories[3].programs.map(
                                            (item) => (
                                              <div
                                                key={item.name}
                                                className='group relative'
                                              >
                                                <a
                                                  href={item.href}
                                                  className={
                                                    router.asPath === item.href
                                                      ? 'mt-4 font-base block font-medium text-red-700 bg-gray-100 dark:bg-gray-700 dark:text-red-700'
                                                      : 'mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'
                                                  }
                                                  onClick={newPathName}
                                                  pathname={pathName}
                                                >
                                                  <span
                                                    className='absolute z-10 inset-0 group-hover:block'
                                                    aria-hidden='true'
                                                  />
                                                  {item.name}
                                                </a>
                                              </div>
                                            )
                                          )}
                                        </Fragment>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </div>
                          )}
                        </Popover>

                        {/* Single Nav Links */}
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className={
                              router.asPath === page.href
                                ? 'flex items-center font-medium text-red-700 dark:text-red-700'
                                : 'flex items-center font-medium text-gray-700 hover:text-red-700 dark:text-gray-50 dark:hover:text-red-700'
                            }
                            onClick={newPathName}
                            pathname={pathName}
                            aria-label={page.aria}
                          >
                            {page.name}
                          </a>
                        ))}
                        <button
                          aria-label='Toggle Dark Mode'
                          type='button'
                          className='md:order-3 mx-auto'
                          onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                          }
                        >
                          {theme === 'dark' ? (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 text-gray-500 hover:text-gray-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 text-gray-500 hover:text-gray-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu (lg-) */}
                  <div className='flex-1 flex items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 bg-white dark:bg-gray-700 p-2 rounded-md text-gray-400'
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href='/'>
                    <a className='lg:hidden'>
                      <span className='sr-only'>WealthGuard</span>
                      {theme === 'dark' ? (
                        <Image
                          height={50}
                          width={160}
                          src='/images/wig-logo-v3-dark.svg'
                          alt='WealthGuard Logo'
                          className='h-12 w-auto'
                        />
                      ) : (
                        <Image
                          height={50}
                          width={160}
                          src='/images/wig-logo-v3.svg'
                          alt='WealthGuard Logo'
                          className='h-12 w-auto'
                        />
                      )}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}
