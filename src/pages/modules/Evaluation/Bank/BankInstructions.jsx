import { DocumentArrowDownIcon, PlayIcon } from '@heroicons/react/24/outline'
import CardComponent from '../../../../components/Card/Card'
import ButtonComponent from '../../../../components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormSelectComponent } from '../../../../components/form/Select'

const generalInstructions = [
  {
    text: 'Revisa tu conexión a internet con antelación para asegurar una conexión estable durante el simulacro.',
    bold: ['Revisa tu conexión a internet', 'asegurar una conexión estable'],
  },
  {
    text: 'Si utilizas una computadora, cierra pestañas, ventanas o programas innecesarios para evitar distracciones.',
    bold: ['cierra pestañas, ventanas o programas innecesarios'],
  },
  {
    text: 'Si realizas el simulacro desde un celular, encuentra un lugar cómodo donde puedas apoyar el dispositivo, asegúrate de que la batería esté completa y ten el cargador a mano.',
    bold: [
      'encuentra un lugar cómodo',
      'asegúrate de que la batería esté completa',
    ],
  },
  {
    text: 'Al comenzar el simulacro, revisa los criterios de evaluación, la cantidad de preguntas y el tiempo disponible.',
    bold: ['revisa los criterios de evaluación'],
  },
  {
    text: 'Organiza tu tiempo durante el examen para completar todas las preguntas dentro del tiempo límite.',
    bold: ['Organiza tu tiempo'],
  },
  {
    text: 'Lee cada pregunta detenidamente para responder correctamente.',
    bold: ['Lee cada pregunta detenidamente'],
  },
  {
    text: 'Si no sabes la respuesta a una pregunta, sigue adelante y vuelve a ella después para dedicarle más tiempo.',
    bold: ['sigue adelante y vuelve a ella después'],
  },
  {
    text: "Recuerda que debes guardar tus respuestas primero, luego presionar 'Terminar el Simulacro' y 'Confirmar la Acción' para completar la entrega. No cierres el simulacro sin asegurar el envío.",
    bold: [
      'guardar tus respuestas primero',
      "'Terminar el Simulacro'",
      "'Confirmar la Acción'",
      'No cierres el simulacro sin asegurar el envío',
    ],
  },
]

const specificInstructions = [
  {
    text: 'Una vez iniciado el simulacro, contesta todas las preguntas y da clic en el botón "Terminar el Simulacro" y confirma la acción para finalizar.',
    bold: [
      'contesta todas las preguntas',
      'da clic en el botón "Terminar el Simulacro"',
      'confirma la acción para finalizar',
    ],
  },
  {
    text: 'Para guardar la respuesta marcada de cada pregunta, da clic en el botón "Guardar y Siguiente".',
    bold: ['da clic en el botón "Guardar y Siguiente"'],
  },
  {
    text: 'Ten en cuenta que, al finalizar el tiempo del simulacro, el sistema concluirá el proceso automáticamente.',
    bold: [
      'al finalizar el tiempo del simulacro',
      'el sistema concluirá el proceso automáticamente',
    ],
  },
]

const renderInstruction = instruction => {
  const { text, bold } = instruction

  // Split the text by the bold parts
  const parts = text.split(new RegExp(`(${bold.join('|')})`, 'g'))

  return parts.map((part, index) =>
    bold.includes(part) ? (
      <span key={index} className='font-bold'>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  )
}

const initialForm = {
  topic: '',
  number: '',
  time: '',
}

const optionsList = {
  /* Personal */
  topic: ['Infectología', 'Ginecología', 'Obstetricia'],
  number: [10, 15, 20],
  time: [20, 25, 30],
}

const validateForm = form => {
  const errors = {}

  // Función de validación genérica para campos requeridos
  const validateRequiredField = (fieldName, message) => {
    if (!form[fieldName] || form[fieldName].trim() === '') {
      errors[fieldName] = message || 'Es obligatorio'
    }
  }

  // Validaciones específicas para cada campo
  validateRequiredField('topic')
  validateRequiredField('number')
  validateRequiredField('time')

  return errors
}

export default function BankInstructionsPage() {
  const [examConfig, setExamConfig] = useState(initialForm)
  const [errors, setErrors] = useState(initialForm)

  const navigate = useNavigate()

  const handleStartBankExam = event => {
    event.preventDefault()

    const errors = validateForm(examConfig)

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    } else {
      setErrors(initialForm)
    }

    try {
      console.log('examConfig: ', examConfig)

      navigate(`/evaluaciones/banqueo/1/pregunta/1`)

      /* await signUpuser(userData, password) */

      // Regresar
      // navigate('/user/usuarios/useristradores')
    } catch (error) {
      console.error('Error al registrar usuario:', error)
    }
  }

  const renderInstructionList = instructions => (
    <ul className='list-disc pl-5'>
      {instructions.map((instruction, index) => (
        <li key={index} className='mb-2 text-sm text-justify'>
          {renderInstruction(instruction)}
        </li>
      ))}
    </ul>
  )

  const handleChange = event => {
    setExamConfig({
      ...examConfig,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
        Iniciar banco de preguntas
      </h2>

      <CardComponent>
        <div className='font-bold text-xl'>Configuración</div>
        {/* Forms */}
        <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          {/* Tema */}
          <div className='sm:col-span-2'>
            <FormSelectComponent
              label='Tema'
              name='topic'
              value={examConfig.topic}
              error={errors.topic}
              onChange={handleChange}
              options={optionsList.topic}
            />
          </div>
          {/* Cantidad de preguntas */}
          <div className='sm:col-span-2'>
            <FormSelectComponent
              label='Cantidad de preguntas'
              name='number'
              value={examConfig.number}
              error={errors.number}
              onChange={handleChange}
              options={optionsList.number}
            />
          </div>
          {/* Minutos */}
          <div className='sm:col-span-2'>
            <FormSelectComponent
              label='Minutos'
              name='time'
              value={examConfig.time}
              error={errors.time}
              onChange={handleChange}
              options={optionsList.time}
            />
          </div>
        </div>
      </CardComponent>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <CardComponent>
          <div className='mb-5 font-bold text-xl'>Instrucciones generales</div>
          {renderInstructionList(generalInstructions)}
        </CardComponent>

        <CardComponent>
          <div className='mb-5 font-bold text-xl'>
            Instrucciones específicas
          </div>
          {renderInstructionList(specificInstructions)}

          <div className='mt-8 flex flex-col space-y-4'>
            <ButtonComponent
              label='Empezar'
              icon={PlayIcon}
              onClick={handleStartBankExam}
              textColor='text-white'
              bgColor='bg-my-primary'
              hoverColor='bg-my-secondary'
            />
            <ButtonComponent
              label='Descargar PDF de evaluación'
              icon={DocumentArrowDownIcon}
              onClick={() => console.log('Descargar PDF clicado')}
            />
          </div>
        </CardComponent>
      </div>
    </div>
  )
}
