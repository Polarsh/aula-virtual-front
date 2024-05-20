import { Link } from 'react-router-dom'

function ServicesDataComponent({ service }) {
  return (
    <div>
      <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
        <service.icon
          className='h-5 w-5 flex-none text-my-primary'
          aria-hidden='true'
        />
        {service.name}
      </dt>
      <dd className=' mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
        <p className='flex-auto text-justify'>{service.description}</p>
        <p className='mt-6'>
          <Link
            to={service.to}
            className='text-sm flex justify-end font-semibold leading-6 text-my-primary hover:text-my-secondary'>
            Más información <span aria-hidden='true'>→</span>
          </Link>
        </p>
      </dd>
    </div>
  )
}

export default ServicesDataComponent
