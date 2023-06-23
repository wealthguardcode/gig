import fs from 'fs'
import path from 'path'

export async function getMarkdown(resource) {
  const fs = require('fs/promises')
  const path = require('path')

  const dir = path.join('pages', resource)

  const files = await fs.readdir(dir)

  const promiseArray = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map(async (filename) => {
      const slug = filename.replace('.mdx', '')

      const { meta } = await require(`../pages/${resource}/${filename}`)

      return {
        slug,
        frontmatter: meta,
      }
    })

  return await Promise.all(promiseArray)
}
