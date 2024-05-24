import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import YouTubePlayer from '../Players/YoutubePlayer'

export default function VideoControllerSliderComponent({
  videoIdList,
  setSelectedVideoIndex,
}) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    beforeChange: (current, next) => {
      if (videoIdList.length >= 2) {
        setSelectedVideoIndex(next)
      } else {
        setSelectedVideoIndex(0)
      }
    },
  }
  return (
    <>
      {videoIdList.length >= 2 ? (
        <div className='slider-container pb-5'>
          <Slider {...settings}>
            {videoIdList.map(videoId => (
              <div key={videoId}>
                <YouTubePlayer videoId={videoId} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <YouTubePlayer videoId={videoIdList[0]} />
      )}
    </>
  )
}
