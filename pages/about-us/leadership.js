import Layout from '../../components/Layout'

const people = [
  {
    name: 'Joseph O’Connor',
    role: 'Chief Underwriting Officer',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/9RaLqgeQIigwLGo4yek7',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Alexandria Cantrell',
    role: 'Director of Underwriting Programs',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/78a3p2VNTfi2Q0AXAVnc',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Jaime Calhoun',
    role: 'Accounting',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/2VtKDuTiijbnjT6BTQxQ',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Theresa Elkins',
    role: 'Contracting & Broker Support',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/fUJNTDpTTLuS66I0hOGT',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Sam Klepper',
    role: 'Creative & Graphic Designer',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/fUJNTDpTTLuS66I0hOGT',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Jeff Fluker',
    role: 'Sales',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/Me8VDakpR1CLJrmh0Zrh',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Lita Trahan',
    role: 'Sales',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/5IGMKr3nRiO4Hpoq00uE',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
]

export default function leadership() {
  return (
    <Layout>
      <div>
        {/* Hero */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="w-full mx-auto">
            <div className="relative shadow-xl  sm:overflow-hidden">
              <div className="absolute  inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt="GIG Leadership"
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className=" text-indigo-200"> Leadership</span>
                </h1>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Leadership / Team */}
        <div className="bg-white">
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
                      <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
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
