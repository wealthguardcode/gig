import Card from './Card'

export default function SolutionsGrid({ rootSlug = 'programs', solutions }) {
  if (!rootSlug || !Array.isArray(solutions) || !solutions.length) {
    return null
  }

  return (
    <div className='grid grid-cols-1 gap-6 my-10 p-8 sm:grid-cols-2 md:grid-cols-3'>
      {solutions.map((program) => (
        <Card
          link={`/${rootSlug}/${program.slug}`}
          imageUrl={program.frontmatter.image}
          title={program.frontmatter.title}
          key={program.slug}></Card>
      ))}
    </div>
  )
}
