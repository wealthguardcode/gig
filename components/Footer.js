import Link from 'next/link'
import Image from 'next/image'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function fun() {
  document.getElementById('subscriber_email').value = ''
}

toast.configure({
  autoClose: 8000,
  draggable: false,
})

function sendEmail(e) {
  e.preventDefault()
  if (e.target.subscriber_email.value === '') {
    return toast.error('Form cannot be empty!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  } else {
    emailjs
      .sendForm(
        'service_74a7ngi',
        'template_1gc83qd',
        e.target,
        'user_1ODnWoNdXKoQipSD1qXJf'
      )
      .then(
        (result) => {
          toast('🎉 Thank You!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          console.log(result.text)
        },
        (error) => {
          alert(error.text)
        }
      )
    fun()
  }
}

const footerNavigation = {
  links: [
    { name: 'All Programs', href: '/programs', aria: 'View All Programs' },
    {
      name: 'WestWall Marina',
      href: '/programs/westwall-marina',
      aria: 'WestWall Marina',
    },
    {
      name: 'Healthcare Facilities',
      href: '/programs/healthcare-facilities',
      aria: 'Healthcare Facilities',
    },
    {
      name: 'Cargo & Logistics',
      href: '/programs/cargo-and-logistics',
      aria: 'Cargo & Logistics',
    },
    {
      name: 'Active Assailant',
      href: '/programs/active-assailant',
      aria: 'Active Assailant',
    },
    {
      name: 'Terrorism & Sabotage',
      href: '/programs/terrorism-and-sabotage',
      aria: 'Terrorism & Sabotage',
    },
    {
      name: 'Violent & Malicious Acts',
      href: '/programs/violent-malicious-acts',
      aria: 'Violent & Malicious Acts',
    },
  ],
  resources: [
    {
      name: 'Resources',
      href: '/resources/broker-resources',
      aria: 'Useful Resources for Brokers',
    },
    {
      name: 'Privacy Policy',
      href: '/resources/privacy',
      aria: 'Privacy Policy',
    },
    {
      name: 'Terms & Conditions',
      href: '/resources/terms',
      aria: 'Terms & Conditions',
    },
    // { name: 'FAQ', href: '/resources/faq' },
  ],
  company: [
    {
      name: 'About Us',
      href: '/about-us/about-us',
      aria: 'About Us',
    },
    {
      name: 'Leadership',
      href: '/about-us/leadership',
      aria: "WealthGuard's Leadership",
    },
    { name: 'Contact Us', href: '/contact-us', aria: 'Contact Us' },
  ],
}

export default function Footer() {
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
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.links.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          aria-label={item.aria}>
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
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.resources.map((item) => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                          aria-label={item.aria}>
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
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                        className='text-gray-500 dark:text-gray-400 hover:font-bold hover:text-red-700 dark:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                        aria-label={item.aria}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className='mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4'>
              <h3 className='text-sm font-medium text-gray-900 dark:text-gray-300'>
                Sign up for our newsletter
              </h3>
              <p className='mt-6 text-sm text-gray-500 dark:text-gray-400'>
                The latest info & updates, sent to your inbox weekly.
              </p>
              <form className='mt-2 flex sm:max-w-md' onSubmit={sendEmail}>
                <label htmlFor='subscriber_email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='subscriber_email'
                  name='subscriber_email'
                  type='text'
                  autoComplete='email'
                  className='appearance-none min-w-0 w-full bg-white dark:bg-gray-50 border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700'
                />
                <div className='ml-4 flex-shrink-0'>
                  <button
                    type='submit'
                    className='w-full bg-red-700 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-100 dark:border-gray-500 py-10 text-center'>
          <p className='text-sm text-gray-500 dark:text-gray-300'>
            &copy; {new Date().getFullYear()} WealthGuard Insurance Group, Inc.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
