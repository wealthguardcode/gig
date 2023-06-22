import { classNames } from '../../utils/helpers'

export default function UnorderedList({ className, ...props }) {
  return (
    <ul className={classNames('text-md md:text-lg', className)} {...props} />
  )
}
