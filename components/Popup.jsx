import { Fragment, useRef } from 'react'
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
        className='fixed z-40 inset-0 flex justify-center items-center'>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Dialog.Overlay className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-500'
          enterFrom='-translate-y-8 opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='transition-opacity ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div
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
            <div className='flex gap-4 justify-between items-center p-4 border-b border-gray-200 dark:border-gray-300'>
              <Dialog.Title className='text-2xl font-extrabold text-gray-700 dark:text-gray-800'>
                {title}
              </Dialog.Title>
              <button
                type='button'
                aria-label='Close popup'
                onClick={closePopup}
                className='flex justify-center items-center -my-2 p-2 rounded-md text-gray-400 dark:text-gray-500'>
                <span className='sr-only'>Close popup</span>
                <XMarkIcon aria-hidden='true' className='w-6 h-6' />
              </button>
            </div>
            <div>
              {!!description && (
                <Dialog.Description className='p-4 text-base text-gray-600 dark:text-gray-700 md:text-lg'>
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
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
