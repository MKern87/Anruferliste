import React, { useState, useEffect, useRef} from 'react'

const EintragNeuDatumRR = ({setDatumRueckruf}) => {


  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const datumRueckruf = useRef('')

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, [setCurrentDate]);
  
  return (
    <div className='h-full border border-white px-4 mt-2 rounded-md pt-2'>
        <p className='text-sm font-semibold font-serif mb-4'>Rückruf am</p> 
        <input ref={datumRueckruf} id='datumNeuRR' defaultValue={currentDate} onChange={() => setDatumRueckruf(datumRueckruf.current.value)} type='date'/>
    </div>
  )
}

export default EintragNeuDatumRR