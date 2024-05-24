import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import YouTubePlayer from '../Players/YoutubePlayer'

export default function VideoSliderComponent({ autoplay = true, videoIdList }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: { autoplay },
    speed: 500,
    autoplaySpeed: 2000,
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
