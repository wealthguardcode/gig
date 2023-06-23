import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

import { classNames } from '../utils/helpers'

export default function Select({
  disabled,
  placeholder,
  options,
  selected,
  setSelected,
}) {
  return (
    <Listbox
      as='div'
      disabled={disabled}
      value={selected}
      onChange={setSelected}>
      {({ open }) => (
        <div className='relative mt-1'>
          <div className='overflow-hidden flex mt-1 border border-gray-300 rounded-md bg-white shadow-sm'>
            <Listbox.Button
              className={classNames(
                'group relative block w-full h-12 p-2 text-lg disabled:cursor-not-allowed focus:outline-none',
                disabled ? 'opacity-50' : 'opacity-100'
              )}>
              {selected ? (
                <span className='block truncate font-medium text-black'>
                  {selected}
                </span>
              ) : (
                <span className='block truncate font-normal text-gray-500'>
                  {placeholder || 'Select'}
                </span>
              )}
              <span className='flex-none pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 enabled:group-hover:text-gray-500'>
                <ChevronDownIcon
                  aria-hidden='true'
                  className={classNames(
                    'w-6 h-6',
                    open ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </span>
            </Listbox.Button>
            {!!selected && (
              <button
                aria-label='Clear category'
                onClick={() => setSelected('')}
                className='flex-none flex justify-center items-center h-12 w-12 rounded-sm text-gray-500 hover:text-red-900 hover:bg-red-100'>
                <XMarkIcon className='h-5 w-5' />
              </button>
            )}
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.name}
                  className='relative cursor-pointer select-none'
                  value={option.name}>
                  {({ selected }) => (
                    <div
                      className={classNames(
                        'py-2 pl-10 pr-4 text-lg font-medium',
                        selected
                          ? 'text-red-900 bg-red-100'
                          : 'text-gray-800 bg-gray-50 hover:text-red-800 hover:bg-red-50'
                      )}>
                      <span className='block truncate'>{option.name}</span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-red-700'>
                          <CheckIcon aria-hidden='true' className='h-5 w-5' />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
