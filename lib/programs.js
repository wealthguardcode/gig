import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const files = fs.readdirSync(path.join('programs'))

export function getPrograms(type) {
  const programs = files
    .map((filename) => {
      const slug = filename.replace('.md', '')

      const markdownWithMeta = fs.readFileSync(
        path.join('programs', filename),
        'utf-8'
      )

      const { data: frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter,
      }
    })
    .filter(({ frontmatter }) => {
      if (type === 'brokerage') {
        return frontmatter.type === 'brokerage'
      } else {
        return !frontmatter.type || frontmatter.type !== 'brokerage'
      }
    })

  return programs
}
