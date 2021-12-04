import Layout from '../../components/Layout'
import { Parallax } from 'react-scroll-parallax'

const people = [
  {
    name: 'Joseph O’Connor',
    role: 'Chief Underwriting Officer',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/MgIE76sSmmMepxXOCgtg',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Alexandria Cantrell',
    role: 'Director of Underwriting Programs',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/78a3p2VNTfi2Q0AXAVnc',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Jaime Calhoun',
    role: 'Accounting',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/2VtKDuTiijbnjT6BTQxQ',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Theresa Elkins',
    role: 'Contracting & Broker Support',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/fUJNTDpTTLuS66I0hOGT',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Sam Klepper',
    role: 'Full Stack Web Developer',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/pDpAofQ3SNWkK15XOqjh',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Jeff Fluker',
    role: 'Sales',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/Me8VDakpR1CLJrmh0Zrh',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Lita Trahan',
    role: 'Sales',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/Dr4QKMmERgqRazNX3sDs',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
]

export default function leadership() {
  return (
    <Layout>
      <div>
        {/* Hero */}

        <div className="relative bg-indigo-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center h-full mb-12 bg-fixed bg-center bg-cover leadership-img"></div>
            <div
              className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center tracking-tight text-white sm:text-5xl lg:text-6xl">
              Leadership
            </h1>
            <div className="border-t-4 w-1/5 mx-auto mt-2 py-2 border-white" />
          </div>
        </div>

        {/* Our Leadership / Team */}
        <div className="relative bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our leadership
              </h2>

              <ul
                role="list"
                className="space-y-12 lg:grid lg:grid-cols-1 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                      <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 bg-white">
                        <img
                          className="md:object-cover object-contain md:shadow-lg rounded-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                            <p className="text-indigo-600">{person.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
