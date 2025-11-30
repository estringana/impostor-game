function WarningButton({
  children,
  ...props
}) {
  return (
      <button className="inline-flex items-center justify-center w-full max-w-xs mx-auto
rounded-xl px-6 py-3.5 text-base font-semibold
bg-red-500 text-white hover:bg-red-600
transition-colors duration-150 hover:opacity-90
disabled:bg-red-400 disabled:text-red-100
disabled:opacity-70 disabled:cursor-not-allowed
active:scale-[0.97]"  {...props}>{children}</button>
  )
}

export default WarningButton
