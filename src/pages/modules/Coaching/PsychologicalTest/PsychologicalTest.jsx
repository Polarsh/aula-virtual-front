import CardComponent from '../../../../components/Card/Card'
import HeaderCardComponent from '../../../../components/Card/HeaderCard'
import NoContentComponent from '../../../../components/NoContent'
import ButtonComponent from '../../../../components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

const response = [
  {
    title: 'Test de Inteligencia Emocional',
    subtitle:
      'Habilidad de identificar, usar, entender y manejar nuestras propias emociones de manera efectiva y positiva.',
    url: 'inteligencia-emocional',
    isCompleted: false,
  },
  {
    title: 'Test de Personalidad',
    subtitle:
      'Comprender tu personalidad puede proporcionarte un conocimiento valioso sobre tus motivaciones, tus fortalezas y áreas para mejorar.',
    url: 'personalidad',
    isCompleted: true,
  },
]

export default function PsychologicalTestPage() {
  const testList = response

  const navigate = useNavigate()

  const goToTestExam = url => {
    navigate(`/mentoria/test-psicologicos/${url}`)
  }

  const renderList = tests => {
    return (
      <div className='mt-5 grid grid-cols-2 gap-5'>
        {tests.map((test, index) => (
          <CardComponent key={index} className='border-2 bg-white'>
            <HeaderCardComponent title={test.title} subtitle={test.subtitle} />
            <div className='flex justify-end mt-2'>
              <ButtonComponent
                label={'Ingresar'}
                onClick={() => {
                  goToTestExam(test.url)
                }}
              />
            </div>
          </CardComponent>
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-8'>
      {/* Titulo */}
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          Tests de personalidad
        </h2>
      </div>
      {testList.length > 0 ? renderList(testList) : <NoContentComponent />}
    </div>
  )
}
