import { Fragment, useState } from 'react'
import CardComponent from '../../../../components/Card/Card'
import HeaderCardComponent from '../../../../components/Card/HeaderCard'
import { Radio, RadioGroup } from '@headlessui/react'
import ButtonComponent from '../../../../components/Buttons/Buttons'

const response = [
  {
    label:
      'Para superar las dificultades que se me presentan, actúo paso a paso',
    selectedScore: '',
  },
  {
    label: 'Me resulta difícil disfrutar de la vida',
    selectedScore: '',
  },
  {
    label:
      'Soy capaz de reconocer mis propias emociones cuando las estoy experimentando',
    selectedScore: '',
  },
  {
    label: 'Cuando estoy estresado, sé cómo relajarme y calmarme',
    selectedScore: '',
  },
  {
    label:
      'Puedo ponerme en el lugar de otras personas y entender cómo se sienten',
    selectedScore: '',
  },
  {
    label:
      'Tengo una actitud positiva hacia la vida, incluso en situaciones difíciles',
    selectedScore: '',
  },
  {
    label: 'Soy consciente de cómo mis emociones afectan a mi comportamiento',
    selectedScore: '',
  },
  {
    label:
      'Puedo mantener la calma y enfocarme en mis objetivos, incluso bajo presión',
    selectedScore: '',
  },
  {
    label: 'Soy bueno escuchando a los demás y mostrando comprensión',
    selectedScore: '',
  },
  {
    label:
      'Tengo claras mis metas personales y trabajo constantemente hacia ellas',
    selectedScore: '',
  },
  {
    label:
      'Me esfuerzo por mantener una buena relación con las personas que me rodean',
    selectedScore: '',
  },
  {
    label: 'Puedo aceptar críticas constructivas sin sentirme ofendido',
    selectedScore: '',
  },
  {
    label: 'Me resulta fácil adaptarme a los cambios en mi entorno',
    selectedScore: '',
  },
  {
    label: 'Soy capaz de reconocer y controlar mis impulsos emocionales',
    selectedScore: '',
  },
  {
    label:
      'Me esfuerzo por ser consciente de los sentimientos de los demás y actuar en consecuencia',
    selectedScore: '',
  },
  {
    label:
      'Puedo mantener una actitud optimista, incluso cuando enfrento fracasos',
    selectedScore: '',
  },
  {
    label:
      'Me siento seguro en mi capacidad para manejar conflictos interpersonales',
    selectedScore: '',
  },
  {
    label:
      'Soy capaz de encontrar maneras constructivas para lidiar con el estrés',
    selectedScore: '',
  },
  {
    label:
      'Puedo motivarme a mí mismo para alcanzar mis metas, a pesar de los obstáculos',
    selectedScore: '',
  },
]

const scores = [
  { label: 'RARA VEZ O NUNCA', value: 1, colspan: 2 },
  { label: 'POCAS VECES', value: 2, colspan: 2 },
  { label: 'ALGUNAS VECES', value: 3, colspan: 2 },
  { label: 'MUCHAS  VECES', value: 4, colspan: 3 },
  { label: 'SIEMPRE', value: 5, colspan: 3 },
]

const answers = [1, 2, 3, 4, 5]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TestPage() {
  const [questionData, setQuestionData] = useState(response)
  const [emptyAnswers, setEmptyAnswers] = useState([])

  const handleOptionChange = (index, value) => {
    const newQuestionData = [...questionData]
    newQuestionData[index].selectedScore = value
    setQuestionData(newQuestionData)
  }

  const handleSubmit = () => {
    const newEmptyAnswers = questionData
      .map((question, index) => (question.selectedScore === '' ? index : null))
      .filter(index => index !== null)

    setEmptyAnswers(newEmptyAnswers)

    if (newEmptyAnswers.length > 0) {
      // Mostrar al usuario los índices de las preguntas sin respuesta
      alert(
        `Por favor, responde todas las preguntas. Faltan las preguntas: ${emptyAnswers.map(i => i + 1).join(', ')}`
      )
      return
    }

    // Aquí puedes enviar la información
    console.log('Enviando datos:', questionData)
  }

  return (
    <Fragment>
      <div className=' space-y-8'>
        {/* Titulo */}
        <div className='md:flex md:items-center md:justify-between md:space-x-5'>
          <div className='flex flex-col items-start'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Test de personalidad
            </h2>
            <p className='text-sm font-medium text-gray-500'>
              Resolviendo examen
            </p>
          </div>
        </div>
        <CardComponent className='bg-white space-y-5'>
          <HeaderCardComponent
            title={'Instrucciones'}
            subtitle={
              'Estimado yorch en el siguiente test encontrará 133 afirmaciones sobre maneras de sentir, pensar o actuar. Léala atentamente y decida en qué medida cada una de ellas describe o no su verdadero modo de ser. Existen cinco (5) posibilidades de respuesta. '
            }
          />

          <div className='grid grid-cols-6 gap-5'>
            {scores.map((score, index) => (
              <div
                key={index}
                className={`border-2 border-gray-600 border-dashed p-2 grid content-between ${'col-span-' + score.colspan}  `}>
                <div className=' text-center'>{score.label}</div>
                <div className=' font-bold text-5xl text-center'>
                  {score.value}
                </div>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className=' space-y-1'>
            {questionData.map((question, index) => (
              <div key={index}>
                <div className=' flex flex-col sm:flex-row items-start sm:items-center rounded-md'>
                  <div className='flex-grow text-lg mr-6 text-justify sm:mb-0'>
                    {index + 1 + '. ' + question.label}
                  </div>
                  <div className='flex-shrink-0 p-2 rounded-md w-full sm:w-auto'>
                    <RadioGroup
                      value={questionData[index].selectedScore}
                      onChange={value => handleOptionChange(index, value)}
                      className='flex flex-wrap'>
                      {answers.map((option, idx) => (
                        <Radio
                          key={option}
                          value={option}
                          className={({ focus, checked }) =>
                            classNames(
                              focus
                                ? 'ring-2 ring-indigo-600 ring-offset-2'
                                : '',
                              checked
                                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                              'flex items-center justify-center py-2 px-3 text-sm font-semibold uppercase cursor-pointer',
                              idx === 0 ? 'rounded-l-md' : '',
                              idx === answers.length - 1 ? 'rounded-r-md' : '',
                              idx !== 0 && idx !== answers.length - 1
                                ? 'rounded-none'
                                : ''
                            )
                          }>
                          {option}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                {emptyAnswers.includes(index) && (
                  <div className='text-red-500 mt-2'>
                    Por favor, responda esta pregunta.
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='flex justify-end'>
            <ButtonComponent
              label={'Enviar'}
              bgColor='bg-my-primary'
              hoverColor='bg-my-secondary'
              textColor='text-white'
              onClick={handleSubmit}
            />
          </div>
        </CardComponent>
      </div>
    </Fragment>
  )
}
