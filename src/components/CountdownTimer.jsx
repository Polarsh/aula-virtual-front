import { useEffect, useState } from 'react'

export default function CountdownTimerComponent({
  initialSeconds,
  onCountdownComplete,
}) {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1)
      }, 1000)

      return () => clearInterval(timerId)
    } else {
      onCountdownComplete()
    }
  }, [seconds, onCountdownComplete])

  const formatTime = totalSeconds => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':')
  }

  return (
    <div className='text-center p-4'>
      <div className='text-2xl'>{formatTime(seconds)}</div>
    </div>
  )
}
