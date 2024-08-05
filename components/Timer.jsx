import React, {useState, useEffect, useRef} from 'react'

const Timer = ({ isPopupOpen, setDauer }) => {

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const timerRef = useRef(null)
  const dauer = useRef(null)

  useEffect(() => {
    if (isPopupOpen) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => {
          let { hours, minutes, seconds } = prevTime;
          seconds += 1;
          if (seconds === 60) {
            seconds = 0;
            minutes += 1;
          }
          if (minutes === 60) {
            minutes = 0;
            hours += 1;
          }
          return { hours, minutes, seconds }
        })
      }, 1000)
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current)
  },[isPopupOpen])

  useEffect(() => {
    setDauer(formatTime(time))
  },[time])

  const formatTime = ({ hours, minutes, seconds }) => {
    const pad = num => String(num).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <div className='text-4xl font-serif'>{formatTime(time)}</div>
    </div>
  );
};

export default Timer