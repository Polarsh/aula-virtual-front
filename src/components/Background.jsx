export default function BackgroundComponent({
  children,
  image = null,
  borders = false,
}) {
  return (
    <div>
      {/* Hero section */}
      <div className='relative isolate overflow-hidden bg-gray-900 '>
        {/* Imagen */}
        <img
          src={image}
          alt='background image'
          className='absolute inset-0 -z-10 h-full w-full object-cover'
        />
        {/* Fondo */}
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        {/* Borde superior */}
        {borders && (
          <svg
            className='hidden h-12 w-full transform fill-my-secondary lg:block'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'>
            <polygon points='0,0 100,0 90,100 0,0' />
            <polygon points='0,0 100,0 90,80 0,0' className='fill-white' />
          </svg>
        )}

        {/* Texto */}
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto py-8 sm:py-12 lg:py-16'>{children}</div>
        </div>

        {/* Borde inferior */}
        {borders && (
          <svg
            className='hidden h-12 w-full transform fill-my-secondary lg:block'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'>
            <polygon points='100,100 0,100 10,0 100,100' />
            <polygon
              points='100,100 0,100 10,20 100,100'
              className='fill-white'
            />
          </svg>
        )}
      </div>
    </div>
  )
}
