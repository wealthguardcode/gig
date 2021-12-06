import Layout from '../../components/Layout'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  {
    id: 2,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  {
    id: 3,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  {
    id: 4,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  {
    id: 5,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  {
    id: 6,
    question: "What's the best thing about WealthGuard?",
    answer:
      'Duis ultricies eu tellus vel condimentum. Nulla non ligula eu quam euismod egestas. Maecenas at ipsum non lorem laoreet placerat eget nec nibh. Cras et augue pharetra, tincidunt libero at, hendrerit urna.',
  },
  // More questions...
]

export default function FaqPage() {
  return (
    <Layout title="GIG || Faq's">
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/oxQftSMxRRmZZAuhsuvK"
            alt="Faq's"
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            FAQ&apos;s
          </h1>
          <p className="mt-6 text-2xl text-blue-100 max-w-3xl">
            Got questions? We&apos;ve got answers. Take a look at some of our
            most commonly asked questions.
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <section aria-labelledby="faq-heading" className="bg-white">
        <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-xl">
            <h2
              id="faq-heading"
              className="text-2xl font-extrabold tracking-wide text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Take a look at our FAQ and if you still cannot find what you are
              looking for you can always{' '}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                send us an email
              </a>{' '}
              with your enquiry.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonial section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
              <img
                src="https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative lg:col-span-1">
              {/* <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                alt=""
              /> */}
              <blockquote className="mt-6 text-white">
                <p className="text-xl font-medium sm:text-2xl">
                  WealthGuard has completely transformed how we interact with
                  brokers. Proin pulvinar, quam a porta consequat, mi lorem
                  mattis diam, in laoreet massa neque sit amet turpis.
                </p>
                <footer className="mt-6">
                  <p className="flex flex-col font-medium">
                    <span>Jane Doe</span>
                    <span>CEO, Example Inc.</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
