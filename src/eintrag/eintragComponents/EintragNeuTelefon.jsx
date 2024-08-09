import React, { useRef } from 'react'

const EintragNeuTelefon = ({ setTelefon }) => {

  const telefon = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
    <p className='text-sm font-semibold font-serif mb-2'>Telefonnummer:</p>
    <input className='bg-slate-100 rounded' ref={telefon} onChange={() => setTelefon(telefon.current.value)}></input>
  </div>
  )
}

export default EintragNeuTelefon