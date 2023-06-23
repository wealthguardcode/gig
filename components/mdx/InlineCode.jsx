import { classNames } from '../../utils/helpers'

export default function InlineCode({ className, ...props }) {
  return <code className={classNames(className)} {...props} />
}
