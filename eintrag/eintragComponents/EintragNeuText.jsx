import React, { useRef } from 'react'

const EintragNeuText = ({setAktuellerText}) => {

  const aktuellerText = useRef('')


  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Anliegen/Grund (kurzer Text)</p>
      <textarea className='w-[90%] h-52 text-sm bg-slate-100' ref={aktuellerText} id='textareaNeu' onChange={() => setAktuellerText(aktuellerText.current.value)}>
      </textarea>
    </div>
  )
}

export default EintragNeuText