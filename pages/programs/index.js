import Layout from '../../components/Layout'
import { getPrograms } from '../../lib/data'
import Link from 'next/link'

export const getStaticProps = async () => {
  const data = await getPrograms()
  console.log(data)
  const programs = data.programs
  return {
    props: {
      programs,
    },
  }
}

export default function ProgramsPage({ programs }) {
  console.log(programs)
  return (
    <Layout>
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          {/* <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        /> */}
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vellectus nisl eget eget ut
            consectetur.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="p-8 my-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.slug}
              className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col ">
              <Link href={`/programs/${program.slug}`} passHref>
              <a>
              <img
                  className="w-64 h-40 flex-shrink-0 mx-auto rounded"
                  src={program.image.url}
                  alt=""
                />
              </a>
                
                </Link>
                <Link href={`/programs/${program.slug}`} passHref>
              <a>
                <h3 className="my-3 text-gray-900 text-lg font-medium">
                  {program.title}
                </h3>
                </a>
                </Link>
              </div>
             
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
