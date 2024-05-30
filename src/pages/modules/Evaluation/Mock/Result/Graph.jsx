import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function GraphResultMockExamComponent({
  totalQuestions,
  answeredQuestions,
  unansweredQuestions,
  correctAnswers,
  incorrectAnswers,
}) {
  function convertToPercent(value) {
    return (value / totalQuestions) * 100
  }

  const data = {
    labels: [
      'Preguntas Respondidas',
      'Preguntas Sin Responder',
      'Respuestas Correctas',
      'Respuestas Incorrectas',
    ],
    datasets: [
      {
        label: 'Estado de las Preguntas',
        data: [
          convertToPercent(answeredQuestions),
          convertToPercent(unansweredQuestions),
          0,
          0,
        ],
        backgroundColor: [
          'rgb(96, 165, 250)',
          'rgb(234, 179, 8)',
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
        ],
        hoverOffset: 4,
      },
      {
        label: 'Resultados de las Respuestas',
        data: [
          0,
          0,
          convertToPercent(correctAnswers),
          convertToPercent(incorrectAnswers),
        ],
        backgroundColor: [
          'rgb(96, 165, 250)',
          'rgb(234, 179, 8)',
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
        ],
        hoverOffset: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        onClick: () => {},
      },
      title: {
        display: true,
        position: 'top',
        align: 'center',
        text: 'Chart.js Doughnut Chart',
      },
    },
  }

  return (
    <div className='max-h-96 flex justify-center'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
