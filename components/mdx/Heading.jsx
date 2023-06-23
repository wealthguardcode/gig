import { classNames } from '../../utils/helpers'

function H1({ className, ...props }) {
  return (
    <h1 className={classNames('text-3xl md:text-4xl', className)} {...props} />
  )
}

function H2({ className, ...props }) {
  return (
    <h2 className={classNames('text-2xl md:text-3xl', className)} {...props} />
  )
}

function H3({ className, ...props }) {
  return (
    <h3 className={classNames('text-xl md:text-2xl', className)} {...props} />
  )
}

function H4({ className, ...props }) {
  return (
    <h4 className={classNames('text-lg md:text-xl', className)} {...props} />
  )
}

function H5({ className, ...props }) {
  return (
    <h5 className={classNames('text-base md:text-lg', className)} {...props} />
  )
}

function H6({ className, ...props }) {
  return (
    <h6 className={classNames('text-sm md:text-base', className)} {...props} />
  )
}

const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export default Heading
