import CardComponent from '../../../components/Card/Card'
import HeaderCardComponent from '../../../components/Card/HeaderCard'
import YouTubePlayer from '../../../components/Players/YoutubePlayer'
import NoContentComponent from '../../../components/NoContent'

const response = [
  {
    title: 'Introducción a nuestra Metodología de Aprendizaje',
    url: 'https://www.google.com',
  },
  {
    title: 'Cómo Utilizar los Recursos de la Plataforma',
    url: 'https://www.google.com',
  },
  { title: 'Estrategias de Estudio Eficaces', url: 'https://www.google.com' },
  {
    title: 'Planificación y Organización del Tiempo de Estudio',
    url: 'https://www.google.com',
  },
  { title: 'Evaluaciones y Retroalimentación', url: 'https://www.google.com' },
  {
    title: 'Uso de Herramientas Interactivas en el Aprendizaje',
    url: 'https://www.google.com',
  },
]

export default function MethodologyPage() {
  const videoList = response

  const renderVideoList = videos => {
    return (
      <div className='mt-5 grid grid-cols-2 xl:grid-cols-3 gap-5'>
        {videos.map((video, index) => (
          <div key={index}>
            <YouTubePlayer videoId={video.url} />
            <div className='ml-1.5 text-base mt-2'>{video.title}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='space-y-10'>
      <CardComponent>
        <HeaderCardComponent
          title='Metodología'
          subtitle='Descubre cómo funciona nuestro sistema y los métodos que empleamos para garantizar tu aprendizaje.'
        />
        {videoList.length > 0 ? (
          renderVideoList(videoList)
        ) : (
          <NoContentComponent />
        )}
      </CardComponent>
    </div>
  )
}
