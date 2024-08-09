import React, { useRef } from 'react'

const EintragNeuName2 = ({ setNachname }) => {

  const nachname = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
    <p className='text-sm font-semibold font-serif mb-2'>Nachname Ansprechpartner:</p>
    <input className='bg-slate-100 rounded' ref={nachname} onChange={() => setNachname(nachname.current.value)}></input>
  </div>
  )
}

export default EintragNeuName2