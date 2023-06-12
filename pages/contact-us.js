import Layout from '../components/Layout'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'

function fun() {
  document.getElementById('first_name').value = ''
  document.getElementById('last_name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('company').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('message').value = ''
}

toast.configure({
  autoClose: 8000,
  draggable: false,
})

function sendEmail(e) {
  e.preventDefault()
  if (
    e.target.first_name.value === '' ||
    e.target.last_name.value === '' ||
    e.target.email.value === '' ||
    e.target.company.value === '' ||
    e.target.message.value === ''
  ) {
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
        'service_xq1c0nw',
        'template_tsp834s',
        'user_RfvnwrDrd9OYABRy3',
      )
      .then(
        (result) => {
          toast('🎉 Message sent!', {
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

export default function ContactUsPage() {
  return (
    <Layout title='WIG | Contact Us'>
      <main>
        {/* Header */}
        <div className='py-24 bg-gray-50 dark:bg-gray-900 sm:py-32'>
          <div className='max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='text-4xl leading-10 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 text-center sm:text-5xl sm:leading-none lg:text-6xl'>
              Contact Us
            </h1>
          </div>
        </div>

        {/* Contact Section */}
        <div className='relative bg-white dark:bg-gray-800'>
          <div className='lg:absolute lg:inset-0'>
            <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <img
                className='h-56 w-full object-cover lg:absolute lg:h-full'
                src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
                alt='Modern office'
              />
            </div>
          </div>
          <div className='relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2'>
            <div className='lg:pr-8'>
              <div className='max-w-md mx-auto sm:max-w-lg lg:mx-0'>
                <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-300'>
                  Let&apos;s work together
                </h2>
                <p className='mt-4 text-lg text-gray-500 sm:mt-3 dark:text-gray-400'>
                  We&apos;d love to hear from you! Send us a message using the
                  form opposite, or{' '}
                  <a
                    className='text-red-700 hover:text-red-600 dark:hover:text-red-600'
                    href='mailto:sales@wealthguardig.com'
                    target='_blank'
                    rel='noreferrer'>
                    email us
                  </a>
                  .
                </p>
                <form
                  id='template_tsp834s'
                  method='POST'
                  className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                  onSubmit={sendEmail}>
                  <div>
                    <label
                      htmlFor='first_name'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        autoComplete='given-name'
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='last_name'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='last_name'
                        id='last_name'
                        autoComplete='family-name'
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Email
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Company
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='company'
                        id='company'
                        autoComplete='organization'
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Phone
                      </label>
                      <span
                        id='phone-description'
                        className='text-sm text-gray-500 dark:text-gray-500'>
                        Optional
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='tel'
                        aria-describedby='phone-description'
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        How can we help you?
                      </label>
                      <span
                        id='how-can-we-help-description'
                        className='text-sm text-gray-500'>
                        Max. 500 characters
                      </span>
                    </div>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        aria-describedby='how-can-we-help-description'
                        rows={4}
                        className='block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md'
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className='text-right sm:col-span-2'>
                    <button
                      type='submit'
                      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className='bg-white dark:bg-gray-800'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
            <div className='divide-y-2 divide-gray-200'>
              <div className='grid md:grid-cols-2 lg:gap-8'>
                <h2 className='text-2xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-3xl'>
                  Get in touch
                </h2>
                <div className='mt-8 1 gap-12 sm:gap-x-8 sm:gap-y-12 lg:mt-0'>
                  <div>
                    <h3 className='text-2xl leading-6 tracking-wider font-medium text-gray-900 dark:text-gray-300'>
                      Office
                    </h3>
                    <dl className='mt-2 text-lg text-gray-500 dark:text-gray-400'>
                      <div>
                        <dt className='sr-only'>Address</dt>
                        <dd>7205 FM 1488 Rd, Ste-A</dd>
                        <dd>Magnolia, TX 77354</dd>
                      </div>
                      <div>
                        <dt className='sr-only'>Email</dt>
                        <dd className='inline-flex items-center group'>
                          <MailIcon
                            height={20}
                            className='mr-1 group-hover:text-red-600 dark:group-hover:text-red-600'
                          />
                          <a
                            className='hover:text-red-600 dark:hover:text-red-600'
                            href='mailto:sales@wealthguardig.com'
                            target='_blank'
                            rel='noreferrer'>
                            sales@wealthguardig.com
                          </a>
                        </dd>
                      </div>
                      <div className='mt-1'>
                        <dt className='sr-only'>Phone number</dt>
                        <dd className='inline-flex items-center group'>
                          <PhoneIcon
                            height={20}
                            className='mr-1 group-hover:text-red-600 dark:group-hover:text-red-600'
                          />
                          <a
                            className='hover:text-red-600 dark:hover:text-red-600'
                            href='tel:832-479-0042'
                            target='_blank'
                            rel='noreferrer'>
                            832-479-0042
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-gradient-to-r from-red-500 via-red-400 to-red-500'>
          <div className='max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32'>
            <h2 className='text-3xl font-extrabold sm:text-4xl'>
              <span className='block text-white'>Need something else?</span>
              <span className='block text-gray-700'>Drop us a line.</span>
            </h2>
            <a
              href='mailto:sales@wealthguardig.com'
              target='_blank'
              rel='noreferrer'
              className='mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-red-600 hover:bg-red-50 sm:w-auto'>
              <span>Email Us</span>
              <MailIcon
                className='ml-3 h-5 w-5 flex-shrink-0 text-gray-400'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
