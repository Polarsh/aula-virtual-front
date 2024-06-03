import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import ModalComponent from '../../../../../components/Modal/Modal'
import { getCardStyleByStatus } from '../../../../../utils/utils'

/* {
  "index": 1,
  "title": "¿Cuál es la molécula portadora de la información genética?",
  "image": "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg",
  "status": "Correcto",
  "selectedOption": { "id": "b", "label": "ADN" },
  "correctOption": { "id": "b", "label": "ADN" },
  "options": [
    { "id": "a", "label": "ARN" },
    { "id": "b", "label": "ADN" },
    { "id": "c", "label": "Proteína" }
  ]
}, */

export default function ViewQuestionModalComponent({ question, handleClose }) {
  const getMessage = status => {
    switch (status) {
      case 'Correcto':
        return '¡Enhorabuena! Has seleccionado la respuesta correcta.'
      case 'Incorrecto':
        return 'Respuesta incorrecta. Inténtalo de nuevo.'
      case 'No marcado':
        return 'No has marcado ninguna respuesta.'
      default:
        return ''
    }
  }

  const getOptionStyle = option => {
    if (question.selectedOption && option.id === question.selectedOption.id) {
      return getCardStyleByStatus(question.status)
    }

    if (
      (question.status === 'Incorrecto' || question.status === 'No marcado') &&
      option.id === question.correctOption.id
    ) {
      return 'bg-green-50 text-green-700 ring-green-600/20'
    }

    return 'bg-white text-gray-900 border-gray-300'
  }

  return (
    <ModalComponent isShow={true} handleClose={handleClose}>
      <div className='space-y-5'>
        <div className='font-bold text-xl text-gray-800'>
          Detalle de pregunta {question.index}
        </div>
        {/* Pregunta */}
        <div className='text-lg text-gray-700'>{question.title}</div>
        {/* Imagen */}
        {question.image && (
          <div className='flex justify-center items-center h-48'>
            <img
              src={question.image}
              alt='Imagen de pregunta'
              className='max-h-full max-w-full rounded-md shadow-md'
            />
          </div>
        )}
        {/* Opciones */}
        <div className='space-y-2'>
          {question.options.map(option => (
            <div
              key={option.id}
              className={`relative flex items-start p-2 border rounded-md ${getOptionStyle(option)}`}>
              <div className='text-sm leading-6 font-medium'>
                {option.label}
              </div>
            </div>
          ))}
        </div>
        {/* Mensaje */}
        <div
          className={`p-3 flex rounded-md text-center justify-center text-white font-bold ${question.status === 'Correcto' ? 'bg-green-500' : question.status === 'Incorrecto' ? 'bg-red-500' : 'bg-yellow-500'}`}>
          <div className='flex-shrink-0'>
            {question.status === 'Correcto' && (
              <CheckCircleIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            )}
            {question.status === 'Incorrecto' && (
              <XCircleIcon className='h-6 w-6 text-white' aria-hidden='true' />
            )}
            {question.status === 'No marcado' && (
              <ExclamationTriangleIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            )}
          </div>
          <div className='ml-1'>{getMessage(question.status)}</div>
        </div>
      </div>
    </ModalComponent>
  )
}
