import React, { useEffect, useRef, useState } from 'react'

const EintragNeuDatum = ({setEintragDatum}) => {
  
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])

  const eintragDatum = useRef('')

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, [setCurrentDate]);
  
  return (
    <div className='h-full border border-white px-4 mt-2 rounded-md pt-2'>
        <p className='text-sm font-semibold font-serif mb-4'>Eingegangen am</p> 
        <input ref={eintragDatum} id='datumNeu' defaultValue={currentDate} onChange={() => setEintragDatum(eintragDatum.current.value)} type='date'/>
    </div>
  )
}

export default EintragNeuDatum