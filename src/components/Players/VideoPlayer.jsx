// src/components/VideoPlayer.jsx

const VideoPlayer = ({ videoPath }) => {
  return (
    <div className='flex justify-center items-center min-w-screen bg-gray-900'>
      <video className='w-full max-w-screen' controls>
        <source src={videoPath} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
