import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 8000,
  draggable: false,
})

const footerNavigation = {
  links: [
    { name: 'All Programs', href: '/programs' },
    {
      name: 'WestWall Marina Package',
      href: '/programs/westwall-marina-package',
    },
    {
      name: 'Coastal Property',
      href: '/brokerage/coastal-property',
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
    {
      name: 'Hard to Place Risk',
      href: '/brokerage/hard-to-place',
    },
    {
      name: 'Yacht Insurance',
      href: '/brokerage/yacht-insurance',
    },
  ],
  resources: [
    {
      name: 'Resources',
      href: '/resources/broker-resources',
    },
    {
      name: 'Privacy Policy',
      href: '/resources/privacy',
    },
    {
      name: 'Terms & Conditions',
      href: '/resources/terms',
    },
  ],
  company: [
    {
      name: 'About Us Overview',
      href: '/about-us/about-us',
    },
    {
      name: 'Leadership',
      href: '/about-us/leadership',
    },
    { name: 'Contact Us', href: '/contact-us' },
  ],
}

export default function Footer() {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  return (
    <footer
      aria-labelledby='footer-heading'
      className='bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-500'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-20'>
          <div className='grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min'>
            {/* Image section */}
            <div className='col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1'>
              <Link href='/'>
                <a>
                  <Image
                    height={60}
                    width={60}
                    src='/images/wig-logo.png'
                    alt='Logo'
                    className='h-12 w-auto'
                  />
                </a>
              </Link>
            </div>

            {/* Sitemap sections */}
            <div className='mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6'>
              <div className='grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <h3 className='text-base font-medium tracking-wider text-gray-900 dark:text-gray-300'>
                    Quick Links
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.links.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className={
                            router.asPath === item.href
                              ? 'font-bold text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-800'
                              : 'text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }
                          onClick={newPathName}
                          pathname={pathName}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-base font-medium tracking-wider text-gray-900 dark:text-gray-300'>
                    Resources
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.resources.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className={
                            router.asPath === item.href
                              ? 'font-bold text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-800'
                              : 'text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }
                          onClick={newPathName}
                          pathname={pathName}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className='text-base font-medium tracking-wider text-gray-900 dark:text-gray-300'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                        className={
                          router.asPath === item.href
                            ? 'font-bold text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-800'
                            : 'text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                        onClick={newPathName}
                        pathname={pathName}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-100 dark:border-gray-500 py-10 text-center'>
          <p className='text-sm text-gray-500 dark:text-gray-300'>
            &copy; {new Date().getFullYear()} WealthGuard Insurance Group - All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
