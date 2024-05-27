import { useState } from 'react'
import CardComponent from '../../../../components/Card'
import YouTubePlayer from '../../../../components/Players/YoutubePlayer'

const topicList = [
  {
    id: 1,
    title: 'Infectología',
    difficulty: 'easy',
    description: '1 video',
    videoList: [{ id: 'Htfo27Y7ZT8', title: 'Video de Infectología 1' }],
  },
  {
    id: 2,
    title: 'Respiratorio',
    difficulty: 'easy',
    description: '4 videos',
    videoList: [
      { id: '42R-f4H8m1w', title: 'Video de Respiratorio 1' },
      { id: 'Htfo27Y7ZT8', title: 'Video de Respiratorio 2' },
      { id: 'gP-sXVsFMNQ', title: 'Video de Respiratorio 3' },
      { id: 'U4XCX0NWbEc', title: 'Video de Respiratorio 4' },
    ],
  },
  {
    id: 3,
    title: 'Cardiología',
    difficulty: 'medium',
    description: '3 videos',
    videoList: [
      { id: '42R-f4H8m1w', title: 'Video de Cardiología 1' },
      { id: 'TEAfO6op3mA', title: 'Video de Cardiología 2' },
      { id: 'Htfo27Y7ZT8', title: 'Video de Cardiología 3' },
    ],
  },
  {
    id: 4,
    title: 'Mortalidad',
    difficulty: 'hard',
    description: '2 videos',
    videoList: [
      { id: '42R-f4H8m1w', title: 'Video de Mortalidad 1' },
      { id: 'U4XCX0NWbEc', title: 'Video de Mortalidad 2' },
    ],
  },
]

export default function MyClassPage() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleTopicClick = topic => {
    // Actualizar el topic seleccionado
    setSelectedTopic(topic)
    setSelectedVideo(topic.videoList[0])
  }

  const handleVideoClick = video => {
    setSelectedVideo(video)
  }

  const getDifficultyColor = difficulty => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-400'
      case 'medium':
        return 'bg-yellow-400'
      case 'hard':
        return 'bg-red-400'
      default:
        return 'bg-gray-400' // Color por defecto si no coincide ninguna dificultad
    }
  }

  return (
    <div className=' space-y-8'>
      {/* Titulo */}
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          Anatomia humana
        </h2>
      </div>
      {/* Temas y Video */}
      <div className=' grid grid-cols-3 gap-5'>
        {/* Temas */}
        <div className='col-span-3 lg:col-span-1'>
          <CardComponent>
            <div className='mb-5 font-bold text-xl'>Temas</div>
            <div className='divide-y divide-gray-200'>
              {topicList.map(topic => (
                <div
                  key={topic.title}
                  className=' py-3'
                  onClick={() => handleTopicClick(topic)}>
                  <div className='flex hover:bg-gray-100 cursor-pointer rounded-r-lg'>
                    <div
                      className={`flex ${getDifficultyColor(topic.difficulty)}`}
                      style={{ width: '4px' }}></div>
                    <div className='pl-3'>
                      <h3 className='text-base font-semibold leading-6 text-gray-900'>
                        {topic.title}
                      </h3>
                      <p className='mt-2 text-sm text-gray-500'>
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardComponent>
        </div>

        {/* Videos */}
        <div className='col-span-3 lg:col-span-2'>
          {selectedTopic ? (
            <CardComponent>
              <div className='mb-5'>
                <span className='font-bold text-xl'>
                  {selectedTopic ? selectedTopic.title : 'Tema'}
                </span>
                {' : '}
                <span className='text-gray-900 text-xl'>
                  {selectedVideo ? selectedVideo.title : 'Nombre video'}
                </span>
              </div>
              <YouTubePlayer videoId={selectedVideo.id} />
              <div className='mt-2 gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                {selectedTopic.videoList.map(video => (
                  <div key={video.id} className='flex justify-center'>
                    <button
                      type='button'
                      onClick={() => {
                        handleVideoClick(video)
                      }}
                      className=' w-full rounded-md bg-my-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-my-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-secondary'>
                      {video.title}
                    </button>
                  </div>
                ))}
              </div>
            </CardComponent>
          ) : (
            <CardComponent>
              <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-center text-2xl text-gray-500 mb-4'>
                  Por favor, seleccione el tema que desea visualizar
                </p>
                <img
                  src='/public/doctor.png'
                  className='h-48 rounded-3xl'
                  alt='Doctor'
                />
              </div>
            </CardComponent>
          )}
        </div>
      </div>
    </div>
  )
}
