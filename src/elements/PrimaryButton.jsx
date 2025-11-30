function PrimaryButton({
  children,
  ...props
}) {
  return (
    <button className="inline-flex items-center justify-center w-full max-w-xs mx-auto
rounded-xl px-6 py-3.5 text-base font-semibold
bg-gray-100 text-gray-900 hover:bg-gray-200
transition-colors duration-150 hover:opacity-90
disabled:bg-gray-500 disabled:text-gray-300
disabled:opacity-60 disabled:cursor-not-allowed
active:scale-[0.97]"  {...props}>{children}</button>
  )
}

export default PrimaryButton
