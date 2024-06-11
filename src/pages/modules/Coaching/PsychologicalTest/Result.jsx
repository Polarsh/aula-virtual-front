import { Fragment } from 'react'
import CardComponent from '../../../../components/Card/Card'
import HeaderCardComponent from '../../../../components/Card/HeaderCard'

const response = {
  description: '',
  emotionalCompetence: [
    {
      area: 'Inteligencia Intrapersonal',
      description:
        'Capacidad para entenderse a sí mismo, sus emociones y cómo manejarlas.',
      score: 14,
      nivel: 'Alto',
    },
    {
      area: 'Inteligencia Interpersonal',
      description:
        'Habilidad para entender a otras personas, sus motivaciones y cómo trabajar con ellas.',
      score: 14,
      nivel: 'Bajo',
    },
    {
      area: 'Adaptabilidad',
      description:
        'Capacidad para ajustar las emociones, pensamientos y comportamientos a las nuevas situaciones.',
      score: 14,
      nivel: 'Medio',
    },
    {
      area: 'Ánimo General',
      description:
        'Estado emocional predominante que influye en el bienestar general y la perspectiva de la vida.',
      score: 14,
      nivel: 'Muy bajo',
    },
    {
      area: 'Manejo del estrés',
      description:
        'Habilidad para manejar las presiones y demandas del entorno de manera efectiva.',
      score: 14,
      nivel: 'Medio',
    },
    {
      area: 'Inteligencia Emocional General',
      description:
        'Capacidad global para identificar, entender y manejar las emociones propias y de los demás.',
      score: 14,
      nivel: 'Alto',
    },
  ],
  conclusions: {
    type: 'ISTJ',
    text: 'La tipología de la personalidad obtenida corresponde al estilo sensitivo de procesamiento de información. Esto quiere decir que aprende mejor a través de la experiencia, con el uso de materiales enfocados en lo concreto y objetivo.',
    score: 30,
    category: 'Muy Bajo',
    skillsAVG: ['Flexibilidad'],
    skillsLow: [
      'Comprensión de Sí Mismo',
      'Asertividad',
      'Autoestima',
      'Autorealización',
      'Independencia',
      'Relaciones Interpersonales',
      'Empatía',
      'Responsabilidad Social',
      'Solución de Problemas',
      'Prueba de la Realidad',
      'Optimismo',
      'Felicidad',
      'Tolerancia al Estrés',
      'Control de Impulsos',
    ],
  },
  recommendations: [
    {
      text: 'INTELIGENCIA INTRAPERSONAL',
      values: [
        'Comprensión de Sí Mismo',
        'Asertividad',
        'Autoestima',
        'Autorealización',
        'Independencia',
      ],
    },
    {
      text: 'INTELIGENCIA INTERPERSONAL',
      values: [
        'Relaciones Interpersonales',
        'Empatía',
        'Responsabilidad Social',
      ],
    },
    {
      text: 'ADAPTABILIDAD',
      values: ['Solución de Problemas', 'Prueba de la Realidad'],
    },
    {
      text: 'ÁNIMO GENERAL',
      values: ['Optimismo', 'Felicidad'],
    },
    {
      text: 'MANEJO DEL ESTRÉS',
      values: ['Tolerancia al Estrés', 'Control de Impulsos'],
    },
  ],
}

