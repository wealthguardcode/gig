import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 8000,
  draggable: false,
})

export default function HomePopup({ isOpen, setOpen, closePopup }) {
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
    <div>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog
          as='div'
          onClose={closePopup}
          className='fixed z-40 inset-0 flex justify-center items-center'
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
            enter='transition ease-in-out duration-500'
            enterFrom='transform -translate-y-8 opacity-0'
            enterTo='transform translate-y-0 opacity-100'
            leave='transition-opacity ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='relative overflow-y-auto overflow-x-hidden flex flex-col w-full max-w-screen-xs mx-4 rounded-lg bg-white dark:bg-gray-800 shadow-2xl'>
              <div className='flex gap-4 justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600'>
                <Dialog.Title className='text-2xl font-extrabold tracking-tight'>
                  PDF in your Inbox
                </Dialog.Title>
                <button
                  type='button'
                  onClick={closePopup}
                  className='-m-2 p-2 rounded-md flex items-center dark:bg-gray-800 justify-center text-gray-400 dark:text-gray-400'
                >
                  <span className='sr-only'>Close popup</span>
                  <XIcon className='h-7 w-7' aria-hidden='true' />
                </button>
              </div>
              <div className='p-4'>
                <Dialog.Description className='mb-4 text-base md:text-lg text-gray-500 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </Dialog.Description>

                <form
                  onSubmit={requestPdf}
                  className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4'
                >
                  <div>
                    <label
                      htmlFor='first_name'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'
                    >
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
                  <div>
                    <label
                      htmlFor='last_name'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'
                    >
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
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-400'
                    >
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

                  <div className='text-right sm:col-span-2'>
                    <button
                      type='submit'
                      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    >
                      Request PDF
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
