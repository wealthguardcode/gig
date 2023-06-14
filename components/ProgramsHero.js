import Image from 'next/image'

export default function ProgramsHero({ title, children }) {
  return (
    <div className='relative bg-gray-400'>
      <div className='absolute inset-0'>
        <Image
          src='/images/programs-hero.jpeg'
          layout='fill'
          objectFit='cover'
          priority={true}
          placeholder='blur'
          blurDataURL
          alt={title}
        />
        <div
          className='absolute inset-0 bg-gray-400 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          {title}
        </h1>
        <p className='mt-6 text-xl text-gray-100 max-w-3xl'>{children}</p>
      </div>
    </div>
  )
}