export default function ResultPsychologicalPage() {
  const data = response

  return (
    <Fragment>
      <div className='space-y-8'>
        {/* Titulo */}
        <div className='md:flex md:items-center md:justify-between md:space-x-5'>
          <div className='flex flex-col items-start'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Informe psicológico
            </h2>
            <p className='text-sm font-medium text-gray-500'>
              Te ayudaremos a entender, analizar e interpretar los resultados de
              estos dos tests, proporcionando una visión integral de tu perfil
              emocional y de personalidad.
            </p>
          </div>
        </div>

        <CardComponent>
          <HeaderCardComponent title={'Personalidad'} />
          <p className='mt-5 text-gray-800 text-justify'>
            Eres una persona seria, tranquila, alcanzas el éxito mediante la
            concentración y la minuciosidad. Sueles ser práctico, ordenado,
            lógico y realista. Te gusta asegurarte de que todo está bien
            organizado. Decides lo que debería conseguirse y trabaja para
            alcanzarlo con responsabilidad, a pesar de las distracciones. Puedes
            inhibir la innovación y llegar a ser demasiado rígido o inflexible.
            Puedes mejorar en cuidar las relaciones interpersonales y
            arriesgarte a probar nuevas soluciones para salir de la rutina.
            <p>
              *Tu personalidad tiene cualidades y características de
              extroversión e introversión.
            </p>
            <p>
              *Tomas tus decisiones equilibrando un análisis objetivo y
              subjetivo de las situaciones.
            </p>
          </p>
        </CardComponent>

        <CardComponent>
          <HeaderCardComponent title={'Competencias Emocionales y Sociales'} />
          {/* Header */}
          <div className='mt-5 grid grid-cols-12 border-b border-gray-200'>
            <div className='col-span-3 '>
              <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                Áreas
              </div>
            </div>
            <div className='col-span-5'>
              <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                Descripción
              </div>
            </div>
            <div className='col-span-2'>
              <div className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                Puntaje
              </div>
            </div>
            <div className='col-span-2'>
              <div className='relative px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                Nivel
              </div>
            </div>
          </div>
          {/* Contenido */}
          <div className=' divide-y divide-gray-200 '>
            {data.emotionalCompetence.map((competence, index) => (
              <div key={index} className='grid grid-cols-12'>
                <div className='col-span-3'>
                  <div className='px-3 py-5 text-sm font-medium text-gray-900'>
                    {competence.area}
                  </div>
                </div>
                <div className='col-span-5'>
                  <div className='px-3 py-5 text-sm text-gray-900'>
                    {competence.description}
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='px-3 py-5 text-sm text-gray-900'>
                    {competence.score}
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='relative whitespace-nowrap px-3 py-5 text-sm font-medium text-gray-900'>
                    {competence.nivel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent>
          <HeaderCardComponent title={'Conclusiones'} />
          <p className='mt-5 text-gray-800 text-justify space-y-3'>
            <p>
              YORCH tiene una personalidad correspondiente a la tipología
              <span className=' font-bold'>
                &quot;{data.conclusions.type}&quot;
              </span>
              .
            </p>

            <p>{data.conclusions.text}</p>
            <p>
              Su nivel de inteligencia emocional tiene un puntaje de{' '}
              <span className=' font-bold'>{data.conclusions.score}</span>, el
              que corresponde a una categoría{' '}
              <span className=' font-bold'>
                &quot;{data.conclusions.category}&quot;
              </span>
              .
            </p>
            <p>
              Tiene un nivel promedio en las habilidades:{' '}
              {data.conclusions.skillsAVG.join(', ')}
            </p>
            <p>
              Tiene un nivel bajo en las habilidades:{' '}
              {data.conclusions.skillsLow.join(', ')}
            </p>
          </p>
        </CardComponent>

        <CardComponent>
          <HeaderCardComponent title={'Recomendaciones'} />
          <p className='mt-5 text-gray-800 text-justify'>
            La tipología de la personalidad obtenida se alinea mejor a las
            siguientes herramientas de estudio que le aporta Innova Qx:
            fundamentos teóricos, manuales académicos, banco histórico y las
            fijas. Mejorar el desarrollo de su inteligencia emocional en las
            siguientes áreas, asistiendo a los talleres correspondientes:
          </p>

          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {data.recommendations.map((recomendation, index) => (
              <div key={index}>
                <div className='font-semibold'>{recomendation.text}</div>
                <ul className='list-disc list-inside ml-4 text-gray-800'>
                  {recomendation.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardComponent>
      </div>
    </Fragment>
  )
}
