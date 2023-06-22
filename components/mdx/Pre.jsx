import { classNames } from '../../utils/helpers'

export default function Pre({ className, ...props }) {
  return <pre className={classNames(className)} {...props} />
}
