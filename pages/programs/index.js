import Layout from "../../components/Layout";
// import { getPrograms } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { getPrograms } from "../../lib/programs";

// export const getStaticProps = async () => {
//   const data = await getPrograms()
//   // console.log(data)
//   const programs = data.programs
//   return {
//     props: {
//       programs,
//     },
//   }
// }

export default function ProgramsPage({ programs }) {
  // console.log(programs);
  return (
    <Layout title="WIG | Our Programs">
      <div className="relative bg-gray-400">
        <div className="absolute inset-0">
          <Image
            src="/images/programs-hero.jpeg"
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            blurDataURL
            alt="GoGuard's Programs"
          />
          <div
            className="absolute inset-0 bg-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            We have years of insurance experience helping carriers and brokers
            provide solutions to their clients. Experience the difference of
            WealthGuard&apos;s newest Programs and Binding Authority division.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="p-8 my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((program) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-xl mx-auto hover:shadow-2xl border hover:border-red-400 dark:hover:border-red-600 dark:bg-gray-900 transform transition duration-500 md:hover:scale-110 hover:scale-105"
            key={program.slug}
          >
            <Link href={`/programs/${program.slug}`} passHref>
              <a>
                <Image
                  className="w-full"
                  src={program.frontmatter.image}
                  height={300}
                  width={400}
                  priority={true}
                  placeholder="blur"
                  blurDataURL
                  alt={program.frontmatter.title}
                />
              </a>
            </Link>
            <div className="px-6 py-4 flex flex-col items-center">
              <Link href={`/programs/${program.slug}`} passHref>
                <a>
                  <div className="font-bold mb-2 text-center dark:text-gray-300">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-xl leading-4 font-medium rounded-md text-white bg-red-500 dark:bg-red-700 dark:text-white hover:bg-red-700 dark:hover:bg-red-500 dark:hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {program.frontmatter.title}{" "}
                      <span>
                        <ExternalLinkIcon className="ml-1" height={20} />
                      </span>
                    </button>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-red-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to learn more?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Do not hesitate to reach out to us with your questions or concerns
            today.
          </p>
          <Link href="/contact-us">
            <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 sm:w-auto">
              Contact us{" "}
              <MailIcon
                className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      programs: getPrograms(),
    },
  };
}
