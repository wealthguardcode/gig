export default function ProjectDescription({ subHeading, description }) {
  return (
    <div className='flex flex-col my-6'>
      <div className='text-base max-w-prose lg:max-w-none'>
        <p className='mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl text-center'>
          {subHeading}
        </p>
      </div>
      <div className='relative z-10 prose prose-xl md:max-w-md sm:mx-4 md:mx-2 lg:max-w-xl lg:mx-0 mb-10 mx-4'>
        <p className='text-lg mr-3 dark:text-gray-400'>{description}</p>
      </div>
    </div>
  )
}
