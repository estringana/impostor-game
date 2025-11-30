function PrimaryButton({
  children,
  ...props
}) {
  return (
      <button className="inline-flex items-center justify-center w-full max-w-xs mx-auto
rounded-lg px-6 py-3 text-base font-semibold
bg-gray-100 text-gray-900 hover:bg-gray-200
transition-colors hover:opacity-90"  {...props}>{children}</button>
  )
}

export default PrimaryButton
