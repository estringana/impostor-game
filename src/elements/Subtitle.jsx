function Text({
  children,
  ...props
}) {
  return (
      <p className='text-xl font-semibold mb-6'  {...props}>{children}</p>
  )
}

export default Text
