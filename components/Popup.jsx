import { Fragment, useRef } from 'react'
import * as ReactIs from 'react-is'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { classNames } from '../utils/helpers'

export default function Popup({
  isOpen,
  closePopup,
  width,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}) {
  const hasPrimaryAction = typeof primaryAction?.onClick === 'function' || false
  const hasSecondaryAction =
    typeof secondaryAction?.onClick === 'function' || false

  return (
    <Transition.Root as='div' show={isOpen}>
      <Dialog
        as='div'
        onClose={closePopup}
        className='fixed z-40 inset-0 overflow-y-auto'>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div aria-hidden='true' className='fixed inset-0 bg-black/50' />
        </Transition.Child>

        <div className='relative flex justify-center items-center w-full min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-500'
            enterFrom='-translate-y-8 opacity-0'
            enterTo='translate-y-0 opacity-100'
            leave='transition-opacity ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Panel
              className={classNames(
                'relative overflow-y-auto overflow-x-hidden flex flex-col w-full mx-4 rounded-lg bg-white dark:bg-gray-200 shadow-2xl',
                width === 'lg'
                  ? 'max-w-screen-lg'
                  : width === 'md'
                  ? 'max-w-screen-md'
                  : width === 'sm'
                  ? 'max-w-screen-sm'
                  : 'max-w-md'
              )}>
              <div className='relative flex gap-4 justify-center items-center p-4 border-b border-gray-200 dark:border-gray-300'>
                <Dialog.Title className='text-center text-2xl font-extrabold text-gray-800 dark:text-gray-900 md:text-3xl'>
                  {title}
                </Dialog.Title>
                <button
                  type='button'
                  aria-label='Close popup'
                  onClick={closePopup}
                  className='absolute top-[50%] right-0.5 -translate-y-[50%] flex justify-center items-center p-3 rounded-md text-gray-400 dark:text-gray-500 md:right-1.5'>
                  <span className='sr-only'>Close popup</span>
                  <XMarkIcon aria-hidden='true' className='w-6 h-6' />
                </button>
              </div>
              <div>
                {(ReactIs.isElement(description) ||
                  (typeof description === 'string' &&
                    description.length > 0)) && (
                  <Dialog.Description className='p-4 text-base text-gray-700 dark:text-gray-800 md:text-lg'>
                    {description}
                  </Dialog.Description>
                )}

                {children}
              </div>
              {(hasPrimaryAction || hasSecondaryAction) && (
                <div className='flex gap-4 justify-between items-center p-4 border-t border-gray-200 dark:border-gray-300'>
                  <span>
                    {hasSecondaryAction && (
                      <button
                        onClick={secondaryAction.onClick}
                        className='inline-flex justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'>
                        {secondaryAction.text}
                      </button>
                    )}
                  </span>
                  <span>
                    {hasPrimaryAction && (
                      <button
                        onClick={primaryAction.onClick}
                        className='inline-flex justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                        {primaryAction.text}
                      </button>
                    )}
                  </span>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
