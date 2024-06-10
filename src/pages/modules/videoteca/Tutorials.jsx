import CardComponent from '../../../components/Card/Card'
import HeaderCardComponent from '../../../components/Card/HeaderCard'
import YouTubePlayer from '../../../components/Players/YoutubePlayer'
import NoContentComponent from '../../../components/NoContent'

const response = [
  {
    title: 'Cómo empezar con nuestra plataforma',
    url: 'https://www.google.com/',
  },
  {
    title: 'Configuración inicial de tu cuenta',
    url: 'https://www.google.com/',
  },
  {
    title: 'Navegación por el portal de aprendizaje',
    url: 'https://www.google.com/',
  },
  {
    title: 'Acceso y uso de materiales de estudio',
    url: 'https://www.google.com/',
  },
  {
    title: 'Cómo participar en foros y discusiones',
    url: 'https://www.google.com/',
  },
  {
    title: 'Realización de exámenes y evaluaciones',
    url: 'https://www.google.com/',
  },
]

export default function TutorialsPage() {
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
          title='Tutoriales'
          subtitle='Explora nuestros tutoriales detallados que te ayudarán a comprender mejor el sistema y sus aplicaciones.'
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
