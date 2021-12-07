import Layout from '../../components/Layout'

export default function privacy() {
  return (
    <Layout>
      {/* Header */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800 sm:py-32">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl dark:text-gray-300">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 dark:text-gray-400 text-center">
            Convallis feugiat et aliquet pellentesque dictum nisi, velit.
            Egestas fermentum adipiscing risus quam ac consectetur mattis turpis
            tristique.
          </p>
        </div>
      </div>
    </Layout>
  )
}
