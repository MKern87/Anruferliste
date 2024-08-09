import React, { useRef } from 'react'

const EintragNeuStrasse = ({ setStrasse }) => {

  const strasse = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
    <p className='text-sm font-semibold font-serif mb-2'>Straßenname:</p>
    <input className='bg-slate-100 rounded' ref={strasse} onChange={() => setStrasse(strasse.current.value)}></input>
  </div>
  )
}

export default EintragNeuStrasse