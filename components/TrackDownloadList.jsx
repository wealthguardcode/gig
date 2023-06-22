import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

import * as gtag from '../lib/gtag'

export default function TrackDownloadList({ items }) {
  return (
    <ul className='not-prose list-inside list-none flex flex-col gap-2 -ml-4 text-md md:text-lg'>
      {items.map((item) => (
        <li key={item.title} className='group flex gap-4 items-start'>
          <DocumentArrowDownIcon className='flex-none w-6 h-6 mt-0.5 text-gray-600 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-400' />
          <TrackDownloadLink href={item.href}>{item.title}</TrackDownloadLink>
        </li>
      ))}
    </ul>
  )
}

function TrackDownloadLink({ href, children }) {
  const trackDownload = (url, event) => {
    if (gtag) {
      gtag('event', 'click', {
        event_category: 'Download Document',
        event_label: url,
        transport_type: 'beacon',
        value: children,
      })
    }

    window.open(url)
  }

  return (
    <a
      href={href}
      target='_blank'
      onClick={(e) => {
        e.preventDefault()

        trackDownload(href, e)
      }}
      className='font-medium text-red-600 group-hover:text-red-700 dark:group-hover:text-red-500'>
      {children}
    </a>
  )
}
