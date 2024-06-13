import React, { useEffect, useState } from 'react'

const EintragNeuDatum = () => {
  
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, [setCurrentDate]);
  
  return (
    <div>
      <span className='grid grid-cols-1 h-16 border border-white px-8 my-2 rounded-md py-1'>
        <p className='text-sm font-semibold font-serif'>Eingegangen am</p> 
        <input id='datumNeu' defaultValue={currentDate} onChange={() => setCurrentDate()} type='date'/>
      </span>
    </div>
  )
}

export default EintragNeuDatum