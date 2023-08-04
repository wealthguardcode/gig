import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import Layout from '../../components/Layout'

const people = [
  {
    name: 'Michael Calhoun',
    role: 'Chief Executive Officer / Founder',
    imageUrl: '/images/headshots/michaelCalhoun.jpeg',
    bio: 'Michael is the Chief Executive Officer of WealthGuard. Prior to founding WealthGuard, he held executive leadership positions with Fortune 500 companies where he was primarily responsible for implementing growth and underwriting strategies to deliver profitability. A dynamic strategist, Michael understands the complexity of running large divisions for sales, product development, actuary/underwriting, and distribution. He has been instrumental in growing new lines of business and creating multiple distribution channels, while improving margins for existing lines of business with over $1 billion in annual revenue. He credits his family and co-workers for 100% of the success achieved.',
    contact: 'michael@wealthguardig.com',
  },
  {
    name: "Joseph O'Connor",
    role: 'Chief Underwriting Officer / Principal',
    imageUrl: '/images/headshots/josephOconnor.jpeg',
    bio: "Joseph is a Partner and acts as the Chief Underwriting Officer for WealthGuard's in-house underwriting unit. He has over 30 years of successful global underwriting and executive management experience. He has held senior positions with several large international carriers as well as two start-up ventures that later went public. His unique multiline expertise, recognized leadership and strong relationships with key trading partners has helped WealthGuard rapidly develop and grow our specialty programs offering.",
    contact: 'joseph@wealthguardig.com',
  },
  {
    name: 'Jaime Calhoun',
    role: 'Chief Financial Officer / Founder',
    imageUrl: '/images/headshots/jaimeCalhoun.jpeg',
    bio: 'Jaime is the founder of WealthGuard and is our Chief Financial Officer. Jaime began her career early on as her father, Johnny Graves, owned and operated an independent agency in Nacogdoches, Texas. She founded WealthGuard with the principals of her dad, "provide the best experience to your clients and more importantly, get to know them".',
    contact: 'jaime@wealthguardig.com',
  },
  {
    name: 'Rebecca Dias',
    role: 'Director of Marketing and Communications',
    imageUrl: '/images/headshots/rebeccaDias.jpeg',
    bio: 'Rebecca is the Director of Marketing and Communications at WealthGuard. Rebecca has a diverse background in marketing, design, publishing, and education in both US and international markets. She uses creative vision and technical problem solving to help brands achieve strategic objectives.',
    contact: 'rebecca@wealthguardig.com',
  },
  {
    name: 'Gerald Wertz',
    role: 'Account Manager / Underwriter',
    imageUrl: '/images/headshots/GeraldWertz.jpg',
    bio: 'Gerald works in account management and underwriting at WealthGuard. He joins WealthGuard from Liberty Mutual, where he worked as a Catastrophe Adjuster, and also worked in Project Management & Quality Assurance. Gerald graduated from Texas A&M University with a B.S. degree in Psychology. He also holds a certificate from Haag Engineering.',
    contact: 'gerald@wealthguardig.com',
  },
]

const heroImgUrl =
  'https://media.graphassets.com/output=format:jpg/resize=,height:800,fit:max/6gW60WjTTqiZaNhfQOBD'

export default function LeadershipPage() {
  return (
    <Layout title='WIG | Leadership'>
      <div>
        {/* Hero */}
        <div className='relative bg-gray-400'>
          <div className='absolute inset-0'>
            <Image
              src={heroImgUrl}
              alt="Wealthguard's Leadership"
              priority
              placeholder='blur'
              blurDataURL={heroImgUrl}
              fill
              className='object-cover w-full h-full'
            />
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-400 mix-blend-multiply'
            />
          </div>
          <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <h1 className='text-4xl text-center font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Leadership
            </h1>
            <div className='border-t-4 w-1/5 mx-auto mt-2 py-2 border-white' />
          </div>
        </div>

        {/* Our Leadership / Team */}
        <div className='relative bg-white dark:bg-gray-800'>
          <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
            <div className='space-y-12'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-300'>
                Meet our leadership
              </h2>

              <ul
                role='list'
                className='space-y-12 lg:grid lg:grid-cols-1 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0'>
                {people.map((person, personIndex) => (
                  <li key={person.name}>
                    <div className='space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 dark:text-gray-400'>
                      <div className='h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 bg-white dark:bg-gray-800'>
                        <Image
                          src={person.imageUrl}
                          alt={person.name}
                          priority={personIndex === 0}
                          placeholder='blur'
                          blurDataURL={person.imageUrl}
                          fill
                          sizes='(max-width: 639px) 600px, 512px'
                          className='object-cover rounded-lg md:shadow-lg'
                        />
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='space-y-4'>
                          <div className='text-2xl leading-6 font-medium space-y-1'>
                            <h3>{person.name}</h3>
                            <p className='text-xl text-red-700'>
                              {person.role}
                            </p>
                            <dl className='mt-2'>
                              <dt>
                                <span className='sr-only'>Email</span>
                              </dt>
                              <dd className='group flex text-base'>
                                <EnvelopeIcon
                                  aria-hidden='true'
                                  className='shrink-0 w-6 h-6 group-hover:text-red-600'
                                />
                                <a
                                  className='text-gray-500 group-hover:text-red-600'
                                  href={`mailto:${person.contact}`}
                                  target='_blank'
                                  rel='noreferrer'>
                                  <span className='ml-1'>{person.contact}</span>
                                </a>
                              </dd>
                            </dl>
                          </div>
                          <div className='prose-lg'>
                            <p className='text-gray-500 dark:text-gray-400'>
                              {person.bio}
                            </p>
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
