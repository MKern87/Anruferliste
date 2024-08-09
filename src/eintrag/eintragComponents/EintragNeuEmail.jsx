import React, { useRef } from 'react'

const EintragNeuEmail = ({ setEmail }) => {

  const email = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>E-Mail adresse:</p>
      <input className='bg-slate-100 rounded' ref={email} onChange={() => setEmail(email.current.value)}></input>
    </div>
  )
}

export default EintragNeuEmail