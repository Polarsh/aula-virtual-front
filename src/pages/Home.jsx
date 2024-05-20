export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <div className='relative isolate overflow-hidden bg-gray-900 pb-16 pt-16 sm:pb-20'>
        <img
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover'
        />
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
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Prepárate para tu futuro como médico
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Nuestro aula virtual ofrece una experiencia de aprendizaje
                completa para ayudarte a prepararte para tu examen y alcanzar tu
                sueño de convertirte en doctor.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>
                  ¡Comienza ahora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cursos section */}
      {/* <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-my-primary'>
              Cursos
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Conoce sobre nuestros cursos
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 place-content-between lg:max-w-none lg:grid-cols-4'>
              {coursesList.map(feature => (
                <div key={feature.name} className='flex flex-col items-center'>
                  <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                    <div className='bg-gray-100 p-2 rounded-lg text-center'>
                      <feature.icon
                        className=' h-48 w-48 flex-none text-my-primary'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div> */}

      {/* Services section */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-my-primary'>
            Servicios
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Conoce sobre nuestros servicios
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
            {/* {servicesList.map(feature => (
              <div key={feature.name} className='flex flex-col items-center'>
                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                  <div className='bg-gray-100 p-2 rounded-lg text-center'>
                    {renderIcon(feature.icon)}

                    {feature.name}
                  </div>
                </dt>
              </div>
            ))} */}
          </dl>
        </div>
      </div>

      {/* Estadisticas */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-my-primary'>
            Estadisticas
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Nuestra Experiencia
          </p>
        </div>
        <div className='mx-auto mt-8 max-w-2xl lg:max-w-none'>
          <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
            {/* {statsList.map(stat => (
              <div key={stat.name} className='flex flex-col p-8'>
                <dt className='text-sm font-semibold leading-6 text-gray-600'>
                  {stat.name}
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900'>
                  {stat.value}
                </dd>
              </div>
            ))} */}
          </dl>
        </div>
      </div>

      {/* Testimonios */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
            Testimonios
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Hemos trabajado con miles de personas increíbles
          </p>
        </div>
        <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
            {/* {testimonialsList.map(testimonial => (
              <div
                key={testimonial.author.name}
                className='pt-8 sm:inline-block sm:w-full sm:px-4'>
                <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6'>
                  <blockquote className='text-gray-900'>
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className='mt-6 flex items-center gap-x-4'>
                    <img
                      className='h-10 w-10 rounded-full bg-gray-50'
                      src={testimonial.author.imageUrl}
                      alt=''
                    />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.author.name}
                      </div>
                      <div className='text-gray-600'>{testimonial.course}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}
