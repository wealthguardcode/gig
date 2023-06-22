import { classNames } from '../../utils/helpers'

export default function Text({ className, ...props }) {
  return (
    <p className={classNames('text-md md:text-lg', className)} {...props} />
  )
}
