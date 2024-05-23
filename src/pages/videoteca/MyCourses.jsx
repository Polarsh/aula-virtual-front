import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

export default function MyCoursesPage() {
  const { coursesList } = useApp()

  return (
    <div className='shadow border rounded-md'>
      <div className='mx-auto px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 text-base leading-7 lg:mx-0 lg:max-w-none'>
        {coursesList.map((course, index) => (
          <Link
            key={course.name}
            to={course.to}
            className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
            <div className='relative bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56'>
              <img
                src='/background.svg'
                alt={course.imageAlt}
                className='h-full w-full object-cover object-center sm:h-full sm:w-full'
              />
              <div className='absolute inset-0 flex items-center justify-center text-center text-white text-4xl px-6 font-bold'>
                {course.name}
              </div>
            </div>

            <div className='flex flex-1 flex-col space-y-2 p-4'>
              <h3 className='text-base font-bold text-my-primary'>
                <span aria-hidden='true' className='absolute inset-0' />
                {course.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
