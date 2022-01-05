import Layout from '../../components/Layout'

export default function terms() {
  return (
    <Layout>
      {/* Header for Terms & Conditions */}
      <div className='pt-24 pb-12 bg-gray-50 dark:bg-gray-800'>
        <div className='max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='text-4xl leading-10 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 text-center sm:text-5xl sm:leading-none lg:text-6xl'>
            Terms & Conditions
          </h1>
          <p className='mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 dark:text-gray-400 text-center'>
            Your Terms and Conditions section is like a contract between you and
            your customers. You make information and services available to your
            customers, and your customers must follow your rules.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className='pt-4 pb-16 bg-gray-50 dark:bg-gray-800 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
          <div className='text-base max-w-prose mx-auto lg:max-w-none'>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
              Common items in a terms and conditions agreement allow you to:
            </p>
          </div>
          <div className='relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72 dark:text-gray-400'>
            <ul className='list-disc ml-12 lg:ml-24'>
              <li>
                Withdraw and cancel services, and make financial transactions.
              </li>
              <li>
                Manage customer expectations, such as liability for information
                errors or website downtime.
              </li>
              <li>
                Explain your copyright rules, such as attribution, adaptation,
                commercial or non-commercial use, etc.
              </li>
              <li>
                Set rules for user behavior, like forbidding unlawful behavior,
                hate speech, bullying, promotions, spam, etc.
              </li>
              <li>Disable user accounts.</li>
              <li>
                Write down any other terms or conditions that protect you or
                your audience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
