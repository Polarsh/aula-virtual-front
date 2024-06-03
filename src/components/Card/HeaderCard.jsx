export default function HeaderCardComponent({
  title = null,
  subtitle = null,
  buttonLabel = null,
  buttonFunction = null,
}) {
  return (
    <div>
      {(title || subtitle) && (
        <div className='-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap'>
          <div className='ml-4 mt-4'>
            {title && (
              <h3 className='text-base font-semibold leading-6 text-gray-900'>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className='mt-1 text-sm text-gray-500'>{subtitle}</p>
            )}
          </div>
          {buttonLabel && buttonFunction && (
            <div className='ml-4 mt-4 flex-shrink-0'>
              <button
                type='button'
                onClick={buttonFunction}
                className='relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
