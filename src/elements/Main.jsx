function Main({
  children,
  ...props
}) {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-50 flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Main
