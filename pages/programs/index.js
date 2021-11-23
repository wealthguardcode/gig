import Layout from '../../components/Layout'
import { getPrograms } from '../../lib/data'
import Link from 'next/link'

export const getStaticProps = async () => {
  const data = await getPrograms()
  // console.log(data)
  const programs = data.programs
  return {
    props: {
      programs,
    },
  }
}

export default function ProgramsPage({ programs }) {
  // console.log(programs)
  return (
    <Layout title="GIG || Our Programs">
      <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/n8fvyRIWRuK9U3wCa2tT"
            alt="GoGuard's Programs"
          />
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
      <div className="p-8 my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((program) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto"
            key={program.slug}>
            <Link href={`/programs/${program.slug}`} passHref>
              <a>
                <img
                  className="w-full"
                  src={program.image.url}
                  alt={program.title}
                />
              </a>
            </Link>
            <div className="px-6 py-4">
              <Link href={`/programs/${program.slug}`} passHref>
                <a>
                  <div className="font-bold text-xl mb-2">{program.title}</div>
                </a>
              </Link>
              <p className="text-gray-700 text-base">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
