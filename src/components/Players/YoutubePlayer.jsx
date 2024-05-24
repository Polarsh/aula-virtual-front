// src/components/YouTubePlayer.jsx

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className='flex justify-center items-center min-w-screen bg-gray-900'>
      <div className='w-full aspect-w-16 aspect-h-9'>
        <iframe
          className='w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title='YouTube video player'
          allow='fullscreen'></iframe>
      </div>
    </div>
  )
}

export default YouTubePlayer
