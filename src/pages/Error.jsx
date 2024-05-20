import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8'>
      <p className='text-base font-semibold leading-8 text-my-primary'>404</p>
      <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
        Página no encontrada
      </h1>
      <p className='mt-6 text-base leading-7 text-gray-600'>
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <div className='mt-10'>
        <Link
          to={'/'}
          className='text-sm font-semibold leading-7 text-my-primary'>
          <span aria-hidden='true'>&larr;</span> Volver a inicio
        </Link>
      </div>
    </div>
  )
}
