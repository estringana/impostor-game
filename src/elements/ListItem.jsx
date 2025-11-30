function ListItem({
  key,
  children,
  ...props
}) {
  return (
    <div className='flex items-center justify-between
  w-full bg-gray-800 text-gray-100
  rounded-xl px-4 py-3
  active:scale-[0.98]
  transition-all duration-150
  hover:bg-gray-700' key={key} {...props}>
        {children}
    </div>
  )
}

export default ListItem
