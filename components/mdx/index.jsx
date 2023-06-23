import Heading from './Heading'
import InlineCode from './InlineCode'
import Link from './Link'
import ListItem from './ListItem'
import Pre from './Pre'
import ResponsiveImage from './ResponsiveImage'
import Text from './Text'
import UnorderedList from './UnorderedList'

export const mdxComponents = {
  a: Link,
  code: InlineCode,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  img: ResponsiveImage,
  li: ListItem,
  p: Text,
  pre: Pre,
  ul: UnorderedList,
}
