function WarningButton({
  children,
  ...props
}) {
  return (
      <button className="inline-flex items-center justify-center w-full max-w-xs mx-auto
rounded-lg px-6 py-3 text-base font-semibold
bg-red-500 text-white hover:bg-red-600
transition-colors"  {...props}>{children}</button>
  )
}

export default WarningButton
