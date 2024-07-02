import React, { useState, useEffect, useRef} from 'react'

const EintragNeuDatumRR = ({setDatumRueckruf}) => {


  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const datumRueckruf = useRef('')

  useEffect(() => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  }, [setCurrentDate]);
  
  return (
    <div>
      <span className='grid grid-cols-1 h-16 border border-white px-8 my-2 rounded-md py-1'>
        <p className='text-sm font-semibold font-serif'>Rückruf gewünscht am</p> 
        <input ref={datumRueckruf} id='datumNeuRR' defaultValue={currentDate} onChange={() => setDatumRueckruf(datumRueckruf.current.value)} type='date'/>
      </span>
    </div>
  )
}

export default EintragNeuDatumRR