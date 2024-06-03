import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../../../../components/Buttons/Buttons'

export default function ButtonsMockExamComponent({
  mockExamData,
  questionIndex,
  handleFinishMock,
}) {
  const navigate = useNavigate()

  // Función para ir a la pregunta anterior
  const goToPreviousQuestion = () => {
    const previousId = parseInt(questionIndex, 10) - 1
    if (previousId > 0) {
      // Asegúrate de que no sea menor que 1
      navigate(
        `/evaluaciones/simulacros/${mockExamData.id}/pregunta/${previousId}`
      )
    }
  }

  // Función para ir a la siguiente pregunta
  const goToNextQuestion = () => {
    const nextId = parseInt(questionIndex, 10) + 1
    navigate(`/evaluaciones/simulacros/${mockExamData.id}/pregunta/${nextId}`)
  }

  // Determina si el índice de la pregunta es 1 o igual al total de preguntas
  const isFirstQuestion = parseInt(questionIndex, 10) === 1
  const isLastQuestion =
    parseInt(questionIndex, 10) === mockExamData.questions.length

  return (
    <>
      <div className='flex-grow flex flex-row justify-center space-x-5'>
        {!isFirstQuestion && (
          <ButtonComponent label='Anterior' onClick={goToPreviousQuestion} />
        )}
        {!isLastQuestion && (
          <ButtonComponent
            label='Siguiente'
            onClick={goToNextQuestion}
            bgColor='bg-my-primary'
            hoverColor='bg-my-secondary'
            textColor='text-white'
          />
        )}
        {isLastQuestion && (
          <ButtonComponent
            label='Terminar simulacro'
            onClick={() => handleFinishMock()}
            bgColor='bg-red-500'
            hoverColor='bg-red-400'
            textColor='text-white'
          />
        )}
      </div>
    </>
  )
}
