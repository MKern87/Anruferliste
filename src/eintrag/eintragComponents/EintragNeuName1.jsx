import React, { useRef } from 'react'

const EintragNeuName1 = ({ setVorname }) => {

  const vorname = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Vorname Ansprechpartner:</p>
      <input className='bg-slate-100 rounded' ref={vorname} onChange={() => setVorname(vorname.current.value)}></input>
    </div>
  )
}

export default EintragNeuName1