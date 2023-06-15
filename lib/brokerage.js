import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const files = fs.readdirSync(path.join('markdown', 'brokerage'))

export function getBrokerage() {
  const programs = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('markdown', 'brokerage', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return programs
}
