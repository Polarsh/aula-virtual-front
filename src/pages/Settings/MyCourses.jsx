import { useNavigate } from 'react-router-dom'
import CardComponent from '../../components/Card/Card'
import { formatPrice, getCardStyleByPercentage } from '../../utils/utils'

const response = {
  courses: [
    {
      name: 'Simulacros nacionales',
      acquisitionDate: '2024-06-11',
      price: 120,
      progressPercentage: 75,
    },
    {
      name: 'Ciencias básicas 2024',
      acquisitionDate: '2024-06-11',
      price: 150.0,
      progressPercentage: 50,
    },
    {
      name: 'Preinternado Anual 2024',
      acquisitionDate: '2024-06-11',
      price: 300.0,
      progressPercentage: 25,
    },
  ],
}

export default function MyCoursesPage() {
  const data = response

  const navigate = useNavigate()

  const handleGoToCourseShop = () => {
    navigate('/cursos')
  }

  return (
    <div>
      <CardComponent>
        <div className='lg:flex-auto'>
          <div className='mx-auto lg:mx-0 lg:max-w-none'>
            {/* Header */}
            <div className='sm:flex sm:items-center'>
              <div className='sm:flex-auto'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Mis cursos
                </h2>
              </div>
              <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                <button
                  type='button'
                  onClick={handleGoToCourseShop}
                  className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Comprar nuevo curso
                </button>
              </div>
            </div>
            {/* Tabla */}
            <div className='mt-6 border-t border-gray-200 leading-6'>
              {/* Header */}
              <div className='grid grid-cols-4 border-b border-gray-200'>
                <div className='col-span-3 sm:col-span-1'>
                  <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Curso
                  </div>
                </div>
                <div className='col-span-1 hidden sm:block'>
                  <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Fecha de compra
                  </div>
                </div>
                <div className='col-span-1 hidden sm:block'>
                  <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Precio
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='relative px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Porcentaje de avance
                  </div>
                </div>
              </div>
              {/* Contenido */}
              <div className=' divide-y divide-gray-200 '>
                {data.courses.map((course, index) => (
                  <div key={index} className='grid grid-cols-4'>
                    <div className='col-span-3 sm:col-span-1'>
                      <div className='px-3 py-5 text-sm font-medium text-gray-900'>
                        {course.name}
                        <span className='block sm:hidden'>
                          <p>{course.acquisitionDate}</p>
                          <p>{formatPrice(course.price)}</p>
                        </span>
                      </div>
                    </div>
                    <div className='col-span-1 hidden sm:block'>
                      <div className='px-3 py-5 text-sm text-gray-900'>
                        {course.acquisitionDate}
                      </div>
                    </div>
                    <div className='col-span-1 hidden sm:block'>
                      <div className='px-3 py-5 text-sm text-gray-900'>
                        {formatPrice(course.price)}
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <div className='relative whitespace-nowrap px-3 py-5 text-sm font-medium text-gray-900'>
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getCardStyleByPercentage(course.progressPercentage)}`}>
                          {course.progressPercentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  )
}
