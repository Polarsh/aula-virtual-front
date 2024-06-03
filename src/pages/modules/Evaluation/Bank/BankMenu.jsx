import { useNavigate } from 'react-router-dom'
import CardComponent from '../../../../components/Card/Card'
import BankMenuJson from '../../../../json/responses/bankMenu.json'
import { useState } from 'react'
import HeaderCardComponent from '../../../../components/Card/HeaderCard'

const BankMenuTable = ({ banks, onGoToResults }) => (
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
            <span className='sr-only'>Acciones</span>
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 bg-white'>
        {banks.map(bank => (
          <tr key={bank.id}>
            <td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0'>
              {bank.title}
              <dl className='font-normal lg:hidden'>
                <dt className='sr-only sm:hidden'># Preguntas - Duración</dt>
                <dd className='mt-1 truncate text-gray-500 sm:hidden'>
                  {bank.totalQuestion} preguntas - {bank.duration} minutos
                </dd>
              </dl>
            </td>
            <td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
              {bank.totalQuestion}
            </td>
            <td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
              {bank.duration} minutos
            </td>
            <td className='py-4 pl-3 pr-4 space-x-3 text-center text-sm font-medium sm:pr-0'>
              <button
                onClick={() => onGoToResults(bank)}
                className='text-indigo-600 hover:text-indigo-900'>
                Resultados<span className='sr-only'>, {bank.title}</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const BankMenu = () => {
  const [BankMenuData] = useState(BankMenuJson)
  const navigate = useNavigate()

  const handleGoToNewBank = () => {
    navigate(`/evaluaciones/banqueo/instrucciones`)
  }

  const handleGoToResults = bank => {
    navigate(`/evaluaciones/banqueo/${bank.id}/resultados`)
  }

  return (
    <div className='space-y-10'>
      <CardComponent>
        <HeaderCardComponent
          title={'Banco de preguntas'}
          subtitle={'Estas son los bancos de preguntas realizados por tí'}
          buttonLabel={'Nuevo'}
          buttonFunction={handleGoToNewBank}
        />
        <BankMenuTable
          banks={BankMenuData.banks}
          onGoToResults={handleGoToResults}
        />
      </CardComponent>
    </div>
  )
}

export default BankMenu
