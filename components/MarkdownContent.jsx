import { marked } from 'marked'

export default function MarkdownContent({ content }) {
  return (
    <div
      className='prose text-md md:text-lg dark:text-gray-400'
      dangerouslySetInnerHTML={{
        __html: marked.parse(content, { headerIds: false, mangle: false }),
      }}
    />
  )
}
