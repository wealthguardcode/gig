import Layout from '../../components/Layout'
import { getProgram, getProgramsSlugs } from '../../lib/data'

export const getStaticPaths = async () => {
    const slugRes = await getProgramsSlugs()
    const slugs = slugRes.programs
  
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
      },
    }
  }

export default function ProgramPage({program}) {
    console.log(program)
    return (
        <Layout>
             <div className="relative bg-blue-400">
        <div className="absolute inset-0">
          <img
          className="w-full h-full object-cover"
          src={program.image.url}
          alt=""
        />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white  sm:text-5xl lg:text-6xl">
            {program.title}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-xl ">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vellectus nisl eget eget ut
            consectetur.
          </p>
        </div>
      </div>
        </Layout>
    )
}
