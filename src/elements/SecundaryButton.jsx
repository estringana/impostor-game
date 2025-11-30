function SecundaryButton({
  children,
  ...props
}) {
  return (
      <button className="inline-flex items-center justify-center
rounded-lg px-3 py-2 text-sm font-medium
bg-gray-700 text-gray-100 hover:bg-gray-600
transition-colors duration-150 active:scale-[0.97]
disabled:opacity-50 disabled:cursor-not-allowed"  {...props}>{children}</button>
  )
}

export default SecundaryButton
