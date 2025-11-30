function SmallText({
  children,
  ...props
}) {
  return (
      <p className='text-center text-sm text-gray-400 mb-2'  {...props}>{children}</p>
  )
}

export default SmallText
