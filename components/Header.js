import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

const navigation = {
  categories: [
    {
      name: 'For Brokers',
      programs: [
        {
          name: 'View All Programs',
          href: '/programs',
        },
        {
          name: 'West Wall Marina Program',
          href: '/programs/west-wall-marina',
        },
        {
          name: 'Assistant Living Facility',
          href: '/programs/assistant-living-facility',
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
      ],
    },
    // {
    //   name: 'For Business Owners',
    //   programs: [
    //     {
    //       name: 'For Business Owners Overview',
    //       href: '#',
    //       imageSrc:
    //         'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
    //       imageAlt:
    //         'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
    //     },
    //     {
    //       name: 'Link 1',
    //       href: '#',
    //       imageSrc:
    //         'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
    //       imageAlt: 'Model wearing light heather gray t-shirt.',
    //     },
    //     {
    //       name: 'Link 2',
    //       href: '#',
    //       imageSrc:
    //         'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
    //       imageAlt:
    //         'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
    //     },
    //     {
    //       name: 'Link 3',
    //       href: '#',
    //       imageSrc:
    //         'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
    //       imageAlt:
    //         'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
    //     },
    //   ],
    // },
    {
      name: 'Resources',
      programs: [
        {
          name: 'Broker Resources',
          href: '/resources/broker-resources',
        },
        {
          name: 'FAQ',
          href: '/resources/faq',
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
        // {
        //   name: 'Link 1',
        //   href: '#',
        //   imageSrc:
        //     'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
        //   imageAlt:
        //     'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        // },
      ],
    },
  ],
  pages: [{ name: 'Contact Us', href: '/contact-us' }],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'>
              <div className='relative w-full bg-white dark:bg-gray-800 shadow-xl pb-12 flex flex-col overflow-y-auto '>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center dark:bg-gray-800 justify-center text-gray-400 dark:text-gray-400'
                    onClick={() => setMobileMenuOpen(false)}>
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
                          }>
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='px-4 py-6 space-y-12'>
                        <div className='grid grid-cols-1 gap-x-4 gap-y-8'>
                          {category.programs.map((item) => (
                            <div
                              key={item.name}
                              className='group relative mx-auto'>
                              {/* <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div> */}
                              <a
                                href={item.href}
                                className='mt-6 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'>
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

                <div className='border-t divide-y border-gray-200 dark:border-gray-500 py-6 px-4 space-y-6 mx-auto'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 p-2 block font-medium text-gray-900 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-700'>
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='md:order-3 mx-auto'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-yellow-300 hover:text-yellow-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-blue-500 hover:text-blue-600'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
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
                        <span className='sr-only'>Workflow</span>
                        <img
                          className='h-8 w-auto'
                          src='https://tailwindui.com/img/logos/workflow-mark.svg?color=red&shade=600'
                          alt=''
                        />
                      </a>
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Flyout menus */}
                    <Popover.Group className='px-4 bottom-0 inset-x-0'>
                      <div className='h-full flex justify-center space-x-8'>
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className='flex'>
                            {({ open }) => (
                              <>
                                <div className='relative flex'>
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'text-red-700'
                                        : 'text-gray-700 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-700',
                                      'relative flex items-center justify-center transition-colors ease-out duration-200  font-medium'
                                    )}>
                                    {category.name}
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
                                  leaveTo='opacity-0'>
                                  <Popover.Panel className='absolute z-20 top-full inset-x-0 bg-white dark:bg-gray-800 text-md text-gray-500 dark:text-white'>
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className='absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow'
                                      aria-hidden='true'
                                    />
                                    {/* Fake border when menu is open */}
                                    <div
                                      className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                      aria-hidden='true'>
                                      <div
                                        className={classNames(
                                          open
                                            ? 'bg-gray-200 dark:bg-gray-600'
                                            : 'bg-transparent',
                                          'w-full h-px transition-colors ease-out duration-200'
                                        )}
                                      />
                                    </div>

                                    <div className='relative '>
                                      <div className='max-w-7xl mx-auto px-8'>
                                        <div className='grid grid-cols-1 py-8'>
                                          {category.programs.map((item) => (
                                            <div
                                              key={item.name}
                                              className='group relative'>
                                              <a
                                                href={item.href}
                                                className='mt-4 font-base block font-medium text-gray-900 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-50 dark:hover:text-red-700'>
                                                <span
                                                  className='absolute z-10 inset-0 group-hover:block'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </a>
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
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className='flex items-center font-medium text-gray-700 hover:text-red-700 dark:text-gray-50 dark:hover:text-red-700'>
                            {page.name}
                          </a>
                        ))}
                        <button
                          aria-label='Toggle Dark Mode'
                          type='button'
                          className='md:order-3'
                          onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                          }>
                          {theme === 'dark' ? (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 text-yellow-300 hover:text-yellow-400'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 text-blue-500 hover:text-blue-600'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
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

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex-1 flex items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 bg-white dark:bg-gray-700 p-2 rounded-md text-gray-400'
                      onClick={() => setMobileMenuOpen(true)}>
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    {/* <a
                      href="#"
                      className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a> */}
                  </div>

                  {/* Logo (lg-) */}
                  <Link href='/'>
                    <a className='lg:hidden'>
                      <span className='sr-only'>Workflow</span>
                      <img
                        src='https://tailwindui.com/img/logos/workflow-mark.svg?color=red&shade=600'
                        alt=''
                        className='h-8 w-auto'
                      />
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
