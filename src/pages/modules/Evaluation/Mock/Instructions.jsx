import { DocumentArrowDownIcon, PlayIcon } from '@heroicons/react/24/outline'
import CardComponent from '../../../../components/Card'
import ButtonComponent from '../../../../components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

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

export default function InstructionsPage() {
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

  const navigate = useNavigate()

  const handleStarMockExam = () => {
    navigate(`/evaluaciones/simulacros/1/pregunta/1`)
  }

  return (
    <div className=' space-y-8'>
      {/* Titulo */}
      <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight'>
        SIMULACRO ENAM 2023 - OCT 22 - CONVENIO UAC - PARTE A
      </h2>
      {/* Contenido */}
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
        <CardComponent>
          <div className='mb-5 font-bold text-xl'>Instrucciones generales</div>
          <div>
            <ul className='list-disc pl-5'>
              {generalInstructions.map((instruction, index) => (
                <li key={index} className='mb-2 text-sm text-justify'>
                  {renderInstruction(instruction)}
                </li>
              ))}
            </ul>
          </div>
        </CardComponent>

        <CardComponent>
          {/* Titulo */}
          <div className='mb-5 font-bold text-xl'>
            Instrucciones específicas
          </div>
          {/* Texto */}
          <div>
            <ul className='list-disc pl-5'>
              {specificInstructions.map((instruction, index) => (
                <li key={index} className='mb-2 text-sm text-justify'>
                  {renderInstruction(instruction)}
                </li>
              ))}
            </ul>
          </div>
          {/* Botones */}
          <div className='mt-8 flex-grow flex flex-col justify-center space-y-4'>
            <ButtonComponent
              label='Empezar'
              icon={PlayIcon}
              onClick={() => handleStarMockExam()}
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
