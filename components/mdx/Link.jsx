import NextLink from 'next/link'

import { classNames } from '../../utils/helpers'

export default function Link({ href, className, ...props }) {
  if (href?.startsWith('/')) {
    return (
      <NextLink
        href={href}
        className={classNames('prose-a', className)}
        {...props}
      />
    )
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={classNames('prose-a', className)}
      {...props}
    />
  )
}
