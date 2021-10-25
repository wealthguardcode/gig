import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BrokerBusinessTabs() {
  let [categories] = useState({
    Brokers: [
      {
        id: 1,
        title: 'For Brokers',
        image:
          'https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_1280.png',
        description:
          'Aenean dictum varius metus a imperdiet. Donec cursus nulla sem, ac bibendum elit laoreet nec. Nulla facilisi. Fusce tristique lacus enim, vitae mattis ex laoreet et. Fusce fringilla lacus et neque convallis, eu bibendum urna maximus.',
      },
    ],
    Businesses: [
      {
        id: 1,
        title: 'For Businesses',
        image:
          'https://cdn.pixabay.com/photo/2019/11/05/07/47/port-4602963_1280.jpg',
        description:
          'Aenean dictum varius metus a imperdiet. Donec cursus nulla sem, ac bibendum elit laoreet nec. Nulla facilisi. Fusce tristique lacus enim, vitae mattis ex laoreet et. Fusce fringilla lacus et neque convallis, eu bibendum urna maximus.',
      },
    ],
  })

  return (
    <div className="w-full  px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium bg-white shadow text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-blue-100 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-blue-500'
                )
              }>
              For {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}>
              <div className="grid grid-cols-1">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col md:flex-row md:justify-between relative p-3 rounded-md hover:bg-coolGray-100">
                    <div className="w-full">
                      <h3 className="text-3xl font-medium leading-5">
                        {post.title}
                      </h3>
                      <p>{post.description}</p>
                    </div>

                    <div className="">
                      <img
                        className="w-3/4 mx-auto"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>

                    {/* <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                      )}
                    /> */}
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
