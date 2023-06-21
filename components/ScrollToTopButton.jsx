import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

import { useWindowScroll } from '../hooks/useWindowScroll'
import { classNames } from '../utils/helpers'

export default function ScrollToTopButton() {
  const [{ y: scrollY }, scrollTo] = useWindowScroll()

  return (
    <div
      className={classNames(
        'fixed z-50 bottom-2 right-2 transition-transform ease-in-out duration-700 md:bottom-4 md:right-4',
        scrollY > 200 ? 'translate-x-0' : 'translate-x-16 md:translate-x-20'
      )}>
      <button
        onClick={() => {
          scrollTo({ left: 0, top: 0, behavior: 'smooth' })
        }}
        className='w-14 h-14 hover:text-red-500 hover:dark:text-red-600 md:w-16 md:h-16'>
        <ArrowUpCircleIcon className='w-full h-full' />
      </button>
    </div>
  )
}
