export default function SolutionHighlights({ highlights }) {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto '>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl my-4'>
            Highlights
          </h2>
          <div className='prose text-base max-w-none mt-2 dark:text-gray-400 md:text-lg'>
            <p>{highlights}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
