import Layout from '../../components/Layout'
import { MailIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const people = [
  {
    name: "Joseph O'Connor",
    role: 'Chief Underwriting Officer / Principal',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/MgIE76sSmmMepxXOCgtg',
    bio: 'Joseph is a Partner and acts as the Chief Underwriting Officer for our new in-house underwriting unit.  He has over 30 years of successful global underwriting and executive management experience.  He has held senior positions with several large international carriers as well as two start-up ventures that later went public.  His unique multiline expertise, recognized leadership and strong relationships with key trading partners has helped WealthGuard rapidly develop and grow our specialty programs offering.',
    contact: 'joseph@wealthguardig.com',
  },
  {
    name: 'Alexandria Cantrell',
    role: 'Director of Underwriting Operations',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/78a3p2VNTfi2Q0AXAVnc',
    bio: 'Alexandria is our Director of Underwriting Operations. Alexandria is an LSU Graduate and resides in the Houston area. She started her insurance career with a large regional wholesaler and has held several different positions with the programs and binding authority department. Alexandria now has oversight of the underwriting workflow operation for WealthGuard.',
    contact: 'alexandria@wealthguardig.com',
  },
  {
    name: 'Jaime Calhoun',
    role: 'Accounting',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/2VtKDuTiijbnjT6BTQxQ',
    bio: 'Jaime is the founder of WealthGuard and is our Chief Financial Officer.   Jaime began her career early on as her father, Johnny Graves, owned and operated an independent agency in Nacogdoches, Texas.  She founded WealthGuard with the principals of her dad, "provide the best experience to your clients and more importantly, get to know them".',
    contact: 'jaime@wealthguardig.com',
  },
  {
    name: 'Theresa Elkins',
    role: 'Contracting & Broker Support',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/fUJNTDpTTLuS66I0hOGT',
    bio: 'Theresa has been with leadership for 10+ years and oversees our broker experience.  She ensures each broker appointed to our company has a smooth experience and is available to assist with any administrative need for you and your agency.',
    contact: 'theresa@wealthguardig.com',
  },
  {
    name: 'Samuel Klepper',
    role: 'Web Dev / Graphic Design',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/nVMFnTnbT4mqjz6YkwQ6',
    bio: 'Sam is a Full-Stack Web Developer that graduated from Digital Crafts coding bootcamp. Sam has partnered with numerous local businesses to help bring their ideas to fruition and maintain their websites. Previously, Sam graduated from HCC with a degree in Graphic Design, to which assists in completing the package in creating robust, data-driven websites.',
    contact: 'sam@wealthguardig.com',
  },
  {
    name: 'Jeffrey Fluker',
    role: ' Senior Account Executive',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/Me8VDakpR1CLJrmh0Zrh',
    bio: 'Jeffrey is a specialist who takes pride in the “details”. He has a personal interest in helping each broker succeed. When not working, you will find Jeffrey supporting the community, with a special interest in FFA and local associations.',
    contact: 'jeff@wealthguardig.com',
  },
  {
    name: 'Lita Trahan',
    role: 'Account Executive',
    imageUrl:
      'https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/Dr4QKMmERgqRazNX3sDs',
    bio: 'Lita is our newest Account Executive. She brings a fiery passion to exceed expectations and will work tirelessly to deliver the best experience you will find.',
    contact: 'lita@wealthguardigig.com',
  },
]

export default function leadership() {
  return (
    <Layout title='WIG | Leadership'>
      <div>
        {/* Hero */}
        <div className='relative bg-gray-400'>
          <div className='absolute inset-0'>
            <Image
              className='w-full h-full object-cover'
              src='https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/6gW60WjTTqiZaNhfQOBD'
              layout='fill'
              objectFit='cover'
              priority={true}
              placeholder='blur'
              blurDataURL
              alt="Wealthguard's Leadership"
            />
            <div
              className='absolute inset-0 bg-gray-400 mix-blend-multiply'
              aria-hidden='true'
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
                {people.map((person) => (
                  <li key={person.name}>
                    <div className='space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 dark:text-gray-400'>
                      <div className='h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 bg-white dark:bg-gray-800'>
                        <Image
                          className='md:object-cover object-contain md:shadow-lg rounded-lg'
                          layout='fill'
                          objectFit='cover'
                          placeholder='blur'
                          blurDataURL
                          src={person.imageUrl}
                          alt={person.name}
                        />
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='space-y-4'>
                          <div className='text-2xl leading-6 font-medium space-y-1'>
                            <h3>{person.name}</h3>
                            <p className='text-xl text-red-700'>
                              {person.role}
                            </p>
                            <dl className='mt-2 '>
                              <dt>
                                <span className='sr-only'>Email</span>
                              </dt>
                              <dd className='flex text-base text-teal-50 group'>
                                <MailIcon
                                  className='flex-shrink-0 w-6 h-6 group-hover:text-red-600'
                                  aria-hidden='true'
                                />
                                <a
                                  className='text-gray-500 hover:text-red-600'
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
