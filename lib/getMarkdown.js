import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getMarkdown(resource) {
  let result = []

  const dir = path.join('markdown', resource)

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)

    result = files.map((filename) => {
      const slug = filename.replace('.md', '')

      const markdownWithMeta = fs.readFileSync(
        path.join('markdown', resource, filename),
        'utf-8'
      )

      const { data: frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter,
      }
    })
  }

  return result
}
