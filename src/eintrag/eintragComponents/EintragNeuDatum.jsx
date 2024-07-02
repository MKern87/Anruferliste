import React, { useEffect, useRef, useState } from 'react'

const EintragNeuDatum = ({setEintragDatum}) => {
  
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])

  const eintragDatum = useRef('')

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, [setCurrentDate]);
  
  return (
    <div>
      <span className='grid grid-cols-1 h-16 border border-white px-8 my-2 rounded-md py-1'>
        <p className='text-sm font-semibold font-serif'>Eingegangen am</p> 
        <input ref={eintragDatum} id='datumNeu' defaultValue={currentDate} onChange={() => setEintragDatum(eintragDatum.current.value)} type='date'/>
      </span>
    </div>
  )
}

export default EintragNeuDatum