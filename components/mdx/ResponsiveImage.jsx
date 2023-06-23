import Image from 'next/image'

import { classNames } from '../../utils/helpers'

export default function ResponsiveImage({ src, alt, className, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes='100vw'
      className={classNames('w-full h-auto', className)}
      {...props}
    />
  )
}
