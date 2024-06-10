import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import CardComponent from '../../../../components/Card/Card'
import HeaderCardComponent from '../../../../components/Card/HeaderCard'

import GaugeGraphComponent from './GaugeGraph'

const response = {
  studentName: 'Yorch Sánchez',
  stats: {
    activity: {
      score: 15,
      list: [
        {
          label: 'PreTest',
          value: 1,
          totalValue: 5,
          percentage: parseFloat(((1 / 5) * 100).toFixed(2)),
        },
        {
          label: 'Evaluación sumativa',
          value: 0,
          totalValue: 2,
          percentage: parseFloat(((0 / 2) * 100).toFixed(2)),
        },
        {
          label: 'Simulacro',
          value: 1,
          totalValue: 11,
          percentage: parseFloat(((1 / 11) * 100).toFixed(2)),
        },
        {
          label: 'Banco',
          value: 5,
          totalValue: 5,
          percentage: parseFloat(((5 / 5) * 100).toFixed(2)),
        },
      ],
    },
    accuracy: {
      value: 150,
      total: 1500,
      percentage: 10,
    },
  },
}

export default function ConsultingPage() {
  const userData = response

  return (
    <div className='space-y-8'>
      <CardComponent>
        <div className='flex'>
          <div className='flex items-center justify-center'>
            <RocketLaunchIcon
              className='h-32 w-32 text-blue-500'
              aria-hidden='true'
            />
          </div>
          <div className='px-6 space-y-3'>
            <div className='text-xl font-semibold text-gray-800'>
              Hola <span className='font-bold'>{userData.studentName}</span>
            </div>
            <div className='text-base text-gray-600'>
              En la siguiente página te mostramos tu avance académico con
              relación a las clases visualizadas, los simulacros y las
              evaluaciones realizadas.
            </div>
            <div className='flex justify-around'>
              <div className='inline-block border-4 border-blue-500 border-dotted p-2 rounded-lg'>
                <div className='font-bold text-lg text-blue-700'>
                  Puntaje académico
                </div>
                <div className='text-xl text-gray-800 text-center'>
                  {userData.stats.activity.score}%
                </div>
              </div>
              <div className='inline-block border-4 border-blue-500 border-dotted p-2 rounded-lg'>
                <div className='font-bold text-lg text-blue-700'>
                  Avance académico
                </div>
                <div className='text-xl text-gray-800 text-center'>
                  {userData.stats.accuracy.percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <CardComponent>
          <HeaderCardComponent
            title={'Actividad Académica'}
            subtitle={'Porcentaje de avances en actividades'}
          />
          <div className='flex content-center'>
            <GaugeGraphComponent value={userData.stats.activity.score} />
          </div>
          <div className=' divide-y divide-gray-200  '>
            {userData.stats.activity.list.map((stat, value) => (
              <div key={value} className='py-2'>
                <div className='font-semibold'>{stat.label}</div>
                <div className='grid grid-cols-2'>
                  <div className=' text-gray-400'>
                    {stat.value} de {stat.totalValue} completados
                  </div>
                  <div className='grid grid-cols-3'>
                    <div className='col-span-2 flex items-center '>
                      <div className='flex-1 bg-gray-300 rounded-full h-2'>
                        <div
                          className='h-2 rounded-full bg-blue-500'
                          style={{ width: `${stat.percentage}%` }}></div>
                      </div>
                    </div>
                    <div className='text-left ml-4 content-center '>
                      {stat.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardComponent>
        <CardComponent>
          <HeaderCardComponent
            title='Actividad Académica'
            subtitle='Porcentajes de aciertos en evaluaciones'
          />
          <div className='flex content-center'>
            <GaugeGraphComponent value={userData.stats.accuracy.percentage} />
          </div>
          <div className='mt-4 text-gray-700'>
            <p className='mb-2 text-justify'>
              Has respondido un total de{' '}
              <span className='font-semibold'>
                {userData.stats.accuracy.value}
              </span>{' '}
              preguntas correctamente de{' '}
              <span className='font-semibold'>
                {userData.stats.accuracy.total}
              </span>{' '}
              preguntas programadas.
            </p>
            <p>
              Esto te da un porcentaje de aciertos del{' '}
              <span className='font-semibold'>
                {userData.stats.accuracy.percentage}%
              </span>
              .
            </p>
          </div>
          <div className='mt-8 '>
            <div className='text-base font-bold mb-2 text-center'>Leyenda</div>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-red-500 mr-2'></div>
                <div>0 - 25%: Muy bajo</div>
              </div>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-yellow-500 mr-2'></div>
                <div>26 - 50%: Bajo</div>
              </div>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-blue-500 mr-2'></div>
                <div>51 - 75%: Medio</div>
              </div>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-green-500 mr-2'></div>
                <div>76 - 100%: Alto</div>
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  )
}
