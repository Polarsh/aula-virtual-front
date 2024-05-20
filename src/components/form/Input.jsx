export function FormInputComponent({
  label,
  type,
  name,
  value,
  error,
  placeholder,
  onChange,
  isDisabled = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={isDisabled}
          className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-my-primary sm:text-sm sm:leading-6 ${isDisabled ? 'bg-gray-200' : 'bg-white'}`}
        />
      </div>
      {error && (
        <span className='flex text-red-500 justify-start text-sm'>{error}</span>
      )}
    </div>
  )
}
