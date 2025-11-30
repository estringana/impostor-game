function SecundaryButton({
  children,
  ...props
}) {
  return (
      <button className="inline-flex items-center justify-center
rounded-md px-2 py-1 text-xs font-medium
bg-gray-700 text-gray-100 hover:bg-gray-600
transition-colors"  {...props}>{children}</button>
  )
}

export default SecundaryButton
