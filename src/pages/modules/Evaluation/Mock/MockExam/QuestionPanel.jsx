import { useNavigate } from 'react-router-dom'
import SquareButtonComponent from '../../../../../components/Buttons/SquareButton'
import CardComponent from '../../../../../components/Card'

export default function QuestionPanelMockExamComponent({ mockExamData }) {
  const navigate = useNavigate()

  const goToSpecificQuestion = index => {
    navigate(`/evaluaciones/simulacros/${mockExamData.id}/${index}`)
  }

  const panels = [
    {
      color: 'blue',
      text: 'Total',
      value: mockExamData.questionsData.totalQuestion,
    },
    {
      color: 'green',
      text: 'Respondidas',
      value: mockExamData.questions.filter(question => question.selectedOption)
        .length,
    },
    {
      color: 'red',
      text: 'Pendientes',
      value:
        mockExamData.questionsData.totalQuestion -
        mockExamData.questions.filter(question => question.selectedOption)
          .length,
    },
  ]

  return (
    <CardComponent className={'space-y-5'}>
      {/* Titulo */}
      <div className='mb-5 font-bold text-xl'>Paleta de preguntas</div>
      {/* Stats */}
      <div className='grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {panels.map(panel => (
          <div key={panel.text}>
            <div
              className={`bg-${panel.color}-100 ring-${panel.color}-300 ring-1 ring-inset rounded-md flex flex-col justify-center items-center`}>
              <div className={`text-${panel.color}-500 font-bold text-xl`}>
                {panel.value}
              </div>
              <div className={`text-${panel.color}-500 text-base`}>
                {panel.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Botones */}
      <div className='grid grid-cols-8 md:grid-cols-6 gap-y-2 gap-x-2'>
        {[...Array(mockExamData.questionsData.totalQuestion)].map(
          (_, index) => (
            <SquareButtonComponent
              key={'Boton pregunta ' + index}
              label={String(index + 1)}
              onClick={() => goToSpecificQuestion(index + 1)}
              color={
                mockExamData.questions[index].selectedOption ? 'green' : 'red'
              }
            />
          )
        )}
      </div>
    </CardComponent>
  )
}
