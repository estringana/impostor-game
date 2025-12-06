function InputText({
  children,
  ...props
}) {
  return (
    <input type='text' className='flex-1 bg-gray-800 border border-gray-700
rounded-lg px-3 py-2 text-base
text-gray-100 placeholder-gray-500
focus:outline-none focus:ring-2 focus:ring-gray-500'  {...props} />
  )
}

export default InputText