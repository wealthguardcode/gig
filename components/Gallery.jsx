import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { classNames } from '../utils/helpers'

export default function Gallery({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className='flex gap-4 justify-around'>
        {items.map((item) => (
          <div
            key={item.id}
            className='group relative overflow-hidden w-full rounded cursor-pointer aspect-[4/3]'>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              onClick={() => openModal(item)}
              className='object-cover w-full h-full transition-scale ease-linear duration-200 group-hover:scale-105'
            />
          </div>
        ))}
      </div>

      <Transition.Root as='div' show={isOpen}>
        <Dialog
          as='div'
          onClose={closeModal}
          className='fixed z-40 inset-0 overflow-y-auto'>
          <div className='relative flex justify-center items-center min-h-screen pb-24'>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-black/50' />
            </Transition.Child>

            <button
              type='button'
              onClick={closeModal}
              className='absolute z-10 top-4 right-4 inline-flex justify-center rounded-md border border-transparent p-2 text-white bg-transparent hover:bg-gray-900/25 shadow-sm focus:outline-none'>
              <XMarkIcon className='w-10 h-10' />
            </button>

            <div className='relative inline-block overflow-hidden shadlow-xl sm:max-w-[90vw] sm:rounded-lg md:max-w-[85vw] lg:max-w-[80vw]'>
              <Image
                src={selectedImage?.imageUrl}
                alt={selectedImage?.title}
                width={1280}
                height={800}
                className='w-auto h-auto'
              />
            </div>
            <div className='absolute bottom-0 left-0 flex justify-center w-full p-2 bg-black/25'>
              <div className='flex gap-2 justify-center p-2 rounded bg-white'>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className='group relative z-10 overflow-hidden w-full max-w-[80px] rounded cursor-pointer aspect-[4/3]'>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={80}
                      height={60}
                      onClick={() => openModal(item)}
                      className={classNames(
                        'object-cover w-full h-full transition-opacity hover:opacity-100',
                        selectedImage?.id === item.id
                          ? 'opacity-100'
                          : 'opacity-50'
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
