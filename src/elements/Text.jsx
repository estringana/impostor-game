function Text({
  children,
  ...props
}) {
  return (
      <p className='text-base text-gray-200 mb-6'  {...props}>{children}</p>
  )
}

export default Text
