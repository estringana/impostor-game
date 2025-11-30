function Card({
  children,
  ...props
}) {
  return (
    <div className='w-full max-w-md px-6 py-8 text-center animate-fade-in-up'>
      {children}
    </div>
  )
}

export default Card
