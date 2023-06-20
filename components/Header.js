import { brokerage } from '../data/brokerage'
import { programs } from '../data/programs'
import { classNames } from '../utils/helpers'

import { Fragment, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

const TIMEOUT_DURATION = 200

const NAVIGATION = {
  categories: [
    {
      name: 'Programs',
      links: [
        {
          name: 'View All Programs',
          href: '/programs',
        },
        ...programs.map(({ slug, name }) => ({
          name,
          href: `/programs/${slug}`,
        })),
      ],
    },
    {
      name: 'Brokerage',
      links: [
        {
          name: 'View All Brokerage Solutions',
          href: '/brokerage',
        },
        ...brokerage.map(({ slug, name }) => ({
          name,
          href: `/brokerage/${slug}`,
        })),
      ],
    },
    {
      name: 'Resources',
      links: [
        {
          name: 'Blog',
          href: '/blog',
        },
        {
          name: 'Broker Resources',
          href: '/resources/broker-resources',
        },
      ],
    },
    {
      name: 'About Us',
      links: [
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
  const { resolvedTheme: theme, setTheme } = useTheme()
  const router = useRouter()

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
      <div>
        {/* Mobile menu */}
        <Transition.Root as={Fragment} show={isMobileMenuOpen}>
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
                  <div className='relative -mb-px border-b border-gray-200 dark:border-gray-500 overflow-x-auto hide-scrollbar hide-scrollbar-hover'>
                    <Tab.List
                      onClick={(e) => {
                        e.target.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className='flex space-x-2 md:space-x-8'
                    >
                      {NAVIGATION.categories.map((category) => (
                        <Tab as={Fragment} key={category.name}>
                          {({ selected }) => (
                            <div className='flex-1 block first:border-l-16 md:first:border-l-32 first:border-transparent last:border-r-16 md:last:border-r-32 last:border-transparent'>
                              <span
                                className={classNames(
                                  selected
                                    ? 'text-red-700 border-red-700'
                                    : 'text-gray-900 dark:text-gray-300 border-transparent hover:text-red-700 dark:hover:text-red-700',
                                  'block whitespace-nowrap py-4 px-2 border-b-2 text-md font-medium text-center'
                                )}
                              >
                                {category.name}
                              </span>
                            </div>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {NAVIGATION.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='px-4 py-6 space-y-12'
                      >
                        <div className='grid grid-cols-1 gap-x-4 gap-y-4'>
                          {category.links.map((link) => (
                            <div
                              key={link.name}
                              className='group relative mx-auto text-center'
                            >
                              <Link href={link.href} passHref>
                                <a
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={
                                    router.asPath === link.href
                                      ? 'mt-6 block font-medium text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-700 px-2 py-0.5'
                                      : 'mt-6 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'
                                  }
                                >
                                  <span
                                    className='absolute z-10 inset-0'
                                    aria-hidden='true'
                                  />
                                  {link.name}
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Single Nav Links */}
                <div className='border-t divide-y border-gray-200 dark:border-gray-500 py-6 px-4 space-y-6 mx-auto'>
                  {NAVIGATION.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <Link href={page.href} passHref>
                        <a
                          onClick={() => setMobileMenuOpen(false)}
                          className={
                            router.asPath === page.href
                              ? '-m-2 px-2 py=0.5 block font-medium text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-700'
                              : '-m-2 p-2 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'
                          }
                          aria-label={page.aria}
                        >
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <ToggleThemeBtn theme={theme} setTheme={setTheme} />
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Large Nav */}
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Secondary Navigation */}
            <div className='bg-white dark:bg-gray-800 shadow-xl'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='h-16 flex items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                    <Link href='/' passHref>
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
                    <Popover.Group className='px-4 bottom-0 inset-x-0'>
                      <div className='h-full flex justify-center'>
                        {/* Flyout hover menus */}
                        {NAVIGATION.categories.map(({ name, links }) => {
                          return (
                            <PopoverMenu
                              key={name}
                              router={router}
                              name={name}
                              links={links}
                            />
                          )
                        })}

                        {/* Single Nav Links */}
                        {NAVIGATION.pages.map((page) => (
                          <Link key={page.name} href={page.href} passHref>
                            <a
                              className={classNames(
                                router.asPath === page.href
                                  ? 'text-red-700 dark:text-red-700'
                                  : 'text-gray-700 hover:text-red-700 dark:text-gray-50 dark:hover:text-red-700',
                                'flex items-center font-medium px-4'
                              )}
                              aria-label={page.aria}
                            >
                              {page.name}
                            </a>
                          </Link>
                        ))}
                        <ToggleThemeBtn theme={theme} setTheme={setTheme} />
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
                  <Link href='/' passHref>
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

function ToggleThemeBtn({ theme, setTheme }) {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    setShowBtn(true)
  }, [])

  if (!showBtn) return null

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='md:order-3 mx-auto py-2 px-4'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <MoonIcon className='h-6 w-6 text-gray-500 hover:text-gray-400' />
      ) : (
        <SunIcon className='h-6 w-6 text-gray-500 hover:text-gray-600' />
      )}
    </button>
  )
}

function PopoverMenu({ router, name, links }) {
  const buttonEl = useRef(null)
  const panelEl = useRef(null)

  const [openPanel, setOpenPanel] = useState(false)
  const [mouseOverButton, setMouseOverButton] = useState(false)
  const [mouseOverPanel, setMouseOverPanel] = useState(false)

  let timeoutButton
  let timeoutPanel

  const onMouseEnterButton = () => {
    clearTimeout(timeoutButton)
    setOpenPanel(true)
    setMouseOverButton(true)
  }
  const onMouseLeaveButton = () => {
    timeoutButton = setTimeout(
      () => setMouseOverButton(false),
      TIMEOUT_DURATION
    )
  }

  const onMouseEnterPanel = () => {
    clearTimeout(timeoutPanel)
    setMouseOverPanel(true)
  }
  const onMouseLeavePanel = () => {
    timeoutPanel = setTimeout(() => setMouseOverPanel(false), TIMEOUT_DURATION)
  }

  const show = openPanel && (mouseOverButton || mouseOverPanel)

  const boundingBox = buttonEl.current?.getBoundingClientRect()

  return (
    <Popover key={name} className='flex'>
      {({ open, close }) => (
        <>
          <div ref={buttonEl} className='relative px-4'>
            <Popover.Button
              onClick={() => setOpenPanel(!openPanel)}
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              onKeyPress={null}
              className={classNames(
                open
                  ? 'text-red-700 outline-0'
                  : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700',
                'relative flex items-center justify-center my-5 transition-colors ease-out duration-200 font-medium outline-none'
              )}
            >
              {name}
              <span
                className={classNames(
                  show ? 'bg-red-700' : '',
                  'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                )}
                aria-hidden='true'
              />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            show={show}
            enter='transition ease-out duration-200 delay-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Panel
              ref={panelEl}
              static
              onMouseEnter={onMouseEnterPanel}
              onMouseLeave={onMouseLeavePanel}
              className='absolute z-20 top-full inset-x-0 text-md text-gray-500 dark:text-white'
            >
              <div className='relative border-t border-solid border-gray-200 dark:border-gray-600'>
                <div
                  className='absolute px-8 border-r border-b border-l border-solid border-gray-200 dark:border-gray-600 rounded-b-md bg-white dark:bg-gray-800 shadow-xl'
                  style={{
                    left: boundingBox?.x ? boundingBox.x - 16 : 0,
                    width: '100%',
                    maxWidth: 300,
                  }}
                >
                  <div className='grid grid-cols-1 py-8'>
                    {links.map((item) => (
                      <div key={item.name} className='group relative'>
                        <Link href={item.href} passHref>
                          <a
                            onClick={onMouseLeavePanel}
                            className={
                              router.asPath === item.href
                                ? 'mt-4 font-base block font-medium text-red-700 bg-gray-100 dark:bg-gray-700 dark:text-red-700'
                                : 'mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'
                            }
                          >
                            <span
                              className='absolute z-10 inset-0 group-hover:block'
                              aria-hidden='true'
                            />
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
