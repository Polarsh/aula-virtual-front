import CardComponent from '../components/Card/Card'
import VideoSliderComponent from '../components/Sliders/VideoSlider'

const moduleDescriptions = {
  Videoteca: {
    title: 'Videoteca',
    description:
      'Accede a una variedad de recursos visuales para complementar tu aprendizaje.',
    submodules: [
      {
        name: 'Mis clases',
        description: 'Accede a todas tus clases grabadas.',
      },
      {
        name: 'Cronograma',
        description: 'Consulta el cronograma completo del curso.',
      },
      {
        name: 'Tutoriales',
        description: 'Encuentra tutoriales para reforzar tu comprensión.',
      },
      {
        name: 'Materiales',
        description: 'Descarga materiales adicionales de apoyo.',
      },
      {
        name: 'Manuales eBooks',
        description: 'Lee y descarga manuales en formato eBook.',
      },
    ],
  },
  Evaluaciones: {
    title: 'Evaluaciones',
    description: 'Prepárate con nuestras herramientas de evaluación.',
    submodules: [
      { name: 'Simulacros', description: 'Practica con exámenes simulados.' },
      {
        name: 'Banco de preguntas',
        description: 'Revisa un amplio banco de preguntas.',
      },
    ],
  },
  Metodología: {
    title: 'Metodología',
    description:
      'Conoce nuestra metodología y las tendencias actuales en educación.',
    submodules: [
      {
        name: 'Nuestra metodología',
        description: 'Descubre la metodología que utilizamos.',
      },
      {
        name: 'Tendencias',
        description: 'Mantente al día con las últimas tendencias educativas.',
      },
    ],
  },
  Mentorías: {
    title: 'Mentorías',
    description: 'Recibe orientación y apoyo a través de nuestras mentorías.',
    submodules: [
      {
        name: 'Coaching',
        description: 'Participa en sesiones de coaching personalizadas.',
      },
      {
        name: 'Asesorias',
        description: 'Obtén asesorías especializadas en diversas áreas.',
      },
      {
        name: 'Test Psicológicos',
        description: 'Realiza tests psicológicos para conocerte mejor.',
      },
    ],
  },
  'Canales de atención': {
    title: 'Canales de atención',
    description:
      'Contacta con nuestro equipo de soporte para cualquier consulta o ayuda.',
    submodules: [],
  },
}

export default function HomePage() {
  return (
    <div className=' space-y-10'>
      <CardComponent>
        <div className='mb-5 font-bold'>Bienvenido al curso X</div>
        <p className='text-gray-800 text-justify'>
          Estamos seguros de que su aprendizaje será enriquecedor a través de
          nuestra plataforma interactiva. Recuerden que contamos con recursos
          académicos en nuestra <span className='font-semibold'>Videoteca</span>
          . Además, conforme avance el curso, se abrirán más recursos para el
          desarrollo integral de su aprendizaje.
        </p>
        <p className='mt-4 text-right text-gray-600'>
          Atentamente,
          <br />
          <span className='font-semibold'>Empresa</span>
        </p>
      </CardComponent>

      {/* Videos */}
      <CardComponent>
        <VideoSliderComponent
          videoIdList={[
            '42R-f4H8m1w',
            'TEAfO6op3mA',
            'Htfo27Y7ZT8',
            'gP-sXVsFMNQ',
            'U4XCX0NWbEc',
          ]}
        />
      </CardComponent>

      <CardComponent>
        <div className='mb-5 font-bold'>Explicación de módulos</div>
        <div className='grid grid-cols-2'>
          {Object.values(moduleDescriptions).map((module, index) => (
            <div key={index}>
              <div className='mb-3 font-semibold'>Módulo {module.title}</div>
              <div className='mb-5'>
                <p className='text-gray-800 text-justify'>
                  {module.description}
                </p>
                <ul className='list-disc list-inside ml-4 text-gray-800 mt-2'>
                  {module.submodules.map((submodule, index) => (
                    <li key={index}>
                      <span className='font-semibold'>{submodule.name}: </span>
                      {submodule.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardComponent>
    </div>
  )
}
