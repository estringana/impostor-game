function Title({
  children,
  ...props
}) {
  return (
      <h1 className='text-4xl font-bold mb-6'  {...props}>{children}</h1>
  )
}

export default Title
