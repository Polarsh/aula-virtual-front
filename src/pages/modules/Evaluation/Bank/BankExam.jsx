import { Fragment, useEffect, useState } from 'react'
import ButtonComponent from '../../../../components/Buttons/Buttons'
import CardComponent from '../../../../components/Card/Card'
import { useNavigate, useParams } from 'react-router-dom'
import CountdownTimerComponent from '../../../../components/CountdownTimer'
import ConfirmSubmitModal from '../../../../components/Modal/ConfirmModal'

import bankExamJson from '../../../../json/responses/evaluations/bank/bankExam.json'

import QuestionExamComponent from '../Shared/Exam/Question'
import ButtonsExamComponent from '../Shared/Exam/Buttons'
import QuestionPanelExamComponent from '../Shared/Exam/QuestionPanel'

export default function BankExamPage() {
  const navigate = useNavigate()
  const { questionIndex } = useParams()

  const [examData, setMockExam] = useState(bankExamJson)

  const [confirmModal, setConfirmModal] = useState(false)

  // Función para validar la pregunta solicitada
  useEffect(() => {
    const index = parseInt(questionIndex, 10)
    if (isNaN(index) || index < 1 || index > examData.questions.length) {
      // Redirigir a otra URL si la pregunta es inválida
      navigate(`/evaluaciones/banqueo/instrucciones`, {
        replace: true,
      })
    }
  }, [questionIndex, navigate])

  const submitExamAnswers = () => {
    // Cerramos modal
    setConfirmModal(false)

    // Función
    console.log('submitMockExamAnswers')
    alert('Se envió las respuestas')
  }

  const handleSelectOption = (questionIndex, selectedOptionId) => {
    setMockExam(prevExam => ({
      ...prevExam,
      questions: prevExam.questions.map(q =>
        q.index === questionIndex
          ? { ...q, selectedOption: selectedOptionId }
          : q
      ),
    }))
  }

  return (
    <Fragment>
      <div className=' space-y-8'>
        {/* Titulo */}
        <div className='md:flex md:items-center md:justify-between md:space-x-5'>
          <div className='flex flex-col items-start'>
            <h2 className='text-2xl font-bold text-gray-900'>
              {examData.title}
            </h2>
            <p className='text-sm font-medium text-gray-500'>
              Resolviendo examen
            </p>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
            <CountdownTimerComponent
              initialSeconds={examData.duration}
              onCountdownComplete={submitExamAnswers}
            />
            <ButtonComponent
              label='Terminar simulacro'
              onClick={() => setConfirmModal(true)}
              bgColor='bg-red-500'
              hoverColor='bg-red-400'
              textColor='text-white'
            />
          </div>
        </div>
        {/* Contenido */}
        <div className=' grid grid-cols-1 md:grid-cols-5 gap-5'>
          <div className='col-span-1 md:col-span-3'>
            <CardComponent className={'space-y-5'}>
              {/* Pregunta */}
              <QuestionExamComponent
                question={examData.questions[questionIndex - 1]}
                onSelectOption={handleSelectOption}
              />

              {/* Botones */}
              <ButtonsExamComponent
                urlType={'simulacros'}
                examData={examData}
                questionIndex={questionIndex}
                handleFinishMock={() => setConfirmModal(true)}
              />
            </CardComponent>
          </div>

          <div className='col-span-1 md:col-span-2'>
            <QuestionPanelExamComponent
              urlType={'simulacros'}
              examData={examData}
            />
          </div>
        </div>
      </div>
      {confirmModal && (
        <ConfirmSubmitModal
          title={'Confirmar envío'}
          content={
            '¿Estás seguro de que deseas enviar tus respuestas? Una vez enviado, no podrás modificar tus respuestas. Asegúrate de haber revisado todas tus respuestas antes de continuar.'
          }
          handleClose={() => setConfirmModal(false)}
          handleConfirmAction={submitExamAnswers}
        />
      )}
    </Fragment>
  )
}
