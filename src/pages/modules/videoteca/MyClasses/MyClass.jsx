import { useState } from 'react'
import CardComponent from '../../../../components/Card'
import VideoControllerSliderComponent from '../../../../components/Sliders/VideoControllerSlider'

const topicList = [
  {
    id: 1,
    title: 'Infectología',
    color: 'red',
    description: '1 video',
    videoList: [{ id: 'Htfo27Y7ZT8', title: 'Video de Infectología 1' }],
  },
  {
    id: 2,
    title: 'Respiratorio',
    color: 'green',
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
    color: 'yellow',
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
    color: 'red',
    description: '2 videos',
    videoList: [
      { id: '42R-f4H8m1w', title: 'Video de Mortalidad 1' },
      { id: 'U4XCX0NWbEc', title: 'Video de Mortalidad 2' },
    ],
  },
]

export default function MyClassPage() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const [selectedTopic, setSelectedTopic] = useState(topicList[0])

  const handleTopicClick = topic => {
    // Actualizar el topic seleccionado
    setSelectedVideoIndex(0)
    setSelectedTopic(topic)
  }

  return (
    <div className=' grid grid-cols-3 gap-5'>
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
                    className={`flex bg-${topic.color}-400`}
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
        <CardComponent>
          <div className='mb-5 font-bold text-xl'>
            <span>{selectedTopic ? selectedTopic.title : 'Tema'}</span>
            {' : '}
            <span>
              {selectedTopic
                ? selectedTopic.videoList[selectedVideoIndex].title
                : 'Nombre video'}
            </span>
          </div>
          <VideoControllerSliderComponent
            videoIdList={
              selectedTopic
                ? selectedTopic.videoList.map(video => video.id)
                : []
            }
            autoplay={false}
            setSelectedVideoIndex={setSelectedVideoIndex}
          />
        </CardComponent>
      </div>
    </div>
  )
}
