import { classNames } from '../../utils/helpers'

export default function ListItem({ className, ...props }) {
  return (
    <li className={classNames('text-base md:text-lg', className)} {...props} />
  )
}
