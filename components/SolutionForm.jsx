import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import { classNames } from '../utils/helpers'

const accountQuantities = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

const accountFutures = ['1', '2', '3+']

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

export default function SolutionForm({ title = '' }) {
  const firstNameEl = useRef(null)
  const lastNameEl = useRef(null)
  const workEmailEl = useRef(null)
  const programEl = useRef(null)
  const accountQuantityEl = useRef(null)
  const accountFutureEl = useRef(null)
  const companyEl = useRef(null)
  const phoneEl = useRef(null)
  const stateEl = useRef(null)

  function sendEmail(e) {
    e.preventDefault()

    const { value: first_name = '' } = e.target.first_name
    const { value: last_name = '' } = e.target.last_name
    const { value: work_email = '' } = e.target.work_email
    const { value: company = '' } = e.target.company

    if (!first_name || !last_name || !work_email || !company) {
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

    emailjs
      .sendForm(
        'service_xq1c0nw',
        'template_78io7bt',
        e.target,
        'RfvnwrDrd9OYABRy3'
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

          // reset form values
          firstNameEl.current.value = ''
          lastNameEl.current.value = ''
          workEmailEl.current.value = ''
          programEl.current.value = title
          accountQuantityEl.current.value = ''
          accountFutureEl.current.value = ''
          companyEl.current.value = ''
          phoneEl.current.value = ''
          stateEl.current.value = ''
        },
        (error) => {
          alert(error.text)
        }
      )
  }

  return (
    <div className='flex flex-col'>
      <div className='md:mt-10 mb-5 sm:mt-0'>
        <div className='md:grid md:grid-cols-2 md:gap-3'>
          <div className='mt-5 md:-mt-40 md:col-span-2 md:ml-12'>
            <form
              id='template_78io7bt'
              onSubmit={sendEmail}
              className='shadow-2xl md:absolute md:mb-6 mx-4'>
              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white dark:bg-gray-200 p-6 z-10'>
                  <div className='my-4'>
                    <h2 className='sm:text-xl text-2xl text-center lg:text-3xl font-semibold dark:text-gray-800'>
                      Speak with our <span className='text-red-700'>{title}</span>{' '}
                      Specialist
                    </h2>
                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6'>
                      <label
                        htmlFor='first_name'
                        className='block text-sm font-medium text-gray-700'>
                        First name
                      </label>
                      <input
                        ref={firstNameEl}
                        type='text'
                        name='first_name'
                        id='first_name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-900'
                      />
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='last_name'
                        className='block text-sm font-medium text-gray-700'>
                        Last name
                      </label>
                      <input
                        ref={lastNameEl}
                        type='text'
                        name='last_name'
                        id='last_name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-900'
                      />
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='work_email'
                        className='block text-sm font-medium text-gray-700'>
                        Work Email
                      </label>
                      <input
                        ref={workEmailEl}
                        type='text'
                        name='work_email'
                        id='work_email'
                        autoComplete='email'
                        className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-900'
                      />
                    </div>
                    <div className='col-span-6'>
                      <label
                        htmlFor='program'
                        className='block text-sm font-medium text-gray-700'>
                        Program
                      </label>
                      <select
                        ref={programEl}
                        id='program'
                        name='program'
                        defaultValue={title}
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:text-gray-900'>
                        <option>{title}</option>
                      </select>
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='account_quantity'
                        className='block text-sm font-medium text-gray-700'>
                        How Many Accounts Do You Have That Fit This Program?
                      </label>
                      <select
                        ref={accountQuantityEl}
                        id='account_quantity'
                        name='account_quantity'
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:text-gray-900'>
                        {accountQuantities.map((value) => (
                          <option key={value}>{value}</option>
                        ))}
                      </select>
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='account_future'
                        className='block text-sm font-medium text-gray-700'>
                        How Many of These Accounts Are Coming Up in the Next 90
                        Days?
                      </label>
                      <select
                        ref={accountFutureEl}
                        id='account_future'
                        name='account_future'
                        defaultValue='1'
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:text-gray-900'>
                        {accountFutures.map((value) => (
                          <option key={value}>{value}</option>
                        ))}
                      </select>
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium text-gray-700'>
                        Company
                      </label>
                      <input
                        ref={companyEl}
                        type='text'
                        name='company'
                        id='company'
                        className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-900'
                      />
                    </div>
                    <div className='col-span-6'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700'>
                        Phone
                      </label>
                      <input
                        ref={phoneEl}
                        type='tel'
                        name='phone'
                        id='phone'
                        className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-900'
                      />
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='state'
                        className='block text-sm font-medium text-gray-700'>
                        State / Province
                      </label>
                      <select
                        ref={stateEl}
                        id='state'
                        name='state'
                        defaultValue='Texas'
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:text-gray-900'>
                        {states.map((value) => (
                          <option key={value}>{value}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-white dark:bg-gray-200 text-center sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                    Request a Consultation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
