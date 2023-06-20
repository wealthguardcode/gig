import Image from 'next/image'

export default function Hero({ image, title, titleAs = 'h1', children }) {
  const TitleAs = titleAs

  return (
    <div className='relative bg-gray-400'>
      <div className='absolute inset-0'>
        <Image
          src={image}
          alt={title}
          priority
          blurDataURL
          placeholder='blur'
          layout='fill'
          objectFit='cover'
        />
        <div
          className='absolute z-0 inset-0 bg-gray-400 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <TitleAs className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          {title}
        </TitleAs>
        {!!children && (
          <p className='max-w-xl mt-6 text-xl text-gray-100'>{children}</p>
        )}
      </div>
    </div>
  )
}
