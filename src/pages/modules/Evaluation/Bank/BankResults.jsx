import { Fragment, useState } from 'react'
import CardComponent from '../../../../components/Card/Card'

import bankExamResultsJson from '../../../../json/responses/evaluations/bank/bankExamResult.json'

import { formatTime, getCardStyleByStatus } from '../../../../utils/utils'
import ViewQuestionModalComponent from '../Shared/Result/viewQuestionModal'
import GraphResultExamComponent from '../Shared/Result/Graph'
import TableResultExamComponent from '../Shared/Result/Table'

export default function ResultBankExamPage() {
  const [examData] = useState(bankExamResultsJson)

  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const resumeExam = [
    {
      color: 'blue-800',
      title: 'Total de preguntas',
      value: examData.examStats.totalQuestions,
    },
    {
      color: 'blue-400',
      title: 'Preguntas respondidas',
      value: examData.examStats.answeredQuestions,
    },
    {
      color: 'yellow-500',
      title: 'Preguntas sin responder',
      value: examData.examStats.unansweredQuestions,
    },
    {
      color: 'green-500',
      title: 'Preguntas correctas',
      value: examData.examStats.correctAnswers,
    },
    {
      color: 'red-500',
      title: 'Preguntas incorrectas',
      value: examData.examStats.incorrectAnswers,
    },
  ]

  const handleSelectedQuestion = question => {
    setSelectedQuestion(question)
  }

  return (
    <Fragment>
      <div className=' space-y-8'>
        {/* Titulo */}
        <div className='md:flex md:items-center md:justify-between md:space-x-5'>
          <div className='flex flex-col items-start'>
            <h1 className='text-2xl font-bold text-gray-900'>
              {examData.title}
            </h1>
            <p className='text-sm font-medium text-gray-500'>
              Resultados de simulacro
            </p>
          </div>
        </div>
        {/* Cuadros */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <CardComponent>
            <Fragment>
              <div className='text-lg font-semibold'>Preguntas marcadas</div>
              <div className='text-2xl font-bold text-blue-600'>
                {examData.examStats.answeredQuestions}
              </div>
              <div className='text-sm text-gray-500'>
                de {examData.examStats.totalQuestions}
              </div>
            </Fragment>
          </CardComponent>
          <CardComponent>
            <div className='text-lg font-semibold'>Preguntas correctas</div>
            <div className='text-2xl font-bold text-green-600'>
              {examData.examStats.correctAnswers}
            </div>
            <div className='text-sm text-gray-500'>
              de {examData.examStats.answeredQuestions}
            </div>
          </CardComponent>
          <CardComponent>
            <div className='text-lg font-semibold'>Nota obtenida</div>
            <div className='text-2xl font-bold text-purple-600'>
              {examData.examStats.gradeObtained}
            </div>
            <div className='text-sm text-gray-500'>de 20</div>
          </CardComponent>
          <CardComponent>
            <div className='text-lg font-semibold'>Tiempo utilizado</div>
            <div className='text-2xl font-bold text-red-600'>
              {formatTime(examData.examStats.timeUsed)}
            </div>
            <div className='text-sm text-gray-500'>
              de {formatTime(examData.duration)}
            </div>
          </CardComponent>
        </div>
        {/* Grafico y stats */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
          <CardComponent>
            <div className=''>
              <div className='mb-5 font-bold text-xl'>
                Estadísticas de respuestas
              </div>
              <GraphResultExamComponent
                totalQuestions={examData.examStats.totalQuestions}
                answeredQuestions={examData.examStats.answeredQuestions}
                unansweredQuestions={examData.examStats.unansweredQuestions}
                correctAnswers={examData.examStats.correctAnswers}
                incorrectAnswers={examData.examStats.incorrectAnswers}
              />
            </div>
          </CardComponent>
          <CardComponent>
            <Fragment>
              <div className='mb-5 font-bold text-xl'>
                Resumen de respuestas
              </div>
              <div>
                <ul role='list' className='divide-y divide-gray-200'>
                  {resumeExam.map(item => (
                    <li key={item.title} className='py-4 flex justify-between'>
                      <div className='flex items-center'>
                        <div
                          className={`${'bg-' + item.color} mr-2`}
                          style={{ width: '4px', height: '100%' }}></div>
                        {item.title}
                      </div>
                      <div>{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          </CardComponent>
        </div>
        {/* Tabla */}
        <CardComponent>
          <div className='mb-5 font-bold text-xl'>Detalle de preguntas</div>
          {/* Botones */}
          <div className='grid grid-cols-8 md:grid-cols-12 gap-y-2 gap-x-2'>
            {[...Array(examData.questions.length)].map((_, index) => (
              <button
                key={index}
                type='button'
                onClick={() => {
                  handleSelectedQuestion(examData.questions[index])
                }}
                className={`${getCardStyleByStatus(examData.questions[index].status)} rounded px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}>
                {index + 1}
              </button>
            ))}
          </div>
        </CardComponent>
        {/* Tabla */}
        <CardComponent>
          <div className='mb-5 font-bold text-xl'>Tabla de preguntas</div>
          <TableResultExamComponent
            questions={examData.questions}
            handleSelectedQuestion={handleSelectedQuestion}
          />
        </CardComponent>
      </div>
      {selectedQuestion && (
        <ViewQuestionModalComponent
          question={selectedQuestion}
          handleClose={() => setSelectedQuestion(null)}
        />
      )}
    </Fragment>
  )
}
