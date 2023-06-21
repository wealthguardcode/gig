import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 8000,
  draggable: false,
})

const navigation = {
  categories: [
    {
      name: 'Quick Links',
      links: [
        {
          name: 'Programs',
          href: '/programs',
        },
        {
          name: 'Brokerage Solutions',
          href: '/brokerage',
        },
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
    },
    {
      name: 'Company',
      links: [
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
    },
  ],
}

export default function Footer() {
  const router = useRouter()

  return (
    <footer
      aria-labelledby='footer-heading'
      className='bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-500'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-20'>
          <div className='grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min'>
            {/* Image section */}
            <div className='col-span-1 lg:row-start-1 lg:col-start-1'>
              <Link href='/'>
                <>
                  <Image
                    src='/images/wig-logo.png'
                    alt='Logo'
                    width={64}
                    height={56.5}
                    className='w-14 h-auto'
                  />
                </>
              </Link>
            </div>

            {/* Sitemap sections */}
            <div className='col-span-12 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:mt-0 md:row-start-1 lg:col-span-6'>
              {navigation.categories.map((category) => (
                <div key={category.name}>
                  <h3 className='text-base font-medium tracking-wider text-gray-900 dark:text-gray-300'>
                    {category.name}
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {category.links.map((link) => (
                      <li key={link.name} className='text-sm'>
                        <Link
                          href={link.href}
                          className={
                            router.asPath === link.href
                              ? 'font-bold text-red-700 dark:text-red-700 bg-gray-100 dark:bg-gray-800'
                              : 'text-gray-500 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='col-span-5 flex flex-col w-full mt-10 pt-10 border-t border-gray-50 dark:border-gray-600 md:col-span-4 md:col-start-9 md:mt-0 md:pt-0 md:border-t-0 lg:col-span-3 lg:col-start-10 lg:px-4'>
              <h3 className='text-base font-medium tracking-wider text-gray-900 dark:text-gray-300'>
                Office
              </h3>
              <dl className='flex flex-col gap-2 mt-6 text-sm text-gray-500 dark:text-gray-400'>
                <div>
                  <dt className='sr-only'>Address</dt>
                  <dd>
                    <a
                      href='https://www.google.com/maps/place/WealthGuard+Insurance+Group/@30.2202,-95.5826725,17z/data=!3m1!4b1!4m6!3m5!1s0x86472f9432bb1e11:0x777b4537b97a0a07!8m2!3d30.2202001!4d-95.5778016!16s%2Fg%2F11nn3nwmr0?entry=ttu'
                      target='_blank'
                      rel='noreferrer'
                      className='group inline-flex gap-1.5 items-start'>
                      <MapIcon
                        height={16}
                        className='mt-1 group-hover:text-red-600 dark:group-hover:text-red-600'
                      />
                      <span className='group-hover:text-red-600 dark:group-hover:text-red-600'>
                        <span>7205 FM 1488 Rd, Ste-A</span>
                        <br />
                        <span>Magnolia, TX 77354</span>
                      </span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className='sr-only'>Email</dt>
                  <dd>
                    <a
                      href='mailto:sales@wealthguardig.com'
                      target='_blank'
                      rel='noreferrer'
                      className='group inline-flex gap-1.5 items-center'>
                      <EnvelopeIcon
                        height={16}
                        className='group-hover:text-red-600 dark:group-hover:text-red-600'
                      />
                      <span className='group-hover:text-red-600 dark:group-hover:text-red-600'>
                        sales@wealthguardig.com
                      </span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className='sr-only'>Phone number</dt>
                  <dd>
                    <a
                      href='tel:832-479-0042'
                      target='_blank'
                      rel='noreferrer'
                      className='group inline-flex gap-1.5 items-center'>
                      <PhoneIcon
                        height={16}
                        className='group-hover:text-red-600 dark:group-hover:text-red-600'
                      />
                      <span className='group-hover:text-red-600 dark:group-hover:text-red-600'>
                        832-479-0042
                      </span>
                    </a>
                  </dd>
                </div>
              </dl>
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
