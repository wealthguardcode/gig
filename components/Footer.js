const footerNavigation = {
  links: [
    { name: 'All Programs', href: '/programs' },
    { name: 'West Wall Marina', href: '/west-wall-marina' },
    { name: 'Assistant Living', href: '/assistant-living-facility' },
    { name: 'Cargo & Logistics', href: '/cargo-and-logistics' },
    { name: 'Active Assailant', href: '/active-assailant' },
    { name: 'Terrorism & Sabotage', href: '/terrorism-and-sabotage' },
  ],
  resources: [
    { name: 'Resources', href: '#' },
    { name: 'FAQ', href: '/faq' },
    // { name: 'Link 3', href: '#' },
    // { name: 'Link 4', href: '#' },
    // { name: 'Link 5', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '/about-us/about-us' },
    { name: 'Leadership', href: '/about-us/leadership' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Link 1', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-white border-t border-gray-200">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
            {/* Image section */}
            <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
              <img
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </div>

            {/* Sitemap sections */}
            <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 className="text-base font-medium tracking-wider text-gray-900">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.links.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:font-bold hover:text-blue-600 hover:bg-gray-100">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-wider text-gray-900">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.resources.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:font-bold hover:text-blue-600 hover:bg-gray-100">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium tracking-wider text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:font-bold hover:text-blue-600 hover:bg-gray-100">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest info & updates, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-10 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GoGuard Insurance Group, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
