import Layout from '../components/Layout'
import { MailIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

function fun() {
  document.getElementById('first_name').value = ''
  document.getElementById('last_name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('company').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('message').value = ''
}

function sendEmail(e) {
  e.preventDefault()
  if (
    e.target.first_name.value === '' ||
    e.target.last_name === '' ||
    e.target.email === '' ||
    e.target.company === '' ||
    e.target.message === ''
  ) {
    return alert('Form cannot be empty!')
  } else {
    emailjs
      .sendForm(
        'service_74a7ngi',
        'template_tsp834s',
        e.target,
        'user_1ODnWoNdXKoQipSD1qXJf'
      )
      .then(
        (result) => {
          toast('🎉 Message sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          console.log(result.text)
        },
        (error) => {
          alert(error.text)
        }
      )
    fun()
  }
}

export default function ContactUsPage() {
  return (
    <Layout>
      <main>
        {/* Header */}
        <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit.
              Egestas fermentum adipiscing risus quam ac consectetur mattis
              turpis tristique.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let&apos;s work together
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We&apos;d love to hear from you! Send us a message using the
                  form opposite, or email us. We’d love to hear from you! Send
                  us a message using the form opposite, or email us.
                </p>
                <form
                  id="template_tsp834s"
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  onSubmit={sendEmail}>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700">
                        How can we help you?
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-500">
          <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="block text-white">Need something else?</span>
              <span className="block text-blue-900">Drop us a line.</span>
            </h2>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto">
              <span>Email Us</span>
              <MailIcon
                className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
