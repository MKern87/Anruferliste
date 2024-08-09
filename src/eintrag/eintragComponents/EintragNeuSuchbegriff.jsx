import React, {useRef} from 'react'

const EintragNeuSuchbegriff = ({ setFirmenname }) => {

  const firmenname = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Firmenname:</p>
      <input className='bg-slate-100 rounded' ref={firmenname} onChange={() => setFirmenname(firmenname.current.value)}></input>
    </div>
  )
}

export default EintragNeuSuchbegriff