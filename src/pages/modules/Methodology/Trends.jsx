import CardComponent from '../../../components/Card/Card'
import HeaderCardComponent from '../../../components/Card/HeaderCard'
import YouTubePlayer from '../../../components/Players/YoutubePlayer'
import NoContentComponent from '../../../components/NoContent'

const response = []

export default function TrendsPage() {
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
          title='Tendencias'
          subtitle='Explora las tendencias más recientes y relevantes que están moldeando el futuro de tu disciplina.'
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
