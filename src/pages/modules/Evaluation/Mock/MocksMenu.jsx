import { useNavigate } from 'react-router-dom'
import CardComponent from '../../../../components/Card'

const mocks = [
  {
    id: 1,
    title: 'SIMULACRO ENAM 2023 - OCT 22 - CONVENIO UAC',
    numberQuestions: '180',
    duration: '180',
  },
  {
    id: 2,
    title: 'SIMULACRO ENAM 2023 - OCT 16 - CONVENIO UAC',
    numberQuestions: '180',
    duration: '180',
  },
  {
    id: 3,
    title: ' SIMULACRO ESSALUD 16 OCT - CONVENIO UAC',
    numberQuestions: '180',
    duration: '180',
  },
]

export default function MockMenu() {
  const navigate = useNavigate()

  // Función para ir a las instrucciones del simulacro
  const goToMockInstructions = mock => {
    navigate(`/evaluaciones/simulacros/${mock.id}/instrucciones`)
  }

  // Función para ir a los resultados del simulacro
  const goToMockResults = mock => {
    navigate(`/evaluaciones/simulacros/${mock.id}/resultados`)
  }

  return (
    <div className=' space-y-10'>
      <CardComponent>
        <div>
          <div className='sm:flex-auto'>
            <h2 className='text-base font-semibold leading-6 text-gray-900'>
              Simulacros
            </h2>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
        <div className='-mx-4 mt-8 sm:-mx-0'>
          <table className='min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                  Título
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'>
                  # de preguntas
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'>
                  Duración
                </th>
                <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                  <span className='sr-only'>Empezar</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {mocks.map(mock => (
                <tr key={mock.title}>
                  <td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0'>
                    {mock.title}
                    <dl className='font-normal lg:hidden'>
                      <dt className='sr-only sm:hidden'>
                        # Preguntas - Duración
                      </dt>
                      <dd className='mt-1 truncate text-gray-500 sm:hidden'>
                        {mock.numberQuestions} preguntas -{' '}
                        {mock.numberQuestions} minutos
                      </dd>
                    </dl>
                  </td>
                  <td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
                    {mock.numberQuestions}
                  </td>
                  <td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
                    {mock.duration} minutos
                  </td>
                  <td className='py-4 pl-3 pr-4 space-x-3 text-center text-sm font-medium sm:pr-0'>
                    <button
                      onClick={() => goToMockInstructions(mock)}
                      className='text-indigo-600 hover:text-indigo-900'>
                      Empezar<span className='sr-only'>, {mock.title}</span>
                    </button>
                    <button
                      onClick={() => goToMockResults(mock)}
                      className='text-indigo-600 hover:text-indigo-900'>
                      Resultados<span className='sr-only'>, {mock.title}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardComponent>
    </div>
  )
}
