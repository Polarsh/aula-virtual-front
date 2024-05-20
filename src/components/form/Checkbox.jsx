export function FormCheckBoxComponent({
  children,
  name,
  value,
  error,
  onChange,
}) {
  return (
    <div>
      <div className='relative flex gap-x-3'>
        <div className='flex h-6 items-center'>
          <input
            type='checkbox'
            name={name}
            value={value}
            id={name}
            onChange={onChange}
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
          />
        </div>
        <div className='text-sm leading-6'>
          <label className='font-medium text-gray-900'>{children}</label>
        </div>
      </div>
      {error && (
        <span className='flex text-red-500 justify-start text-sm'>{error}</span>
      )}
    </div>
  )
}
