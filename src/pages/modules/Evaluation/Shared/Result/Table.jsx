import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { getCardStyleByStatus } from '../../../../../utils/utils'

export default function TableResultExamComponent({
  questions,
  handleSelectedQuestion,
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Calcular los elementos actuales
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem)

  // Calcular el total de páginas
  const totalPages = Math.ceil(questions.length / itemsPerPage)

  // Funciones de cambio de página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <Fragment>
      <div className='flow-root'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              {/* Títulos */}
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                    Pregunta
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Respuesta marcada
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Respuesta correcta
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Estado
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Acciones</span>
                  </th>
                </tr>
              </thead>
              {/* Contenido */}
              <tbody className='divide-y divide-gray-200 bg-white'>
                {currentItems.map(question => (
                  <tr key={question.index}>
                    <td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
                      <div className='font-medium text-gray-900'>
                        {question.title}
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <div className='text-gray-900'>
                        {question.selectedOption
                          ? question.selectedOption.label
                          : ''}
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      {question.correctOption.label}
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span
                        className={`flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getCardStyleByStatus(question.status)}`}>
                        {question.status}
                      </span>
                    </td>
                    <td className='relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <EyeIcon
                        onClick={() => {
                          handleSelectedQuestion(question)
                        }}
                        className='h-5 w-5 text-indigo-500  hover:text-indigo-600 cursor-pointer transition duration-200'
                        aria-hidden='true'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Navegacion */}
      <div className='flow-root'>
        <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
          <div className='flex flex-1 justify-between sm:hidden'>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
              Anterior
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
              Siguiente
            </button>
          </div>
          <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm text-gray-700'>
                Mostrando{' '}
                <span className='font-medium'>{indexOfFirstItem + 1}</span> a{' '}
                <span className='font-medium'>
                  {Math.min(indexOfLastItem, questions.length)}
                </span>{' '}
                de <span className='font-medium'>{questions.length}</span>{' '}
                resultados
              </p>
            </div>
            <div>
              <nav
                className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                aria-label='Pagination'>
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
                  <span className='sr-only'>Anterior</span>
                  <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 focus:z-20 focus:outline-offset-0 ${
                      index + 1 === currentPage
                        ? 'z-10 bg-indigo-600 text-white'
                        : ''
                    }`}>
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
                  <span className='sr-only'>Siguiente</span>
                  <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
