import Layout from '../../components/Layout'
import { getProgram, getProgramsSlugs } from '../../lib/data'
import Link from 'next/link'
import { MailIcon } from '@heroicons/react/solid'
import he from 'he'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function fun() {
  document.getElementById('first_name').value = ''
  document.getElementById('last_name').value = ''
  document.getElementById('work_email').value = ''
  document.getElementById('program').value = ''
  document.getElementById('account_quantity').value = ''
  document.getElementById('account_future').value = ''
  document.getElementById('company').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('state').value = ''
}

toast.configure({
  autoClose: 8000,
  draggable: false,
})

function sendEmail(e) {
  e.preventDefault()
  if (
    e.target.first_name.value === '' ||
    e.target.last_name === '' ||
    e.target.email === '' ||
    e.target.company === ''
  ) {
    return alert('Form cannot be empty!')
  } else {
    emailjs
      .sendForm(
        'service_74a7ngi',
        'template_78io7bt',
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

export const getStaticPaths = async () => {
  const slugRes = await getProgramsSlugs()
  const slugs = slugRes.programs

  // console.log(slugs)

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const program = await getProgram(params.slug)

  return {
    props: {
      program: program.programs[0],
      coverage: await serialize(he.decode(program.programs[0].coverage)),
      highlights: await serialize(he.decode(program.programs[0].highlights)),
    },
  }
}

const initialValue = () => {
  let option_id = [0, 1, 2, 3, 4, 5]
  let options = [
    { name: 'West Wall Marina' },
    { name: 'Assistant Living Facility' },
    { name: 'Cargo & Logistics' },
    { name: 'Active Assailant' },
    { name: 'Terrorism & Sabotage' },
  ]
  let selectedOptionId = 0

  return (
    <select defaultValue={selectedOptionId}>
      {option_id.map((id) => (
        <option key={id} value={id}>
          {options[id].name}
        </option>
      ))}
    </select>
  )
}

export default function ProgramPage({ program, coverage, highlights }) {
  const [defaultValue, setDefaultValue] = useState({
    value: `${program.title}`,
  })

  return (
    <Layout title={`WIG | ${program.title}`}>
      {/* Hero */}
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={program.image.url}
            alt={program.title}
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply z-0"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white  sm:text-5xl lg:text-6xl">
            {program.title}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-xl ">
            {program.heroDescription}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="pt-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {/* Description & Form */}
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col my-6">
              <div className="text-base max-w-prose lg:max-w-none">
                <p className="mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl text-left">
                  {program.subHeading}
                </p>
              </div>
              <div className="relative z-10 prose prose-xl max-w-sm sm:mx-4 md:max-w-md md:mx-2 lg:max-w-lg lg:mx-0 mb-10 mx-4">
                <p className="text-lg mr-3">{program.description}</p>
              </div>
            </div>

            <div className="flex flex-col ">
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-3">
                  <div className="mt-5 md:-mt-40 md:col-span-2 md:ml-12">
                    <form
                      id="template_78io7bt"
                      onSubmit={sendEmail}
                      method="POST"
                      className="shadow-2xl md:absolute md:mb-6 mx-4">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white p-6 ">
                          <div className="my-4">
                            <h1 className="sm:text-xl text-2xl text-center lg:text-3xl font-semibold">
                              Speak With a{' '}
                              <span className="text-blue-600">
                                {program.title}
                              </span>{' '}
                              Specialist
                            </h1>
                          </div>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700">
                                First name
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700">
                                Last name
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="work_email"
                                className="block text-sm font-medium text-gray-700">
                                Work Email
                              </label>
                              <input
                                type="text"
                                name="work_email"
                                id="work_email"
                                autoComplete="email"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6">
                              <label
                                htmlFor="program"
                                className="block text-sm font-medium text-gray-700">
                                Program
                              </label>
                              <select
                                id="program"
                                name="program"
                                defaultValue={program.title}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option value="Wels Wall Marina">
                                  West Wall Marina
                                </option>
                                <option value="Assistant Living Facility">
                                  Assistant Living Facility
                                </option>
                                <option value="Cargo & Logistics">
                                  Cargo & Logistics
                                </option>
                                <option value="Active Assailant">
                                  Active Assailant
                                </option>
                                <option value="Terrorism & Sabotage">
                                  Terrorism & Sabotage
                                </option>
                              </select>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="account_quantity"
                                className="block text-sm font-medium text-gray-700">
                                How Many Accounts Do You Have That Fit This
                                Program?
                              </label>
                              <select
                                id="account_quantity"
                                name="account_quantity"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10+</option>
                              </select>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="account_future"
                                className="block text-sm font-medium text-gray-700">
                                How Many of These Accounts Are Coming Up in the
                                Next 90 Days?
                              </label>
                              <select
                                id="account_future"
                                name="account_future"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                              </select>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="company"
                                className="block text-sm font-medium text-gray-700">
                                Company
                              </label>
                              <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6">
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700">
                                Phone
                              </label>
                              <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700">
                                State / Province
                              </label>
                              <select
                                id="state"
                                name="state"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-white text-center sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Request a Consultation
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-end">
            <div className="relative z-10">
              <div className="prose prose-xl md:max-w-lg">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Coverage
                </p>
                {<MDXRemote {...coverage} />}
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-lg mx-auto lg:mt-0 md:pt-28">
              <div className="relative bg-gray-50 rounded-lg shadow-2xl p-4 mb-8">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <div className="flex justify-between">
                      <img
                        src={program.image.url}
                        alt={program.title}
                        className="h-32 w-48 rounded m-2"
                      />
                      <img
                        src={program.image2.url}
                        alt={program.title}
                        className="h-32 w-48 rounded m-2"
                      />
                    </div>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto ">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl my-4">
              Highlights
            </h2>
            <div className="prose prose-xl max-w-none mt-2">
              {<MDXRemote {...highlights} />}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to learn more?</span>
            <span className="block text-indigo-600">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact-us">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Contact us{' '}
                  <MailIcon
                    className="ml-3 h-5 w-5 flex-shrink-0 text-gray-50"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
